#!/usr/bin/env node
/**
 * IndexNow submitter.
 *
 * Instantly tells Bing, Yandex, and other IndexNow engines that URLs on
 * danopirhory.com are new or changed, so they recrawl in minutes instead
 * of waiting for the next scheduled crawl. Google reads IndexNow signals
 * too, though it doesn't commit to acting on them.
 *
 * Ownership is proven by a key file hosted at the site root:
 *   https://www.danopirhory.com/<INDEXNOW_KEY>.txt
 * (that file lives at public/<key>.txt and must be deployed live first).
 *
 * Usage:
 *   node scripts/indexnow.mjs                        # submit every URL in the sitemap
 *   node scripts/indexnow.mjs <url> [<url> ...]      # submit specific URLs
 *
 * Example:
 *   node scripts/indexnow.mjs https://www.danopirhory.com/resources/dscr-loans-north-carolina
 *
 * Tip: run it after each deploy that adds or meaningfully changes a page.
 */

const HOST = "www.danopirhory.com";
// IndexNow key: set INDEXNOW_KEY and serve the same value at /<key>.txt in public/.
const KEY = process.env.INDEXNOW_KEY;
if (!KEY) {
  console.error("Set INDEXNOW_KEY before running this script.");
  process.exit(1);
}
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

/** Pull every <loc> URL out of the live sitemap. */
async function urlsFromSitemap() {
  const res = await fetch(SITEMAP_URL, { headers: { "User-Agent": "indexnow-submitter" } });
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status} ${res.statusText}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  return [...new Set(locs)];
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length ? args : await urlsFromSitemap();

  if (!urlList.length) {
    console.error("No URLs to submit.");
    process.exit(1);
  }

  // IndexNow accepts up to 10,000 URLs per request.
  console.log(`Submitting ${urlList.length} URL(s) to IndexNow...`);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });

  // 200 = accepted, 202 = accepted (validation pending). Both are success.
  if (res.status === 200 || res.status === 202) {
    console.log(`Success (HTTP ${res.status}). URLs queued for recrawl.`);
  } else {
    const body = await res.text().catch(() => "");
    console.error(`IndexNow returned HTTP ${res.status}. ${body}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
