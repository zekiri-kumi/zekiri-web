import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { TopBanner } from "@/components/TopBanner";
import { Hero } from "@/components/Hero";
import { IndustriesStrip } from "@/components/IndustriesStrip";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { QuoteSection } from "@/components/QuoteSection";
import { PainPoints } from "@/components/PainPoints";
import { Testimonials } from "@/components/Testimonials";
import { WhatWeAutomate } from "@/components/WhatWeAutomate";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { Analytics } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";

function ThemedToaster() {
  const { theme } = useTheme();
  return <Toaster richColors theme={theme} position="top-right" />;
}

export default function LandingApp() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Analytics />
        <ConsentBanner />
        <div className="min-h-dvh w-full overflow-hidden bg-background text-foreground flex flex-col items-stretch justify-start">
          <ThemedToaster />
          <TopBanner />
          <main className="flex flex-col items-stretch">
            <Hero />
            <IndustriesStrip />
            <IntegrationsSection />
            <QuoteSection />
            <PainPoints />
            <Testimonials />
            <WhatWeAutomate />
            <ProcessSteps />
            <FAQ />
            <FinalCta />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}
