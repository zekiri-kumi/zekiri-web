import { LanguageProvider } from "@/components/LanguageProvider";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { AI } from "@/components/AI";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";

export default function LandingApp() {
  // Composition Root: Compose feature components under a single provider.
  return (
    <LanguageProvider>
      <div className="min-h-dvh bg-background text-foreground">
        <Toaster richColors position="top-right" />
        <Header />
        <main>
          <Hero />
          <About />
          <Expertise />
          <AI />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}


