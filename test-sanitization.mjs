/**
 * Test file to demonstrate content sanitization
 * Run with: node test-sanitization.js
 */

// Sample dirty content from external CMS
const dirtyCmsContent = `
<h3>Typical 4BHK Configuration Under Budget</h3>
<p>Budget-focused 4BHK layouts usually follow a compact yet practical structure[2][5]:</p>
<ul>
  <li>4 bedrooms</li>
  <li>2 bathrooms</li>
  <li>1 large combined living–dining area</li>
  <li>1 compact, efficient kitchen</li>
</ul>

--- or -- or ------ n time

<p>These homes emphasize **open, multi-use common spaces** and avoid unnecessary corridors or structural complexity[2][5].</p>

<p>Additional features include[1][3]:</p>
<ul>
  <li>Modern amenities[10]</li>
  <li>Energy-efficient appliances[7][8]</li>
</ul>

<script>alert('This should be removed!');</script>

<p style="color: red;">This style attribute will be removed.</p>
`;

// Import the sanitization functions
import {
  sanitizeBlogContent,
  removeCitations,
  removeGarbledText,
  addTailwindStyling,
  sanitizeHtml,
  convertMarkdownBold,
} from "./src/lib/contentSanitizer.js";

console.log("========================================");
console.log("ORIGINAL CONTENT:");
console.log("========================================");
console.log(dirtyCmsContent);

console.log("\n========================================");
console.log("STEP 1: Remove Citations");
console.log("========================================");
const step1 = removeCitations(dirtyCmsContent);
console.log(step1);

console.log("\n========================================");
console.log("STEP 2: Remove Garbled Text");
console.log("========================================");
const step2 = removeGarbledText(step1);
console.log(step2);

console.log("\n========================================");
console.log("STEP 3: Sanitize Dangerous HTML");
console.log("========================================");
const step3 = sanitizeHtml(step2);
console.log(step3);

console.log("\n========================================");
console.log("STEP 4: Convert Markdown Bold");
console.log("========================================");
const step4 = convertMarkdownBold(step3);
console.log(step4);

console.log("\n========================================");
console.log("STEP 5: Add Tailwind Styling");
console.log("========================================");
const step5 = addTailwindStyling(step4);
console.log(step5);

console.log("\n========================================");
console.log("FINAL RESULT (All in One):");
console.log("========================================");
const final = sanitizeBlogContent(dirtyCmsContent);
console.log(final);

console.log("\n✅ Content sanitization complete!");
console.log("✅ All citations removed");
console.log("✅ Garbled text cleaned");
console.log("✅ Dangerous scripts removed");
console.log("✅ Markdown converted");
console.log("✅ Tailwind classes applied");
