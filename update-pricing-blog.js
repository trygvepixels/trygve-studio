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
    metaTitle: String,
    metaDescription: String,
  },
  { strict: false },
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

async function updateBlog() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");

    const urlSlug =
      "how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide";
    const blog = await Blog.findOne({ urlSlug });

    if (!blog) {
      console.log("Blog not found!");
      process.exit(1);
    }

    blog.metaTitle =
      "How Much Do Architects Charge in India? (2026 Fees) | Trygve Studio";
    blog.metaDescription =
      "Find exact 2026 architect fees in India per sq ft. Compare residential & commercial costs in Lucknow, Delhi & more. Calculate your budget instantly.";

    const ctaHtml = `
<div style="background-color: #F4F1EC; padding: 24px; border-radius: 8px; margin: 32px 0; border-left: 4px solid #000000;">
  <h3 style="margin-top: 0; color: #000000; font-size: 1.25rem;">Want an Exact Cost Estimate for Your Project?</h3>
  <p style="color: #4B5563; margin-bottom: 16px;">Stop guessing. Use our new 2026 Architecture & Construction Calculator tailored for Lucknow's local rates, material costs, and LDA approvals.</p>
  <a href="/price-calculator" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 500;">Calculate Your Exact Budget Now →</a>
</div>
`;

    if (!blog.content.includes("/price-calculator")) {
      blog.content = blog.content + ctaHtml;
      console.log("Injected CTA into content.");
    } else {
      console.log("CTA already exists in content.");
    }

    await blog.save();
    console.log("Blog updated successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

updateBlog();
