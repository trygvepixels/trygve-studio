export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/static/",
          "/lp",
          "/thankyou",
          "/thank-you",
        ],
      },
      // AI Search Bots — explicitly allowed for citation visibility in
      // ChatGPT, Perplexity, Claude, Google AI Overviews, etc.
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: "https://trygvestudio.com/sitemap.xml",
    // AI-readable site summary: https://trygvestudio.com/llms.txt
  };
}
