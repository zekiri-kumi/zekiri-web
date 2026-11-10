import { HeroCaseVisual } from "@/components/home/HeroCaseVisual";
import homeStyles from "@/components/home/HomePage.module.css";
import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import { trackButtonClick } from "@/lib/gtag-click";
import type { Service } from "@/lib/services-content";
import { SERVICE_CASES_ID } from "./ServiceCases";

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className={homeStyles["home__hero"]} aria-labelledby="service-title">
      <div className={homeStyles["home__hero-copy"]}>
        <p className={projectStyles["projects__eyebrow"]}>Servicios</p>
        <h1 id="service-title" className={homeStyles["home__hero-title"]}>
          {service.title}
        </h1>
        <p className={homeStyles["home__hero-lead"]}>{service.lead}</p>
        <div className={homeStyles["home__hero-actions"]}>
          <a
            href="#contact"
            className={`${projectStyles["projects__button"]} ${homeStyles["home__cta"]}`}
            onClick={() => trackButtonClick("service_hero_cta")}
          >
            Agenda un diagnóstico sin costo
          </a>
          <a
            href={`#${SERVICE_CASES_ID}`}
            className={homeStyles["home__cta-secondary"]}
            onClick={() => trackButtonClick("service_hero_cases")}
          >
            Ver casos
          </a>
        </div>
      </div>

      <HeroCaseVisual project={service.cases[0]} gaLabel="service_hero_case" />
    </section>
  );
}
