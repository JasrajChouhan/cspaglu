import { z } from 'zod';
import { CreateCourseSchema, EarlyAccessSchema } from './types';

export type earlyAccessSchemaType = z.infer<typeof EarlyAccessSchema>;
export type CreateCourseSchemaTypes = z.infer<typeof CreateCourseSchema>;

export * from 'zod';
