# External CMS Integration - Complete Guide

## ✅ System Status: READY

Your blog system is now fully configured to receive and display blog posts from your external CMS with all image metadata.

---

## 📋 What Was Implemented

### 1. **Database Model Updated**

The `Blog` model (`/src/models/Blog.js`) now includes:

- `featuredImage` - Main hero image URL
- `imageUrl` - Alternative image URL
- `imageAlt` - SEO-friendly alt text
- `imageAttribution` - Photo credit text
- `imagePhotographer` - Photographer name
- `imagePhotographerUrl` - Photographer profile link
- `imageSource` - Source platform (e.g., "pexels")
- `source` - Tracks which CMS sent the post

### 2. **CMS Receiver API (`/api/cms-receiver`)**

- ✅ Receives POST requests from external CMS
- ✅ Maps all image fields automatically
- ✅ Sanitizes content (removes citations `[2][5]`, garbled text)
- ✅ Applies beautiful Tailwind styling to HTML
- ✅ Saves to MongoDB with all metadata

### 3. **Frontend Display**

- ✅ **BlogsClientUI** - Shows hero image with attribution
- ✅ **BlogCard** - Displays featured images in listings
- ✅ **Blogs Page** - Passes all image fields to cards

---

## 🔄 How to Import Blogs from External CMS

### Expected Data Format

Your external CMS should POST to `/api/cms-receiver` with this format:

```json
{
  "title": "Best Interior Design In Dubai",
  "content": "<p>Your HTML content here...</p>",
  "featuredImage": "https://images.pexels.com/photos/.../photo.jpeg",
  "imageUrl": "https://images.pexels.com/photos/.../photo.jpeg",
  "imageAlt": "modern interior design - Photo by Lydia Griva",
  "imageAttribution": "Photo by Lydia Griva on Pexels",
  "imagePhotographer": "Lydia Griva",
  "imagePhotographerUrl": "https://www.pexels.com/@iris",
  "imageSource": "pexels",
  "metaTitle": "Best Interior Design In Dubai",
  "metaDescription": "Discover Dubai's best interior design...",
  "urlSlug": "best-interior-design-in-dubai",
  "focusKeyword": ["best", "interior", "design", "dubai"],
  "faqs": [
    {
      "question": "What are the key elements...",
      "answer": "The best interior design combines luxury..."
    }
  ],
  "schemaMarkup": "{\"@context\":\"https://schema.org\"...}",
  "category": "Commercial Spaces",
  "author": "AI SEO Strategy Engine",
  "source": "Antigravity-SEO-CMS"
}
```

### 🎯 To Import a Blog:

**Option 1: Re-send from External CMS (Recommended)**

1. Go to your external CMS
2. Re-publish the blog post
3. It will automatically POST to your `/api/cms-receiver` endpoint
4. All image fields will be saved correctly

**Option 2: Manual API Call**

```bash
curl -X POST http://localhost:3000/api/cms-receiver \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Your Blog Title",
    "featuredImage": "https://your-image-url.jpg",
    ... other fields ...
  }'
```

---

## 🖼️ Image Field Priority

The system uses a smart fallback chain for images:

```javascript
// Priority order:
1. featuredImage (from external CMS)
2. imageUrl (alternative from CMS)
3. image (legacy field)
4. /placeholder-hero.jpg (fallback)
```

---

## 🐛 Troubleshooting

### Problem: Blog has no image

**Cause:** The blog was posted BEFORE we added image field support.

**Solutions:**

**A. Re-import from CMS (Best)**

- Re-send the blog from your external CMS
- It will overwrite with all new fields

**B. Update via API**

