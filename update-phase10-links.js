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

const CTA_BLOCK = `
<div style="background-color: #234D7E; color: white; padding: 24px; border-radius: 12px; margin-top: 32px; margin-bottom: 32px; text-align: center;">
  <h3 style="color: white; margin-top: 0;">Plan Your Budget Today</h3>
  <p style="opacity: 0.9; margin-bottom: 20px;">Get a real-time estimate for your project using our 2026 Lucknow Price Calculator.</p>
  <a href="/price-calculator" style="background-color: white; color: #234D7E; padding: 12px 24px; border-radius: 6px; font-weight: bold; text-decoration: none; display: inline-block;">Calculate Construction Cost →</a>
</div>
`;

async function injectPhase10CTAs() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");

    const targetSlugs = [
      "from-permit-to-plinth-budgeting-for-lda-sanction-fees-in-lucknows-2026-market",
      "lucknow-real-estate-2026-why-lda-approval-costs-are-changing-and-how-to-prepare",
      "how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide"
    ];

    for (const slug of targetSlugs) {
      const blog = await Blog.findOne({ urlSlug: slug });
      if (blog) {
        if (!blog.content.includes("/price-calculator")) {
          blog.content += CTA_BLOCK;
          await blog.save();
          console.log(`Injected CTA into blog: ${slug}`);
        } else {
          console.log(`CTA already exists in blog: ${slug}`);
        }
      } else {
        console.log(`Blog not found: ${slug}`);
      }
    }

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

injectPhase10CTAs();
