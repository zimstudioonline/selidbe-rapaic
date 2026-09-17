import { belgradeAreas } from "@/lib/belgrade-areas";
import { contactInfo, telHref } from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";
import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Selidbe Beograd — sve opštine",
  description:
    "Lokalne selidbe u svim opštinama Beograda: Zemun, Novi Beograd, Voždovac, Čukarica, Rakovica, Palilula, Vračar, Savski venac, Zvezdara, Surčin, Obrenovac, Lazarevac, Barajevo, Mladenovac.",
  path: "/selidbe-beograd",
});

export default function BelgradeMovingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-bold text-4xl text-ink">Selidbe Beograd — sve opštine</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Radimo lokalne selidbe u svim delovima Beograda. Izaberi svoju opštinu za detalje, ili
        pošalji upit direktno.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {belgradeAreas.map((area) => (
          <Link key={area.slug} href={`/selidbe-beograd/${area.slug}`} className="block">
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle>Selidbe {area.name}</CardTitle>
                <CardDescription className="capitalize">{area.blurb}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border bg-accent/40 px-8 py-10 text-center">
        <h2 className="font-bold text-2xl text-ink">Ne vidiš svoju opštinu?</h2>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          Pokrivamo ceo Beograd i okolinu, kao i međugradske selidbe — javi nam se.
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
    </main>
  );
}
