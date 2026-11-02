import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/components/LanguageProvider";
import RestaurantStructuredData from "@/components/RestaurantStructuredData";
import { isIndexable, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  applicationName: "TOKI Sushi",
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: {
      index: isIndexable,
      follow: isIndexable,
      ...(isIndexable ? { "max-image-preview": "large" as const, "max-snippet": -1, "max-video-preview": -1 } : {}),
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION ? {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  } : {}),
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT">
      <body>
        <noscript><style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style></noscript>
        <a className="skip-link" href="#main-content">
          Saltar para o conteúdo / Skip to content
        </a>
        <RestaurantStructuredData />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
