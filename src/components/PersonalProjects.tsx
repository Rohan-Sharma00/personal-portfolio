"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const personalProjects = [
  {
    title: "JavaScript Playground",
    description:
      "A real-time JavaScript code editor and execution environment. Features a curated set of interview problems, monospace code editing, safe code execution, and terminal-style output — built to feel like a professional developer tool.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "",
    live: "/javascript-playground",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    featured: true,
    isInternal: true,
  },
  {
    title: "Dynamic Form Builder",
    description:
      "A configurable multi-step form builder that generates forms from JSON. Supports dynamic fields, validation, conditional rendering, and a responsive UI with a clean, reusable component architecture.",
    tech: ["React", "Node.js", "Express.js"],
    github: "https://github.com/Rohan-Sharma00/dynamic-stepper-form",
    live: "https://dynamic-stepper-form.vercel.app/submissions",
    image:
      "https://miro.medium.com/v2/resize:fit:875/1*6Rmpz-UqMUq5UcshBZeuDQ.jpeg",
    featured: true,
    isInternal: true,
  },
];

const PersonalProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="personal-projects"
      className="section-padding relative"
      ref={ref}
    >
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
            <span>Some Things I've Built</span>
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
             className="relative grid md:grid-cols-12 gap-4 items-center"
            >
              {/* Image */}
              <div
               className="md:col-span-7 md:col-start-1 relative group"
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
             <div className="md:col-span-6 md:col-start-6 relative z-10 md:text-right">
                {/* <p className="text-primary font-mono text-sm mb-2 text-glow">Featured Project</p> */}
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <h3 className="text-foreground text-xl md:text-2xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="bg-card/80 backdrop-blur-sm p-5 md:p-6 rounded shadow-lg mb-4 border border-border/50 hover:shadow-glow-subtle transition-shadow duration-300">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>

                <ul
                  className="flex flex-wrap gap-3 mb-4 font-mono text-xs text-primary/80 md:justify-end"
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                 className="flex gap-4 md:justify-end"
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
