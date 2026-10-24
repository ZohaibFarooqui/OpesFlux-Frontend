// Weekly SEO health check of the LIVE site. Writes a Markdown report to
// seo-report.md and exits 1 if anything needs fixing, so the GitHub workflow
// can open an issue.
//
// Usage: node scripts/seo-monitor.mjs [baseUrl]

import fs from "node:fs";

const BASE = (process.argv[2] || "https://opesflux.devsandvisuals.com").replace(/\/$/, "");
const problems = [];
const notes = [];

const get = async (url) => {
  try {
    const r = await fetch(url, { redirect: "manual", headers: { "User-Agent": "OpesFlux-SEO-Monitor/1.0" } });
    return { status: r.status, location: r.headers.get("location"), text: r.status === 200 ? await r.text() : "" };
  } catch (e) {
    return { status: 0, text: "", error: String(e) };
  }
};
const pick = (html, re) => (html.match(re) || [])[1];
const decode = (s) => s?.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');

// 1. robots.txt, sitemap, llms.txt
const robots = await get(`${BASE}/robots.txt`);
if (robots.status !== 200 || !/Sitemap:/i.test(robots.text)) problems.push("robots.txt missing or has no Sitemap line");
if (/Disallow:\s*\/\s*$/m.test(robots.text)) problems.push("robots.txt blocks the whole site");
const llms = await get(`${BASE}/llms.txt`);
if (llms.status !== 200) problems.push(`/llms.txt returns ${llms.status}`);

const sitemap = await get(`${BASE}/sitemap.xml`);
const urls = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) problems.push("sitemap.xml has no URLs");
notes.push(`Sitemap URLs: ${urls.length}`);

// 2. Every sitemap page
const internalLinks = new Set();
const titles = new Map();
for (const url of urls) {
  const path = url.replace(/^https?:\/\/[^/]+/, "") || "/";
  const r = await get(url.replace(/^https?:\/\/[^/]+/, BASE));
  if (r.status !== 200) {
    problems.push(`${path}: returns ${r.status}${r.location ? ` -> ${r.location}` : ""} (sitemap pages must return 200)`);
    continue;
  }
  const h = r.text;
  const title = decode(pick(h, /<title[^>]*>([^<]*)<\/title>/));
  const desc = decode(pick(h, /<meta name="description" content="([^"]*)"/));
  const canonical = pick(h, /<link rel="canonical" href="([^"]+)"/);
  const h1s = (h.match(/<h1[\s>]/g) || []).length;
  const robotsMeta = pick(h, /<meta name="robots" content="([^"]*)"/) || "";

  if (!title) problems.push(`${path}: no <title>`);
  else if (title.length > 60) problems.push(`${path}: title is ${title.length} characters (max 60): "${title}"`);
  if (title && titles.has(title)) problems.push(`${path}: same title as ${titles.get(title)}`);
  if (title) titles.set(title, path);
  if (!desc) problems.push(`${path}: no meta description`);
  else if (desc.length > 160) problems.push(`${path}: description is ${desc.length} characters (max 160)`);
  if (h1s !== 1) problems.push(`${path}: ${h1s} <h1> tags (want exactly 1)`);
  if (!canonical) problems.push(`${path}: no canonical`);
  else if (canonical.replace(/\/$/, "") !== url.replace(/\/$/, "")) problems.push(`${path}: canonical points to ${canonical}`);
  if (/noindex/i.test(robotsMeta)) problems.push(`${path}: is in the sitemap but marked noindex`);
  if (!/property="og:image"/.test(h)) problems.push(`${path}: no og:image`);
  for (const m of h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { problems.push(`${path}: invalid JSON-LD`); }
  }
  for (const m of h.matchAll(/href="(\/[^"#?]*)/g)) {
    if (!/^\/(_next|api)\//.test(m[1])) internalLinks.add(m[1]);
  }
}

// 3. Broken internal links (anything linked from a page must not 404)
for (const link of internalLinks) {
  const r = await get(`${BASE}${link}`);
  if (r.status >= 400 || r.status === 0) problems.push(`Broken internal link ${link} (${r.status})`);
}
notes.push(`Internal links checked: ${internalLinks.size}`);

// 4. Host rules: http -> https in one hop
const http = await get(BASE.replace("https://", "http://") + "/");
if (![301, 302, 307, 308].includes(http.status)) problems.push(`http:// does not redirect to https:// (got ${http.status})`);

const date = new Date().toLocaleDateString("en-GB", { timeZone: "Europe/London" });
const report = [
  `# SEO health check: ${date}`,
  "",
  `Site: ${BASE}`,
  "",
  ...notes.map((n) => `- ${n}`),
  "",
  problems.length ? `## ${problems.length} problem(s) to fix` : "## No problems found",
  "",
  ...problems.map((p) => `- ${p}`),
  "",
].join("\n");

fs.writeFileSync("seo-report.md", report);
console.log(report);
process.exit(problems.length ? 1 : 0);
