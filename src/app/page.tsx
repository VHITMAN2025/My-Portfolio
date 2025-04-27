import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import SkillsSection from '@/components/sections/skills-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection id="summary" />
        <SkillsSection id="skills" />
        <ExperienceSection id="experience" />
        <ProjectsSection id="projects" />
        <ContactSection id="contact" />
      </main>
      <Footer />
    </div>
  );
}
