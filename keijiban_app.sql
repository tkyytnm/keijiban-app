CREATE TABLE "threads" (
  "id" serial PRIMARY KEY,
  "title" varchar(255),
  "user_id" integer,
  "created_at" timestamp
);

CREATE TABLE "comments" (
  "id" serial PRIMARY KEY,
  "body" text,
  "thread_id" integer,
  "user_id" integer,
  "created_at" timestamp
);

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "username" varchar(255),
  "email" varchar(255),
  "password" text,
  "created_at" timestamp
);

ALTER TABLE "comments" ADD FOREIGN KEY ("thread_id") REFERENCES "threads" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "threads" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
