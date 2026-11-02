"use client";
import { ArrowLeft, ArrowUpRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { restaurantInfo } from "@/lib/restaurant-info";
import { useLanguage } from "./LanguageProvider";
import SectionHeading from "./SectionHeading";
export default function ReservationContent() {
  const { language, t } = useLanguage();
  return (
    <section className="reservation-page">
      <div className="reservation-photo">
        <Image
          src="/images/toki/lanterns.webp"
          alt={
            language === "pt"
              ? "Lanternas japonesas no interior do TOKI"
              : "Japanese lanterns inside TOKI"
          }
          fill
          preload
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
      <div className="reservation-content">
        <Link className="menu-back" href="/">
          <ArrowLeft size={16} />
          {t.backHome}
        </Link>
        <SectionHeading number="05" title={t.reservations} as="h1" />
        <p className="section-copy">{t.reservationBody}</p>
        <a className="reservation-phone" href={restaurantInfo.phoneHref}>
          +351 {restaurantInfo.phone}
        </a>
        <a className="button button--dark" href={restaurantInfo.phoneHref}>
          <Phone size={16} />
          {t.callToBook}
        </a>
        <small>{t.callNote}</small>
        <div className="menu-links">
          <Link className="text-link" href="/menu">{t.navMenu}</Link>
          <a className="text-link" href={restaurantInfo.mapsUrl} target="_blank" rel="noreferrer">
            {t.directions}<ArrowUpRight size={15} />
          </a>
        </div>
        <div className="reservation-details">
          <p>
            {t.hours}
            <br />
            <strong>
              {restaurantInfo.hours.lunch} · {restaurantInfo.hours.dinner}
            </strong>
          </p>
          <a href={restaurantInfo.mapsUrl} target="_blank" rel="noreferrer">
            {restaurantInfo.address}
            <br />
            {restaurantInfo.postalAddress}
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
