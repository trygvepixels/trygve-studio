"use client";

import React from "react";

/** Utility: decode HTML entities safely */
function decodeHtmlEntities(str = "") {
  if (typeof window !== "undefined") {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }
  return str;
}

/** ✅ Redesigned EditorJsRenderer */
export default function EditorJsRenderer({ content }) {
  if (!content || !Array.isArray(content.blocks)) return null;

  return (
    <div className="max-w-7xl mx-auto space-y-8 text-gray-900 leading-relaxed [&_a]:text-blue-600 [&_a]:underline">
      {content.blocks.map((block) => {
        const { type, data, id } = block;

        switch (type) {
          /** Headers */
          case "header": {
            const Tag = `h${data.level || 2}`;
            const sizes = {
              1: "text-4xl",
              2: "text-3xl",
              3: "text-2xl",
              4: "text-xl",
              5: "text-lg",
              6: "text-base",
            };
            return (
              <Tag
                key={id}
                className={`${sizes[data.level] || "text-2xl"} font-semibold mt-8`}
                dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(data.text || "") }}
              />
            );
          }

          /** Paragraphs */
          case "paragraph": {
            if (!data.text) return null;
            return (
              <p
                key={id}
                className="text-base leading-7"
                dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(data.text) }}
              />
            );
          }

          /** Lists */
          case "list": {
            if (!Array.isArray(data.items)) return null;
            const Tag = data.style === "ordered" ? "ol" : "ul";
            const listClass =
              data.style === "ordered"
                ? "list-decimal ml-8 text-base leading-7"
                : "list-disc ml-8 text-base leading-7";

            return (
              <Tag key={id} className={listClass}>
                {data.items.map((item, i) => {
                  let value = "";
                  if (typeof item === "string") {
                    value = item;
                  } else if (typeof item === "object") {
                    value = item.text || item.content || "";
                  }
                  return (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(value) }}
                    />
                  );
                })}
              </Tag>
            );
          }

          /** Images */
          case "image": {
            const url = data?.file?.url || data?.url;
            if (!url) return null;
            return (
              <figure key={id} className="my-10">
                <img
                  src={url}
                  alt={data.caption || ""}
                  className="w-full max-h-[600px] object-contain rounded-xl shadow-lg"
                />
                {data.caption && (
                  <figcaption
                    className="text-sm text-center text-gray-600 mt-3 italic"
                    dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(data.caption) }}
                  />
                )}
              </figure>
            );
          }

          /** Tables */
          case "table": {
            if (!Array.isArray(data.content)) return null;
            return (
              <div key={id} className="overflow-x-auto my-10">
                <table className="table-auto w-full border-collapse border border-gray-400 text-base">
                  <tbody>
                    {data.content.map((row, i) => (
                      <tr key={i} className="even:bg-gray-50">
                        {row.map((cell, j) => (
                          <td
                            key={j}
                            className="border px-5 py-3"
                            dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(cell) }}
                          />
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          /** Quotes */
          case "quote": {
            if (!data.text) return null;
            return (
              <blockquote
                key={id}
                className="border-l-4 border-blue-600 pl-6 italic text-gray-800 text-lg bg-blue-50 p-4 rounded-lg"
              >
                <div dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(data.text) }} />
                {data.caption && (
                  <footer
                    className="mt-3 text-base text-blue-700 font-medium"
                    dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(data.caption) }}
                  />
                )}
              </blockquote>
            );
          }

          /** Default: skip unsupported blocks */
          default:
            return null;
        }
      })}
    </div>
  );
}
