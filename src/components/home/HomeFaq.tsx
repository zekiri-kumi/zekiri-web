import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import type { FaqItem } from "@/lib/home-content";
import { revealOrder } from "./hooks/useScrollReveal";
import styles from "./HomePage.module.css";

type HomeFaqProps = {
  heading: string;
  items: readonly FaqItem[];
};

export function HomeFaq({ heading, items }: HomeFaqProps) {
  return (
    <section aria-labelledby="home-faq-title">
      <div className={`${styles["home__container"]} ${styles["home__faq"]}`}>
        <div data-reveal>
          <p className={projectStyles["projects__eyebrow"]}>Preguntas frecuentes</p>
          <h2 id="home-faq-title" className={styles["home__heading"]}>
            {heading}
          </h2>
        </div>
        <div className={styles["home__faq-list"]} data-reveal style={revealOrder(1)}>
          {items.map((faq) => (
            <details key={faq.question} className={styles["home__faq-item"]}>
              <summary>{faq.question}</summary>
              <p className={styles["home__faq-answer"]}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
