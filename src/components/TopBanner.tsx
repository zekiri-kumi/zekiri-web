import { useLanguage } from "@/components/LanguageProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { messages } from "@/lib/i18n";

export function TopBanner() {
  const { language } = useLanguage();
  const text = messages[language].banner.text;

  return (
    <div className="relative flex w-full items-center justify-center bg-primary px-2 py-2.5 text-center text-base font-normal leading-8 text-primary-foreground dark:bg-card dark:text-card-foreground">
      <div className="absolute left-2 top-1/2 -translate-y-1/2">
        <ThemeToggle />
      </div>
      <p className="mx-14 max-w-[min(100%,52rem)]">{text}</p>
    </div>
  );
}
