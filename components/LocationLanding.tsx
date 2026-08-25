import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";
import { getServiceSchema } from "@/lib/schema";

export type LocationFaq = { q: string; a: string };

export type LocationService = {
  title: string;
  body: string;
  tags: string;
};

export type LocationLandingProps = {
  city: string;
  slug: string;
  siteUrl: string;
  intro: string;
  /** Extra stad-specifieke alinea's (buurten, woningtypes, voorbeelden) */
  localStory: ReactNode;
  servicesHeading: string;
  servicesIntro: string;
  services: LocationService[];
  faqHeading: string;
  faqItems: LocationFaq[];
  relatedLinks: { href: string; label: string }[];
  serviceDescription: string;
};

export default function LocationLanding({
  city,
  slug,
  siteUrl,
  intro,
  localStory,
  servicesHeading,
  servicesIntro,
  services,
  faqHeading,
  faqItems,
  relatedLinks,
  serviceDescription,
}: LocationLandingProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: `Schilder ${city}`,
        item: `${siteUrl}/${slug}`,
      },
    ],
  };

  const serviceSchema = getServiceSchema({
    city,
    slug,
    description: serviceDescription,
    siteUrl,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Navbar active="home" />

      <section className="header-contact">
        <div className="container">
          <div
            className="reveal"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              maxWidth: 900,
            }}
          >
            <span className="eyebrow on-dark">Schilder in {city}</span>
            <h1 className="display" style={{ color: "var(--cream)" }}>
              Schilder in {city}
              <br />
              <span
                style={{
                  color: "var(--gold-light)",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                RB Schilderwerken
              </span>
            </h1>
            <p className="lede">{intro}</p>
          </div>
        </div>
      </section>

      <section className="sec-cream">
        <div className="container">
          <div
            className="reveal legal-prose"
            style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 18 }}
          >
            {localStory}
          </div>
        </div>
      </section>

      <section className="sec-white">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Diensten in {city}</span>
            <h2 className="h2" style={{ whiteSpace: "pre-line" }}>
              {servicesHeading}
            </h2>
            <p className="lede">{servicesIntro}</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
            className="services-grid"
          >
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`service reveal${index > 0 ? ` d-${index}` : ""}`}
              >
                <span className="srv-num">0{index + 1}</span>
                <h3 className="srv-title">{service.title}</h3>
                <p className="srv-body">{service.body}</p>
                <span className="srv-tags">{service.tags}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-cream">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Veelgestelde vragen</span>
            <h2 className="h2" style={{ whiteSpace: "pre-line" }}>
              {faqHeading}
            </h2>
          </div>

          <div
            className="legal-prose reveal faq-list"
            style={{ maxWidth: 760 }}
          >
            {faqItems.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>

          <p className="lede reveal" style={{ marginTop: 36, maxWidth: 760 }}>
            Ook actief in{" "}
            {relatedLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 && (i === relatedLinks.length - 1 ? " en " : ", ")}
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
            . Bekijk onze <Link href="/realisaties">realisaties</Link> of{" "}
            <Link href="/contact">vraag een offerte</Link> aan.
          </p>
        </div>
      </section>

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
            <span className="eyebrow on-dark">Aan de slag in {city}</span>
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
              Stuur een foto of beschrijving van uw project in {city}. Vermeld
              gerust uw gemeente of deelgemeente in het bericht. U krijgt binnen
              48&nbsp;uur een vrijblijvende offerte.
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
