import { type } from "os";
import { Client } from "pg";

export class SchemaService {
  private client: Client;

  constructor() {
    this.client = new Client();
    this.client.connect();
  }

  async createSchema(schema: string) {
    await this.client.query(`create schema if not exists "${schema}";`);
  }

  async createTable(
    schema: string,
    table: string,
    columns: {
      columnName: string;
      columnType: string;
    }[]
  ) {
    const columnDefinitions = columns
      .map((c) => `('${c.columnName}', '${c.columnType}')`)
      .join(", ");

    await this.client.query(
      `call create_table_if_not_exists('${schema}'::text, '${table}'::text, ARRAY[${columnDefinitions}]::column_tuple[]);`
    );

    if (table !== "blocks")
      try {
        await this.client.query(`
        alter table "${schema}"."${table}"
        add constraint "${table}_blockHash_fkey"
        foreign key ("blockHash")
        references "public"."blocks"
        ("id") on update no action on delete cascade;
      `);
      } catch (e) {
        // ignore error if the constraint already exists
      }
  }
}
