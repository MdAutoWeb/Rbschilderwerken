"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // Wait one frame so the new page DOM is fully painted before observing
    const id = requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.is-bound)").forEach((el) => {
        el.classList.add("is-bound");
        io.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(id);
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
