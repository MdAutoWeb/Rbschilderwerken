"use client";

import { useState } from "react";
import { IMG } from "@/lib/assets";

const PANELS = [
  {
    src: IMG.renovatie.keuken,
    alt: "Keuken renovatie, RB Schilderwerken Torhout",
    label: "Keuken Renovatie",
    count: 4,
    pos: "center 20%",
  },
  {
    src: IMG.renovatie.badkamer,
    alt: "Badkamer renovatie, RB Schilderwerken Torhout",
    label: "Badkamer Renovatie",
    count: 6,
    pos: "center top",
  },
  {
    src: IMG.renovatie.living,
    alt: "Woonkamer renovatie, RB Schilderwerken Torhout",
    label: "Woonkamer",
    count: 3,
    pos: "center 25%",
  },
] as const;

export default function GalleryHero() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="gh-wrap gh-wrap-fill"
      onMouseLeave={() => setActive(0)}
    >
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
            {/* Photo — bg-image avoids fill/height-chain issues */}
            <div
              className="gh-photo"
              role="img"
              aria-label={panel.alt}
              style={{
                backgroundImage: `url('${panel.src}')`,
                backgroundPosition: panel.pos,
              }}
            />

            {/* Overlay — heavy on narrow, gradient-only on open */}
            <div className="gh-veil" />

            {/* Gold top accent line sweeps in when active */}
            <div className="gh-accent" aria-hidden="true" />

            {/* Narrow-strip content: rotated label */}
            <div className="gh-strip" aria-hidden="true">
              <span className="gh-vert">{panel.label}</span>
            </div>

            {/* Active bottom bar: project name */}
            <div className="gh-foot">
              <span className="gh-foot-name">{panel.label}</span>
            </div>
          </button>
        );
      })}
    </section>
  );
}
