import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";
import BeforeAfter from "@/components/BeforeAfter";
import ProjectImage from "@/components/ProjectImage";
import GalleryHero from "@/components/GalleryHero";
import CarouselDots from "@/components/CarouselDots";
import ReviewsSection from "@/components/ReviewsSection";
import { IMG } from "@/lib/assets";
import { getWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Schilder Torhout, Lichtervelde & omstreken",
  description:
    "RB Schilderwerken: vakkundige schilder in Torhout, Lichtervelde, Wingene en omstreken. Binnenschilderwerk, buitenschilderwerk, behangwerken en renovatie. Gratis offerte.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RB Schilderwerken, schilder in Torhout, Lichtervelde & omstreken",
    description:
      "Vakkundig schilderwerk voor binnen & buiten. Nieuwbouw & renovatie. Actief in Torhout, Lichtervelde, Wingene en omstreken. Gratis offerte binnen 48 uur.",
    url: "/",
  },
};

const webPageSchema = getWebPageSchema({
  path: "/",
  name: "RB Schilderwerken — schilder Torhout, Lichtervelde & omstreken",
  description:
    "Vakkundige schilderwerken in Torhout, Lichtervelde, Zedelgem, Ichtegem, Koekelare, Kortemark en Oostkamp. Binnen, buiten, behang en renovatie.",
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Navbar active="home" />

      {/* HERO */}
      <section className="hero-section hero-section-photo">
        <div className="hero-section-bg" aria-hidden="true">
          <Image
            src="/assets/voor-na/buiten-zijgevel-na.jpeg"
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 35%" }}
          />
        </div>
        <div className="hero-section-veil" aria-hidden="true" />
        <div className="container hero-split">
          <div className="hero-split-copy on-dark">
            <span className="eyebrow on-dark">Schilder in Torhout, sinds 2025</span>
            <h1 className="display">
              Schilderwerken
              <br />
              waar <span className="accent">kwaliteit</span>
              <br />
              voorop staat.
            </h1>
            <p className="lede">
              Binnen en buiten, nieuwbouw en renovatie. Actief in Torhout,
              Lichtervelde, Wingene en omstreken. Vakmanschap waar de afwerking
              telt.
            </p>
            <div className="hero-btns">
              <Link className="btn btn-gold" href="/contact">
                Vraag gratis offerte
                <span className="arrow" aria-hidden="true"></span>
              </Link>
              <Link className="btn btn-outline-light" href="/realisaties">
                Bekijk realisaties
              </Link>
            </div>
          </div>

          <div className="hero-accordion-wrap" aria-label="Realisatie gallery">
            <GalleryHero />
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="sec-dark on-dark" style={{ padding: 0 }}>
        <div
          className="container"
          style={{ paddingTop: 56, paddingBottom: 56 }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 24,
              alignItems: "center",
            }}
            className="stats-grid"
          >
            <div className="stat reveal">
              <div
                style={{
                  fontSize: "clamp(40px, 4.5vw, 64px)",
                  fontWeight: 600,
                  letterSpacing: "-0.04em",
                  color: "var(--gold-light)",
                  lineHeight: 1,
                }}
              >
                2008
              </div>
            </div>
            <div className="stat reveal d-1">
              <div
                style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--cream)",
                  lineHeight: 1.1,
                }}
              >
                Binnen
                <br />
                &amp; buiten
              </div>
            </div>
            <div className="stat reveal d-2">
              <div
                style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--cream)",
                  lineHeight: 1.1,
                }}
              >
                Nieuwbouw
                <br />
                &amp; renovatie
              </div>
            </div>
            <div className="stat reveal d-3">
              <div
                style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  color: "var(--gold-light)",
                  lineHeight: 1.1,
                }}
              >
                Torhout
                <br />
                &amp; omstreken
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="sec-white">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Diensten</span>
            <h2 className="h2">
              Vier disciplines,
              <br />
              één hand vakwerk.
            </h2>
            <p className="lede">
              Van een muurtje in de living tot een volledige gevel: elk project
              krijgt dezelfde voorbereiding en afwerking.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
            className="services-grid"
          >
            <article className="service reveal">
              <div className="srv-media">
                <Image
                  src={IMG.renovatie.living}
                  alt="Binnenschilderwerk, strakke witte wanden"
                  fill
                  sizes="(max-width: 640px) 78vw, 25vw"
                />
              </div>
              <div className="srv-content">
                <span className="srv-num">01</span>
                <h3 className="srv-title">Binnen­schilderwerk</h3>
                <p className="srv-body">
                  Muren, plafonds, deuren en kasten, strak afgeplakt en dampdicht
                  onderlegd, in twee tot drie lagen opgebouwd.
                </p>
                <span className="srv-tags">Latex, lak, plafonds, deuren</span>
              </div>
            </article>
            <article className="service reveal d-1">
              <div className="srv-media">
                <Image
                  src={IMG.voorNa.buitenGevelNa}
                  alt="Buitenschilderwerk, geschilderde gevel"
                  fill
                  sizes="(max-width: 640px) 78vw, 25vw"
                />
              </div>
              <div className="srv-content">
                <span className="srv-num">02</span>
                <h3 className="srv-title">Buiten­schilderwerk</h3>
                <p className="srv-body">
                  Gevels, ramen, dakgoten en houtwerk. Volledig schuren, ontvetten
                  en weerbestendig afwerken.
                </p>
                <span className="srv-tags">
                  Gevels, ramen, houtwerk, dakgoten
                </span>
              </div>
            </article>
            <article className="service reveal d-2">
              <div className="srv-media">
                <Image
                  src={IMG.renovatie.slaapkamer}
                  alt="Behangwerken en wandafwerking in slaapkamer"
                  fill
                  sizes="(max-width: 640px) 78vw, 25vw"
                />
              </div>
              <div className="srv-content">
                <span className="srv-num">03</span>
                <h3 className="srv-title">Behang­werken</h3>
                <p className="srv-body">
                  Van structuurbehang tot fotobehang, met onzichtbare naden en
                  kaarsrechte patronen.
                </p>
                <span className="srv-tags">
                  Vlies, vinyl, fotobehang, texturen
                </span>
              </div>
            </article>
            <article className="service reveal d-3">
              <div className="srv-media">
                <Image
                  src={IMG.renovatie.keuken}
                  alt="Renovatie en nieuwbouw, keukenafwerking"
                  fill
                  sizes="(max-width: 640px) 78vw, 25vw"
                />
              </div>
              <div className="srv-content">
                <span className="srv-num">04</span>
                <h3 className="srv-title">Renovatie &amp; nieuwbouw</h3>
                <p className="srv-body">
                  Volledige afwerking voor aannemers en particulieren: plamuren,
                  schuren, schilderen, opgeleverd binnen planning.
                </p>
                <span className="srv-tags">
                  Plamuur, schuren, voorstrijken, oplevering
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* REALISATIES PREVIEW */}
      <section className="sec-cream">
        <div className="container">
          <div className="sec-head row">
            <div className="stack">
              <span className="eyebrow">Eerder werk</span>
              <h2 className="h2">
                Van verweerde gevel
                <br />
                tot stralende interieurs.
              </h2>
            </div>
            <Link className="btn btn-outline-dark btn-sm" href="/realisaties">
              Bekijk alle realisaties{" "}
              <span className="arrow" aria-hidden="true"></span>
            </Link>
          </div>

          <div className="work-grid reveal" id="work-grid">
            <article className="work-card">
              <BeforeAfter
                style={{
                  aspectRatio: "4/5",
                  boxShadow: "none",
                  borderRadius: 0,
                }}
                beforeContent={
                  <ProjectImage
                    src={IMG.voorNa.badkamerVoor}
                    alt="Badkamer vóór renovatie"
                    variant="before"
                  />
                }
                afterContent={
                  <ProjectImage
                    src={IMG.voorNa.badkamerNa}
                    alt="Badkamer na renovatie"
                    variant="after"
                  />
                }
                ariaLabel="Vergelijk badkamer voor en na"
              />
            </article>

            <article className="work-card">
              <BeforeAfter
                style={{
                  aspectRatio: "4/5",
                  boxShadow: "none",
                  borderRadius: 0,
                }}
                beforeContent={
                  <ProjectImage
                    src={IMG.voorNa.livingVoor}
                    alt="Living vóór renovatie"
                    variant="before"
                  />
                }
                afterContent={
                  <ProjectImage
                    src={IMG.voorNa.livingNa}
                    alt="Living na renovatie"
                    variant="after"
                  />
                }
                ariaLabel="Vergelijk living voor en na"
              />
            </article>

            <article className="work-card">
              <BeforeAfter
                style={{
                  aspectRatio: "4/5",
                  boxShadow: "none",
                  borderRadius: 0,
                }}
                initialValue={50}
                beforeContent={
                  <ProjectImage
                    src={IMG.voorNa.buitenZijgevelVoor}
                    alt="Zijgevel vóór schilderwerk"
                    objectPosition="center 70%"
                  />
                }
                afterContent={
                  <ProjectImage
                    src={IMG.voorNa.buitenZijgevelNa}
                    alt="Zijgevel na schilderwerk"
                    objectPosition="center 45%"
                  />
                }
                ariaLabel="Vergelijk zijgevel voor en na"
              />
            </article>
          </div>
          <CarouselDots
            targetId="work-grid"
            count={3}
            label="Realisaties navigatie"
          />
        </div>
      </section>

      {/* OVER ONS — kort, gecentreerd */}
      <section className="sec-white">
        <div className="container">
          <div
            className="sec-head"
            style={{
              textAlign: "center",
              alignItems: "center",
              marginInline: "auto",
            }}
          >
            <span className="eyebrow" style={{ marginInline: "auto" }}>
              Over RB Schilderwerken
            </span>
            <h2 className="h2">
              De vakman achter
              <br />
              elke streek verf.
            </h2>
          </div>

          <div
            style={{
              maxWidth: 560,
              marginInline: "auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 32,
            }}
          >
            <p
              className="lede"
              style={{
                margin: 0,
                maxWidth: "100%",
                textAlign: "center",
              }}
            >
              RB Schilderwerken is het schildersbedrijf van zaakvoerder Rufino
              in Torhout. Hij schildert sinds 2008 en startte in 2025 zijn eigen
              zaak: geen tussenpersonen, één aanspreekpunt dat zelf mee op de
              werf staat. Binnen en buiten, behang en renovatie — met dezelfde
              voorbereiding en nette oplevering.
            </p>

            <nav
              aria-label="Regio's"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px 18px",
                maxWidth: 520,
              }}
            >
              {(
                [
                  ["/schilder-torhout", "Torhout"],
                  ["/schilder-lichtervelde", "Lichtervelde"],
                  ["/schilder-zedelgem", "Zedelgem"],
                  ["/schilder-ichtegem", "Ichtegem"],
                  ["/schilder-koekelare", "Koekelare"],
                  ["/schilder-kortemark", "Kortemark"],
                  ["/schilder-oostkamp", "Oostkamp"],
                ] as const
              ).map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--ink-soft)",
                    textDecoration: "none",
                    borderBottom: "1px solid transparent",
                    paddingBottom: 2,
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <ReviewsSection />

      {/* CTA BAND */}
      <section className="sec-dark on-dark">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
          id="cta-grid"
        >
          <div
            className="reveal"
            style={{ display: "flex", flexDirection: "column", gap: 22 }}
          >
            <span className="eyebrow on-dark">Aan de slag</span>
            <h2 className="h2" style={{ color: "var(--cream)" }}>
              Klaar voor een
              <br />
              <span
                style={{
                  color: "var(--gold-light)",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                vakkundige
              </span>{" "}
              afwerking?
            </h2>
            <p className="lede">
              Stuur een foto of beschrijving van uw project. U krijgt binnen
              48&nbsp;uur een vrijblijvende offerte op maat.
            </p>
          </div>
          <div
            className="reveal d-1"
            style={{ display: "flex", flexDirection: "column", gap: 12 }}
          >
            <a
              className="btn btn-gold"
              href="https://wa.me/32474271575"
              target="_blank"
              rel="noopener"
              style={{ justifyContent: "space-between", padding: "18px 22px" }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.4 2.9 1.3 2.9.9 3.4.8.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.4 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.1c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.4 1.1 1.1-3.3-.2-.4C3.6 14.6 3 13.4 3 12c0-4.9 4.1-9 9-9s9 4.1 9 9-4.1 9.1-9 9.1z" />
                </svg>
                Stuur een WhatsApp
              </span>
              <span className="arrow" aria-hidden="true"></span>
            </a>
            <Link
              className="btn btn-outline-light"
              href="/contact"
              style={{ justifyContent: "space-between", padding: "18px 22px" }}
            >
              Vraag offerte per mail
              <span className="arrow" aria-hidden="true"></span>
            </Link>
            <p
              style={{
                fontSize: 12,
                color: "rgba(245,236,220,0.5)",
                letterSpacing: "0.08em",
                margin: "8px 0 0",
              }}
            >
              <a href="tel:+32474271575" style={{ color: "inherit" }}>
                +32&nbsp;474&nbsp;27&nbsp;15&nbsp;75
              </a>
              ,{" "}
              <a
                href="mailto:info@rbschilderwerken.be"
                style={{ color: "inherit" }}
              >
                info@rbschilderwerken.be
              </a>
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 800px) {
          #cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
      <WaFloat />
    </>
  );
}
