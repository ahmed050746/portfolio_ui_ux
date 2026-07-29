import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LmsShowcase from '@/components/LmsShowcase';
import CaseStudy from '@/components/CaseStudy';
import ResponsiveDesign from '@/components/ResponsiveDesign';
import MobileMockups from '@/components/MobileMockups';
import OtherProjects from '@/components/OtherProjects';
import Skills from '@/components/Skills';
import ProcessTimeline from '@/components/ProcessTimeline';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LmsShowcase />
        <CaseStudy />
        <ResponsiveDesign />
        <MobileMockups />
        <OtherProjects />
        <Skills />
        <ProcessTimeline />
        <Testimonials />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
