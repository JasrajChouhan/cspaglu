import {
  pgTableCreator,
  timestamp,
  boolean,
  text,
  uuid,
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
