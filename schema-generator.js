function transformCase(str) {
  return str.replace(/_([a-zA-Z])/g, (x) => x.substring(1).toUpperCase());
}

function classToSnakeCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1_$2").toLowerCase();
}

function ethereumTypeToPostgresType(ethereumType) {
  switch (ethereumType.replace(/\d+$/, "")) {
    case "address":
      return "TEXT";
    case "bool":
      return "BOOLEAN";
    case "int":
    case "uint":
      // can be better space wise
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

function ethereumTupleTypeToColumns(ethereumTupleType, altName) {
  const columns = ethereumTupleType.components.map((component, i) => {
    if (component.type === "tuple") {
      throw new Error("Nested tuples are not supported");
      // return ethereumTupleTypeToColumns(component);
    }
    return [
      `"${transformCase(
        (ethereumTupleType.name || altName) + "_" + (component.name || `arg${i}`)
      )}" ${ethereumTypeToPostgresType(component.type)}`,
    ];
  });
  return columns.flat();
}

function ethereumTupleTypeToColumnNames(ethereumTupleType, index) {
  const altName = `arg${index}`;
  const columns = ethereumTupleType.components.map((component, i) => {
    if (component.type === "tuple") {
      return ethereumTupleTypeToColumns(component, i).map((x, i) => ({
        columnName: transformCase((ethereumTupleType.name || altName) + "_" + x.columnName),
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

export function createPostgresSchemaFromAbi(abiJsonFilePath) {
  //   console.log("Creating Postgres schema from ABI file: " + abiJsonFilePath);
  // Load the ABI JSON file
  const abiJson = require(abiJsonFilePath);

  // Find all the events in the ABI
  const events = abiJson.filter((x) => x.type === "event");

  const eventNames = new Set();

  // For each event, create a PostgreSQL table
  const schema = events
    .map((event) => {
      if (eventNames.has(event.name)) {
        return "";
      }
      eventNames.add(event.name);

      // console.log("Creating table for event: " + event.name, event);

      const tableName = classToSnakeCase(`${event.name}Event`);

      // Create the table schema
      const fields = event.inputs.map((input, i) => {
        return input.type === "tuple"
          ? ethereumTupleTypeToColumns(input, `arg${i}`).join(",\n        ")
          : `"${transformCase(input.name || `arg${i}`)}" ${ethereumTypeToPostgresType(input.type)}`;
      });
      const schema = `CREATE TABLE ${tableName} (
        "id" TEXT PRIMARY KEY,
        "blockNumber" NUMERIC,
        "blockHash" TEXT,
        "transactionHash" TEXT,
        "logIndex" NUMERIC,
        ${fields.join(",\n        ")}
      );`;

      // Create a composite index on the indexed fields
      const indexedFields = event.inputs
        .filter((input) => input.indexed)
        .map((input, i) => {
          return input.indexed ? `"${transformCase(input.name || `arg${i}`)}"` : null;
        })
        .filter(Boolean)
        .join(",");
      const indexName = `${tableName}_indexed_fields_idx`;
      const index = `CREATE INDEX ${indexName} ON ${tableName} (${indexedFields});`;

      // Print the table schema to the console
      return [
        schema,
        indexedFields.length ? index : "-- no indexed fields",
        `CREATE INDEX ${tableName}_tx_idx ON ${tableName} ("transactionHash");`,
        `CREATE INDEX ${tableName}_bloc_idx ON ${tableName} ("blockNumber");`,
      ].join("\n\n");
    })
    .join("\n\n");

  console.log(schema);
}

export function createMapperMetaDataFromAbi(abiJson) {
  // Find all the events in the ABI
  const events = abiJson.filter((x) => x.type === "event");

  const eventNames = new Set();

  // For each event, create a PostgreSQL table
  const metadata = events.map((event) => {
    if (eventNames.has(event.name)) {
      return "";
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
      fields,
    };
  });

  return metadata;
}
