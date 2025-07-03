import { Request, Response } from "express";
import { createDb } from "../db";
import { eq, or } from "drizzle-orm";
import { courses } from "../db/schema";

const { db } = createDb(process.env.DATABASE_URL!);

export const CreateCourse = async (req: Request, res: Response) => {
  try {
    const { title, description, thumbnailUrl, slug } = req.body;

    const existingCourse = await db.query.courses.findFirst({
      where: (field) => or(eq(field.title, title), eq(field.slug, slug)),
    });

    if (existingCourse) {
      res.status(409).json({
        success: false,
        message: "A course with this title or slug already exists.",
      });
    }

    const [createdCourse] = await db
      .insert(courses)
      .values({
        title,
        description,
        thumbnailUrl,
        slug,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();

    res.status(201).json({
      success: true,
      message: "Successfully created a course",
      data: createdCourse,
    });
  } catch (error) {
    console.error("Create course error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const GetAllCourses = async (req: Request, res: Response) => {
  try {
    const allCourses = await db.query.courses.findMany();

    res.status(200).json({
      success: true,
      message: "All courses",
      data: allCourses,
    });
  } catch (error) {
    console.error("All course error:", error);

    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
