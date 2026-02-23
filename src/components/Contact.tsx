import { messages } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { trackFormConversion } from "@/components/Analytics";

export function Contact() {
  const { language } = useLanguage();
  const t = messages[language];
  const [status, setStatus] = useState<null | { type: "ok" | "error"; message: string }>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const endpoint = import.meta.env.PUBLIC_FORM_ENDPOINT || "/api/contact";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => undefined)) as { success?: boolean; message?: string } | undefined;

      if (res.ok && data?.success) {
        setStatus({ type: "ok", message: data.message || (language === "en" ? "Sent." : "Enviado.") });
        toast.success(language === "en" ? "Message sent successfully" : "Mensaje enviado exitosamente");
        trackFormConversion();
        (e.target as HTMLFormElement).reset();
      } else {
        const errorMessage = data?.message || (language === "en" ? "Error." : "Error.");
        setStatus({ type: "error", message: errorMessage });
        toast.error(errorMessage);
      }
    } catch (error) {
      const errorMessage = language === "en" ? "Network error" : "Error de red";
      setStatus({ type: "error", message: errorMessage });
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-12 self-stretch bg-surface px-[25px] py-14 md:px-0"
    >
      <div className="flex w-full max-w-container-narrow flex-col items-center gap-6">
        <h2 className="self-stretch text-center text-foreground text-3xl font-semibold leading-tight md:text-[48px] md:leading-[64px]">
          {t.contact.title}
        </h2>
        <p className="self-stretch text-center text-lg font-normal leading-7 text-foreground/80">
          {t.contact.subtitle}
        </p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-4 grid w-full max-w-container-narrow gap-6 md:grid-cols-2"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              {t.contact.form.name}
            </Label>
            <Input
              id="name"
              name="name"
              required
              className="rounded-[15px] border-primary bg-card h-12 text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">
              {t.contact.form.email}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-[15px] border-primary bg-card h-12 text-base"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="company" className="text-foreground">
              {t.contact.form.company}
            </Label>
            <Input
              id="company"
              name="company"
              className="rounded-[15px] border-primary bg-card h-12 text-base"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="message" className="text-foreground">
              {t.contact.form.message}
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              className="min-h-[140px] rounded-[15px] border-primary bg-card resize-none py-3 text-base"
            />
          </div>
          <div className="flex justify-center md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-[60px] min-w-[200px] items-center justify-center rounded-[30px] bg-primary px-11 py-2.5 text-base font-semibold leading-[25px] text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
            >
              {isSubmitting ? (language === "en" ? "Sending..." : "Enviando...") : t.contact.form.submit}
            </button>
          </div>
        </motion.form>

        {status && (
          <div
            className={`mt-2 text-center text-sm ${status.type === "ok" ? "text-green-600" : "text-red-600"}`}
          >
            {status.message}
          </div>
        )}
      </div>
    </section>
  );
}
