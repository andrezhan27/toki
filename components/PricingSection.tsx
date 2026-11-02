"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import SectionHeading from "./SectionHeading";

const priceGroups = [
  { pt: "Almoço", en: "Lunch", rates: [18.9, 19.9] },
  { pt: "Jantar", en: "Dinner", rates: [21.9, 22.9] },
];

export default function PricingSection() {
  const { language } = useLanguage();
  const isPt = language === "pt";
  const days = isPt
    ? ["Segunda a quinta", "Sexta a domingo e feriados"]
    : ["Monday to Thursday", "Friday to Sunday and public holidays"];
  const currency = new Intl.NumberFormat(isPt ? "pt-PT" : "en-IE", {
    style: "currency", currency: "EUR",
  });

  return (
    <section className="pricing-section section-shell" id="pricing">
      <div className="pricing-heading">
        <SectionHeading number="03" title={isPt ? "Rodízio de sushi" : "All-you-can-eat sushi"} />
        <div className="pricing-intro">
          <p className="section-copy">
            {isPt
              ? "No TOKI, o sushi é servido à discrição, ao almoço e ao jantar. Conheça os preços do nosso rodízio em Leça da Palmeira e venha desfrutar dos seus favoritos."
              : "Enjoy all-you-can-eat sushi at TOKI for lunch or dinner. Explore our all-you-can-eat prices in Leça da Palmeira and join us for your favourites."}
          </p>
        </div>
      </div>
      <div className="price-sheet">
        <header className="price-sheet-header">
          <Image
            className="price-sheet-logo"
            src="/images/toki/logo.webp"
            alt="TOKI Sushi"
            width={96}
            height={96}
          />
        </header>
        <div className="price-groups">
          {priceGroups.map((group) => (
            <section className="price-group" key={group.en}>
              <h3>{isPt ? group.pt : group.en}</h3>
              <dl>
                {group.rates.map((price, index) => (
                  <div className="price-row" key={days[index]}>
                    <dt>{days[index]}</dt>
                    <dd className="has-price">
                      {currency.format(price)}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
        <p className="pricing-note">
          {isPt
            ? "Crianças até 120 cm: 50% de desconto."
            : "Children up to 120 cm tall: 50% off."}
        </p>
      </div>
    </section>
  );
}
