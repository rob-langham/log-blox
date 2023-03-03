import { WebSocketProvider } from "@ethersproject/providers";
import { BigNumber, Contract, Event } from "ethers";
import { gql, GraphQLClient } from "graphql-request";
import { chunk, groupBy } from "lodash";
import {
  catchError,
  concat,
  delay,
  from,
  interval,
  merge,
  mergeMap,
  Observable,
  of,
  Subject,
  switchMap,
  take,
  tap,
  timer,
} from "rxjs";

import { auditTime, bufferTime, concatMap, filter, map, share } from "rxjs/operators";

//TODO move to a config util
import { config, loadSchemaMetadata, migrate } from "./bin/generate-schemas";

const client = new GraphQLClient("http://localhost:8080/v1/graphql");
client.setHeader("x-hasura-admin-secret", "myadminsecretkey");

const provider = new WebSocketProvider("ws://192.168.0.124:8548");

const savedBlocks = new Set<string>();
savedBlocks.add("");

const blocks$ = new Observable<number>((subscriber) => {
  const onBlock = (blockNumber: number) => {
    subscriber.next(blockNumber);
  };
  provider.on("block", onBlock);
  return () => provider.off("block", onBlock);
}).pipe(share());

const blockConfirmer = new Subject<[number, string]>();
const confirmations = 70;
const averageBlockTime = 15;

const possibleReorg$: Observable<{
  blockNumber: number;
  oldBlockHash: string;
  newBlockHash: string;
}> = blockConfirmer.pipe(
  mergeMap(([blockNumber, blockHash]) =>
    blocks$.pipe(
      take(confirmations + 1),
      auditTime(averageBlockTime * 1e3 * 5),
      mergeMap(async (headBlock: number) => {
        return headBlock - blockNumber > confirmations * 2
          ? null
          : provider.getBlock(blockNumber).then((block) => {
              if (block.hash === blockHash) {
                return null;
              } else {
                return {
                  blockNumber,
                  oldBlockHash: blockHash,
                  newBlockHash: block.hash,
                };
              }
            });
      }),
      filter(Boolean)
    )
  )
);

possibleReorg$.subscribe((reorg) => {
  console.log("reorg", reorg);
});

const digester = new Subject<{
  dedupe: string;
  mutation: string;
  object: any;
  constraint?: string;
}>();

digester
  .pipe(
    bufferTime(1000),
    map(
      (actions) =>
        actions.reduce(
          (acc, action) => {
            if (!acc.dedupe.has(action.dedupe)) {
              acc.dedupe.add(action.dedupe);
              acc.array.push(action);
            }
            return acc;
          },
          { array: [] as typeof actions, dedupe: new Set() }
        ).array
    ),
    mergeMap((actions) =>
      // ensures blocks are persisted before other actions
      from([
        actions.filter((action) => action.mutation === "insert_blocks"),
        ...chunk(
          // useful when reindexing
          actions.filter((action) => action.mutation !== "insert_blocks"),
          1000
        ),
      ])
    ),
    filter((actions) => actions.length > 0),
    concatMap((persistanceActions) => {
      const persistanceActionsByTable = groupBy(persistanceActions, "mutation");
      const params: string[] = [];
      const variables: any = {};
      const mutations: string[] = [];

      for (const mutation in persistanceActionsByTable) {
        const actions = persistanceActionsByTable[mutation];
        const mutationName = mutation.replace("insert_", "");
        const mutationArgs = actions.map((action) => action.object);
        const mutationConstraint = actions[0].constraint;
        variables[`objects_${mutationName}`] = mutationArgs;
        params.push(`$objects_${mutationName}: [${mutationName}_insert_input!]!`);
        const mutationQuery = `
          ${mutation}(
            objects: $objects_${mutationName}
            ${mutationConstraint ? `, on_conflict: ${mutationConstraint}` : ""}
          ) {
            affected_rows
          }
        `;
        mutations.push(mutationQuery);
      }

      return client.request(
        `
          mutation (${params.join(", ")}) {
            ${mutations.join("\n")}
          }
        `,
        variables
      );
    })
  )
  .subscribe();

