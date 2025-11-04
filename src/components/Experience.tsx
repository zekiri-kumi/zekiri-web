import { messages } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export function Experience() {
  const { language } = useLanguage();
  const t = messages[language];

  return (
    <section id="experience" className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">{t.experience.title}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6 text-center">
            <div className="text-3xl font-bold text-primary">12+</div>
            <div className="mt-2 text-foreground/80">{t.experience.stats.years}</div>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center">
            <div className="text-3xl font-bold text-primary">50+</div>
            <div className="mt-2 text-foreground/80">{t.experience.stats.projects}</div>
          </div>
        </div>
      </div>
    </section>
  );
}


