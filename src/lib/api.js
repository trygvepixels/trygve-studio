// src/lib/api.js (Example - adjust based on your actual backend/database setup)

export async function getBlogs() {
  try {
    const res = await fetch("https://trygvestudio.com/api/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    // The API returns { success: true, blogs: [...] }
    return data.blogs || [];
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
    return [];
  }
}

export async function getProjects() {
  try {
    const res = await fetch(
      "https://trygvestudio.com/api/all-projects?limit=100",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const resFeatured = await fetch(
      "https://trygvestudio.com/api/feature-projects?limit=100",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!res.ok || !resFeatured.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data = await res.json();
    const dataFeatured = await resFeatured.json();

    const normalItems = data.items || [];
    const featuredItems = dataFeatured.items || [];

    // Combine and remove duplicates based on slug
    const allProjects = [...normalItems, ...featuredItems];
    const uniqueProjects = Array.from(
      new Map(allProjects.map((p) => [p.slug, p])).values()
    );

    return uniqueProjects;
  } catch (error) {
    console.error("Error fetching projects for sitemap:", error);
    return [];
  }
}

export async function getServices() {
  try {
    const res = await fetch("https://trygvestudio.com/api/services?limit=100", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch services: ${res.status}`);
    }

    const data = await res.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching services for sitemap:", error);
    return [];
  }
}
