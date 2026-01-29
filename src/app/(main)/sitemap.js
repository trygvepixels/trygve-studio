import { getBlogs, getProjects, getServices } from "../../lib/api";

// Revalidate sitemap every 2 days (48 hours = 172800 seconds)
// This ensures new blog posts are automatically included in the sitemap
export const revalidate = 172800;

export default async function sitemap() {
  const baseUrl = "https://trygvestudio.com";

  // 1. Static Pages
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/lp`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // 2. Specific Service Landing Pages (These have their own folders and specific content)
  // We define these separately to avoid duplication with dynamic service data
  const serviceLandingSlugs = [
    "architects-in-lucknow",
    "interior-design-lucknow",
  ];

  const serviceLandingPages = serviceLandingSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 3. Dynamic Blogs
  const blogs = await getBlogs();
  const blogPostPages = Array.isArray(blogs)
    ? blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.urlSlug || blog.slug}`,
        lastModified: new Date(
          blog.lastUpdated || blog.updatedAt || blog.createdAt || new Date(),
        ),
        changeFrequency: "daily",
        priority: 0.7,
      }))
    : [];

  // 4. Dynamic Projects
  const projects = await getProjects();
  const projectPages = Array.isArray(projects)
    ? projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(
          project.updatedAt || project.createdAt || new Date(),
        ),
        changeFrequency: "weekly",
        priority: 0.6,
      }))
    : [];

  // 5. Dynamic Services (Filter out those that have static landing pages to avoid duplicate content)
  const servicesData = await getServices();
  const dynamicServicePages = Array.isArray(servicesData)
    ? servicesData
        .filter((service) => !serviceLandingSlugs.includes(service.slug))
        .map((service) => ({
          url: `${baseUrl}/services/${service.slug}`,
          lastModified: new Date(
            service.updatedAt || service.createdAt || new Date(),
          ),
          changeFrequency: "monthly",
          priority: 0.7,
        }))
    : [];

  return [
    ...staticPages,
    ...serviceLandingPages,
    ...blogPostPages,
    ...projectPages,
    ...dynamicServicePages,
  ];
}
