import * as path from "path";
import * as dotenv from "dotenv";
import * as fs from "fs";
import { createDb } from "../db";

const basePath = path.resolve(__dirname, "../..");
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

console.log(process.env.DATABASE_URL);

export const { db } = createDb(process.env.DATABASE_URL!);
