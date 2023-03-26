import _ from "lodash";
import { EMPTY, from, mergeMap, Subject } from "rxjs";
import { bufferTime, concatMap, filter, map } from "rxjs/operators";
import { DataService } from "./data.service";

export type BatchableUpsertAction = {
  dedupe: string;
  type: "batchable";
  schema: string;
  table: string;
  object: any;
  constraint?: string;
};

export type CallbackPersistanceAction = {
  dedupe: string;
  type: "callback";
  callback: () => Promise<void>;
};

export function createPersistor(dataService: DataService) {
  const persistor = new Subject<BatchableUpsertAction | CallbackPersistanceAction>();
  const listener$ = persistor.pipe(
    bufferTime(1000),
    map((actions) => {
      const array = actions.reduce(
        (acc, action) => {
          if (!acc.dedupe.has(action.dedupe)) {
            acc.dedupe.add(action.dedupe);
            acc.array.push(action);
          }
          return acc;
        },
        { array: [] as typeof actions, dedupe: new Set() }
      ).array;

      if (array.length != actions.length) {
        console.log("Deduped", actions.length - array.length, "actions");
      }

      return array;
    }),
    mergeMap((actions) =>
      // ensures blocks are persisted before other actions
      from(
        _.chunk(
          // useful when reindexing
          actions,
          1000
        )
      )
    ),
    filter((actions) => actions.length > 0),
    concatMap((persistanceActions) => {
      console.log("Persisting", persistanceActions.length, "entities");

      const mutationsByType = _.groupBy(persistanceActions, "type");

      return from(Object.keys(mutationsByType)).pipe(
        concatMap((type) => {
          const actions = mutationsByType[type];
          if (type === "batchable") {
            return persistBatches(actions as BatchableUpsertAction[]);
          } else if (type === "callback") {
            return from(actions as CallbackPersistanceAction[]).pipe(
              concatMap((action) => action.callback())
            );
          }

          return EMPTY;
        })
      );

      async function persistBatches(persistanceActions: BatchableUpsertAction[]): Promise<any> {
        const entityGroupedActions = _.groupBy(
          persistanceActions,
          (action) =>
            // public schema lexically first
            (action.schema === "public" ? "!" : "#") + action.schema + "." + action.table
        );

        //public schema first as other entities will depend on it
        const entityActions = _.sortBy(Object.entries(entityGroupedActions), "0");

        console.log("Persisting", ..._.map(entityActions, ([key]) => key.substring(1)));

        for (const [, actions] of entityActions) {
          const { schema, table } = actions[0];
          await dataService.upsertRecords(schema, table, actions.map(_.property("object")));
        }
      }
    })
  );

  return {
    persist: persistor.next.bind(persistor),
    subscribe: listener$.subscribe.bind(listener$),
  };
}
