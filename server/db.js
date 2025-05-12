import { Pool } from "pg"
import dotenv from "dotenv";

dotenv.config();

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
// });

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  ssl: {
    rejectUnauthorized: false, 
  },
});

export default pool;