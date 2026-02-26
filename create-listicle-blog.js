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
    image: String,
    category: String,
    metaTitle: String,
    metaDescription: String,
    urlSlug: String,
    content: String,
    author: String,
    status: { type: String, default: "visible" },
  },
  { strict: false },
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

async function createListicleBlog() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB");

    const urlSlug = "top-10-architects-in-lucknow-2026";

    // Check if it already exists
    const existing = await Blog.findOne({ urlSlug });
    if (existing) {
      console.log("Blog already exists! Overwriting content...");
    }

    const blogContent = `
<p class="lead" style="font-size: 1.25rem; line-height: 1.75; color: #4B5563; margin-bottom: 2rem;">
  If you are searching for the <strong>best architects in Lucknow</strong> to build your dream home or commercial space, you are not alone. With the rapid expansion of Gomti Nagar Extension, Shaheed Path, and the upcoming ring road, choosing the right firm is the most critical decision you'll make in 2026.
</p>

<p>
  To save you hours of research, we've curated the ultimate list of the top 10 architecture firms in Lucknow. These firms are evaluated based on their portfolio quality, client reviews, LDA approval expertise, and turnkey capabilities.
</p>

<hr style="margin: 2.5rem 0; border-color: #E5E7EB;" />

<h2 style="font-size: 1.875rem; font-weight: 600; color: #234D7E; margin-bottom: 1rem;">1. Trygve Studio (#1 Recommended)</h2>
<p>
  <strong>Specialty:</strong> Luxury Residential Architecture, Turnkey Construction, Premium Interiors<br />
  <strong>Why they rank first:</strong> Trygve Studio is an ISO 9001:2015 certified firm that bridges the gap between high-end architectural design and flawless execution. Unlike firms that just hand over floor plans, Trygve Studio offers end-to-end <strong>turnkey construction</strong>, ensuring your project is completed precisely as designed, without contractor disputes.
</p>
<ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; list-style-type: disc;">
  <li><strong>Experience:</strong> Over 200+ successful projects delivered across Northern India.</li>
  <li><strong>Services:</strong> Maps & Planning, 3D Elevations, Structural Design, LDA Approvals, and Full Turnkey Construction.</li>
  <li><strong>Highlight:</strong> They are renowned for their transparent 2026 pricing and commitment to material honesty.</li>
</ul>

<div style="background-color: #F4F1EC; padding: 24px; border-radius: 8px; margin: 32px 0; border-left: 4px solid #234D7E;">
  <h3 style="margin-top: 0; color: #234D7E; font-size: 1.25rem;">Want to build with the best?</h3>
  <p style="color: #4B5563; margin-bottom: 16px;">Trygve Studio offers a free initial consultation to discuss your plot, budget, and design aspirations.</p>
  <a href="/price-calculator" style="display: inline-block; background-color: #234D7E; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 500;">Calculate Your 2026 Budget →</a>
</div>

<h2 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">2. A Plus Design (A+Design Architects)</h2>
<p>
  Founded by Ar. Anurag Soni in 2012, A Plus Design is a highly respected firm known for tackling large-scale government and commercial projects alongside residential designs. They emphasize cutting-edge technology and tailored design solutions.
</p>

<h2 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">3. ARCH-EN DESIGN</h2>
<p>
  With offices in both Lucknow and Delhi, ARCH-EN DESIGN is prominent for its focus on modern, eco-friendly, and sustainable architecture. They are a great choice if environmental consciousness is a primary driver for your project.
</p>

<h2 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">4. Greenline Architects (GLA)</h2>
<p>
  Established in 2006, Greenline Architects offers comprehensive consultancy services spanning luxury homes, commercial spaces, and Vastu-compliant designs. Their longevity in the Lucknow market speaks to their reliability.
</p>

<h2 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">5. Naksha Banwao</h2>
<p>
  As their name suggests, Naksha Banwao excels in producing stunning 3D elevations and creative, highly affordable floor plans. They are an excellent option for clients needing quick, reliable map-making services before approaching a builder.
</p>

<h2 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">6. Raghava Architects</h2>
<p>
  With over two decades of experience, Raghava Architects, led by Rajneesh Raghava, perfectly blends traditional cultural heritage with contemporary demands. Their meticulous attention to detail makes them a staple in Lucknow's architectural scene.
</p>

<h2 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">7. Pioneer Architects</h2>
<p>
  Founded in 2008 by Ar. Nitya Nand Pandey, Pioneer Architects delivers exceptional layout planning and house map services. They are deeply familiar with strictly adhering to local development guidelines.
</p>

<h2 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">8. Arch Design and Construction (ADC India)</h2>
<p>
  ADC specializes in balancing innovative residential design with practical project management. They are known for providing holistic building solutions from the ground up.
</p>

<h2 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">9. Design Arc Studio</h2>
<p>
  If you are looking for a firm that seamlessly integrates traditional Indian aesthetics into modern, functional spaces, Design Arc Studio offers highly customizable solutions tailored to the client's cultural preferences.
</p>

<h2 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-top: 2rem; margin-bottom: 1rem;">10. Studio 360</h2>
<p>
  Rounding out the top 10, Studio 360 focuses heavily on high-end, luxury residential projects and larger urban design layouts, bringing a cosmopolitan flair to Lucknow's residential sectors.
</p>

<hr style="margin: 2.5rem 0; border-color: #E5E7EB;" />

<h3 style="font-size: 1.5rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">How to Choose the Right Architect for You?</h3>
<p>
  While every firm on this list is highly capable, your choice depends heavily on your execution strategy. If you plan to hire separate map-makers, interior designers, and daily-wage contractors, firms specializing only in blueprints might suffice.
</p>
<p>
  However, if you want a guaranteed budget, single-point accountability, and a stress-free experience where the architect manages the entire build process, a <strong>Design + Build (Turnkey)</strong> firm like <strong><a href="/services/architecture-firms-lucknow" style="color: #234D7E; font-weight: 500; text-decoration: underline;">Trygve Studio</a></strong> is undeniably your best option for 2026.
</p>
    `;

    const blogData = {
      title: "Top 10 Architects in Lucknow (2026 Verified List)",
      urlSlug: urlSlug,
      category: "Guides",
      image: "https://trygvestudio.com/images/lucknow-building-guide.jpg",
      metaTitle: "10 Best Architects in Lucknow | 2026 Top Ranked List",
      metaDescription:
        "Looking for the best architects in Lucknow? We've curated the top 10 architecture firms, comparing reviews, luxury portfolios, and turnkey capabilities for 2026.",
      focusKeyword: [
        "best architects in lucknow",
        "top 10 architects in lucknow",
      ],
      author: "Trygve Studio",
      content: blogContent,
      schemaMarkup: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trygve Studio" },
          { "@type": "ListItem", position: 2, name: "A Plus Design" },
          { "@type": "ListItem", position: 3, name: "ARCH-EN DESIGN" },
          { "@type": "ListItem", position: 4, name: "Greenline Architects" },
          { "@type": "ListItem", position: 5, name: "Naksha Banwao" },
          { "@type": "ListItem", position: 6, name: "Raghava Architects" },
          { "@type": "ListItem", position: 7, name: "Pioneer Architects" },
          { "@type": "ListItem", position: 8, name: "ADC India" },
          { "@type": "ListItem", position: 9, name: "Design Arc Studio" },
          { "@type": "ListItem", position: 10, name: "Studio 360" },
        ],
      }),
    };

    if (existing) {
      await Blog.updateOne({ urlSlug }, { $set: blogData });
      console.log("Updated existing listicle blog!");
    } else {
      await Blog.create(blogData);
      console.log("Created new listicle blog!");
    }

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

createListicleBlog();