```javascript
// Update existing blog
await fetch(`http://localhost:3000/api/blogs/your-blog-slug`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    featuredImage: "https://your-image-url.jpg",
    imageUrl: "https://your-image-url.jpg",
    imageAlt: "Your alt text",
    imageAttribution: "Photo credit",
    imagePhotographer: "Photographer name",
    imagePhotographerUrl: "https://photographer-url",
    imageSource: "pexels",
  }),
});
```

**C. Check Database Directly**

```javascript
// In MongoDB, check if image fields exist
db.blogs.findOne({ urlSlug: "your-slug" });
```

---

## 📸 Image Attribution Display

When `imageAttribution` is provided, it appears in the top-right corner of the hero image:

```
┌─────────────────────────────────────┐
│                 [Photo credit text] │
│                                     │
│        BLOG HERO IMAGE              │
│                                     │
│     Your Blog Title                 │
└─────────────────────────────────────┘
```

---

## ✨ Content Sanitization

All HTML content from your CMS is automatically:

1. **Cleaned** - Citations like `[2][5]` removed
2. **Secured** - `<script>` tags and dangerous code blocked
3. **Styled** - Tailwind CSS classes applied to all elements
4. **Optimized** - Garbled text and artifacts removed

See `CONTENT_SANITIZATION_EXAMPLE.md` for details.

---

## 🔍 API Endpoints Reference

### GET `/api/blogs`

Returns all blogs with image fields:

```json
{
  "success": true,
  "blogs": [
    {
      "_id": "...",
      "title": "...",
      "featuredImage": "...",
      "imageUrl": "...",
      "imageAlt": "...",
      ...
    }
  ]
}
```

### GET `/api/blogs/[slug]`

Returns single blog by URL slug:

```json
{
  "_id": "...",
  "title": "...",
  "featuredImage": "...",
  "content": "<sanitized HTML>",
  ...
}
```

### POST `/api/cms-receiver`

Receives new blogs from external CMS

- Sanitizes content
- Saves all image fields
- Returns: `{ success: true, id, slug, url }`

### PUT `/api/blogs/[slug]`

Updates existing blog:

```javascript
{
  method: 'PUT',
  body: JSON.stringify({
    featuredImage: "...",
    imageAlt: "..."
  })
}
```

---

## 🎨 Frontend Components

### BlogsClientUI.jsx

- Displays blog detail page
- Shows hero image with attribution
- Renders sanitized HTML content
- Displays FAQs

### BlogCard.jsx

- Shows blog in listings
- Uses image fallback chain
- Displays thumbnail with alt text

### Blogs Page (/blogs/page.jsx)

- Lists all blogs
- Filters by category
- Search functionality
- Passes image fields to BlogCard

---

## 📦 Files Modified/Created

### Created:

- `/src/lib/dbConnect.js` - Database connection
- `/src/lib/contentSanitizer.js` - Content cleaning utility
- `CONTENT_SANITIZATION_EXAMPLE.md` - Sanitization docs
- `update-blog-images.mjs` - Utility to update images
- `list-blogs.mjs` - List all blogs utility

### Modified:

- `/src/models/Blog.js` - Added image fields
- `/src/app/(main)/api/cms-receiver/route.js` - Maps image fields
- `/src/components/BlogsClientUI.jsx` - Uses new image fields
- `/src/components/BlogCard.jsx` - Image fallback chain
- `/src/app/(main)/blogs/page.jsx` - Passes image data

---

## 🚀 Next Steps

1. **Re-send your blog** from the external CMS
2. **Verify** at `http://localhost:3000/blogs/best-interior-design-in-dubai`
3. **Check** the hero image loads correctly
4. **Confirm** image attribution shows in top-right

---

## ✅ Verification Checklist

- [ ] External CMS is configured to POST to `/api/cms-receiver`
- [ ] Blog includes all image fields in POST data
- [ ] Blog appears in `/blogs` listing
- [ ] Blog detail page shows hero image
- [ ] Image attribution displays correctly
- [ ] Content is sanitized (no `[2][5]` citations)
- [ ] Tailwind styling is applied to HTML content

---

## 💡 Tips

1. **Always include alt text** for SEO and accessibility
2. **Use high-quality images** (min 1200px wide for hero)
3. **Provide attribution** for stock photos
4. **Test locally** before pushing to production
5. **Monitor console** for any import errors

---

**Status: ✅ System Ready**
**Last Updated:** 2026-01-10
**Version:** 1.0
