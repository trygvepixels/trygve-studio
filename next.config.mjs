/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.trygvestudio.com" }],
        destination: "https://trygvestudio.com/:path*",
        statusCode: 301,
      },
      // 301 Permanent Redirects for SEO Cleanup
      {
        source: "/work",
        destination: "/projects",
        statusCode: 301,
      },
      {
        source: "/gallery",
        destination: "/projects",
        statusCode: 301,
      },
      {
        source: "/featured-projects",
        destination: "/projects",
        statusCode: 301,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        statusCode: 301,
      },
      {
        source: "/conatct-us",
        destination: "/contact-us",
        statusCode: 301,
      },
      {
        source: "/blog/:slug",
        destination: "/blogs/:slug",
        statusCode: 301,
      },
      {
        source: "/jobs",
        destination: "/career",
        statusCode: 301,
      },
      {
        source: "/thank-you",
        destination: "/thankyou",
        statusCode: 301,
      },
      {
        source: "/interior-designer",
        destination: "/services/interior-design/lucknow",
        statusCode: 301,
      },
      {
        source: "/services/interior-design-lucknow",
        destination: "/services/interior-design/lucknow",
        statusCode: 301,
      },
      {
        source: "/servcies",
        destination: "/services",
        statusCode: 301,
      },
      {
        source: "/projct",
        destination: "/projects",
        statusCode: 301,
      },
      {
        source: "/projcts",
        destination: "/projects",
        statusCode: 301,
      },
      // Ranking Blogs 301 Redirects to Service Pages
      {
        source: "/blogs/how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide",
        destination: "/services/architects-in-lucknow",
        statusCode: 301,
      },
      {
        source: "/blogs/from-permit-to-plinth-budgeting-for-lda-sanction-fees-in-lucknows-2026-market",
        destination: "/services/turnkey-construction-companies-lucknow",
        statusCode: 301,
      },
      {
        source: "/blogs/why-hiring-the-best-residential-architects-in-lucknow-saves-you-20percent-on-long-term-construction-costs",
        destination: "/services/architects-in-lucknow",
        statusCode: 301,
      },
      {
        source: "/blogs/lucknow-real-estate-2026-why-lda-approval-costs-are-changing-and-how-to-prepare",
        destination: "/services/turnkey-construction-companies-lucknow",
        statusCode: 301,
      },
      {
        source: "/blogs/false-ceiling-cost-per-sq-ft-in-lucknow-2026-pricing-guide",
        destination: "/services/interior-design/lucknow",
        statusCode: 301,
      },
      {
        source: "/blogs/marble-vs-marble-finish-tiles-best-budget-luxury-choice-for-homes-in-2026",
        destination: "/services/interior-design/lucknow",
        statusCode: 301,
      },
      {
        source: "/blogs/modern-bedroom-design-trends-in-india-for-2026-or-trygve-studio",
        destination: "/services/interior-design/lucknow",
        statusCode: 301,
      },
      {
        source: "/blogs/dream-home-blueprint-7-secrets-to-finding-the-best-residential-architects-in-lucknow-for-your-2024-build",
        destination: "/services/architects-in-lucknow",
        statusCode: 301,
      },
      {
        source: "/blogs/affordable-luxury-interior-trends-for-indian-homes-in-2026",
        destination: "/services/interior-design/lucknow",
        statusCode: 301,
      },
      {
        source: "/blogs/beyond-blueprints-how-bim-saves-homeowners-20percent-on-hidden-construction-costs",
        destination: "/services/turnkey-construction-companies-lucknow",
        statusCode: 301,
      },
      {
        source: "/blogs/the-ultimate-checklist-for-choosing-the-best-architect-in-lucknow",
        destination: "/services/architects-in-lucknow",
        statusCode: 301,
      },
      {
        source: "/blogs/best-architects-and-interior-designers-in-lucknow-or-trygve-studio",
        destination: "/services/architects-in-lucknow",
        statusCode: 301,
      },
      {
        source: "/blogs/how-to-find-the-best-residential-architects-in-lucknow-for-a-turnkey-project",
        destination: "/services/turnkey-construction-companies-lucknow",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
