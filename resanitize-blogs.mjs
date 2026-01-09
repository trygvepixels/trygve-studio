/**
 * Re-sanitize all existing blog content to apply the updated sanitization
 * This will convert ** to <strong> tags for all existing blogs
 */

import { connectDB } from "./src/lib/mongodb.js";
import Blog from "./src/models/Blog.js";
import { sanitizeBlogContent } from "./src/lib/contentSanitizer.js";

async function resanitizeAllBlogs() {
  try {
    console.log("� Connecting to database...\n");
    await connectDB();

    console.log("📚 Fetching all blogs...\n");
    const blogs = await Blog.find({});

    console.log(`Found ${blogs.length} blog(s) to process\n`);

    let updated = 0;
    for (const blog of blogs) {
      if (blog.content && typeof blog.content === "string") {
        // Check if content has ** markers
        if (blog.content.includes("**")) {
          console.log(`🔧 Re-sanitizing: ${blog.title}`);

          // Re-sanitize the content
          blog.content = sanitizeBlogContent(blog.content);
          await blog.save();

          updated++;
          console.log(`   ✅ Updated\n`);
        } else {
          console.log(`⏭️  Skipping: ${blog.title} (no ** found)\n`);
        }
      }
    }

    console.log(
      `\n✅ Complete! Updated ${updated} out of ${blogs.length} blogs`
    );
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

resanitizeAllBlogs();
