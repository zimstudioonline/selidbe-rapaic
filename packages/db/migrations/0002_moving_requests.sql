-- Upiti za procenu selidbe sa javnog sajta (marketing kontakt forma). Piše ih
-- anon klijent (bez prijave) — RLS pušta SAMO insert. Čitanje i status ide
-- isključivo kroz admin portal (service-role, iza requireAdmin()).

create table "public"."moving_requests" (
  "id" uuid primary key default gen_random_uuid(),
  "name" text not null,
  "phone" text not null,
  "email" text,
  "move_type" text not null,
  "from_address" text,
  "to_address" text,
  "moving_date" text,
  "notes" text,
  "status" text not null default 'novo',
  "created_at" timestamptz not null default now()
);
--> statement-breakpoint
alter table "public"."moving_requests" enable row level security;
--> statement-breakpoint
create policy "moving_requests_public_insert" on "public"."moving_requests"
  for insert to anon, authenticated with check (true);
