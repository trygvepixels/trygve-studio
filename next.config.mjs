/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
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
};

export default nextConfig;
