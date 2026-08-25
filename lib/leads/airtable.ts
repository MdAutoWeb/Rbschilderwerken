import { mapWorkType } from "./validate";
import type { AiEnrichment, LeadPayload } from "./types";

export async function createAirtableLead(
  lead: LeadPayload,
  enrichment: AiEnrichment
): Promise<{ ok: true; id: string } | { ok: false; error: string }> {
  const apiKey = process.env.AIRTABLE_API_KEY;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME ?? "Leads";

  if (!apiKey || !baseId) {
    return { ok: false, error: "Airtable env ontbreekt" };
  }

  const fields: Record<string, string> = {
    Naam: lead.naam,
    "E-mail": lead.email,
    "Type werk": mapWorkType(lead.type),
    "Bericht/omschrijving": lead.bericht,
    Bron: "Website",
    Status: "Nieuw",
    "AI-samenvatting": enrichment.samenvatting,
    "AI-prioriteit": enrichment.prioriteit,
  };

  if (lead.tel) fields.Telefoon = lead.tel;
  const gemeente = lead.gemeente || enrichment.gemeente;
  if (gemeente) fields["Adres/gemeente"] = gemeente;

  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fields, typecast: true }),
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error("[leads] Airtable error", text);
      return { ok: false, error: text.slice(0, 300) };
    }

    const json = (await res.json()) as { id?: string };
    return { ok: true, id: json.id ?? "" };
  } catch (error) {
    console.error("[leads] Airtable exception", error);
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Airtable failed",
    };
  }
}
