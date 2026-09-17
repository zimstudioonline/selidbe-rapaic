/**
 * Beogradske opštine koje pokrivamo — jedan izvor istine za navigaciju,
 * pregled stranicu (/selidbe-beograd) i pojedinačne stranice po opštini
 * (/selidbe-beograd/[opstina]).
 */

export interface BelgradeArea {
  slug: string;
  name: string;
  /** Kratak opis lokacije/karaktera opštine — koristi se u uvodnom pasusu. */
  blurb: string;
}

export const belgradeAreas: BelgradeArea[] = [
  { slug: "zemun", name: "Zemun", blurb: "stari gradski deo na obali Dunava" },
  {
    slug: "novi-beograd",
    name: "Novi Beograd",
    blurb: "poslovni centar sa najviše zgrada i stanova u nizu",
  },
  { slug: "vozdovac", name: "Voždovac", blurb: "veći deo grada od centra ka jugu" },
  { slug: "cukarica", name: "Čukarica", blurb: "od Ade Ciganlije do Železnika" },
  { slug: "rakovica", name: "Rakovica", blurb: "naše sedište i deo grada koji najbolje poznajemo" },
  { slug: "palilula", name: "Palilula", blurb: "od centra do Krnjače i Borče" },
  {
    slug: "vracar",
    name: "Vračar",
    blurb: "najgušće naseljena opština, uske ulice i stariji stanovi",
  },
  {
    slug: "savski-venac",
    name: "Savski venac",
    blurb: "centralne gradske četvrti oko Slavije i Topčidera",
  },
  { slug: "zvezdara", name: "Zvezdara", blurb: "od Cvetkove pijace do Mirijeva" },
  { slug: "surcin", name: "Surčin", blurb: "prigradska opština oko aerodroma" },
  { slug: "obrenovac", name: "Obrenovac", blurb: "prigradska opština uz Savu" },
  { slug: "lazarevac", name: "Lazarevac", blurb: "najudaljenija opština na jugozapadu grada" },
  { slug: "barajevo", name: "Barajevo", blurb: "prigradska opština sa pretežno porodičnim kućama" },
  { slug: "mladenovac", name: "Mladenovac", blurb: "opština na jugu Beograda" },
];

export function findBelgradeArea(slug: string): BelgradeArea | undefined {
  return belgradeAreas.find((area) => area.slug === slug);
}
