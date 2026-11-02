"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { foodPhotos } from "@/lib/restaurant-info";
import { useLanguage } from "./LanguageProvider";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function MenuCarousel() {
  const { language, t } = useLanguage();
  const track = useRef<HTMLDivElement>(null);
  const [loadImages, setLoadImages] = useState(false);
  const offset = useRef(0);
  const loopWidth = useRef(0);
  const drag = useRef<{ id: number; x: number } | null>(null);

  const paint = useCallback(() => {
    if (!track.current || !loopWidth.current) return;
    // Both identical groups share a boundary, so wrapping never changes the view.
    offset.current = ((offset.current % loopWidth.current) + loopWidth.current) % loopWidth.current;
    track.current.style.transform = `translate3d(${-offset.current}px, 0, 0)`;
  }, []);

  useEffect(() => {
    const group = track.current?.firstElementChild;
    if (!group) return;
    const measure = () => {
      loopWidth.current = group.getBoundingClientRect().width;
      paint();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(group);
    measure();

    // Warm the strip shortly before it is visible, without fetching every dish
    // while the visitor is still looking at the hero.
    const slider = track.current!.parentElement!;
    const loadingObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadImages(true);
        loadingObserver.disconnect();
      }
    }, { rootMargin: "600px 0px" });
    loadingObserver.observe(slider);

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    let frame = 0;
    let previousTime: number | null = null;
    const advance = (time: number) => {
      const elapsed = previousTime === null ? 0 : Math.min(time - previousTime, 64);
      previousTime = time;
      if (!drag.current) {
        offset.current += (loopWidth.current / (foodPhotos.length * 12667)) * elapsed;
        paint();
      }
      frame = requestAnimationFrame(advance);
    };
    const syncAnimation = () => {
      if (inView && !document.hidden && !motionPreference.matches) {
        if (!frame) frame = requestAnimationFrame(advance);
      } else {
        cancelAnimationFrame(frame);
        frame = 0;
        previousTime = null;
      }
    };
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncAnimation();
    });
    visibilityObserver.observe(slider);
    document.addEventListener("visibilitychange", syncAnimation);
    motionPreference.addEventListener("change", syncAnimation);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      loadingObserver.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", syncAnimation);
      motionPreference.removeEventListener("change", syncAnimation);
    };
  }, [paint]);

  function startDrag(event: PointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    drag.current = { id: event.pointerId, x: event.clientX };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.dataset.dragging = "true";
  }

  function moveDrag(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.id !== event.pointerId) return;
    offset.current -= event.clientX - drag.current.x;
    drag.current.x = event.clientX;
    paint();
  }

  function endDrag(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.id !== event.pointerId) return;
    drag.current = null;
    delete event.currentTarget.dataset.dragging;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    offset.current += event.key === "ArrowRight" ? 160 : -160;
    paint();
  }
  return (
    <section className="menu-section" id="menu">
      <div className="section-shell">
        <div className="menu-heading">
          <Reveal><SectionHeading number="02" title={t.menuTitle} /></Reveal>
          <Reveal delay={0.1} className="menu-description">
            <p className="section-copy">{t.menuBody}</p>
            <div className="menu-links">
              <Link className="text-link" href="/menu">
                {t.fullMenu}<ArrowUpRight size={17} />
              </Link>
              <a className="text-link" href="#pricing">{t.pricing}</a>
            </div>
          </Reveal>
        </div>
        <div
          className="menu-slider"
          role="region"
          aria-roledescription="carousel"
          aria-label={language === "pt" ? "Destaques do menu. Arraste ou use as teclas de seta para explorar." : "Menu highlights. Drag or use the arrow keys to explore."}
          tabIndex={0}
          onPointerDown={startDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onLostPointerCapture={endDrag}
          onKeyDown={onKeyDown}
        >
          <div className="menu-track" ref={track}>
            {[0, 1].map((copy) => (
              <div className="menu-slide-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {foodPhotos.map((photo) => (
                  <article className="dish-card" key={photo.src}>
                    <div className="dish-image">
                      <Image
                        src={photo.src}
                        alt={copy === 1 ? "" : language === "pt" ? photo.altPt : photo.altEn}
                        fill
                        loading={loadImages ? "eager" : "lazy"}
                        draggable={false}
                        sizes="(max-width: 600px) 80vw, (max-width: 838px) 260px, (max-width: 1419px) 31vw, 440px"
                      />
                    </div>
                    <div className="dish-overlay">
                      <p>{language === "pt" ? photo.detailPt : photo.detailEn}</p>
                      <h3>{language === "pt" ? photo.pt : photo.en}</h3>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
