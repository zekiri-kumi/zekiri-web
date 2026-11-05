import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";
import { ProjectsIndexPage } from "./ProjectsIndexPage";
import { ProjectDetailPage } from "./ProjectDetailPage";

/** Renders the portfolio index, or one case study when a slug is given. */
export default function ProyectosApp({ slug }: { slug?: string }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Analytics />
        <ConsentBanner />
        {slug ? <ProjectDetailPage slug={slug} /> : <ProjectsIndexPage />}
      </ThemeProvider>
    </LanguageProvider>
  );
}
