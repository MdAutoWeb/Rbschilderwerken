import type { Metadata } from "next";
import LocationLanding from "@/components/LocationLanding";
import { getSiteUrl } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Schilder Ichtegem",
  description:
    "Schilder in Ichtegem, Bekegem en Eernegem. Binnen- en buitenschilderwerk door RB Schilderwerken. Vakervaring sinds 2008. Gratis offerte binnen 48u.",
  alternates: { canonical: "/schilder-ichtegem" },
  openGraph: {
    title: "Schilder Ichtegem | RB Schilderwerken",
    description:
      "Schilder in Ichtegem, Bekegem en Eernegem. Binnen- en buitenschilderwerk. Vakervaring sinds 2008. Gratis offerte binnen 48u.",
    url: "/schilder-ichtegem",
  },
};

export default function SchilderIchtegem() {
  return (
    <LocationLanding
      city="Ichtegem"
      slug="schilder-ichtegem"
      siteUrl={getSiteUrl()}
      serviceDescription="Schilderwerken binnen en buiten in Ichtegem, Bekegem en Eernegem voor particulieren en aannemers."
      intro="Een schilder in Ichtegem die snel ter plaatse is? RB Schilderwerken zit in Torhout, dus Ichtegem, Bekegem en Eernegem liggen om de hoek. Rufino werkt sinds 2008 met dezelfde aanpak: degelijke voorbereiding, propere werf, geen half werk. U spreekt rechtstreeks met de vakman die ook schildert."
      localStory={
        <>
          <h2>Waarom Ichtegem, Bekegem en Eernegem anders vragen</h2>
          <p>
            Ichtegem is een landelijke gemeente: veel open bebouwing, hoeves en
            woningen met ruim buitenschrijnwerk. Wind en weer doen meer met
            houtwerk dan in een gesloten rij. Daarom beginnen we buiten bijna
            altijd met schuren en controleren op houtrot — overschilderen op
            een zwakke laag houdt geen jaren.
          </p>
          <p>
            In Bekegem en Eernegem zien we vaak dezelfde situatie: een woning
            die er vanbuiten nog &quot;oké&quot; uitziet, tot je dichterbij
            komt en blaasjes, barsten of grijze plekken ziet. Dan is een korte
            opmeting genoeg om te zeggen of we kunnen bijwerken of beter de
            hele laag aanpakken. Eerlijk advies, ook als dat betekent dat de
            klus iets groter uitvalt dan gehoopt.
          </p>
          <p>
            Binnen is het vaak rustiger werk: een living die na jaren rook of
            kinderslijtage opnieuw egaal moet, of een keuken die een
            vetwerende, afneembare afwerking vraagt. We plakken radiatoren,
            plinten en stopcontacten zorgvuldig af — details die u pas later
            opmerkt als ze niet goed gedaan zijn.
          </p>
          <p>
            Omdat de afstand vanuit Torhout kort is, kunnen we ook kleinere
            nazorg of een tweede laag op een later moment vlot inplannen. Dat
            is handig bij buitenwerk dat over meerdere dagen gespreid moet
            worden door het weer.
          </p>
        </>
      }
      servicesHeading={"Praktisch werk\nvoor Ichtegemse woningen."}
      servicesIntro="Praktisch werk voor woningen in Ichtegem, Bekegem en Eernegem — geen overbodige praatjes, wel een duidelijke prijs."
      services={[
        {
          title: "Binnenschilderwerk",
          body: "Living, keuken, gang of slaapkamer: we plamuren waar nodig en bouwen latex of lak netjes op. Ook voor appartementen in Ichtegem-centrum.",
          tags: "Muren, plafonds, deuren",
        },
        {
          title: "Buitenschilderwerk",
          body: "Schrijnwerk en gevels in Bekegem of Eernegem krijgen vaak te maken met wind en weer. Wij schuren, ontvetten en beschermen met de juiste systemen.",
          tags: "Gevels, ramen, dakgoten",
        },
        {
          title: "Behangwerken",
          body: "Structuur- of vliesbehang voor wie geen kale muur wil. Rechte aansluitingen, ook bij lastige hoeken of radiatoren.",
          tags: "Vlies, structuur, fotobehang",
        },
        {
          title: "Renovatie & nieuwbouw",
          body: "Samenwerking met aannemers en particulieren: van voorstrijken tot eindlaag, binnen de afgesproken timing.",
          tags: "Plamuur, schuren, oplevering",
        },
      ]}
      faqHeading={"Veelgestelde vragen\nover schilderwerk in Ichtegem."}
      faqItems={[
        {
          q: "Komen jullie ook in Bekegem en Eernegem?",
          a: "Ja. Ichtegem, Bekegem en Eernegem horen allemaal bij ons werkgebied. De rit vanuit Torhout is kort, dus we plannen vlot een opmeting in.",
        },
        {
          q: "Wat kost een schilder in Ichtegem?",
          a: "Hangt af van kamers, ondergrond en of het binnen of buiten is. Buitenschrijnwerk of een gevel begroten we apart na bezichtiging. U krijgt altijd een offerte met duidelijke posten, geen verrassing achteraf.",
        },
        {
          q: "Hoe snel kunnen jullie starten in Ichtegem?",
          a: "Na goedkeuring van de offerte meestal binnen enkele weken. Kleine klussen of dringende herstellingen bekijken we apart — bel of WhatsApp gerust.",
        },
        {
          q: "Hoe werkt de gratis offerte?",
          a: "Stuur een korte beschrijving of foto's via WhatsApp of het formulier. Vermeld Ichtegem, Bekegem of Eernegem in uw bericht. U krijgt binnen 48 uur antwoord.",
        },
      ]}
      relatedLinks={[
        { href: "/schilder-koekelare", label: "Koekelare" },
        { href: "/schilder-kortemark", label: "Kortemark" },
        { href: "/schilder-torhout", label: "Torhout" },
      ]}
    />
  );
}
