import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import FeatureProjects from "@/components/FeatureProjects";
import Stats from "@/components/Stats";
const page = () => {
  return (
    <div className="bg-[#F4F1EC] ">
      <Hero />
      {/* <About /> */}
      <ClientsMarquee />
      <Stats />
      <FeatureProjects />
      <Projects />
      <ProjectsGrid />
      <ContactSection />
      <TestimonialsMarquee />

      {/* <Footer /> */}
    </div>
  );
};

export default page;
