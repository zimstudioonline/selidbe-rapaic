import { Building2, Home, type LucideIcon, Package, Warehouse } from "lucide-react";

/** Usluge firme — jedan izvor istine za teaser na početnoj i za /usluge. */

export interface MovingService {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  details: string[];
}

export const movingServices: MovingService[] = [
  {
    slug: "stambene-selidbe",
    title: "Stambene selidbe",
    icon: Home,
    summary: "Selidba stana ili kuće, u okviru Beograda ili međugradski.",
    details: [
      "Utovar, prevoz i istovar nameštaja, kutija i kućnih aparata",
      "Zaštita nameštaja i osetljivih predmeta folijom i ćebadima",
      "Rad vikendom i van radnog vremena, po dogovoru",
      "Ekipa i vozilo prilagođeni veličini stana ili kuće",
    ],
  },
  {
    slug: "poslovne-selidbe",
    title: "Poslovne selidbe",
    icon: Building2,
    summary: "Selidba kancelarija, magacina i poslovnog prostora uz minimalan zastoj u radu.",
    details: [
      "Selidba kancelarijskog nameštaja, tehnike i arhive",
      "Rad van radnog vremena da se ne remeti poslovanje",
      "Obeležavanje i organizacija kutija po prostorijama/sektorima",
      "Selidba magacinske i poslovne opreme",
    ],
  },
  {
    slug: "pakovanje-i-demontaza",
    title: "Pakovanje i demontaža",
    icon: Package,
    summary: "Pakovanje stvari i demontaža/montaža nameštaja pre i posle prevoza.",
    details: [
      "Pakovanje u kutije, foliju i materijal za zaštitu od loma",
      "Demontaža i montaža ormana, kreveta i kuhinjskih elemenata",
      "Odvajanje krhkih i vrednih predmeta za poseban transport",
      "Materijal za pakovanje po potrebi",
    ],
  },
  {
    slug: "skladistenje-klaviri-sefovi",
    title: "Skladištenje i transport klavira/sefova",
    icon: Warehouse,
    summary: "Privremeno skladištenje stvari i transport teških, osetljivih predmeta.",
    details: [
      "Transport klavira, sefova i druge teške ili glomazne robe",
      "Oprema za bezbedno spuštanje i podizanje (rampe, kaiševi, kolica)",
      "Privremeno skladištenje stvari u periodu između dve selidbe",
      "Procena pristupa (stepenice, lift, uska vrata) pre dolaska ekipe",
    ],
  },
];

export function findService(slug: string): MovingService | undefined {
  return movingServices.find((service) => service.slug === slug);
}
