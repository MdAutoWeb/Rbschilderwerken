"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BeforeAfter from "./BeforeAfter";
import ProjectImage from "./ProjectImage";
import { IMG } from "@/lib/assets";

type Category = "all" | "binnen" | "renovatie";

interface Project {
  id: string;
  cats: string[];
  span: string;
  variant: "wide" | "tall" | "square" | "";
  visual: React.ReactNode;
  label: string;
  year: string;
  title: string;
  desc: string;
  extra?: React.ReactNode;
}

function SinglePhoto({ src, alt, tag }: { src: string; alt: string; tag: string }) {
  return (
    <div className="single-img">
      <Image src={src} alt={alt} fill sizes="(max-width: 800px) 100vw, 66vw" style={{ objectFit: "cover", objectPosition: "center" }} />
      <span className="tag">{tag}</span>
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
      id: "badkamer",
      cats: ["renovatie", "binnen"],
      span: "span-7",
      variant: "tall",
      visual: <VoorNa voor={IMG.voorNa.badkamerVoor} na={IMG.voorNa.badkamerNa} label="Badkamer" />,
      label: "Renovatie",
      year: "West-Vlaanderen, 2025",
      title: "Badkamer volledig\nvernieuwd",
      desc: "Vochtbestendige primer, gladde plafondafwerking rond de schuine wand, twee lagen muurverf.",
    },
    {
      id: "living",
      cats: ["binnen", "renovatie"],
      span: "span-5",
      variant: "tall",
      visual: <VoorNa voor={IMG.voorNa.livingVoor} na={IMG.voorNa.livingNa} label="Living" />,
      label: "Binnenschilderwerk",
      year: "West-Vlaanderen, 2024",
      title: "Living in\nnieuw jasje",
      desc: "Muren en plafond opnieuw afgewerkt, strakke latex matte afwerking, kleur in overleg met de klant.",
    },
    {
      id: "renovatie",
      cats: ["renovatie", "binnen"],
      span: "span-5",
      variant: "wide",
      visual: <VoorNa voor={IMG.voorNa.renovatieVoor} na={IMG.voorNa.renovatieNa} label="Renovatie" />,
      label: "Renovatie",
      year: "West-Vlaanderen, 2024",
      title: "Volledige\nkamerrenovatie",
      desc: "Van ruwbouw tot oplevering, plamuren, schuren, voorstrijken en schilderen in één doorlopend project.",
    },
    {
      id: "wc",
      cats: ["renovatie", "binnen"],
      span: "span-6",
      variant: "tall",
      visual: <VoorNa voor={IMG.voorNa.wcVoor} na={IMG.voorNa.wcNa} label="WC" />,
      label: "Renovatie",
      year: "West-Vlaanderen, 2024",
      title: "WC opgefrist\nvoor & na",
      desc: "Compacte ruimte, groot resultaat, muren en plafond opnieuw afgewerkt met vochtbestendige verf.",
    },
    {
      id: "keuken",
      cats: ["binnen", "renovatie"],
      span: "span-6",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.keuken} alt="Keuken na schilderwerk" tag="Keuken" />,
      label: "Binnenschilderwerk",
      year: "West-Vlaanderen, 2024",
      title: "Keuken strak\nafgewerkt",
      desc: "Muren en plafond in duurzame verf, bestand tegen vocht en dagelijks gebruik.",
    },
    {
      id: "living-foto",
      cats: ["binnen"],
      span: "span-6",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.living} alt="Living na schilderwerk" tag="Living" />,
      label: "Binnenschilderwerk",
      year: "West-Vlaanderen, 2024",
      title: "Living\nstrak afgewerkt",
      desc: "Egaal resultaat op muren en plafond, kleur afgestemd op het bestaande interieur.",
    },
    {
      id: "traphal",
      cats: ["renovatie", "binnen"],
      span: "span-7",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.traphal} alt="Traphal na renovatie" tag="Traphal" />,
      label: "Renovatie",
      year: "West-Vlaanderen, 2024",
      title: "Traphal & overloop\nvolledig vernieuwd",
      desc: "Plafonds, muren en trapleuning, voorbereid, geschuurd en afgewerkt in duurzame verf.",
    },
    {
      id: "slaapkamer",
      cats: ["binnen"],
      span: "span-6",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.slaapkamer} alt="Slaapkamer na schilderwerk" tag="Slaapkamer" />,
      label: "Binnenschilderwerk",
      year: "West-Vlaanderen, 2024",
      title: "Slaapkamer in\nzachte tinten",
      desc: "Volledige kamer afgewerkt, muren en plafond in een rustig palet.",
    },
    {
      id: "slaapkamer2",
      cats: ["binnen"],
      span: "span-6",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.slaapkamer2} alt="Tweede slaapkamer na schilderwerk" tag="Slaapkamer" />,
      label: "Binnenschilderwerk",
      year: "West-Vlaanderen, 2024",
      title: "Tweede slaapkamer,\néén palet",
      desc: "Muren en plafond in twee lagen, strakke afwerking rond ramen en hoeken.",
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
            alt="Deur voor en na schilderwerk"
            fill
            sizes="100vw"
          />
          <span className="tag">Deuren, voor en na</span>
        </div>
      ),
      label: "Binnenschilderwerk",
      year: "West-Vlaanderen, 2024",
      title: "Deuren & kozijnen\nopnieuw afgewerkt",
      desc: "Schuren, voorstrijken en lakken, strakke afwerking op kozijnen en binnendeuren.",
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
        {(["all", "binnen", "renovatie"] as Category[]).map((f) => (
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
                <div className="row1">
                  <span>{p.label}</span>
                  <span className="dot"></span>
                  <span className="yr">{p.year}</span>
                </div>
                <h3 className="ttl" style={{ whiteSpace: "pre-line" }}>{p.title}</h3>
                <p className="desc">{p.desc}</p>
              </div>
              {p.extra}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
