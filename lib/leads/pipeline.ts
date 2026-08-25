import { createAirtableLead } from "./airtable";
import { enrichLeadWithGroq } from "./groq";
import { sendCustomerConfirmation, sendLeadMail } from "./notify";
import type { LeadPayload, LeadPipelineResult } from "./types";

export async function processLead(
  lead: LeadPayload
): Promise<LeadPipelineResult> {
  const enrichment = await enrichLeadWithGroq(lead);

  const airtable = await createAirtableLead(lead, enrichment);
  const mail = await sendLeadMail({
    lead,
    enrichment,
    airtableOk: airtable.ok,
    airtableError: airtable.ok ? undefined : airtable.error,
  });

  // Bevestiging naar klant — best-effort, blokkeert de lead niet
  const customer = await sendCustomerConfirmation(lead);
  if (!customer.ok) {
    console.warn("[leads] klantbevestiging mislukt:", customer.error);
  }

  const ok = airtable.ok || mail.ok;

  return {
    ok,
    airtableOk: airtable.ok,
    mailOk: mail.ok,
    enrichment,
    error: ok
      ? undefined
      : `Airtable en mail faalden. Airtable: ${airtable.ok ? "ok" : airtable.error}. Mail: ${mail.ok ? "ok" : mail.error}`,
  };
}
