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
        <section className="section-padding pt-8 pb-20">
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
        <section className="section-padding py-11">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                {project.title}
              </h1>

              {/* 🔥 Impact Line */}
              <p className="text-primary text-sm font-medium mb-4">
                Designed a scalable backend with JWT authentication, modular API architecture, and optimized data handling.
              </p>

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

        {/* Problem */}
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

        {/* Solution */}
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

        {/* 🔥 Architecture */}
        <section className="section-padding py-12">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-4">Architecture</h2>
              <ul className="space-y-3">
                <li className="text-muted-foreground">Node.js + Express REST API</li>
                <li className="text-muted-foreground">JWT-based authentication</li>
                <li className="text-muted-foreground">MongoDB with Mongoose</li>
                <li className="text-muted-foreground">Modular controllers, services, middleware</li>
                <li className="text-muted-foreground">Centralized validation & error handling</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Challenges */}
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

        {/* 🔥 My Contribution */}
        <section className="section-padding py-12">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <h2 className="font-serif text-2xl text-foreground mb-4">My Contribution</h2>
              <ul className="space-y-3">
                <li className="text-muted-foreground">Designed backend architecture</li>
                <li className="text-muted-foreground">Built REST APIs using Node.js and Express</li>
                <li className="text-muted-foreground">Implemented JWT authentication</li>
                <li className="text-muted-foreground">Modeled database schemas and relationships</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Links */}
        {project.links && project.links.github && (
          <section className="section-padding py-12">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex gap-6"
              >
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow text-foreground"
                >
                  GitHub
                </a>
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