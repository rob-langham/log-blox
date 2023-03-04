import { WebSocketProvider } from "@ethersproject/providers";
import { BigNumber, Contract, Event, EventFilter } from "ethers";
import { GraphQLClient } from "graphql-request";
import {
  attempt,
  chunk,
  delay,
  groupBy,
  mapValues,
  sortBy,
  sortedIndex,
  sortedIndexOf,
  sum,
  sumBy,
} from "lodash";
import {
  defer,
  from,
  mergeMap,
  Observable,
  of,
  merge,
  ReplaySubject,
  Subject,
  take,
  timer,
  EMPTY,
  ObservableInput,
} from "rxjs";

import {
  auditTime,
  bufferTime,
  concatAll,
  concatMap,
  concatWith,
  filter,
  ignoreElements,
  map,
  mergeScan,
  retry,
  retryWhen,
  scan,
  share,
  skip,
  switchMap,
  tap,
} from "rxjs/operators";

//TODO move to a config util
import { config, loadSchemaMetadata, migrate } from "./bin/generate-schemas";

const client = new GraphQLClient("http://localhost:8080/v1/graphql");
client.setHeader("x-hasura-admin-secret", "myadminsecretkey");

const provider = new WebSocketProvider("ws://192.168.0.124:8548");

const savedBlocks = new Set<string>();
savedBlocks.add("");

type KeyedEvent = {
  metadataKey: string;
  log: Event;
};

function sortIndexOf(event: KeyedEvent) {
  return BigInt(event.log.blockNumber) * BigInt(1e6) + BigInt(event.log.logIndex);
}

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

const persistor = new Subject<{
  dedupe: string;
  mutation: string;
  object: any;
  constraint?: string;
}>();

persistor
  .pipe(
    bufferTime(1000),
    map((actions) => {
      const array = actions.reduce(
        (acc, action) => {
          if (!acc.dedupe.has(action.dedupe)) {
            acc.dedupe.add(action.dedupe);
            acc.array.push(action);
          }
          return acc;
        },
        { array: [] as typeof actions, dedupe: new Set() }
      ).array;

      if (array.length != actions.length) {
        console.log("Deduped", actions.length - array.length, "actions");
      }

      return array;
    }),
    mergeMap((actions) =>
      // ensures blocks are persisted before other actions
      from([
        // a necessary evil to ensure blocks are persisted before other actions
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

  /**
   * Thoughts:
   *
   * Live events:
   *   1. Query historic confirmed blocks first
   *   2. Start listening for live events at the start
   *   3. Query unconfirmed blocks
   *   4. Wait for n blocks to be received before querying unconfirmed events
   *      - Or when historic queries have caught up, whichever is later
   *      - Use this to ensure there isn't a race condition between the two
   *      - Make the delay configurable, so that it can be set to 0 for testing
   *      - This will also ensure that the unconfirmed events are processed in the correct order
   *
   * Reorgs:
   *  1. When a reorg is detected, remove all blocks from the reorged blocks onwards
   *     - This will also remove all events from the reorged blocks onwards as it should cascade
   *  2. Stop listening for live events for a short period of time
   *  3. Cancel all pending persistance queries
   *  4. Removed events should be a trigger for reorg detection
   *  5. mutable custom entities need to be restored from the last confirmed block
   *     - This is to ensure that the custom entities are in a consistent state
   *
   * Custom entities:
   *   1. Custom entities need to be able to be restored from the last confirmed block
   *   2. Events received out of order should error with a check contraint
   *   3. Custom entities need to be created on the fly, with an archive table
   *
   *
   */

  const historyComplete$ = new Subject();

  const liveEvents$: Observable<KeyedEvent> = new Observable<{
    metadataKey: string;
    log: Event;
  }>((subscriber) => {
    console.log("Subscribing to live events");
    contractFilters.map(
      async ({ filters, contract, metadataKey }) =>
        [
          metadataKey,
          contract.on(filters, (...args) => {
            console.log("Received event:", args[args.length - 1]);
            subscriber.next({
              metadataKey,
              log: args[args.length - 1],
            });
          }),
        ] as const
    );
  }).pipe(
    (liveEvents$) =>
      new Observable<{
        metadataKey: string;
        log: Event;
      }>((subscriber) => {
        let cachedEvents: KeyedEvent[] | null = [];
        historyComplete$.subscribe({
          complete: () => {
            cachedEvents!.forEach((event) => subscriber.next(event));
            cachedEvents = null;
            console.log("Disabling live event cache");
          },
        });
        liveEvents$.subscribe({
          next: (event) => {
            if (cachedEvents) {
              cachedEvents.push(event);
            } else {
              subscriber.next(event);
            }
          },
        });
      })
  );

  const historicEvents$: Observable<KeyedEvent> = batches$.pipe(
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
    map((logs) => sortBy(logs, (log) => sortIndexOf(log))),
    concatMap((logs) => from(logs))
  );

  const startUpDelay = () => {
    if (process.env.MODE?.toLowerCase() === "dev") {
      return of(1).pipe(tap(() => console.log("Not delaying startup")));
    }

    return timer(30e3);
  };
  // go through each batch of blocks one at a time, in order
  merge(
    liveEvents$,
    // wait 30 seconds before starting to query historic events
    // this is to ensure that the live events are subscribed to first
    // which will prevent any events from being missed
    startUpDelay().pipe(
      switchMap(() =>
        historicEvents$.pipe(
          concatWith(
            of(1).pipe(
              tap(() => historyComplete$.complete()),
              ignoreElements()
            )
          )
        )
      )
    )
  )
    .pipe(
      scan((acc, event) => {
        if (!acc || sortIndexOf(acc) < sortIndexOf(event)) {
          return event;
        } else if (acc) {
          console.log("Event recieved out of order:", event);
        }
        return null;
      }, null as null | KeyedEvent),
      filter((event) => event !== null),
      map((event) => event!)
    )
    .pipe(
      concatMap(async ({ log, metadataKey }) => {
        const { contractMetadata, contract, eventNames } =
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

        persistor.next({
          dedupe: `${log.blockNumber}`,
          mutation: "insert_blocks",
          object: { id: log.blockHash, number: log.blockNumber },
          constraint: `{ constraint: blocks_pkey }`,
        });

        blockConfirmer.next([log.blockNumber, log.blockHash]);

        const bigNumberToString = (value: any) => {
          return BigNumber.isBigNumber(value) ? value.toBigInt().toString() : value;
        };

        persistor.next({
          dedupe: log.blockHash + log.logIndex,
          mutation: `insert_${schema}_${mapper.tableName}`,
          object: Object.fromEntries([
            ["id", (BigInt(log.blockNumber) * BigInt(1e3)).toString() + log.logIndex],
            ...mapper.fields.map(
              (field) =>
                [
                  field.columnName,
                  bigNumberToString(field.eventArgsPath.reduce((acc, key) => acc[key], eventArgs)),
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
      })
    )
    .subscribe();
}
