import InteractiveTerminal from '@/components/InteractiveTerminal';
import ContactSection from '@/components/ContactSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import DevelopmentProcessSection from '@/components/DevelopmentProcessSection';

export default function Home() {
 

  return (
    <main>
      <HeroSection />
      <InteractiveTerminal />
      <ExperienceSection />
      <SkillsSection />
      <ServicesSection/>
      <DevelopmentProcessSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main >
  );
}