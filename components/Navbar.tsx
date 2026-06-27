import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  active: "home" | "realisaties" | "contact";
}

export default function Navbar({ active }: NavbarProps) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="nav-brand" href="/" aria-label="RB Schilderwerken, naar home">
          <Image
            src="/assets/logo.png"
            alt="RB Schilderwerken"
            width={88}
            height={88}
            priority
          />
        </Link>
        <nav className="nav-links" aria-label="Hoofdnavigatie">
          <Link className={`nav-link${active === "home" ? " is-active" : ""}`} href="/">Home</Link>
          <Link className={`nav-link${active === "realisaties" ? " is-active" : ""}`} href="/realisaties">Realisaties</Link>
          <Link className={`nav-link${active === "contact" ? " is-active" : ""}`} href="/contact">Contact</Link>
          <Link className="btn btn-gold btn-sm nav-cta" href="/contact">
            <span className="btn-label-long">Gratis&nbsp;offerte</span>
            <span className="btn-label-short">Offerte</span>
            <span className="arrow" aria-hidden="true"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
