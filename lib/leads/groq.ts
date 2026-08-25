import type { AiEnrichment, AiPriority, LeadPayload } from "./types";

function fallbackEnrichment(lead: LeadPayload): AiEnrichment {
  return {
    samenvatting: lead.bericht.slice(0, 200),
    prioriteit: "Normaal",
    gemeente: lead.gemeente,
  };
}

function parsePriority(value: unknown): AiPriority {
  const raw = String(value ?? "").trim().toLowerCase();
  if (raw === "hoog") return "Hoog";
  if (raw === "laag") return "Laag";
  return "Normaal";
}

export async function enrichLeadWithGroq(
  lead: LeadPayload
): Promise<AiEnrichment> {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.warn("[leads] GROQ_API_KEY ontbreekt — fallback enrichment");
    return fallbackEnrichment(lead);
  }

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.2,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content: `Je bent een assistent voor een Belgisch schildersbedrijf.
Analyseer offerte-aanvragen en antwoord ALLEEN als JSON:
{
  "samenvatting": "1-2 korte zinnen NL, concreet, voor snel scannen",
  "prioriteit": "Hoog" | "Normaal" | "Laag",
  "gemeente": "gemeente indien genoemd, anders lege string"
}
Prioriteit:
- Hoog = spoedgeval, lekkage/schade, grote renovatie, meerdere kamers/gevel, duidelijke urgentie
- Normaal = standaard aanvraag met genoeg info
- Laag = vaag, twijfelachtig, nauwelijks details, prijsvragen zonder context`,
          },
          {
            role: "user",
            content: `Naam: ${lead.naam}
Type werk: ${lead.type}
Gemeente: ${lead.gemeente || "niet opgegeven"}
Telefoon: ${lead.tel || "niet opgegeven"}
Bericht:
${lead.bericht}`,
          },
        ],
      }),
    });

    if (!res.ok) {
      console.error("[leads] Groq error", await res.text());
      return fallbackEnrichment(lead);
    }

    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = json.choices?.[0]?.message?.content;
    if (!content) return fallbackEnrichment(lead);

    const parsed = JSON.parse(content) as {
      samenvatting?: string;
      prioriteit?: string;
      gemeente?: string;
    };

    const samenvatting =
      String(parsed.samenvatting ?? "").trim() || fallbackEnrichment(lead).samenvatting;
    const gemeente =
      lead.gemeente || String(parsed.gemeente ?? "").trim() || undefined;

    return {
      samenvatting,
      prioriteit: parsePriority(parsed.prioriteit),
      gemeente,
    };
  } catch (error) {
    console.error("[leads] Groq exception", error);
    return fallbackEnrichment(lead);
  }
}
