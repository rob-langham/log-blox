import { WebSocketProvider } from "@ethersproject/providers";
import { Contract, Event } from "ethers";
import { gql, GraphQLClient } from "graphql-request";
import {
  tap,
  catchError,
  concat,
  mergeMap,
  Observable,
  Subject,
  timer,
  delay,
  switchMap,
  interval,
  take,
} from "rxjs";

import { filter } from "rxjs/operators";
import { createMapperMetaDataFromAbi } from "./tools/schema-generator";

const client = new GraphQLClient("http://localhost:8080/v1/graphql");
client.setHeader("x-hasura-admin-secret", "myadminsecretkey");

const provider = new WebSocketProvider("ws://192.168.0.124:8548");

const contangoYieldAbi: any = require("../abis/ContangoYield.json");

const contangoYield = new Contract(
  "0x30E7348163016B3b6E1621A3Cb40e8CF33CE97db",
  contangoYieldAbi
).connect(provider);

console.log("Listening for events...", "\n");

type MapperMetadata = ReturnType<typeof createMapperMetaDataFromAbi>[number];
const mapperMetadata: Record<MapperMetadata["eventName"], MapperMetadata> = Object.fromEntries(
  createMapperMetaDataFromAbi(contangoYieldAbi).map((meta) => [meta.eventName, meta] as const)
);

// console.dir(mapperMetadata, { depth: 5 });
// process.exit(0);

const eventNames: Record<string, string> = Object.entries(contangoYield.filters)
  .filter(([eventName]) => eventName.includes("(")) // Keep events with arguments
  .map(([eventName, eventFilter]) => [(eventFilter as Function)().topics?.[0] as string, eventName])
  .reduce(
    (acc, [topic, eventName]) => ({
      ...acc,
      [topic]: eventName,
    }),
    {}
  );

// This is a hack to connect mapper metadata to events
// TODO: Change the metadata to use the event signature instead of the event name
const simpleEventNames: Record<string, string> = Object.entries(contangoYield.filters)
  .filter(([eventName]) => !eventName.includes("(")) // Keep events with arguments
  .map(([eventName, eventFilter]) => [(eventFilter as Function)().topics?.[0] as string, eventName])
  .reduce(
    (acc, [topic, eventName]) => ({
      ...acc,
      [topic]: eventName,
    }),
    {}
  );

const eventFilter = {
  topics: [Object.keys(eventNames)],
  address: contangoYield.address,
};
// const hasuraClient = new HasuraClient<ResolversTypes>("http://localhost:8080/v1/graphql");

const savedBlocks = new Set<string>();
savedBlocks.add("");
const onBlockSaved = new Subject<string>();
onBlockSaved
  .pipe(
    tap((hash) => savedBlocks.add(hash)),
    delay(60000),
    tap((hash) => savedBlocks.delete(hash))
  )
  .subscribe();

const digester = new Subject<[string, () => Promise<any>]>();

digester
  .pipe(
    mergeMap(
      ([blockHash, fn]: [string, () => Promise<any>]) =>
        interval(100).pipe(
          filter(() => !savedBlocks.has(blockHash)),
          take(1),
          switchMap(() =>
            new Observable((subscriber) => {
              fn()
                .then((next) => {
                  subscriber.next(next);
                  subscriber.complete();
                })
                .catch((err) => subscriber.error(err));
            }).pipe(
              catchError((err, caught) => {
                console.error(err);
                return concat(timer(1000), caught);
              })
            )
          )
        ),
      5
    )
  )
  .subscribe();

contangoYield.queryFilter(eventFilter, 0).then((logs: Event[]) => {
  console.log("Received logs", logs.length);
  logs.forEach((log) => {
    const eventName = eventNames[log.topics[0]];
    const eventArgs = contangoYield.interface.decodeEventLog(eventName, log.data, log.topics);
    // console.log(eventName, contangoYield.interface.decodeEventLog(eventName, log.data, log.topics));
    const mapper = mapperMetadata[simpleEventNames[log.topics[0]]];
    digester.next([
      "",
      async () => {
        // save block
        if (!savedBlocks.has(log.blockHash)) {
          await client.request(
            gql`
                mutation CreateBlock {
                  insert_blocks(objects: {id: "${log.blockHash}", hash: "${log.blockHash}", number: "${log.blockNumber}"}) {
                    affected_rows
                  }
                }
              `
          );
          onBlockSaved.next(log.blockHash);
        }
        return Promise.resolve();
      },
    ]);
    digester.next([log.blockHash, () => Promise.resolve()]);
  });
});
