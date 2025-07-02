import { z } from "zod";
import { EarlyAccessSchema } from "./types";

export type earlyAccessSchemaType = z.infer<typeof EarlyAccessSchema>;
