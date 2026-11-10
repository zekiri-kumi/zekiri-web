import homeStyles from "@/components/home/HomePage.module.css";
import { revealOrder } from "@/components/home/hooks/useScrollReveal";
import { ProjectCard } from "@/components/proyectos/ProjectCard";
import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import { trackButtonClick } from "@/lib/gtag-click";
import { PROJECTS } from "@/lib/proyectos-content";
import type { Service } from "@/lib/services-content";
import styles from "./ServicePage.module.css";

/** Anchor the hero links to. */
export const SERVICE_CASES_ID = "casos";

/** Cards per row on desktop: the stagger restarts on each row. */
const CARDS_PER_ROW = 2;

export function ServiceCases({ service }: { service: Service }) {
  return (
    <section
      id={SERVICE_CASES_ID}
      className={homeStyles["home__band"]}
      aria-labelledby="service-cases-title"
    >
      <div className={homeStyles["home__container"]}>
        <div data-reveal>
          <p className={projectStyles["projects__eyebrow"]}>Casos</p>
          <h2 id="service-cases-title" className={homeStyles["home__heading"]}>
            Proyectos donde ya lo hicimos
          </h2>
          <p className={homeStyles["home__lead"]}>
            Cada caso cuenta qué pasaba en la empresa, qué construimos y cómo se ve.
          </p>
        </div>

        <div className={homeStyles["home__cards"]}>
          {service.cases.map((project, index) => (
            <div
              key={project.slug}
              className={homeStyles["home__card-slot"]}
              data-reveal
              style={revealOrder(index % CARDS_PER_ROW)}
            >
              <ProjectCard project={project} gaPrefix="service" titleTag="h3" />
            </div>
          ))}
        </div>

        <div className={styles["service__cases-more"]} data-reveal>
          <a
            href="/proyectos"
            className={homeStyles["home__cta-secondary"]}
            onClick={() => trackButtonClick("service_projects_all")}
          >
            Ver los {PROJECTS.length} proyectos
          </a>
        </div>

        <p className={homeStyles["home__note"]}>
          Por confidencialidad cambiamos los nombres de nuestros clientes en los casos y las
          pantallas muestran datos de ejemplo.
        </p>
      </div>
    </section>
  );
}
