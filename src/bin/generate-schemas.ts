import { readFileSync } from "fs";
import { createMapperMetaDataFromAbi } from "../tools/schema-generator";
import { groupBy, filter, property, isEqual, uniqBy, map } from "lodash";
import { Axios } from "axios";
import { Event } from "ethers";
import { SchemaService } from "../services/SchemaService";

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

export const schemaService = new SchemaService();

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

const { abis } = config;

export function* loadSchemaMetadata() {
  for (const schema in config.contracts) {
    for (const contractName in config.contracts[schema]) {
      const contract = config.contracts[schema][contractName];

      const { abis: contractAbis } = contract;

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
  for (let { schema, tableMetadata } of loadSchemaMetadata()) {
    let blockTableCreated = false;

    for (const tableData of tableMetadata) {
      await runMigration(tableData);
    }

    async function runMigration(tableInfo: (typeof tableMetadata)[number]) {
      const defaultColumns: Parameters<typeof schemaService.createTable>[2] = [
        ["blockHash", "text"],
        ["transactionHash", "text"],
        ["logIndex", "numeric"],
        ["sortIndex", "numeric"],
      ].map(([columnName, columnType]) => ({ columnName, columnType }));

      if (!blockTableCreated) {
        schemaService.createTable("public", "blocks", [
          {
            columnName: "number",
            columnType: "numeric",
          },
          {
            columnName: "confirmed",
            columnType: "bool",
          },
        ]);

        await schemaService.createSchema(schema);
      }

      schemaService.createTable(schema, tableInfo.tableName, [
        ...tableInfo.fields,
        ...defaultColumns,
      ]);
    }
  }
}
