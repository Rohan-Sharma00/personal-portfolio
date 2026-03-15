import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Folder, ExternalLink } from 'lucide-react';

const projects = [
  {
    slug: 'exp-reality',
    title: 'Exp Reality',
    description:
      'Enterprise-scale micro-frontend financial platform handling commission calculations, pricing models, and tax workflows for thousands of brokers. As the micro-frontend project owner, I built full-stack modules using React and Node.js, implemented performance-optimized dashboards for calculation-heavy datasets, and designed scalable APIs with Express and MongoDB.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Micro-frontends', 'TypeScript'],
  },
  {
    slug: 'huhoka-hrms',
    title: 'Huhoka HRMS',
    description:
      'Enterprise HR management system built with Angular 16 and Node.js. I developed the Asset Management module, implementing secure backend APIs with MongoDB and integrating them with Angular components to manage asset allocation, tracking, and lifecycle workflows within the HR platform.',
    tech: ['Angular 16', 'Node.js', 'Express', 'MongoDB', 'RBAC'],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="section-container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-foreground whitespace-nowrap font-semibold">
            <span className="text-primary font-mono text-lg md:text-xl mr-2 text-glow">03.</span>
            Company Projects
          </h2>
          <div className="h-px bg-gradient-to-r from-border to-transparent flex-1" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group block h-full bg-card/50 backdrop-blur-sm p-6 rounded border border-border/50 hover:border-primary/50 hover:shadow-glow-subtle hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <Folder className="text-primary" size={40} strokeWidth={1} />
                  <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors duration-300" size={20} />
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

export default Projects;
