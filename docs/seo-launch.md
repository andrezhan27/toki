# TOKI Sushi: SEO and launch

## Configuration

The site defaults to **noindex**, including `next build && next start`. Configure these variables in the hosting provider **before building**:

- `NEXT_PUBLIC_SITE_URL=https://tokisushi.pt`: the final public HTTPS origin confirmed by the owner. It supplies absolute canonical URLs, Open Graph/Twitter images, Restaurant URLs and the sitemap. This value is configured locally and in `.env.example`; set it in the hosting provider too.
- `SEO_INDEXING_ENABLED=false`: development and staging. Change to `true` **only on the production deployment at launch**, then rebuild/redeploy. Indexing additionally requires `NODE_ENV=production` and the public origin. Vercel preview/development deployments remain noindex even if this flag is accidentally copied from production.
- `GOOGLE_SITE_VERIFICATION`: optional Search Console verification token, without the enclosing meta tag.

Production responses on any hostname other than the configured public hostname retain `X-Robots-Tag: noindex, nofollow`. Redirect www/non-www and HTTP variants to the final HTTPS origin at the hosting/CDN layer. Keep the indexing flag disabled in all non-production deployment environments, including self-hosted staging.

`robots.txt` allows crawling in both modes, so search engines can read the noindex meta tag and HTTP header. Blocking crawling would prevent Google from seeing noindex. Staging has an empty sitemap and no sitemap advertisement. Password-protect private staging deployments in the hosting provider as well.

## Content and architecture

- The existing `/`, `/menu` and `/reservation` pages have individual titles, descriptions, canonicals and social metadata. `/reservas` retains its permanent redirect to `/reservation`.
- Gallery (`/#space`), rodízio/prices (`/#pricing`) and contacts (`/#info`) remain homepage sections and are linked from the navigation/footer. Fragments and redirects are excluded from the sitemap; no duplicate city pages are created.
- Portuguese is server-rendered with `lang="pt-PT"`. The existing English switch remains an in-page translation. There are no separate English URLs, so no invented hreflang alternates are emitted.
- Local copy prioritises Leça da Palmeira and Matosinhos. Porto, Senhora da Hora and Perafita appear as places visitors travel from, never as the restaurant's address. No “perto de mim” keyword stuffing is added.
- Restaurant JSON-LD uses the contact details and hours documented in `docs/content-sources.md`, plus the user's confirmation of rodízio. It is rendered on every page with one stable restaurant identity. No ratings, reviews, coordinates or price range have been invented.
- `restaurantInfo.socialLinks` in `lib/restaurant-info.ts` is intentionally empty until the owner supplies official TOKI profiles. Add `{ label: "Instagram", url: "<verified-profile-url>" }` entries; they automatically appear in the footer and JSON-LD `sameAs`.
- The existing menu is a photographic selection, not a complete itemised carta. Add the owner-approved full menu and allergen information when available. Temporary reference prices were replaced by “Sob consulta”; insert only approved TOKI prices in `components/PricingSection.tsx`.
- Existing WebP food photos have descriptive filenames and contextual alt text. The hero and gallery now use descriptive Portuguese filenames. Next Image supplies responsive resizing and AVIF/WebP negotiation; the first menu image is prioritised and gallery images load lazily. A 1200 × 630 JPEG derived from the actual dining-room photo is used for social previews.
- System fonts avoid external font downloads. Layouts reserve image space, reduced-motion preferences are respected, and reveal content stays visible with JavaScript disabled. Muted text was darkened within the existing palette to meet 4.5:1 contrast on both paper and cream backgrounds. Compression is enabled. Measure actual Core Web Vitals after deployment; no field performance score is claimed.

## Before launch

1. Connect the confirmed domain `tokisushi.pt` to the hosting provider, enable HTTPS and redirect `www.tokisushi.pt` to `https://tokisushi.pt`. Supply the official social profile URLs. Reconfirm phone, opening/holiday hours and reservation process with the owner; keep them consistent with the existing Google Business Profile. See the [recorded Maps source](https://maps.app.goo.gl/fkFShsJcrUiguTAF9).
2. Replace “Sob consulta” only with approved prices. Publish the complete menu, allergen information and TOKI-specific legal documents when supplied.
3. Verify ownership of the existing Google Business Profile, its TOKI name, restaurant category, exact address/pin and phone. Add the final website/menu/reservation URLs, accurate hours and current photos. Resolve any old business-name listings for this address rather than copying their details or creating duplicate profiles.
4. Run `npm run lint`, `npm run test:seo` and `npm run build`. Set the two launch variables above on production and rebuild. Check all three canonical URLs, `/robots.txt`, `/sitemap.xml`, redirects, HTTPS and social previews on the deployed domain. Check staging responses still contain noindex.
5. Validate the deployed JSON-LD with [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema Markup Validator](https://validator.schema.org/). Unverified optional properties are deliberately omitted.
6. Verify the domain in Google Search Console, submit `/sitemap.xml`, and inspect/request indexing for the homepage, menu and reservations. Review mobile PageSpeed/Lighthouse and Search Console Core Web Vitals with real hosting and traffic.

## References

- [Google: local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: allow crawling so noindex can be read](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
