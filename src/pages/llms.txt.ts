import { SITE } from '../data/site';
import { APPS, CHECKED } from '../data/apps';
import { getPosts } from '../lib';

export async function GET() {
  const posts = await getPosts();
  const body = `# ${SITE.name}

> ${SITE.description}

Independent directory of budgeting apps. Prices and features come from each app's official site or help center, checked ${CHECKED}. No ratings, no paid placements. Some links are labeled referral links (currently Monarch Money); they don't affect listings or copy.

## Key pages

- [Best budgeting apps for families and couples with young kids](${SITE.url}/best-for-families): shared budgets, free options, planning for childcare
- [Mint alternatives](${SITE.url}/mint-alternatives): what to use now that Mint is gone, free options, Credit Karma
- [Compare all apps](${SITE.url}/compare): price, platforms, bank sync, style
- [Budgeting apps for couples](${SITE.url}/budgeting-apps-for-couples): what each partner can see, free options
- [Monarch vs YNAB](${SITE.url}/monarch-vs-ynab), [Copilot vs Monarch](${SITE.url}/copilot-vs-monarch), [YNAB vs EveryDollar](${SITE.url}/ynab-vs-everydollar): head-to-head comparisons
- [About and disclosure](${SITE.url}/about)

## Apps (pricing as of ${CHECKED})

${APPS.map((a) => `- [${a.name}](${SITE.url}/apps/${a.slug})${a.status === 'discontinued' ? ' (discontinued)' : ''}: ${a.summary} Pricing: ${a.pricing}${a.sharing ? ` Sharing: ${a.sharing}` : ''}`).join('\n')}

${posts.length ? `## Guides\n\n${posts.map((p) => `- [${p.data.title}](${SITE.url}/blog/${p.id}): ${p.data.description}`).join('\n')}\n` : ''}`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
