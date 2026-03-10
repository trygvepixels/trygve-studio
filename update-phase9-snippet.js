const mongoose = require("mongoose");
const fs = require("fs");
const dotenv = fs
  .readFileSync(".env", "utf8")
  .split("\n")
  .reduce((acc, line) => {
    const [key, ...rest] = line.split("=");
    if (key && rest.length > 0) acc[key] = rest.join("=").trim();
    return acc;
  }, {});

process.env = { ...process.env, ...dotenv };

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    content: String,
  },
  { strict: false },
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

async function forceSnippetUpdate() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");

    const feeBlog = await Blog.findOne({
      urlSlug:
        "how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide",
    });
    if (feeBlog) {
      const dateStamp = `
<div style="background-color: #FEF3C7; border-left: 4px solid #F59E0B; padding: 12px 16px; margin-bottom: 24px; border-radius: 4px;">
  <p style="color: #92400E; margin: 0; font-weight: 500; font-size: 0.9rem;">
    ⏰ <strong>Last Updated:</strong> March 2026 (Reflects current market rates in Lucknow and Pan-India)
  </p>
</div>
`;
      if (!feeBlog.content.includes("Last Updated:")) {
        feeBlog.content = dateStamp + feeBlog.content;
        await feeBlog.save();
        console.log(
          "Injected 'Last Updated' datestamp into Fee Guide Blog to force re-crawl.",
        );
      } else {
        console.log("Datestamp already exists in Fee Guide Blog.");
      }
    } else {
      console.log("Fee Guide Blog not found.");
    }

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

forceSnippetUpdate();
