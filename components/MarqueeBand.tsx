const ITEMS = [
  "Binnenschilderwerk & buitenschilderwerk",
  "Nieuwbouw & renovatie",
  "Torhout, Lichtervelde & omstreken",
  "Behang & decoratieve afwerking",
  "Gratis offerte binnen 48 uur",
  "Eén vaste aanspreekpunt op de werf",
  "Propere werf · nette oplevering",
] as const;

function MarqueeItems() {
  return (
    <>
      {ITEMS.map((item) => (
        <span key={item} className="marquee-band-item">
          <span className="marquee-band-dot" aria-hidden="true" />
          {item}
        </span>
      ))}
    </>
  );
}

export default function MarqueeBand() {
  return (
    <section
      className="marquee-band sec-dark on-dark"
      aria-label="Diensten en werkgebied"
    >
      <div className="marquee-band-viewport">
        <div className="marquee-band-track">
          <div className="marquee-band-row" aria-hidden="true">
            <MarqueeItems />
          </div>
          <div className="marquee-band-row" aria-hidden="true">
            <MarqueeItems />
          </div>
        </div>
      </div>
    </section>
  );
}
