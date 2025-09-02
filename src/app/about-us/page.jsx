"use client";
import {
  FiGlobe,
  FiBriefcase,
  FiUsers,
  FiMapPin,
  FiPhone,
  FiMail,
  FiCalendar,
  FiFileText,
  FiCheckCircle,
  FiAperture,
} from "react-icons/fi";
import Image from "next/image";
import faisal from "@/assets/faisal.jpeg";

export default function AboutUs() {
  const directors = [
 
    {
      name: "AR. FAISAL SAIF",
      role: "Founder & Director ",
      img: faisal,
      para: "AR. Faisal Saif is the Founder and Director of Trygve Studio. With a passion for design and a keen eye for detail, he leads the team in delivering exceptional architectural and interior solutions. His vision drives the studio's commitment to excellence and innovation in every project.",
    },
  
  ];

  const specialties = [
    "Architectural Services",
    "Interior Designs",
    "Space Planning",
    "3D Architectural Designs",
    "3D Exteriors",
    "3D Interiors",
    "Project Management Consultants (PMC)",
    "Engineering, Procurement, Construction (EPC)",
    "3D Renders",
    "Home Decor",
    "Commercial",
    "Residential",
    "Furniture Design",
  ];

  const stats = [
    { label: "Founded", value: "2017", icon: <FiCalendar /> },
    { label: "Incorporated", value: "10 Dec 2021", icon: <FiFileText /> },
    { label: "Employees", value: "11–50", icon: <FiUsers /> },
    { label: "NIC Code", value: "7414 (Consultancy)", icon: <FiBriefcase /> },
  ];

  const gallery = [
    // Replace with your own project images
    {
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1400&auto=format&fit=crop",
      alt: "Contemporary Villa Exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop",
      alt: "Warm Interior Living",
    },
    {
      src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop",
      alt: "Corporate Workplace",
    },
    {
      src: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop",
      alt: "Retail & Hospitality",
    },
  ];

  return (
    <section className="bg-[#F4F1EC] text-[#101010]">
      {/* ===== Hero ===== */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1200px 600px at 80% -20%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(800px 400px at 10% 110%, rgba(0,0,0,0.05), transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 pt-16 pb-10 md:pt-24 md:pb-16">
          <div className="flex items-center gap-2 text-sm tracking-wide text-neutral-700">
            <FiGlobe className="shrink-0" />
            <span>Architectural & Interior Works — Delivered Worldwide</span>
          </div>
          <h1 className="mt-4 text-4xl leading-[1.05] text-[#234D7E ] md:text-6xl font-semibold tracking-tight">
            TRYGVE STUDIO PRIVATE LIMITED
          </h1>
          <p className="mt-5 max-w-3xl text-[17px] md:text-lg text-neutral-700">
            We are a full-fledged Architectural & allied Engineering services
            company based in Lucknow, India — delivering projects across every
            country, state and city worldwide. From concept to completion, our
            experienced team of Architects, Engineers and Visualisers craft
            timeless spaces for Residential, Commercial, Retail, Hospitality and
            more.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+919554440400"
              className="inline-flex items-center gap-2 rounded-full bg-[#234D7E] text-white px-5 py-3 text-sm md:text-[15px] hover:opacity-90 transition"
            >
              <FiPhone /> +91 95544 40400
            </a>
            <a
              href="mailto:faisal.saif@trygvestudio.com"
              className="inline-flex items-center gap-2 rounded-full border border-[#101010] px-5 py-3 text-sm md:text-[15px] hover:bg-black hover:text-white transition"
            >
              <FiMail /> faisal.saif@trygvestudio.com
            </a>
          </div>
        </div>
      </div>

      {/* ===== Stats / Registry ===== */}
      <div className="max-w-7xl mx-auto px-5 pb-12 mt-10">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-black/10 bg-white p-5 flex items-start gap-3"
            >
              <div className="mt-1 text-[18px]">{s.icon}</div>
              <div>
                <div className="text-xs uppercase tracking-wide text-neutral-500">
                  {s.label}
                </div>
                <div className="mt-1 font-semibold">{s.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Legal / Registry line */}
      </div>

      {/* ===== What We Do ===== */}
      <div className="max-w-7xl mx-auto px-5 pb-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
          <div className="flex items-center gap-2">
            <FiBriefcase />
            <h2 className="text-2xl font-semibold">Expertise & Specialties</h2>
          </div>
          <p className="mt-2 text-neutral-700">
            From early feasibility and space planning to executive drawings and
            turnkey execution, we deliver integrated design & build solutions
            tailored to your brand and context.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {specialties.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[#F4F1EC] px-3 py-1.5 text-sm border border-black/10"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== Leadership ===== */}
      <div className="max-w-7xl mx-auto px-5 pb-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
          <div className="flex items-center gap-2">
            <FiUsers />
            <h2 className="text-2xl font-semibold">Leadership</h2>
          </div>
          <p className="mt-2 text-neutral-700">
            Meet the people shaping every space we craft — a cross‑disciplinary
            team blending design intuition, engineering precision and on‑site
            pragmatism across India and worldwide.
          </p>
          <div className="mt-5  ">
            {directors.map((d) => (
             <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 items-start" key={d.name}>
               <div
                key={d.name}
                className=" "
              >
                <figure className="relative flex aspect-[3/2]">
                  {/* Photo */}
                  <Image
                    src={d.img}
                    alt={`${d.name} portrait`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 25vw, 50vw"
                    priority={false}
                  />

                  {/* Readability gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Name + Role */}
                  <figcaption className="absolute bottom-3 left-3 right-3">
                    <div className="text-white/95 font-semibold leading-tight text-sm md:text-[15px]">
                      {d.name}
                    </div>
                    <div className="mt-0.5 text-white/80 text-[11px] md:text-xs">
                      {d.role}
                    </div>
                  </figcaption>


                      
                     
                </figure>
               
              </div>

              <div className=" ">
                <p className="text-  text-neutral-700">{d.para}</p>

             </div>
             </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-neutral-600">
            Corporate email for official communications:{" "}
            <a className="underline" href="mailto:faisal.saif@trygvestudio.com">
              faisal.saif@trygvestudio.com
            </a>
          </p>
        </div>
      </div>

      {/* ===== Global Presence ===== */}
      <div className="max-w-7xl mx-auto px-5 pb-6">
        <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
          <div className="flex items-center gap-2">
            <FiGlobe />
            <h2 className="text-2xl font-semibold">
              Global Delivery, Local Understanding
            </h2>
          </div>
          <p className="mt-2 text-neutral-700">
            Headquartered at Eden Enclave (Lucknow), with project teams across
            APAC, EMEA and North America. We navigate local codes, materials and
            budgets while keeping a consistent global design standard.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <InfoRow icon={<FiMapPin />} title="Head Office">
              Plot No. 728, Khasra No. 21
Eden Enclave, Phase 2, Kursi Road
Gudamba, BKT, Lucknow
Uttar Pradesh – 226026, India
            </InfoRow>
            <InfoRow icon={<FiPhone />} title="Phone">
              <a className="underline" href="tel:+919554440400">
                +91 95544 40400
              </a>
            </InfoRow>
            <InfoRow icon={<FiMail />} title="Email">
              <a className="underline" href="mailto:faisal.saif@trygvestudio.com">
                faisal.saif@trygvestudio.com
              </a>
            </InfoRow>
          </div>
        </div>
      </div>


      {/* Location / Office Pin */}
<section id="location" className="relative bg-[#F3F1EB] py-4">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-semibold md:text-4xl">Our Location</h2>
      <p className="mt-2 text-black/60">
        Visit our studio or find us easily on the map below.
      </p>
    </div>

    <div className="mt-4 overflow-hidden rounded-2xl border border-black/10 shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.0843091250363!2d80.9687785762818!3d26.93254157663538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a25e439709cd1%3A0x28927eb890a78697!2sTrygve%20Studio%20Private%20Limited%20%7C%20Best%20Architecture%20Company%20%7C%20Best%20Construction%20Company%20%7C%20Best%20Interior%20Designer!5e0!3m2!1sen!2sin!4v1756397068097!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    
  </div>
</section>

      {/* ===== Gallery / Proof ===== */}
      {/* <div className="max-w-7xl mx-auto px-5 pb-16">
        <div className="rounded-2xl overflow-hidden border border-black/10">
          <div className="grid md:grid-cols-4">
            {gallery.map((g, i) => (
              <figure key={i} className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-2 left-2 text-xs bg-white/80 px-2 py-1 rounded">
                  {g.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
         
      </div> */}
    </section>
  );
}

/* ---- small helper ---- */
function InfoRow({ icon, title, children }) {
  return (
    <div className="rounded-xl border border-black/10 p-4 flex items-start gap-3">
      <div className="mt-0.5 text-[18px]">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-wide text-neutral-500">
          {title}
        </div>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
