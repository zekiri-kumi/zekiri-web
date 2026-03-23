export const THEME_STORAGE_KEY = "zekiri-theme";

export type ThemePreference = "light" | "dark";

export function readStoredTheme(): ThemePreference {
  if (typeof window === "undefined") return "light";
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function applyThemeClass(theme: ThemePreference) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}
