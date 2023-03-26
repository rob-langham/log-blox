import { StaticJsonRpcProvider, WebSocketProvider } from "@ethersproject/providers";
import { BigNumber, Contract, Event, EventFilter } from "ethers";
import { GraphQLClient } from "graphql-request";
import _ from "lodash";
import {
  defer,
  EMPTY,
  firstValueFrom,
  from,
  merge,
  mergeMap,
  Observable,
  ObservableInput,
  of,
  ReplaySubject,
  Subject,
  timer,
} from "rxjs";

import {
  concatAll,
  concatMap,
  concatWith,
  filter,
  ignoreElements,
  map,
  retry,
  scan,
  share,
  startWith,
  switchMap,
  take,
  takeWhile,
  tap,
} from "rxjs/operators";

//TODO move to a config util
import { config, loadSchemaMetadata, migrate } from "./bin/generate-schemas";
import { createPersistor } from "./services/persistor.service";
import { Logger } from "./logger";
import { DataService } from "./services/data.service";
import { reorgNotifier } from "./services/reorg-notifier.service";
import { blocks$ } from "./services/blocks";

export const logger = new Logger();

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
    logger.info(`Running setup for ${network}...`);
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
            function subscribe(src$: Pick<Observable<any>, "subscribe">) {
              const sub = src$.subscribe();
              subscriptions.push(() => sub.unsubscribe());
            }

            main().catch((err) => {
              console.error(err);
              restart();
            });

            async function main() {
              console.log("starting iteration", iteration);

              const historyComplete$ = new ReplaySubject(1);

              // older blocks may not have been confirmed so it's quicker to delete them and start fresh from that point
              //TODO this should be done in a tx that commits when the new blocks are saved
              await dataService.deleteUnconfirmedBlocks();
              console.log("deleted unconfirmed blocks");

              const lastPersistedBlockNumber = await dataService.getLatestBlock();
              console.log("lastPersistedBlockNumber", lastPersistedBlockNumber);

              const { confirmBlock, reorgs$ } = reorgNotifier(
                blocks$(provider),
                dataService,
                provider
              );

              subscribe(reorgs$);

              const persistor = createPersistor(dataService);

              subscribe(persistor);

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
              const rangeSize =
                (await firstValueFrom(blocks$(provider))) - lastPersistedBlockNumber;
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

                      persistor.persist({
                        dedupe: `${log.blockNumber}`,
                        type: "batchable",
                        schema: "public",
                        table: "blocks",
                        object: { id: log.blockHash, number: log.blockNumber, confirmed: false },
                      });

                      confirmBlock([log.blockNumber, log.blockHash]);

                      const bigNumberToString = (value: any) => {
                        return BigNumber.isBigNumber(value) ? value.toBigInt() : value;
                        // return BigNumber.isBigNumber(value) ? value.toBigInt().toString() : value;
                        // return value;
                      };

                      persistor.persist({
                        dedupe: log.blockHash + log.logIndex,
                        type: "batchable",
                        schema,
                        table: mapper.tableName,
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
  })
);

(async function () {
  logger.info("Starting migration");
  await migrate();
  logger.info("Migration complete");
  logger.info("Starting main loop for networks", Object.keys(config.rpcs).join(", "));
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
