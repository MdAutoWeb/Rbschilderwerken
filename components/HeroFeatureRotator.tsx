"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

interface HeroFeatureRotatorProps {
  slides: Slide[];
  intervalMs?: number;
}

export default function HeroFeatureRotator({
  slides,
  intervalMs = 6000,
}: HeroFeatureRotatorProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <div className="hero-oval-inner">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`hero-oval-slide${i === active ? " is-active" : ""}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 900px) 78vw, 380px"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
      {slides.length > 1 && (
        <div className="hero-oval-dots" aria-hidden="true">
          {slides.map((_, i) => (
            <span key={i} className={`hero-oval-dot${i === active ? " is-active" : ""}`} />
          ))}
        </div>
      )}
    </div>
  );
}
