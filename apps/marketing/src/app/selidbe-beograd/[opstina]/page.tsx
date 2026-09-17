import { JsonLd } from "@/components/json-ld";
import { belgradeAreas, findBelgradeArea } from "@/lib/belgrade-areas";
import { contactInfo, telHref } from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";
import { movingServices } from "@/lib/services";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return belgradeAreas.map((area) => ({ opstina: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ opstina: string }>;
}): Promise<Metadata> {
  const { opstina } = await params;
  const area = findBelgradeArea(opstina);
  if (!area) {
    return {};
  }
  return buildMetadata({
    title: `Selidbe ${area.name}`,
    description: `Stambene i poslovne selidbe u ${area.name} — besplatna procena, pakovanje, demontaža i transport. Pozovi ili pošalji upit za brzu ponudu.`,
    path: `/selidbe-beograd/${area.slug}`,
  });
}

export default async function BelgradeAreaPage({
  params,
}: {
  params: Promise<{ opstina: string }>;
}) {
  const { opstina } = await params;
  const area = findBelgradeArea(opstina);
  if (!area) {
    notFound();
  }

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Selidbe",
    provider: { "@type": "MovingCompany", name: contactInfo.companyName },
    areaServed: area.name,
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <JsonLd data={serviceJsonLd} />
      <p className="text-muted-foreground text-sm">
        <Link href="/selidbe-beograd" className="hover:text-primary">
          Selidbe Beograd
        </Link>{" "}
        / {area.name}
      </p>
      <h1 className="mt-2 font-bold text-4xl text-ink">Selidbe {area.name}</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Radimo stambene i poslovne selidbe u opštini {area.name} — {area.blurb}. Ekipa i vozilo se
        prilagođavaju veličini selidbe, uz pažljivo pakovanje i transport nameštaja.
      </p>

      <div className="mt-10 space-y-3">
        <h2 className="font-semibold text-2xl text-ink">Šta radimo u {area.name}</h2>
        <ul className="list-disc space-y-1 pl-6 text-ink/80">
          {movingServices.map((service) => (
            <li key={service.slug}>{service.title}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12 rounded-2xl border bg-accent/40 px-8 py-10 text-center">
        <h2 className="font-bold text-2xl text-ink">Selidba u {area.name}?</h2>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          Pošalji nam detalje selidbe i dobijaš besplatnu procenu — bez obaveze.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/kontakt"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
          >
            Zatraži procenu
          </Link>
          <a
            href={telHref()}
            className="rounded-lg border px-6 py-3 font-medium text-ink hover:bg-accent"
          >
            Pozovi: {contactInfo.phoneDisplay}
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-muted-foreground text-sm">
        <Link href="/selidbe-beograd" className="hover:text-primary">
          ← Pogledaj sve opštine koje pokrivamo
        </Link>
      </p>
    </main>
  );
}
