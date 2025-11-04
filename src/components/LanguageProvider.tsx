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
    const saved = (typeof window !== "undefined" && window.localStorage.getItem("lang")) as Language | null;
    if (saved === "en" || saved === "es") setLanguageState(saved);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") window.localStorage.setItem("lang", lang);
    if (typeof document !== "undefined") document.documentElement.setAttribute("lang", lang);
  };

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}


