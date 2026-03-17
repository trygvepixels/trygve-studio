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
        destination: "/services/interior-design-lucknow",
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
