"use client";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
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
            src="/images/toki/exterior.webp"
            alt={language === "pt" ? "A entrada do TOKI Sushi em Leça da Palmeira" : "The entrance to TOKI Sushi in Leça da Palmeira"}
            fill
            sizes="(max-width: 767px) 90vw, 50vw"
          />
          <div className="info-photo-caption">
            <span>TOKI Sushi</span>
            <p>{t.infoAside}</p>
          </div>
        </div>
        <Reveal className="info-content">
          <p className="section-copy info-intro">{t.infoBody}</p>
          <div className="info-row">
            <MapPin size={21} strokeWidth={1.4} />
            <div>
              <h3>{t.address}</h3>
              <address><a href={restaurantInfo.mapsUrl} target="_blank" rel="noreferrer">
                {restaurantInfo.address}, {restaurantInfo.postalAddress}
              </a></address>
              <a className="directions-button" href={restaurantInfo.mapsUrl} target="_blank" rel="noreferrer">
                {t.directions}<ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <div className="info-row">
            <Clock3 size={21} strokeWidth={1.4} />
            <div>
              <h3>{language === "pt" ? "Horário" : "Opening hours"}</h3>
              <p>{t.hours} · {restaurantInfo.hours.lunch} · {restaurantInfo.hours.dinner}</p>
              <small>{t.holidayNote}</small>
            </div>
          </div>
          <div className="info-row">
            <Phone size={21} strokeWidth={1.4} />
            <div>
              <h3>{t.contact}</h3>
              <a className="phone-link" href={restaurantInfo.phoneHref}>+351 {restaurantInfo.phone}</a>
              <p className="takeaway">{t.takeaway}</p>
            </div>
          </div>
          <Link className="button button--dark" href="/reservation">{t.reserveTable}</Link>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
