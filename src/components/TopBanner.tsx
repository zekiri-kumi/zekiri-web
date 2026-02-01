import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";

export function TopBanner() {
  const { language } = useLanguage();
  const text = messages[language].banner.text;

  return (
    <div className="flex w-full items-center justify-center bg-primary px-2.5 py-2.5 text-center text-base font-normal leading-8 text-primary-foreground">
      {text}
    </div>
  );
}
