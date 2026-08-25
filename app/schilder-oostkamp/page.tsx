import type { Metadata } from "next";
import LocationLanding from "@/components/LocationLanding";
import { getSiteUrl } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Schilder Oostkamp",
  description:
    "Schilder in Oostkamp, Hertsberge, Ruddervoorde en Waardamme. Binnen- en buitenschilderwerk door RB Schilderwerken. Offerte binnen 48u.",
  alternates: { canonical: "/schilder-oostkamp" },
  openGraph: {
    title: "Schilder Oostkamp | RB Schilderwerken",
    description:
      "Schilder in Oostkamp, Hertsberge, Ruddervoorde en Waardamme. Binnen- en buitenschilderwerk. Offerte binnen 48u.",
    url: "/schilder-oostkamp",
  },
};

export default function SchilderOostkamp() {
  return (
    <LocationLanding
      city="Oostkamp"
      slug="schilder-oostkamp"
      siteUrl={getSiteUrl()}
      serviceDescription="Schilderwerken in Oostkamp, Hertsberge, Ruddervoorde en Waardamme voor particulieren en aannemers."
      intro="Op zoek naar een schilder in Oostkamp? RB Schilderwerken werkt vanuit Torhout en komt graag naar Oostkamp, Hertsberge, Ruddervoorde en Waardamme. Rufino schildert sinds 2008: eerst de ondergrond, dan de kleur. U krijgt een heldere offerte en één aanspreekpunt — geen callcenter."
      localStory={
        <>
          <h2>Oostkamp, Hertsberge, Ruddervoorde en Waardamme</h2>
          <p>
            Oostkamp is groter en gevarieerder dan een puur dorp: van
            compactere woningen dichter bij het centrum tot ruimere percelen in
            Hertsberge, Ruddervoorde en Waardamme. Dat vertaalt zich in
            verschillende opdrachten — soms vooral binnenafwerking, soms veel
            buitenwerk aan schrijnwerk en gevel.
          </p>
          <p>
            In Ruddervoorde en Waardamme zien we vaak woningen met veel
            gevelvlak en ramen die na jaren een volle buitenbeurt vragen. In
            Hertsberge komt ook nieuwere bouw voor, waar de focus eerder ligt
            op strakke binnenafwerking en nette oplevering na de ruwbouw- of
            renovatiefase.
          </p>
          <p>
            Een concrete situatie die we vaak horen: &quot;De living is oké,
            maar de traphal en overloop zijn grijs en beschadigd.&quot; Dat
            soort projecten pakken we graag aan: lastigere hoogtes, meer
            plinten en aansluitingen, maar met dezelfde zorg als een
            eenvoudige slaapkamer. Of: binnen én buiten combineren in één
            planning, zodat u niet twee aparte aannemers moet coördineren.
          </p>
          <p>
            De rit vanuit Torhout is kort. Daarom kunnen we vlot langskomen
            voor een opmeting of om een offerte op basis van foto&apos;s bij
            te sturen. Vermeld Hertsberge, Ruddervoorde, Waardamme of Oostkamp
            in uw bericht — dat helpt bij de planning.
          </p>
        </>
      }
      servicesHeading={"Van Ruddervoorde\ntot Hertsberge."}
      servicesIntro="Van Ruddervoorde tot Hertsberge: dezelfde voorbereiding, dezelfde nette oplevering."
      services={[
        {
          title: "Binnenschilderwerk",
          body: "Muren, plafonds en schrijnwerk binnen in Oostkampse woningen. We plakken zorgvuldig af en bouwen in lagen op — ook in Waardamme of Hertsberge.",
          tags: "Latex, lak, plafonds, deuren",
        },
        {
          title: "Buitenschilderwerk",
          body: "Gevels en buitenschrijnwerk in Ruddervoorde of Oostkamp-centrum. Schuren, herstellen waar nodig, weerbestendig afwerken.",
          tags: "Gevels, ramen, houtwerk, dakgoten",
        },
        {
          title: "Behangwerken",
          body: "Behang voor livings en slaapkamers die net dat beetje extra karakter vragen. Rechte naden, ook bij grote vlakken.",
          tags: "Vlies, fotobehang, vinyl",
        },
        {
          title: "Renovatie & nieuwbouw",
          body: "Volledige schilderfase bij renovatie of nieuwbouw in Oostkamp. We leveren op binnen de planning die we samen afspreken.",
          tags: "Plamuur, schuren, oplevering",
        },
      ]}
      faqHeading={"Schilder Oostkamp:\nwat u wil weten."}
      faqItems={[
        {
          q: "Werken jullie in heel Oostkamp, inclusief deelgemeenten?",
          a: "Ja. Oostkamp, Hertsberge, Ruddervoorde en Waardamme horen bij ons werkgebied. Vermeld uw deelgemeente gerust in de aanvraag.",
        },
        {
          q: "Wat kost een schilder in Oostkamp?",
          a: "Hangt af van de omvang en of het binnen of buiten is. Gevel- of schrijnwerk buiten begroten we apart na bezichtiging of foto's. U krijgt een offerte met duidelijke posten.",
        },
        {
          q: "Doen jullie zowel binnen als buiten in Oostkamp?",
          a: "Ja. Vaak combineren klanten binnenafwerking met buitenschrijnwerk in één planning. Kan apart, kan samen — wat voor u past.",
        },
        {
          q: "Hoe vraag ik een gratis offerte aan?",
          a: "WhatsApp, telefoon of het contactformulier. Een paar foto's en of u in Hertsberge, Ruddervoorde, Waardamme of Oostkamp zit, is genoeg. Antwoord binnen 48 uur.",
        },
      ]}
      relatedLinks={[
        { href: "/schilder-zedelgem", label: "Zedelgem" },
        { href: "/schilder-torhout", label: "Torhout" },
        { href: "/schilder-lichtervelde", label: "Lichtervelde" },
      ]}
    />
  );
}
