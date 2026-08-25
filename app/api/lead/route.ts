import { NextResponse } from "next/server";
import { processLead } from "@/lib/leads/pipeline";
import { validateLead } from "@/lib/leads/validate";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = validateLead(body);

    if (!parsed.ok) {
      return NextResponse.json(
        { ok: false, error: parsed.error },
        { status: 400 }
      );
    }

    const result = await processLead(parsed.data);

    if (!result.ok) {
      console.error("[api/lead] pipeline failed", result.error);
      return NextResponse.json(
        { ok: false, error: "Verzenden mislukt" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[api/lead] exception", error);
    return NextResponse.json(
      { ok: false, error: "Verzenden mislukt" },
      { status: 500 }
    );
  }
}
