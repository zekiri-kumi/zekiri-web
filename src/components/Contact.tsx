import { messages } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
    
    // Use the API endpoint directly, or fallback to external endpoint if configured
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
    <section id="contact" className="bg-accent/50">
      <div className="mx-auto max-w-container-nav px-4 py-16">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{t.contact.title}</h2>
        <p className="mt-2 text-foreground/80 md:text-lg">{t.contact.subtitle}</p>
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 grid gap-4 md:grid-cols-2"
        >
          <div className="space-y-2">
            <Label htmlFor="name">{t.contact.form.name}</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">{t.contact.form.email}</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="company">{t.contact.form.company}</Label>
            <Input id="company" name="company" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="message">{t.contact.form.message}</Label>
            <Textarea id="message" name="message" required />
          </div>
          <div className="md:col-span-2">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (language === "en" ? "Sending..." : "Enviando...") : t.contact.form.submit}
            </Button>
          </div>
        </motion.form>
        {status && (
          <div className={`mt-4 text-sm ${status.type === "ok" ? "text-green-600" : "text-red-600"}`}>
            {status.message}
          </div>
        )}
      </div>
    </section>
  );
}


