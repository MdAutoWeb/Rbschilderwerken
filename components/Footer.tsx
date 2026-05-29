import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/assets/logo.png" alt="RB Schilderwerken" width={68} height={56} />
            <p>Schilderwerken waar kwaliteit voorop staat. Sinds 2010 actief in West-Vlaanderen.</p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="tel:+32474271575">+32 474 27 15 75</a>
            <a href="mailto:rb.schilderwerkenn@gmail.com">rb.schilderwerkenn@gmail.com</a>
            <a href="https://wa.me/32474271575" target="_blank" rel="noopener">WhatsApp</a>
          </div>
          <div className="footer-col">
            <h4>Adres</h4>
            <p>Langepijpestraat 1<br />bus v009<br />8820 Torhout</p>
          </div>
          <div className="footer-col">
            <h4>Site</h4>
            <Link href="/">Home</Link>
            <Link href="/realisaties">Realisaties</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 RB Schilderwerken. Alle rechten voorbehouden.{" "}
            <a
              href="https://webamo.be"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-credit-link"
            >
              Website door Webamo
            </a>
          </span>
          <span className="footer-legal">
            <Link href="/privacy">Privacy</Link>
            <span aria-hidden="true">, </span>
            <Link href="/cookies">Cookies</Link>
            <span aria-hidden="true">, </span>
            BTW, erkend schilderbedrijf
          </span>
        </div>
      </div>
    </footer>
  );
}
