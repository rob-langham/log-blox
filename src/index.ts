import { StaticJsonRpcProvider, WebSocketProvider } from "@ethersproject/providers";
import { BigNumber, Contract, Event, EventFilter } from "ethers";
import { GraphQLClient } from "graphql-request";
import _ from "lodash";
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
  timer,
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
  retry,
  scan,
  share,
  skip,
  startWith,
  switchMap,
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

const providers = _.mapValues(config.rpcs, (rpc, network) => {
  rpc = process.env[network.toUpperCase().replace(/[^a-zA-Z]/g, "_") + "_RPC_URL"] ?? rpc;

  if (rpc.startsWith("ws")) {
    return new WebSocketProvider(rpc);
  } else if (rpc.startsWith("http")) {
    return new StaticJsonRpcProvider(rpc);
  } else {
    throw new Error("rpc must start with http or ws");
  }
});

const root$ = from(_.keys(config.rpcs)).pipe(
  mergeMap((network) => {
    {
      const restart$ = new Subject<void>();
      const restart = () => restart$.next(void 0);

      const dataService = new DataService(network);

      const provider = providers[network];

      return restart$.pipe(
        startWith(void 0),
        switchMap(
          (__, iteration) =>
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
                    filter((__, i) => i % 30 === 0),
                    timeInterval(),
                    skip(1),
                    tap((interval) => (averageBlockTime = interval.interval / 1e3 / 30)),
                    tap(() =>
                      console.log("averageBlockTime", parseFloat(averageBlockTime.toFixed(4)))
                    )
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

                console.log(
                  "current chain head:",
                  startHeadBlock,
                  "autoconfirmed:",
                  autoconfimedBlock
                );

                const possibleReorg$: Observable<ReorgNotification> = merge(
                  defer(async () => console.log("possibleReorg$ subscription started")).pipe(
                    ignoreElements()
                  ),
                  blockConfirmer
                ).pipe(
                  mergeMap(([blockNumber, blockHash]) => {
                    if (blockNumber < autoconfimedBlock) {
                      return EMPTY;
                    } else {
                      console.log(
                        "checking validity of block",
                        blockNumber,
                        "against hash",
                        blockHash
                      );
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
                              (checkedBlockNumber) =>
                                checkedBlockNumber <= blockNumber + confirmations
                            ),
                            concatWith(
                              defer(() => dataService.confirmBlock(blockHash, blockNumber))
                            )
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

                type BatchableUpsertAction = {
                  dedupe: string;
                  type: "batchable";
                  schema: string;
                  table: string;
                  object: any;
                  constraint?: string;
                };

                type CallbackPersistanceAction = {
                  dedupe: string;
                  type: "callback";
                  callback: () => Promise<void>;
                };

                const persistor = new Subject<BatchableUpsertAction | CallbackPersistanceAction>();

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
                      from(
                        _.chunk(
                          // useful when reindexing
                          actions,
                          1000
                        )
                      )
                    ),
                    filter((actions) => actions.length > 0),
                    concatMap((persistanceActions) => {
                      console.log("Persisting", persistanceActions.length, "entities");

                      const mutationsByType = _.groupBy(persistanceActions, "type");

                      return from(Object.keys(mutationsByType)).pipe(
                        concatMap((type) => {
                          const actions = mutationsByType[type];
                          if (type === "batchable") {
                            return persistBatches(actions as BatchableUpsertAction[]);
                          } else if (type === "callback") {
                            return from(actions as CallbackPersistanceAction[]).pipe(
                              concatMap((action) => action.callback())
                            );
                          }

                          return EMPTY;
                        })
                      );

                      async function persistBatches(
                        persistanceActions: BatchableUpsertAction[]
                      ): Promise<any> {
                        const entityGroupedActions = _.groupBy(
                          persistanceActions,
                          (action) =>
                            // public schema lexically first
                            (action.schema === "public" ? "!" : "#") +
                            action.schema +
                            "." +
                            action.table
                        );

                        //public schema first as other entities will depend on it
                        const entityActions = _.sortBy(Object.entries(entityGroupedActions), "0");

                        console.log(
                          "Persisting",
                          ..._.map(entityActions, ([key]) => key.substring(1))
                        );

                        for (const [, actions] of entityActions) {
                          const { schema, table } = actions[0];
                          await dataService.upsertRecords(
                            schema,
                            table,
                            actions.map(_.property("object"))
                          );
                        }
                      }
                    })
                  )
                );

                const { addresses } = config;
                const metadata = loadSchemaMetadata();

                const contractFilters = [...metadata]
                  .filter(
                    // filter out contracts that are not deployed on the current network
                    ({ schema, contractName }) => addresses?.[schema]?.[contractName]?.[network]
                  )
                  .map((contractMetadata) => {
                    const { contractName, schema } = contractMetadata;

                    const contract = new Contract(
                      addresses[schema][contractName][network],
                      contractMetadata.abis
                    ).connect(provider);

                    console.log(
                      "Processing contract",
                      schema,
                      contractName,
                      addresses[schema][contractName][network]
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
                        .map((__, i) => [i * batchSize, Math.min((i + 1) * batchSize)])
                        .map(([start, end]) => [
                          start + lastPersistedBlockNumber,
                          Math.min(startHeadBlock, end + lastPersistedBlockNumber),
                        ])
                    )
                  )
                );

                // orgainse contract filters by schema and contract name
                const contractFiltersBySchemaAndContract = _.mapValues(
                  _.groupBy(contractFilters, (filter) => filter.metadataKey),
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
                      console.log("Received event:", metadataKey, args[args.length - 1]);
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
                  concatMap(([from, to]) => {
                    console.log(`Querying logs for blocks: ${from} -> ${to} on ${network}`);
                    return retryAndBackoff(
                      async () =>
                        await Promise.all(
                          contractFilters.map(
                            async ({ filters, contract, metadataKey }) =>
                              [metadataKey, await contract.queryFilter(filters, from, to)] as const
                          )
                        ).then((logs) => {
                          console.log(
                            `Retrieved ${_.sumBy(
                              logs,
                              (l) => l[1].length
                            )} logs for blocks ${from} -> ${to}`
                          );
                          return logs.flatMap(([metadataKey, logs]) =>
                            logs.map((log) => ({ metadataKey, log }))
                          );
                        })
                    );
                  }),
                  map((logs) => _.sortBy(logs, (log) => sortIndexOf(log))),
                  tap(() => {
                    persistor.next({
                      dedupe: "autoconfirm",
                      type: "callback",
                      callback: async () => {
                        console.log("Autoconfirming blocks before", autoconfimedBlock);
                        await dataService.confirmBlocksBefore(autoconfimedBlock);
                      },
                    });
                  }),
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
                                // blocks are persisted first
                                persistor.next({
                                  dedupe: "autoconfirm",
                                  type: "callback",
                                  callback: async () => {
                                    console.log("Autoconfirming blocks before", autoconfimedBlock);
                                    await dataService.confirmBlocksBefore(autoconfimedBlock);
                                  },
                                });
                                historyComplete$.complete();
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
                          type: "batchable",
                          schema: "public",
                          table: "blocks",
                          object: { id: log.blockHash, number: log.blockNumber, confirmed: false },
                        });

                        blockConfirmer.next([log.blockNumber, log.blockHash]);

                        const bigNumberToString = (value: any) => {
                          return BigNumber.isBigNumber(value) ? value.toBigInt() : value;
                          // return BigNumber.isBigNumber(value) ? value.toBigInt().toString() : value;
                          // return value;
                        };

                        persistor.next({
                          dedupe: log.blockHash + log.logIndex,
                          type: "batchable",
                          schema,
                          table: mapper.tableName,
                          object: Object.fromEntries([
                            [
                              "id",
                              (BigInt(log.blockNumber) * BigInt(1e3)).toString() + log.logIndex,
                            ],
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
                              BigInt(log.blockNumber) * BigInt(1e5) + BigInt(log.logIndex),
                            ],
                          ]),
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
    }
  })
);

(async function () {
  await migrate();
  root$.subscribe();
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
