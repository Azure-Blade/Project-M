import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema"

const connection = await mysql.createPool({
  host: "localhost",
  user: "root",
  database: "project-m",
});

export const db = drizzle(connection, {schema, mode:"default"});
export { schema }
