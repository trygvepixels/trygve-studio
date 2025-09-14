"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineTeam } from "react-icons/ai";

export default function TeamSection() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
  async function fetchTeams() {
    const res = await fetch("/api/teams", { cache: "no-store" });
    const data = await res.json();
    console.log("TEAM DATA:", data); // 👈 check shape
    setTeams(Array.isArray(data) ? data : data.items || data.data || []);
  }
  fetchTeams();
}, []);

  return (
    <section className="max-w-7xl mx-auto px-5 pb-6 rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 bg-white p-6 rounded-2xl">
        <h2 className="text-2xl flex items-center gap-2 font-semibold  mb-12"><AiOutlineTeam />
 Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {Array.isArray(teams) && teams.map((member) => (
  <div key={member._id} className="...">
    {member.image?.src && (
      <img
        src={member.image.src}
        alt={member.image.alt || member.name}
        width={150}
        height={150}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
    )}
    <h3 className="text-xl font-semibold">{member.name}</h3>
    <p className="text-gray-600">{member.position}</p>
   </div>
))}
        </div>
      </div>
    </section>
  );
}