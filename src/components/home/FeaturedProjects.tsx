import { ProjectCard } from "@/components/proyectos/ProjectCard";
import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import { trackButtonClick } from "@/lib/gtag-click";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/lib/home-content";
import { PROJECTS } from "@/lib/proyectos-content";
import { revealOrder } from "./hooks/useScrollReveal";
import styles from "./HomePage.module.css";

/** Cards per row on desktop: the stagger restarts on each row. */
const CARDS_PER_ROW = 2;

export function FeaturedProjects() {
  return (
    <section className={styles["home__band"]} aria-labelledby="home-projects-title">
      <div className={styles["home__container"]}>
        <div data-reveal>
          <p className={projectStyles["projects__eyebrow"]}>Proyectos</p>
          <h2 id="home-projects-title" className={styles["home__heading"]}>
            Cada sistema empezó con un problema de operación
          </h2>
          <p className={styles["home__lead"]}>
            Estos son {FEATURED_PROJECTS.length} de los {PROJECTS.length} casos del portafolio. Cada
            uno cuenta qué pasaba en la empresa, qué construimos y cómo se ve.
          </p>
        </div>

        <div className={styles["home__cards"]}>
          {FEATURED_PROJECTS.map((project, index) => (
            <div
              key={project.slug}
              className={styles["home__card-slot"]}
              data-reveal
              style={revealOrder(index % CARDS_PER_ROW)}
            >
              <ProjectCard project={project} gaPrefix="home" titleTag="h3" />
            </div>
          ))}
        </div>

        <div className={styles["home__more"]} data-reveal>
          <div>
            <p className={styles["home__more-label"]}>También construimos para</p>
            <ul className={styles["home__more-list"]}>
              {OTHER_PROJECTS.map((project) => (
                <li key={project.slug}>
                  <a
                    href={`/proyectos/${project.slug}`}
                    onClick={() =>
                      trackButtonClick(`home_sector_${project.slug.replaceAll("-", "_")}`)
                    }
                  >
                    {project.sector}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="/proyectos"
            className={styles["home__cta-secondary"]}
            onClick={() => trackButtonClick("home_projects_all")}
          >
            Ver los {PROJECTS.length} proyectos
          </a>
        </div>

        <p className={styles["home__note"]}>
          Por confidencialidad cambiamos los nombres de nuestros clientes en los casos y las
          pantallas muestran datos de ejemplo.
        </p>
      </div>
    </section>
  );
}
