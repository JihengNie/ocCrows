set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";


CREATE TABLE "public"."players" (
	"playerId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"nickname" TEXT NOT NULL,
	"number" int NOT NULL,
	"email" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	"season" int NOT NULL,
	"picture" TEXT NOT NULL,
	CONSTRAINT "players_pk" PRIMARY KEY ("playerId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."contact" (
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"message" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."facts" (
	"number" serial NOT NULL UNIQUE,
	"text" TEXT NOT NULL,
	"author" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);
