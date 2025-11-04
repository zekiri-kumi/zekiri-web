import { messages } from "@/lib/i18n";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  // Dependency Inversion: Depends on abstractions (i18n), not concrete strings.
  const { language } = useLanguage();
  const t = messages[language];

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-4 px-4 py-8 text-sm text-foreground/70 md:grid-cols-3">
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="Zekiri logo" className="h-6 w-auto" />
          <span>© {new Date().getFullYear()} Zekiri. {t.footer.rights}</span>
        </div>
        <nav className="flex justify-center gap-4">
          <a href="#home" className="hover:text-foreground">
            {t.footer.links.home}
          </a>
          <a href="#about" className="hover:text-foreground">
            {t.footer.links.about}
          </a>
          <a href="#ai" className="hover:text-foreground">
            {t.footer.links.services}
          </a>
          <a href="#contact" className="hover:text-foreground">
            {t.footer.links.contact}
          </a>
        </nav>
        <div className="flex justify-end">
          <a href="#home" className="hover:text-foreground" aria-label="Back to top">
            ↑
          </a>
        </div>
      </div>
    </footer>
  );
}


