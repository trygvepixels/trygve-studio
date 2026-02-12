"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineTeam } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

export default function TeamSection() {
  const [teams, setTeams] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/teams?sort=order -createdAt");
        const json = await res.json();
        if (res.ok) setTeams(json.items || []);
      } catch (err) {
        console.error("Failed to load team data:", err);
      }
    })();
  }, []);

  const openModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="max-w-7xl mx-auto px-5 pb-16">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-zinc-100">
        <h2 className="text-3xl font-bold flex items-center gap-3 mb-16 text-zinc-900">
          <AiOutlineTeam className="text-blue-600" /> Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teams.map((member) => (
            <div
              key={member._id}
              className="group flex flex-col items-center text-center cursor-pointer transition-all hover:-translate-y-1"
              onClick={() => openModal(member)}
            >
              <div className="relative mb-6">
                {member.image?.src ? (
                  <img
                    src={member.image.src}
                    alt={member.image.alt || member.name}
                    className="relative w-40 h-40 object-cover rounded-full shadow-lg ring-4 ring-white"
                  />
                ) : (
                  <div className="relative w-40 h-40 bg-zinc-100 rounded-[2.5rem] shadow-lg ring-4 ring-white flex items-center justify-center">
                    <AiOutlineTeam size={48} className="text-zinc-300" />
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                {member.name}
              </h3>

              <p className="text-green-600 font-semibold text-sm mt-2 leading-relaxed">
                {member.position.split('&').map((part, index) => (
                  <span key={index} className="block">
                    {index > 0 && '& '}
                    {part.trim()}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Detail Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 md:p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-[2.5rem] w-full max-w-5xl relative shadow-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header/Close Button (Sticky) */}
            <div className="absolute top-6 right-6 z-20">
              <button
                onClick={closeModal}
                className="p-3 bg-white/80 backdrop-blur hover:bg-white text-zinc-800 rounded-full shadow-lg transition-all hover:rotate-90"
                aria-label="Close"
              >
                <IoClose size={28} />
              </button>
            </div>

            {/* Scrollable Content Container */}
            <div className="overflow-y-auto p-8 md:p-12 custom-scrollbar">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">

                {/* Left: Enhanced Photo Frame */}
                <div className="w-full md:w-2/5 shrink-0">
                  <div className="relative">
                     {selectedMember.image?.src && (
                      <img
                        src={selectedMember.image.src}
                        alt={selectedMember.image.alt || selectedMember.name}
                        className="relative w-full aspect-[4/5] object-cover rounded-[3rem] shadow-xl ring-8 ring-white"
                      />
                    )}
                  </div>
                </div>

                {/* Right: Bio Details & Achievements */}
                <div className="flex-1 space-y-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight">
                      {selectedMember.name}
                    </h3>
                    <p className="text-green-600 text-md md:text-lg font-bold mt-4 leading-tight uppercase tracking-wider">
                      {selectedMember.position.split('&').map((part, index) => (
                        <span key={index} className="block">
                          {index > 0 && '& '}
                          {part.trim()}
                        </span>
                      ))}
                    </p>
                  </div>

                  {selectedMember.description && (
                    <div className="prose prose-zinc text-sm md:text-md prose-lg max-w-none">
                      <p className="text-zinc-600 leading-relaxed font-medium whitespace-pre-wrap">
                        {selectedMember.description}
                      </p>
                    </div>
                  )}

                  {/* Achievements Section - Aligned Bottom Right per sketch */}
                  {selectedMember.achievements && selectedMember.achievements.length > 0 && (
                    <div className="pt-8 flex flex-wrap gap-8 md:gap-10">
                      {selectedMember.achievements.map((badge, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center gap-3 group/badge"
                        >
                          <div className="relative w-16 h-16 md:w-20 md:h-20">
                             <div className="relative w-full h-full rounded-full bg-white shadow-md border border-zinc-100 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/badge:-rotate-6">
                              {badge.image?.src ? (
                                <img
                                  src={badge.image.src}
                                  alt={badge.text || "badge"}
                                  className="w-full h-full object-cover p-1"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-zinc-50">
                                  <span className="text-xl font-bold text-zinc-300">★</span>
                                </div>
                              )}
                            </div>
                          </div>
                          {badge.text && (
                            <span className="max-w-[100px] text-center text-[10px] md:text-xs font-bold  text-zinc-900 leading-tight">
                              {badge.text}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f4f4f5;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4d4d8;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a1a1aa;
        }
      `}</style>
    </section>
  );
}