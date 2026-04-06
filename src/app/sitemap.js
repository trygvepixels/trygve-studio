import { getBlogs, getProjects, getServices } from "../lib/api";
import { pillars } from "../data/pillars";
import { interiorDesignCities } from "../data/interiorDesignCities";

// Revalidate sitemap every 2 days (48 hours = 172800 seconds)
// This ensures new blog posts are automatically included in the sitemap
export const revalidate = 172800;

// Blog slugs that are 301-redirected to service pages — exclude from sitemap
const redirectedBlogSlugs = [
  "how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide",
  "from-permit-to-plinth-budgeting-for-lda-sanction-fees-in-lucknows-2026-market",
  "why-hiring-the-best-residential-architects-in-lucknow-saves-you-20percent-on-long-term-construction-costs",
  "lucknow-real-estate-2026-why-lda-approval-costs-are-changing-and-how-to-prepare",
  "false-ceiling-cost-per-sq-ft-in-lucknow-2026-pricing-guide",
  "marble-vs-marble-finish-tiles-best-budget-luxury-choice-for-homes-in-2026",
  "modern-bedroom-design-trends-in-india-for-2026-or-trygve-studio",
  "dream-home-blueprint-7-secrets-to-finding-the-best-residential-architects-in-lucknow-for-your-2024-build",
  "affordable-luxury-interior-trends-for-indian-homes-in-2026",
  "beyond-blueprints-how-bim-saves-homeowners-20percent-on-hidden-construction-costs",
  "the-ultimate-checklist-for-choosing-the-best-architect-in-lucknow",
  "best-architects-and-interior-designers-in-lucknow-or-trygve-studio",
  "how-to-find-the-best-residential-architects-in-lucknow-for-a-turnkey-project",
];

export default async function sitemap() {
  const baseUrl = "https://trygvestudio.com";

  // Fixed date for static pages — update this when you actually change static pages
  const staticLastModified = new Date("2026-04-06");

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
  const interiorDesignCityPages = interiorDesignCities.map((city) => ({
    url: `${baseUrl}/services/interior-design/${city.citySlug}`,
    lastModified: staticLastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 3. Dynamic Blogs — filter out 301-redirected slugs to save crawl budget
  const blogs = await getBlogs();
  const blogPostPages = Array.isArray(blogs)
    ? blogs
        .filter((blog) => {
          const slug = blog.urlSlug || blog.slug;
          return !redirectedBlogSlugs.includes(slug);
        })
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
