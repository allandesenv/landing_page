import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  locale: "pt" | "en";
  name: string;
  email: string;
  whatsapp: string;
  company: string;
  message?: string;
};

function isValidPayload(payload: ContactPayload) {
  return Boolean(payload.name && payload.email && payload.whatsapp && payload.company);
}

function buildMessage(payload: ContactPayload) {
  const subject =
    payload.locale === "pt"
      ? `Novo lead de automacao: ${payload.company}`
      : `New automation lead: ${payload.company}`;

  const lines = [
    `Locale: ${payload.locale}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `WhatsApp: ${payload.whatsapp}`,
    `Company: ${payload.company}`,
    `Message: ${payload.message || "Not provided"}`,
    "Source: Landing Page Zenith IT"
  ];

  return {
    subject,
    text: lines.join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #0f172a;">
        <h2>${subject}</h2>
        <p><strong>Locale:</strong> ${payload.locale}</p>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>WhatsApp:</strong> ${payload.whatsapp}</p>
        <p><strong>Company:</strong> ${payload.company}</p>
        <p><strong>Message:</strong> ${payload.message || "Not provided"}</p>
        <p><strong>Source:</strong> Landing Page Zenith IT</p>
      </div>
    `
  };
}

async function sendLeadEmail(payload: ContactPayload) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!host || !user || !pass || !from || !to) {
    return { skipped: true };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  const message = buildMessage(payload);

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: message.subject,
    text: message.text,
    html: message.html
  });

  return { skipped: false };
}

async function queueFutureAutomation(payload: ContactPayload) {
  console.info("marketing-automation-payload", {
    ...payload,
    timestamp: new Date().toISOString()
  });
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (!isValidPayload(payload)) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    await Promise.all([sendLeadEmail(payload), queueFutureAutomation(payload)]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("contact-route-error", error);
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
