function stripHtml(value = "") {
  return String(value || "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/\s+/g, " ")
    .trim();
}

export function createHeadingId(text = "", usedIds = new Map()) {
  const baseId =
    stripHtml(text)
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "section";

  const currentCount = usedIds.get(baseId) || 0;
  usedIds.set(baseId, currentCount + 1);

  return currentCount === 0 ? baseId : `${baseId}-${currentCount + 1}`;
}

export function extractHeadingsFromEditorJs(content) {
  if (!content || !Array.isArray(content.blocks)) return [];

  const usedIds = new Map();

  return content.blocks
    .filter((block) => block?.type === "header" && block?.data?.text)
    .map((block) => {
      const text = stripHtml(block.data.text);
      if (!text) return null;

      return {
        id: createHeadingId(text, usedIds),
        text,
        level: Number(block.data.level) || 2,
      };
    })
    .filter(Boolean);
}

export function extractHeadingsFromHtml(html = "") {
  if (!html) return [];

  const usedIds = new Map();
  const matches = html.matchAll(/<h([2-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi);

  return Array.from(matches)
    .map((match) => {
      const text = stripHtml(match[2]);
      if (!text) return null;

      return {
        id: createHeadingId(text, usedIds),
        text,
        level: Number(match[1]) || 2,
      };
    })
    .filter(Boolean);
}

export function addIdsToHtmlHeadings(html = "") {
  if (!html) return "";

  const usedIds = new Map();

  return html.replace(/<h([2-6])\b([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, level, attrs = "", innerHtml = "") => {
    if (/\sid\s*=/i.test(attrs)) return match;

    const text = stripHtml(innerHtml);
    if (!text) return match;

    const headingId = createHeadingId(text, usedIds);
    return `<h${level}${attrs} id="${headingId}">${innerHtml}</h${level}>`;
  });
}
