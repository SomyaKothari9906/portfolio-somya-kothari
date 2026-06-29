import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Certificates from "@/components/sections/Certificates";
import Education from "@/components/sections/Education";
import CodingProfiles from "@/components/sections/CodingProfiles";
import Contact from "@/components/sections/Contact";

import profile from "@/content/profile.json";
import projects from "@/content/projects.json";
import skills from "@/content/skills.json";
import education from "@/content/education.json";
import achievements from "@/content/achievements.json";
import certificates from "@/content/certificates.json";
import socials from "@/content/socials.json";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar resumeAvailable={profile.resumeAvailable} />
      <main id="main">
        <Hero resumeAvailable={profile.resumeAvailable} />
        <About profile={profile} />
        <Skills data={skills} />
        <Projects projects={projects} />
        <Achievements achievements={achievements} />
        <Certificates certificates={certificates} />
        <Education education={education} />
        <CodingProfiles profiles={socials} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
