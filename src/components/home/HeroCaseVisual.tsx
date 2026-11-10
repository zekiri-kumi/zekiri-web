import type { CSSProperties } from "react";
import { ProjectShowcase } from "@/components/proyectos/DeviceFrames";
import { trackButtonClick } from "@/lib/gtag-click";
import type { Project } from "@/lib/proyectos-content";
import styles from "./HomePage.module.css";

type HeroCaseVisualProps = {
  project: Project;
  /** Click label of the link to the case ("home_hero_case"). */
  gaLabel: string;
};

/** Screens of one case next to a hero headline, linked to the case page. */
export function HeroCaseVisual({ project, gaLabel }: HeroCaseVisualProps) {
  return (
    <figure
      className={styles["home__hero-visual"]}
      style={{ "--project-accent": project.accent } as CSSProperties}
    >
      <a
        href={`/proyectos/${project.slug}`}
        className={styles["home__hero-stage"]}
        aria-label={`Ver el caso: ${project.sector}`}
        onClick={() => trackButtonClick(gaLabel)}
      >
        <ProjectShowcase screens={project.screens} isPriority />
      </a>
      <figcaption className={styles["home__hero-caption"]}>
        <span>
          {project.sector} · {project.years}
        </span>
        <span>Pantallas con datos de ejemplo</span>
      </figcaption>
    </figure>
  );
}
