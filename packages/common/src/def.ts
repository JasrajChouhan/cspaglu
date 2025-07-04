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
export type CreateCourseSchemaTypes = z.infer<typeof CreateCourseSchema>;
export type UpdateCourseSchema = z.infer<typeof UpdateCourseSchema>;
export type CreateLessonInput = z.infer<typeof CreateLessonSchema>;
export type UpdateLessonInput = z.infer<typeof UpdateLessonSchema>;
export type ReorderLessonsInput = z.infer<typeof ReorderLessonsSchema>;

export * from "zod";
