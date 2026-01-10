"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const personalProjects = [
  {
    title: 'Moviepedia',
    description:
      'A movie discovery and information platform that allows users to search, explore, and read detailed information about movies, including plot summaries, ratings, cast, and release details. Designed for fast search, clean UI, and an engaging browsing experience.',
    tech: ['React', 'TypeScript', 'Movie API (TMDB/OMDb)', 'Tailwind CSS'],
    github: 'https://github.com/Rohan-Sharma00',
    live: '#',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop',
    featured: true,
  }

];

const PersonalProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="personal-projects" className="section-padding relative" ref={ref}>
      <div className="section-container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="flex items-start font-serif text-2xl md:text-3xl text-foreground font-semibold">
            <span className="text-primary font-mono text-lg md:text-xl mr-4 text-glow shrink-0 w-8">
              01.
            </span>
            <span>
              Some Thing I am Building
            </span>
          </h2>
          <div className="h-px bg-gradient-to-r from-border to-transparent flex-1" />
        </motion.div>

        <div className="space-y-32">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? 'md:text-right' : ''
                }`}
            >
              {/* Image */}
              <div
                className={`md:col-span-7 relative group ${index % 2 === 1 ? 'md:order-2 md:col-start-6' : 'md:col-start-1'
                  }`}
              >
                <a href={project.live || project.github} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden rounded bg-primary/5 border-glow">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent group-hover:opacity-0 transition-opacity duration-500 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                </a>
              </div>

              {/* Content */}
              <div
                className={`md:col-span-6 relative z-10 ${index % 2 === 1
                    ? 'md:order-1 md:col-start-1 md:text-left'
                    : 'md:col-start-6 md:text-right'
                  }`}
              >
                {/* <p className="text-primary font-mono text-sm mb-2 text-glow">Featured Project</p> */}
                <h3 className="text-foreground text-xl md:text-2xl font-semibold mb-4">
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="bg-card/80 backdrop-blur-sm p-5 md:p-6 rounded shadow-lg mb-4 border border-border/50 hover:shadow-glow-subtle transition-shadow duration-300">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 mb-4 font-mono text-xs text-primary/80 ${index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'
                    }`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-start' : 'md:justify-end'
                    }`}
                >
                  {/* {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )} */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
