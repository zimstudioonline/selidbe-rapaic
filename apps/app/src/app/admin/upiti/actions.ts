"use server";

import { requireAdmin } from "@/lib/admin";
import { createSupabaseAdminClient } from "@repo/auth/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const STATUSES = ["novo", "kontaktiran", "zavrseno"] as const;
type Status = (typeof STATUSES)[number];

function isStatus(value: string): value is Status {
  return (STATUSES as readonly string[]).includes(value);
}

/** Promena statusa upita za procenu selidbe — SAMO za admina. */
export async function setRequestStatus(formData: FormData) {
  await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!id || !isStatus(status)) {
    redirect(`/admin/upiti?error=${encodeURIComponent("Nevalidan zahtev.")}`);
  }

  const admin = createSupabaseAdminClient();
  const { error } = await admin.from("moving_requests").update({ status }).eq("id", id);
  if (error) {
    redirect(`/admin/upiti?error=${encodeURIComponent(`Izmena nije uspela: ${error.message}`)}`);
  }

  revalidatePath("/admin/upiti");
  redirect(`/admin/upiti?message=${encodeURIComponent("Status ažuriran.")}`);
}
