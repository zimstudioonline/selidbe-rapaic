import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import { Clock, MapPinned, PackageCheck, PhoneCall, ShieldCheck, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Reason {
  title: string;
  description: string;
  icon: LucideIcon;
}

const reasons: Reason[] = [
  {
    title: "Besplatna procena",
    description: "Javi nam detalje selidbe i dobijaš procenu troškova bez obaveze.",
    icon: Wallet,
  },
  {
    title: "Brz odgovor",
    description: "Za hitne slučajeve dostupni smo pozivom ili na Viber.",
    icon: PhoneCall,
  },
  {
    title: "Pažljivo pakovanje",
    description: "Nameštaj i osetljive predmete štitimo folijom i materijalom za zaštitu od loma.",
    icon: PackageCheck,
  },
  {
    title: "Pokrivamo ceo Beograd",
    description: "Selidbe u svim opštinama grada, kao i međugradski prevoz.",
    icon: MapPinned,
  },
  {
    title: "Rad po dogovoru",
    description: "Selidbe zakazujemo i van radnog vremena i vikendom, prema tvom rasporedu.",
    icon: Clock,
  },
  {
    title: "Odgovoran odnos prema stvarima",
    description:
      "Utovar i istovar radimo pažljivo, uz opremu prilagođenu težim i glomaznim predmetima.",
    icon: ShieldCheck,
  },
];

export function FeaturesSection() {
  return (
    <section id="zasto-mi" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-bold text-3xl text-ink">Zašto RapaicPrevoz</h2>
        <p className="mt-4 text-muted-foreground">
          Selidba je stresna sama po sebi — trudimo se da prevoz stvari bude deo koji ne mora da
          brine.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <Card key={reason.title}>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <reason.icon className="size-5 text-primary" />
              </div>
              <CardTitle>{reason.title}</CardTitle>
              <CardDescription>{reason.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
