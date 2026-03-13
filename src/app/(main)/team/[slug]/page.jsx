import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight, FiHome } from "react-icons/fi";
import Script from "next/script";

const API_BASE = "https://trygvestudio.com";

// --- data ---
async function getTeamMember(slug) {
  try {
    const res = await fetch(`${API_BASE}/api/teams/${slug}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch team member");
    return await res.json();
  } catch (err) {
    console.error("❌ getTeamMember error:", err.message);
    return null;
  }
}

// --- metadata ---
export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const res = await fetch(`${API_BASE}/api/teams/${slug}`, { cache: "no-store" });
    if (!res.ok) return { title: "Team Member | Trygve Studio" };
    const member = await res.json();

    return {
      title: `${member.name} | ${member.position} | Trygve Studio`,
      description: member.description?.substring(0, 160) || `Meet ${member.name}, ${member.position} at Trygve Studio.`,
      openGraph: {
        title: `${member.name} | Trygve Studio`,
        description: member.description?.substring(0, 160),
        images: member.image?.src ? [{ url: member.image.src }] : [],
      },
    };
  } catch (err) {
    return { title: "Team Member | Trygve Studio" };
  }
}

// --- page ---
export default async function TeamMemberPage({ params }) {
  const { slug } = await params;
  const member = await getTeamMember(slug);

  if (!member) return notFound();

  return (
    <main className="min-h-screen bg-[#F4F1EC] pb-20">
      {/* JSON-LD for Person */}
      <Script id="person-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": member.name,
          "jobTitle": member.position,
          "description": member.description,
          "image": member.image?.src,
          "worksFor": {
            "@type": "Organization",
            "name": "Trygve Studio",
            "url": "https://trygvestudio.com"
          }
        })}
      </Script>

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-5 pt-8 mb-8 relative z-10">
        <ol className="flex flex-wrap items-center space-x-2 text-[14px] text-neutral-500">
          <li className="flex items-center">
            <Link href="/" className="flex items-center hover:text-[#234D7E] transition-colors">
              <FiHome className="mr-1.5" />
              <span>Home</span>
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <FiChevronRight className="text-neutral-300" />
            <Link href="/about-us" className="hover:text-[#234D7E] transition-colors">
              About Us
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <FiChevronRight className="text-neutral-300" />
            <span className="font-semibold text-[#234D7E]">{member.name}</span>
          </li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-5">
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-zinc-100 p-8 md:p-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            
            {/* Left: Enhanced Photo Frame */}
            <div className="w-full lg:w-2/5 shrink-0">
              <div className="relative">
                {member.image?.src && (
                  <div className="relative group">
                    <img
                      src={member.image.src}
                      alt={member.image.alt || member.name}
                      className="relative w-full aspect-[4/5] object-cover rounded-[3rem] shadow-2xl ring-8 ring-[#F4F1EC] transition-transform duration-500 hover:scale-[1.02]"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Right: Bio Details & Achievements */}
            <div className="flex-1 space-y-10">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
                  {member.name}
                </h1>
                <div className="mt-4 flex flex-wrap gap-2">
                   {member.position.split('&').map((part, index) => (
                    <span key={index} className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-green-100">
                      {part.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {member.description && (
                <div className="prose prose-zinc prose-base max-w-none">
                  <p className="text-zinc-600 leading-relaxed font-medium whitespace-pre-wrap text-base md:text-lg">
                    {member.description}
                  </p>
                </div>
              )}

              {/* Achievements Section */}
              {member.achievements && member.achievements.length > 0 && (
                <div className="pt-8 border-t border-zinc-100">
                  <h3 className="text-lg font-bold text-zinc-900 mb-6 uppercase tracking-widest">Achievements & Recognition</h3>
                  <div className="flex flex-wrap gap-8 md:gap-12">
                    {member.achievements.map((badge, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-4 group/badge"
                      >
                        <div className="relative w-20 h-20 md:w-24 md:h-24">
                          <div className="relative w-full h-full rounded-full bg-white shadow-lg border border-zinc-100 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/badge:-rotate-6 group-hover/badge:scale-110">
                            {badge.image?.src ? (
                              <img
                                src={badge.image.src}
                                alt={badge.text || "badge"}
                                className="w-full h-full object-cover p-2"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-zinc-50">
                                <span className="text-3xl font-bold text-zinc-300">★</span>
                              </div>
                            )}
                          </div>
                        </div>
                        {badge.text && (
                          <span className="max-w-[120px] text-center text-xs md:text-sm font-bold text-zinc-900 leading-tight">
                            {badge.text}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="pt-8">
                <Link 
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#234D7E] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#1a3a5f] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Consult with {member.name.split(' ')[0]}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
