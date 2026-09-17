import { belgradeAreas } from "@/lib/belgrade-areas";
import { contactInfo } from "@/lib/contact";
import { marketingEnv } from "@repo/config/marketing-env";

/**
 * JSON-LD schema markup — hrana za pretraživače i AI asistente (AEO).
 * Builderi vraćaju objekte; render ide kroz <JsonLd />.
 */

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Escape "<" sprečava </script> breakout ako sadržaj ikad postane dinamičan.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON.stringify + escape, bez sirovog user inputa
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

export function organizationJsonLd(): Record<string, unknown> {
  const base = marketingEnv().NEXT_PUBLIC_MARKETING_URL;
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: contactInfo.companyName,
    url: base,
    telephone: contactInfo.phoneE164,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.addressStreet,
      addressLocality: "Beograd",
      addressCountry: "RS",
    },
    areaServed: belgradeAreas.map((area) => area.name),
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  date: string;
  slug: string;
}): Record<string, unknown> {
  const base = marketingEnv().NEXT_PUBLIC_MARKETING_URL;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    url: `${base}/${article.slug}`,
    publisher: { "@type": "Organization", name: contactInfo.companyName, url: base },
  };
}

export function faqJsonLd(
  items: Array<{ question: string; answer: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
