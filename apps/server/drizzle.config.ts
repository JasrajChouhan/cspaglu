import { type Config } from "drizzle-kit";

import * as path from "path";
import * as dotenv from "dotenv";
import * as fs from "fs";

const basePath = path.resolve(__dirname);
let envFile = `.env.${process.env.NODE_ENV || "local"}`;
let envPath = path.join(basePath, envFile);

if (!fs.existsSync(envPath)) {
  envFile = ".env";
  envPath = path.join(basePath, envFile);

  if (!fs.existsSync(envPath)) {
    throw new Error(`No environment file found.`);
  }
}

dotenv.config({ path: envPath });

export default {
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  out: "./src/db/migrations",
  tablesFilter: ["cspaglu_*"],
} satisfies Config;
