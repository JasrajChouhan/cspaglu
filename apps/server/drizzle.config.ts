import { type Config } from "drizzle-kit";
import "dotenv/config";
import dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  out: "./src/db/migrations",
  tablesFilter: ["cspaglu_*"],
} satisfies Config;
