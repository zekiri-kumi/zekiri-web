import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";

export function QuoteSection() {
  const { language } = useLanguage();
  const { prefix, highlight } = messages[language].quote;

  return (
    <section className="flex justify-center self-stretch bg-white px-6 py-8 md:px-[100px] md:py-8">
      <p className="max-w-container-xl flex-1 text-center text-foreground text-3xl font-semibold leading-[64px] md:text-[48px]">
        {prefix}
        <span className="text-primary">{highlight}</span>
      </p>
    </section>
  );
}
