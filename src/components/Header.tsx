import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = messages[language].nav;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-container-nav items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/assets/logo.png"
            alt="Zékiri"
            width={105}
            height={34}
            className="h-6 w-auto"
            loading="eager"
            decoding="async"
          />
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#home" className="text-foreground/80 hover:text-foreground">
            {t.home}
          </a>
          <a
            href="#what-we-automate"
            className="text-foreground/80 hover:text-foreground"
          >
            {t.whatWeDo}
          </a>
          <a href="#process" className="text-foreground/80 hover:text-foreground">
            {t.process}
          </a>
          <a href="#faq" className="text-foreground/80 hover:text-foreground">
            {t.faq}
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground">
            {t.contact}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="px-2 text-xs"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            aria-label={language === "en" ? "Español" : "English"}
            title={language === "en" ? "Español" : "English"}
          >
            {language === "en" ? "🇪🇸" : "🇬🇧"}
          </Button>
          <a href="#contact" data-ga-event="cta_click" data-ga-label="nav_cta">
            <Button size="sm">{t.cta}</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
