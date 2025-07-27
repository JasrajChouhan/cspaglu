import { db } from "../utils/db";
import { featureFlags } from "../db/schema";
import { eq } from "drizzle-orm";
import { Request, Response } from "express";

export const ToggleFeatureFlag = async (req: Request, res: Response) => {
  try {
    const { featureName } = req.params;

    if (!featureName) {
      res.status(400).json({
        success: false,
        message: "Feature flag name is missing in URL",
      });
      return;
    }

    const flag = await db.query.featureFlags.findFirst({
      where: (field) => eq(field.key, featureName),
    });

    if (!flag) {
      res.status(404).json({
        success: false,
        message: "Feature flag not found",
      });
      return;
    }

    const updated = await db
      .update(featureFlags)
      .set({ value: !flag.value })
      .where(eq(featureFlags.key, featureName));

    res.status(200).json({
      success: true,
      message: `Feature "${flag.key}" has been toggled to ${!flag.value}`,
    });
  } catch (error) {
    console.error("ToggleFeatureFlag error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while toggling the feature flag",
    });
  }
};
