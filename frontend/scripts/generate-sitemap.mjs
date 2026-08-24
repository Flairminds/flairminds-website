// Postbuild step: writes a real sitemap.xml into dist/ from the same route
// list scripts/prerender.mjs crawls, so the two can never drift apart.
// Without this file, requests to /sitemap.xml fell through the Express
// catch-all in index.js and got served the generic index.html shell instead
// of XML — which is why Search Console reported "Couldn't fetch."
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { routes } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

// Matches the canonical domain used in src/components/seo/Seo.jsx.
const SITE_URL = "https://www.flairminds.com";

function priorityFor(route) {
  if (route === "/") return "1.0";
  if (route.split("/").length <= 2) return "0.8"; // top-level sections
  return "0.6"; // nested/detail pages
}

function main() {
  const today = new Date().toISOString().split("T")[0];

  const urlEntries = routes
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priorityFor(route)}</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

  return writeFile(path.join(distDir, "sitemap.xml"), xml, "utf-8").then(() =>
    console.log(`Wrote sitemap.xml with ${routes.length} URLs.`),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
