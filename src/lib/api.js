// src/lib/api.js (Example - adjust based on your actual backend/database setup)

export async function getBlogs() {
  try {
    // This is an example. You need to adjust the endpoint and method
    // to match how you fetch all published blogs from your backend.
    const res = await fetch('https://trygvestudio.com/api/blogs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any necessary authentication headers here if your API requires it
      },
      // You might need to add revalidate options for ISR
      // next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    // Assuming your API returns an array of blog objects
    // Each blog object should ideally have an 'id' and a 'lastModified' or 'createdAt' field.
    return data;
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
    return []; // Return an empty array on error to prevent sitemap generation failure
  }
}