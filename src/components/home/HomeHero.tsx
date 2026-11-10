import { CONTACT_HREF } from "@/components/proyectos/ProjectsChrome";
import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import { trackButtonClick } from "@/lib/gtag-click";
import { HERO_PROJECT } from "@/lib/home-content";
import { PROJECTS } from "@/lib/proyectos-content";
import { HeroCaseVisual } from "./HeroCaseVisual";
import styles from "./HomePage.module.css";

export function HomeHero() {
  return (
    <section className={styles["home__hero"]} aria-labelledby="home-title">
      <div className={styles["home__hero-copy"]}>
        <p className={projectStyles["projects__eyebrow"]}>Software a medida y automatización</p>
        <h1 id="home-title" className={styles["home__hero-title"]}>
          Software a medida para empresas que necesitan ordenar su operación
        </h1>
        <p className={styles["home__hero-lead"]}>
          Diseñamos y construimos plataformas web, apps móviles y automatizaciones para empresas de
          distribución, servicios legales, crédito y servicio técnico. Trabajamos desde Cochabamba,
          Bolivia, y llevamos más de 15 años reemplazando planillas, mensajes y sistemas que ya no
          alcanzan.
        </p>
        <div className={styles["home__hero-actions"]}>
          <a
            href={CONTACT_HREF}
            className={`${projectStyles["projects__button"]} ${styles["home__cta"]}`}
            onClick={() => trackButtonClick("home_hero_cta")}
          >
            Agenda un diagnóstico sin costo
          </a>
          <a
            href="/proyectos"
            className={styles["home__cta-secondary"]}
            onClick={() => trackButtonClick("home_hero_projects")}
          >
            Ver los {PROJECTS.length} proyectos
          </a>
        </div>
        <dl className={`${projectStyles["projects__facts"]} ${styles["home__hero-facts"]}`}>
          <div>
            <dt>Años de experiencia</dt>
            <dd>+15</dd>
          </div>
          <div>
            <dt>Casos publicados</dt>
            <dd>{PROJECTS.length}</dd>
          </div>
          <div>
            <dt>Plataformas</dt>
            <dd className={projectStyles["projects__facts-text"]}>Web, móvil y SaaS</dd>
          </div>
        </dl>
      </div>

      <HeroCaseVisual project={HERO_PROJECT} gaLabel="home_hero_case" />
    </section>
  );
}
