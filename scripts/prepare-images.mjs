import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile, unlink, access, rename } from "node:fs/promises";
import sharp from "sharp";
import { filesIn, referencedImages } from "./image-assets.mjs";

const output = "public/optimized";
const manifestFile = "lib/image-manifest.json";
const sizes = [64, 128, 256, 384, 640, 960, 1280, 1920];
const recipe = "webp-q78-effort4-v1";
await mkdir(output, { recursive: true });
const manifest = {};
const expected = new Set();
let created = 0;
const sources = await referencedImages();

// A small worker pool avoids exhausting memory on image-heavy deployments.
let next = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (next < sources.length) {
    const src = sources[next++];
    const input = await readFile(`public${src}`);
    const metadata = await sharp(input).metadata();
    const maxWidth = Math.min(metadata.width, 1920);
    const widths = [...new Set([...sizes.filter((width) => width < maxWidth), maxWidth])];
    // Small logo variants matter; photographs never need tiny icon sizes.
    const variants = metadata.width <= 512 ? widths : widths.filter((width) => width >= 384);
    const id = createHash("sha256").update(input).update(recipe).digest("hex").slice(0, 16);
    manifest[src] = { id, widths: variants };
    for (const width of variants) {
      const filename = `${output}/${id}-${width}.webp`;
      expected.add(filename);
      try { await access(filename); } catch {
        await sharp(input).resize({ width, withoutEnlargement: true })
          .webp({ quality: 78, effort: 4 }).toFile(filename);
        created++;
      }
    }
  }
}));

// Source changes get a fresh hash; old generated versions must not accumulate.
for (const filename of await filesIn(output)) {
  if (!expected.has(filename)) await unlink(filename);
}
const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
const json = `${JSON.stringify(sorted)}\n`;
let previous;
try { previous = await readFile(manifestFile, "utf8"); } catch { /* First build. */ }
if (previous !== json) {
  const temporary = `${manifestFile}.${process.pid}.tmp`;
  await writeFile(temporary, json);
  await rename(temporary, manifestFile);
}
console.log(`Images: ${sources.length} sources, ${expected.size} responsive WebP files (${created} generated).`);
