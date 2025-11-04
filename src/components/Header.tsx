import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageProvider";
import { messages } from "@/lib/i18n";

export function Header() {
  // Open/Closed: Component is closed for modification, open for extension via props/context.
  const { language, setLanguage } = useLanguage();
  const t = messages[language];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/assets/logo.png"
            alt="Zekiri logo"
            className="h-6 w-auto"
            loading="eager"
            decoding="async"
          />
        </a>
        <nav className="hidden items-center gap-6 md:flex text-sm">
          <a href="#home" className="text-foreground/80 hover:text-foreground">
            {t.nav.home}
          </a>
          <a href="#about" className="text-foreground/80 hover:text-foreground">
            {t.nav.about}
          </a>
          <a href="#expertise" className="text-foreground/80 hover:text-foreground">
            {t.nav.expertise}
          </a>
          <a href="#ai" className="text-foreground/80 hover:text-foreground">
            {t.nav.ai}
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground">
            {t.nav.contact}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="px-2 text-xs"
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            aria-label="Toggle language"
            title={language === "en" ? "Español" : "English"}
          >
            {language === "en" ? "🇪🇸" : "🇬🇧"}
          </Button>
          <a href="#contact">
            <Button size="sm">{language === "en" ? "Get a quote" : "Solicitar cotización"}</Button>
          </a>
        </div>
      </div>
    </header>
  );
}


