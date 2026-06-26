import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";

export const metadata: Metadata = {
  title: "Gratis offerte aanvragen, schilder Torhout",
  description:
    "Vraag gratis een offerte aan bij RB Schilderwerken in Torhout. Binnenschilderwerk, buitenschilderwerk, renovatie. Antwoord binnen 48 uur via WhatsApp of formulier.",
  openGraph: {
    title: "Contact en offerte, RB Schilderwerken Torhout",
    description:
      "Gratis offerte voor uw schilderwerk in West-Vlaanderen. Bereikbaar via WhatsApp, telefoon of e-mail. Torhout.",
    url: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Navbar active="contact" />

      {/* HEADER */}
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
            <span className="eyebrow on-dark">
              Contact, antwoord binnen 48 uur
            </span>
            <h1 className="display" style={{ color: "var(--cream)" }}>
              Vraag een
              <br />
              <span
                style={{
                  color: "var(--gold-light)",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                vrijblijvende
              </span>
              <br />
              offerte aan.
            </h1>
            <p className="lede">
              Stuur een foto of beschrijving van uw project, kies wat u nodig
              hebt en u krijgt binnen twee werkdagen een offerte op maat,
              zonder verplichting.
            </p>
          </div>
        </div>
      </section>

      {/* WHATSAPP PROMINENT */}
      <section
        className="sec-white"
        style={{
          paddingTop: "clamp(40px, 5vw, 64px)",
          paddingBottom: "clamp(40px, 5vw, 64px)",
        }}
      >
        <div className="container">
          <div className="wa-card reveal">
            <div>
              <span className="eyebrow" style={{ color: "var(--espresso)" }}>
                Direct contact
              </span>
              <h3 style={{ marginTop: 14 }}>
                Liever direct chatten?
                <br />
                Stuur ons een WhatsApp.
              </h3>
              <p>
                Een foto zegt vaak meer dan duizend woorden. Stuur een beeld van
                uw ruimte of gevel en we reageren met een eerste inschatting.
              </p>
            </div>
            <a
              className="wa-cta"
              href="https://wa.me/32474271575"
              target="_blank"
              rel="noopener"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                style={{ width: 22, height: 22 }}
              >
                <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.4 2.9 1.3 2.9.9 3.4.8.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.4 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.1c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.4 1.1 1.1-3.3-.2-.4C3.6 14.6 3 13.4 3 12c0-4.9 4.1-9 9-9s9 4.1 9 9-4.1 9.1-9 9.1z" />
              </svg>
              <span>WhatsApp openen</span>
              <span className="arrow" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <section className="sec-white" style={{ padding: 0 }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{ flex: 1, height: 1, background: "var(--rule)" }}
            ></div>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--ink-soft)",
                opacity: 0.6,
              }}
            >
              Of via formulier
            </span>
            <div
              style={{ flex: 1, height: 1, background: "var(--rule)" }}
            ></div>
          </div>
        </div>
      </section>

      {/* FORMULIER */}
      <section className="sec-white" id="offerte">
        <div className="container">
          <div className="form-grid">
            <div className="reveal">
              <span className="eyebrow">Offerte aanvraag</span>
              <h2 className="h2" style={{ marginTop: 16, marginBottom: 12 }}>
                Vertel ons over
                <br />
                uw project.
              </h2>
              <p className="lede" style={{ marginBottom: 32 }}>
                Hoe meer details u meegeeft, hoe nauwkeuriger we een offerte
                kunnen opstellen.
              </p>
              <ContactForm />
            </div>

            <aside className="rail reveal d-1" aria-label="Contactgegevens">
              <h3>Contactgegevens</h3>

              <div className="rail-item">
                <span className="lbl">Telefoon</span>
                <span className="val">
                  <a href="tel:+32474271575">+32 474 27 15 75</a>
                </span>
              </div>
              <div className="rail-item">
                <span className="lbl">Email</span>
                <span className="val">
                  <a href="mailto:info@rbschilderwerken.be">
                    info@rbschilderwerken.be
                  </a>
                </span>
              </div>
              <div className="rail-item">
                <span className="lbl">Adres</span>
                <span className="val">
                  Langepijpestraat 1 bus v009
                  <br />
                  8820 Torhout
                </span>
              </div>
              <div className="rail-item">
                <span className="lbl">Regio</span>
                <span className="val">West-Vlaanderen</span>
              </div>

              <div className="hours">
                <span className="hours-title">Werkuren</span>
                <div className="row">
                  <span className="day">Maandag tot vrijdag</span>
                  <span className="time">08:00 tot 18:00</span>
                </div>
                <div className="row">
                  <span className="day">Zaterdag</span>
                  <span className="time">09:00 tot 13:00</span>
                </div>
                <div className="row closed">
                  <span className="day">Zondag</span>
                  <span className="time">Gesloten</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* LOCATIE */}
      <section className="sec-cream">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Locatie</span>
            <h2 className="h2">
              Gevestigd in Torhout,
              <br />
              actief in heel West-Vlaanderen.
            </h2>
          </div>
          <div className="reveal">
            <MapEmbed />
          </div>
        </div>
      </section>

      <Footer />
      <WaFloat />
    </>
  );
}
