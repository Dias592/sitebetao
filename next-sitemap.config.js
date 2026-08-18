/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://essenzabrindes.com.br",
  generateRobotsTxt: true,
  trailingSlash: true,
  changefreq: "weekly",
  robotsTxtOptions: {
    policies: [
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "Googlebot-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    let priority = 0.7;
    if (path === "/") priority = 1.0;
    else if (path.startsWith("/categorias/") && path !== "/categorias/") priority = 0.9;
    else if (path === "/categorias/") priority = 0.9;
    else if (path.startsWith("/produtos/")) priority = 0.8;
    else if (path === "/blog/") priority = 0.8;
    else if (path.startsWith("/blog/")) priority = 0.7;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
