import { contactInfo, mailHref } from "@/lib/contact";
import { buildMetadata } from "@/lib/seo";
import { Card, CardContent } from "@repo/ui";
import { Mail } from "lucide-react";

export const metadata = buildMetadata({
  title: "Posao",
  description:
    "Pridruži se timu RapaicPrevoz — pošalji CV za posao vozača ili radnika na selidbama.",
  path: "/posao",
});

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-bold text-4xl text-ink">Posao</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Tražimo pouzdane i odgovorne ljude za rad na selidbama — vozače i radnike na utovaru i
        istovaru.
      </p>

      <Card className="mt-10">
        <CardContent className="space-y-4 pt-6 text-ink/80">
          <p>
            Trenutno nemamo aktivan konkurs, ali CV-je primamo u svakom trenutku — javljamo se kad
            se otvori mesto koje odgovara tvom profilu.
          </p>
          <div>
            <p className="font-medium text-ink">Šta nam znači najviše:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Odgovornost i tačnost</li>
              <li>Pažljiv odnos prema tuđim stvarima</li>
              <li>Fizička spremnost za rad na utovaru/istovaru</li>
              <li>Za vozače: važeća vozačka dozvola odgovarajuće kategorije</li>
            </ul>
          </div>
          <a
            href={mailHref()}
            className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
          >
            <Mail className="size-4" />
            Pošalji CV na {contactInfo.email}
          </a>
        </CardContent>
      </Card>
    </main>
  );
}