main().catch(console.error);

async function main() {
  await migrate();

  const { addresses } = config;
  const metadata = loadSchemaMetadata();

  for (const contractMetadata of metadata) {
    const { tableMetadata, contractName, schema } = contractMetadata;

    const contract = new Contract(
      addresses[schema][contractName]["arbitrum"],
      contractMetadata.abis
    ).connect(provider);

    console.log(
      "Processing contract",
      schema,
      contractName,
      addresses[schema][contractName]["arbitrum"]
    );

    const metadataByEvent = Object.fromEntries(
      tableMetadata.map((table) => [table.eventName, table])
    );

    // map of topics to event signatures
    const eventNames: Record<
      string,
      {
        signature: string;
        name: string;
        topic0: string;
      }
    > = Object.fromEntries(
      Object.entries(contract.filters)
        .filter(([eventName]) => eventName.includes("(")) // Keep events with arguments
        .map(([eventName, eventFilter]) => [
          (eventFilter as Function)().topics?.[0] as string,
          {
            signature: eventName,
            name: eventName.substring(0, eventName.indexOf("(")),
            topic0: (eventFilter as Function)().topics?.[0] as string,
          },
        ])
    );

    // create an event filter for all events
    const all = {
      topics: [Object.keys(eventNames)],
      address: contract.address,
    };

    console.log("Processing contract preparing batches", contractName);

    const head = await provider.getBlockNumber();
    const batchSize = 1e6;
    const batches$ = from(
      new Array(Math.ceil(head / batchSize))
        .fill(0)
        .map((_, i) => [i * batchSize, Math.min((i + 1) * batchSize, head)])
    );

    console.log("Processing contract", contractName, "upto", head);
    batches$
      .pipe(
        concatMap(async ([from, to]) => {
          console.log("Processing blocks", from, to, "of", schema + "." + contractName);
          await contract.queryFilter(all, from, to).then((logs: Event[]) => {
            console.log("Received logs", logs.length);
            logs.forEach((log) => {
              const eventName = eventNames[log.topics[0]];
              const eventArgs = contract.interface.decodeEventLog(
                eventName.signature,
                log.data,
                log.topics
              );
              const mapper = metadataByEvent[eventName.name];

              digester.next({
                dedupe: `${log.blockNumber}`,
                mutation: "insert_blocks",
                object: { id: log.blockHash, number: log.blockNumber },
                constraint: `{ constraint: blocks_pkey }`,
              });

              blockConfirmer.next([log.blockNumber, log.blockHash]);

              const bigNumberToString = (value: any) => {
                return BigNumber.isBigNumber(value) ? value.toBigInt().toString() : value;
              };

              digester.next({
                dedupe: log.blockHash + log.logIndex,
                mutation: `insert_${schema}_${mapper.tableName}`,
                object: Object.fromEntries([
                  ["id", (BigInt(log.blockNumber) * BigInt(1e3)).toString() + log.logIndex],
                  ...mapper.fields.map(
                    (field) =>
                      [
                        field.columnName,
                        bigNumberToString(
                          field.eventArgsPath.reduce((acc, key) => acc[key], eventArgs)
                        ),
                      ] as [string, any]
                  ),
                  ["blockHash", log.blockHash],
                  ["transactionHash", log.transactionHash],
                  ["logIndex", log.logIndex],
                  [
                    "sortIndex",
                    (BigInt(log.blockNumber) * BigInt(1e5) + BigInt(log.logIndex)).toString(),
                  ],
                ]),
                constraint: `{ constraint: ${mapper.tableName}_pkey }`,
              });
            });
          });
        })
      )
      .subscribe();
  }
}
