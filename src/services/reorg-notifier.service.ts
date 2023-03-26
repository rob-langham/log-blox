import { Provider } from "@ethersproject/providers";
import { defer, merge, mergeMap, Observable, Subject } from "rxjs";
import {
  auditTime,
  concatWith,
  filter,
  ignoreElements,
  skip,
  tap,
  timeInterval,
} from "rxjs/operators";
import { DataService } from "./data.service";

type ReorgNotification = {
  blockNumber: number;
  oldBlockHash: string;
  newBlockHash: string;
};

type ReorgNotifier = {
  reorgs$: Observable<ReorgNotification>;
  confirmBlock: (value: [number, string]) => void;
};

export function reorgNotifier(
  blocks$: Observable<number>,
  dataService: DataService,
  provider: Provider
): ReorgNotifier {
  // const blockConfirmer = new Subject<[number, string]>();
  const blockConfirmer = new Subject<[number, string]>();
  let averageBlockTime = 12; // mainnet default

  //determines average block time
  const averageBlockTime$ = blocks$.pipe(
    filter((__, i) => i % 30 === 0),
    timeInterval(),
    skip(1),
    tap((interval) => (averageBlockTime = interval.interval / 1e3 / 30)),
    tap(() => console.log("averageBlockTime", parseFloat(averageBlockTime.toFixed(4)))),
    ignoreElements()
  );

  const reorgs$ = merge(averageBlockTime$, blockConfirmer).pipe(
    mergeMap(([blockNumber, blockHash]) => {
      console.log("checking validity of block", blockNumber, "against hash", blockHash);
      return new Observable<ReorgNotification>((subscriber) => {
        const sub = blocks$
          .pipe(
            // Check every ~5 blocks to see if the block has been reorged.
            // When there is a backlog of blocks this might just run once for any given block
            auditTime(averageBlockTime * 5e3),
            mergeMap(async (headBlock: number) => {
              const block = await provider.getBlock(blockNumber);

              if (block.hash === blockHash) {
                return headBlock;
              } else {
                subscriber.next({
                  blockNumber,
                  oldBlockHash: blockHash,
                  newBlockHash: block.hash,
                });
                throw new Error("reorg");
              }
            }),
            filter(
              (checkedBlockNumber) =>
                checkedBlockNumber <= blockNumber + +(process.env.BLOCK_CONFIRMATIONS || "70")
            ),
            concatWith(defer(() => dataService.confirmBlock(blockHash, blockNumber)))
          )
          .subscribe({
            complete: () => {
              // not called when error is thrown
              subscriber.complete();
            },
          });

        return () => sub.unsubscribe();
      });
    }, 5)
  );

  return {
    reorgs$,
    confirmBlock: blockConfirmer.next.bind(blockConfirmer),
  };
}
