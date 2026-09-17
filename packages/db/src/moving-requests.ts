import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

/**
 * Upiti za procenu selidbe sa marketing kontakt forme — piše ih anon klijent
 * (RLS dozvoljava samo insert), čita ih isključivo admin portal (service-role).
 */
export const movingRequests = pgTable("moving_requests", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  moveType: text("move_type").notNull(),
  fromAddress: text("from_address"),
  toAddress: text("to_address"),
  movingDate: text("moving_date"),
  notes: text("notes"),
  status: text("status").notNull().default("novo"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
