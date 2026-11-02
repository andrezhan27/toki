import type { MetadataRoute } from "next";
import { foodPhotos, spacePhotos } from "@/lib/restaurant-info";
import { absoluteUrl, isIndexable } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];

  return [
    {
      url: absoluteUrl("/")!,
      images: [
        "/images/toki/sala-toki-sushi-leca-da-palmeira.webp",
        ...spacePhotos.map((photo) => photo.src),
      ].map((path) => absoluteUrl(path)!),
    },
    { url: absoluteUrl("/menu")!, images: foodPhotos.map((photo) => absoluteUrl(photo.src)!) },
    { url: absoluteUrl("/reservation")! },
  ];
}
