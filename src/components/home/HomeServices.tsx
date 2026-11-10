import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import { trackButtonClick } from "@/lib/gtag-click";
import { SERVICES } from "@/lib/services-content";
import { revealOrder } from "./hooks/useScrollReveal";
import styles from "./HomePage.module.css";

export function HomeServices() {
  return (
    <section id="servicios" aria-labelledby="home-services-title">
      <div className={styles["home__container"]}>
        <div data-reveal>
          <p className={projectStyles["projects__eyebrow"]}>Servicios</p>
          <h2 id="home-services-title" className={styles["home__heading"]}>
            Qué construimos
          </h2>
        </div>
        <ul className={styles["home__services"]}>
          {SERVICES.map((service, index) => (
            <li
              key={service.slug}
              className={styles["home__service"]}
              data-reveal
              style={revealOrder(index)}
            >
              <h3 className={styles["home__service-title"]}>
                <a
                  href={`/servicios/${service.slug}`}
                  onClick={() =>
                    trackButtonClick(`home_service_${service.slug.replaceAll("-", "_")}`)
                  }
                >
                  {service.name}
                </a>
              </h3>
              <p className={styles["home__service-text"]}>{service.summary}</p>
              <p className={styles["home__service-example"]}>
                Un caso
                <a
                  href={`/proyectos/${service.cases[0].slug}`}
                  className={styles["home__text-link"]}
                  onClick={() =>
                    trackButtonClick(`home_service_case_${service.cases[0].slug.replaceAll("-", "_")}`)
                  }
                >
                  {service.cases[0].sector}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
