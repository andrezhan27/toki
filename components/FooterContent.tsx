"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { restaurantInfo } from "@/lib/restaurant-info";
import { useLanguage } from "./LanguageProvider";
export default function FooterContent() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer-main section-shell">
        <Link className="footer-brand" href="/" aria-label="TOKI Sushi">
          <Image src="/images/toki/logo.webp" width={100} height={100} alt="" />
          <span className="brand-wordmark">
            TOKI<small>SUSHI</small>
          </span>
        </Link>
        <p className="footer-message">{t.infoAside}</p>
        <div className="footer-column">
          <h3>{t.footerNav}</h3>
          <Link href="/#space">{t.navSpace}</Link>
          <Link href="/menu">{t.navMenu}</Link>
          <Link href="/#pricing">{t.pricing}</Link>
          <Link href="/#info">{t.navInfo}</Link>
          <Link href="/#reviews">{t.navReviews}</Link>
          <Link href="/reservation">{t.reservations}</Link>
        </div>
        <div className="footer-column">
          <h3>{t.legal}</h3>
          <a href={restaurantInfo.phoneHref}>+351 {restaurantInfo.phone}</a>
          <address>
            <a href={restaurantInfo.mapsUrl} target="_blank" rel="noreferrer">
              {restaurantInfo.address}<br />{restaurantInfo.postalAddress}
            </a>
          </address>
          <a href={restaurantInfo.mapsUrl} target="_blank" rel="noreferrer">
            Google Maps <ArrowUpRight size={12} />
          </a>
          {restaurantInfo.socialLinks.map((profile) => (
            <a key={profile.url} href={profile.url} target="_blank" rel="noreferrer">
              {profile.label} <ArrowUpRight size={12} />
            </a>
          ))}
          {restaurantInfo.privacyPolicyUrl && (
            <a href={restaurantInfo.privacyPolicyUrl}>{t.privacy}</a>
          )}
          {restaurantInfo.termsAndConditionsUrl && (
            <a href={restaurantInfo.termsAndConditionsUrl}>
              {t.termsAndConditions}
            </a>
          )}
          <a
            href="https://www.livroreclamacoes.pt/Inicio/"
            target="_blank"
            rel="noreferrer"
          >
            {t.complaints}
          </a>
        </div>
      </div>
      <div className="footer-bottom section-shell">
        <p>
          © {new Date().getFullYear()} TOKI Sushi. {t.footerRights}
        </p>
        <a href={restaurantInfo.mapsUrl} target="_blank" rel="noreferrer">
          {t.photoCredit}
          <ArrowUpRight size={12} />
        </a>
        <a href="https://www.intelis.pt/" target="_blank" rel="noreferrer">
          {t.footerDesignedBy}
        </a>
      </div>
    </footer>
  );
}
