import type { MetadataRoute } from "next";
import { indexable, site } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return indexable ? { rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you"] }, sitemap: `${site.url}/sitemap.xml` } : { rules: { userAgent: "*", disallow: "/" } };
}
