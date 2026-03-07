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

async function updateSnippets() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");

    // 1. Architect Fee Snippet
    const feeBlog = await Blog.findOne({
      urlSlug:
        "how-much-do-architects-charge-in-india-a-city-wise-breakdown-2026-guide",
    });
    if (feeBlog) {
      const feeSnippet = `
<div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; padding: 24px; border-radius: 8px; margin-bottom: 32px;">
  <h2 style="margin-top: 0; color: #0F172A; font-size: 1.5rem;">TL;DR: How Much Do Architects Charge in India? (Quick Answer)</h2>
  <ul style="color: #334155; margin-bottom: 0;">
    <li><strong>Percentage Basis:</strong> 5% to 15% of the total construction cost.</li>
    <li><strong>Per Square Foot (Design Only):</strong> ₹50 to ₹200 per sq. ft.</li>
    <li><strong>Per Square Foot (Design + Supervision):</strong> ₹150 to ₹500 per sq. ft.</li>
    <li><strong>Lump Sum Fees:</strong> Fixed amount based on project scope (e.g., ₹2 Lakhs for a Villa).</li>
    <li><strong>Interior Design Only:</strong> 8% to 20% of the interior execution budget.</li>
  </ul>
</div>
`;
      if (!feeBlog.content.includes("TL;DR: How Much Do Architects Charge")) {
        feeBlog.content = feeSnippet + feeBlog.content;
        await feeBlog.save();
        console.log("Injected TL;DR Snippet into Fee Guide Blog.");
      } else {
        console.log("Snippet already exists in Fee Guide Blog.");
      }
    } else {
      console.log("Fee Guide Blog not found.");
    }

    // 2. False Ceiling Snippet
    const ceilingBlog = await Blog.findOne({
      urlSlug: "false-ceiling-cost-per-sq-ft-in-lucknow-2026-pricing-guide",
    });
    if (ceilingBlog) {
      const ceilingSnippet = `
<div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; padding: 24px; border-radius: 8px; margin-bottom: 32px;">
  <h2 style="margin-top: 0; color: #0F172A; font-size: 1.5rem;">TL;DR: False Ceiling Cost per Sq. Ft. (Quick Answer)</h2>
  <ul style="color: #334155; margin-bottom: 0;">
    <li><strong>POP (Plaster of Paris) Ceiling:</strong> ₹65 to ₹105 per sq. ft.</li>
    <li><strong>Gypsum Board Ceiling:</strong> ₹75 to ₹120 per sq. ft.</li>
    <li><strong>PVC False Ceiling:</strong> ₹55 to ₹85 per sq. ft.</li>
    <li><strong>Wooden False Ceiling:</strong> ₹150 to ₹850+ per sq. ft.</li>
    <li><strong>Grid / Armstrong Ceiling:</strong> ₹60 to ₹90 per sq. ft.</li>
  </ul>
</div>
`;
      if (!ceilingBlog.content.includes("TL;DR: False Ceiling Cost")) {
        ceilingBlog.content = ceilingSnippet + ceilingBlog.content;
        await ceilingBlog.save();
        console.log("Injected TL;DR Snippet into False Ceiling Blog.");
      } else {
        console.log("Snippet already exists in False Ceiling Blog.");
      }
    } else {
      console.log("False Ceiling Blog not found.");
    }

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

updateSnippets();
