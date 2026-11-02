"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";

const reviews = [
  { name: "Shelly", text: "Very good and beautiful atmosphere. The staff were super kind the food is delicious" },
  { name: "Daniela Chiou", text: "excellent food and service! Will come back for sure 🤩" },
  { name: "Daniel Soares", text: "Menu bastante variado, ótimas criações e sabores exóticos com bela apresentação. Recomendo!" },
  { name: "Bruno Silva", text: "Bom ambiente, qualidade do peixe muito acima do esperado." },
  { name: "Gabriela Cabianca", text: "O melhor rodízio! Peixes extremamente frescos e ótimo atendimento, muita variedade e qualidade impecável!" },
  { name: "Guy Xie", text: "Great new all-you-can-eat sushi spot in Porto! there is a solid variety (...) Staff are friendly and attentive (...) The space is clean and relaxed (...)" },
];

function ReviewStars({ label }: { label: string }) {
  return (
    <span className="review-stars" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={16} fill="currentColor" strokeWidth={2} strokeLinejoin="round" aria-hidden="true" />
      ))}
    </span>
  );
}

function GoogleMark() {
  return (
    <svg className="google-mark" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285f4" d="M43.61 24.46c0-1.36-.12-2.66-.35-3.92H24v7.42h11a9.4 9.4 0 0 1-4.08 6.18v5.14h6.61c3.87-3.56 6.08-8.8 6.08-14.82Z" />
      <path fill="#34a853" d="M24 44c5.52 0 10.15-1.83 13.53-4.72l-6.61-5.14C29.09 35.37 26.75 36.1 24 36.1c-5.32 0-9.83-3.59-11.44-8.42H5.73v5.3A20 20 0 0 0 24 44Z" />
      <path fill="#fbbc05" d="M12.56 27.68A12 12 0 0 1 11.93 24c0-1.28.22-2.52.63-3.68v-5.3H5.73A20 20 0 0 0 4 24c0 3.23.77 6.29 1.73 8.98l6.83-5.3Z" />
      <path fill="#ea4335" d="M24 11.9c3 0 5.69 1.03 7.81 3.05l5.86-5.86C34.14 5.86 29.52 4 24 4A20 20 0 0 0 5.73 15.02l6.83 5.3C14.17 15.49 18.68 11.9 24 11.9Z" />
    </svg>
  );
}

export default function ReviewsSection() {
  const { language, t } = useLanguage();
  const pt = language === "pt";
  return (
    <section className="reviews-section" id="reviews" aria-label={t.navReviews}>
      <div className="section-shell">
        <div className="reviews-heading">
          <SectionHeading number="05" title={t.navReviews} />
        </div>
      </div>
      <div className="reviews-visual">
        <div className="reviews-photo section-shell">
          <Image
            src="/images/toki/review-image.webp"
            alt={pt ? "Vista panorâmica do balcão do TOKI Sushi" : "Panoramic view of the TOKI Sushi bar"}
            fill
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1100px) calc(100vw - 60px), (max-width: 1420px) calc(100vw - 100px), 1320px"
          />
          <div className="reviews-rating">
            <GoogleMark />
            <div>
              <p>{pt ? "Avaliações Google" : "Google reviews"}</p>
              <div><strong>4.7</strong> <ReviewStars label={pt ? "4,7 de 5 estrelas" : "4.7 out of 5 stars"} /></div>
            </div>
          </div>
        </div>
        <div className="reviews-carousel" role="region" aria-label={pt ? "Avaliações dos nossos clientes" : "Reviews from our guests"} tabIndex={0}>
          <div className="reviews-track">
            {[0, 1].map((copy) => (
              <div className="reviews-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {reviews.map((review) => (
                  <figure className={`review-card${review.text.length > 130 ? " review-card--long" : ""}`} key={review.name}>
                    <ReviewStars label={pt ? "5 de 5 estrelas" : "5 out of 5 stars"} />
                    <blockquote>{review.text}</blockquote>
                    <figcaption><span className="review-avatar" aria-hidden="true">{review.name.charAt(0)}</span>{review.name}</figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
