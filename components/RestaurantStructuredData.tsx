import { restaurantInfo } from "@/lib/restaurant-info";
import { absoluteUrl } from "@/lib/seo";

export default function RestaurantStructuredData() {
  const url = absoluteUrl("/");
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    ...(url ? { "@id": `${url}#restaurant`, url } : {}),
    name: restaurantInfo.name,
    description: "Restaurante japonês de rodízio de sushi em Leça da Palmeira, Matosinhos. Sushi à discrição ao almoço e ao jantar.",
    servesCuisine: ["Japonesa", "Sushi"],
    telephone: restaurantInfo.phoneHref.replace("tel:", ""),
    hasMap: restaurantInfo.mapsUrl,
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurantInfo.address,
      addressLocality: restaurantInfo.location,
      addressRegion: "Porto",
      postalCode: restaurantInfo.postalCode,
      addressCountry: "PT",
    },
    containedInPlace: { "@type": "AdministrativeArea", name: "Matosinhos" },
    openingHoursSpecification: Object.values(restaurantInfo.hours).map((hours) => {
      const [opens, closes] = hours.split("–");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens,
        closes,
      };
    }),
    ...(url ? {
      image: [absoluteUrl("/images/toki/sala-toki-sushi-leca-da-palmeira.webp"), absoluteUrl("/images/toki/sushi-platter.webp")],
      logo: absoluteUrl("/images/toki/logo.webp"),
      menu: absoluteUrl("/menu"),
    } : {}),
    ...(restaurantInfo.socialLinks.length ? {
      sameAs: restaurantInfo.socialLinks.map((profile) => profile.url),
    } : {}),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
  }} />;
}
