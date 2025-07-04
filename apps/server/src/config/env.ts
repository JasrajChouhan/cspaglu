import * as path from "path";
import * as dotenv from "dotenv";
import * as fs from "fs";

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

export const getEnv = {
  NODE_ENV: process.env.NODE_ENV,
  AWS_REGION: process.env.AWS_REGION!,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID!,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY!,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME!,
};
