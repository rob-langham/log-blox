import { type } from "os";
import { Client } from "pg";

type falsey = false | null | undefined | 0 | "";

export class DataService {
  private client: Client;
  constructor() {
    this.client = new Client();
    this.client.connect();
  }

  async deleteUnconfirmedBlocks(): Promise<void> {
    // find the oldest unconfirmed block and delete all blocks after it
    // some blocks may be confirmed out of order, so we can't just delete all unconfirmed blocks
    // the impact should be minimal, since we shoulf only need to delete a few blocks at a time
    await this.client.query(
      "DELETE FROM blocks WHERE number >= (SELECT min(number) FROM blocks WHERE confirmed = false)"
    );
  }

  async confirmBlock(blockHash: string, blockNumber: number): Promise<void> {
    console.log(`confirming block ${blockNumber} (${blockHash})`);
    await this.client.query("UPDATE blocks SET confirmed = true WHERE id = $1 AND number = $2", [
      blockHash,
      blockNumber,
    ]);
  }

  async confirmBlocksBefore(blockNumber: number): Promise<void> {
    await this.client.query("UPDATE blocks SET confirmed = true WHERE number <= $1", [blockNumber]);
  }

  async getLatestBlock(): Promise<number> {
    const result = await this.client.query("SELECT coalesce(max(number), 0) as number FROM blocks");
    return parseInt(result.rows[0].number || 0);
  }
}
