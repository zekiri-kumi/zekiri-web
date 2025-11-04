import { messages } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export function Services() {
  // Interface Segregation: UI concerns only; no data fetching here.
  const { language } = useLanguage();
  const t = messages[language];

  return (
    <section id="services" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{t.services.title}</h2>
        <div className="mt-6 rounded-lg border bg-card p-6">
          <h3 className="text-xl font-semibold text-foreground">{t.services.aiFocusTitle}</h3>
          <p className="mt-2 text-foreground/80">{t.services.aiFocusBody}</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.services.items.map((item) => (
            <div key={item.title} className="rounded-lg border bg-card p-6">
              <h4 className="font-semibold text-foreground">{item.title}</h4>
              <p className="mt-2 text-sm text-foreground/80">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


