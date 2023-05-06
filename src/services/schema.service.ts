import { readFileSync } from "fs";
import { type } from "os";
import { Client } from "pg";

export class SchemaService {
  private client: Client;

  constructor() {
    this.client = new Client();
    this.client.connect();
  }

  async setupHelpers() {
    await this.client.query(readFileSync("./src/schema_migration_helpers.sql").toString());
  }

  async createSchema(schema: string) {
    await this.client.query(`create schema if not exists "${schema}";`);
  }

  async createTable(
    schema: string,
    table: string,
    network: string,
    columns: {
      columnName: string;
      columnType: string;
    }[]
  ) {
    const columnDefinitions = columns
      .map((c) => `('${c.columnName}', '${c.columnType}')`)
      .join(", ");

    await this.client.query(
      `call create_table_if_not_exists('${schema}', '${table}', ARRAY[${columnDefinitions}]::column_tuple[]);`
    );

    await this.client.query(
      `call create_table_network_partition('${schema}', '${table}', '${network}')`
    );

    if (table !== "blocks")
      try {
        // create contraint for foreign key
        await this.client.query(
          `create index if not exists "${table}_blockHash_index" on "${schema}"."${table}" ("blockHash", "network");`
        );

        await this.client.query(`
          alter table "${schema}"."${table}"
          add constraint "${table}_blockHash_fkey"
          foreign key ("blockHash", "network")
          references "public"."blocks"
          ("id", "network") on update no action on delete cascade;
        `);
      } catch (e) {
        // ignore error if the constraint already exists
      }
  }
}
