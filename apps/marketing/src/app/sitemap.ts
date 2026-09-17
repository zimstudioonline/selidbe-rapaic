import { belgradeAreas } from "@/lib/belgrade-areas";
import { getPublishedPosts } from "@/lib/blog";
import { marketingEnv } from "@repo/config/marketing-env";
import type { MetadataRoute } from "next";

// Moduli mogu da dodaju dinamičke stavke (npr. blog objave) — osveži bar na sat.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = marketingEnv().NEXT_PUBLIC_MARKETING_URL;
  const entries: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/usluge`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/kontakt`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/posao`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/selidbe-beograd`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privatnost`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/uslovi`, changeFrequency: "yearly", priority: 0.3 },
  ];
  for (const area of belgradeAreas) {
    entries.push({
      url: `${base}/selidbe-beograd/${area.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }
  entries.push({ url: `${base}/blog`, changeFrequency: "weekly", priority: 0.7 });
  for (const post of await getPublishedPosts()) {
    entries.push({
      url: `${base}/${post.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  // @ludus:inject:sitemap:entries
  return entries;
}
