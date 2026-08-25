import type { Metadata } from "next";
import LocationLanding from "@/components/LocationLanding";
import { getSiteUrl } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Schilder Koekelare",
  description:
    "Schilder in Koekelare, Bovekerke en Zande. Binnen- en buitenschilderwerk door RB Schilderwerken uit Torhout. Offerte vrijblijvend binnen 48u.",
  alternates: { canonical: "/schilder-koekelare" },
  openGraph: {
    title: "Schilder Koekelare | RB Schilderwerken",
    description:
      "Schilder in Koekelare, Bovekerke en Zande. Binnen- en buitenschilderwerk uit Torhout. Offerte vrijblijvend binnen 48u.",
    url: "/schilder-koekelare",
  },
};

export default function SchilderKoekelare() {
  return (
    <LocationLanding
      city="Koekelare"
      slug="schilder-koekelare"
      siteUrl={getSiteUrl()}
      serviceDescription="Schilderdiensten in Koekelare, Bovekerke en Zande: binnen, buiten, behang en renovatieafwerking."
      intro="Schilderwerk in Koekelare zonder gedoe: RB Schilderwerken komt vanuit Torhout naar Koekelare, Bovekerke en Zande. Rufino schildert sinds 2008 en houdt van duidelijkheid — wat er op de offerte staat, is wat er gebeurt. Geen ploegen die komen en gaan: u heeft één vast aanspreekpunt."
      localStory={
        <>
          <h2>Koekelare, Bovekerke en Zande: dorpswoningen met karakter</h2>
          <p>
            Koekelare is een typische West-Vlaamse dorpsgemeente: veel
            woningen met ouder schrijnwerk, soms nog originele ramen of deuren
            die bescherming vragen. In Bovekerke en Zande ligt de bebouwing
            opener — meer gevelvlak, meer wind. Dat vraagt andere verfkeuzes
            dan een beschutte binnenmuur.
          </p>
          <p>
            Een veelvoorkomende klus hier: de voordeur en het kozijn die grijs
            en droog aanvoelen. We schuren, herstellen kleine beschadigingen en
            bouwen opnieuw op met een systeem dat buitenwerk aankan. Resultaat:
            een deur die er weer verzorgd uitziet en langer meegaat.
          </p>
          <p>
            Binnen gaan klanten vaak voor één of twee kamers tegelijk — eerst
            de living, later de slaapkamers. Dat kan. We stemmen kleuren en
            planning af zodat het palet klopt en u niet elke keer opnieuw moet
            uitleggen wat u wilt. Behang komt hier ook regelmatig terug: een
            accentmuur in de living of een slaapkamer met textuurbehang.
          </p>
          <p>
            Omdat we dichtbij zitten, is een korte opmeting geen grote
            verplaatsing. Stuur foto&apos;s als u wilt; vaak volstaat dat al
            voor een eerste raming, en komen we ter plaatse als de ondergrond
            twijfelachtig is.
          </p>
        </>
      }
      servicesHeading={"Duidelijk werk,\nduidelijke prijs."}
      servicesIntro="Gericht op woningen en kleine projecten in Koekelare en de deelgemeenten Bovekerke en Zande."
      services={[
        {
          title: "Binnenschilderwerk",
          body: "Van de keuken tot de zolderkamer: strak afgeplakt, dampdicht waar nodig, en afgewerkt in de kleur die u kiest. Ook in Bovekerke en Zande.",
          tags: "Latex, lak, plafonds",
        },
        {
          title: "Buitenschilderwerk",
          body: "Houten ramen, deuren en geveldelen in Koekelare krijgen te maken met open landschap. Wij herstellen en beschermen zodat het langer meegaat.",
          tags: "Ramen, deuren, gevels",
        },
        {
          title: "Behangwerken",
          body: "Behang als accentmuur of volledige kamer. We zorgen voor rechte naden, ook bij oudere muren die eerst een plamuurbeurt vragen.",
          tags: "Vlies, vinyl, texturen",
        },
        {
          title: "Renovatie & nieuwbouw",
          body: "Volledige schilderfase bij renovatie of nieuwbouw in Koekelare. We overleggen met u of uw aannemer over timing en oplevering.",
          tags: "Plamuur, voorstrijken, oplevering",
        },
      ]}
      faqHeading={"Antwoorden voor\nKoekelare en deelgemeenten."}
      faqItems={[
        {
          q: "Is Koekelare ver genoeg voor jullie?",
          a: "Nee. Koekelare, Bovekerke en Zande liggen dicht bij Torhout. We komen graag langs voor een korte opmeting of om foto's te bespreken.",
        },
        {
          q: "Wat kost een schilder in Koekelare?",
          a: "Hangt af van de omvang en de staat van de ondergrond. Buitenschrijnwerk of gevelwerk begroten we apart na bezichtiging. Op de offerte ziet u per onderdeel wat u betaalt.",
        },
        {
          q: "Wat als mijn muren eerst hersteld moeten worden?",
          a: "Dan plamuren en schuren we eerst. Verf op een slechte ondergrond houdt niet — liever eerlijk voorbereiden dan snel overschilderen.",
        },
        {
          q: "Hoe vraag ik een offerte aan in Koekelare?",
          a: "Via WhatsApp, telefoon of het contactformulier. Noteer gerust Koekelare, Bovekerke of Zande in uw bericht. Antwoord binnen 48 uur, vrijblijvend.",
        },
      ]}
      relatedLinks={[
        { href: "/schilder-ichtegem", label: "Ichtegem" },
        { href: "/schilder-kortemark", label: "Kortemark" },
        { href: "/schilder-torhout", label: "Torhout" },
      ]}
    />
  );
}
