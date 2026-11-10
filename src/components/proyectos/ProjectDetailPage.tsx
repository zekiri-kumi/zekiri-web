import type { CSSProperties } from "react";
import { PROJECTS, type Project, type ProjectScreen } from "@/lib/proyectos-content";
import { articlePath } from "@/lib/blog-paths";
import { trackButtonClick } from "@/lib/gtag-click";
import { DeviceFrame, ProjectShowcase } from "./DeviceFrames";
import { caseNumber, ProjectsClosing, ProjectsNav } from "./ProjectsChrome";
import styles from "./ProyectosPage.module.css";

function gaKey(project: Project): string {
  return project.slug.replaceAll("-", "_");
}

function ScreenFigure({ project, screen, isPriority }: { project: Project; screen: ProjectScreen; isPriority?: boolean }) {
  return (
    <figure className={styles["projects__figure"]}>
      <DeviceFrame screen={screen} isPriority={isPriority} />
      <figcaption>
        <span>{caseNumber(project.screens.indexOf(screen))}</span>
        {screen.caption}
      </figcaption>
    </figure>
  );
}

function PhoneRow({ project, isPriority }: { project: Project; isPriority?: boolean }) {
  return (
    <div className={styles["projects__gallery-phones"]}>
      {project.screens
        .filter((screen) => screen.device === "mobile")
        .map((screen) => (
          <ScreenFigure key={screen.src} project={project} screen={screen} isPriority={isPriority} />
        ))}
    </div>
  );
}

function ScreenGallery({ project }: { project: Project }) {
  const desktops = project.screens.filter((screen) => screen.device === "desktop");
  const hasPhones = project.screens.some((screen) => screen.device === "mobile");

  return (
    <section className={styles["projects__gallery"]} aria-labelledby="project-screens-title">
      <h2 id="project-screens-title" className={styles["projects__section-title"]}>
        Pantallas
      </h2>
      {desktops.map((screen) => (
        <ScreenFigure key={screen.src} project={project} screen={screen} />
      ))}
      {hasPhones && <PhoneRow project={project} />}
    </section>
  );
}

function SiblingNav({ index }: { index: number }) {
  const previous = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <nav className={styles["projects__siblings"]} aria-label="Otros casos">
      <a href={`/proyectos/${previous.slug}`} onClick={() => trackButtonClick("project_nav_previous")}>
        <small>Caso anterior</small>
        {previous.sector}
      </a>
      <a href="/proyectos" onClick={() => trackButtonClick("project_nav_all")}>
        Todos los casos
      </a>
      <a href={`/proyectos/${next.slug}`} onClick={() => trackButtonClick("project_nav_next")}>
        <small>Caso siguiente</small>
        {next.sector}
      </a>
    </nav>
  );
}

/** Blog article about a problem this case solved. */
export type CaseArticleLink = { slug: string; title: string };

function CaseArticles({ project, articles }: { project: Project; articles: CaseArticleLink[] }) {
  if (articles.length === 0) return null;
  return (
    <div className={styles["projects__case-article"]}>
      <p>Sobre este tipo de problema, en el blog:</p>
      <ul>
        {articles.map((article) => (
          <li key={article.slug}>
            <a href={articlePath(article.slug)} onClick={() => trackButtonClick(`project_${gaKey(project)}_article`)}>
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectDetailPage({ slug, articles }: { slug: string; articles: CaseArticleLink[] }) {
  const index = PROJECTS.findIndex((candidate) => candidate.slug === slug);
  if (index === -1) throw new Error(`Unknown project slug: ${slug}`);
  const project = PROJECTS[index];
  // Phone-only projects show their captioned screens in the hero band instead of repeating them below.
  const hasDesktop = project.screens.some((screen) => screen.device === "desktop");

  return (
    <div className={styles["projects"]} style={{ "--project-accent": project.accent } as CSSProperties}>
      <ProjectsNav />

      <main>
        <article>
          <header className={styles["projects__case-head"]}>
            <a
              href="/proyectos"
              className={styles["projects__back"]}
              onClick={() => trackButtonClick(`project_${gaKey(project)}_back`)}
            >
              ← Proyectos
            </a>
            <p className={styles["projects__eyebrow"]}>
              Caso {caseNumber(index)} · {project.years}
            </p>
            <h1 className={styles["projects__title"]}>{project.sector}</h1>
            <p className={styles["projects__lead"]}>{project.headline}</p>
          </header>

          <div className={styles["projects__case-visual"]}>
            {hasDesktop ? (
              <ProjectShowcase screens={project.screens} isPriority />
            ) : (
              <PhoneRow project={project} isPriority />
            )}
          </div>

          <div className={styles["projects__case-body"]}>
            <section aria-labelledby="project-problem-title">
              <h2 id="project-problem-title" className={styles["projects__section-title"]}>
                El problema
              </h2>
              <p className={styles["projects__problem"]}>{project.problem}</p>
              <dl className={styles["projects__specs"]}>
                <div>
                  <dt>Plataformas</dt>
                  <dd>{project.platforms.join(", ")}</dd>
                </div>
                <div>
                  <dt>Tecnología</dt>
                  <dd>{project.stack.join(", ")}</dd>
                </div>
                <div>
                  <dt>Años</dt>
                  <dd>{project.years}</dd>
                </div>
              </dl>
              <CaseArticles project={project} articles={articles} />
            </section>
            <section aria-labelledby="project-built-title">
              <h2 id="project-built-title" className={styles["projects__section-title"]}>
                Qué construimos
              </h2>
              <ol className={styles["projects__features"]}>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ol>
            </section>
          </div>

          {hasDesktop && <ScreenGallery project={project} />}
        </article>

        <SiblingNav index={index} />
      </main>

      <ProjectsClosing gaPrefix={`project_${gaKey(project)}`} />
    </div>
  );
}
