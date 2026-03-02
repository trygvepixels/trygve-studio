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
    urlSlug: String,
    metaTitle: String,
    metaDescription: String,
  },
  { strict: false },
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

async function ctrHijack() {
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

    // Previous metaTitle: "Architect Fees in India 2026 | Exact Sq Ft Cost"
    // New aggressive title to hijack the "Impression Bank"
    blog.metaTitle =
      "[2026 Price List] Exact Architect Fees in India | Don't Overpay";
    blog.metaDescription =
      "Download the official 2026 guide for architect fees in India. Compare per sq ft rates for residential & commercial. Real Lucknow & Delhi pricing data.";

    await blog.save();
    console.log("CTR Hijack: Meta Title updated successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

ctrHijack();
