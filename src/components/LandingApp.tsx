import { LanguageProvider } from "@/components/LanguageProvider";
import { TopBanner } from "@/components/TopBanner";
import { Hero } from "@/components/Hero";
import { IndustriesStrip } from "@/components/IndustriesStrip";
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

export default function LandingApp() {
  return (
    <LanguageProvider>
      <Analytics />
      <ConsentBanner />
      <div className="min-h-dvh w-full overflow-hidden bg-background text-foreground flex flex-col items-stretch justify-start">
        <Toaster richColors position="top-right" />
        <TopBanner />
        <main className="flex flex-col items-stretch">
          <Hero />
          <IndustriesStrip />
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
    </LanguageProvider>
  );
}
