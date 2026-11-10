import type { ReactNode } from "react";
import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import type { ArticleSummary } from "@/lib/blog";
import { BLOG_PATH } from "@/lib/blog-paths";
import { trackButtonClick } from "@/lib/gtag-click";
import { ArticleCta } from "./ArticleCta";
import { ArticleEntry } from "./ArticleEntry";
import styles from "./BlogPage.module.css";
import { BlogShell } from "./BlogShell";

type BlogArticleAppProps = {
  article: ArticleSummary;
  /** Service page the article points to. */
  service: { slug: string; name: string };
  related: ArticleSummary[];
  /** The article text, rendered from Markdown by the page. */
  children: ReactNode;
};

function ArticleHeader({ article }: { article: ArticleSummary }) {
  return (
    <header className={styles["blog__article-head"]}>
      <a href={BLOG_PATH} className={projectStyles["projects__back"]} onClick={() => trackButtonClick("blog_article_back")}>
        ← Blog
      </a>
      <p className={styles["blog__meta"]}>
        <time dateTime={article.publishedAt}>{article.publishedLabel}</time> · {article.sector} ·{" "}
        {article.readingMinutes} min de lectura
      </p>
      <h1 className={styles["blog__article-title"]}>{article.title}</h1>
      {article.cover && (
        <figure className={styles["blog__cover"]} data-device={article.cover.device}>
          <img
            src={article.cover.src}
            alt={article.cover.caption}
            width={article.cover.width}
            height={article.cover.height}
            fetchPriority="high"
            decoding="async"
          />
          <figcaption>{article.cover.caption}. Pantalla con datos de ejemplo.</figcaption>
        </figure>
      )}
    </header>
  );
}

function ArticleFollowUp({ article, service }: Pick<BlogArticleAppProps, "article" | "service">) {
  return (
    <aside className={styles["blog__after"]} aria-label="Caso y servicio relacionados">
      <p className={styles["blog__after-text"]}>
        {article.projectSlug && (
          <>
            Las pantallas y la ficha técnica de este proyecto están en{" "}
            <a href={`/proyectos/${article.projectSlug}`} onClick={() => trackButtonClick("blog_article_case")}>
              el caso de {article.sector.toLowerCase()}
            </a>
            .{" "}
          </>
        )}
        Si tu empresa tiene un problema parecido, mira cómo trabajamos en{" "}
        <a href={`/servicios/${service.slug}`} onClick={() => trackButtonClick("blog_article_service")}>
          {service.name.toLowerCase()}
        </a>
        .
      </p>
    </aside>
  );
}

/** One article: header with cover, Markdown body, links to its case and service, more articles. */
export default function BlogArticleApp({ article, service, related, children }: BlogArticleAppProps) {
  return (
    <BlogShell>
      <article className={styles["blog__column"]}>
        <ArticleHeader article={article} />
        <div className={styles["blog__body"]}>{children}</div>
        <ArticleCta article={article} />
        <ArticleFollowUp article={article} service={service} />
      </article>
      {related.length > 0 && (
        <section className={`${styles["blog__column"]} ${styles["blog__related"]}`} aria-labelledby="blog-related-title">
          <h2 id="blog-related-title" className={projectStyles["projects__section-title"]}>
            Otros artículos
          </h2>
          <ul className={styles["blog__related-list"]}>
            {related.map((entry) => (
              <ArticleEntry key={entry.slug} article={entry} gaPrefix="blog_related" titleTag="h3" />
            ))}
          </ul>
        </section>
      )}
    </BlogShell>
  );
}
