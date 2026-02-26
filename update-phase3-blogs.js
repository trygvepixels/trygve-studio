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
    metaTitle: String,
    metaDescription: String,
  },
  { strict: false },
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

async function updatePhase3Blogs() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");

    const updates = [
      {
        slug: "lucknow-real-estate-2026-why-lda-approval-costs-are-changing-and-how-to-prepare",
        newTitle: "LDA Map Approval Charges in Lucknow [2026 Official Guide]",
        newDesc:
          "Discover the exact 2026 LDA map approval fees, compounding charges, and FAR rules for residential and commercial plots in Lucknow. Calculate your costs now.",
      },
      {
        slug: "from-permit-to-plinth-budgeting-for-lda-sanction-fees-in-lucknows-2026-market",
        newTitle: "How Much Does LDA Map Sanction Cost? (2026 Budgeting Guide)",
        newDesc:
          "Stop guessing your LDA sanction fees. Here is a complete breakdown of map approval costs, development charges, and architect fees in Lucknow for 2026.",
      },
      {
        slug: "false-ceiling-cost-per-sq-ft-in-lucknow-2026-pricing-guide",
        newTitle: "False Ceiling Cost in Lucknow per Sq.Ft [2026 Rates]",
        newDesc:
          "Find exact 2026 per sq ft rates for POP, Gypsum, and Wooden false ceilings in Lucknow. Compare material costs and labor charges for your interior design project.",
      },
    ];

    for (const update of updates) {
      const blog = await Blog.findOne({ urlSlug: update.slug });
      if (blog) {
        blog.metaTitle = update.newTitle;
        blog.metaDescription = update.newDesc;
        await blog.save();
        console.log(`Updated: ${update.slug}`);
      } else {
        console.log(`Not Found: ${update.slug}`);
      }
    }

    console.log("Phase 3 Blog updates completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

updatePhase3Blogs();
