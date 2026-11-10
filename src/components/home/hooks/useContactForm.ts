import { useState, type FormEvent } from "react";
import { trackFormConversion } from "@/components/Analytics";
import { CONTACT_EMAIL } from "@/components/proyectos/ProjectsChrome";

export type ContactFormStatus =
  | { type: "idle" }
  | { type: "sending" }
  | { type: "sent" }
  | { type: "error"; message: string };

type ContactResponse = { success?: boolean; message?: string };

const CONTACT_ENDPOINT: string = import.meta.env.PUBLIC_FORM_ENDPOINT || "/api/contact";
const FALLBACK_ERROR = `No pudimos enviar tu mensaje. Escríbenos a ${CONTACT_EMAIL}.`;

/** Error whose message comes from the API and is safe to show to the visitor. */
class ContactRejectedError extends Error {}

async function sendContactMessage(form: HTMLFormElement): Promise<void> {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
  });
  const result = (await response.json()) as ContactResponse;
  if (!response.ok || !result.success) {
    throw new ContactRejectedError(result.message || FALLBACK_ERROR);
  }
}

/** Owns the contact form submission: request, conversion tracking and visible status. */
export function useContactForm() {
  const [status, setStatus] = useState<ContactFormStatus>({ type: "idle" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ type: "sending" });

    try {
      await sendContactMessage(form);
    } catch (error) {
      console.error("Contact form submission failed", error);
      const message = error instanceof ContactRejectedError ? error.message : FALLBACK_ERROR;
      setStatus({ type: "error", message });
      return;
    }

    form.reset();
    trackFormConversion();
    setStatus({ type: "sent" });
  };

  return { status, handleSubmit };
}
