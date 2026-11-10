import type { ReactNode } from "react";
import { Analytics } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";
import { HomeFooter } from "@/components/home/HomeFooter";
import homeStyles from "@/components/home/HomePage.module.css";
import { ProjectsNav } from "@/components/proyectos/ProjectsChrome";
import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import { ThemeProvider } from "@/components/ThemeProvider";

/** Page frame shared by the blog index and the articles: providers, header and footer. */
export function BlogShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Analytics />
      <ConsentBanner />
      <div className={`${projectStyles["projects"]} ${homeStyles["home"]}`}>
        <ProjectsNav current="blog" gaPrefix="blog" />
        <main>{children}</main>
        <HomeFooter />
      </div>
    </ThemeProvider>
  );
}
