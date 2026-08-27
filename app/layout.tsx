import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { PromotionBanner } from "@andrezhan27/intelis-restaurant-ui";
import { restaurantInfo } from "@/lib/restaurant-info";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://friendshipsushi.pt"),
  title: "Friendship Sushi | Lisboa",
  description:
    "Uma experiência de sushi contemporânea num espaço arquitetónico único em Lisboa.",
  openGraph: {
    title: "Friendship Sushi | Lisboa",
    description: "Sushi · À La Carte · Lisboa",
    images: [{ url: "/images/hero-desktop.webp", width: 1448, height: 1086 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body>
        <PromotionBanner
          className="site-promotion-banner"
          restaurantId={restaurantInfo.databaseId}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
