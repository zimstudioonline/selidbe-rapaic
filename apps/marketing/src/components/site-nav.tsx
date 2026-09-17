"use client";

import { belgradeAreas } from "@/lib/belgrade-areas";
import { contactInfo, telHref } from "@/lib/contact";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@repo/ui";
import { ChevronDown, Phone } from "lucide-react";
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
        <Link href="/" className="font-semibold text-ink text-lg">
          {contactInfo.companyName}
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-ink/70 text-sm hover:text-primary">
              Selidbe Beograd
              <ChevronDown className="size-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="max-h-96">
              <DropdownMenuItem asChild>
                <Link href="/selidbe-beograd" className="font-medium">
                  Sve opštine
                </Link>
              </DropdownMenuItem>
              {belgradeAreas.map((area) => (
                <DropdownMenuItem key={area.slug} asChild>
                  <Link href={`/selidbe-beograd/${area.slug}`}>Selidbe {area.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
