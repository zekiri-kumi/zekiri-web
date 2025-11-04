import { messages } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export function Industries() {
  const { language } = useLanguage();
  const t = messages[language];

  return (
    <section id="industries" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{t.industries.title}</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {t.industries.list.map((name) => (
            <span key={name} className="rounded-full border bg-card px-4 py-2 text-sm text-foreground/80">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


