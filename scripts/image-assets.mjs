import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const filename = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(filename) : [filename];
  }));
  return nested.flat().sort();
}

// Includes metadata/JSON-LD and sitemap references, not just visible <Image>s.
export async function referencedImages() {
  const files = (await Promise.all(["app", "components", "lib"].map(filesIn))).flat();
  const images = new Set();
  for (const filename of files.filter((name) => /\.(tsx?|css)$/.test(name))) {
    const source = await readFile(filename, "utf8");
    for (const match of source.matchAll(/["'`](\/(?:images|menu)\/[^"'`]+?\.(?:webp|png|jpe?g))["'`]/g)) {
      images.add(match[1]);
    }
  }
  return [...images].sort();
}
