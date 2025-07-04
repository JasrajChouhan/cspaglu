CREATE TABLE "cspaglu_courses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"slug" text NOT NULL,
	"thumbnail_url" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "cspaglu_courses_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "cspaglu_early_access" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_at" timestamp NOT NULL,
	"is_early_access" boolean DEFAULT false NOT NULL,
	"has_used_ticket" text DEFAULT '',
	CONSTRAINT "cspaglu_early_access_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "cspaglu_lessons" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"courseId" uuid NOT NULL,
	"title" text NOT NULL,
	"order_index" integer NOT NULL,
	"video_url" text,
	"content_md" text,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "cspaglu_lessons" ADD CONSTRAINT "cspaglu_lessons_courseId_cspaglu_courses_id_fk" FOREIGN KEY ("courseId") REFERENCES "public"."cspaglu_courses"("id") ON DELETE cascade ON UPDATE no action;