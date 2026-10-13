import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { serviceFamilies } from "@/components/service-families";
import { services } from "@/lib/content";
import { Footer } from "@/components/shared";
import { indexable, site } from "@/lib/site";
import { absoluteUrl, organization } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";
import "./studio.css";
import "./photography.css";
import "./header.css";
import "./refinement.css";

const studioFont = localFont({ src: "../../public/fonts/geist-latin.woff2", variable: "--font-studio", display: "swap", weight: "100 900" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "ManaCircle — Web Design, Branding & Telugu Marketing", template: "%s | ManaCircle" },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, title: "ManaCircle — Branding & websites. Made to connect.", description: site.description, images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
  robots: { index: indexable, follow: indexable },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f9f9f4" };

const headerServiceGroups = serviceFamilies.map(group => ({
  id: group.id, title: group.title, icon: group.icon,
  links: group.slugs.map(slug => {
    const service = services.find(item => item.slug === slug)!;
    return { slug, title: service.title };
  }),
}));

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-scroll-behavior="smooth"><body id="top" className={studioFont.variable}><StructuredData data={organization} /><StructuredData data={{ "@context": "https://schema.org", "@type": "WebSite", "@id": absoluteUrl("/#website"), name: site.name, url: absoluteUrl(), inLanguage: "en", publisher: { "@id": absoluteUrl("/#organization") } }} /><a className="skip-link" href="#main-content">Skip to content</a><Header serviceGroups={headerServiceGroups} /><main id="main-content">{children}</main><Footer /></body></html>;
}
