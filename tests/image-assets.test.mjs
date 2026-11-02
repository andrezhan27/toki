import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import test from "node:test";
import sharp from "sharp";
import ts from "typescript";
import { filesIn, referencedImages } from "../scripts/image-assets.mjs";

const manifest = JSON.parse(await readFile(new URL("../lib/image-manifest.json", import.meta.url), "utf8"));
const source = (await readFile(new URL("../lib/image-loader.ts", import.meta.url), "utf8"))
  .replace('import manifest from "./image-manifest.json";', `const manifest = ${JSON.stringify(manifest)};`);
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { default: loader } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);

test("every rendered and metadata image exists and has generated responsive files", async () => {
  const sources = await referencedImages();
  assert.deepEqual(Object.keys(manifest).sort(), sources);
  for (const src of sources) {
    await access(`public${src}`);
    const { widths, id } = manifest[src];
    assert.ok(widths.length > 0);
    assert.deepEqual([...widths].sort((a, b) => a - b), widths);
    for (const width of widths) await access(`public/optimized/${id}-${width}.webp`);
  }
});

test("each responsive variant decodes as WebP at the advertised width", async () => {
  for (const image of Object.values(manifest)) {
    for (const width of image.widths) {
      const metadata = await sharp(`public/optimized/${image.id}-${width}.webp`).metadata();
      assert.equal(metadata.format, "webp");
      assert.equal(metadata.width, width);
    }
  }
});

test("the loader selects a sufficient width and caps requests at the source size", () => {
  for (const [src, image] of Object.entries(manifest)) {
    for (const width of [64, 384, 700, 1280, 3840]) {
      const selected = image.widths.find((candidate) => candidate >= width) ?? image.widths.at(-1);
      assert.equal(loader({ src, width }), `/optimized/${image.id}-${selected}.webp`);
    }
  }
  assert.throws(() => loader({ src: "/missing.webp", width: 640 }), /Image not prepared/);
});

test("public source folders contain no unused photos or original duplicates", async () => {
  const referenced = new Set(await referencedImages());
  const photos = (await Promise.all(["public/images", "public/menu"].map(filesIn))).flat()
    .filter((filename) => /\.(webp|png|jpe?g)$/i.test(filename));
  assert.deepEqual(photos.filter((filename) => !referenced.has(filename.slice("public".length))), []);
});
