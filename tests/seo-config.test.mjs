import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

const source = readFileSync(new URL("../lib/seo-config.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
});
const { getSeoConfig } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const production = {
  NODE_ENV: "production",
  NEXT_PUBLIC_SITE_URL: "https://seo-check.example.com/",
  SEO_INDEXING_ENABLED: "true",
};

test("a launch needs an explicit opt-in and final origin; builds default to noindex", () => {
  assert.deepEqual(getSeoConfig({ NODE_ENV: "production" }), { siteUrl: null, isIndexable: false });
  assert.equal(getSeoConfig({ ...production, SEO_INDEXING_ENABLED: undefined }).isIndexable, false);
  assert.equal(getSeoConfig({ ...production, SEO_INDEXING_ENABLED: "false" }).isIndexable, false);
  assert.throws(() => getSeoConfig({ ...production, NEXT_PUBLIC_SITE_URL: "" }), /before enabling/);
});

test("only production may index, including self-hosted production", () => {
  assert.deepEqual(getSeoConfig(production), { siteUrl: "https://seo-check.example.com", isIndexable: true });
  assert.equal(getSeoConfig({ ...production, VERCEL_ENV: "production" }).isIndexable, true);
});

for (const env of [
  { NODE_ENV: "development" },
  { NODE_ENV: "test" },
  { VERCEL_ENV: "preview" },
  { VERCEL_ENV: "development" },
]) {
  test(`development/preview stays noindex even if production opt-in is copied: ${JSON.stringify(env)}`, () => {
    assert.equal(getSeoConfig({ ...production, ...env }).isIndexable, false);
  });
}

for (const invalidUrl of [
  "not-a-url", "http://seo-check.example.com", "https://seo-check.example.com/menu",
  "https://seo-check.example.com?preview=true", "https://seo-check.example.com/#menu",
  "https://name:password@seo-check.example.com", "https://localhost", "https://127.0.0.1",
  "https://staging.local", "https://seo-check.example.com:3000",
]) {
  test(`rejects an unsuitable canonical origin: ${invalidUrl}`, () => {
    assert.throws(() => getSeoConfig({ ...production, NEXT_PUBLIC_SITE_URL: invalidUrl }));
  });
}
