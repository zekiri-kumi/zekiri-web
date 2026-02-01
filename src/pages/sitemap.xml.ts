/**
 * Dynamic sitemap.xml for SEO.
 * Scalable: add new paths to SITE_ENTRIES as the site grows.
 * Server-rendered so no static build dependency.
 */
import type { APIRoute } from "astro";
import { SITE_URL } from "@/lib/seo";

const SITE_ENTRIES: { path: string; changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"; priority?: number }[] = [
  { path: "/", changefreq: "weekly", priority: 1 },
  { path: "/?lang=es", changefreq: "weekly", priority: 1 },
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

export const GET: APIRoute = async () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITE_ENTRIES.map(
  (entry) => `  <url>
    <loc>${escapeXml(SITE_URL + (entry.path.startsWith("/") ? entry.path : "/" + entry.path))}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
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
