import { Request, Response, NextFunction } from "express";
import { db } from "../utils/db";
import { eq } from "drizzle-orm";

export const validateCourseId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { courseId } = req.params;

    if (!courseId || typeof courseId !== "string") {
      res.status(400).json({
        success: false,
        message: "Missing or invalid courseId in URL.",
      });
      return;
    }

    const course = await db.query.courses.findFirst({
      where: (field) => eq(field.id, courseId),
    });

    if (!course) {
      res.status(404).json({
        success: false,
        message: "Course not found for the given courseId.",
      });
    }

    (req as any).course = course;

    next();
  } catch (err) {
    console.error("Error in validateCourseId middleware", err);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
};
