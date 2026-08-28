"use client";

import { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/business";
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
  hasOptionalConsent,
} from "@/lib/cookies";
import { MAPS_EMBED_URL, MAPS_URL } from "@/lib/schema";

function AddressCard() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        background: "var(--espresso)",
        color: "var(--cream)",
        padding: "18px 22px",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        boxShadow: "0 12px 32px rgba(26,13,2,0.45)",
        maxWidth: 260,
        zIndex: 2,
      }}
    >
      <span
        style={{
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--gold-light)",
          marginBottom: 6,
        }}
      >
        RB Schilderwerken
      </span>
      <span
        style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}
      >
        {BUSINESS.address.street} {BUSINESS.address.bus}
      </span>
      <span style={{ fontSize: 14, opacity: 0.75 }}>
        {BUSINESS.address.postalCode} {BUSINESS.address.city}
      </span>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener"
        style={{
          marginTop: 10,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--gold-light)",
          transition: "color .2s",
        }}
      >
        Open in Maps
        <span
          style={{
            display: "inline-block",
            width: 14,
            height: 9,
            background: "currentColor",
            WebkitMask:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'><path fill='black' d='M11 0l-1.4 1.4 2.6 2.6H0v2h12.2l-2.6 2.6L11 10l5-5z'/></svg>\") no-repeat center / contain",
            mask: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 10'><path fill='black' d='M11 0l-1.4 1.4 2.6 2.6H0v2h12.2l-2.6 2.6L11 10l5-5z'/></svg>\") no-repeat center / contain",
          }}
        />
      </a>
    </div>
  );
}

export default function MapEmbed() {
  const [showMap, setShowMap] = useState(false);
  const [consent, setConsent] = useState<ReturnType<typeof getCookieConsent>>(null);

  useEffect(() => {
    function sync() {
      const value = getCookieConsent();
      setConsent(value);
      setShowMap(hasOptionalConsent());
    }

    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid var(--rule)",
      }}
    >
      {showMap ? (
        <iframe
          src={MAPS_EMBED_URL}
          width="100%"
          height="480"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Locatie RB Schilderwerken in Torhout"
        />
      ) : (
        <div
          className="map-consent-placeholder"
          style={{
            minHeight: 480,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            padding: "48px 24px",
            background: "var(--cream)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              maxWidth: 420,
              fontSize: 15,
              lineHeight: 1.6,
              color: "var(--ink-soft)",
            }}
          >
            {consent === "refused"
              ? "U koos om optionele cookies te weigeren. De kaart wordt niet geladen op deze pagina."
              : "De Google Maps-kaart laadt pas nadat u cookies accepteert via de banner onderaan."}
          </p>
          <a href={MAPS_URL} target="_blank" rel="noopener" className="btn btn-ghost">
            Open adres in Google Maps
          </a>
        </div>
      )}
      <AddressCard />
    </div>
  );
}
