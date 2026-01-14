import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PersonalProjects from '@/components/PersonalProjects';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main >
        <Hero />
        <PersonalProjects />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
