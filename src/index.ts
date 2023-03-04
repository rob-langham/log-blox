import { WebSocketProvider } from "@ethersproject/providers";
import { BigNumber, Contract, Event, EventFilter } from "ethers";
import { GraphQLClient } from "graphql-request";
import { attempt, chunk, groupBy, mapValues, sortBy, sum, sumBy } from "lodash";
import { defer, from, mergeMap, Observable, of, Subject, take, timer } from "rxjs";

import {
  auditTime,
  bufferTime,
  concatAll,
  concatMap,
  filter,
  map,
  retry,
  retryWhen,
  share,
  switchMap,
} from "rxjs/operators";

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
      console.log("Persisting", persistanceActions.length, "entities");

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

function retryAndBackoff<T = any>(fn: () => Promise<T>): Observable<T> {
  return defer(() => fn()).pipe(
    mergeMap((result) => of(result)),
    retry({
      count: 5,
      delay: (_error, attempt: number) => timer(Math.pow(2, attempt) * 1000),
    })
  );
}

async function main() {
  await migrate();

  const { addresses } = config;
  const metadata = loadSchemaMetadata();

  const contractFilters = [...metadata].map((contractMetadata) => {
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
    // map of topics to event signatures
    const eventNames: Record<
      string,
      {
        signature: string;
        name: string;
      }
    > = Object.fromEntries(
      Object.entries(contract.filters)
        .filter(([eventName]) => eventName.includes("(")) // Keep events with arguments
        .map(([eventName, eventFilter]) => [
          (eventFilter as Function)().topics?.[0] as string,
          {
            signature: eventName,
            name: eventName.substring(0, eventName.indexOf("(")),
          },
        ])
    );

    // create an event filter for all events
    return {
      metadataKey: `${schema}.${contractName}`,
      contract,
      filters: {
        topics: [Object.keys(eventNames)],
        address: contract.address,
      } as EventFilter,
      contractMetadata,
      eventNames,
    } as const;
  });

  const head = await provider.getBlockNumber();
  const batchSize = 1e6;
  const batches$ = from(
    new Array(Math.ceil(head / batchSize))
      .fill(0)
      .map((_, i) => [i * batchSize, Math.min((i + 1) * batchSize, head)])
  );

  // orgainse contract filters by schema and contract name
  const contractFiltersBySchemaAndContract = mapValues(
    groupBy(contractFilters, (filter) => filter.metadataKey),
    0
  );

  // go through each batch of blocks one at a time, in order
  batches$
    .pipe(
      concatMap(async ([from, to]) => {
        console.log(`Querying logs for blocks: ${from} -> ${to}`);
        return retryAndBackoff(() =>
          Promise.all(
            contractFilters.map(
              async ({ filters, contract, metadataKey }) =>
                [metadataKey, await contract.queryFilter(filters, from, to)] as const
            )
          ).then((logs) => {
            console.log(
              `Retrieved ${sumBy(logs, (l) => l[1].length)} logs for blocks ${from} -> ${to}`
            );
            return logs.flatMap(([metadataKey, logs]) => logs.map((log) => ({ metadataKey, log })));
          })
        );
      }),
      concatAll(),
      map((logs) =>
        sortBy(logs, ({ log }) => BigInt(log.blockNumber) * BigInt(1e6) + BigInt(log.logIndex))
      ),
      concatMap(async (logs) => {
        logs.forEach(({ log, metadataKey }) => {
          const { contractMetadata, contract, filters, eventNames } =
            contractFiltersBySchemaAndContract[metadataKey];
          const { tableMetadata, contractName, schema } = contractMetadata;

          const eventName = eventNames[log.topics[0]];
          const eventArgs = contract.interface.decodeEventLog(
            eventName.signature,
            log.data,
            log.topics
          );

          //todo put this in the metadata
          const metadataByEvent = Object.fromEntries(
            tableMetadata.map((table) => [table.eventName, table])
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
      })
    )
    .subscribe();
}
