import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaFloat from "@/components/WaFloat";

interface LegalPageShellProps {
  title: string;
  subtitle: string;
  updated: string;
  children: React.ReactNode;
}

export default function LegalPageShell({
  title,
  subtitle,
  updated,
  children,
}: LegalPageShellProps) {
  return (
    <>
      <Navbar active="home" />
      <section className="header-legal">
        <div className="container">
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 720 }}>
            <span className="eyebrow on-dark">Juridisch, GDPR</span>
            <h1 className="display" style={{ color: "var(--cream)", fontSize: "clamp(36px, 5vw, 64px)" }}>
              {title}
            </h1>
            <p className="lede" style={{ color: "rgba(245,236,220,0.85)", margin: 0 }}>
              {subtitle}
            </p>
            <p className="legal-updated">Laatst bijgewerkt: {updated}</p>
          </div>
        </div>
      </section>
      <section className="sec-white legal-body">
        <div className="container">
          <article className="legal-prose reveal">{children}</article>
          <p className="legal-back reveal">
            <Link className="btn btn-outline-dark btn-sm" href="/">
              Terug naar home <span className="arrow" aria-hidden="true"></span>
            </Link>
          </p>
        </div>
      </section>
      <Footer />
      <WaFloat />
    </>
  );
}
