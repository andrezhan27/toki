import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/constants";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { getSeoConfig } from "./lib/seo-config";

const { siteUrl, isIndexable } = getSeoConfig();

const nextConfig: NextConfig = {
  compress: true,
  async headers() {
    return [{
      source: "/optimized/:path*",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
    }, {
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
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [384, 640, 960, 1280, 1920],
    imageSizes: [64, 128, 256],
  },
};

export default function configure(phase: string): NextConfig {
  // Run before the loader is compiled, including direct `next dev/build` calls
  // that bypass npm lifecycle scripts. Generated files need not be in Git.
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    execFileSync(process.execPath, [path.join(process.cwd(), "scripts/prepare-images.mjs")], {
      cwd: process.cwd(),
      stdio: "inherit",
    });
  }
  return nextConfig;
}
