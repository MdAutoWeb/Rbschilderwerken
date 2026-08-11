import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rbschilderwerken.be";

export const metadata: Metadata = {
  title: "Schilder Lichtervelde",
  description:
    "Vakkundige schilder in Lichtervelde. Binnen- en buitenschilderwerk, behangwerken en renovatie. Vakervaring sinds 2008. Gratis offerte binnen 48u.",
  alternates: {
    canonical: "/schilder-lichtervelde",
  },
  openGraph: {
    title: "Schilder Lichtervelde | RB Schilderwerken",
    description:
      "Vakkundige schilder in Lichtervelde. Binnen- en buitenschilderwerk, behangwerken en renovatie. Vakervaring sinds 2008. Gratis offerte binnen 48u.",
    url: "/schilder-lichtervelde",
  },
};

const faqItems = [
  {
    q: "Wat kost een schilder in Lichtervelde?",
    a: "De prijs van een schilder in Lichtervelde hangt af van de oppervlakte, de staat van de ondergrond en de gewenste afwerking. Een eenvoudige muur in latex kost minder dan houtwerk dat eerst geschuurd en voorgestreken moet worden. Daarom werken we nooit met blinde forfaits: na een plaatsbezoek of op basis van uw foto's maakt RB Schilderwerken een gedetailleerde offerte met een duidelijke prijs per onderdeel, zodat u vooraf precies weet waar u aan toe bent.",
  },
  {
    q: "Hoe snel kan RB Schilderwerken starten in Lichtervelde?",
    a: "Lichtervelde ligt op een steenworp van onze thuisbasis in Torhout, dus we zijn snel ter plaatse voor een opmeting. Na goedkeuring van de offerte plannen we uw project meestal binnen enkele weken in, afhankelijk van de omvang en het seizoen. Voor dringende of kleinere klussen bekijken we steeds of er ruimte is om sneller te schakelen.",
  },
  {
    q: "Doet RB Schilderwerken zowel binnen als buiten in Lichtervelde?",
    a: "Ja. In Lichtervelde verzorgen we zowel binnenschilderwerk — muren, plafonds, deuren en kasten — als buitenschilderwerk zoals gevels, ramen, houtwerk en dakgoten. Veel woningen rond het station en in de woonwijken vragen net die combinatie van een frisse binnenafwerking en weerbestendig buitenwerk. Buitenwerk plannen we bij voorkeur bij gunstig weer, zodat de verf optimaal hecht.",
  },
  {
    q: "Werkt RB Schilderwerken ook in Wingene en de buurgemeenten?",
    a: "Zeker. Naast Lichtervelde zijn we regelmatig actief in Wingene (inclusief Zwevezele), Torhout, Kortemark en Ardooie. Door die korte afstanden kunnen we flexibel inplannen en snel langskomen voor een opmeting of nazorg.",
  },
  {
    q: "Hoe vraag ik een gratis offerte aan in Lichtervelde?",
    a: "Een gratis offerte aanvragen kan in enkele minuten. Stuur ons een foto of korte beschrijving van uw project via WhatsApp, telefoon of het contactformulier. U ontvangt binnen 48 uur een vrijblijvende offerte op maat, zonder enige verplichting.",
  },
];

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
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Schilder Lichtervelde",
      item: `${SITE_URL}/schilder-lichtervelde`,
    },
  ],
};

export default function SchilderLichtervelde() {
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
            <span className="eyebrow on-dark">Schilder in Lichtervelde</span>
            <h1 className="display" style={{ color: "var(--cream)" }}>
              Schilder in Lichtervelde
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
            <p className="lede">
              Op zoek naar een vakkundige schilder in Lichtervelde? RB
              Schilderwerken werkt vanuit Torhout en is in een kwartier ter
              plaatse — of u nu in het centrum woont, vlakbij het station of in
              een van de woonwijken rondom. Zaakvoerder Rufino schildert sinds
              2008: grondig afplakken, schuren, ontvetten en voorstrijken vóór de
              eerste laag verf. In Lichtervelde zien we vaak dezelfde mix:
              classicistische gevels en ouder schrijnwerk dat bescherming vraagt,
              naast nieuwere woningen die een strakke binnenafwerking willen.
              We werken voor particulieren én aannemers, met heldere afspraken
              en een propere werf. Vraag vrijblijvend een offerte aan en ontdek
              wat eerlijk vakmanschap voor uw project in Lichtervelde kan
              betekenen.
            </p>
          </div>
        </div>
      </section>

      <section className="sec-white">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Diensten in Lichtervelde</span>
            <h2 className="h2">
              Vier disciplines,
              <br />
              één hand vakwerk.
            </h2>
            <p className="lede">
              Van een muurtje in de living tot een volledige gevel: elk project
              in Lichtervelde krijgt dezelfde voorbereiding en afwerking.
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
              <span className="srv-num">01</span>
              <h3 className="srv-title">Binnen­schilderwerk</h3>
              <p className="srv-body">
                Muren, plafonds, deuren en kasten — strak afgeplakt en dampdicht
                onderlegd, in twee tot drie lagen opgebouwd. Ideaal om
                Lichterveldse woningen en appartementen een frisse, egale look
                te geven.
              </p>
              <span className="srv-tags">Latex, lak, plafonds, deuren</span>
            </article>
            <article className="service reveal d-1">
              <span className="srv-num">02</span>
              <h3 className="srv-title">Buiten­schilderwerk</h3>
              <p className="srv-body">
                Gevels, ramen, dakgoten en houtwerk. Volledig schuren, ontvetten
                en weerbestendig afwerken — belangrijk voor woningen langs de
                doorgaande wegen en in de openere randen van Lichtervelde.
              </p>
              <span className="srv-tags">
                Gevels, ramen, houtwerk, dakgoten
              </span>
            </article>
            <article className="service reveal d-2">
              <span className="srv-num">03</span>
              <h3 className="srv-title">Behang­werken</h3>
              <p className="srv-body">
                Van structuurbehang tot fotobehang, met onzichtbare naden en
                kaarsrechte patronen. Een populaire manier om een living of
                slaapkamer in Lichtervelde karakter te geven.
              </p>
              <span className="srv-tags">
                Vlies, vinyl, fotobehang, texturen
              </span>
            </article>
            <article className="service reveal d-3">
              <span className="srv-num">04</span>
              <h3 className="srv-title">Renovatie &amp; nieuwbouw</h3>
              <p className="srv-body">
                Volledige afwerking voor aannemers en particulieren: plamuren,
                schuren, schilderen, opgeleverd binnen planning. Ook voor
                renovatie- en nieuwbouwprojecten in Lichtervelde, Wingene en
                Torhout.
              </p>
              <span className="srv-tags">
                Plamuur, schuren, voorstrijken, oplevering
              </span>
            </article>
          </div>
        </div>
      </section>

      <section className="sec-cream">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Veelgestelde vragen</span>
            <h2 className="h2">
              Schilder in Lichtervelde,
              <br />
              alles wat u wil weten.
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
            Ook actief als{" "}
            <Link href="/schilder-torhout">schilder in Torhout</Link> en in
            Wingene en omstreken. Bekijk onze{" "}
            <Link href="/realisaties">realisaties</Link> of{" "}
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
            <span className="eyebrow on-dark">Aan de slag in Lichtervelde</span>
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
              Stuur een foto of beschrijving van uw project in Lichtervelde. U
              krijgt binnen 48&nbsp;uur een vrijblijvende offerte op maat.
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
