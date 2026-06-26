"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BeforeAfter from "./BeforeAfter";
import ProjectImage from "./ProjectImage";
import { IMG } from "@/lib/assets";

type Category = "all" | "binnen" | "buiten" | "renovatie";

interface Project {
  id: string;
  cats: string[];
  span: string;
  variant: "wide" | "tall" | "square" | "";
  visual: React.ReactNode;
  title: string;
  extra?: React.ReactNode;
}

function SinglePhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="single-img">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 800px) 100vw, 66vw"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </div>
  );
}

function VoorNa({
  voor,
  na,
  label,
}: {
  voor: string;
  na: string;
  label: string;
}) {
  return (
    <BeforeAfter
      beforeContent={<ProjectImage src={voor} alt={`${label} vóór renovatie`} variant="before" />}
      afterContent={<ProjectImage src={na} alt={`${label} na renovatie`} variant="after" />}
      ariaLabel={`Vergelijk ${label} voor en na`}
    />
  );
}

function buildProjects(): Project[] {
  return [
    {
      id: "gevel-ramen",
      cats: ["buiten"],
      span: "span-5",
      variant: "tall",
      visual: (
        <SinglePhoto
          src={IMG.buiten.gevelRamen}
          alt="Gevel met ramen en deur in buitenschilderwerk afgewerkt"
        />
      ),
      title: "Ramen & deur\nin frisse kleur",
    },
    {
      id: "badkamer",
      cats: ["renovatie", "binnen"],
      span: "span-7",
      variant: "tall",
      visual: <VoorNa voor={IMG.voorNa.badkamerVoor} na={IMG.voorNa.badkamerNa} label="Badkamer" />,
      title: "Badkamer volledig\nvernieuwd",
    },
    {
      id: "living",
      cats: ["binnen", "renovatie"],
      span: "span-5",
      variant: "tall",
      visual: <VoorNa voor={IMG.voorNa.livingVoor} na={IMG.voorNa.livingNa} label="Living" />,
      title: "Living in\nnieuw jasje",
    },
    {
      id: "renovatie",
      cats: ["renovatie", "binnen"],
      span: "span-5",
      variant: "tall",
      visual: <VoorNa voor={IMG.voorNa.renovatieVoor} na={IMG.voorNa.renovatieNa} label="Renovatie" />,
      title: "Volledige\nkamerrenovatie",
    },
    {
      id: "wc",
      cats: ["renovatie", "binnen"],
      span: "span-6",
      variant: "tall",
      visual: <VoorNa voor={IMG.voorNa.wcVoor} na={IMG.voorNa.wcNa} label="WC" />,
      title: "WC opgefrist\nvoor & na",
    },
    {
      id: "keuken",
      cats: ["binnen", "renovatie"],
      span: "span-6",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.keuken} alt="Keuken na schilderwerk" />,
      title: "Keuken strak\nafgewerkt",
    },
    {
      id: "living-foto",
      cats: ["binnen"],
      span: "span-6",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.living} alt="Living na schilderwerk" />,
      title: "Living\nstrak afgewerkt",
    },
    {
      id: "traphal",
      cats: ["renovatie", "binnen"],
      span: "span-7",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.traphal} alt="Traphal na renovatie" />,
      title: "Traphal & overloop\nvolledig vernieuwd",
    },
    {
      id: "slaapkamer",
      cats: ["binnen"],
      span: "span-6",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.slaapkamer} alt="Slaapkamer na schilderwerk" />,
      title: "Slaapkamer in\nzachte tinten",
    },
    {
      id: "slaapkamer2",
      cats: ["binnen"],
      span: "span-6",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.slaapkamer2} alt="Tweede slaapkamer na schilderwerk" />,
      title: "Tweede slaapkamer,\néén palet",
    },
    {
      id: "deur",
      cats: ["binnen", "renovatie"],
      span: "span-12",
      variant: "",
      visual: (
        <div className="single-img">
          <Image
            src={IMG.voorNa.deur}
            alt="Deuren voor en na schilderwerk"
            fill
            sizes="100vw"
          />
        </div>
      ),
      title: "Deuren & kozijnen\nopnieuw afgewerkt",
      extra: (
        <Link className="btn btn-outline-dark btn-sm" href="/contact">
          Vergelijkbaar project? <span className="arrow" aria-hidden="true"></span>
        </Link>
      ),
    },
  ];
}

export default function FilterGrid() {
  const [active, setActive] = useState<Category>("all");
  const allProjects = buildProjects();

  const visible = allProjects.filter((p) =>
    active === "all" ? true : p.cats.includes(active)
  );

  return (
    <>
      <div className="filters reveal" role="tablist" aria-label="Filter realisaties">
        {(["all", "binnen", "buiten", "renovatie"] as Category[]).map((f) => (
          <button
            key={f}
            className={`filter${active === f ? " is-active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f === "all" ? "Alle projecten" : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="projects">
        {visible.map((p) => (
          <article
            key={p.id}
            className={`project project--${p.id} ${p.span}${p.variant ? ` ${p.variant}` : ""} reveal`}
          >
            {p.visual}
            <div
              className="project-meta"
              style={
                p.id === "deur"
                  ? { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 24 }
                  : undefined
              }
            >
              <div style={p.id === "deur" ? { display: "flex", flexDirection: "column", gap: 4, flex: 1 } : undefined}>
                <h3 className="ttl" style={{ whiteSpace: "pre-line" }}>{p.title}</h3>
              </div>
              {p.extra}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
