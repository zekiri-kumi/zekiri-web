import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";
import { CtaButton } from "@/components/CtaButton";

export function FinalCta() {
  const { language } = useLanguage();
  const { title, subtitle } = messages[language].finalCta;

  return (
    <section className="flex flex-col items-center justify-start gap-12 self-stretch bg-surface p-12">
      <div className="flex flex-col items-center gap-6 self-stretch">
        <h2 className="self-stretch text-center text-primary text-3xl font-semibold leading-[67.2px] md:text-[48px]">
          {title}
        </h2>
        <p className="self-stretch text-center text-foreground text-lg font-normal leading-7">
          {subtitle}
        </p>
      </div>
      <CtaButton />
    </section>
  );
}
