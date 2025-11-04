// Endpoint: POST /api/contact
export const prerender = false;
// Validates input and sends an email via SMTP using nodemailer.

import type { APIRoute } from "astro";
import * as nodemailer from "nodemailer";

type Data = {
  success: boolean;
  message?: string;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// ✅ Stream-safe parser: read body once as text, then interpret (JSON or key=value)
async function parseBody(request: Request): Promise<Record<string, string> | null> {
  try {
    const raw = await request.text();
    if (!raw) return null;

    const trimmed = raw.trim();
    if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
      try {
        return JSON.parse(trimmed) as Record<string, string>;
      } catch {
        // fallthrough to urlencoded
      }
    }

    // Attempt urlencoded parsing
    const params = new URLSearchParams(trimmed);
    const entries = Object.fromEntries(params.entries()) as Record<string, string>;
    if (Object.keys(entries).length > 0) return entries;

    return null;
  } catch (err) {
    console.error("Error parsing body:", err);
    return null;
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await parseBody(request);
    console.log("Incoming body:", body); // 👈 útil para depurar

    if (!body) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid body. Use POST with JSON or form-data.",
        } satisfies Data),
        { status: 400 }
      );
    }

    const { email, name, message, company } = body;

    // --- Validations ---
    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, message: "Por favor ingresa un email válido" }),
        { status: 400 }
      );
    }

    if (!name || name.trim() === "") {
      return new Response(
        JSON.stringify({ success: false, message: "El nombre es requerido" }),
        { status: 400 }
      );
    }

    if (!message || message.trim() === "") {
      return new Response(
        JSON.stringify({ success: false, message: "El mensaje es requerido" }),
        { status: 400 }
      );
    }

    // --- SMTP config ---
    const smtpHost = import.meta.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(import.meta.env.SMTP_PORT || 465);
    const smtpUser = import.meta.env.SMTP_USER;
    const smtpPass = import.meta.env.SMTP_PASS;
    const mailTo = import.meta.env.MAIL_TO || "ricardoclavijo0085@gmail.com";
    const mailFrom = import.meta.env.MAIL_FROM || "contacto@nuevometodo.com";

    if (!smtpUser || !smtpPass) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "SMTP no configurado en el servidor",
        } satisfies Data),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      port: smtpPort,
      host: smtpHost,
      auth: { user: smtpUser, pass: smtpPass },
      secure: smtpPort === 465,
    });

    // --- Email content ---
    const html = `
      <div style="font-family: sans-serif;">
        <p><b>Nombre:</b> ${name}</p>
        <p><b>Empresa:</b> ${company ?? ""}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mensaje:</b></p>
        <div>${(message || "").replace(/\n/g, "<br/>")}</div>
      </div>`;

    const mailData = {
      from: mailFrom,
      to: mailTo,
      subject: "Zekiri - Contacto",
      text: `${message} | Sent from: ${email}`,
      html,
    };

    await transporter.sendMail(mailData);

    return new Response(
      JSON.stringify({ success: true, message: "Email enviado exitosamente" } satisfies Data),
      { status: 200 }
    );
  } catch (err) {
    console.error("Error enviando email:", err);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Error al enviar el email. Por favor intenta nuevamente.",
      } satisfies Data),
      { status: 500 }
    );
  }
};

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      success: false,
      message: "Method Not Allowed",
    } satisfies Data),
    {
      status: 405,
      headers: { "Content-Type": "application/json" },
    }
  );
};

