export const THEME_STORAGE_KEY = "zekiri-theme";

export type ThemePreference = "light" | "dark";

export function readStoredTheme(): ThemePreference {
  if (typeof window === "undefined") return "light";
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme === "dark") return "dark";
    if (storedTheme === "light") return "light";

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
}

export function applyThemeClass(theme: ThemePreference) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}
