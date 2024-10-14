// import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined in the environment");
}

const client = postgres(connectionString);
const db = drizzle(client);

// async function runMigrations() {
//   try {
//     await migrate(db, { migrationsFolder: "./drizzle" });
//     console.log("Migrations completed successfully");
//   } catch (error) {
//     console.error("Error running migrations:", error);
//     throw error;
//   }
// }
// runMigrations();

export default db;
