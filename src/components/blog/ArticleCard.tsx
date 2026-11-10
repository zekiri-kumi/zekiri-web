import type { CSSProperties } from "react";
import type { ArticleSummary } from "@/lib/blog";
import { articlePath } from "@/lib/blog-paths";
import { trackButtonClick } from "@/lib/gtag-click";
import styles from "./BlogPage.module.css";

type ArticleCardProps = {
  article: ArticleSummary;
  /** Load the cover eagerly for the first cards on screen. */
  isPriority?: boolean;
};

function CardCover({ article, isPriority }: ArticleCardProps) {
  if (!article.cover) return null;
  return (
    <div className={styles["blog__card-media"]} data-device={article.cover.device}>
      <img
        src={article.cover.src}
        alt=""
        width={article.cover.width}
        height={article.cover.height}
        loading={isPriority ? "eager" : "lazy"}
        decoding="async"
      />
    </div>
  );
}

/** Linked article card: case screenshot, topic, title, summary and reading time. */
export function ArticleCard({ article, isPriority }: ArticleCardProps) {
  return (
    <li>
      <a
        href={articlePath(article.slug)}
        className={styles["blog__card"]}
        style={article.accent ? ({ "--project-accent": article.accent } as CSSProperties) : undefined}
        onClick={() => trackButtonClick(`blog_index_${article.slug.replaceAll("-", "_")}`)}
      >
        <CardCover article={article} isPriority={isPriority} />
        <div className={styles["blog__card-body"]}>
          <p className={styles["blog__card-topic"]}>{article.topic}</p>
          <h3 className={styles["blog__card-title"]}>{article.title}</h3>
          <p className={styles["blog__card-text"]}>{article.description}</p>
          <p className={styles["blog__card-foot"]}>{article.readingMinutes} min de lectura</p>
        </div>
      </a>
    </li>
  );
}
