/** Kontakt podaci firme — jedan izvor istine (nav, footer, kontakt stranica, JSON-LD). */

export const contactInfo = {
  companyName: "RapaicPrevoz",
  phoneDisplay: "061 20 62 878",
  /** E.164 format za tel:/viber: linkove. */
  phoneE164: "+381612062878",
  email: "rapaicprevozonline@gmail.com",
  addressStreet: "Milorada Draškovića 46/7",
  addressLocality: "Rakovica, Beograd",
} as const;

export function telHref(): string {
  return `tel:${contactInfo.phoneE164}`;
}

export function viberHref(): string {
  return `viber://chat?number=${encodeURIComponent(contactInfo.phoneE164)}`;
}

export function mailHref(): string {
  return `mailto:${contactInfo.email}`;
}
