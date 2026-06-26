import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const { naam, email, tel, type, bericht } = await req.json();

    await transporter.sendMail({
      from: `RB Schilderwerken <${process.env.SMTP_USER}>`,
      to: "info@rbschilderwerken.be",
      replyTo: email,
      subject: `Nieuwe offerte aanvraag van ${naam}`,
      html: `
        <h2>Nieuwe aanvraag via website</h2>
        <p><b>Naam:</b> ${escapeHtml(naam)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Telefoon:</b> ${escapeHtml(tel)}</p>
        <p><b>Type werk:</b> ${escapeHtml(type)}</p>
        <p><b>Bericht:</b> ${escapeHtml(bericht)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Verzenden mislukt" },
      { status: 500 }
    );
  }
}
