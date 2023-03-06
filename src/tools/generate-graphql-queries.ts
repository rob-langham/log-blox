import { readFileSync, writeFileSync } from "fs";

const { input, type } = extracrVargs();

function extracrVargs() {
  //eg. --input "file.json" --type [inserts|updates|deletes]
  const args = process.argv.slice(2);
  const inputIndex = args.indexOf("--input");
  const typeIndex = args.indexOf("--type");
  const input = args[inputIndex + 1];
  const type = args[typeIndex + 1];

  if (!input || !type) {
    throw new Error("Missing required arguments");
  }

  return { input, type };
}

const { mutationType, types } = JSON.parse(readFileSync(input, "utf8")).__schema;

function typeToString(type: any): string {
  if (type.kind === "NON_NULL") {
    return typeToString(type.ofType) + "!";
  }
  if (type.kind === "LIST") {
    return `[${typeToString(type.ofType)}]`;
  }
  return type.name;
}

const insertMutations: {
  field: string;
  query: string;
  inputTypeKey: string;
  inputType: string;
  operation: string;
}[] = [];

const mutationRoot = types.find((t: any) => t.name === mutationType.name).fields;
const mutations = mutationRoot.filter((m: any) => m.args.find((a: any) => a.name === "objects"));
mutations.forEach((m: any) => {
  const name = m.name;
  const objectsType: string = typeToString(m.args.find((a: any) => a.name === "objects").type);
  const camelCasedName = name.replace(/_[a-z]/gi, (x: string) => x.substring(1).toUpperCase());
  const meta = {
    field: camelCasedName,
    query: `${camelCasedName}Query`,
    operation: name,
    inputTypeKey: objectsType.replace(/[[\]!]/g, ""),
    inputType: objectsType,
  };

  insertMutations.push(meta);
});

const insertQueries = insertMutations.map((m) =>
  stripMargin(`
    |   private ${m.query} = gql\`
    |     mutation ${m.operation}($inputs: ${m.inputType}) {
    |       ${m.operation}(objects: $inputs) {
    |         affected_rows
    |       }
    |     }
    |   \`
  `)
);

const insertMutationFunctions = insertMutations.map((m) =>
  stripMargin(`
    | ${m.field} = (inputs: KeyOrNever<RT, "${m.inputTypeKey}">[]) => this.client.request(this.${m.query}, { inputs });
  `).substring(1)
);

console.log(
  stripMargin(`
    | import { GraphQLClient, gql } from "graphql-request";
    | type KeyOrNever<T, K> = K extends keyof T ? T[K] : never;
    |
    | export class HasuraClient<RT> {
    |   private client: GraphQLClient;
    |   
    |   constructor(url: string) {
    |     this.client = new GraphQLClient(url);
    |   }
    |   ${insertQueries.join("")}
    |   ${insertMutationFunctions.join("")}
    | }
  `)
);

function stripMargin(str: string): string {
  // like scala's stripMargin
  return str.replace(/^[ \t]*\| ?/gm, "");
}
