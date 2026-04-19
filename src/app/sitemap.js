import { getBlogs, getProjects, getServices } from "../lib/api";
import { pillars } from "../data/pillars";
import { interiorDesignCities } from "../data/interiorDesignCities";

// Revalidate sitemap every 2 days (48 hours = 172800 seconds)
// This ensures new blog posts are automatically included in the sitemap
export const revalidate = 172800;

const indexedInteriorCitySlugs = new Set(["lucknow", "kanpur", "delhi"]);

export default async function sitemap() {
  const baseUrl = "https://trygvestudio.com";

  // Fixed date for static pages — update this when you actually change static pages
  const staticLastModified = new Date("2026-04-20");

  // 1. Static Pages (removed duplicate blog entries — they're already in dynamic section)
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/price-calculator`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services/architect-near-me`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/bim-outsourcing-services`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Static city-specific blog posts (file-based, not in DB)
    {
      url: `${baseUrl}/blogs/designing-luxury-homes-in-south-delhi-2026-trends`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/best-architects-in-gomti-nagar-lucknow-guide`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs/modern-interior-design-kanpur-civil-lines-guide`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // 2. Specific Service Landing Pages (These have their own folders and specific content)
  // We define these separately to avoid duplication with dynamic service data
  const serviceLandingSlugs = [
    "architects-in-lucknow",
    "architecture-firms-lucknow",
    "luxury-architecture-design-lucknow",
    "turnkey-construction-companies-lucknow",
    "architects-in-gomti-nagar",
    "architects-in-sushant-golf-city",
    "3d-walkthrough-company-lucknow",
  ];

  const serviceLandingPages = serviceLandingSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: staticLastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 2a. Interior Design City Pages
  const interiorDesignCityPages = interiorDesignCities
    .filter((city) => indexedInteriorCitySlugs.has(city.citySlug))
    .map((city) => ({
      url: `${baseUrl}/services/interior-design/${city.citySlug}`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  // 3. Dynamic Blogs
  const blogs = await getBlogs();
  const blogPostPages = Array.isArray(blogs)
    ? blogs
        .map((blog) => ({
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

  // 6. Resource Pillars
  const pillarPages = pillars.map((pillar) => ({
    url: `${baseUrl}/resources/${pillar.slug}`,
    lastModified: staticLastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...serviceLandingPages,
    ...interiorDesignCityPages,
    ...blogPostPages,
    ...projectPages,
    ...dynamicServicePages,
    ...pillarPages,
  ];
}
