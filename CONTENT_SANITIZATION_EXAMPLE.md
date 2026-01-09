# Content Sanitization System

This document explains how the blog content sanitization system works.

## Problem

External CMS systems often send content with:

- Citation references like `[2][5]` that need to be removed
- Garbled text like `--- or -- or ------ n time`
- Plain HTML without styling
- Potentially dangerous scripts

## Solution

The `contentSanitizer.js` utility provides comprehensive cleaning:

### Example Input (from CMS)

```html
<h3>Typical 4BHK Configuration Under Budget</h3>
<p>
  Budget-focused 4BHK layouts usually follow a compact yet practical
  structure[2][5]:
</p>
<ul>
  <li>4 bedrooms</li>
  <li>2 bathrooms</li>
  <li>1 large combined living–dining area</li>
  <li>1 compact, efficient kitchen</li>
</ul>

--- or -- or ------ n time

<p>
  These homes emphasize **open, multi-use common spaces** and avoid unnecessary
  corridors[2][5].
</p>
```

### Output (Cleaned & Styled)

```html
<h3 class="text-2xl font-semibold text-gray-800 mt-5 mb-3">
  Typical 4BHK Configuration Under Budget
</h3>
<p class="text-gray-700 leading-relaxed mb-4 text-[16px]">
  Budget-focused 4BHK layouts usually follow a compact yet practical structure:
</p>
<ul class="list-disc list-inside space-y-2 mb-4 ml-4 text-gray-700">
  <li class="mb-1 text-gray-700">4 bedrooms</li>
  <li class="mb-1 text-gray-700">2 bathrooms</li>
  <li class="mb-1 text-gray-700">1 large combined living–dining area</li>
  <li class="mb-1 text-gray-700">1 compact, efficient kitchen</li>
</ul>
<p class="text-gray-700 leading-relaxed mb-4 text-[16px]">
  These homes emphasize
  <strong class="font-bold text-gray-900">open, multi-use common spaces</strong>
  and avoid unnecessary corridors.
</p>
```

## Features

### 1. Citation Removal

Removes all patterns like:

- `[2]`
- `[5]`
- `[2][5]`
- `[123]`

### 2. Garbled Text Cleanup

Removes patterns like:

- `--- or -- or ------`
- `--- n time`
- Excessive whitespace

### 3. Security Sanitization

Removes dangerous elements:

- `<script>` tags
- `<iframe>` tags
- Event handlers (`onclick`, etc.)
- Inline styles

### 4. Tailwind CSS Styling

Automatically applies beautiful Tailwind classes to:

#### Headings

- `<h1>` → Large, bold, special font
- `<h2>` → Medium, semibold
- `<h3>` → Smaller, semibold
- `<h4>`, `<h5>`, `<h6>` → Progressive sizing

#### Text Elements

- `<p>` → Comfortable reading spacing
- `<strong>`, `<b>` → Bold with dark color
- `<em>`, `<i>` → Italic styling
- `<a>` → Blue with hover effects

#### Lists

- `<ul>` → Disc bullets with spacing
- `<ol>` → Numbered with spacing
- `<li>` → Proper margins

#### Other Elements

- `<blockquote>` → Left border, italic
- `<code>` → Gray background, monospace
- `<pre>` → Code block styling
- `<table>` → Professional table design
- `<img>` → Rounded corners, shadow

### 5. Markdown Conversion

Converts `**bold text**` to `<strong>bold text</strong>` automatically.

## Usage

### In Components

```javascript
import { sanitizeBlogContent } from "@/lib/contentSanitizer";

// Clean external CMS content
const cleanedHtml = sanitizeBlogContent(rawContent);

// Render safely
<div dangerouslySetInnerHTML={{ __html: cleanedHtml }} />;
```

### Individual Functions

```javascript
import {
  removeCitations,
  removeGarbledText,
  addTailwindStyling,
  sanitizeHtml,
} from "@/lib/contentSanitizer";

// Remove only citations
const noCitations = removeCitations(content);

// Remove only garbled text
const noGarbled = removeGarbledText(content);

// Add only styling
const styled = addTailwindStyling(content);

// Remove only dangerous HTML
const safe = sanitizeHtml(content);
```

## Integration Points

1. **BlogsClientUI.jsx** - Main blog display component uses `sanitizeBlogContent()`
2. **API Route** - Can sanitize before saving to database
3. **Blog Preview** - Clean content for previews

## Best Practices

✅ **Always sanitize external content** before rendering
✅ **Use the main `sanitizeBlogContent()` function** for complete cleaning
✅ **Test with various input formats** from your CMS
✅ **Review output** to ensure citations and garbled text are removed

❌ **Don't skip sanitization** even if content seems clean
❌ **Don't bypass security features** (script removal, etc.)
❌ **Don't add inline styles** - use Tailwind classes instead
