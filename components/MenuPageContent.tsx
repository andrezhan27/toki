"use client";

import { ArrowLeft, ArrowUp, ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { menuCategories, type MenuCategory, type MenuItem } from "@/lib/menu-data";
import { restaurantInfo } from "@/lib/restaurant-info";
import { useLanguage } from "./LanguageProvider";

function DishCard({ item, category, eager = false }: {
  item: MenuItem;
  category: MenuCategory;
  eager?: boolean;
}) {
  const { language } = useLanguage();
  const name = language === "pt" ? item.namePt : item.nameEn;
  return (
    <article className="menu-dish-card">
      <Image
        src={item.src}
        alt={name}
        fill
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1000px) calc((100vw - 76px) / 2), (max-width: 1420px) calc((100vw - 140px) / 3), 427px"
      />
      {item.isNew && <span className="menu-new-badge">{language === "pt" ? "Novo" : "New"}</span>}
      <div className="menu-dish-caption">
        <p>{language === "pt" ? category.pt : category.en}</p>
        <h3>{name}</h3>
      </div>
    </article>
  );
}

export default function MenuPageContent() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("");
  const pt = language === "pt";

  return (
    <section className="menu-page" aria-labelledby="menu-title">
      <div className="section-shell">
        <div className="menu-title-row">
          <h1 id="menu-title">{t.menuPageTitle}</h1>
          <Link className="menu-home-link" href="/" aria-label={t.backHome}>
            <ArrowLeft size={16} aria-hidden="true" />
            <span className="menu-home-label">{t.backHome}</span>
            <span className="menu-home-label--mobile">{t.navHome}</span>
          </Link>
        </div>

        <nav id="menu-categories" className="menu-category-nav" aria-label={pt ? "Categorias do menu" : "Menu categories"}>
          <ul className="menu-category-links">
            {menuCategories.map((category) => (
              <li key={category.id}>
                <a href={`#${category.id}`}>{pt ? category.pt : category.en}</a>
              </li>
            ))}
          </ul>
          <div className="menu-category-picker">
            <label htmlFor="menu-category-select">{pt ? "Explorar o menu" : "Explore the menu"}</label>
            <div className="menu-category-select-wrap">
              <select
                id="menu-category-select"
                value={selectedCategory}
                onChange={(event) => {
                  const categoryId = event.target.value;
                  const category = document.getElementById(categoryId);
                  if (!category) return;

                  setSelectedCategory(categoryId);
                  window.history.pushState(null, "", `#${categoryId}`);
                  category.scrollIntoView({
                    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                    block: "start",
                  });
                }}
              >
                <option value="" disabled>{pt ? "Escolher categoria" : "Choose a category"}</option>
                {menuCategories.map((category) => (
                  <option key={category.id} value={category.id}>{pt ? category.pt : category.en}</option>
                ))}
              </select>
              <ChevronDown size={18} aria-hidden="true" />
            </div>
          </div>
        </nav>

        <div id="menu-completo" className="menu-complete">
          {menuCategories.map((category, index) => (
            <section className="menu-category-section" id={category.id} key={category.id} aria-labelledby={`${category.id}-title`}>
              <div className="menu-category-heading">
                <div>
                  <p className="eyebrow">{String(index + 1).padStart(2, "0")} <span aria-hidden="true">/</span> {pt ? "Menu TOKI" : "TOKI menu"}</p>
                  <h2 id={`${category.id}-title`}>{pt ? category.pt : category.en}</h2>
                  <p className="menu-category-description">{pt ? category.descriptionPt : category.descriptionEn}</p>
                </div>
                <a className="menu-category-return" href="#menu-categories" onClick={() => setSelectedCategory("")}>
                  {pt ? "Categorias" : "Categories"} <ArrowUp size={14} aria-hidden="true" />
                </a>
              </div>
              <div className="menu-dish-grid">
                {category.items.map((item, itemIndex) => <DishCard key={item.id} category={category} item={item} eager={index === 0 && itemIndex === 0} />)}
              </div>
            </section>
          ))}
        </div>

        <div className="menu-page-cta">
          <p>{pt ? "Para informações sobre alergénios e disponibilidade dos pratos, fale com a nossa equipa." : "For allergen information and dish availability, please speak to our team."}</p>
          <Link className="button button--dark" href="/reservation">{t.reserveTable} <ArrowUpRight size={17} /></Link>
          <a className="text-link" href={restaurantInfo.phoneHref}>{t.contact} <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
