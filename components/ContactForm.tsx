"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={{ padding: "32px", background: "var(--cream)", borderRadius: 2, borderTop: "3px solid var(--gold)" }}>
        <p style={{ fontSize: 18, fontWeight: 600, color: "var(--ink)" }}>Bedankt voor uw aanvraag!</p>
        <p style={{ color: "var(--ink-soft)", marginTop: 8 }}>We nemen binnen 48 uur contact met u op.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field row">
        <div className="field">
          <label htmlFor="naam">Naam <span className="req">*</span></label>
          <input id="naam" name="naam" type="text" required placeholder="Voor- en achternaam" />
        </div>
        <div className="field">
          <label htmlFor="tel">Telefoon</label>
          <input id="tel" name="tel" type="tel" placeholder="+32 …" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email <span className="req">*</span></label>
        <input id="email" name="email" type="email" required placeholder="u@voorbeeld.be" />
      </div>

      <div className="field">
        <label htmlFor="type">Type werk <span className="req">*</span></label>
        <select id="type" name="type" required defaultValue="">
          <option value="" disabled>Maak een keuze…</option>
          <option>Binnenschilderwerk</option>
          <option>Buitenschilderwerk</option>
          <option>Behangwerken</option>
          <option>Renovatie &amp; nieuwbouw</option>
          <option>Andere</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="bericht">Bericht <span className="req">*</span></label>
        <textarea id="bericht" name="bericht" required placeholder="Beschrijf uw project: ruimtes, oppervlakte, gewenste timing…"></textarea>
      </div>

      <div className="form-submit">
        <button type="submit" className="btn btn-gold">
          Verstuur aanvraag
          <span className="arrow" aria-hidden="true"></span>
        </button>
        <span className="note">U krijgt antwoord binnen 48&nbsp;uur, zonder verplichtingen.</span>
      </div>
    </form>
  );
}
