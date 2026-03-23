import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme } from "@/components/ThemeProvider";
import { messages } from "@/lib/i18n";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = messages[language].theme;

  const label = theme === "dark" ? t.switchToLight : t.switchToDark;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={
        "inline-flex shrink-0 items-center justify-center rounded-md p-1.5 text-current opacity-90 transition-colors hover:bg-black/10 dark:hover:bg-white/10 " +
        className
      }
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" aria-hidden />
      ) : (
        <Moon className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
