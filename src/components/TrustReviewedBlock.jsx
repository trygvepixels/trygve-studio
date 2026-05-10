import Link from "next/link";

export default function TrustReviewedBlock({
  reviewedBy = "Ar. Harsh Vardhan",
  reviewerRole = "Lead Architect",
  reviewedOn = "May 2026",
  note,
  compact = false,
}) {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 bg-white/90 ${
        compact ? "p-4" : "p-5 md:p-6"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
        Reviewed for Accuracy
      </p>
      <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-zinc-700">
        Reviewed by{" "}
        <Link href="/about-us" className="font-semibold text-zinc-900 hover:underline">
          {reviewedBy}
        </Link>
        {" "}· {reviewerRole} · Last reviewed {reviewedOn}.
      </p>
      {note ? (
        <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-zinc-600">
          {note}
        </p>
      ) : null}
      <p className="mt-2 text-xs text-zinc-500">
        Editorial standards, corrections and update process:
        {" "}
        <Link href="/editorial-policy" className="font-medium hover:underline">
          Editorial Policy
        </Link>
      </p>
    </div>
  );
}
