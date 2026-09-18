"use server";

import { marketingEnv } from "@repo/config/marketing-env";
import { redirect } from "next/navigation";

/**
 * Upis upita za procenu selidbe — šalje se na Google Apps Script Web App koji
 * upisuje red u Google Sheet i šalje email obaveštenje (vidi README uputstvo
 * za podešavanje skripte). redirect() je namerno VAN try bloka (interno radi
 * kroz throw — catch bi ga progutao).
 */
export async function requestQuote(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const moveType = String(formData.get("moveType") ?? "").trim();

  if (!name || !phone || !moveType) {
    redirect(`/kontakt?error=${encodeURIComponent("Ime, telefon i vrsta selidbe su obavezni.")}`);
  }

  const payload = {
    name,
    phone,
    moveType,
    email: String(formData.get("email") ?? "").trim(),
    fromAddress: String(formData.get("fromAddress") ?? "").trim(),
    toAddress: String(formData.get("toAddress") ?? "").trim(),
    movingDate: String(formData.get("movingDate") ?? "").trim(),
    notes: String(formData.get("notes") ?? "").trim(),
  };

  let failure: string | null = null;
  const scriptUrl = marketingEnv().GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    failure = "Slanje upita trenutno nije podešeno — pozovi nas direktno ili pošalji email.";
  } else {
    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Google Script je vratio status ${response.status}`);
      }
    } catch (error) {
      failure =
        error instanceof Error
          ? error.message
          : "Slanje upita nije uspelo — pozovi nas direktno ili pošalji email.";
    }
  }

  if (failure) {
    redirect(`/kontakt?error=${encodeURIComponent(failure)}`);
  }
  redirect(
    `/kontakt?message=${encodeURIComponent("Hvala! Javljamo se uskoro sa procenom — za hitne slučajeve slobodno pozovi direktno.")}`,
  );
}
