import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Server, ExternalLink } from 'lucide-react';

const backendLab = [
  {
    slug: 'devconnect-backend',
    title: 'DevConnect Backend',
    description:
      'Backend system for a developer social networking platform supporting user authentication, profile management, posts, and connections. Designed with REST APIs, secure JWT authentication, and scalable MongoDB data models for managing developer interactions.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Mongoose'],
  },
  {
    slug: 'mental-health-conversation-backend',
    title: 'Mental Health Conversation API',
    description:
      'Backend service enabling AI-powered mental health conversations. Handles chat session management, user interactions, and conversation storage while integrating external AI services for intelligent responses.',
    tech: ['Node.js', 'Express', 'MongoDB', 'AI API Integration'],
  },
];

const BackendLabComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="backendLab" className="section-padding relative" ref={ref}>
      <div className="section-container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-foreground whitespace-nowrap font-semibold">
            Backend Systems
          </h2>
          <div className="h-px bg-gradient-to-r from-border to-transparent flex-1" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {backendLab.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
               to={`/project/${project.slug}`}
                className="group block h-full bg-card/50 backdrop-blur-sm p-6 rounded border border-border/50 hover:border-primary/50 hover:shadow-glow-subtle hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <Server className="text-primary" size={40} strokeWidth={1} />
                  <ExternalLink
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                    size={20}
                  />
                </div>

                <h3 className="text-foreground text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 font-mono text-xs text-primary/70">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackendLabComponent;