import postgresql from "pg";

const { Client } = postgresql;

export const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "wahyu",
  database: "postgres",
});

await client.connect();
console.log("Database terhubung");
