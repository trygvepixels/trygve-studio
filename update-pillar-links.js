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

async function addPillarLinks() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");

    const slugs = [
      "lucknow-real-estate-2026-why-lda-approval-costs-are-changing-and-how-to-prepare",
      "from-permit-to-plinth-budgeting-for-lda-sanction-fees-in-lucknows-2026-market",
      "how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide",
      "false-ceiling-cost-per-sq-ft-in-lucknow-2026-pricing-guide",
    ];

    const ctaHtml = `
<div style="background-color: #F4F1EC; padding: 24px; border-radius: 8px; margin: 32px 0; border-left: 4px solid #B7893C;">
  <h3 style="margin-top: 0; color: #000000; font-size: 1.25rem;">Before You Build: Read The Ultimate 2026 Guide</h3>
  <p style="color: #4B5563; margin-bottom: 16px;">Planning to construct a home in Lucknow? We've compiled absolutely everything you need to know—from exact material costs to navigating LDA bylaws—into one massive central guide.</p>
  <a href="/the-ultimate-guide-to-building-in-lucknow" style="display: inline-block; background-color: #ffffff; color: #000000; border: 1px solid #000000; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: 500;">Read: The Ultimate Guide to Building in Lucknow →</a>
</div>
`;

    for (const slug of slugs) {
      const blog = await Blog.findOne({ urlSlug: slug });
      if (blog) {
        if (
          !blog.content.includes("/the-ultimate-guide-to-building-in-lucknow")
        ) {
          blog.content = blog.content + ctaHtml;
          await blog.save();
          console.log(`Injected Pillar Link into: ${slug}`);
        } else {
          console.log(`Pillar Link already exists in: ${slug}`);
        }
      }
    }

    console.log("Pillar Links injected into top blogs successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

addPillarLinks();
