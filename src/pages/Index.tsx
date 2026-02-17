import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PersonalProjects from '@/components/PersonalProjects';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import EngineeringLabComponent from "@/components/ComponentLab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main >
        <Hero />
        <PersonalProjects />
        <EngineeringLabComponent/>
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
