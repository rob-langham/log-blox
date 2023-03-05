import { readFileSync } from "fs";
import { createMapperMetaDataFromAbi } from "../tools/schema-generator";
import { groupBy, filter, property, isEqual, uniqBy, map } from "lodash";
import { Axios } from "axios";
import { Event } from "ethers";

export interface Config {
  endpoint: string;
  rpcs: Record<string, string>;
  abis: string;
  addresses: {
    [schema: string]: {
      [contractName: string]: {
        [network: string]: string;
      };
    };
  };
  contracts: {
    [schema: string]: {
      [contractName: string]: {
        abis: string[];
        excludeEvents: string[];
      };
    };
  };
  customHandlers: {
    triggers: string[];
    handler: string;
    entity: string;
    immutable: boolean;
  }[];
}

export const config: Config = require("../../config").default;

type TupleEventInput = {
  name: string;
  indexed: boolean;
  type: "tuple";
  components: EventInput[];
};

type EventInput =
  | {
      name: string;
      indexed: boolean;
      type: "address" | "bool" | "int" | "uint" | "string" | "bytes";
    }
  | TupleEventInput;

//TDOD read from file, or env
const adminSecret = "myadminsecretkey";

const { endpoint, rpcs, abis, customHandlers } = config;

interface HandlerFunction {
  (event: Event, context: any): Promise<{ [feild: string]: any } | null | undefined>;
}

export function* loadCustomHandlerMetadata() {
  for (const handlerConfig of customHandlers) {
    const { triggers, handler, entity, immutable } = handlerConfig;
    const handlerFunction = require(handler).default;
    const eventSources = triggers
      .map((trigger) => trigger.split(":"))
      .map(([contractName, eventName]) => ({
        contractName,
        eventName,
      }));
  }
}

export function* loadSchemaMetadata() {
  for (const schema in config.contracts) {
    for (const contractName in config.contracts[schema]) {
      const contract = config.contracts[schema][contractName];

      const { abis: contractAbis, excludeEvents } = contract;

      const mergedAbis = contractAbis.flatMap((contractAbi) => {
        const file = abis + "/" + contractAbi + ".json";
        return JSON.parse(readFileSync(file).toString("utf8"));
      });

      function signature(abi: { inputs: EventInput[] }) {
        return "(" + abi.inputs.map((i: any) => i.type).join(",") + ")";
      }

      const conflicts = filter(
        groupBy(
          uniqBy(
            filter(mergedAbis, (i) => i.type === "event").map((i) => ({
              name: i.name,
              signature: i.name + signature(i),
            })),
            "signature"
          ),
          "name"
        ),
        (v) => v.length > 1
      ).map((v) => map(v, "signature").join(", "));

      if (conflicts.length) {
        console.error("Conflicting events found in ABI files: \n\t" + conflicts.join("\t"));
        console.error("Conflict resolution needs to be configured before continuing. Try:");
        console.error(
          "\t1. Exclude all or all but one of the conflicting events in 'contracts[].excludeEvents' of the config file"
        );
        console.error(
          "\t2. Set a resolution strategy in 'contracts[].mergeEvents' of the config file"
        );
        // todo :: add a resolution strategy, with union, intersection manual signature
        process.exit(1);
      }
      yield {
        schema,
        contractName,
        abis: mergedAbis,
        config: contract,
        tableMetadata: createMapperMetaDataFromAbi(mergedAbis),
      };
    }
  }
}

export async function migrate() {
  for (let { schema, contractName, config, tableMetadata } of loadSchemaMetadata()) {
    // const { abis: contractAbis, excludeEvents } = config;

    let blockTableCreated = false;

    const axios = new Axios({
      headers: {
        "x-hasura-admin-secret": adminSecret,
        "Content-Type": "application/json",
      },
    });

    for (const tableData of tableMetadata) {
      await runMigration(tableData);
    }

    async function runMigration(tableInfo: (typeof tableMetadata)[number]) {
      const columns = [
        "('blockHash', 'text')", // FK
        // "('blockNumber', 'numeric')", // probably not needed. block number can be added to the log index for sorting
        "('transactionHash', 'text')",
        "('logIndex', 'numeric')",
        "('sortIndex', 'numeric')",
        tableInfo.fields
          .map((field) => `('${field.columnName}', '${field.columnType}')`)
          .join(", "),
      ];
      const createTableStatement = `call create_table_if_not_exists('${schema}'::text, '${tableInfo.tableName}'::text, ARRAY[${columns}]::column_tuple[]);`;

      if (!blockTableCreated) {
        const createBlockTableStatement = `call create_table_if_not_exists('public', 'blocks', ARRAY[('number', 'numeric'), ('confirmed', 'bool')]::column_tuple[])`;

        console.log(createBlockTableStatement);
        const blockTableResponse = await axios.post(
          endpoint + "/v2/query",
          JSON.stringify({
            type: "bulk",
            args: [
              {
                type: "run_sql",
                args: {
                  source: "default",
                  sql: createBlockTableStatement,
                },
              },
            ],
          })
        );

        await axios.post(
          endpoint + "/v1/metadata",
          JSON.stringify({
            type: "pg_track_table",
            args: {
              source: "default",
              table: "blocks",
            },
          })
        );

        await axios.post(
          endpoint + "/v2/query",
          JSON.stringify({
            type: "run_sql",
            args: {
              source: "default",
              sql: `create schema if not exists "${schema}";`,
            },
          })
        );

        console.log(JSON.parse(blockTableResponse.data).result_type);

        blockTableCreated = true;
      }

      console.log(createTableStatement);

      const createResponse = await axios.post(
        endpoint + "/v2/query",
        JSON.stringify({
          type: "run_sql",
          args: {
            source: "default",
            sql: createTableStatement,
          },
        })
      );
      const fkResponse = await axios.post(
        endpoint + "/v2/query",
        JSON.stringify({
          type: "run_sql",
          args: {
            source: "default",
            sql: `alter table "${schema}"."${tableInfo.tableName}"
                  add constraint "${tableInfo.tableName}_blockHash_fkey"
                  foreign key ("blockHash")
                  references "public"."blocks"
                  ("id") on update no action on delete cascade;`,
          },
        })
      );

      console.log(
        "create table response:",
        JSON.parse(createResponse.data).result_type || JSON.parse(createResponse.data).code
      );
      console.log(
        "fk response:",
        JSON.parse(fkResponse.data).result_type || JSON.parse(fkResponse.data).code
      );

      let metadata;
      metadata = await axios.post(
        endpoint + "/v1/metadata",
        JSON.stringify({
          type: "pg_track_table",
          args: {
            source: "default",
            table: {
              schema,
              name: tableInfo.tableName,
            },
          },
        })
      );

      console.log(
        "track response:",
        JSON.parse(metadata.data).result_type || JSON.parse(metadata.data).code
      );

      metadata = await axios.post(
        endpoint + "/v1/metadata",
        JSON.stringify({
          type: "pg_create_object_relationship",
          args: {
            name: "block",
            table: {
              name: tableInfo.tableName,
              schema,
            },
            using: {
              foreign_key_constraint_on: "blockHash",
            },
            source: "default",
          },
        })
      );

      console.log(
        "block relationship response:",
        JSON.parse(metadata.data).result_type || JSON.parse(metadata.data).code
      );
    }
  }
}
