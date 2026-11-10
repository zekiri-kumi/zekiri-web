/** Blog URLs and visibility. Kept apart from blog.ts so components can import them without the content collection. */
export const BLOG_PATH = "/blog";

/**
 * Set to true to launch the blog: links in the header, footer and case pages, entries in the
 * sitemap and indexing by search engines. While false the pages work for whoever has the URL,
 * with noindex and nothing on the site pointing to them.
 */
export const IS_BLOG_LISTED = false;

export function articlePath(slug: string): string {
  return `${BLOG_PATH}/${slug}`;
}
