"use client";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { language, t } = useLanguage();
  return (
    <section className="hero" id="top" aria-label="TOKI Sushi">
      <Image
        className="hero-image"
        src="/images/toki/sala-toki-sushi-leca-da-palmeira.webp"
        alt={
          language === "pt"
            ? "Sala do TOKI Sushi em Leça da Palmeira, com iluminação circular e mesas acolhedoras"
            : "TOKI Sushi dining room with circular lighting and welcoming tables"
        }
        fill
        preload
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="hero-content section-shell">
        <p className="eyebrow hero-eyebrow">{t.heroEyebrow}</p>
        <h1 className="brand-wordmark" aria-label="TOKI Sushi">
          TOKI<small>SUSHI</small>
        </h1>
        <p className="hero-body">{t.heroBody}</p>
        <div className="hero-buttons">
          <Link className="button button--light" href="/reservation">
            {t.reserveTable}
          </Link>
          <Link className="button button--outline" href="/menu">
            {t.navMenu}
          </Link>
        </div>
      </div>
      <div className="hero-bottom section-shell">
        <a href="#space" className="hero-scroll">
          <ArrowDown size={17} />
          {t.scroll}
        </a>
      </div>
    </section>
  );
}
