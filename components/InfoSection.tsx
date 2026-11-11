"use client";
import { ArrowUpRight, Clock3, MapPin, Phone, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { restaurantInfo } from "@/lib/restaurant-info";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function InfoSection() {
  const { language, t } = useLanguage();
  return (
    <section className="info-section" id="info">
      <div className="section-shell">
        <Reveal className="info-heading">
          <SectionHeading number="04" title={t.infoTitle} />
        </Reveal>
        <div className="info-layout">
        <div className="info-photo">
          <Image
            src="/images/toki/prateleiras-bar-toki.webp"
            alt={language === "pt" ? "Lanternas e prateleiras do bar do TOKI Sushi" : "Lanterns and bar shelves at TOKI Sushi"}
            fill
            sizes="(max-width: 767px) 90vw, 50vw"
          />
        </div>
        <Reveal className="info-content">
          <p className="section-copy info-intro">{t.infoBody}</p>
          <div className="info-row">
            <MapPin size={21} strokeWidth={1.4} />
            <div>
              <h3>{t.address}</h3>
              <address>
                <a className="address-link" href={restaurantInfo.mapsUrl} target="_blank" rel="noreferrer">
                  <span>{restaurantInfo.address}, {restaurantInfo.postalAddress}</span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                  <span className="sr-only">{t.directions}</span>
                </a>
              </address>
            </div>
          </div>
          <div className="info-row">
            <Clock3 size={21} strokeWidth={1.4} />
            <div>
              <h3>{language === "pt" ? "Horário" : "Opening hours"}</h3>
              <p>{t.hours} · {restaurantInfo.hours.lunch} · {restaurantInfo.hours.dinner}</p>
            </div>
          </div>
          <div className="info-row">
            <Phone size={21} strokeWidth={1.4} />
            <div>
              <h3>{t.contact}</h3>
              <a className="phone-link" href={restaurantInfo.phoneHref}>+351 {restaurantInfo.phone}</a>
            </div>
          </div>
          <div className="info-row">
            <Truck size={21} strokeWidth={1.4} aria-hidden="true" />
            <div>
              <h3>{t.delivery}</h3>
              <ul className="delivery-links">
                {restaurantInfo.deliveryLinks.map(({ label, url, icon }) => (
                  <li key={label}>
                    <a className="delivery-link" href={url} target="_blank" rel="noreferrer">
                      <Image src={icon} alt="" width={21} height={21} unoptimized />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link className="button button--dark" href="/reservation">{t.reserveTable}</Link>
        </Reveal>
        </div>
        <div className="info-map">
          <iframe
            src={restaurantInfo.mapEmbedUrl}
            title={language === "pt" ? "Localização do TOKI Sushi no Google Maps" : "TOKI Sushi location on Google Maps"}
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
