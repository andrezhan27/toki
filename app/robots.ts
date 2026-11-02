import type { MetadataRoute } from "next";
import { absoluteUrl, isIndexable } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Allow crawling so search engines can read staging's noindex meta/header.
  // Disallow: / would prevent Google from seeing those directives.
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(isIndexable ? { sitemap: absoluteUrl("/sitemap.xml") } : {}),
  };
}
