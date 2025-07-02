CREATE TABLE "cspaglu_early_access" (
	"id" text PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	"is_early_access" boolean DEFAULT false NOT NULL,
	"has_used_ticket" text DEFAULT '',
	CONSTRAINT "cspaglu_early_access_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DROP TABLE "cspaglu_users" CASCADE;