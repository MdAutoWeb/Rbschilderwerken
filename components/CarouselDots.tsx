"use client";

import { useEffect, useState } from "react";

interface CarouselDotsProps {
  targetId: string;
  count: number;
  label?: string;
}

export default function CarouselDots({
  targetId,
  count,
  label = "Navigatie",
}: CarouselDotsProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const update = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      const children = Array.from(el.children) as HTMLElement[];
      let idx = 0;
      let best = Infinity;
      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(childCenter - center);
        if (dist < best) {
          best = dist;
          idx = i;
        }
      });
      setActive(idx);
    };

    el.addEventListener("scroll", update, { passive: true });
    update();
    return () => el.removeEventListener("scroll", update);
  }, [targetId]);

  const goTo = (i: number) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (child) {
      child.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  return (
    <div className="carousel-dots" role="tablist" aria-label={label}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          className={`carousel-dot${active === i ? " is-active" : ""}`}
          aria-label={`Ga naar item ${i + 1}`}
          aria-selected={active === i}
          onClick={() => goTo(i)}
        />
      ))}
    </div>
  );
}
