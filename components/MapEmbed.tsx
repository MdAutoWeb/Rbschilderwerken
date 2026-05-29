export default function MapEmbed() {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid var(--rule)",
      }}
    >
      <iframe
        src="https://maps.google.com/maps?q=Langepijpestraat+1,+8820+Torhout,+Belgi%C3%AB&t=&z=15&ie=UTF8&iwloc=&output=embed&hl=nl"
        width="100%"
        height="480"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Locatie RB Schilderwerken in Torhout"
      />
      {/* Address card overlay */}
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
          Langepijpestraat 1 bus v009
        </span>
        <span style={{ fontSize: 14, opacity: 0.75 }}>8820 Torhout</span>
        <a
          href="https://maps.google.com/?q=Langepijpestraat+1,+8820+Torhout,+Belgi%C3%AB"
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
    </div>
  );
}
