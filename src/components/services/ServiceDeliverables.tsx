import homeStyles from "@/components/home/HomePage.module.css";
import { revealOrder } from "@/components/home/hooks/useScrollReveal";
import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import type { Service } from "@/lib/services-content";
import styles from "./ServicePage.module.css";

/** Cards per row on desktop: the stagger restarts on each row. */
const CARDS_PER_ROW = 2;

export function ServiceDeliverables({ service }: { service: Service }) {
  return (
    <section aria-labelledby="service-deliverables-title">
      <div className={homeStyles["home__container"]}>
        <div data-reveal>
          <p className={projectStyles["projects__eyebrow"]}>Qué incluye</p>
          <h2 id="service-deliverables-title" className={homeStyles["home__heading"]}>
            {service.deliverablesHeading}
          </h2>
        </div>
        <ul className={styles["service__deliverables"]}>
          {service.deliverables.map((deliverable, index) => (
            <li
              key={deliverable.title}
              className={homeStyles["home__service"]}
              data-reveal
              style={revealOrder(index % CARDS_PER_ROW)}
            >
              <h3 className={homeStyles["home__service-title"]}>{deliverable.title}</h3>
              <p className={styles["service__deliverable-text"]}>{deliverable.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
