import { Router } from "express";
import { db } from "../../utils/db";
import { featureFlags } from "../../db/schema";

const router: Router = Router();

router.get("/", async (req, res) => {
  try {
    const flags = await db.select().from(featureFlags);
    const flagMap = Object.fromEntries(flags.map((f) => [f.key, f.value]));
    res.json({ flags: flagMap });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal error" });
  }
});

export default router;
