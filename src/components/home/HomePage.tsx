import { useRef } from "react";
import { ProjectsNav } from "@/components/proyectos/ProjectsChrome";
import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import { ClientLogos } from "./ClientLogos";
import { FeaturedProjects } from "./FeaturedProjects";
import { HomeContact } from "./HomeContact";
import { HomeFaq } from "./HomeFaq";
import { HomeFooter } from "./HomeFooter";
import { HomeHero } from "./HomeHero";
import { HomeProcess } from "./HomeProcess";
import { HomeServices } from "./HomeServices";
import { useScrollReveal } from "./hooks/useScrollReveal";
import styles from "./HomePage.module.css";

export function HomePage() {
  const pageRef = useRef<HTMLDivElement>(null);
  useScrollReveal(pageRef);

  return (
    <div ref={pageRef} className={`${projectStyles["projects"]} ${styles["home"]}`}>
      <ProjectsNav current="home" gaPrefix="home" />
      <main>
        <HomeHero />
        <ClientLogos />
        <FeaturedProjects />
        <HomeServices />
        <HomeProcess />
        <HomeFaq />
        <HomeContact />
      </main>
      <HomeFooter />
    </div>
  );
}
