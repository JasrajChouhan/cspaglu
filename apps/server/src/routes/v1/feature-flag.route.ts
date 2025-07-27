import { Router } from "express";
import { db } from "../../utils/db";
import { featureFlags } from "../../db/schema";
import { ToggleFeatureFlag } from "../../controller";

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

router.put("/toggle/flag-status/:featureName", ToggleFeatureFlag);

export default router;
