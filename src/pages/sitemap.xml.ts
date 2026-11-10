/**
 * Dynamic sitemap.xml for SEO.
 * Scalable: add new paths to SITE_ENTRIES as the site grows.
 * Server-rendered so no static build dependency.
 */
import type { APIRoute } from "astro";
import { publishedArticles } from "@/lib/blog";
import { BLOG_PATH, IS_BLOG_LISTED, articlePath } from "@/lib/blog-paths";
import { SITE_URL } from "@/lib/seo";
import { PROJECTS } from "@/lib/proyectos-content";
import { SERVICES } from "@/lib/services-content";

type SitemapEntry = { path: string; changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"; priority?: number };

const SITE_ENTRIES: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: 1 },
  ...SERVICES.map((service) => ({ path: `/servicios/${service.slug}`, changefreq: "monthly" as const, priority: 0.9 })),
  { path: "/proyectos", changefreq: "monthly", priority: 0.8 },
  ...PROJECTS.map((project) => ({ path: `/proyectos/${project.slug}`, changefreq: "monthly" as const, priority: 0.6 })),
];

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&apos;";
      case '"': return "&quot;";
      default: return c;
    }
  });
}

async function blogEntries(): Promise<SitemapEntry[]> {
  if (!IS_BLOG_LISTED) return [];
  const articles = await publishedArticles();
  return [
    { path: BLOG_PATH, changefreq: "weekly", priority: 0.7 },
    ...articles.map((article) => ({ path: articlePath(article.id), changefreq: "monthly" as const, priority: 0.7 })),
  ];
}

export const GET: APIRoute = async () => {
  const entries = [...SITE_ENTRIES, ...(await blogEntries())];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(
  (entry) => `  <url>
    <loc>${escapeXml(SITE_URL + (entry.path.startsWith("/") ? entry.path : "/" + entry.path))}</loc>
    ${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>` : ""}
    ${entry.priority != null ? `<priority>${Number(entry.priority).toFixed(1)}</priority>` : ""}
  </url>`
).join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
