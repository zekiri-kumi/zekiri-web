import { CONTACT_HREF } from "@/components/proyectos/ProjectsChrome";
import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import type { ArticleSummary } from "@/lib/blog";
import { CTA_QUESTION_BY_TOPIC } from "@/lib/blog-topics";
import { trackButtonClick } from "@/lib/gtag-click";
import { whatsappHref } from "@/lib/home-content";
import styles from "./BlogPage.module.css";

/** Call to action right after the article text, phrased for the business the article is written for. */
export function ArticleCta({ article }: { article: ArticleSummary }) {
  const whatsappMessage = `Hola, leí "${article.title}" en su blog y quiero conversar sobre mi caso.`;

  return (
    <aside className={styles["blog__cta"]} aria-labelledby="blog-cta-title">
      <h2 id="blog-cta-title" className={styles["blog__cta-title"]}>
        {CTA_QUESTION_BY_TOPIC[article.topic]}
      </h2>
      <p className={styles["blog__cta-text"]}>
        Empezamos con un diagnóstico sin costo: vemos cómo trabaja tu equipo hoy, qué conviene
        ordenar primero y si hace falta un sistema o alcanza con mejorar lo que ya tienes.
      </p>
      <div className={styles["blog__cta-actions"]}>
        <a
          href={CONTACT_HREF}
          className={`${projectStyles["projects__button"]} ${styles["blog__cta-primary"]}`}
          onClick={() => trackButtonClick("blog_article_cta_diagnosis")}
        >
          Agenda un diagnóstico sin costo
        </a>
        <a
          href={whatsappHref(whatsappMessage)}
          className={styles["blog__cta-secondary"]}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackButtonClick("blog_article_cta_whatsapp")}
        >
          Escríbenos por WhatsApp
        </a>
      </div>
    </aside>
  );
}
