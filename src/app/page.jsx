import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import ProjectsGrid from '@/components/ProjectsGrid'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
const page = () => {
  return (
    <div className='bg-[#F4F1EC]'>
      <Hero />
      {/* <About /> */}
      <Projects/>
      <ProjectsGrid />
      <ContactSection />
      {/* <Footer /> */}
    </div>
  )
}

export default page
