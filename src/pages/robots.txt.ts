const AI_BOTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Googlebot', 'Bingbot', 'Applebot', 'Applebot-Extended',
  'CCBot', 'Meta-ExternalAgent', 'Amazonbot', 'DuckAssistBot', 'MistralAI-User', 'cohere-ai', 'YouBot',
];
export function GET() {
  const body = [
    '# AI and search crawlers are welcome here.',
    ...AI_BOTS.map((b) => `User-agent: ${b}\nAllow: /\n`),
    'User-agent: *',
    'Allow: /',
    '',
    'Sitemap: https://appsforbudgeting.com/sitemap-index.xml',
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
