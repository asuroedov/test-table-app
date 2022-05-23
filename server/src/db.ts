import pg from "pg";
import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../development.env") });

const pool = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: 5432,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

export async function initializeDB(pool: pg.Pool, queries: string[]) {
  await pool.connect();

  const promises = queries.map((query) => pool.query(query));
  await Promise.all(promises);
}

export default pool;
