import { readFileSync } from "fs";
import { createMapperMetaDataFromAbi } from "../tools/schema-generator";
import { groupBy, filter, property, isEqual, uniqBy, map } from "lodash";
import { Axios } from "axios";

const config = {
  endpoint: "http://localhost:8080",
  rpcs: {
    arbitrum: "ws://192.168.0.124:8547",
  },
  abis: "./abis",
  contracts: [
    {
      network: "arbitrum",
      schema: "contango",
      address: "0x30E7348163016B3b6E1621A3Cb40e8CF33CE97db",
      abis: ["ContangoYield", "YieldStorageLib"],
      excludeEvents: [],
    },
    {
      network: "arbitrum",
      schema: "contango",
      address: "0x44386ddB4C44E7CB8981f97AF89E928Ddd4258DD",
      abis: ["YieldCauldron"],
      excludeEvents: [],
    },
  ],
};

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

const { endpoint, rpcs, abis } = config;

export function loadSchemaMetadata() {
  return config.contracts.map((contract) => {
    const { network, schema, address, abis: contractAbis, excludeEvents } = contract;

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
    return {
      abis: mergedAbis,
      config: contract,
      tableMetadata: createMapperMetaDataFromAbi(mergedAbis),
    };
  });
}

async function main() {
  const schemaMetadata = loadSchemaMetadata();

  for (let { config, tableMetadata } of schemaMetadata) {
    const { network, schema, address, abis: contractAbis, excludeEvents } = config;

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
        // "('blockNumber', 'bigint')", // probably not needed. block number can be added to the log index for sorting
        "('transactionHash', 'text')",
        "('logIndex', 'bigint')",
        tableInfo.fields
          .map((field) => `('${field.columnName}', '${field.columnType}')`)
          .join(", "),
      ];
      const createTableStatement = `call create_table_if_not_exists('${schema}'::text, '${tableInfo.tableName}'::text, ARRAY[${columns}]::column_tuple[]);`;

      if (!blockTableCreated) {
        const createBlockTableStatement = `call create_table_if_not_exists('public', 'blocks', ARRAY[('hash', 'text'), ('number', 'bigint'), ('timestamp', 'bigint')]::column_tuple[])`;

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
              {
                type: "run_sql",
                args: {
                  source: "default",
                  sql: 'alter table "public"."blocks" add constraint "blocks_hash_key" unique ("hash");',
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
                  ("hash") on update no action on delete cascade;`,
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

main().catch(console.error);
