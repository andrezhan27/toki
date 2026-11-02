// Shared by Next's build configuration and server-rendered metadata.
export function getSeoConfig(env: Record<string, string | undefined> = process.env) {
  const configuredUrl = env.NEXT_PUBLIC_SITE_URL?.trim();
  let siteUrl: string | null = null;

  if (configuredUrl) {
    const url = new URL(configuredUrl);
    if (
      url.protocol !== "https:" || url.username || url.password || url.port ||
      url.pathname !== "/" || url.search || url.hash ||
      !url.hostname.includes(".") ||
      /(^[\d.]+$|:|\.(localhost|local|test|invalid)$)/i.test(url.hostname)
    ) {
      throw new Error("NEXT_PUBLIC_SITE_URL must be the final public HTTPS origin, without a path, port, query or fragment.");
    }
    siteUrl = url.origin;
  }

  // A production build is also used for staging: NODE_ENV alone is insufficient.
  const isIndexable = env.SEO_INDEXING_ENABLED === "true" &&
    env.NODE_ENV === "production" &&
    (!env.VERCEL_ENV || env.VERCEL_ENV === "production");

  if (isIndexable && !siteUrl) {
    throw new Error("Set NEXT_PUBLIC_SITE_URL before enabling production indexing.");
  }

  return { siteUrl, isIndexable };
}
