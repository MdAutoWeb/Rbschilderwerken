import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell from "@/components/LegalPageShell";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Privacybeleid van RB Schilderwerken (Torhout). GDPR-conform: welke gegevens we verwerken, waarom, uw rechten en contact.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const b = BUSINESS;

  return (
    <LegalPageShell
      title="Privacybeleid"
      subtitle="Hoe RB Schilderwerken omgaat met uw persoonsgegevens, conform de GDPR en de Belgische privacywetgeving."
      updated="25 mei 2026"
    >
      <h2>1. Verwerkingsverantwoordelijke</h2>
      <p>
        De verwerkingsverantwoordelijke voor uw persoonsgegevens is:
      </p>
      <ul>
        <li>
          <strong>{b.name}</strong>
        </li>
        <li>{b.address.street}, {b.address.bus}</li>
        <li>
          {b.address.postalCode} {b.address.city}, {b.address.country}
        </li>
        <li>
          BTW: {b.vatNumber}
        </li>
        <li>
          E-mail:{" "}
          <a href={`mailto:${b.email}`}>{b.email}</a>
        </li>
        <li>
          Telefoon: <a href={`tel:${b.phoneTel}`}>{b.phone}</a>
        </li>
      </ul>

      <h2>2. Welke gegevens verwerken wij?</h2>
      <p>Wij verwerken enkel gegevens die u ons vrijwillig bezorgt of die nodig zijn voor de werking van de website:</p>
      <ul>
        <li>
          <strong>Contact- en offerteaanvragen:</strong> naam, e-mailadres, telefoonnummer,
          adres (indien opgegeven), inhoud van uw bericht en eventuele bijlagen die u
          meestuurt.
        </li>
        <li>
          <strong>Communicatie:</strong> correspondentie via e-mail, telefoon of WhatsApp
          in het kader van een offerte of opdracht.
        </li>
        <li>
          <strong>Technische gegevens:</strong> beperkte serverlogboeken (zoals IP-adres,
          browsertype, tijdstip) voor beveiliging en foutopsporing, zonder marketingprofilering.
        </li>
      </ul>
      <p>
        Wij plaatsen <strong>geen trackingcookies</strong> en verkopen uw gegevens niet aan
        derden.
      </p>

      <h2>3. Doeleinden en rechtsgronden</h2>
      <table className="legal-table">
        <thead>
          <tr>
            <th>Doel</th>
            <th>Rechtsgrond (GDPR)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Beantwoorden van contact- en offerteaanvragen</td>
            <td>Uitvoering van precontractuele maatregelen / gerechtvaardigd belang</td>
          </tr>
          <tr>
            <td>Uitvoeren van schilderopdrachten en facturatie</td>
            <td>Uitvoering van de overeenkomst / wettelijke verplichting (o.a. boekhouding)</td>
          </tr>
          <tr>
            <td>Beveiliging en correcte werking van de website</td>
            <td>Gerechtvaardigd belang</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Bewaartermijnen</h2>
      <ul>
        <li>
          Aanvragen via het contactformulier: maximaal <strong>2 jaar</strong> na afhandeling,
          tenzij een langere termijn wettelijk vereist is of u een lopende opdracht hebt.
        </li>
        <li>
          Facturatie- en boekhoudgegevens: <strong>7 jaar</strong> conform de Belgische
          fiscale wetgeving.
        </li>
        <li>
          Serverlogboeken: maximaal <strong>90 dagen</strong>.
        </li>
      </ul>

      <h2>5. Ontvangers en doorgifte</h2>
      <p>
        Uw gegevens worden niet verkocht. Ze kunnen worden gedeeld met:
      </p>
      <ul>
        <li>
          <strong>Hosting- en e-mailproviders</strong> die ons helpen de website en
          communicatie te laten werken (verwerkers), onder een verwerkersovereenkomst
          waar vereist.
        </li>
        <li>
          <strong>Overheidsinstanties</strong> wanneer de wet dit verplicht.
        </li>
      </ul>
      <p>
        Doorgifte buiten de Europese Economische Ruimte vindt niet plaats, tenzij wij u
        daarover vooraf specifiek informeren en de wettelijke waarborgen aanwezig zijn.
      </p>

      <h2>6. Uw rechten</h2>
      <p>Onder de Algemene Verordening Gegevensbescherming (AVG/GDPR) heeft u het recht op:</p>
      <ul>
        <li>Inzage in uw persoonsgegevens</li>
        <li>Rectificatie van onjuiste gegevens</li>
        <li>Wissing (“recht om vergeten te worden”), binnen de grenzen van de wet</li>
        <li>Beperking van de verwerking</li>
        <li>Gegevensoverdraagbaarheid (waar van toepassing)</li>
        <li>Bezwaar tegen verwerking op basis van gerechtvaardigd belang</li>
        <li>Intrekken van toestemming, wanneer verwerking op toestemming steunt</li>
      </ul>
      <p>
        Om uw rechten uit te oefenen, stuurt u een e-mail naar{" "}
        <a href={`mailto:${b.email}`}>{b.email}</a>. Wij antwoorden binnen{" "}
        <strong>één maand</strong>, conform de GDPR.
      </p>
      <p>
        Heeft u een klacht? U kunt contact opnemen met de{" "}
        <a
          href="https://www.gegevensbeschermingsautoriteit.be/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gegevensbeschermingsautoriteit (GBA)
        </a>
        , Drukpersstraat 35, 1000 Brussel.
      </p>

      <h2>7. Beveiliging</h2>
      <p>
        Wij nemen passende technische en organisatorische maatregelen om uw gegevens te
        beschermen tegen verlies, misbruik of ongeoorloofde toegang, in verhouding tot de
        aard van onze activiteiten.
      </p>

      <h2>8. Minderjarigen</h2>
      <p>
        Onze diensten zijn niet gericht op personen jonger dan 16 jaar. Wij verzamelen
        bewust geen gegevens van minderjarigen zonder toestemming van een ouder of
        voogd.
      </p>

      <h2>9. Wijzigingen</h2>
      <p>
        Wij kunnen dit privacybeleid bijwerken. De meest recente versie staat steeds op
        deze pagina. Bij ingrijpende wijzigingen informeren wij u waar mogelijk via de
        website.
      </p>

      <h2>10. Cookies en Google Maps</h2>
      <p>
        Wij gebruiken geen trackingcookies op deze website. Op de contactpagina tonen wij
        een ingesloten <strong>Google Maps</strong>-kaart; Google kan daarbij cookies en
        technische gegevens (zoals uw IP-adres) verwerken. Zie ons{" "}
        <Link href="/cookies">cookiebeleid</Link> voor details en uw mogelijkheden.
      </p>

      <h2>11. Contact</h2>
      <p>
        Vragen over privacy? Contacteer {b.name} via{" "}
        <a href={`mailto:${b.email}`}>{b.email}</a> of{" "}
        <a href={`tel:${b.phoneTel}`}>{b.phone}</a>.
      </p>
    </LegalPageShell>
  );
}
