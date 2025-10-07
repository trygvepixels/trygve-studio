// src/app/sitemap.js

import { getBlogs } from '../../lib/api';

export default async function sitemap() {
  const baseUrl = 'https://trygvestudio.com';

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/conatct-us`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // ✅ Fetch blogs from API
  const blogs = await getBlogs();

  // ✅ Map blogs into sitemap entries
  const blogPostPages = Array.isArray(blogs)
    ? blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.slug}`, // use slug, not id
        lastModified: new Date(
          blog.updatedAt || blog.createdAt || blog.publishedAt || new Date()
        ),
        changeFrequency: 'daily',
        priority: 0.7,
      }))
    : [];

  return [...staticPages, ...blogPostPages];
}