"use client";

import { contactInfo, telHref, viberHref } from "@/lib/contact";
import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Sticky traka na dnu ekrana sa glavnim pozivom na akciju — sakrivena na /kontakt. */
export function StickyCta() {
  const pathname = usePathname();
  if (pathname === "/kontakt") {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <p className="hidden text-ink text-sm md:block">
          Pozovi ili pošalji poruku na Viber za hitne slučajeve.
        </p>
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <Link
            href="/kontakt"
            className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-center font-medium text-primary-foreground text-sm hover:bg-primary/90 sm:flex-initial"
          >
            Zatraži besplatnu procenu
          </Link>
          <a
            href={telHref()}
            aria-label={`Pozovi ${contactInfo.phoneDisplay}`}
            className="flex size-10 shrink-0 items-center justify-center rounded-lg border text-ink hover:bg-accent"
          >
            <Phone className="size-4" />
          </a>
          <a
            href={viberHref()}
            aria-label="Pošalji poruku na Viber"
            className="flex size-10 shrink-0 items-center justify-center rounded-lg border text-ink hover:bg-accent"
          >
            <MessageCircle className="size-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
