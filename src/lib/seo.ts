import type { Metadata } from "next";
import { site } from "./site";

export const absoluteUrl = (path = "/") => new URL(path, site.url).toString();

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: `${title} | ManaCircle` }, description, alternates: { canonical: path },
    openGraph: { type: "website", title: `${title} | ManaCircle`, description, url: absoluteUrl(path), siteName: site.name, images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: `${title} | ManaCircle`, description, images: ["/opengraph-image"] },
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: absoluteUrl(item.path) })) };
}

export const organization = {
  "@context": "https://schema.org", "@type": "Organization",
  "@id": absoluteUrl("/#organization"), name: site.name, url: absoluteUrl(),
  description: site.description, logo: absoluteUrl("/brand-mark.svg"),
  areaServed: "Worldwide",
  ...(site.email ? { email: site.email } : {}),
  ...(site.instagram ? { sameAs: [site.instagram] } : {}),
};
