"use client";

import { useState } from "react";
import Image from "next/image";
import { IMG } from "@/lib/assets";

const PANELS = [
  {
    src: "/assets/voor-na/buiten-zijgevel-na.jpeg",
    alt: "Buitenschilderwerk zijgevel, RB Schilderwerken Torhout",
    label: "Buitenwerken",
    count: 1,
    pos: "center 35%",
    hideFoot: true,
  },
  {
    src: IMG.renovatie.keuken,
    alt: "Keuken renovatie, RB Schilderwerken Torhout",
    label: "Keuken Renovatie",
    count: 4,
    pos: "center 20%",
    hideFoot: false,
  },
  {
    src: IMG.renovatie.badkamer,
    alt: "Badkamer renovatie, RB Schilderwerken Torhout",
    label: "Badkamer Renovatie",
    count: 6,
    pos: "center top",
    hideFoot: false,
  },
  {
    src: IMG.renovatie.living,
    alt: "Woonkamer renovatie, RB Schilderwerken Torhout",
    label: "Woonkamer",
    count: 3,
    pos: "center 25%",
    hideFoot: false,
  },
] as const;

export default function GalleryHero() {
  const [active, setActive] = useState(0);

  return (
    <section className="gh-wrap gh-wrap-fill" onMouseLeave={() => setActive(0)}>
      {PANELS.map((panel, i) => {
        const isOpen = active === i;
        return (
          <button
            key={i}
            type="button"
            className={`gh-panel${isOpen ? " is-open" : ""}`}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
            aria-label={`Toon ${panel.label}`}
          >
            {/* Photo */}
            <div className="gh-photo">
              <Image
                src={panel.src}
                alt={panel.alt}
                fill
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
                sizes="(max-width: 640px) 92vw, 50vw"
                style={{ objectFit: "cover", objectPosition: panel.pos }}
              />
            </div>

            {/* Overlay — heavy on narrow, gradient-only on open */}
            <div className="gh-veil" />

            {/* Gold top accent line sweeps in when active */}
            <div className="gh-accent" aria-hidden="true" />

            {/* Narrow-strip content: rotated label */}
            <div className="gh-strip" aria-hidden="true">
              <span className="gh-vert">{panel.label}</span>
            </div>

            {/* Active bottom bar: project name (hidden when logo sits in photo) */}
            {!panel.hideFoot ? (
              <div className="gh-foot">
                <span className="gh-foot-name">{panel.label}</span>
              </div>
            ) : null}
          </button>
        );
      })}

      {/* Mobile dot navigation */}
      <div className="gh-dots" role="tablist" aria-label="Kies project">
        {PANELS.map((panel, i) => (
          <button
            key={i}
            type="button"
            className={`gh-dot${active === i ? " is-active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Toon ${panel.label}`}
            aria-selected={active === i}
          />
        ))}
      </div>
    </section>
  );
}
