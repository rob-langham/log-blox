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

function transformCase(str: string) {
  return str.replace(/_([a-zA-Z])/g, (x) => x.substring(1).toUpperCase());
}

function classToSnakeCase(str: string) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
}

function ethereumTypeToPostgresType(ethereumType: string) {
  switch (ethereumType.replace(/\d+$/, "")) {
    case "address":
      return "TEXT";
    case "bool":
      return "BOOLEAN";
    case "int":
    case "uint":
      return "NUMERIC";
    case "string":
      return "TEXT";
    case "bytes":
      // hex string
      return "TEXT";
    default:
      return `error(${ethereumType})`;
  }
}

function ethereumTupleTypeToColumnNames(
  ethereumTupleType: TupleEventInput,
  index: number
): { eventArgsPath: number[]; columnName: string; columnType: string }[] {
  const altName = `arg${index}`;
  const columns = ethereumTupleType.components.map((component, i) => {
    if (component.type === "tuple") {
      return ethereumTupleTypeToColumnNames(component, i).map((x, i) => ({
        columnName: transformCase((ethereumTupleType.name || altName) + "_" + x.columnName),
        columnType: x.columnType,
        eventArgsPath: [index, ...x.eventArgsPath],
      }));
    }
    return {
      columnName: transformCase(
        `${ethereumTupleType.name || altName}_${component.name || `arg${i}`}`
      ),
      columnType: ethereumTypeToPostgresType(component.type),
      eventArgsPath: [index, i],
    };
  });
  return columns.flat();
}

export function createMapperMetaDataFromAbi(abiJson: any): {
  eventName: string;
  tableName: string;
  hasuraClientOperations: Record<"insert" | "upsert" | "delete" | "select", string>;
  fields: {
    columnName: string;
    columnType: string;
    eventArgsPath: number[];
  }[];
}[] {
  // Find all the events in the ABI
  const events = abiJson.filter((x: any) => x.type === "event");

  const eventNames = new Set();

  // For each event, create a PostgreSQL table
  const metadata = events
    .map((event: { name: string; inputs: EventInput[] }) => {
      if (eventNames.has(event.name)) {
        return null;
      }
      eventNames.add(event.name);

      const fields = event.inputs
        .map((input, i) => {
          return input.type === "tuple"
            ? ethereumTupleTypeToColumnNames(input, i)
            : [
                {
                  columnName: transformCase(input.name || `arg${i}`),
                  columnType: ethereumTypeToPostgresType(input.type),
                  indexed: input.indexed,
                  eventArgsPath: [i],
                },
              ];
        })
        .flat();

      return {
        eventName: event.name,
        hasuraClientOperations: {
          insert: "insert" + event.name + "Event",
          upsert: "upsert" + event.name + "Event",
          delete: "delete" + event.name + "Event",
          select: "get" + event.name + "Event",
        },
        tableName: classToSnakeCase(`${event.name}Event`),
        fields,
      };
    })
    .filter(Boolean);

  return metadata;
}
