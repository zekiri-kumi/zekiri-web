import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";
import { Toaster } from "sonner";
import { SoftwarePage } from "./SoftwarePage";

function ThemedToaster() {
  const { theme } = useTheme();
  return <Toaster richColors theme={theme} position="top-right" />;
}

export default function SoftwareApp() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Analytics />
        <ConsentBanner />
        <ThemedToaster />
        <SoftwarePage />
      </ThemeProvider>
    </LanguageProvider>
  );
}
