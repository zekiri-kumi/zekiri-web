import type { CSSProperties } from "react";
import { PROJECTS, type Project } from "@/lib/proyectos-content";
import { trackButtonClick } from "@/lib/gtag-click";
import { ProjectShowcase } from "./DeviceFrames";
import { caseNumber } from "./ProjectsChrome";
import styles from "./ProyectosPage.module.css";

type ProjectCardProps = {
  project: Project;
  /** Namespaces the click label per page ("projects", "home"). */
  gaPrefix: string;
  /** Heading level of the card title, so it nests under the page's own headings. */
  titleTag: "h2" | "h3";
  isPriority?: boolean;
};

/** Linked case card: screens on top, then number, years, sector and one-line summary. */
export function ProjectCard({ project, gaPrefix, titleTag: TitleTag, isPriority }: ProjectCardProps) {
  return (
    <a
      href={`/proyectos/${project.slug}`}
      className={styles["projects__card"]}
      style={{ "--project-accent": project.accent } as CSSProperties}
      onClick={() => trackButtonClick(`${gaPrefix}_card_${project.slug.replaceAll("-", "_")}`)}
    >
      <div className={styles["projects__card-media"]}>
        <ProjectShowcase screens={project.screens} isPriority={isPriority} maxPhones={2} />
      </div>
      <div className={styles["projects__card-body"]}>
        <p className={styles["projects__card-meta"]}>
          <span>{caseNumber(PROJECTS.indexOf(project))}</span>
          {project.years}
        </p>
        <TitleTag className={styles["projects__card-title"]}>{project.sector}</TitleTag>
        <p className={styles["projects__card-text"]}>{project.headline}</p>
        <p className={styles["projects__card-foot"]}>{project.platforms.slice(0, 3).join(" · ")}</p>
      </div>
    </a>
  );
}
