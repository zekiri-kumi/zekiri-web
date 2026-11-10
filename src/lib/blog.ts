/**
 * Blog articles. Server-only helpers (they read the content collection); components import
 * the plain types from here and receive the data as props.
 */
import { getCollection, type CollectionEntry } from "astro:content";
import { PROJECTS, projectBySlug, type Project, type ProjectScreen } from "./proyectos-content";
import { SERVICES, type Service } from "./services-content";

export type ArticleEntry = CollectionEntry<"blog">;

/** What a component needs to list or head an article. Plain data, safe to pass to an island. */
export type ArticleSummary = {
  slug: string;
  title: string;
  description: string;
  /** Sector of the case the article draws on, or a generic label when it draws on none. */
  sector: string;
  projectSlug: string | null;
  cover: ProjectScreen | null;
  publishedAt: string;
  publishedLabel: string;
  readingMinutes: number;
};

/** Label for articles that are not tied to one case. */
const GENERAL_SECTOR = "Para cualquier negocio";
const WORDS_PER_MINUTE = 200;
const DATE_FORMAT = new Intl.DateTimeFormat("es-BO", { dateStyle: "long", timeZone: "UTC" });

function articleProject(entry: ArticleEntry): Project | undefined {
  return entry.data.project ? projectBySlug(entry.data.project) : undefined;
}

export function articleService(entry: ArticleEntry): Service {
  const service = SERVICES.find((candidate) => candidate.slug === entry.data.service);
  if (!service) throw new Error(`Article "${entry.id}" links to unknown service "${entry.data.service}"`);
  return service;
}

/** Portfolio position of the article's case; articles without a case go last. */
function catalogPosition(entry: ArticleEntry): number {
  const position = PROJECTS.findIndex((project) => project.slug === entry.data.project);
  return position === -1 ? PROJECTS.length : position;
}

/** Articles whose case is published (or that have none), newest first; same-day ones follow the portfolio order. */
export async function publishedArticles(): Promise<ArticleEntry[]> {
  const entries = await getCollection("blog");
  return entries
    .filter((entry) => !articleProject(entry)?.hidden)
    .sort(
      (first, second) =>
        second.data.publishedAt.getTime() - first.data.publishedAt.getTime() ||
        catalogPosition(first) - catalogPosition(second),
    );
}

/**
 * Articles to suggest after one: same case first, then same service, then the rest,
 * each group in list order starting after the current article so every article gets linked.
 */
export function relatedArticles(articles: ArticleEntry[], current: ArticleEntry, count: number): ArticleEntry[] {
  const start = articles.indexOf(current);
  const others = Array.from({ length: articles.length - 1 }, (_, offset) => articles[(start + offset + 1) % articles.length]);
  const affinity = (candidate: ArticleEntry): number => {
    if (current.data.project && candidate.data.project === current.data.project) return 0;
    if (candidate.data.service === current.data.service) return 1;
    return 2;
  };
  return [...others].sort((first, second) => affinity(first) - affinity(second)).slice(0, count);
}

function readingMinutes(markdown: string): number {
  const wordCount = markdown.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
}

function articleCover(entry: ArticleEntry, project: Project | undefined): ProjectScreen | null {
  if (!project) return null;
  const cover = project.screens[entry.data.coverScreen];
  if (!cover) throw new Error(`Article "${entry.id}" asks for cover screen ${entry.data.coverScreen}, which "${project.slug}" lacks`);
  return cover;
}

export function toArticleSummary(entry: ArticleEntry): ArticleSummary {
  const project = articleProject(entry);

  return {
    slug: entry.id,
    title: entry.data.title,
    description: entry.data.description,
    sector: project?.sector ?? GENERAL_SECTOR,
    projectSlug: project?.slug ?? null,
    cover: articleCover(entry, project),
    publishedAt: entry.data.publishedAt.toISOString(),
    publishedLabel: DATE_FORMAT.format(entry.data.publishedAt),
    readingMinutes: readingMinutes(entry.body ?? ""),
  };
}
