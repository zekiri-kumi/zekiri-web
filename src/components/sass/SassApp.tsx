import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";
import { Toaster } from "sonner";
import { SassPage } from "./SassPage";

function ThemedToaster() {
  const { theme } = useTheme();
  return <Toaster richColors theme={theme} position="top-right" />;
}

export default function SassApp() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Analytics />
        <ConsentBanner />
        <ThemedToaster />
        <SassPage />
      </ThemeProvider>
    </LanguageProvider>
  );
}
