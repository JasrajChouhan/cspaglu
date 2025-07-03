import { type Config } from "drizzle-kit";

import * as path from "path";
import * as dotenv from "dotenv";
import * as fs from "fs";

const env = process.env.NODE_ENV || "local";
const envFile = `.env.${env}`;
const envPath = path.resolve(__dirname, envFile);

if (!fs.existsSync(envPath)) {
  throw new Error(`Environment file "${envFile}" not found.`);
}

dotenv.config({ path: envPath });

if (!process.env.DATABASE_URL) {
  throw new Error(`DATABASE_URL not set in "${envFile}".`);
}

export default {
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  out: "./src/db/migrations",
  tablesFilter: ["cspaglu_*"],
} satisfies Config;
