import { getBlogs, getProjects, getServices } from "../../lib/api";

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
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
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

  // 2. Specific Service Landing Pages (Static folders)
  const serviceLandingPages = [
    {
      url: `${baseUrl}/services/architects-in-lucknow`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/interior-design-lucknow`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // 3. Dynamic Blogs
  const blogs = await getBlogs();
  const blogPostPages = Array.isArray(blogs)
    ? blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.urlSlug || blog.slug}`,
        lastModified: new Date(
          blog.lastUpdated || blog.updatedAt || blog.createdAt || new Date()
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
          project.updatedAt || project.createdAt || new Date()
        ),
        changeFrequency: "weekly",
        priority: 0.6,
      }))
    : [];

  // 5. Dynamic Services
  const servicesData = await getServices();
  const dynamicServicePages = Array.isArray(servicesData)
    ? servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(
          service.updatedAt || service.createdAt || new Date()
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
