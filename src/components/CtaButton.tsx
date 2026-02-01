import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";

export function CtaButton({ className = "" }: { className?: string }) {
  const { language } = useLanguage();
  const label = messages[language].hero.cta;

  return (
    <a
      href="#contact"
      data-ga-event="cta_click"
      data-ga-label={label}
      className={
        "inline-flex h-[60px] min-w-[200px] items-center justify-center rounded-[30px] bg-primary px-11 py-2.5 text-base font-semibold leading-[25px] text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 " +
        className
      }
    >
      {label}
    </a>
  );
}
