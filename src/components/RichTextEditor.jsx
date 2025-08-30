'use client';

import { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import Table from '@editorjs/table';

export default function RichTextEditor({
  defaultValue = {},
  onChange,
  onImageUpload, // (file: File) => Promise<string>
}) {
  const editorRef = useRef(null);
  const holderRef = useRef(null);
  const destroyingRef = useRef(false);

  useEffect(() => {
    if (!holderRef.current || editorRef.current || destroyingRef.current) return;

    let cancelled = false;

    const editor = new EditorJS({
      holder: holderRef.current,
      data: defaultValue || {},
      autofocus: true,
      readOnly: false,
      tools: {
        header: Header,
        list: List,
        table: Table,
        image: {
          class: ImageTool,
          config: {
            uploader: {
              async uploadByFile(file) {
                // Prefer parent-provided uploader (Cloudinary via BlogForm)
                if (onImageUpload) {
                  const url = await onImageUpload(file);
                  return { success: 1, file: { url } };
                }

                // Fallback: unsigned Cloudinary upload using NEXT_PUBLIC_* envs
                const fd = new FormData();
                fd.append('file', file);
                fd.append(
                  'upload_preset',
                  process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                );
                const res = await fetch(
                  `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/auto/upload`,
                  { method: 'POST', body: fd }
                );
                const data = await res.json();
                if (!res.ok) throw new Error(data?.error?.message || 'Upload failed');
                return { success: 1, file: { url: data.secure_url } };
              },
            },
          },
        },
      },

      onReady: () => {
        if (cancelled) return;

        // Paste & drag-drop image files → upload → insert
        const holder = holderRef.current;
        if (!holder) return;

        holder.addEventListener('paste', async (e) => {
          const file = [...(e.clipboardData?.items || [])]
            .map((it) => (it.kind === 'file' ? it.getAsFile() : null))
            .find(Boolean);
          if (file && file.type?.startsWith('image/')) {
            e.preventDefault();
            const res = await editor.configuration.tools.image.config.uploader.uploadByFile(file);
            if (res?.file?.url) {
              editor.blocks.insert('image', { file: { url: res.file.url } }, {}, editor.blocks.getCurrentBlockIndex() + 1, true);
            }
          }
        });

        holder.addEventListener('drop', async (e) => {
          const file = (e.dataTransfer?.files || [])[0];
          if (file && file.type?.startsWith('image/')) {
            e.preventDefault();
            const res = await editor.configuration.tools.image.config.uploader.uploadByFile(file);
            if (res?.file?.url) {
              editor.blocks.insert('image', { file: { url: res.file.url } }, {}, editor.blocks.getCurrentBlockIndex() + 1, true);
            }
          }
        });
      },

      async onChange(api) {
        try {
          const saved = await api.saver.save();
          onChange?.(saved);
        } catch (e) {
          // ignore transient errors while typing
        }
      },
    });

    editorRef.current = editor;

    return () => {
      cancelled = true;
      if (editorRef.current) {
        destroyingRef.current = true;
        editorRef.current.isReady
          .then(() => editorRef.current?.destroy())
          .catch(() => {})
          .finally(() => {
            editorRef.current = null;
            destroyingRef.current = false;
          });
      }
    };
    // empty deps ⇒ initialize once; guards handle React 18 strict re-mounts
  }, [defaultValue, onChange, onImageUpload]);

  return (
    <div>
      {/* The holder element Editor.js mounts into */}
      <div ref={holderRef} className="border rounded-xl p-4 bg-white" />
    </div>
  );
}