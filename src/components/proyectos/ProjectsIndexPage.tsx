import { PROJECTS } from "@/lib/proyectos-content";
import { ProjectCard } from "./ProjectCard";
import { ProjectsClosing, ProjectsNav } from "./ProjectsChrome";
import styles from "./ProyectosPage.module.css";

export function ProjectsIndexPage() {
  return (
    <div className={styles["projects"]}>
      <ProjectsNav />

      <main>
        <section className={styles["projects__intro"]} aria-labelledby="projects-title">
          <p className={styles["projects__eyebrow"]}>Proyectos</p>
          <h1 id="projects-title" className={styles["projects__title"]}>
            Sistemas que construimos para empresas que necesitaban ordenar su operación
          </h1>
          <div className={styles["projects__intro-body"]}>
            <p className={styles["projects__lead"]}>
              Llevamos más de 15 años haciendo software a medida: plataformas de distribución,
              apps para vendedores y técnicos, portales de clientes y sistemas internos. Estos son
              {` ${PROJECTS.length} `}casos, cada uno con el problema que tenía la empresa, lo que
              construimos y cómo se ve.
            </p>
            <dl className={styles["projects__facts"]}>
              <div>
                <dt>Años de experiencia</dt>
                <dd>+15</dd>
              </div>
              <div>
                <dt>Casos en esta página</dt>
                <dd>{PROJECTS.length}</dd>
              </div>
              <div>
                <dt>Plataformas</dt>
                <dd className={styles["projects__facts-text"]}>Web, móvil y SaaS</dd>
              </div>
            </dl>
          </div>
          <p className={styles["projects__note"]}>
            Por confidencialidad cambiamos los nombres de nuestros clientes y las pantallas
            muestran datos de ejemplo.
          </p>
        </section>

        <section className={styles["projects__list"]} aria-label="Casos">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              gaPrefix="projects"
              titleTag="h2"
              isPriority={index < 2}
            />
          ))}
        </section>
      </main>

      <ProjectsClosing gaPrefix="projects" />
    </div>
  );
}
