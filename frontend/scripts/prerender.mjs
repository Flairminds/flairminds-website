// Postbuild step: crawls the built SPA with headless Chrome and writes a static
// HTML snapshot per public route into dist/, so crawlers that don't execute JS
// (search engines, AI bots) get real content instead of an empty shell.
// The client bundle still loads and re-renders normally for real visitors.
import { preview } from "vite";
import puppeteer from "puppeteer";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

const routes = [
  "/",
  "/store",
  "/contact",
  "/about",
  "/case-study",
  "/case-study/ai_automation",
  "/case-study/ent_data_transformation",
  "/case-study/cloud_optimization",
  "/case-study/quant_finance",
  "/case-study/e_sign_platform",
  "/case-study/fable_fintech",
  "/case-study/vendor_risk_assessment",
  "/case-study/test-automation",
  "/case-study/ai-poc-development",
  "/case-study/ai-mdm-platform",
  "/case-study/swiftiq-guard",
  "/case-study/supply-chain-orchestration",
  "/blogs",
  "/blogs/pdf-analyzer",
  "/blogs/ai-productivity-challenge",
  "/blogs/ai-powered-web-scraping-and-reporting",
  "/blogs/shadowlight",
  "/blogs/azure-sandbox",
  "/blogs/strapi-blog",
  "/blogs/agentic-ai",
  "/blogs/doc-extract-research",
  "/services/web-mobile-development",
  "/services/cloud-devops",
  "/services/ai-data-science",
  "/services/quality-engineering",
  "/services/digital-transformation",
  "/services/it-management",
  "/services/ai-tech-stack",
];

async function main() {
  const server = await preview({
    root: rootDir,
    preview: { port: 4173, strictPort: false, host: "127.0.0.1" },
  });
  const baseUrl = server.resolvedUrls.local[0].replace(/\/$/, "");
  const baseOrigin = new URL(baseUrl).origin;

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Block third-party analytics/tracking calls (xhr/fetch/beacon) so the crawl
  // doesn't send fake pageviews/session recordings. Deliberately narrow: Chrome
  // routes <link rel=modulepreload>/stylesheet preloads through a separate
  // preload scanner that misbehaves when interception touches it, so those
  // (and scripts, documents, images, fonts) always pass through untouched
  // regardless of origin.
  const blockedTypes = new Set(["xhr", "fetch", "other", "ping"]);
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const isThirdParty = !req.url().startsWith(baseOrigin);
    if (isThirdParty && blockedTypes.has(req.resourceType())) {
      req.abort();
    } else {
      req.continue();
    }
  });

  let count = 0;
  for (const route of routes) {
    const url = baseOrigin + route;
    try {
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
      // small buffer for any post-idle React effects (e.g. react-helmet title/meta)
      await new Promise((resolve) => setTimeout(resolve, 300));

      const rootLength = await page.evaluate(
        () => document.getElementById("root")?.innerHTML.length ?? 0,
      );
      if (rootLength < 500) {
        throw new Error(
          `#root only has ${rootLength} chars of markup — page likely crashed or never mounted`,
        );
      }

      const html = await page.evaluate(
        () => "<!DOCTYPE html>\n" + document.documentElement.outerHTML,
      );

      const outDir = route === "/" ? distDir : path.join(distDir, route);
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, "index.html"), html, "utf-8");
      count += 1;
      console.log(`prerendered ${route}`);
    } catch (err) {
      console.error(`FAILED to prerender ${route}:`, err.message);
      process.exitCode = 1;
    }
  }

  await browser.close();
  await server.httpServer.close();
  console.log(`Done. Prerendered ${count}/${routes.length} routes into dist/.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
