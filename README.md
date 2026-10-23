# appsforbudgeting.com

Independent budgeting-app directory (19 active apps + 1 discontinued), positioned toward families and couples with young kids.
Astro (static) → bundled into a single Cloudflare Worker, same approach as `/workspace/oliverli-xyz`.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
```

- App facts live in `src/data/apps.ts`. Rules: pricing only from the official site/help center (record the URL in `source`
  and bump `CHECKED`), **no ratings, user counts or testimonials**.
- Blog posts: Markdown in `src/content/blog/<slug>.md` (`title`, `description`, `pubDate`, optional `updatedDate`, `draft`).
- Site constants + Web Analytics beacon token: `src/data/site.ts`.

## Deploy

`npm run build` = `astro build` + `scripts/bundle-worker.mjs`, which embeds `dist/` into `build/worker.js`
(clean URLs, www → apex 301, 404 page, ETags, security headers, **any path segment starting with `.` returns 404**,
dotfiles are never bundled).

- **Wrangler:** `npx wrangler login` once, then `npm run deploy`.
- **Grok Bot / Cloudflare connector:** `npm run build`, then run the Cloudflare MCP `execute` tool with
  `code: "$file:/workspace/appsforbudgeting/build/deploy-via-connector.js"`. It PUTs the Worker module `appsforbudgeting`.

Custom domains `appsforbudgeting.com` and `www.appsforbudgeting.com` were already attached to the Worker; no DNS changes.

## Rollback

Before v1 (Oct 22 2026), the live deployment was **version `d6f2d7a5-e73c-4051-80db-56b66e0e1954`**
(deployment `005709bd-bcde-4035-8010-4de9a6686939`, wrangler, May 2 2026; a static-assets Worker serving the old single
`index.html`). A copy of that page is in `legacy-index.html`.

To roll back, either:
- Dashboard: Workers & Pages → `appsforbudgeting` → Deployments → pick version `d6f2d7a5…` → Rollback, or
- Connector `execute`:
  ```js
  async () => cloudflare.request({ method: 'POST', path: `/accounts/${accountId}/workers/scripts/appsforbudgeting/deployments`,
    body: { strategy: 'percentage', versions: [{ version_id: 'd6f2d7a5-e73c-4051-80db-56b66e0e1954', percentage: 100 }] } })
  ```
- Wrangler: `npx wrangler rollback d6f2d7a5-e73c-4051-80db-56b66e0e1954 --name appsforbudgeting`

v1 went live Oct 22 2026, 10:07 PM PT as version `5583cba7-00a1-4962-a77e-da7f152b998b` (deployment `3ac064e6-914b-4e72-9f12-881624cc86d9`, git `ebd64f0`+).

Note the old version also served `/.git/*` publicly; rolling back brings that back.

## Analytics

Cloudflare Web Analytics site for `appsforbudgeting.com` (site tag `990cd18521484eea98c2a71d7baf6701`, auto-install off);
the beacon is included in `src/layouts/Base.astro`. Still to do (needs Oliver's sign-in): Google Search Console and
Bing Webmaster Tools verification, then submit `https://appsforbudgeting.com/sitemap-index.xml`.

## AEO / GEO

Per-page title/description/canonical, Open Graph + Twitter cards (`public/og.png`, regenerate with
`google-chrome --headless=new --window-size=1200,630 --screenshot=public/og.png scripts/og.html`), JSON-LD (WebSite,
ItemList on home/compare/families, SoftwareApplication + FAQPage + BreadcrumbList on app pages, FAQPage on the families hub,
Blog/BlogPosting), `/sitemap-index.xml`, `/robots.txt` (explicitly allows AI crawlers), `/rss.xml`, `/llms.txt`, no client JS
apart from the analytics beacon.

### Deploy log
- Oct 22 2026, 10:59 PM PT: removed the meta post `/blog/why-we-rebuilt`; Blog nav/footer, `/blog` index and `/rss.xml` hidden while there are no posts (all 301 → `/` via `REDIRECTS` in `scripts/bundle-worker.mjs`). **Live version `b5be8dd8-0694-48a8-9a28-e3453a178a17`** (deployment `22418509-12f9-4c7b-a1d6-b27bb7e3dbaa`). Previous version `5583cba7-00a1-4962-a77e-da7f152b998b` is the rollback.
- Blog rule: only reader-useful posts answering specific long-tail questions; never meta/behind-the-scenes posts. When the first real post lands, restore `src/pages/blog/index.astro` and `src/pages/rss.xml.ts` from git history, re-add the nav/RSS links, and drop the `/blog` and `/rss.xml` redirects.
