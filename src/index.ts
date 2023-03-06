import { WebSocketProvider } from "@ethersproject/providers";
import { BigNumber, Contract, Event, EventFilter } from "ethers";
import { GraphQLClient } from "graphql-request";
import { chunk, groupBy, head, mapValues, sortBy, sumBy } from "lodash";
import {
  defer,
  EMPTY,
  from,
  merge,
  mergeMap,
  Observable,
  of,
  ReplaySubject,
  Subject,
  take,
  timer,
} from "rxjs";

import {
  auditTime,
  bufferTime,
  combineLatestWith,
  concatAll,
  concatMap,
  concatWith,
  filter,
  ignoreElements,
  map,
  retry,
  scan,
  share,
  skip,
  startWith,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
  timeInterval,
} from "rxjs/operators";

//TODO move to a config util
import { config, loadSchemaMetadata, migrate } from "./bin/generate-schemas";
import { DataService } from "./services/DataService";

type KeyedEvent = {
  metadataKey: string;
  log: Event;
};

function sortIndexOf(event: KeyedEvent) {
  return BigInt(event.log.blockNumber) * BigInt(1e6) + BigInt(event.log.logIndex);
}

const provider = new WebSocketProvider("ws://192.168.0.124:8548");

const restart$ = new Subject<void>();
const restart = () => restart$.next(void 0);

const dataService = new DataService();

