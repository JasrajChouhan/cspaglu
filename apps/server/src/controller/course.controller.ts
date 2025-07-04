import { Request, Response } from "express";
import { createDb } from "../db";
import { eq, or, SQL } from "drizzle-orm";
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

export const UpdateCourse = async (req: Request, res: Response) => {
  try {
    const { identifier, data } = req.body;

    let whereSQL: SQL;

    if (identifier?.id) {
      whereSQL = eq(courses.id, identifier.id);
    } else if (identifier?.title) {
      whereSQL = eq(courses.title, identifier.title);
    } else if (identifier?.slug) {
      whereSQL = eq(courses.slug, identifier.slug);
    } else {
      res.status(400).json({
        success: false,
        message: "Provide id, title, or slug to identify the course.",
      });
      return;
    }

    // Use the raw SQL expression
    const existingCourse = await db.query.courses.findFirst({
      where: (fields) => whereSQL,
    });

    if (!existingCourse) {
      res.status(404).json({
        success: false,
        message: "Course not found.",
      });
    }

    const [updatedCourse] = await db
      .update(courses)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(whereSQL)
      .returning();

    res.status(200).json({
      success: true,
      message: "Course updated successfully.",
      data: updatedCourse,
    });
  } catch (error) {
    console.error("Update course error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
