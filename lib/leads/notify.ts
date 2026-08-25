import nodemailer from "nodemailer";
import type { AiEnrichment, LeadPayload } from "./types";

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendLeadMail(options: {
  lead: LeadPayload;
  enrichment: AiEnrichment;
  airtableOk: boolean;
  airtableError?: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const { lead, enrichment, airtableOk, airtableError } = options;
  const to = process.env.LEAD_NOTIFY_TO ?? "info@rbschilderwerken.be";
  const fromUser = process.env.SMTP_USER;

  if (!fromUser || !process.env.SMTP_HOST) {
    return { ok: false, error: "SMTP env ontbreekt" };
  }

  const priorityTag =
    enrichment.prioriteit === "Hoog"
      ? "[HOOG] "
      : enrichment.prioriteit === "Laag"
        ? "[LAAG] "
        : "";
  const failTag = airtableOk ? "" : "[Airtable fail] ";

  try {
    await getTransporter().sendMail({
      from: `RB Schilderwerken <${fromUser}>`,
      to,
      replyTo: lead.email,
      subject: `${failTag}${priorityTag}Nieuwe offerte — ${lead.naam}`,
      html: `
        <h2>Nieuwe aanvraag via website</h2>
        <p><b>Prioriteit:</b> ${escapeHtml(enrichment.prioriteit)}</p>
        <p><b>AI-samenvatting:</b> ${escapeHtml(enrichment.samenvatting)}</p>
        <hr />
        <p><b>Naam:</b> ${escapeHtml(lead.naam)}</p>
        <p><b>Email:</b> ${escapeHtml(lead.email)}</p>
        <p><b>Telefoon:</b> ${escapeHtml(lead.tel || "—")}</p>
        <p><b>Gemeente:</b> ${escapeHtml(lead.gemeente || enrichment.gemeente || "niet opgegeven")}</p>
        <p><b>Type werk:</b> ${escapeHtml(lead.type)}</p>
        <p><b>Bericht:</b><br/>${escapeHtml(lead.bericht).replace(/\n/g, "<br/>")}</p>
        ${
          airtableOk
            ? "<p><i>Opgeslagen in Airtable.</i></p>"
            : `<p style="color:#b00"><b>Airtable mislukt:</b> ${escapeHtml(airtableError || "onbekend")}</p>`
        }
      `,
    });
    return { ok: true };
  } catch (error) {
    console.error("[leads] SMTP exception", error);
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Mail failed",
    };
  }
}

/** Bevestigingsmail naar de klant — mag falen zonder de lead te blokkeren */
export async function sendCustomerConfirmation(
  lead: LeadPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const fromUser = process.env.SMTP_USER;
  if (!fromUser || !process.env.SMTP_HOST) {
    return { ok: false, error: "SMTP env ontbreekt" };
  }

  try {
    await getTransporter().sendMail({
      from: `RB Schilderwerken <${fromUser}>`,
      to: lead.email,
      replyTo: fromUser,
      subject: "We hebben uw aanvraag goed ontvangen — RB Schilderwerken",
      html: `
        <p>Beste ${escapeHtml(lead.naam)},</p>
        <p>
          Bedankt voor uw aanvraag bij <b>RB Schilderwerken</b>.
          We hebben ze goed ontvangen en nemen binnen <b>48 uur</b> contact met u op.
        </p>
        <p><b>Type werk:</b> ${escapeHtml(lead.type)}</p>
        ${
          lead.gemeente
            ? `<p><b>Gemeente:</b> ${escapeHtml(lead.gemeente)}</p>`
            : ""
        }
        <p><b>Uw bericht:</b><br/>${escapeHtml(lead.bericht).replace(/\n/g, "<br/>")}</p>
        <p>
          Vragen in tussentijd? Bel of WhatsApp
          <a href="tel:+32474271575">+32 474 27 15 75</a>
          of mail
          <a href="mailto:info@rbschilderwerken.be">info@rbschilderwerken.be</a>.
        </p>
        <p>
          Met vriendelijke groeten,<br/>
          Rufino<br/>
          RB Schilderwerken<br/>
          Torhout
        </p>
      `,
    });
    return { ok: true };
  } catch (error) {
    console.error("[leads] customer confirmation failed", error);
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Customer mail failed",
    };
  }
}
