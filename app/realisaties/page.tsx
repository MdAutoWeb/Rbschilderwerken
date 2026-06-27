import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";
import FilterGrid from "@/components/FilterGrid";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rbschilderwerken.be";

export const metadata: Metadata = {
  title: "Realisaties, schilderwerk in West-Vlaanderen",
  description:
    "Bekijk onze realisaties: badkamer, living, slaapkamer, keuken en gevels. Vakkundig schilderwerk en renovatie door RB Schilderwerken in Torhout, West-Vlaanderen.",
  alternates: {
    canonical: "/realisaties",
  },
  openGraph: {
    title: "Realisaties, RB Schilderwerken",
    description:
      "Vakmanschap in West-Vlaanderen. Voor en na: badkamer, living, slaapkamer en renovatieprojecten.",
    url: "/realisaties",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Realisaties",
      item: `${SITE_URL}/realisaties`,
    },
  ],
};

export default function Realisaties() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar active="realisaties" />

      {/* PAGE HEADER */}
      <section className="header-realisaties">
        <div className="container">
          <div className="header-grid">
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <span className="eyebrow on-dark">Portfolio 2025 en 2026</span>
              <h1 className="display" style={{ color: "var(--cream)", fontSize: "clamp(44px, 7vw, 92px)" }}>
                Werk dat<br />
                <span style={{ color: "var(--gold-light)", fontStyle: "italic", fontWeight: 500 }}>voor zich</span> spreekt.
              </h1>
            </div>
            <dl className="header-meta reveal d-1">
              <div>
                <dt>Regio</dt>
                <dd>West-Vlaanderen</dd>
              </div>
              <div>
                <dt>Ervaring</dt>
                <dd>Sinds 2025</dd>
              </div>
              <div>
                <dt>Specialisaties</dt>
                <dd>Binnen, buiten, behang, decoratief</dd>
              </div>
              <div>
                <dt>Klanten</dt>
                <dd>Particulier &amp; aannemers</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="sec-white">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Realisaties</span>
            <h2 className="h2">
              Van badkamer tot gevel,
              <br />
              elk project met dezelfde zorg.
            </h2>
            <p className="lede">
              Hieronder vindt u een selectie van recente realisaties van RB
              Schilderwerken in Torhout en de rest van West-Vlaanderen. Van een
              volledig vernieuwde badkamer en een opgefriste living tot
              buitenschilderwerk aan gevel en ramen: elk project toont hoe een
              grondige voorbereiding en een nette afwerking het verschil maken.
              We schuren, plamuren en strijken voor waar nodig, plakken alles
              zorgvuldig af en bouwen de verf op in meerdere lagen, zowel binnen
              als buiten. Bij veel projecten ziet u via de voor-en-na-beelden
              meteen het resultaat. We werken voor particulieren én aannemers,
              telkens met dezelfde aandacht voor detail, ongeacht de omvang van
              de opdracht. Heeft u een gelijkaardig project in gedachten? Bekijk
              de voorbeelden en vraag vrijblijvend een offerte aan; u krijgt
              binnen 48&nbsp;uur een antwoord op maat van uw woning en budget.
            </p>
          </div>
          <FilterGrid />
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="sec-dark on-dark">
        <div className="container" style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 28, alignItems: "center" }}>
          <span className="eyebrow on-dark no-rule" style={{ margin: "0 auto" }}>Volgende project</span>
          <h2 className="h2" style={{ color: "var(--cream)", maxWidth: "18ch" }}>Klaar voor<br /><span style={{ color: "var(--gold-light)", fontStyle: "italic", fontWeight: 500 }}>uw</span> project?</h2>
          <p className="lede" style={{ textAlign: "center", margin: "0 auto" }}>Stuur een foto via WhatsApp of vraag een offerte aan. Antwoord binnen 48&nbsp;uur.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            <a className="btn btn-gold" href="https://wa.me/32474271575" target="_blank" rel="noopener">
              Stuur een WhatsApp
              <span className="arrow" aria-hidden="true"></span>
            </a>
            <Link className="btn btn-outline-light" href="/contact">Vraag offerte aan</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WaFloat />
    </>
  );
}
