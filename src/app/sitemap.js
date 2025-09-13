// src/app/sitemap.js

import { getBlogs } from '../lib/api'; // Assuming you have a function to fetch blog data

export default async function sitemap() {
  const baseUrl = 'https://trygvestudio.com'; // Replace with your actual domain

  // Fetch all your static pages
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`, // Assuming you have an about-us page
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`, // Assuming you have a projects page
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
        url: `${baseUrl}/featured-projects`, // Add your featured projects page
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: `${baseUrl}/jobs`, // Add your jobs page
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
    },
    // Add any other static pages here (e.g., contact, services, etc.)
  ];

  // Fetch all your dynamic blog posts
  // You need to replace `getBlogs` with your actual function to retrieve all blog post data
  // This function should return an array of objects, each with at least an `id` and `updatedAt` (or `createdAt`) property.
  const blogs = await getBlogs(); // This will call your backend API or database

  const blogPostPages = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.id}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt || new Date()), // Use actual last modified date if available
    changeFrequency: 'daily', // Or 'daily' if you update frequently
    priority: 0.7,
  }));

  return [...staticPages, ...blogPostPages];
}