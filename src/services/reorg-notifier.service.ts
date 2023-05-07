import { Provider } from "@ethersproject/providers";
import { defer, merge, mergeMap, Observable, of, Subject, timer } from "rxjs";
import {
  audit,
  auditTime,
  concatWith,
  distinctUntilChanged,
  exhaustMap,
  filter,
  ignoreElements,
  skip,
  take,
  tap,
  timeInterval,
} from "rxjs/operators";
import { DataService } from "./data.service";
import { Logger } from "../logger";
import _, { sample } from "lodash";

const logger = new Logger(module);

type ReorgNotification = {
  blockNumber: number;
  oldBlockHash: string;
  newBlockHash: string;
};

type ReorgNotifier = {
  reorgs$: Observable<ReorgNotification>;
  confirmBlock: (blockNumber: number, blockHash: string) => void;
};

export function reorgNotifier(
  blocks$: Observable<number>,
  dataService: DataService,
  provider: Provider
): ReorgNotifier {
  const blockConfirmer = new Subject<[number, string]>();
  const submitter = new Subject<[number, string]>();
  const submitter$ = submitter.pipe(
    distinctUntilChanged<[number, string]>(_.isEqual),
    tap((x) => blockConfirmer.next(x)),
    ignoreElements()
  );

  const reorgs$ = merge(submitter$, blockConfirmer).pipe(
    mergeMap(([blockNumber, blockHash]) => {
      return new Observable<ReorgNotification>((subscriber) => {
        const sub = blocks$
          .pipe(
            take(1),
            exhaustMap(async (headBlock: number) => {
              if (headBlock >= blockNumber + +(process.env.BLOCK_CONFIRMATIONS || "70")) {
                await dataService.confirmBlock(blockHash, blockNumber);
              } else {
                const block = await provider.getBlock(blockNumber);
                if (block.hash !== blockHash) {
                  // keep checking it until it's confirmed
                  blockConfirmer.next([blockNumber, blockHash]);
                } else {
                  subscriber.next({
                    blockNumber,
                    oldBlockHash: blockHash,
                    newBlockHash: block.hash,
                  });
                  throw new Error("reorg");
                }
              }
            })
          )
          .subscribe({
            complete: () => {
              logger.debug("Block", blockNumber, "confirmed for hash", blockHash);
              subscriber.complete();
            },
          });

        return () => sub.unsubscribe();
      });
    }, 5)
  );
  return {
    reorgs$,
    confirmBlock: (blockNumber: number, blockHash: string) => {
      logger.debug("Queuing block for confirmation", blockNumber, blockHash);
      submitter.next([blockNumber, blockHash]);
    },
  };
}