const main$ = restart$.pipe(
  startWith(void 0),
  switchMap(
    (_, iteration) =>
      new Observable(() => {
        const subscriptions: (() => void)[] = [];
        //a function to manage nested subscriptions
        function subscribe(src$: Observable<any>) {
          const sub = src$.subscribe();
          subscriptions.push(() => sub.unsubscribe());
        }

        main().catch((err) => {
          console.error(err);
          restart();
        });

        async function main() {
          console.log("starting iteration", iteration);

          // older blocks may not have been confirmed so it's quicker to delete them and start fresh from that point
          //TODO this should be done in a tx that commits when the new blocks are saved
          await dataService.deleteUnconfirmedBlocks();
          console.log("deleted unconfirmed blocks");
          const lastPersistedBlockNumber = await dataService.getLatestBlock();
          console.log("lastPersistedBlockNumber", lastPersistedBlockNumber);

          const client = new GraphQLClient("http://localhost:8080/v1/graphql");
          client.setHeader("x-hasura-admin-secret", "myadminsecretkey");

          const savedBlocks = new Set<string>();
          savedBlocks.add("");

          const blocks$ = new Observable<number>((subscriber) => {
            console.log("blocks$ subscription started");
            const onBlock = (blockNumber: number) => {
              // console.log("block", blockNumber);
              subscriber.next(blockNumber);
            };
            provider.on("block", onBlock);
            return () => provider.off("block", onBlock);
          }).pipe(share());

          const blockConfirmer = new Subject<[number, string]>();
          const confirmations = 70;
          let averageBlockTime = 12; // mainnet default

          //determines average block time
          subscribe(
            blocks$.pipe(
              filter((_, i) => i % 30 === 0),
              timeInterval(),
              skip(1),
              tap((interval) => (averageBlockTime = interval.interval / 1e3 / 30)),
              tap(() => console.log("averageBlockTime", parseFloat(averageBlockTime.toFixed(4))))
            )
          );

          type ReorgNotification = {
            blockNumber: number;
            oldBlockHash: string;
            newBlockHash: string;
          };

          const historyComplete$ = new ReplaySubject(1);
          const startHeadBlock = await provider.getBlockNumber();
          const autoconfimedBlock = startHeadBlock - confirmations;

          console.log("current chain head:", startHeadBlock, "autoconfirmed:", autoconfimedBlock);

          const possibleReorg$: Observable<ReorgNotification> = merge(
            defer(async () => console.log("possibleReorg$ subscription started")).pipe(
              ignoreElements()
            ),
            blockConfirmer
          ).pipe(
            mergeMap(([blockNumber, blockHash]) => {
              if (blockNumber < autoconfimedBlock) {
                console.log(
                  "block",
                  blockNumber,
                  "is autoconfirmed as it's older than",
                  autoconfimedBlock
                );
                return EMPTY;
              } else {
                console.log("checking validity of block", blockNumber, "against hash", blockHash);
                return new Observable<ReorgNotification>((subscriber) => {
                  const sub = blocks$
                    .pipe(
                      // check every 5 blocks to see if the block has been reorged
                      // when there is a backlog of blocks this might just run once
                      auditTime(averageBlockTime * 1e3 * 5),
                      startWith(provider.blockNumber),
                      mergeMap(async (headBlock: number) => {
                        const block = await provider.getBlock(blockNumber);

                        if (block.hash === blockHash) {
                          return headBlock;
                        } else {
                          subscriber.next({
                            blockNumber,
                            oldBlockHash: blockHash,
                            newBlockHash: block.hash,
                          });
                          throw new Error("reorg");
                        }
                      }),
                      takeWhile(
                        (checkedBlockNumber) => checkedBlockNumber <= blockNumber + confirmations
                      ),
                      concatWith(defer(() => dataService.confirmBlock(blockHash, blockNumber)))
                    )
                    .subscribe({
                      complete: () => {
                        // not called when error is thrown
                        subscriber.complete();
                      },
                    });

                  return () => sub.unsubscribe();
                });
              }
            }, 5)
          );

          subscribe(
            possibleReorg$.pipe(
              tap((reorg) => {
                console.log("reorg", reorg);
              })
            )
          );

          const persistor = new Subject<{
            dedupe: string;
            mutation: string;
            object: any;
            constraint?: string;
          }>();

          subscribe(
            persistor.pipe(
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
          );

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

          const batchSize = 1e6;
          const rangeSize = startHeadBlock - lastPersistedBlockNumber;
          const batches$ = of(1).pipe(
            mergeMap(() => provider.getBlockNumber()),
            switchMap((startHeadBlock) =>
              from(
                new Array(Math.ceil(rangeSize / batchSize))
                  .fill(0)
                  .map((_, i) => [i * batchSize, Math.min((i + 1) * batchSize)])
                  .map(([start, end]) => [
                    start + lastPersistedBlockNumber,
                    Math.min(startHeadBlock, end + lastPersistedBlockNumber),
                  ])
              )
            )
          );

          // orgainse contract filters by schema and contract name
          const contractFiltersBySchemaAndContract = mapValues(
            groupBy(contractFilters, (filter) => filter.metadataKey),
            0
          );

          const liveEvents$: Observable<KeyedEvent> = new Observable<{
            metadataKey: string;
            log: Event;
          }>((subscriber) => {
            console.log("Subscribing to live events");
            const onUnsubscribe: Function[] = [];

            contractFilters.map(async ({ filters, contract, metadataKey }) => {
              function eventHandler(...args: any[]) {
                console.log("Received event:", args[args.length - 1]);
                subscriber.next({
                  metadataKey,
                  log: args[args.length - 1],
                });
              }
              return [
                metadataKey,
                contract.on(filters, eventHandler),
                onUnsubscribe.push(() => contract.off(filters, eventHandler)),
              ] as const;
            });

            return () => {
              onUnsubscribe.forEach((fn) => fn());
            };
          }).pipe(
            (liveEvents$) =>
              new Observable<{
                metadataKey: string;
                log: Event;
              }>((subscriber) => {
                let cachedEvents: KeyedEvent[] | null = [];
                const subs = [
                  historyComplete$.subscribe({
                    complete: () => {
                      cachedEvents!.forEach((event) => subscriber.next(event));
                      cachedEvents = null;
                      console.log("Disabling live event cache");
                    },
                  }),
                  liveEvents$.subscribe({
                    next: (event) => {
                      if (cachedEvents) {
                        cachedEvents.push(event);
                      } else {
                        subscriber.next(event);
                      }
                    },
                  }),
                ];

                return () => {
                  subs.forEach((sub) => sub.closed || sub.unsubscribe());
                };
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
                  return logs.flatMap(([metadataKey, logs]) =>
                    logs.map((log) => ({ metadataKey, log }))
                  );
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
          subscribe(
            merge(
              liveEvents$,
              // wait 30 seconds before starting to query historic events
              // this is to ensure that the live events are subscribed to first
              // which will prevent any events from being missed
              startUpDelay().pipe(
                switchMap(() =>
                  historicEvents$.pipe(
                    // essentially waits for historicEvents$ to complete
                    concatWith(
                      of(1).pipe(
                        tap(() => {
                          dataService.confirmBlocksBefore(autoconfimedBlock);
                          historyComplete$.next(provider.blockNumber);
                        }),
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
                  const { tableMetadata, schema } = contractMetadata;

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
                    object: { id: log.blockHash, number: log.blockNumber, confirmed: false },
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
                })
              )
          );
        }

        return () => {
          subscriptions.forEach((sub) => sub());
        };
      })
  )
);

(async function () {
  // await migrate();
  main$.subscribe();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});

function retryAndBackoff<T = any>(fn: () => Promise<T>): Observable<T> {
  return defer(() => fn()).pipe(
    mergeMap((result) => of(result)),
    retry({
      count: 5,
      delay: (_error, attempt: number) => timer(Math.pow(2, attempt) * 1000),
    })
  );
}
