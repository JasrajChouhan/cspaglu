import {
  pgTableCreator,
  timestamp,
  boolean,
  text,
  uuid,
  integer,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `cspaglu_${name}`);

export const earlyAccess = createTable("early_access", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  isEarlyAccess: boolean("is_early_access").notNull().default(false),
  hasUsedTicket: text("has_used_ticket").default(""),
});

export const courses = createTable("courses", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  slug: text("slug").unique().notNull(),
  thumbnailUrl: text("thumbnail_url"), // If we need to add thumbnail for a course
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const lesseons = createTable("lessons", {
  id: uuid("id").primaryKey().defaultRandom(),
  courseId: uuid("courseId")
    .notNull()
    .references(() => courses.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  orderIndex: integer("order_index").notNull(),
  videoUrl: text("video_url"),
  contentMd: text("content_md"), //TODO: S3 OR MARKDOWN
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const deletedCourses = createTable("deleted_courses", {
  id: uuid("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull(),
  description: text("description"),
  thumbnailUrl: text("thumbnail_url"),
  createdAt: timestamp("created_at", { withTimezone: true }),
  updatedAt: timestamp("updated_at", { withTimezone: true }),
  deletedAt: timestamp("deleted_at", { withTimezone: true }).notNull(),
});
