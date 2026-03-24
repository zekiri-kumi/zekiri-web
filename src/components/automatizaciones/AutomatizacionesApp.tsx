import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";
import { Toaster } from "sonner";
import { AutomatizacionesPage } from "./AutomatizacionesPage";

function ThemedToaster() {
  const { theme } = useTheme();
  return <Toaster richColors theme={theme} position="top-right" />;
}

export default function AutomatizacionesApp() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Analytics />
        <ConsentBanner />
        <ThemedToaster />
        <AutomatizacionesPage />
      </ThemeProvider>
    </LanguageProvider>
  );
}
