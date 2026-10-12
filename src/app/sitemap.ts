import type { MetadataRoute } from "next";
import { services, projects } from "@/lib/content";
import { guides } from "@/lib/guides";
import { portfolioProjects } from "@/lib/portfolio";
import { indexable, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable) return [];
  return ["", "/services", "/work", "/about", "/contact", "/privacy", "/guides", ...guides.map(g => `/guides/${g.slug}`), ...services.map(s => `/services/${s.slug}`), ...[...portfolioProjects, ...projects].map(p => `/work/${p.slug}`)].map(path => ({ url: `${site.url}${path}` }));
}
