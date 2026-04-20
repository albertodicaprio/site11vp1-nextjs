
CREATE TABLE "activities" (
  "id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "activities_id_seq"),
  "proposed_by" text,
  "activity" text,
  "date" timestamp,
  "status" text,
  "timestamp" timestamp
);
