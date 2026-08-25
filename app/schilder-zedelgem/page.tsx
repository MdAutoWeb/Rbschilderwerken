import type { Metadata } from "next";
import LocationLanding from "@/components/LocationLanding";
import { getSiteUrl } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Schilder Zedelgem",
  description:
    "Schilder in Zedelgem, Aartrijke, Loppem en Veldegem. Binnen- en buitenschilderwerk sinds 2008. Gratis offerte binnen 48u via RB Schilderwerken.",
  alternates: { canonical: "/schilder-zedelgem" },
  openGraph: {
    title: "Schilder Zedelgem | RB Schilderwerken",
    description:
      "Schilder in Zedelgem, Aartrijke, Loppem en Veldegem. Binnen- en buitenschilderwerk sinds 2008. Gratis offerte binnen 48u.",
    url: "/schilder-zedelgem",
  },
};

export default function SchilderZedelgem() {
  return (
    <LocationLanding
      city="Zedelgem"
      slug="schilder-zedelgem"
      siteUrl={getSiteUrl()}
      serviceDescription="Binnen- en buitenschilderwerk, behangwerken en renovatieafwerking in Zedelgem, Aartrijke, Loppem en Veldegem."
      intro="Op zoek naar een schilder in Zedelgem? RB Schilderwerken rijdt vanuit Torhout vlot naar het centrum, Aartrijke, Loppem en Veldegem. Rufino schildert sinds 2008: eerst schuren en voorstrijken, dan pas de eindlaag. Particulier of aannemer: u krijgt één aanspreekpunt en een nette werf."
      localStory={
        <>
          <h2>Schilderwerk in Zedelgem en deelgemeenten</h2>
          <p>
            Zedelgem heeft een mix van oudere dorpskern, villa&apos;s in Loppem
            en Veldegem, en meer compacte rijwoningen dichter bij Aartrijke.
            Dat betekent andere ondergronden: soms kalkhoudende muren die eerst
            een goede primer vragen, soms houten ramen die jaren in de wind
            hebben gestaan. Wij kijken eerst naar die ondergrond, niet naar
            een standaardprijs per vierkante meter zonder context.
          </p>
          <p>
            In Loppem en Veldegem zien we vaak vrijstaande woningen met veel
            buitenschrijnwerk — ramen, deuren, dakgoten. Daar is de
            voorbereiding het grootste stuk van het werk: schuren tot op een
            gezonde laag, houtrot bijwerken indien nodig, en dan weerbestendig
            opbouwen. In Aartrijke en Zedelgem-centrum gaat het vaker om
            binnenruimtes na een verbouwing: living, keuken of slaapkamer die
            opnieuw egaal moeten kleuren.
          </p>
          <p>
            Typische vraag uit de streek: &quot;Kunnen jullie de gevel én de
            living in één planning doen?&quot; Ja, als het weer meewerkt voor
            het buitenwerk. We plannen buiten bij voorkeur in een droog
            seizoensvenster en doen binnen parallel of erna, zodat u niet twee
            aparte werven krijgt.
          </p>
          <p>
            Rufino komt zelf mee op de werf. Geen wisselende ploegen, geen
            onderaannemers die u niet kent. Dat merkt u aan de randen, de
            plinten en de oplevering: alles netjes, alles afgeplakt, alles
            opgeruimd.
          </p>
        </>
      }
      servicesHeading={"Van living tot gevel,\nlokaal aangepakt."}
      servicesIntro="Van een slaapkamer in Loppem tot een gevel in Aartrijke: dezelfde zorgvuldige voorbereiding."
      services={[
        {
          title: "Binnenschilderwerk",
          body: "Muren, plafonds en deuren in Zedelgemse woningen — afgeplakt, voorgestreken en in lagen opgebouwd. Ideaal na een verbouwing of gewoon voor een frisse look.",
          tags: "Latex, lak, plafonds, deuren",
        },
        {
          title: "Buitenschilderwerk",
          body: "Gevels, ramen en houtwerk in Aartrijke, Loppem of Veldegem. We schuren tot op een gezonde ondergrond en werken weerbestendig af.",
          tags: "Gevels, ramen, houtwerk",
        },
        {
          title: "Behangwerken",
          body: "Vlies- of fotobehang met rechte naden. Populair in livings en slaapkamers rond Zedelgem-centrum en de deelgemeenten.",
          tags: "Vlies, vinyl, fotobehang",
        },
        {
          title: "Renovatie & nieuwbouw",
          body: "Plamuren tot oplevering voor particulieren en aannemers in Zedelgem. We stemmen af op uw planning, niet andersom.",
          tags: "Plamuur, voorstrijken, oplevering",
        },
      ]}
      faqHeading={"Schilder Zedelgem:\nprijs, planning, deelgemeenten."}
      faqItems={[
        {
          q: "Werkt RB Schilderwerken in heel Zedelgem?",
          a: "Ja. We komen in Zedelgem-centrum én in de deelgemeenten Aartrijke, Loppem en Veldegem. De afstand vanuit Torhout is kort, dus een opmeting of kleine nazorg zit er vlot in.",
        },
        {
          q: "Wat kost een schilder in Zedelgem?",
          a: "Hangt af van oppervlakte, ondergrond en afwerking. We werken niet met blinde forfaits: na foto's of een plaatsbezoek krijgt u een offerte met prijzen per onderdeel.",
        },
        {
          q: "Kan ik ook enkel buitenschrijnwerk laten schilderen?",
          a: "Zeker. Ramen, deuren, dakgoten of een deel van de gevel: we plannen buitenwerk bij voorkeur bij droog weer, zodat de verf goed hecht.",
        },
        {
          q: "Hoe vraag ik een offerte aan?",
          a: "WhatsApp, telefoon of het contactformulier. Zeg gerust of u in Aartrijke, Loppem, Veldegem of Zedelgem woont — dat helpt bij de planning. Antwoord binnen 48 uur.",
        },
      ]}
      relatedLinks={[
        { href: "/schilder-torhout", label: "Torhout" },
        { href: "/schilder-oostkamp", label: "Oostkamp" },
        { href: "/schilder-lichtervelde", label: "Lichtervelde" },
      ]}
    />
  );
}
