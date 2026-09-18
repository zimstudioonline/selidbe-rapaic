"use client";

import { belgradeAreas } from "@/lib/belgrade-areas";
import { contactInfo, telHref } from "@/lib/contact";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@repo/ui";
import { ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links: Array<{ href: string; label: string }> = [
  { href: "/usluge", label: "Usluge" },
  { href: "/blog", label: "Blog" },
  { href: "/posao", label: "Posao" },
  { href: "/kontakt", label: "Kontakt" },
  // @ludus:inject:nav:links
];

export function SiteNav() {
  return (
    <header className="border-ink/10 border-b">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-3 px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-wordmark.png"
            alt={contactInfo.companyName}
            width={556}
            height={301}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-0.5">
            <Link href="/selidbe-beograd" className="text-ink/70 text-sm hover:text-primary">
              Selidbe Beograd
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                aria-label="Prikaži opštine"
                className="flex items-center p-1 text-ink/70 hover:text-primary"
              >
                <ChevronDown className="size-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="max-h-96">
                {belgradeAreas.map((area) => (
                  <DropdownMenuItem key={area.slug} asChild>
                    <Link href={`/selidbe-beograd/${area.slug}`}>Selidbe {area.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink/70 text-sm hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={telHref()}
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground text-sm hover:bg-primary/90"
          >
            <Phone className="size-4" />
            {contactInfo.phoneDisplay}
          </a>
        </div>
      </nav>
    </header>
  );
}
