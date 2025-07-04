// apps/server/scripts/seed.ts

import { db } from "../utils/db";
import { featureFlags } from "../db/schema";

async function seed() {
  try {
    await db.insert(featureFlags).values([
      {
        key: "waitlistEnded",
        value: false,
      },
    ]);
    console.log("Seed completed.");
  } catch (error) {
    console.error("Seed failed:", error);
  } finally {
    process.exit(1);
  }
}

seed();
