import { Request, Response, Router } from "express";
import { createDb } from "../db";
import { earlyAccess } from "../db/schema";
import { eq } from "drizzle-orm";

const { db } = createDb(process.env.DATABASE_URL!);

export const JoinWaitList = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { email } = req.body;
    console.log({ email });

    const existing = await db.query.earlyAccess.findFirst({
      where: (fields) => eq(fields.email, email),
    });

    if (existing) {
      res.status(200).json({
        success: false,
        message: "You're already on the waitlist.",
      });
      return;
    }

    await db.insert(earlyAccess).values({
      email,
      isEarlyAccess: true,
      hasUsedTicket: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(201).json({
      success: true,
      message: "Successfully joined the waitlist.",
    });
  } catch (error) {
    console.error("Join waitlist error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
