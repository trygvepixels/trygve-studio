"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiHash, FiType, FiUser, FiImage, FiAlertCircle, FiCheckCircle, FiAward, FiTrash2, FiPlus } from "react-icons/fi";
import CloudinaryUploader from "./CloudinaryUploader";

export default function TeamForm({ mode = "create", initial = {}, onSubmit }) {
  const router = useRouter();
  const si = initial ?? {};

  /**
   * Data Migration Logic
   * Ensures backward compatibility with old string-based achievements.
   */
  const migrateAchievements = (achievements) => {
    if (!achievements || !Array.isArray(achievements)) return [];

    return achievements.map(achievement => {
      if (typeof achievement === 'object' && achievement.text !== undefined) {
        return {
          text: achievement.text || '',
          image: achievement.image || { src: '', alt: '' }
        };
      }
      if (typeof achievement === 'string') {
        return { text: achievement, image: { src: "", alt: "" } };
      }
      return { text: "", image: { src: "", alt: "" } };
    });
  };

  const [f, setF] = useState({
    name: si.name || "",
    slug: si.slug || "",
    position: si.position || "",
    description: si.description || "",
    achievements: migrateAchievements(si.achievements),
    image: si.image || { src: "", alt: "" },
    order: typeof si.order === "number" ? si.order : 0,
    active: typeof si.active === "boolean" ? si.active : true,
  });

  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState("");
  const [err, setErr] = useState("");

  // Auto-slug generation
  useEffect(() => {
    if (!f.slug && f.name && mode === "create") {
      const s = f.name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      setF((p) => ({ ...p, slug: s }));
    }
  }, [f.name, f.slug, mode]);

  const onChange = (k, v) => setF((p) => ({ ...p, [k]: v }));

  const validate = () => {
    if (!f.name.trim()) return "Name is required.";
    if (!f.slug.trim()) return "Slug is required.";
    if (!f.position.trim()) return "Position is required.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(""); setOk("");
    const v = validate();
    if (v) { setErr(v); return; }

    setSubmitting(true);
    try {
      const payload = { ...f, slug: f.slug.trim().toLowerCase() };
      await onSubmit(payload);
      setOk(mode === "create" ? "Team member created!" : "Team member updated!");
      setTimeout(() => router.push("/admin/dashboard/team"), 800);
    } catch (e2) {
      setErr(e2?.message || "Error saving team member.");
    } finally {
      setSubmitting(false);
    }
  };

  const addAchievement = () => {
    onChange("achievements", [...f.achievements, { text: "", image: { src: "", alt: "" } }]);
  };

  const removeAchievement = (index) => {
    const next = f.achievements.filter((_, i) => i !== index);
    onChange("achievements", next);
  };

  const updateAchievement = (index, key, val) => {
    const next = [...f.achievements];
    if (key === 'src') {
      next[index] = { ...next[index], image: { ...next[index].image, src: val } };
    } else {
      next[index] = { ...next[index], [key]: val };
    }
    onChange("achievements", next);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {err && (
        <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 animate-in fade-in slide-in-from-top-2">
          <FiAlertCircle className="text-lg shrink-0" />
          <span>{err}</span>
        </div>
      )}
      {ok && (
        <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700 animate-in fade-in slide-in-from-top-2">
          <FiCheckCircle className="text-lg shrink-0" />
          <span>{ok}</span>
        </div>
      )}

      {/* Section: Basic Information */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm">
        <h2 className="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2 border-b border-zinc-100 pb-4">
          <FiUser className="text-blue-600" /> Basic Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block space-y-2">
            <span className="text-sm font-semibold text-zinc-700">Full Name *</span>
            <input
              className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none"
              value={f.name}
              onChange={(e) => onChange("name", e.target.value)}
              placeholder="e.g., Umme Maryam"
            />
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-semibold text-zinc-700">Identifier (Slug) *</span>
            <div className="relative">
              <FiHash className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-zinc-300 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none font-mono text-sm"
                value={f.slug}
                onChange={(e) => onChange("slug", e.target.value)}
                placeholder="e.g., umme-maryam"
              />
            </div>
          </label>
        </div>

        <div className="mt-6">
          <label className="block space-y-2">
            <span className="text-sm font-semibold text-zinc-700 flex items-center gap-2">
              <FiType className="text-blue-600" /> Position *
            </span>
            <input
              className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none"
              value={f.position}
              onChange={(e) => onChange("position", e.target.value)}
              placeholder="e.g., Lead Interior Designer & Architect"
            />
            <p className="text-[11px] text-zinc-500">Use '&' to split position text into multiple lines in the modal.</p>
          </label>
        </div>

        <div className="mt-6">
          <label className="block space-y-2">
            <span className="text-sm font-semibold text-zinc-700">Bio / Description</span>
            <textarea
              className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none min-h-[160px] resize-y"
              value={f.description}
              onChange={(e) => onChange("description", e.target.value)}
              maxLength={2000}
              placeholder="Tell us about this team member..."
            />
            <div className="flex justify-between items-center px-1">
              <span className="text-[11px] text-zinc-400">Profile modal bio</span>
              <span className={`text-xs ${f.description.length > 1800 ? 'text-orange-500 font-medium' : 'text-zinc-400'}`}>
                {f.description.length} / 2000
              </span>
            </div>
          </label>
        </div>

        <div className="mt-6 flex items-end gap-4">
          <label className="block space-y-2">
            <span className="text-sm font-semibold text-zinc-700">Display Order</span>
            <input
              className="w-24 px-4 py-3 rounded-xl border border-zinc-300 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none text-center"
              type="number"
              value={f.order}
              onChange={(e) => onChange("order", parseInt(e.target.value) || 0)}
            />
          </label>
          <p className="text-xs text-zinc-500 pb-4 italic">Higher numbers appear last.</p>
        </div>
      </section>

      {/* Section: Achievements & Specialties */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm">
        <div className="flex items-center justify-between mb-8 border-b border-zinc-100 pb-4">
          <h2 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
            <FiAward className="text-blue-600" /> Achievements / Specialties
          </h2>
          <button
            type="button"
            onClick={addAchievement}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95"
          >
            <FiPlus /> Add Specialty
          </button>
        </div>

        <div className="space-y-6">
          {f.achievements.map((item, idx) => (
            <div key={idx} className="group relative p-6 rounded-2xl border border-zinc-100 bg-zinc-50 hover:bg-white hover:border-blue-200 transition-all">
              <button
                type="button"
                onClick={() => removeAchievement(idx)}
                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                title="Remove achievement"
              >
                <FiTrash2 size={18} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Achievement Details */}
                <div className="space-y-4">
                  <label className="block space-y-2">
                    <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Badge Title</span>
                    <input
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-4 focus:ring-blue-50 focus:border-blue-400 transition-all outline-none text-sm font-medium"
                      value={item.text || ""}
                      onChange={(e) => updateAchievement(idx, "text", e.target.value)}
                      placeholder="e.g., Interior Specialist"
                    />
                  </label>

                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block">Achievement Icon</span>
                    <CloudinaryUploader
                      label="Upload Icon"
                      multiple={false}
                      value={item.image?.src || ""}
                      onChange={(url) => updateAchievement(idx, "src", url)}
                    />
                  </div>
                </div>

                {/* Live Preview */}
                <div className="flex flex-col items-center justify-center p-4 border border-dashed border-zinc-200 rounded-xl bg-white/50">
                  <span className="text-[10px] text-zinc-400 font-semibold mb-4 uppercase">Badge Preview</span>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center overflow-hidden shadow-inner">
                      {item.image?.src ? (
                        <img src={item.image.src} alt="icon" className="w-full h-full object-cover" />
                      ) : (
                        <FiAward className="text-zinc-300 text-2xl" />
                      )}
                    </div>
                    <span className="text-xs font-bold text-zinc-700 text-center max-w-[120px] line-clamp-2">
                      {item.text || "New Achievement"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {f.achievements.length === 0 && (
            <div className="py-12 flex flex-col items-center justify-center text-zinc-400 border-2 border-dashed border-zinc-100 rounded-2xl bg-zinc-50/50">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <FiAward size={32} />
              </div>
              <p className="text-sm font-medium">No specialties added yet.</p>
              <button
                type="button"
                onClick={addAchievement}
                className="mt-4 text-blue-600 text-xs font-bold hover:underline"
              >
                Click here to add the first one
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Section: Media */}
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm">
        <h2 className="text-lg font-bold text-zinc-900 mb-6 flex items-center gap-2 border-b border-zinc-100 pb-4">
          <FiImage className="text-blue-600" /> Member Media
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-semibold text-zinc-700 block">Profile Portrait</span>
              <CloudinaryUploader
                label="Select Image"
                multiple={false}
                value={f.image?.src || ""}
                onChange={(url) => onChange("image", { ...(f.image || {}), src: url })}
              />
            </div>

            <label className="block space-y-2">
              <span className="text-sm font-semibold text-zinc-700">Alt Text (Accessibility)</span>
              <input
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none text-sm"
                value={f.image?.alt || ""}
                onChange={(e) => onChange("image", { ...(f.image || {}), alt: e.target.value })}
                placeholder="Describe the photo..."
              />
            </label>
          </div>

          <div className="flex flex-col items-center justify-center p-6 bg-zinc-50 rounded-2xl border-2 border-zinc-100">
            <span className="text-[10px] text-zinc-400 font-bold uppercase mb-4 tracking-widest text-center">Portrait Preview</span>
            {f.image?.src ? (
              <div className="relative w-48 h-48 rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-white">
                <img src={f.image.src} alt="Portrait" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-48 h-48 rounded-[2rem] bg-zinc-200 flex items-center justify-center border-4 border-white shadow-inner">
                <FiUser className="text-zinc-400 text-5xl" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="flex-1 py-5 bg-green-600 text-white rounded-2xl font-bold shadow-[0_8px_20px_-4px_rgba(22,163,74,0.4)] hover:bg-green-700 hover:shadow-none transition-all disabled:opacity-50 active:scale-[0.98] flex items-center justify-center gap-3"
        >
          {submitting ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Saving Changes...
            </>
          ) : (
            mode === "create" ? "Create New Member" : "Save Profile Details"
          )}
        </button>

        <button
          type="button"
          onClick={() => router.push("/admin/dashboard/team")}
          className="flex-1 py-5 bg-white text-zinc-600 border border-zinc-200 rounded-2xl font-bold hover:bg-zinc-50 transition-all active:scale-[0.98]"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}