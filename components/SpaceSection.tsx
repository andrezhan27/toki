"use client";
import Image from "next/image";
import { spacePhotos } from "@/lib/restaurant-info";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function SpaceSection() {
  const { language, t } = useLanguage();
  return (
    <section className="space-section section-shell" id="space">
      <Reveal className="space-intro">
        <SectionHeading number="01" title={t.spaceTitle} />
        <p className="section-copy">{t.spaceBody}</p>
      </Reveal>
      <div className="space-mosaic" aria-label={t.spaceEyebrow}>
        {spacePhotos.map((photo, index) => (
          <Reveal className="space-tile" delay={index * 0.06} key={photo.src}>
            <Image
              src={photo.src}
              alt={language === "pt" ? photo.pt : photo.en}
              fill
              sizes={index === 0 || index === 3
                ? "(max-width: 600px) 90vw, 58vw"
                : "(max-width: 600px) 44vw, 38vw"}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
