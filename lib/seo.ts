import type { Metadata } from "next";
import { getSeoConfig } from "./seo-config";

export const { siteUrl, isIndexable } = getSeoConfig();
export const socialImage = "/images/toki/social-sharing.webp";

export function absoluteUrl(path: string) {
  return siteUrl ? new URL(path, siteUrl).toString() : undefined;
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(socialImage);
  const images = image ? [{
    url: image,
    width: 1200,
    height: 630,
    alt: "Sala do TOKI Sushi, restaurante japonês em Leça da Palmeira, Matosinhos",
  }] : [];

  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title,
      description,
      siteName: "TOKI Sushi",
      locale: "pt_PT",
      type: "website",
      ...(url ? { url } : {}),
      images,
    },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
