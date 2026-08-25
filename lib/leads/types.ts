export type AirtableWorkType =
  | "Binnenschilderwerk"
  | "Buitenschilderwerk"
  | "Houtrot"
  | "Behang"
  | "Andere";

export type AiPriority = "Hoog" | "Normaal" | "Laag";

export type LeadPayload = {
  naam: string;
  email: string;
  tel?: string;
  gemeente?: string;
  type: string;
  bericht: string;
};

export type AiEnrichment = {
  samenvatting: string;
  prioriteit: AiPriority;
  /** Fallback als het form geen gemeente heeft */
  gemeente?: string;
};

export type LeadPipelineResult = {
  ok: boolean;
  airtableOk: boolean;
  mailOk: boolean;
  enrichment: AiEnrichment;
  error?: string;
};
