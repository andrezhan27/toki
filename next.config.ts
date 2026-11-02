import type { NextConfig } from "next";
import { getSeoConfig } from "./lib/seo-config";

const { siteUrl, isIndexable } = getSeoConfig();

const nextConfig: NextConfig = {
  compress: true,
  async headers() {
    return [{
      source: "/:path*",
      // Also protect preview aliases when a production build is reused.
      ...(isIndexable && siteUrl ? {
        missing: [{ type: "host" as const, value: new URL(siteUrl).hostname.replace(/\./g, "\\.") }],
      } : {}),
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
    }];
  },
  async redirects() {
    return [
      {
        source: "/reservas",
        destination: "/reservation",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
