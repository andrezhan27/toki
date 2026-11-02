"use client";

import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
        sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 1023px) calc((100vw - 76px) / 2), (max-width: 1100px) calc((100vw - 316px) / 2), (max-width: 1279px) calc((100vw - 356px) / 2), (max-width: 1420px) calc((100vw - 376px) / 3), 348px"
      />
      {item.isNew && <span className="menu-new-badge">{language === "pt" ? "Novo" : "New"}</span>}
      <div className="menu-dish-caption">
        <p>{language === "pt" ? category.pt : category.en}</p>
        <h3>{name}</h3>
      </div>
    </article>
  );
}

const categoryGroups = [
  { id: "starters", pt: "Para começar", en: "To start", categories: ["entradas-frias", "entradas-quentes", "fritos", "sopas"] },
  { id: "sushi", pt: "Sushi & sashimi", en: "Sushi & sashimi", categories: ["combinados", "sashimi", "nigiri", "gunkan", "uramaki", "hosomaki", "temaki", "black-rice"] },
  { id: "specialities", pt: "Especialidades", en: "Specialities", categories: ["tataki-e-carpaccio", "poke", "chapa-quente"] },
  { id: "kitchen", pt: "Da cozinha", en: "From the kitchen", categories: ["gambas", "frango", "vaca-e-porco", "massa", "arroz"] },
];
const groupFor = (id: string) => categoryGroups.find((group) => group.categories.includes(id))?.id ?? "starters";

export default function MenuPageContent() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].id);
  const [expandedGroup, setExpandedGroup] = useState("starters");
  const activeCategory = useRef(menuCategories[0].id);
  const navigationTarget = useRef<string | null>(null);

  useEffect(() => {
    const sections = menuCategories.map((category) => document.getElementById(category.id)!);
    let frame = 0;
    let settled: ReturnType<typeof setTimeout>;
    const update = () => {
      frame = 0;
      const target = navigationTarget.current ? document.getElementById(navigationTarget.current) : null;
      const offset = window.matchMedia("(max-width: 1023px)").matches ? 176 : 96;
      // Keep the chosen group steady while a smooth jump passes other sections.
      if (target && Math.abs(target.getBoundingClientRect().top - offset) > 45) return;
      navigationTarget.current = null;
      let current = menuCategories[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset + 30) current = section.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) {
        current = menuCategories.at(-1)!.id;
      }
      if (current !== activeCategory.current) {
        activeCategory.current = current;
        setSelectedCategory(current);
        setExpandedGroup(groupFor(current));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
      clearTimeout(settled);
      settled = setTimeout(() => {
        navigationTarget.current = null;
        update();
      }, 180);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(settled);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };
  }, []);

  function jumpToCategory(id: string) {
    const section = document.getElementById(id);
    if (!section) return;
    navigationTarget.current = id;
    activeCategory.current = id;
    setSelectedCategory(id);
    setExpandedGroup(groupFor(id));
    if (window.location.hash !== `#${id}`) window.history.pushState(null, "", `#${id}`);
    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  }
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


        <div className="menu-browser">
          <nav id="menu-categories" className="menu-category-nav" aria-label={pt ? "Categorias do menu" : "Menu categories"}>
            <div className="menu-sidebar">
              <p className="small-label">{pt ? "Explorar o menu" : "Explore the menu"}</p>
              {categoryGroups.map((group) => (
                <div className="menu-category-group" key={group.id}>
                  <button
                    type="button"
                    className={`menu-group-toggle ${groupFor(selectedCategory) === group.id ? "is-current" : ""}`}
                    aria-expanded={expandedGroup === group.id}
                    aria-controls={`category-group-${group.id}`}
                    onClick={() => setExpandedGroup(expandedGroup === group.id ? "" : group.id)}
                  >
                    {pt ? group.pt : group.en}
                    <ChevronDown size={15} aria-hidden="true" />
                  </button>
                  <div
                    id={`category-group-${group.id}`}
                    className={`menu-group-panel ${expandedGroup === group.id ? "is-open" : ""}`}
                    aria-hidden={expandedGroup !== group.id}
                    inert={expandedGroup !== group.id}
                  >
                    <ul className="menu-category-links">
                      {group.categories.map((id) => {
                        const category = menuCategories.find((item) => item.id === id)!;
                        return (
                          <li key={id}>
                            <a
                              href={`#${id}`}
                              aria-current={selectedCategory === id ? "location" : undefined}
                              onClick={(event) => {
                                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                                event.preventDefault();
                                jumpToCategory(id);
                              }}
                            >
                              {pt ? category.pt : category.en}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="menu-category-picker">
              <label htmlFor="menu-category-select">{pt ? "Explorar o menu" : "Explore the menu"}</label>
              <div className="menu-category-select-wrap">
                <select id="menu-category-select" value={selectedCategory} onChange={(event) => jumpToCategory(event.target.value)}>
                  {categoryGroups.map((group) => (
                    <optgroup key={group.id} label={pt ? group.pt : group.en}>
                      {group.categories.map((id) => {
                        const category = menuCategories.find((item) => item.id === id)!;
                        return <option key={id} value={id}>{pt ? category.pt : category.en}</option>;
                      })}
                    </optgroup>
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

              </div>
              <div className="menu-dish-grid">
                {category.items.map((item, itemIndex) => <DishCard key={item.id} category={category} item={item} eager={index === 0 && itemIndex === 0} />)}
              </div>
            </section>
          ))}
        </div>
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
