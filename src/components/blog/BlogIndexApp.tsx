import { useState } from "react";
import { ProjectsClosing } from "@/components/proyectos/ProjectsChrome";
import projectStyles from "@/components/proyectos/ProyectosPage.module.css";
import type { ArticleSummary } from "@/lib/blog";
import { BLOG_TOPICS, GENERAL_TOPIC, type BlogTopic } from "@/lib/blog-topics";
import { trackButtonClick } from "@/lib/gtag-click";
import { ArticleCard } from "./ArticleCard";
import styles from "./BlogPage.module.css";
import { BlogShell } from "./BlogShell";

const ALL_TOPICS = "Todos";
/** Cards whose cover loads eagerly: the first row on a wide screen. */
const PRIORITY_CARDS = 3;

type TopicFilter = BlogTopic | typeof ALL_TOPICS;

function TopicChips({
  topics,
  current,
  onSelect,
}: {
  topics: { topic: TopicFilter; count: number }[];
  current: TopicFilter;
  onSelect: (topic: TopicFilter) => void;
}) {
  return (
    <div className={styles["blog__chips"]} role="group" aria-label="Filtrar por rubro">
      {topics.map(({ topic, count }) => (
        <button
          key={topic}
          type="button"
          className={styles["blog__chip"]}
          aria-pressed={topic === current}
          onClick={() => {
            onSelect(topic);
            trackButtonClick(`blog_index_topic_${topic}`);
          }}
        >
          {topic} <span>{count}</span>
        </button>
      ))}
    </div>
  );
}

function StartHere({ articles }: { articles: ArticleSummary[] }) {
  if (articles.length === 0) return null;
  return (
    <section className={styles["blog__start"]} aria-labelledby="blog-start-title">
      <h2 id="blog-start-title" className={styles["blog__section-title"]}>
        Para empezar, sea cual sea tu rubro
      </h2>
      <ul className={styles["blog__start-list"]}>
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </ul>
    </section>
  );
}

/** Blog index: two general articles to start with, then every article by business, with topic filters. */
export default function BlogIndexApp({ articles }: { articles: ArticleSummary[] }) {
  const [currentTopic, setCurrentTopic] = useState<TopicFilter>(ALL_TOPICS);

  const general = articles.filter((article) => article.topic === GENERAL_TOPIC);
  const byBusiness = articles.filter((article) => article.topic !== GENERAL_TOPIC);
  const visible = currentTopic === ALL_TOPICS ? byBusiness : byBusiness.filter((article) => article.topic === currentTopic);
  const topics: { topic: TopicFilter; count: number }[] = [
    { topic: ALL_TOPICS, count: byBusiness.length },
    ...BLOG_TOPICS.map((topic) => ({ topic, count: byBusiness.filter((article) => article.topic === topic).length })).filter(
      ({ count }) => count > 0,
    ),
  ];

  return (
    <BlogShell>
      <div className={styles["blog__index"]}>
        <header className={styles["blog__index-head"]}>
          <p className={projectStyles["projects__eyebrow"]}>Blog</p>
          <h1 className={styles["blog__index-title"]}>Problemas de todos los días en tu negocio, y cómo resolverlos</h1>
          <p className={styles["blog__index-lead"]}>
            Escribimos para dueños y gerentes de distribuidoras, estudios jurídicos, servicios técnicos,
            tiendas y otros negocios como los de nuestros proyectos. Cada artículo trata un problema
            concreto y termina con algo que puedes hacer aunque todavía no tengas un sistema.
          </p>
        </header>

        <StartHere articles={general} />

        <section className={styles["blog__browse"]} aria-labelledby="blog-browse-title">
          <h2 id="blog-browse-title" className={styles["blog__section-title"]}>
            Por rubro
          </h2>
          <TopicChips topics={topics} current={currentTopic} onSelect={setCurrentTopic} />
          <ul className={styles["blog__grid"]}>
            {visible.map((article, index) => (
              <ArticleCard key={article.slug} article={article} isPriority={index < PRIORITY_CARDS} />
            ))}
          </ul>
        </section>
      </div>
      <ProjectsClosing gaPrefix="blog_index" />
    </BlogShell>
  );
}
