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

async function updateMobileTitles() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");

    // 1. LDA Cost Blog
    const ldaSlug =
      "lucknow-real-estate-2026-why-lda-approval-costs-are-changing-and-how-to-prepare";
    const ldaBlog = await Blog.findOne({ urlSlug: ldaSlug });
    if (ldaBlog) {
      ldaBlog.metaTitle = "Lucknow LDA Approval Costs 2026 | Full Guide";
      await ldaBlog.save();
      console.log("Updated LDA Blog title.");
    }

    // 2. Architect Fee Blog
    const feeSlug =
      "how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide";
    const feeBlog = await Blog.findOne({ urlSlug: feeSlug });
    if (feeBlog) {
      feeBlog.metaTitle = "Architect Fees in India 2026 | Exact Sq Ft Cost";
      await feeBlog.save();
      console.log("Updated Architect Fee Blog title.");
    }

    console.log("Mobile Meta Title Audit DB Updates completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

updateMobileTitles();
