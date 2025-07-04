import z from "zod";

export const EarlyAccessSchema = z.object({
  email: z.string().refine(
    (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    (val) => ({ message: `The email is invalid` }),
  ),
});

export const CreateCourseSchema = z.object({
  title: z
    .string()
    .min(10, { message: "Title must be at least 10 characters long." })
    .max(100, { message: "Title cannot exceed 100 characters." }),

  description: z
    .string()
    .max(300, { message: "Description cannot exceed 300 characters." })
    .optional(),

  slug: z
    .string()
    .min(5, { message: "Slug must be at least 5 characters long." })
    .max(20, { message: "Slug cannot exceed 20 characters." }),

  thumbnailUrl: z
    .string()
    .url({ message: "Thumbnail must be a valid URL." })
    .optional(),
});

export const UpdateCourseSchema = z.object({
  identifier: z
    .object({
      id: z.number().optional(),
      title: z.string().optional(),
      slug: z.string().optional(),
    })
    .refine((val) => val.id || val.title || val.slug, {
      message: "At least one identifier (id, title, or slug) must be provided.",
    }),
  data: z
    .object({
      title: z.string().min(10).max(100).optional(),
      description: z.string().max(300).optional(),
      slug: z.string().min(5).max(20).optional(),
      thumbnailUrl: z.string().optional(),
    })
    .refine((val) => Object.keys(val).length > 0, {
      message: "At least one field to update must be provided.",
    }),
});

export const CreateLessonSchema = z.object({
  title: z
    .string()
    .min(10, { message: "Title must be at least 10 characters long." })
    .max(100, { message: "Title cannot exceed 100 characters." }),

  orderIndex: z
    .number()
    .min(1, { message: "Order index must be greater than 0." }),

  videoUrl: z.string().url("Invalid video URL").optional(),

  contentMd: z.string().min(1, { message: "Markdown content is required." }),
});

export const UpdateLessonSchema = z
  .object({
    title: z.string().min(10).max(100).optional(),

    orderIndex: z.number().min(1).optional(),

    videoUrl: z.string().url().optional(),

    contentMd: z.string().optional(),
  })
  .refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided to update.",
  });

export const ReorderLessonsSchema = z.object({
  lessonOrder: z
    .array(
      z.object({
        lessonId: z.string().uuid(),
        orderIndex: z.number().min(1),
      }),
    )
    .min(1, { message: "At least one lesson must be reordered." }),
});
