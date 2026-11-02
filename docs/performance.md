# Image delivery and performance

Next’s configuration prepares responsive WebP files before development or build
compilation, including direct `next dev` / `next build` invocations.
The preparation script scans runtime source files in `app`, `components`, and `lib`,
including image references in metadata, JSON-LD, and sitemaps. Source photos stay
in `public/images` and `public/menu/dishes`; do not delete them just because the
browser requests the generated URLs.

`lib/image-loader.ts` maps Next Image sizes to ready-to-serve files in
`public/optimized`. These are content-hashed and receive a one-year immutable cache
header. There is no image resizing or AVIF encoding on a visitor's first request.
Changing source bytes creates a new URL, so replacements do not reuse stale CDN
images. Generated files and `lib/image-manifest.json` are ignored by Git and
recreated during the build. Generation is incremental and removes obsolete variants.

After adding a new image reference while a dev server is already running, run
`npm run images:prepare`. Any changes to the encoding recipe should also change
its version in `scripts/prepare-images.mjs`. Generation runs from the Next config phase, so deployments do not depend on npm
lifecycle hooks or a checked-in manifest.

The hero retains high fetch priority and responsive mobile/desktop art direction.
Images below the fold use lazy loading. The food carousel switches its images to
eager loading within 600px of the viewport to avoid blank moving slides, but no
longer requests every slide at initial page load. Its animation runs only while
visible. The review carousel remains continuous, including on hover.

Reveal effects and the mobile menu use CSS transitions with reduced-motion support;
there is no animation-library dependency. Google Maps remains a lazy iframe.

Unused PNG conversion sources, the old dining-room photo, and the untrimmed logo
were removed from public assets. Photos used by structured data are retained. A
missing sharing-image reference was replaced with `social-sharing.webp`.

Validation: `npm run test:images`, `npm run test:seo`, `npm run lint`, and
`npm run build`. The image tests check every source and output, image decoding,
responsive width selection, and unused public photos. File-size savings compare
encoded variants with sources, not a measured improvement in page-load time;
production field performance still depends on hosting, CDN cache, and connection.
