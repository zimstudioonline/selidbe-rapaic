import { marketingEnv } from "@repo/config/marketing-env";
import { createClient } from "@supabase/supabase-js";

/**
 * Upis upita za procenu selidbe — anon klijent, RLS pušta SAMO insert
 * (vidi packages/db/migrations/0002_moving_requests.sql). Isti obrazac kao
 * lib/blog.ts: marketing radi i BEZ Supabase ključeva, tada forma javlja
 * grešku i upućuje posetioca da pozove/pošalje email direktno.
 */

export interface MovingRequestInput {
  name: string;
  phone: string;
  email: string;
  moveType: string;
  fromAddress: string;
  toAddress: string;
  movingDate: string;
  notes: string;
}

function requestsClient() {
  const env = marketingEnv();
  if (!env.NEXT_PUBLIC_SUPABASE_URL || !env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return null;
  }
  return createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  });
}

export async function submitMovingRequest(input: MovingRequestInput): Promise<void> {
  const supabase = requestsClient();
  if (!supabase) {
    throw new Error("Slanje forme trenutno nije dostupno.");
  }
  const { error } = await supabase.from("moving_requests").insert({
    name: input.name,
    phone: input.phone,
    email: input.email || null,
    move_type: input.moveType,
    from_address: input.fromAddress || null,
    to_address: input.toAddress || null,
    moving_date: input.movingDate || null,
    notes: input.notes || null,
  });
  if (error) {
    throw new Error(`Slanje upita nije uspelo: ${error.message}`);
  }
}
