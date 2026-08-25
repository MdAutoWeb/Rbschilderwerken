import type { AirtableWorkType, LeadPayload } from "./types";

export function mapWorkType(raw: string): AirtableWorkType {
  const value = raw.trim().toLowerCase();
  if (value.includes("binnen")) return "Binnenschilderwerk";
  if (value.includes("buiten")) return "Buitenschilderwerk";
  if (value.includes("houtrot")) return "Houtrot";
  if (value.includes("behang")) return "Behang";
  return "Andere";
}

export function validateLead(body: unknown):
  | { ok: true; data: LeadPayload }
  | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Ongeldige aanvraag" };
  }

  const record = body as Record<string, unknown>;
  const naam = String(record.naam ?? "").trim();
  const email = String(record.email ?? "").trim();
  const tel = String(record.tel ?? "").trim();
  const gemeente = String(record.gemeente ?? "").trim();
  const type = String(record.type ?? "").trim();
  const bericht = String(record.bericht ?? "").trim();

  if (!naam || !email || !gemeente || !type || !bericht) {
    return { ok: false, error: "Vul alle verplichte velden in" };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Ongeldig e-mailadres" };
  }

  return {
    ok: true,
    data: {
      naam,
      email,
      tel: tel || undefined,
      gemeente: gemeente || undefined,
      type,
      bericht,
    },
  };
}
