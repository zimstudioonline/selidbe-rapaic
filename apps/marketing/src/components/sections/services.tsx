import { movingServices } from "@/lib/services";
import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section id="usluge" className="mx-auto max-w-5xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-bold text-3xl text-ink">Usluge</h2>
        <p className="mt-4 text-muted-foreground">
          Od pakovanja jedne sobe do selidbe cele kancelarije.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {movingServices.map((service) => (
          <Link key={service.slug} href="/usluge" className="block">
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="size-5 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.summary}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/usluge" className="font-medium text-primary text-sm hover:underline">
          Pogledaj sve usluge →
        </Link>
      </div>
    </section>
  );
}
