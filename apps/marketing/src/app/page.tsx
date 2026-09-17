import { JsonLd, faqJsonLd } from "@/components/json-ld";
import { FAQSection, faqItems } from "@/components/sections/faq";
import { FeaturesSection } from "@/components/sections/features";
import { ServicesSection } from "@/components/sections/services";
import { contactInfo, telHref, viberHref } from "@/lib/contact";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <JsonLd data={faqJsonLd(faqItems)} />
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 font-medium text-primary text-sm">
          Selidbe Beograd
        </p>
        <h1 className="mx-auto max-w-2xl font-bold text-5xl text-ink leading-tight">
          Selidba bez glavobolje, uz procenu unapred
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Stambene i poslovne selidbe, pakovanje, demontaža i transport osetljive robe — u svim
          opštinama Beograda i međugradski.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/kontakt"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90"
          >
            Zatraži besplatnu procenu
          </Link>
          <a
            href={telHref()}
            className="rounded-lg border px-6 py-3 font-medium text-ink hover:bg-accent"
          >
            Pozovi: {contactInfo.phoneDisplay}
          </a>
        </div>
        <p className="mt-4 text-muted-foreground text-sm">
          Hitno?{" "}
          <a href={viberHref()} className="font-medium text-primary hover:underline">
            Piši nam na Viber
          </a>
          .
        </p>
      </section>

      <ServicesSection />
      <FeaturesSection />
      <FAQSection />

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground">
          <h2 className="font-bold text-3xl">Planiraš selidbu?</h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
            Javi nam se za besplatnu procenu — odgovaramo brzo, a za hitne slučajeve tu smo i na
            Viberu.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-block rounded-lg bg-background px-6 py-3 font-medium text-ink hover:bg-background/90"
            >
              Zatraži procenu
            </Link>
            <a
              href={telHref()}
              className="inline-block rounded-lg border border-primary-foreground/40 px-6 py-3 font-medium text-primary-foreground hover:bg-primary-foreground/10"
            >
              {contactInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
