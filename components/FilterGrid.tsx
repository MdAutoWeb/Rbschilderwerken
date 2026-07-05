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
  desc?: string;
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
  voorPosition,
  naPosition,
  muteBefore = true,
  initialValue,
}: {
  voor: string;
  na: string;
  label: string;
  voorPosition?: string;
  naPosition?: string;
  muteBefore?: boolean;
  initialValue?: number;
}) {
  return (
    <BeforeAfter
      initialValue={initialValue}
      beforeContent={
        <ProjectImage
          src={voor}
          alt={`${label} vóór renovatie`}
          variant={muteBefore ? "before" : "default"}
          objectPosition={voorPosition}
        />
      }
      afterContent={
        <ProjectImage
          src={na}
          alt={`${label} na renovatie`}
          variant="after"
          objectPosition={naPosition}
        />
      }
      ariaLabel={`Vergelijk ${label} voor en na`}
    />
  );
}

function buildProjects(): Project[] {
  return [
    {
      id: "buiten-gevel",
      cats: ["buiten"],
      span: "span-7",
      variant: "wide",
      visual: (
        <VoorNa
          voor={IMG.voorNa.buitenGevelVoor}
          na={IMG.voorNa.buitenGevelNa}
          label="Voorgevel"
        />
      ),
      title: "Voorgevel\nvoor & na",
      desc: "Buitenschilderwerk aan voordeur en ramen: van verweerd houtwerk naar een strakke, weerbestendige grijze afwerking.",
    },
    {
      id: "buiten-deur",
      cats: ["buiten"],
      span: "span-5",
      variant: "tall",
      visual: (
        <VoorNa
          voor={IMG.voorNa.buitenDeurVoor}
          na={IMG.voorNa.buitenDeurNa}
          label="Buitendeur"
        />
      ),
      title: "Buitendeur\nopnieuw geschilderd",
      desc: "Houten voordeur geschuurd, gerepareerd en opnieuw afgewerkt in een duurzame buitenverf.",
    },
    {
      id: "buiten-raam",
      cats: ["buiten"],
      span: "span-5",
      variant: "tall",
      visual: (
        <VoorNa
          voor={IMG.voorNa.buitenRaamVoor}
          na={IMG.voorNa.buitenRaamNa}
          label="Buitenraam"
        />
      ),
      title: "Buitenraam\nvoor & na",
      desc: "Kozijn en raamwerk volledig voorbereid en afgewerkt met weerbestendige verf in een moderne grijstint.",
    },
    {
      id: "buiten-zijgevel",
      cats: ["buiten"],
      span: "span-7",
      variant: "tall",
      visual: (
        <VoorNa
          voor={IMG.voorNa.buitenZijgevelVoor}
          na={IMG.voorNa.buitenZijgevelNa}
          label="Zijgevel"
          voorPosition="center 70%"
          naPosition="center 45%"
          muteBefore={false}
          initialValue={100}
        />
      ),
      title: "Zijgevel\nvoor & na",
      desc: "Ramen, kozijnen en dakgoten aan de zijgevel van een woning opnieuw geschilderd in een egaal donkergrijs.",
    },
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
      desc: "Buitenschilderwerk van gevel, ramen en voordeur van een woning: alles geschuurd, geprimerd en weerbestendig afgewerkt in een frisse kleur.",
    },
    {
      id: "badkamer",
      cats: ["renovatie", "binnen"],
      span: "span-7",
      variant: "tall",
      visual: <VoorNa voor={IMG.voorNa.badkamerVoor} na={IMG.voorNa.badkamerNa} label="Badkamer" />,
      title: "Badkamer volledig\nvernieuwd",
      desc: "Volledige renovatie van een badkamer met vochtbestendige, schimmelwerende afwerking op muren en plafond.",
    },
    {
      id: "living",
      cats: ["binnen", "renovatie"],
      span: "span-5",
      variant: "tall",
      visual: <VoorNa voor={IMG.voorNa.livingVoor} na={IMG.voorNa.livingNa} label="Living" />,
      title: "Living in\nnieuw jasje",
      desc: "Living van een gezinswoning opnieuw geschilderd, van het bijwerken van de muren tot een egale eindlaag in latex.",
    },
    {
      id: "renovatie",
      cats: ["renovatie", "binnen"],
      span: "span-5",
      variant: "tall",
      visual: <VoorNa voor={IMG.voorNa.renovatieVoor} na={IMG.voorNa.renovatieNa} label="Renovatie" />,
      title: "Volledige\nkamerrenovatie",
      desc: "Volledige kamerrenovatie waarbij muren en plafond werden geplamuurd, geschuurd en in meerdere lagen afgewerkt.",
    },
    {
      id: "wc",
      cats: ["renovatie", "binnen"],
      span: "span-6",
      variant: "tall",
      visual: <VoorNa voor={IMG.voorNa.wcVoor} na={IMG.voorNa.wcNa} label="WC" />,
      title: "WC opgefrist\nvoor & na",
      desc: "Toilet opgefrist met een frisse, goed reinigbare muurafwerking; het verschil voor en na is meteen zichtbaar.",
    },
    {
      id: "keuken",
      cats: ["binnen", "renovatie"],
      span: "span-6",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.keuken} alt="Keuken na schilderwerk" />,
      title: "Keuken strak\nafgewerkt",
      desc: "Keuken strak geschilderd met een vetwerende, goed afneembare verf op muren en plafond.",
    },
    {
      id: "living-foto",
      cats: ["binnen"],
      span: "span-6",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.living} alt="Living na schilderwerk" />,
      title: "Living\nstrak afgewerkt",
      desc: "Living afgewerkt in een warme, egale tint met strak afgelijnde plafond- en muurranden.",
    },
    {
      id: "traphal",
      cats: ["renovatie", "binnen"],
      span: "span-7",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.traphal} alt="Traphal na renovatie" />,
      title: "Traphal & overloop\nvolledig vernieuwd",
      desc: "Traphal en overloop volledig vernieuwd, inclusief het lastig bereikbare houtwerk en de hoge muurvlakken.",
    },
    {
      id: "slaapkamer",
      cats: ["binnen"],
      span: "span-6",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.slaapkamer} alt="Slaapkamer na schilderwerk" />,
      title: "Slaapkamer in\nzachte tinten",
      desc: "Slaapkamer geschilderd in zachte, rustgevende tinten met een mat afgewerkt plafond.",
    },
    {
      id: "slaapkamer2",
      cats: ["binnen"],
      span: "span-6",
      variant: "wide",
      visual: <SinglePhoto src={IMG.renovatie.slaapkamer2} alt="Tweede slaapkamer na schilderwerk" />,
      title: "Tweede slaapkamer,\néén palet",
      desc: "Tweede slaapkamer afgewerkt in één doorlopend kleurenpalet voor een rustige, samenhangende uitstraling.",
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
      desc: "Binnendeuren en kozijnen geschuurd, geprimerd en opnieuw gelakt voor een strakke, duurzame afwerking.",
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
            className={`project project--${p.id} ${p.span}${p.variant ? ` ${p.variant}` : ""}`}
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
                {p.desc ? <p className="ttl-desc">{p.desc}</p> : null}
              </div>
              {p.extra}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
