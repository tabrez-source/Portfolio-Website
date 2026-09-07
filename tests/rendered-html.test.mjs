import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders development preview metadata", async () => {
  const response = await render();

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(await response.text(), developmentPreviewMeta);
});

test("renders recruiter content and complete SEO metadata", async () => {
  const response = await render();
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<link rel="canonical" href="https:\/\/shamshtabrez\.com\/"/i);
  assert.match(html, /"@type":"ProfilePage"/);
  assert.match(html, /BI &amp; Data Analyst building reliable data products/);
  assert.match(html, /href="\/resume\/Shamsh_Tabrez_RecruiterStory_Data_BI_Analyst_OnePage\.pdf"/);
  assert.match(html, /https:\/\/novatrade\.shamshtabrez\.com/);
});

test("serves robots and sitemap routes", async () => {
  const robots = await render("/robots.txt");
  const sitemap = await render("/sitemap.xml");

  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /User-Agent: \*/);
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /<urlset/);
});
