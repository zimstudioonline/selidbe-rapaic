"use server";

import { redirect } from "next/navigation";

/**
 * Upis upita za procenu selidbe — šalje se direktno na postojeću Google Formu
 * (isti obrazac kao klasičan submit forme, samo sa servera). Entry ID-jevi su
 * izvučeni iz HTML-a te forme i moraju ostati usklađeni ako se pitanja u
 * formi menjaju. redirect() je namerno VAN try bloka (interno radi kroz throw
 * — catch bi ga progutao).
 */

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc8aJ08t1UUnis5ijnLm-mtdAdcdoSFZ4SFp5h_p6FVl-krbA/formResponse";

const FORM_ENTRIES = {
  name: "entry.1036473578",
  phone: "entry.495721954",
  email: "entry.308042823",
  moveType: "entry.2047416149",
  fromAddress: "entry.2072732171",
  toAddress: "entry.1725565438",
  movingDate: "entry.875801568",
  notes: "entry.1190278128",
} as const;

export async function requestQuote(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const moveType = String(formData.get("moveType") ?? "").trim();

  if (!name || !phone || !moveType) {
    redirect(`/kontakt?error=${encodeURIComponent("Ime, telefon i vrsta selidbe su obavezni.")}`);
  }

  const params = new URLSearchParams({
    [FORM_ENTRIES.name]: name,
    [FORM_ENTRIES.phone]: phone,
    [FORM_ENTRIES.moveType]: moveType,
    [FORM_ENTRIES.email]: String(formData.get("email") ?? "").trim(),
    [FORM_ENTRIES.fromAddress]: String(formData.get("fromAddress") ?? "").trim(),
    [FORM_ENTRIES.toAddress]: String(formData.get("toAddress") ?? "").trim(),
    [FORM_ENTRIES.movingDate]: String(formData.get("movingDate") ?? "").trim(),
    [FORM_ENTRIES.notes]: String(formData.get("notes") ?? "").trim(),
  });

  let failure: string | null = null;
  try {
    const response = await fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      body: params,
    });
    if (!response.ok) {
      throw new Error(`Google Forma je vratila status ${response.status}`);
    }
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
