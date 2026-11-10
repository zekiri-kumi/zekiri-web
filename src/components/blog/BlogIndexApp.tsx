import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import type { ArticleSummary } from "@/lib/blog";
import { ArticleEntry } from "./ArticleEntry";
import styles from "./BlogPage.module.css";
import { BlogShell } from "./BlogShell";

/** Blog index: every published article, newest first. */
export default function BlogIndexApp({ articles }: { articles: ArticleSummary[] }) {
  return (
    <BlogShell>
      <div className={styles["blog__column"]}>
        <header className={styles["blog__index-head"]}>
          <h1 className={projectStyles["projects__title"]}>Blog</h1>
          <p className={styles["blog__index-lead"]}>
            Problemas de empresas que resolvimos con software: qué pasaba, qué construimos y qué
            puede hacer hoy quien tiene el mismo problema.
          </p>
        </header>
        <ul className={styles["blog__list"]}>
          {articles.map((article) => (
            <ArticleEntry key={article.slug} article={article} gaPrefix="blog_index" titleTag="h2" />
          ))}
        </ul>
      </div>
    </BlogShell>
  );
}
