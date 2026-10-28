// Head-to-head pages. Used for internal links on /compare and on each app page.
export const COMPARISONS = [
  { path: '/monarch-vs-ynab', label: 'Monarch vs YNAB', slugs: ['monarch', 'ynab'] },
  { path: '/copilot-vs-monarch', label: 'Copilot vs Monarch', slugs: ['copilot-money', 'monarch'] },
  { path: '/simplifi-vs-monarch', label: 'Simplifi vs Monarch', slugs: ['quicken-simplifi', 'monarch'] },
  { path: '/rocket-money-vs-monarch', label: 'Rocket Money vs Monarch', slugs: ['rocket-money', 'monarch'] },
  { path: '/everydollar-vs-monarch', label: 'EveryDollar vs Monarch', slugs: ['everydollar', 'monarch'] },
  { path: '/honeydue-vs-monarch', label: 'Honeydue vs Monarch', slugs: ['honeydue', 'monarch'] },
  { path: '/ynab-vs-everydollar', label: 'YNAB vs EveryDollar', slugs: ['ynab', 'everydollar'] },
];
export const comparisonsFor = (slug: string) => COMPARISONS.filter((c) => c.slugs.includes(slug));
