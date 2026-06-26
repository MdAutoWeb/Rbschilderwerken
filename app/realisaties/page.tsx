import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";
import FilterGrid from "@/components/FilterGrid";

export const metadata: Metadata = {
  title: "Realisaties, schilderwerk in West-Vlaanderen",
  description:
    "Bekijk onze realisaties: badkamer, living, slaapkamer, keuken en gevels. Vakkundig schilderwerk en renovatie door RB Schilderwerken in Torhout, West-Vlaanderen.",
  openGraph: {
    title: "Realisaties, RB Schilderwerken",
    description:
      "Vakmanschap in West-Vlaanderen. Voor en na: badkamer, living, slaapkamer en renovatieprojecten.",
    url: "/realisaties",
  },
};

export default function Realisaties() {
  return (
    <>
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
