"use server";

import { submitMovingRequest } from "@/lib/moving-requests";
import { redirect } from "next/navigation";

/**
 * Upis upita za procenu selidbe sa javne kontakt forme (anon klijent, RLS
 * dozvoljava samo insert). redirect() je namerno VAN try bloka (interno radi
 * kroz throw — catch bi ga progutao).
 */
export async function requestQuote(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const moveType = String(formData.get("moveType") ?? "").trim();

  if (!name || !phone || !moveType) {
    redirect(`/kontakt?error=${encodeURIComponent("Ime, telefon i vrsta selidbe su obavezni.")}`);
  }

  let failure: string | null = null;
  try {
    await submitMovingRequest({
      name,
      phone,
      moveType,
      email: String(formData.get("email") ?? "").trim(),
      fromAddress: String(formData.get("fromAddress") ?? "").trim(),
      toAddress: String(formData.get("toAddress") ?? "").trim(),
      movingDate: String(formData.get("movingDate") ?? "").trim(),
      notes: String(formData.get("notes") ?? "").trim(),
    });
  } catch (error) {
    failure =
      error instanceof Error
        ? error.message
        : "Slanje upita nije uspelo — pozovi nas direktno ili pošalji email.";
  }

  if (failure) {
    redirect(`/kontakt?error=${encodeURIComponent(failure)}`);
  }
  redirect(
    `/kontakt?message=${encodeURIComponent("Hvala! Javljamo se uskoro sa procenom — za hitne slučajeve slobodno pozovi direktno.")}`,
  );
}
