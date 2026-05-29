import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell from "@/components/LegalPageShell";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description:
    "Cookiebeleid van RB Schilderwerken: enkel functionele cookies, geen tracking. Inclusief informatie over Google Maps op de contactpagina.",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  const b = BUSINESS;

  return (
    <LegalPageShell
      title="Cookiebeleid"
      subtitle="Transparant over welke cookies wij gebruiken en welke niet. Geen cookiepopup: enkel uitleg op deze pagina."
      updated="25 mei 2026"
    >
      <h2>1. Wat zijn cookies?</h2>
      <p>
        Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u
        een website bezoekt. Ze helpen de site correct te functioneren of voorkeuren te
        onthouden. Vergelijkbare technieken (zoals localStorage) vallen onder dezelfde
        regels wanneer ze gegevens op uw apparaat opslaan.
      </p>

      <h2>2. Ons principe: geen tracking</h2>
      <p>
        <strong>{b.name}</strong> gebruikt <strong>geen marketing- of trackingcookies</strong>{" "}
        op deze website. Wij plaatsen geen cookies van advertentienetwerken, social media
        trackers of analytics (zoals Google Analytics) die u over websites volgen.
      </p>
      <p>
        Omdat wij enkel strikt noodzakelijke en functionele cookies gebruiken, tonen wij{" "}
        <strong>geen cookiepopup</strong>. Alle informatie staat op deze pagina. Bij
        wijzigingen (bv. toevoegen van analytics) passen wij dit beleid aan en vragen wij
        indien nodig vooraf uw toestemming.
      </p>

      <h2>3. Cookies op onze eigen website</h2>
      <table className="legal-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Doel</th>
            <th>Bewaartermijn</th>
            <th>Categorie</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Technisch noodzakelijk</td>
            <td>
              Werking van de website en hosting (bv. sessie, beveiliging, load balancing
              indien van toepassing)
            </td>
            <td>Sessie of kort</td>
            <td>Strikt noodzakelijk</td>
          </tr>
        </tbody>
      </table>
      <p>
        Strikt noodzakelijke cookies vereisen geen toestemming omdat de website anders
        niet correct kan werken.
      </p>

      <h2>4. Google Maps (contactpagina)</h2>
      <p>
        Op onze <Link href="/contact">contactpagina</Link> tonen wij een ingesloten kaart
        via <strong>Google Maps</strong> (dienst van Google Ireland Limited / Google LLC).
        Wanneer u die pagina bezoekt en de kaart laadt, kan Google:
      </p>
      <ul>
        <li>
          <strong>Cookies plaatsen</strong> op uw apparaat (o.a. voor functionaliteit,
          voorkeuren of, afhankelijk van uw Google-account, analyse)
        </li>
        <li>
          <strong>Technische gegevens verwerken</strong>, zoals uw IP-adres, browsertype
          en interactie met de kaart
        </li>
        <li>
          Gegevens doorgeven aan servers van Google, mogelijk buiten de Europese Economische
          Ruimte, met passende waarborgen door Google
        </li>
      </ul>
      <p>
        Deze cookies worden <strong>niet door ons geplaatst</strong>, maar door Google
        zodra de embed actief is. Wij hebben geen controle over welke cookies Google
        precies plaatst; die kunnen wijzigen. Raadpleeg daarom:
      </p>
      <ul>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacybeleid van Google
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/technologies/cookies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookiebeleid van Google
          </a>
        </li>
      </ul>
      <p>
        <strong>Wat kunt u doen?</strong>
      </p>
      <ul>
        <li>
          De kaart vermijden en ons adres gebruiken: {b.address.full}
        </li>
        <li>
          Via de knop <strong>“Open in Maps”</strong> de locatie in een nieuw venster
          openen (dan gelden de regels van Google in die omgeving)
        </li>
        <li>
          Google-cookies beheren of verwijderen via uw browserinstellingen of via{" "}
          <a
            href="https://myaccount.google.com/data-and-privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            uw Google-account
          </a>
        </li>
      </ul>
      <p>
        Voor het tonen van een kaart op een contactpagina wordt een Google Maps-embed
        doorgaans beschouwd als een nuttige dienst; de verwerking gebeurt in ons
        gerechtvaardigd belang om bezoekers onze locatie te tonen. U kunt altijd contact
        opnemen zonder de kaart te gebruiken.
      </p>

      <h2>5. Andere externe diensten</h2>
      <p>
        Links op onze site kunnen u doorsturen naar externe diensten die eigen cookies
        plaatsen wanneer u ze opent:
      </p>
      <ul>
        <li>
          <strong>WhatsApp</strong>: bij het openen van een chatlink (Meta/WhatsApp
          privacybeleid van toepassing)
        </li>
        <li>
          <strong>Google Maps</strong>: via de link “Open in Maps” (zie hierboven)
        </li>
        <li>
          <strong>E-mail en telefoon</strong>: geen cookies via onze site zelf
        </li>
      </ul>

      <h2>6. Cookies die wij níet gebruiken</h2>
      <ul>
        <li>Google Analytics, Hotjar of vergelijkbare analytics</li>
        <li>Meta Pixel, TikTok Pixel of remarketing</li>
        <li>Social media tracking-widgets op onze pagina&apos;s</li>
        <li>Profiling of advertentienetwerken</li>
      </ul>

      <h2>7. Cookies beheren of verwijderen</h2>
      <p>
        U kunt cookies altijd verwijderen of blokkeren via de instellingen van uw browser:
      </p>
      <ul>
        <li>
          <strong>Chrome:</strong> Instellingen → Privacy en beveiliging → Browsegegevens
          wissen / Cookies
        </li>
        <li>
          <strong>Firefox:</strong> Instellingen → Privacy → Cookies en websitegegevens
        </li>
        <li>
          <strong>Safari:</strong> Voorkeuren → Privacy → Websitegegevens beheren
        </li>
        <li>
          <strong>Edge:</strong> Instellingen → Privacy → Browsegegevens wissen
        </li>
      </ul>
      <p>
        Let op: het blokkeren van alle cookies kan de werking van sommige websites
        beperken. Het blokkeren van third-party cookies kan voorkomen dat Google Maps op
        de contactpagina volledig laadt.
      </p>

      <h2>8. Wijzigingen</h2>
      <p>
        Wij passen dit cookiebeleid aan wanneer onze website, ingesloten diensten of de
        wetgeving wijzigt. De datum bovenaan vermeldt de laatste update.
      </p>

      <h2>9. Meer informatie</h2>
      <p>
        Voor verwerking van persoonsgegevens via formulieren en contact: zie ons{" "}
        <Link href="/privacy">privacybeleid</Link>.
      </p>
      <p>
        Contact: <a href={`mailto:${b.email}`}>{b.email}</a>, {b.address.full}
      </p>
    </LegalPageShell>
  );
}
