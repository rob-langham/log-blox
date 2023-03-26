import { Client } from "pg";

export class DataService {
  private client: Client;
  constructor(public network: string) {
    this.client = new Client();
    this.client.connect();
  }

  async insertBlock(blockHash: string, blockNumber: number): Promise<void> {
    await this.client.query("INSERT INTO public.blocks (network, id, number) VALUES ($1, $2)", [
      this.network,
      blockHash,
      blockNumber,
    ]);
  }

  async upsertRecords(schema: string, table: string, rows: { [columnName: string]: any }[]) {
    if (!rows.length) return;

    const columns = Object.keys(rows[0]);
    const values = rows.map((row) => columns.map((c) => row[c]));
    const columnNames = `"${columns.join('", "')}"`;
    let i = 2;
    const valuePlaceholdersList = values
      .map(() => `($1, ${columns.map(() => `$${i++}`).join(", ")})`)
      .join(", ");

    const conflictResolution = columns.map((c) => `"${c}" = excluded."${c}"`).join(", ");

    const sql = `INSERT INTO "${schema}"."${table}" ("network", ${columnNames}) VALUES ${valuePlaceholdersList} ON CONFLICT ("id", "network") DO UPDATE SET ${conflictResolution}`;
    // console.trace(sql);
    await this.client.query(sql, [this.network, ...values.flat()]);
  }

  async deleteUnconfirmedBlocks(): Promise<void> {
    // find the oldest unconfirmed block and delete all blocks after it
    // some blocks may be confirmed out of order, so we can't just delete all unconfirmed blocks
    // the impact should be minimal, since we shoulf only need to delete a few blocks at a time
    await this.client.query(
      'DELETE FROM blocks WHERE "network" = $1 AND number >= (SELECT min(number) FROM blocks WHERE "network" = $1 AND confirmed = false)',
      [this.network]
    );
  }

  async confirmBlock(blockHash: string, blockNumber: number): Promise<void> {
    console.log(`confirming block ${blockNumber} (${blockHash})`);
    await this.client.query(
      'UPDATE blocks SET confirmed = true WHERE "network" = $1 AND "id" = $2 AND "number" = $3',
      [this.network, blockHash, blockNumber]
    );
  }

  async confirmBlocksBefore(blockNumber: number): Promise<void> {
    await this.client.query(
      'UPDATE blocks SET confirmed = true WHERE "network" = $1 AND number <= $2',
      [this.network, blockNumber]
    );
  }

  async getLatestBlock(): Promise<number> {
    const result = await this.client.query(
      "SELECT coalesce(max(number), 0) as number FROM blocks where network = $1",
      [this.network]
    );
    return parseInt(result.rows[0].number || 0);
  }
}
