import { trackButtonClick } from "@/lib/gtag-click";
import type { ArticleSummary } from "@/lib/blog";
import { articlePath } from "@/lib/blog-paths";
import styles from "./BlogPage.module.css";

type ArticleEntryProps = {
  article: ArticleSummary;
  /** Namespaces the click label per list ("blog_index", "blog_related"). */
  gaPrefix: string;
  /** Heading level of the title, so it nests under the list's own heading. */
  titleTag: "h2" | "h3";
};

/** One article in a list: date and sector, linked title and summary. */
export function ArticleEntry({ article, gaPrefix, titleTag: TitleTag }: ArticleEntryProps) {
  return (
    <li className={styles["blog__entry"]}>
      <p className={styles["blog__meta"]}>
        <time dateTime={article.publishedAt}>{article.publishedLabel}</time> · {article.sector}
      </p>
      <TitleTag className={styles["blog__entry-title"]}>
        <a
          href={articlePath(article.slug)}
          onClick={() => trackButtonClick(`${gaPrefix}_${article.slug.replaceAll("-", "_")}`)}
        >
          {article.title}
        </a>
      </TitleTag>
      <p className={styles["blog__entry-text"]}>{article.description}</p>
    </li>
  );
}
