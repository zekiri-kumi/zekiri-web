import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import { PROCESS_STEPS } from "@/lib/home-content";
import { revealOrder } from "./hooks/useScrollReveal";
import styles from "./HomePage.module.css";

export function HomeProcess() {
  return (
    <section id="proceso" className={styles["home__band"]} aria-labelledby="home-process-title">
      <div className={`${styles["home__container"]} ${styles["home__process"]}`}>
        <div data-reveal>
          <p className={projectStyles["projects__eyebrow"]}>Cómo trabajamos</p>
          <h2 id="home-process-title" className={styles["home__heading"]}>
            Primero entendemos el proceso. Después escribimos el código.
          </h2>
          <p className={styles["home__lead"]}>
            Antes de programar nos sentamos con tu equipo a entender cómo trabaja hoy y dónde se
            pierde tiempo o dinero. Si el proceso está roto, automatizarlo solo hace el error más
            rápido.
          </p>
        </div>
        <ol className={styles["home__steps"]}>
          {PROCESS_STEPS.map((step, index) => (
            <li
              key={step.title}
              className={styles["home__step"]}
              data-reveal
              style={revealOrder(index + 1)}
            >
              <div>
                <h3 className={styles["home__step-title"]}>{step.title}</h3>
                <p className={styles["home__step-text"]}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
