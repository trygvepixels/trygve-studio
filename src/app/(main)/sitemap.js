// src/app/sitemap.js

import { getBlogs, getProjects } from "../../lib/api";

export default async function sitemap() {
  const baseUrl = "https://trygvestudio.com";

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
  ];

  // ✅ Fetch blogs from API
  const blogs = await getBlogs();

  // ✅ Map blogs into sitemap entries
  const blogPostPages = Array.isArray(blogs)
    ? blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: new Date(
          blog.updatedAt || blog.createdAt || blog.publishedAt || new Date()
        ),
        changeFrequency: "daily",
        priority: 0.7,
      }))
    : [];

  // ✅ Fetch projects from API
  const projects = await getProjects();

  // ✅ Map projects into sitemap entries
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

  return [...staticPages, ...blogPostPages, ...projectPages];
}
