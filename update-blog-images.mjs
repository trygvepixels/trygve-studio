/**
 * Quick script to update an existing blog with image fields
 * Run with: node update-blog-images.mjs
 */

const blogSlug = "best-interior-design-in-dubai";

const imageData = {
  featuredImage:
    "https://images.pexels.com/photos/35590401/pexels-photo-35590401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  imageUrl:
    "https://images.pexels.com/photos/35590401/pexels-photo-35590401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  imageAlt: "modern interior design - Photo by Lydia Griva",
  imageAttribution: "Photo by Lydia Griva on Pexels",
  imagePhotographer: "Lydia Griva",
  imagePhotographerUrl: "https://www.pexels.com/@iris",
  imageSource: "pexels",
};

async function updateBlog() {
  try {
    console.log(`🔄 Updating blog: ${blogSlug}`);

    const response = await fetch(
      `http://localhost:3000/api/blogs/${blogSlug}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(imageData),
      }
    );

    const result = await response.json();

    if (result.success) {
      console.log("✅ Blog updated successfully!");
      console.log("📸 Image fields added:");
      console.log("  - featuredImage:", imageData.featuredImage);
      console.log("  - imageAlt:", imageData.imageAlt);
      console.log("  - imageAttribution:", imageData.imageAttribution);
    } else {
      console.error("❌ Failed to update blog:", result.error);
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

updateBlog();
