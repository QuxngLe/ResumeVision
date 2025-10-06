CREATE TABLE IF NOT EXISTS "request_logs" (
	"id" serial PRIMARY KEY NOT NULL,
	"ip" varchar(64) NOT NULL,
	"route" varchar(128) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
