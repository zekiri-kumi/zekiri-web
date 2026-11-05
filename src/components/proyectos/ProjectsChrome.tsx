import { trackButtonClick } from "@/lib/gtag-click";
import styles from "./ProyectosPage.module.css";

const CONTACT_HREF = "/#contact";
const CONTACT_EMAIL = "contact@zekiri.io";

/** 1-based, zero-padded case number ("01"). */
export function caseNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

export function ProjectsNav() {
  return (
    <header className={styles["projects__nav"]}>
      <div className={styles["projects__nav-inner"]}>
        <a href="/" onClick={() => trackButtonClick("projects_nav_logo")}>
          <picture>
            <source srcSet="/assets/logo-w.png" media="(prefers-color-scheme: dark)" />
            <img
              src="/assets/logo.png"
              alt="Zékiri"
              width={105}
              height={34}
              className={styles["projects__nav-logo"]}
              decoding="async"
            />
          </picture>
        </a>
        <nav className={styles["projects__nav-links"]} aria-label="Principal">
          <a href="/" onClick={() => trackButtonClick("projects_nav_home")}>
            Servicios
          </a>
          <a href="/proyectos" aria-current="page" onClick={() => trackButtonClick("projects_nav_projects")}>
            Proyectos
          </a>
        </nav>
        <a
          href={CONTACT_HREF}
          className={styles["projects__button"]}
          onClick={() => trackButtonClick("projects_nav_cta")}
        >
          Agenda un diagnóstico
        </a>
      </div>
    </header>
  );
}

export function ProjectsClosing({ gaPrefix }: { gaPrefix: string }) {
  return (
    <section className={styles["projects__closing"]} aria-labelledby="projects-closing-title">
      <div className={styles["projects__closing-inner"]}>
        <h2 id="projects-closing-title" className={styles["projects__closing-title"]}>
          ¿Tu operación todavía depende de planillas, mensajes y memoria?
        </h2>
        <p className={styles["projects__closing-text"]}>
          Empezamos con un diagnóstico sin costo: vemos cómo trabaja tu equipo hoy, qué conviene
          ordenar primero y qué se puede automatizar.
        </p>
        <div className={styles["projects__closing-actions"]}>
          <a
            href={CONTACT_HREF}
            className={styles["projects__button"]}
            onClick={() => trackButtonClick(`${gaPrefix}_closing_cta`)}
          >
            Agenda un diagnóstico
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={styles["projects__closing-mail"]}
            onClick={() => trackButtonClick(`${gaPrefix}_closing_email`)}
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
