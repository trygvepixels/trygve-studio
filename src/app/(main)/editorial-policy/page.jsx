import Script from "next/script";

export const metadata = {
  title: "Editorial Policy | Trygve Studio",
  description:
    "Editorial standards for Trygve Studio content covering architecture, interiors, construction cost guidance, approvals and project planning.",
  alternates: {
    canonical: "https://trygvestudio.com/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  const updatedOn = "May 10, 2026";

  return (
    <main className="min-h-screen bg-[#F4F1EC]">
      <Script id="editorial-policy-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Editorial Policy",
          url: "https://trygvestudio.com/editorial-policy",
          dateModified: "2026-05-10",
          publisher: {
            "@type": "Organization",
            name: "Trygve Studio",
            url: "https://trygvestudio.com",
          },
        })}
      </Script>

      <section className="max-w-4xl mx-auto px-5 py-16 md:py-24">
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 md:p-12 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
            Editorial Standards
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900">
            Editorial Policy
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-600">
            Trygve Studio publishes content on architecture, interiors, construction planning,
            project budgeting, LDA-related processes and execution guidance. Because some of these
            topics influence financial and project decisions, we apply a defined review and update
            process before publishing.
          </p>

          <div className="mt-8 space-y-8 text-zinc-700">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">1. Who writes our content</h2>
              <p className="mt-3 leading-relaxed">
                Articles, service pages and calculator guidance are prepared by the Trygve Studio
                content team in consultation with architects, interior designers and project teams.
                When a named author appears on an article, that person is the primary contributor or
                reviewer for the topic.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">2. Review process for technical content</h2>
              <p className="mt-3 leading-relaxed">
                Content related to construction cost, architect fees, approvals, materials, design
                process or execution planning is reviewed for technical accuracy before publication.
                We aim to distinguish between broad planning guidance, estimated pricing and final
                project-specific commercial proposals.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">3. Sources and pricing methodology</h2>
              <p className="mt-3 leading-relaxed">
                Pricing examples, cost ranges and planning estimates are based on internal project
                experience, vendor conversations, market observations and current working assumptions
                used by the Trygve Studio team. They are indicative only and may change with scope,
                location, site condition, material selection and market movement.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">4. Updates and corrections</h2>
              <p className="mt-3 leading-relaxed">
                We update important commercial and planning content when rates, regulations,
                positioning or project information materially change. If we discover a meaningful
                inaccuracy, we correct it and refresh the page review date where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">5. Testimonials and proof</h2>
              <p className="mt-3 leading-relaxed">
                We prefer using client-approved testimonials, project references and verifiable team
                credentials. Where a testimonial is anonymized for privacy, it is presented only as
                a client statement and not as a third-party rating claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">6. Contact and escalation</h2>
              <p className="mt-3 leading-relaxed">
                If you spot an inaccuracy or need clarification on a published estimate or guidance,
                contact the team through the website contact form or email
                {" "}
                <a href="mailto:faisal.saif@trygvestudio.com" className="font-medium text-[#234D7E] hover:underline">
                  faisal.saif@trygvestudio.com
                </a>.
              </p>
            </section>
          </div>

          <p className="mt-10 text-sm text-zinc-500">
            Last updated: {updatedOn}
          </p>
        </div>
      </section>
    </main>
  );
}
