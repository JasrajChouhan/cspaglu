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
