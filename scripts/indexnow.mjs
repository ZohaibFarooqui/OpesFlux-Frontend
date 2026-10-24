// Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver
// and others share submissions). Free, no account needed: ownership is proved
// by the key file in /public. Bing's index also feeds ChatGPT search and Copilot.
//
// Usage: node scripts/indexnow.mjs [--changed-only]
//   --changed-only  submit only URLs whose sitemap <lastmod> is within the last 3 days

const SITE = "https://opesflux.devsandvisuals.com";
const KEY = "78c98359df29d9b0e7b47984168d72ca";
const changedOnly = process.argv.includes("--changed-only");

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
  loc: (m[1].match(/<loc>([^<]+)<\/loc>/) || [])[1],
  lastmod: (m[1].match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1],
}));

const cutoff = Date.now() - 3 * 24 * 60 * 60 * 1000;
const urls = entries
  .filter((e) => e.loc && e.loc.startsWith(SITE))
  .filter((e) => !changedOnly || (e.lastmod && new Date(e.lastmod).getTime() >= cutoff))
  .map((e) => e.loc);

if (urls.length === 0) {
  console.log("IndexNow: nothing to submit.");
  process.exit(0);
}

// Make sure the key file is live before submitting, or the submission is rejected.
const keyRes = await fetch(`${SITE}/${KEY}.txt`);
if (!keyRes.ok || (await keyRes.text()).trim() !== KEY) {
  console.error(`IndexNow: key file ${SITE}/${KEY}.txt is not live yet.`);
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  }),
});

// 200 = accepted, 202 = accepted and key validation pending.
console.log(`IndexNow: submitted ${urls.length} URL(s), response ${res.status}`);
if (res.status >= 400) {
  console.error(await res.text());
  process.exit(1);
}
