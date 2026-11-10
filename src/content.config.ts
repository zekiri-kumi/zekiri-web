import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/** Blog articles: one Markdown file per article, named after its URL slug. */
const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    /** Article headline (the page's h1). */
    title: z.string(),
    /** Search result title when it should differ from the headline. The site name is appended. */
    seoTitle: z.string().max(60).optional(),
    /** Meta description, also the summary shown in article lists. */
    description: z.string().max(160),
    /** Slug of the portfolio case the article draws on, if any. A hidden case hides its articles. */
    project: z.string().optional(),
    /** Slug of the service page the article links to. */
    service: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    /** Index of the case screen used as cover and social image (ignored without a case). */
    coverScreen: z.number().int().nonnegative().default(0),
  }),
});

export const collections = { blog };
