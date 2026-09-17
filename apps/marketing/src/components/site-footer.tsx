import { contactInfo, mailHref, telHref } from "@/lib/contact";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-ink/10 border-t">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-10 sm:grid-cols-3">
        <div>
          <p className="font-semibold text-ink">{contactInfo.companyName}</p>
          <p className="mt-2 text-muted-foreground text-sm">
            Selidbe i prevoz u Beogradu i okolini — stambene i poslovne selidbe, pakovanje i
            transport osetljive robe.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <a href={telHref()} className="flex items-center gap-2 text-ink/80 hover:text-primary">
            <Phone className="size-4 shrink-0" />
            {contactInfo.phoneDisplay}
          </a>
          <a href={mailHref()} className="flex items-center gap-2 text-ink/80 hover:text-primary">
            <Mail className="size-4 shrink-0" />
            {contactInfo.email}
          </a>
          <p className="flex items-start gap-2 text-ink/80">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            <span>
              {contactInfo.addressStreet}, {contactInfo.addressLocality}
            </span>
          </p>
        </div>
        <nav className="flex flex-col gap-2 text-sm sm:items-end">
          <Link href="/usluge" className="text-ink/70 hover:text-ink">
            Usluge
          </Link>
          <Link href="/selidbe-beograd" className="text-ink/70 hover:text-ink">
            Selidbe Beograd
          </Link>
          <Link href="/privatnost" className="text-ink/70 hover:text-ink">
            Politika privatnosti
          </Link>
          <Link href="/uslovi" className="text-ink/70 hover:text-ink">
            Uslovi korišćenja
          </Link>
        </nav>
      </div>
      <div className="border-ink/10 border-t px-6 py-4 text-center text-muted-foreground text-xs">
        © {new Date().getFullYear()} {contactInfo.companyName}. Sva prava zadržana.
      </div>
    </footer>
  );
}
