"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineTeam } from "react-icons/ai";

export default function TeamSection() {
  const [teams, setTeams] = useState([]);

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

  return (
    <section className="max-w-7xl mx-auto px-5 pb-16">
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-zinc-100">
        <h2 className="text-3xl font-bold flex items-center gap-3 mb-16 text-zinc-900">
          <AiOutlineTeam className="text-blue-600" /> Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teams.map((member) => (
            <Link
              key={member._id}
              href={`/team/${member.slug}`}
              className="group flex flex-col items-center text-center transition-all hover:-translate-y-1 block"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}