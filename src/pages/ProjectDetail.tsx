import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsData } from '@/data/projects';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Back Link */}
        <section className="section-padding py-8">
          <div className="section-container">
            <Link 
              to="/#projects" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
            >
              <ArrowLeft size={16} />
              Back to projects
            </Link>
          </div>
        </section>

        {/* Project Hero */}
        <section className="section-padding pt-0">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-4">
                {project.summary}
              </p>
              <p className="text-sm text-muted-foreground">
                Role: {project.role}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-padding py-12">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Problem */}
        <section className="section-padding py-12">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Solution */}
        <section className="section-padding py-12">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-4">The Solution</h2>
              <ul className="space-y-3">
                {project.solution.map((item, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Challenges & Trade-offs */}
        <section className="section-padding py-12">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-4">Challenges & Trade-offs</h2>
              <ul className="space-y-3">
                {project.challenges.map((item, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Impact */}
        <section className="section-padding py-12">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-4">Impact</h2>
              <ul className="space-y-3">
                {project.impact.map((item, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Links */}
        {project.links && (project.links.live || project.links.github) && (
          <section className="section-padding py-12">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-6"
              >
                {/* {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow text-foreground"
                  >
                    View live
                  </a>
                )} */}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow text-foreground"
                  >
                    GitHub
                  </a>
                )}
              </motion.div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;