import { z, ZodSchema } from "zod";
import { EarlyAccessSchema } from "./types";

export type earlyAccessSchemaType = z.infer<typeof EarlyAccessSchema>;

export * from "zod";
