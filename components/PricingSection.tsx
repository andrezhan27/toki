"use client";

import { useLanguage } from "./LanguageProvider";
import SectionHeading from "./SectionHeading";

// Await owner-confirmed TOKI prices; do not publish reference restaurant rates.
const priceGroups: { pt: string; en: string; rates: (number | null)[] }[] = [
  { pt: "Segunda a sexta", en: "Monday to Friday", rates: [null, null, null] },
  { pt: "Fins de semana e feriados", en: "Weekends and public holidays", rates: [null, null, null] },
];

export default function PricingSection() {
  const { language, t } = useLanguage();
  const isPt = language === "pt";
  const meals = [t.lunch, t.dinner, isPt ? "Crianças" : "Children"];
  const currency = new Intl.NumberFormat(isPt ? "pt-PT" : "en-IE", {
    style: "currency", currency: "EUR",
  });

  return (
    <section className="pricing-section section-shell" id="pricing">
      <SectionHeading number="03" title={isPt ? "Rodízio de sushi" : "All-you-can-eat sushi"} />
      <div className="pricing-layout">
        <div className="pricing-intro">
          <p className="section-copy">
            {isPt
              ? "No TOKI, o sushi é servido à discrição, ao almoço e ao jantar. Conheça o nosso rodízio em Leça da Palmeira e consulte os preços e condições com a nossa equipa."
              : "Enjoy all-you-can-eat sushi at TOKI for lunch or dinner. Discover our restaurant in Leça da Palmeira and ask our team about prices and dining conditions."}
          </p>
        </div>
        <div className="price-sheet">
          <header className="price-sheet-header">
            <h3>TOKI SUSHI</h3>
            <p>{isPt ? "Almoço & jantar" : "Lunch & dinner"}</p>
          </header>
          {priceGroups.map((group) => (
            <section className="price-group" key={group.en}>
              <h3>{isPt ? group.pt : group.en}</h3>
              <dl>
                {group.rates.map((price, index) => (
                  <div className="price-row" key={meals[index]}>
                    <dt>{meals[index]}</dt>
                    <dd className={price === null ? "" : "has-price"}>
                      {price === null ? (isPt ? "Sob consulta" : "Please enquire") : currency.format(price)}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
          <p className="pricing-note">
            {isPt
              ? "Para mais informações e condições para crianças, fale com a nossa equipa."
              : "For more information and children's dining conditions, please speak to our team."}
          </p>
        </div>
      </div>
    </section>
  );
}
