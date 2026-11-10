import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import { trackButtonClick } from "@/lib/gtag-click";
import { SERVICES } from "@/lib/home-content";
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
              key={service.title}
              className={styles["home__service"]}
              data-reveal
              style={revealOrder(index)}
            >
              <h3 className={styles["home__service-title"]}>{service.title}</h3>
              <p className={styles["home__service-text"]}>{service.text}</p>
              <p className={styles["home__service-example"]}>
                Un caso
                <a
                  href={`/proyectos/${service.example.slug}`}
                  className={styles["home__text-link"]}
                  onClick={() =>
                    trackButtonClick(`home_service_${service.example.slug.replaceAll("-", "_")}`)
                  }
                >
                  {service.example.sector}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
