import { readFileSync } from "fs";
import _ from "lodash";
import { SchemaService } from "../services/SchemaService";
import { createMapperMetaDataFromAbi } from "../tools/schema-generator";

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

const { abis, addresses } = config;

function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

export function* loadSchemaMetadata() {
  for (const schema in config.contracts) {
    for (const contractName in config.contracts[schema]) {
      const contract = config.contracts[schema][contractName];

      const { abis: contractAbis } = contract;

      const networks = Object.keys(addresses?.[schema]?.[contractName] || {});

      const mergedAbis = contractAbis.flatMap((contractAbi) => {
        const file = abis + "/" + contractAbi + ".json";
        return JSON.parse(readFileSync(file).toString("utf8"));
      });

      function signature(abi: { inputs: EventInput[] }) {
        return "(" + abi.inputs.map((i: any) => i.type).join(",") + ")";
      }

      const conflicts = _.filter(
        _.groupBy(
          _.uniqBy(
            _.filter(mergedAbis, (i) => i.type === "event").map((i) => ({
              name: i.name,
              signature: i.name + signature(i),
            })),
            "signature"
          ),
          "name"
        ),
        (v) => v.length > 1
      ).map((v) => _.map(v, "signature").join(", "));

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
        networks,
        abis: mergedAbis,
        config: contract,
        tableMetadata: createMapperMetaDataFromAbi(mergedAbis),
      };
    }
  }
}

export async function migrate() {
  await schemaService.setupHelpers();

  for (let { schema, tableMetadata, networks } of loadSchemaMetadata()) {
    let blockTableCreated = false;

    for (const tableData of tableMetadata) {
      await runMigration(tableData);
    }

    async function runMigration(tableInfo: (typeof tableMetadata)[number]) {
      const defaultColumns: Parameters<typeof schemaService.createTable>[3] = [
        ["blockHash", "text"],
        ["transactionHash", "text"],
        ["logIndex", "numeric"],
        ["sortIndex", "numeric"],
      ].map(([columnName, columnType]) => ({ columnName, columnType }));

      for (const network of networks) {
        if (!blockTableCreated) {
          schemaService.createTable("public", "blocks", network, [
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

        schemaService.createTable(schema, tableInfo.tableName, network, [
          ...tableInfo.fields,
          ...defaultColumns,
        ]);
      }
    }
  }
}
