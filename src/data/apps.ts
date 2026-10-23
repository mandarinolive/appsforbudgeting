// App facts. Pricing was checked on each app's official site on Oct 22, 2026 (see `source`).
// Rules: no ratings, no user counts, no testimonials. Only what the official site or help center says.
export const CHECKED = 'Oct 2026';
export const CHECKED_ISO = '2026-10-22';

export type App = {
  slug: string;
  name: string;
  url: string; // official site
  source: string; // where the pricing was verified
  status: 'active' | 'discontinued';
  summary: string; // one line: what it does
  pricing: string; // full pricing sentence
  priceShort: string; // for tables
  free: 'Free' | 'Free plan' | 'Free trial only' | 'Paid' | 'n/a';
  platforms: string[];
  bankSync: 'Yes' | 'Optional' | 'Paid plan' | 'No' | 'n/a';
  style: string;
  bestFor: string[];
  families?: string; // why it may or may not suit couples/families with kids
  sharing?: string; // verified partner/household sharing statement
  pros: string[];
  cons: string[];
  // Referral/affiliate link. Rendered with rel="sponsored noopener" + a visible disclosure (src/components/ReferralCta.astro).
  referral?: { url: string; cta: string; terms: string; source: string };
};

export const APPS: App[] = [
  {
    slug: 'ynab', name: 'YNAB (You Need A Budget)', url: 'https://www.ynab.com', source: 'https://www.ynab.com/pricing',
    status: 'active', summary: 'Zero-based budgeting app where you assign every dollar a job before you spend it.',
    pricing: '$14.99 per month or $109 per year (USD, plus tax where applicable), after a 34-day free trial.',
    priceShort: '$14.99/mo or $109/yr', free: 'Free trial only', platforms: ['Web', 'iOS', 'Android'], bankSync: 'Optional', style: 'Zero-based',
    bestFor: ['Zero-based budgeters', 'People who want a strict method'],
    sharing: 'One YNAB subscription can be shared with partners and family, up to six people, at no extra cost.',
    families: 'Good for couples who want to plan irregular kid costs (childcare, birthdays, camps) ahead of time, if both partners buy into the method.',
    pros: ['A long free trial (34 days)', 'A clear budgeting method with lots of official teaching material', 'You can enter transactions by hand or connect accounts'],
    cons: ['One of the pricier apps', 'The method takes time to learn', 'Less about investments and net worth'],
  },
  {
    slug: 'monarch', name: 'Monarch Money', url: 'https://www.monarch.com', source: 'https://www.monarch.com/pricing',
    status: 'active', summary: 'All-in-one money app: budgets, spending, investments, net worth and goals with automatic account syncing.',
    pricing: '$14.99 per month or $99.99 per year, with a 7-day free trial.',
    priceShort: '$14.99/mo or $99.99/yr', free: 'Free trial only', platforms: ['Web', 'iOS', 'Android'], bankSync: 'Yes', style: 'Category / flexible',
    bestFor: ['Couples sharing finances', 'Former Mint users', 'People who want budgets and net worth in one place'],
    sharing: 'Household members join free under one subscription. Each gets their own login, and everyone sees all connected accounts (accounts can’t be hidden from a member).',
    families: 'A common pick for couples: one shared view of accounts, budgets and goals like a college fund or a bigger home.',
    pros: ['Budgets, investments and net worth in one app', 'Flexible or category budgeting', 'Household members can share one account'],
    cons: ['No free plan after the trial', 'Relies on account connections, which can occasionally break'],
    referral: {
      url: 'https://monarch.com/referral/a3psi1mkn7?r_source=copy',
      cta: 'Get 50% off your first year of Monarch',
      terms: 'Annual Core plan, signed up and billed on the web (not via the App Store or Google Play, and not Plus or monthly plans).',
      source: 'https://help.monarch.com/hc/en-us/articles/360058914191-Referral-Rewards',
    },
  },
  {
    slug: 'copilot-money', name: 'Copilot Money', url: 'https://www.copilot.money', source: 'https://www.copilot.money/',
    status: 'active', summary: 'Polished spending, budget and investment tracker that auto-categorizes transactions and learns your patterns.',
    pricing: '$95 per year (shown as $7.92 per month), with a monthly option and a free trial.',
    priceShort: '$95/yr', free: 'Free trial only', platforms: ['iPhone', 'iPad', 'Mac', 'Web'], bankSync: 'Yes', style: 'Automated',
    bestFor: ['Apple users', 'People who want tracking more than a strict method'],
    families: 'Works well if every adult in the house uses Apple devices or the web; there is no Android app.',
    pros: ['Automatic categorization that improves as you use it', 'Budgets with rollovers', 'Investments and real estate alongside spending'],
    cons: ['No Android app', 'No free plan after the trial'],
  },
  {
    slug: 'quicken-simplifi', name: 'Quicken Simplifi', url: 'https://www.quicken.com/products/simplifi/', source: 'https://www.quicken.com/products/simplifi/',
    status: 'active', summary: 'Spending-plan app from Quicken that starts with income, subtracts bills and shows what is left to spend.',
    pricing: '$6.99 per month, billed annually. Quicken was showing a first-year discount to $3.99 per month when we checked.',
    priceShort: '$6.99/mo billed yearly', free: 'Paid', platforms: ['Web', 'iOS', 'Android'], bankSync: 'Yes', style: 'Spending plan',
    bestFor: ['Beginners', 'Former Mint users', 'People who want a low price'],
    sharing: 'Quicken says you can share a Simplifi account with someone else.',
    families: 'A low-cost shared spending plan for a busy household that wants a daily "left to spend" number.',
    pros: ['Low price', 'Shows how much is left to spend per day', 'Supports zero-based, envelope and 50/30/20 styles'],
    cons: ['Billed annually', 'No free plan'],
  },
  {
    slug: 'everydollar', name: 'EveryDollar', url: 'https://www.ramseysolutions.com/ramseyplus/everydollar', source: 'https://www.ramseysolutions.com/ramseyplus/everydollar',
    status: 'active', summary: 'Ramsey Solutions’ zero-based budget app, built around paying off debt.',
    pricing: 'Free version with manual entry. Premium costs $79.99 per year or $17.99 per month after a 14-day free trial.',
    priceShort: 'Free; Premium $79.99/yr', free: 'Free plan', platforms: ['Web', 'iOS', 'Android'], bankSync: 'Paid plan', style: 'Zero-based',
    bestFor: ['Debt payoff', 'Beginners', 'Ramsey Baby Steps followers'],
    families: 'The free version is a simple way for a couple to start a monthly zero-based budget without paying anything.',
    pros: ['A genuinely free version', 'Simple monthly zero-based setup', 'Tied to a debt-payoff plan'],
    cons: ['Bank connection needs Premium', 'Monthly Premium price is high', 'Built around one budgeting philosophy'],
  },
  {
    slug: 'empower', name: 'Empower Personal Dashboard', url: 'https://www.empower.com', source: 'https://www.empower.com/affiliates',
    status: 'active', summary: 'Free dashboard for net worth, investments, retirement planning and spending, from wealth manager Empower.',
    pricing: 'The Personal Dashboard is free. Empower also sells paid advisory services.',
    priceShort: 'Free', free: 'Free', platforms: ['Web', 'iOS', 'Android'], bankSync: 'Yes', style: 'Net worth',
    bestFor: ['Investors', 'Retirement planning', 'Tracking net worth'],
    families: 'Better for the long view (retirement, college savings, net worth) than for day-to-day family budgeting.',
    pros: ['Free', 'Strong investment and retirement tools', 'All accounts in one place'],
    cons: ['Budgeting is basic', 'Empower may market its paid advisory services to users'],
  },
  {
    slug: 'pocketguard', name: 'PocketGuard', url: 'https://pocketguard.com', source: 'https://pocketguard.com/pricing/',
    status: 'active', summary: 'Spending app that shows how much is safe to spend after bills, goals and necessities.',
    pricing: 'Premium costs $12.99 per month, $74.99 per year, or $149.99 once for lifetime access, with a 7-day free trial.',
    priceShort: '$12.99/mo, $74.99/yr or $149.99 lifetime', free: 'Free trial only', platforms: ['iOS', 'Android', 'Web'], bankSync: 'Yes', style: 'Automated',
    bestFor: ['Overspenders', 'People who want one "safe to spend" number'],
    families: 'Useful if the main goal is to stop overspending between paychecks.',
    pros: ['Simple "safe to spend" view', 'Lifetime purchase option', 'Available on web and mobile'],
    cons: ['Less control than zero-based apps', 'Works best with bank connections'],
  },
  {
    slug: 'goodbudget', name: 'Goodbudget', url: 'https://goodbudget.com', source: 'https://goodbudget.com/help/billing/subscribe-to-goodbudget/',
    status: 'active', summary: 'Digital envelope budgeting that syncs across devices, built for sharing a budget.',
    pricing: 'Free plan (10 regular envelopes, 1 account, 2 devices, 1 year of history). Plus costs $8 per month or $70 per year. Premium costs $10 per month or $80 per year and adds US bank sync and 5 devices.',
    priceShort: 'Free; Premium $10/mo or $80/yr', free: 'Free plan', platforms: ['Web', 'iOS', 'Android'], bankSync: 'Paid plan', style: 'Envelope',
    bestFor: ['Couples', 'Envelope budgeters', 'People who prefer manual entry'],
    sharing: 'One budget syncs across devices: 2 on the free plan, 5 on Premium.',
    families: 'Envelopes map well to family categories like childcare, diapers and kids’ activities, and two partners can share one budget for free.',
    pros: ['A free plan built for sharing between two devices', 'Envelope method is easy to explain to a partner', 'Bank sync available on Premium (US)'],
    cons: ['Free plan is limited to 10 envelopes', 'Manual entry unless you pay for Premium'],
  },
  {
    slug: 'rocket-money', name: 'Rocket Money', url: 'https://www.rocketmoney.com', source: 'https://www.rocketmoney.com/learn/personal-finance/how-much-does-rocket-money-cost',
    status: 'active', summary: 'Tracks spending and subscriptions, helps cancel ones you don’t need, and offers bill negotiation.',
    pricing: 'Free version. Premium is "choose your price", typically $7 to $14 per month, and Premium+ costs $15 per month. Bill negotiation charges 35% to 60% of the first year’s savings, which you choose.',
    priceShort: 'Free; Premium about $7–$14/mo', free: 'Free plan', platforms: ['iOS', 'Android', 'Web'], bankSync: 'Yes', style: 'Automated',
    bestFor: ['Cutting subscriptions', 'Beginners', 'Lowering bills'],
    families: 'Helpful for finding forgotten subscriptions after a new baby or a move, but lighter on planning.',
    pros: ['Free version', 'Finds recurring subscriptions and bills', 'Optional bill negotiation'],
    cons: ['Budgeting is lighter than dedicated budget apps', 'Bill negotiation fee is a share of your savings'],
  },
  {
    slug: 'tiller', name: 'Tiller', url: 'https://tiller.com', source: 'https://tiller.com/pricing/',
    status: 'active', summary: 'Feeds your bank transactions into Google Sheets or Excel so you can budget in a spreadsheet.',
    pricing: '$99 per year after a 30-day free trial.',
    priceShort: '$99/yr', free: 'Free trial only', platforms: ['Google Sheets', 'Microsoft Excel'], bankSync: 'Yes', style: 'Spreadsheet',
    bestFor: ['Spreadsheet lovers', 'Power users'],
    families: 'Great if one partner loves spreadsheets; less friendly for a partner who wants a phone app.',
    pros: ['Full control in your own spreadsheet', 'Automatic daily transaction feeds', 'No ads'],
    cons: ['No dedicated mobile app experience', 'You build or customize the budget yourself'],
  },
  {
    slug: 'lunch-money', name: 'Lunch Money', url: 'https://lunchmoney.app', source: 'https://lunchmoney.app/pricing',
    status: 'active', summary: 'Web-first budgeting and spending tracker known for multicurrency support and an open API.',
    pricing: '$10 per month after a 30-day trial. An annual plan is also offered.',
    priceShort: '$10/mo', free: 'Free trial only', platforms: ['Web'], bankSync: 'Optional', style: 'Category',
    bestFor: ['Multiple currencies', 'Freelancers', 'Developers'],
    families: 'Most useful for households that earn or spend in more than one currency.',
    pros: ['Strong multicurrency support', 'All features included in one plan', 'Developer API'],
    cons: ['Web-first', 'No free plan'],
  },
  {
    slug: 'actual-budget', name: 'Actual Budget', url: 'https://actualbudget.org', source: 'https://actualbudget.org/',
    status: 'active', summary: 'Free, open-source, local-first envelope budgeting app you can self-host.',
    pricing: 'Free and open source. You run it yourself or use a paid third-party host such as PikaPods.',
    priceShort: 'Free (self-host)', free: 'Free', platforms: ['Web', 'Desktop'], bankSync: 'Optional', style: 'Envelope',
    bestFor: ['Privacy', 'Developers', 'People who want to own their data'],
    families: 'A free envelope budget for a technical household that wants full control of its data.',
    pros: ['Free and open source', 'Local-first with optional end-to-end encryption', 'Envelope budgeting'],
    cons: ['Setup takes some technical comfort', 'Bank sync depends on third-party providers'],
  },
  {
    slug: 'moneywiz', name: 'MoneyWiz', url: 'https://www.wiz.money', source: 'https://www.wiz.money/pricing',
    status: 'active', summary: 'Full-featured personal finance manager with budgets, reports and bank sync.',
    pricing: 'Standard costs $29.99 per year. Premium, which adds bank sync, costs $59.99 per year or $5.99 per month.',
    priceShort: '$29.99–$59.99/yr', free: 'Paid', platforms: ['iOS', 'macOS'], bankSync: 'Paid plan', style: 'Category',
    bestFor: ['Power users', 'Detailed reports'],
    pros: ['Lots of features and reports', 'Cloud sync between devices', 'Bank sync on Premium'],
    cons: ['Current version is iOS and macOS', 'Can feel complex for casual users'],
  },
  {
    slug: 'spendee', name: 'Spendee', url: 'https://www.spendee.com', source: 'https://www.spendee.com/pricing',
    status: 'active', summary: 'Visual budget and expense tracker with shared wallets.',
    pricing: 'Free Basic plan. Plus costs $1.99 per month or $14.99 per year. Premium, which adds bank sync, costs $5.99 per month or $35.99 per year. Paid plans start with a 7-day free trial.',
    priceShort: '$1.99–$5.99/mo', free: 'Free plan', platforms: ['iOS', 'Android', 'Web'], bankSync: 'Paid plan', style: 'Category',
    bestFor: ['Shared wallets', 'International users'],
    sharing: 'Spendee’s plans are built around saving and tracking money together with friends and family.',
    families: 'Shared wallets make it easy for two partners to log household spending in one place.',
    pros: ['Low price', 'Shared wallets', 'Bank sync on Premium'],
    cons: ['Bank coverage varies by country', 'Less planning depth than zero-based apps'],
  },
  {
    slug: 'buddy', name: 'Buddy', url: 'https://buddy.download', source: 'https://buddy.download/',
    status: 'active', summary: 'Friendly, design-focused budgeting app with shared budgets.',
    pricing: 'Free to try, with a paid subscription in the app. The price isn’t listed on the website.',
    priceShort: 'Free to try', free: 'Free trial only', platforms: ['iOS'], bankSync: 'n/a', style: 'Category',
    bestFor: ['Simple budgets', 'Couples and roommates'],
    sharing: 'You can invite a partner or roommate to a budget and sync transactions between you.',
    families: 'An approachable shared budget for couples on iPhone.',
    pros: ['Simple setup', 'Shared budgets with a partner', 'Customizable categories'],
    cons: ['Pricing not published on the website', 'Focused on iPhone'],
  },
  {
    slug: 'honeydue', name: 'Honeydue', url: 'https://www.honeydue.com', source: 'https://www.honeydue.com/',
    status: 'active', summary: 'Money app built for couples: shared view of accounts, bills and spending, with chat.',
    pricing: 'Free to download.',
    priceShort: 'Free', free: 'Free', platforms: ['iOS', 'Android'], bankSync: 'Yes', style: 'Category',
    bestFor: ['Couples'],
    sharing: 'Each partner chooses what to share.',
    families: 'Built for two partners from day one, with control over what each person shares.',
    pros: ['Free', 'Designed for couples', 'Choose what to share'],
    cons: ['Lighter budgeting tools', 'Mobile only'],
  },
  {
    slug: 'zeta', name: 'Zeta', url: 'https://help.acorns.com/hc/en-us/articles/Why-did-Zeta-join-Acorns', source: 'https://help.acorns.com/hc/en-us/articles/Why-did-Zeta-join-Acorns',
    status: 'discontinued', summary: 'Former joint-account and budgeting app for couples. It shut down, and its team joined Acorns.',
    pricing: 'Not available. Zeta closed all accounts on May 9, 2025.',
    priceShort: 'Discontinued', free: 'n/a', platforms: [], bankSync: 'n/a', style: 'n/a',
    bestFor: [],
    families: 'If you used Zeta, look at Honeydue, Monarch or Goodbudget for a shared budget, and a regular bank for a joint account.',
    pros: [], cons: ['Discontinued: accounts closed May 9, 2025'],
  },
  {
    slug: 'buxfer', name: 'Buxfer', url: 'https://www.buxfer.com', source: 'https://www.buxfer.com/pricing/',
    status: 'active', summary: 'Budgeting with forecasting and planning tools, up to investments and net worth on higher tiers.',
    pricing: 'Free plan. Plus costs $9.99 per month or $95.88 per year. Pro costs $14.99 per month or $155.88 per year. Prime costs $23.99 per month or $251.88 per year.',
    priceShort: 'Free; paid from $7.99/mo yearly', free: 'Free plan', platforms: ['Web', 'iOS', 'Android'], bankSync: 'Yes', style: 'Forecasting',
    bestFor: ['Forecasting', 'Power users'],
    pros: ['Free plan', 'Cash-flow forecasting', 'Several tiers'],
    cons: ['Higher tiers get expensive', 'More complex than simple apps'],
  },
  {
    slug: 'toshl', name: 'Toshl Finance', url: 'https://toshl.com', source: 'https://toshl.com/pricing/',
    status: 'active', summary: 'Playful expense tracker and budget app with strong multicurrency and file import.',
    pricing: 'Free plan (2 accounts, 2 budgets). Paid plans are Pro (manual entry) and Medici (adds bank sync). The prices aren’t shown on the page without signing in.',
    priceShort: 'Free; paid plans', free: 'Free plan', platforms: ['Web', 'iOS', 'Android'], bankSync: 'Paid plan', style: 'Category',
    bestFor: ['Multiple currencies', 'Students'],
    pros: ['Free plan', 'Imports many file types', 'Bank sync on Medici'],
    cons: ['Free plan is limited to 2 accounts and 2 budgets', 'Prices not shown publicly'],
  },
  {
    slug: 'wallet-by-budgetbakers', name: 'Wallet by BudgetBakers', url: 'https://budgetbakers.com/en/', source: 'https://budgetbakers.com/en/',
    status: 'active', summary: 'Budget and spending app with bank sync in many countries and a separate tool for splitting shared costs.',
    pricing: 'Free trial of the full app, then a paid plan. The price isn’t listed on the website.',
    priceShort: 'Free trial', free: 'Free trial only', platforms: ['Web', 'iOS', 'Android'], bankSync: 'Yes', style: 'Category',
    bestFor: ['International users', 'Europe'],
    pros: ['Bank sync in many countries', 'Separate ShareCost tool for splitting expenses'],
    cons: ['Price not published on the website'],
  },
];

export const ACTIVE = APPS.filter((a) => a.status === 'active');
export const bySlug = (s: string) => APPS.find((a) => a.slug === s)!;
