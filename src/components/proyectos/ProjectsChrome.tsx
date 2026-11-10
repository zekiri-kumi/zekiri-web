import { COMPANY_EMAIL } from "@/lib/company";
import { trackButtonClick } from "@/lib/gtag-click";
import styles from "./ProyectosPage.module.css";

export const CONTACT_HREF = "/#contact";
export const CONTACT_EMAIL = COMPANY_EMAIL;

type NavSection = "home" | "projects" | "services";

export const NAV_LINKS = [
  { href: "/#servicios", label: "Servicios", gaLabel: "services" },
  { href: "/proyectos", label: "Proyectos", gaLabel: "projects", section: "projects" },
  { href: "/#proceso", label: "Cómo trabajamos", gaLabel: "process" },
] as const;

/** 1-based, zero-padded case number ("01"). */
export function caseNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

/** Site header. `current` marks the active link, `gaPrefix` namespaces the click labels per page. */
export function ProjectsNav({
  current = "projects",
  gaPrefix = "projects",
}: {
  current?: NavSection;
  gaPrefix?: string;
}) {
  return (
    <header className={styles["projects__nav"]}>
      <div className={styles["projects__nav-inner"]}>
        <a href="/" onClick={() => trackButtonClick(`${gaPrefix}_nav_logo`)}>
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
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={"section" in link && link.section === current ? "page" : undefined}
              onClick={() => trackButtonClick(`${gaPrefix}_nav_${link.gaLabel}`)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={CONTACT_HREF}
          className={styles["projects__button"]}
          onClick={() => trackButtonClick(`${gaPrefix}_nav_cta`)}
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
