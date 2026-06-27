import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rbschilderwerken.be";

export const metadata: Metadata = {
  title: "Schilder Torhout | RB Schilderwerken",
  description:
    "Vakkundige schilder in Torhout en Wijnendale. Binnen- en buitenschilderwerk, behangwerken en renovatie. 15 jaar vakervaring. Gratis offerte binnen 48u.",
  alternates: {
    canonical: "/schilder-torhout",
  },
  openGraph: {
    title: "Schilder Torhout | RB Schilderwerken",
    description:
      "Vakkundige schilder in Torhout en Wijnendale. Binnen- en buitenschilderwerk, behangwerken en renovatie. 15 jaar vakervaring. Gratis offerte binnen 48u.",
    url: "/schilder-torhout",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PaintingContractor",
  "@id": `${SITE_URL}/#business`,
  name: "RB Schilderwerken",
  description:
    "Vakkundige schilder gevestigd in Torhout. Binnen- en buitenschilderwerk, behangwerken en renovatie, met 15 jaar vakervaring van zaakvoerder Ruffino.",
  url: `${SITE_URL}/schilder-torhout`,
  telephone: "+32474271575",
  email: "info@rbschilderwerken.be",
  image: `${SITE_URL}/og.png`,
  logo: `${SITE_URL}/assets/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Langepijpestraat 1 bus v009",
    addressLocality: "Torhout",
    postalCode: "8820",
    addressRegion: "West-Vlaanderen",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.0648,
    longitude: 3.0977,
  },
  areaServed: [
    { "@type": "City", name: "Torhout" },
    { "@type": "City", name: "Wijnendale" },
    { "@type": "City", name: "Lichtervelde" },
    { "@type": "City", name: "Kortemark" },
    { "@type": "City", name: "Ichtegem" },
    { "@type": "City", name: "Zedelgem" },
    { "@type": "AdministrativeArea", name: "West-Vlaanderen" },
  ],
  serviceArea: {
    "@type": "City",
    name: "Torhout",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Schilderwerk diensten Torhout",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Binnenschilderwerk" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Buitenschilderwerk" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Behangwerken" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Renovatie & nieuwbouw" },
      },
    ],
  },
  priceRange: "$$",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Overschrijving",
};

const faqItems = [
  {
    q: "Wat kost een schilder in Torhout?",
    a: "De prijs van een schilder in Torhout hangt af van de oppervlakte, de staat van de ondergrond en de gewenste afwerking. Een eenvoudige muur in latex kost minder dan houtwerk dat eerst geschuurd en voorgestreken moet worden. Daarom werken we nooit met blinde forfaits: na een plaatsbezoek of op basis van uw foto's krijgt u een gedetailleerde offerte met een duidelijke prijs per onderdeel, zodat u vooraf precies weet waar u aan toe bent.",
  },
  {
    q: "Werkt RB Schilderwerken ook in Wijnendale en de buurgemeenten?",
    a: "Zeker. Onze thuisbasis ligt in Torhout, dus naast het centrum en de wijk Wijnendale werken we ook vlot in de buurgemeenten zoals Lichtervelde, Kortemark, Ichtegem en Zedelgem. Door die korte afstanden kunnen we snel langskomen voor een opmeting en flexibel inplannen.",
  },
  {
    q: "Hoe snel kan RB Schilderwerken starten in Torhout?",
    a: "Omdat we in Torhout gevestigd zijn, kunnen we doorgaans heel snel ter plaatse zijn voor een opmeting. Na goedkeuring van de offerte plannen we uw project meestal binnen enkele weken in, afhankelijk van de omvang en het seizoen. Voor dringende of kleinere klussen bekijken we steeds of er ruimte is om sneller te schakelen.",
  },
  {
    q: "Doet RB Schilderwerken zowel binnen- als buitenschilderwerk in Torhout?",
    a: "Ja. In Torhout verzorgen we zowel binnenschilderwerk, zoals muren, plafonds, deuren en kasten, als buitenschilderwerk zoals gevels, ramen, houtwerk en dakgoten. Buitenwerk plannen we bij voorkeur in het juiste seizoen en bij gunstig weer, zodat de verf optimaal hecht en weerbestendig wordt afgewerkt.",
  },
  {
    q: "Hoe vraag ik een gratis offerte aan in Torhout?",
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
      name: "Schilder Torhout",
      item: `${SITE_URL}/schilder-torhout`,
    },
  ],
};

export default function SchilderTorhout() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar active="home" />

      {/* HEADER + INTRO */}
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
            <span className="eyebrow on-dark">Schilder in Torhout</span>
            <h1 className="display" style={{ color: "var(--cream)" }}>
              Schilder in Torhout
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
              Op zoek naar een vakkundige schilder in Torhout? RB Schilderwerken
              is hier gevestigd en verzorgt al het schilderwerk binnen en
              buiten, van een frisse muur in de living tot een volledig
              herstelde gevel. Met 15 jaar vakervaring weet zaakvoerder Ruffino
              dat
              een mooi resultaat begint bij een grondige voorbereiding: degelijk
              afplakken, schuren, ontvetten en voorstrijken voordat de eerste
              laag verf op de muur komt. Omdat we in Torhout zelf zitten, zijn we
              snel ter plaatse, of het nu gaat om het centrum, de wijk Wijnendale
              of een buurgemeente zoals Lichtervelde, Kortemark, Ichtegem of
              Zedelgem. Voor zowel particulieren als aannemers werken we met
              heldere afspraken, propere werven en respect voor uw woning. Vraag
              vrijblijvend een offerte aan en ontdek wat eerlijk vakmanschap voor
              uw project in Torhout kan betekenen.
            </p>
          </div>
        </div>
      </section>

      {/* DIENSTEN */}
      <section className="sec-white">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Diensten in Torhout</span>
            <h2 className="h2">
              Vier disciplines,
              <br />
              één hand vakwerk.
            </h2>
            <p className="lede">
              Van een muurtje in de living tot een volledige gevel: elk project
              in Torhout krijgt dezelfde voorbereiding en afwerking.
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
                Muren, plafonds, deuren en kasten, strak afgeplakt en dampdicht
                onderlegd, in twee tot drie lagen opgebouwd. In Torhoutse
                woningen en appartementen frissen we zo elke ruimte vakkundig op.
              </p>
              <span className="srv-tags">Latex, lak, plafonds, deuren</span>
            </article>
            <article className="service reveal d-1">
              <span className="srv-num">02</span>
              <h3 className="srv-title">Buiten­schilderwerk</h3>
              <p className="srv-body">
                Gevels, ramen, dakgoten en houtwerk. Volledig schuren, ontvetten
                en weerbestendig afwerken. Ideaal voor de gevels en het
                buitenschrijnwerk van woningen in Torhout en Wijnendale.
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
                kaarsrechte patronen. Ook bij Torhoutse klanten een populaire
                manier om een muur karakter te geven.
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
                schuren, schilderen, opgeleverd binnen planning. We werken
                hiervoor samen met aannemers en particulieren in Torhout en
                omstreken.
              </p>
              <span className="srv-tags">
                Plamuur, schuren, voorstrijken, oplevering
              </span>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec-cream">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Veelgestelde vragen</span>
            <h2 className="h2">
              Schilder in Torhout,
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
        </div>
      </section>

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
            <span className="eyebrow on-dark">Aan de slag in Torhout</span>
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
              Stuur een foto of beschrijving van uw project in Torhout. U krijgt
              binnen 48&nbsp;uur een vrijblijvende offerte op maat.
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
