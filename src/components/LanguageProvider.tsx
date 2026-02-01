import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Language } from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Single Responsibility: Own language state and persistence only.
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // First check query params
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get("lang") as Language | null;
      
      if (langParam === "en" || langParam === "es") {
        setLanguageState(langParam);
        window.localStorage.setItem("lang", langParam);
        document.documentElement.setAttribute("lang", langParam);
        return;
      }
      
      // Fallback to localStorage
      const saved = window.localStorage.getItem("lang") as Language | null;
      if (saved === "en" || saved === "es") {
        setLanguageState(saved);
        document.documentElement.setAttribute("lang", saved);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", lang);
      // Update URL with query param
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    }
    if (typeof document !== "undefined") document.documentElement.setAttribute("lang", lang);
  };

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}


