"use client";

import type { ImageLoaderProps } from "next/image";
import manifest from "./image-manifest.json";

const images: Record<string, { id: string; widths: number[] }> = manifest;

export default function imageLoader({ src, width }: ImageLoaderProps) {
  const image = images[src];
  if (!image) throw new Error(`Image not prepared: ${src}. Run npm run images:prepare.`);
  const size = image.widths.find((candidate) => candidate >= width) ?? image.widths.at(-1)!;
  return `/optimized/${image.id}-${size}.webp`;
}
