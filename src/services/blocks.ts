import { Provider } from "@ethersproject/providers";
import _ from "lodash";
import { NEVER, Observable } from "rxjs";
import { catchError, shareReplay, timeout } from "rxjs/operators";
import { logger } from "../index";

export const blocks$ = _.memoize((provider: Provider) =>
  new Observable<number>((subscriber) => {
    logger.info("blocks$ subscription started");
    const onBlock = (blockNumber: number) => {
      // console.log("block", blockNumber);
      subscriber.next(blockNumber);
    };
    provider.on("block", onBlock);
    return () => {
      blocks$.cache.delete(provider);
      provider.off("block", onBlock);
    };
  }).pipe(
    (src: Observable<number>): Observable<number> =>
      src.pipe(
        timeout(12e3 * 5),
        catchError(() => {
          logger.error("blocks$ timed out, restarting");
          return NEVER;
        })
      ),
    shareReplay(1, 50)
  )
);
