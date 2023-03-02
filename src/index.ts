import { WebSocketProvider } from "@ethersproject/providers";
import { BigNumber, Contract, Event } from "ethers";
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
  merge,
  of,
} from "rxjs";

import { filter } from "rxjs/operators";
import { createMapperMetaDataFromAbi } from "./tools/schema-generator";

//TODO move to a config util
import { config, loadSchemaMetadata } from "./bin/generate-schemas";

const client = new GraphQLClient("http://localhost:8080/v1/graphql");
client.setHeader("x-hasura-admin-secret", "myadminsecretkey");

const provider = new WebSocketProvider("ws://192.168.0.124:8548");

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
        // wait for the block to be saved
        merge(of(0), interval(100)).pipe(
          filter(() => savedBlocks.has(blockHash)),
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

main().catch(console.error);

async function main() {
  const { addresses } = config;
  const metadata = loadSchemaMetadata();

  for (const contractMetadata of metadata) {
    const {
      tableMetadata,
      config: { contractName, schema },
    } = contractMetadata;

    const contract = new Contract(
      addresses[contractName]["arbitrum"],
      contractMetadata.abis
    ).connect(provider);

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

    contract.queryFilter(all, 0).then((logs: Event[]) => {
      console.log("Received logs", logs.length);
      logs.forEach((log) => {
        const eventName = eventNames[log.topics[0]];
        const eventArgs = contract.interface.decodeEventLog(
          eventName.signature,
          log.data,
          log.topics
        );
        const mapper = metadataByEvent[eventName.name];

        digester.next([
          "",
          async () => {
            // save block
            if (!savedBlocks.has(log.blockHash)) {
              console.log("Processing block", log.blockNumber, log.blockHash);
              await client.request(
                gql`
                  mutation CreateBlock {
                    insert_blocks_one(object: {id: "${log.blockHash}", hash: "${log.blockHash}", number: "${log.blockNumber}"}, on_conflict: {constraint: blocks_hash_key}) {
                      id
                    }
                  }
                `
              );
              onBlockSaved.next(log.blockHash);
            }
            return Promise.resolve();
          },
        ]);

        const bigNumberToString = (value: any) => {
          return value._isBigNumber ? value.toString() : value;
        };

        digester.next([
          log.blockHash,
          async () => {
            console.log(
              "Processing event",
              eventName.name,
              log.blockNumber,
              log.logIndex,
              log.blockHash
            );
            const args = mapper.fields
              .map(
                (field) =>
                  `${field.columnName}: "${field.eventArgsPath.reduce(
                    (acc, key) => acc[key],
                    bigNumberToString(eventArgs)
                  )}"`
              )
              .join(", ");
            const columns = mapper.fields.map((field) => field.columnName).join(",");
            const mutation = gql`
              mutation UpsertRecord {
                insert_${schema}_${mapper.tableName}_one(object: { id: "${
              (BigInt(log.blockNumber) * BigInt(1e3)).toString() + log.logIndex
            }", ${args} }, on_conflict: {constraint: ${
              mapper.tableName
            }_pkey, update_columns: [${columns}]}) {
                  id
                }
              }
            `;

            client.request(mutation);
          },
        ]);
      });
    });
  }
}
