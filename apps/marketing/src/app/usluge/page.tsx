import { contactInfo, telHref } from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";
import { movingServices } from "@/lib/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import { Check } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Usluge",
  description:
    "Stambene i poslovne selidbe, pakovanje i demontaža nameštaja, transport klavira i sefova — sve usluge RapaicPrevoz na jednom mestu.",
  path: "/usluge",
});

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-bold text-4xl text-ink">Usluge</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Svaka selidba je drugačija — zato prilagođavamo ekipu, vozilo i pristup onome što ti treba.
      </p>

      <div className="mt-12 space-y-6">
        {movingServices.map((service) => (
          <Card key={service.slug} id={service.slug}>
            <CardHeader>
              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="size-5 text-primary" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription>{service.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-ink/80 text-sm">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border bg-accent/40 px-8 py-10 text-center">
        <h2 className="font-bold text-2xl text-ink">Nisi siguran koja usluga ti treba?</h2>
        <p className="mx-auto mt-2 max-w-md text-muted-foreground">
          Javi nam detalje selidbe — predložićemo najbolje rešenje i besplatnu procenu.
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
