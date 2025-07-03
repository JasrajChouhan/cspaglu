import { z } from "zod";
import {
  CreateCourseSchema,
  EarlyAccessSchema,
  UpdateCourseSchema,
} from "./types";

export type earlyAccessSchemaType = z.infer<typeof EarlyAccessSchema>;
export type CreateCourseSchemaTypes = z.infer<typeof CreateCourseSchema>;
export type UpdateCourseSchema = z.infer<typeof UpdateCourseSchema>;

export * from "zod";
