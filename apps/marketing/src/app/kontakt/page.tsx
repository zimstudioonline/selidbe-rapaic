import { QuoteForm } from "@/components/sections/quote-form";
import { contactInfo, mailHref, telHref, viberHref } from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";
import { Alert, AlertDescription, Card, CardContent } from "@repo/ui";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = buildMetadata({
  title: "Kontakt",
  description:
    "Pozovi ili pošalji upit za besplatnu procenu selidbe — RapaicPrevoz, Beograd. Odgovaramo brzo, hitni slučajevi preko Vibera.",
  path: "/kontakt",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string; error?: string }>;
}) {
  const { message, error } = await searchParams;

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="font-bold text-4xl text-ink">Kontakt</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Pošalji upit za besplatnu procenu ili nas pozovi direktno — za hitne slučajeve tu smo i na
        Viberu.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <a
                href={telHref()}
                className="flex items-center gap-3 font-medium text-ink hover:text-primary"
              >
                <Phone className="size-5 shrink-0 text-primary" />
                {contactInfo.phoneDisplay}
              </a>
              <a
                href={viberHref()}
                className="block text-muted-foreground text-sm hover:text-primary"
              >
                Piši nam na Viber →
              </a>
              <a href={mailHref()} className="flex items-center gap-3 text-ink hover:text-primary">
                <Mail className="size-5 shrink-0 text-primary" />
                {contactInfo.email}
              </a>
              <p className="flex items-start gap-3 text-ink">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  {contactInfo.addressStreet}
                  <br />
                  {contactInfo.addressLocality}
                </span>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          {message ? (
            <Alert className="mb-6">
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          ) : null}
          {error ? (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : null}
          <QuoteForm />
        </div>
      </div>
    </main>
  );
}
