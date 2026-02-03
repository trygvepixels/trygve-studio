/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      // 301 Permanent Redirects for SEO Cleanup
      {
        source: "/work",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/featured-projects",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/conatct-us",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/blogs/:slug",
        permanent: true,
      },
      {
        source: "/jobs",
        destination: "/career",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
