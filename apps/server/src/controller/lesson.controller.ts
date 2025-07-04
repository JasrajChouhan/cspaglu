import { Request, Response } from "express";
import { db } from "../utils/db";
import { lesseons } from "../db/schema";
import { and, eq } from "drizzle-orm";
import { uploadMarkdownToS3 } from "../utils/uploadMarkdownToS3";
import slugify from "slugify";

export const CreateLesson = async (req: Request, res: Response) => {
  try {
    const { title, orderIndex, contentMd, videoUrl } = req.body;
    const { courseId } = req.params;

    if (!courseId) {
      res.status(400).json({
        success: false,
        message: "Missing courseId in the URL.",
      });

      return;
    }

    const course = await db.query.courses.findFirst({
      where: (field) => eq(field.id, courseId),
    });

    if (!course) {
      res.status(404).json({
        success: false,
        message: `Course with id '${courseId}' not found.`,
      });

      return;
    }

    const existingLesson = await db.query.lesseons.findFirst({
      where: (field) =>
        eq(field.courseId, courseId) &&
        (eq(field.title, title) || eq(field.orderIndex, orderIndex)),
    });

    if (existingLesson) {
      res.status(409).json({
        success: false,
        message: `A lesson with the same title or order already exists in this course.`,
      });
      return;
    }

    // upload markdown to aws s3
    const courseSlug = course.slug;
    const lessonSlug = slugify(title);
    const markdownUrl = await uploadMarkdownToS3(
      contentMd,
      courseSlug,
      lessonSlug,
    );

    // create lesson
    const [lesson] = await db
      .insert(lesseons)
      .values({
        courseId,
        title,
        orderIndex,
        contentMd: markdownUrl,
        videoUrl,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
      .returning();

    if (!lesseons) {
      res.status(400).json({
        success: false,
        message: `Lesson not created for ${course.title}`,
      });
      return;
    }

    res.status(201).json({
      success: true,
      message: "Lesson created successfully.",
      data: lesson,
    });
  } catch (error) {
    console.error("Error creating lesson:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while creating lesson.",
    });
  }
};

export const GetAllLessonsForCourse = async (req: Request, res: Response) => {
  try {
    const { courseId } = req.params;

    if (!courseId) {
      res.status(400).json({
        success: false,
        message: "Missing courseId in the URL.",
      });

      return;
    }

    const course = await db.query.courses.findFirst({
      where: (field) => eq(field.id, courseId),
    });

    if (!course) {
      res.status(404).json({
        success: false,
        message: `Course with id '${courseId}' not found.`,
      });

      return;
    }

    // find all lessons
    const lessons = await db.query.lesseons.findMany({
      where: (fields) => eq(fields.courseId, course.id),
    });

    if (!lessons) {
      res.status(404).json({
        success: false,
        message: `This Course don't have any lessons.`,
      });

      return;
    }

    res.status(200).json({
      success: true,
      message: "Fetched all lessons",
      data: lessons,
    });
  } catch (error) {
    console.log("Error while fetching lessons", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const GetLessonById = async (req: Request, res: Response) => {
  try {
    const course = (req as any).course;
    const courseId = course?.id;

    const { lessonId } = req.params;
    if (!lessonId) {
      res.status(400).json({
        success: false,
        message: "Lessonid is missing in url",
      });
      return;
    }

    const lesson = await db.query.lesseons.findFirst({
      where: (fields) => eq(fields.id, lessonId),
    });

    if (!lesseons) {
      res.status(400).json({
        success: false,
        message: "Lesson is not available",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Fetched lesson",
      data: lesson,
    });
  } catch (error) {
    console.error("Error while fetching lesson:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while fetching lesson.",
    });
  }
};

export const UpdateLesson = async (req: Request, res: Response) => {
  try {
    const { courseId, lessonId } = req.params;
    const { title, orderIndex, videoUrl, contentMd } = req.body;

    // Ensure both IDs are present
    if (!courseId || !lessonId) {
      res.status(400).json({
        success: false,
        message: "Both courseId and lessonId are required in the URL.",
      });
      return;
    }

    // Fetch the lesson
    const existingLesson = await db.query.lesseons.findFirst({
      where: (fields) =>
        and(eq(fields.id, lessonId), eq(fields.courseId, courseId)),
    });

    if (!existingLesson) {
      res.status(404).json({
        success: false,
        message: "Lesson not found for this course.",
      });
    }

    let newContentMdUrl = existingLesson?.contentMd;

    // If new markdown is provided, upload to S3
    if (contentMd) {
      const course = (req as any).course;
      const courseSlug = course.slug || "course";
      const lessonSlug = slugify(title || existingLesson?.title, {
        lower: true,
        strict: true,
      });

      const s3Url = await uploadMarkdownToS3(contentMd, courseSlug, lessonSlug);

      if (typeof s3Url === "string") {
        newContentMdUrl = s3Url;
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to upload markdown to S3.",
        });
      }
    }

    // Prepare update data
    const updateData = {
      ...(title && { title }),
      ...(orderIndex && { orderIndex }),
      ...(videoUrl && { videoUrl }),
      ...(contentMd && { contentMd: newContentMdUrl }),
      updatedAt: new Date(),
    };

    // Execute update
    await db
      .update(lesseons)
      .set(updateData)
      .where(and(eq(lesseons.id, lessonId), eq(lesseons.courseId, courseId)));

    res.status(200).json({
      success: true,
      message: "Lesson updated successfully.",
      data: {
        ...existingLesson,
        ...updateData,
        contentMd: newContentMdUrl,
      },
    });
  } catch (error) {
    console.error("UpdateLesson Error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while updating the lesson.",
    });
  }
};

export const DeleteLesson = async (req: Request, res: Response) => {
  try {
    const { lessonId } = req.params;
    if (!lessonId) {
      res.status(400).json({
        success: false,
        message: "LessonId is required in the URL.",
      });
      return;
    }

    // Delete the lesson
    const lesson = await db.query.lesseons.findFirst({
      where: (fields) => eq(fields.id, lessonId),
    });

    if (!lesson) {
      res.status(400).json({
        success: false,
        message: "This lesson not available.",
      });
      return;
    }

    //otherwise delete the lesson
    await db.delete(lesseons).where(eq(lesseons.id, lessonId));

    res.status(200).json({
      success: true,
      message: "This lesson is deleted",
    });
  } catch (error) {
    console.error("Delete Lesson Error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong while deleting the lesson.",
    });
  }
};
