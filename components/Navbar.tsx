"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const sections = ["top", "space", "menu", "info", "reviews"];
    const onScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.38;
      let current = "top";
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= marker) current = id;
      });
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const visibleSection =
    pathname === "/menu" ? "menu-page" : pathname === "/" ? activeSection : "";
  const returnHome = () =>
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  const links = [
    ["/", t.navHome, "top"],
    [pathname === "/" ? "#space" : "/#space", t.navSpace, "space"],
    ["/menu", t.navMenu, pathname === "/menu" ? "menu-page" : "menu"],
    [pathname === "/" ? "#info" : "/#info", t.navInfo, "info"],
    [pathname === "/" ? "#reviews" : "/#reviews", t.navReviews, "reviews"],
  ];

  return (
    <>
    <header className={`navbar ${scrolled || open ? "navbar--solid" : ""}`}>
      <Link
        className="nav-brand"
        href="/"
        onClick={returnHome}
        aria-label="TOKI Sushi — início"
      >
        <span className="nav-logo">
          <Image
            src="/images/toki/logo.webp"
            width={58}
            height={58}
            alt=""
            loading="eager"
          />
        </span>
        <span className="brand-wordmark">
          TOKI<small>SUSHI</small>
        </span>
      </Link>

      <nav
        className="nav-links"
        aria-label={
          language === "pt" ? "Navegação principal" : "Main navigation"
        }
      >
        {links.map(([href, label, section]) => (
          <Link
            key={href}
            href={href}
            onClick={section === "top" ? returnHome : undefined}
            className={visibleSection === section ? "active" : ""}
            aria-current={visibleSection === section ? "location" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="nav-actions">
        <div
          className="language-switch"
          aria-label={
            language === "pt" ? "Selecionar idioma" : "Select language"
          }
        >
          <button
            type="button"
            className={language === "pt" ? "active" : ""}
            onClick={() => setLanguage("pt")}
            aria-pressed={language === "pt"}
          >
            PT
          </button>
          <span aria-hidden="true">/</span>
          <button
            type="button"
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
        </div>
        <Link className="nav-reserve" href="/reservation">
          {t.navReserve}
        </Link>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={
            language === "pt"
              ? open
                ? "Fechar menu"
                : "Abrir menu"
              : open
                ? "Close menu"
                : "Open menu"
          }
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

          <nav
            id="mobile-navigation"
            className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}
            aria-hidden={!open}
            inert={!open}
            aria-label={
              language === "pt" ? "Navegação móvel" : "Mobile navigation"
            }
          >
            {links.map(([href, label, section], index) => (
              <Link
                key={href}
                href={href}
                className={visibleSection === section ? "active" : ""}
                onClick={() => {
                  setOpen(false);
                  if (section === "top") returnHome();
                }}
              >
                <span>0{index + 1}</span>
                {label}
              </Link>
            ))}
            <Link
              className="mobile-reserve"
              href="/reservation"
              onClick={() => setOpen(false)}
            >
              {t.reserveTable}
            </Link>
          </nav>
    </header>
    {pathname !== "/reservation" && !open && (
      <Link className="floating-reserve" href="/reservation">{t.reserveTable}</Link>
    )}
    </>
  );
}
