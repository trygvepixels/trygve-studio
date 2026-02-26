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
      "luxurious-yet-affordable-a-guide-to-working-with-a-budget-interior-designer-in-lucknow";
    const blog = await Blog.findOne({ urlSlug });

    if (!blog) {
      console.log("Blog not found!");
      process.exit(1);
    }

    // Update Meta Title exactly to match intent
    blog.metaTitle =
      "Affordable Interior Designer in Lucknow | Exact Cost per Sq Ft";
    blog.metaDescription =
      "Find the best affordable interior designer in Lucknow without sacrificing quality. We break down 2026 costs per sq ft and show you how to budget. Use our calculator!";

    // Add FAQ schema + CTA into the content if it doesn't exist
    const ctaHtml = `
<div style="background-color: #F4F1EC; padding: 24px; border-radius: 8px; margin: 32px 0; border-left: 4px solid #000000;">
  <h3 style="margin-top: 0; color: #000000; font-size: 1.25rem;">Curious About Your Exact Interior Design Cost?</h3>
  <p style="color: #4B5563; margin-bottom: 16px;">Stop relying on vague online estimates. Use our 2026 Price Calculator to get an instant, honest quote for your Lucknow project.</p>
  <a href="/price-calculator" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 500;">Calculate Your Exact Budget Now →</a>
</div>

<h2>Frequently Asked Questions About Affordable Interior Design in Lucknow</h2>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How much does an affordable interior designer in Lucknow cost?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For a full home interior design, prices in Lucknow generally range from ₹2.5 Lakhs to ₹4.45 Lakhs. For design-only services, this can range from ₹70 to ₹150 per sq. ft."
    }
  }, {
    "@type": "Question",
    "name": "Can I get luxury interiors on a budget?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, by choosing smart materials like marble-finish vitrified tiles instead of real Italian marble, and by focusing the budget on high-impact areas like the living room."
    }
  }]
}
</script>
<p><strong>Q: How much does an affordable interior designer in Lucknow cost?</strong><br>A: For a full home interior design, prices in Lucknow generally range from ₹2.5 Lakhs to ₹4.45 Lakhs. For design-only services, this can range from ₹70 to ₹150 per sq. ft.</p>
<p><strong>Q: Can I get luxury interiors on a budget?</strong><br>A: Yes, by choosing smart materials like marble-finish vitrified tiles instead of real Italian marble, and by focusing the budget on high-impact areas like the living room.</p>
`;

    if (!blog.content.includes("application/ld+json")) {
      blog.content = blog.content + ctaHtml;
      console.log("Injected CTA and FAQs into content.");
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
