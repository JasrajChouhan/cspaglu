import { z } from "zod";
import {
  CreateCourseSchema,
  EarlyAccessSchema,
  UpdateCourseSchema,
  CreateLessonSchema,
  UpdateLessonSchema,
  ReorderLessonsSchema,
} from "./types";

export type earlyAccessSchemaType = z.infer<typeof EarlyAccessSchema>;
export type CreateCourseSchemaType = z.infer<typeof CreateCourseSchema>;
export type UpdateCourseSchemaType = z.infer<typeof UpdateCourseSchema>;
export type CreateLessonInputType = z.infer<typeof CreateLessonSchema>;
export type UpdateLessonInputType = z.infer<typeof UpdateLessonSchema>;
export type ReorderLessonsInputType = z.infer<typeof ReorderLessonsSchema>;

export * from "zod";
