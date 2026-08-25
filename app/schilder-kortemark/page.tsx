import type { Metadata } from "next";
import LocationLanding from "@/components/LocationLanding";
import { getSiteUrl } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Schilder Kortemark",
  description:
    "Schilder in Kortemark, Handzame, Werken en Zarren. Binnen- en buitenschilderwerk door RB Schilderwerken. Gratis offerte binnen 48 uur.",
  alternates: { canonical: "/schilder-kortemark" },
  openGraph: {
    title: "Schilder Kortemark | RB Schilderwerken",
    description:
      "Schilder in Kortemark, Handzame, Werken en Zarren. Binnen- en buitenschilderwerk. Gratis offerte binnen 48 uur.",
    url: "/schilder-kortemark",
  },
};

export default function SchilderKortemark() {
  return (
    <LocationLanding
      city="Kortemark"
      slug="schilder-kortemark"
      siteUrl={getSiteUrl()}
      serviceDescription="Schilderwerken in Kortemark, Handzame, Werken en Zarren: binnen, buiten, behang en renovatie."
      intro="RB Schilderwerken is uw schilder in Kortemark en de deelgemeenten Handzame, Werken en Zarren. Vanuit Torhout zijn we snel ter plaatse voor een opmeting of een volledige klus. Rufino schildert sinds 2008: geen haastklus, wel een nette afwerking die blijft."
      localStory={
        <>
          <h2>Kortemark en de deelgemeenten Handzame, Werken, Zarren</h2>
          <p>
            Kortemark kent zowel oudere dorpswoningen als recentere bouw.
            Oudere muren vragen vaak plamuurwerk en een goede voorstrijk;
            nieuwere gipskarton wil dan weer een andere opbouw van lagen. We
            passen de aanpak aan — niet één recept voor elke woning.
          </p>
          <p>
            In Handzame en Zarren zien we regelmatig buitenschrijnwerk dat na
            jaren weer een volle beurt nodig heeft: ramen, deuren, soms
            dakgoten. In Werken komt ook gevelwerk voor. We plannen buitenwerk
            bij voorkeur bij stabiel weer, zodat primers en eindlagen goed
            hechten.
          </p>
          <p>
            Een typische combinatieklus: binnen de living en gang opfrissen,
            buiten de voordeur meenemen. Dat kan in één traject, met duidelijke
            planning zodat u weet wanneer welke ruimte beschikbaar blijft. Voor
            aannemers: we nemen de schilderfase over en leveren op binnen de
            afgesproken timing.
          </p>
          <p>
            Vermeld in uw aanvraag gerust de deelgemeente. Zo weten we meteen
            hoe we de opmeting inplannen en of we al een idee hebben van
            vergelijkbare woningen in de buurt.
          </p>
        </>
      }
      servicesHeading={"Kortemark tot Zarren:\nvier disciplines."}
      servicesIntro="Voor particulieren en aannemers in Kortemark, Handzame, Werken en Zarren."
      services={[
        {
          title: "Binnenschilderwerk",
          body: "Muren en plafonds egaal afwerken, deuren en kasten lakken. In Handzame of Zarren net zo grondig als in Kortemark-centrum.",
          tags: "Latex, lak, deuren, kasten",
        },
        {
          title: "Buitenschilderwerk",
          body: "Gevels en schrijnwerk in Werken of Handzame: schuren tot de ondergrond klopt, dan weerbestendig opbouwen. Zo houdt het resultaat langer.",
          tags: "Gevels, ramen, houtwerk",
        },
        {
          title: "Behangwerken",
          body: "Behang voor wie kleur of textuur wil zonder alles te schilderen. Naden recht, overlappingen netjes weggewerkt.",
          tags: "Vlies, fotobehang, structuur",
        },
        {
          title: "Renovatie & nieuwbouw",
          body: "Schilderfase bij verbouwing of nieuwbouw in Kortemark. We plannen mee met uw aannemer of werken rechtstreeks voor u.",
          tags: "Plamuur, voorstrijken, oplevering",
        },
      ]}
      faqHeading={"Vragen over\nschilderwerk in Kortemark."}
      faqItems={[
        {
          q: "Schilderen jullie ook in Handzame, Werken en Zarren?",
          a: "Ja. Kortemark en alle deelgemeenten horen bij ons werkgebied. Zeg in uw aanvraag gerust in welke deelgemeente u woont — dat helpt bij de planning.",
        },
        {
          q: "Wat kost buitenschilderwerk in Kortemark?",
          a: "Hangt af van meters, staat van het hout of de gevel, en het gekozen systeem. Na foto's of een plaatsbezoek krijgt u een offerte zonder verrassingen achteraf.",
        },
        {
          q: "Kunnen jullie starten tijdens een lopende renovatie?",
          a: "Ja, als de ondergrond droog en klaar is. We stemmen af met uw aannemer over volgorde en timing, zodat niemand in de weg loopt.",
        },
        {
          q: "Hoe vraag ik een offerte aan?",
          a: "WhatsApp, telefoon of contactformulier. Een paar foto's en uw deelgemeente (Kortemark, Handzame, Werken of Zarren) volstaan om te starten. Antwoord binnen 48 uur.",
        },
      ]}
      relatedLinks={[
        { href: "/schilder-lichtervelde", label: "Lichtervelde" },
        { href: "/schilder-ichtegem", label: "Ichtegem" },
        { href: "/schilder-koekelare", label: "Koekelare" },
      ]}
    />
  );
}
