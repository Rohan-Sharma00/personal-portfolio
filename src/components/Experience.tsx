"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const experiences = [
  // {
  //   id: 'centralogic',
  //   company: 'CentraLogic',
  //   shortName: 'CentraLogic',
  //   role: 'Software Engineer',
  //   period: 'July 2024 – Oct 2025',
  //   url: '#',
  //   points: [
  //     'Improved application performance by ~20% through lazy loading, RxJS optimizations, and architectural refinements',
  //     'Built scalable micro-frontend architecture handling complex financial calculations at enterprise scale',
  //     'Collaborated with cross-functional teams to deliver production-ready features on tight deadlines',
  //     'Implemented comprehensive testing strategies ensuring code reliability and maintainability',
  //   ],
  // },
  // {
  //   id: 'incred',
  //   company: 'Incred Money',
  //   shortName: 'Incred',
  //   role: 'Software Engineer Intern (Frontend)',
  //   period: 'Jan 2024 – Apr 2024',
  //   url: '#',
  //   points: [
  //     'Developed reusable Next.js components, reducing development effort by 25%',
  //     'Built responsive UI components following design system principles',
  //     'Optimized frontend performance through code splitting and lazy loading',
  //     'Participated in code reviews and contributed to technical documentation',
  //   ],
  // },
  // {
  //   id: 'krista',
  //   company: 'Krista Software',
  //   shortName: 'Krista',
  //   role: 'Software Engineer Intern (Backend)',
  //   period: 'Jun 2023 – Dec 2023',
  //   url: '#',
  //   points: [
  //     'Built HubSpot CRM extension that increased qualified leads by 40%',
  //     'Developed RESTful APIs and integrated third-party services',
  //     'Implemented data processing pipelines for CRM automation',
  //     'Collaborated with product team to define technical requirements',
  //   ],
  // },
  {
  id: 'centralogic',
  company: 'CentraLogic',
  shortName: 'CentraLogic',
  role: 'Software Engineer (Full Stack)',
  period: 'July 2024 – Oct 2025',
  url: '#',
  points: [
    'Improved application performance by ~20% through lazy loading, RxJS optimizations, and frontend architectural refinements',
    'Built scalable micro-frontend architecture handling complex financial calculations at enterprise scale',
    'Owned end-to-end development of React micro-frontend modules, enabling independent deployments and isolated application state',
    'Developed and integrated Node.js/Express REST APIs with authentication, request validation, centralized error handling, and data persistence',
    'Implemented AI-powered features using Gemini API for image processing, face recognition, and text extraction, optimized with caching and debouncing',
    'Collaborated with cross-functional teams (product, backend, QA) to deliver production-ready features under tight deadlines',
    'Contributed to code quality and system reliability by implementing testing strategies and participating in code reviews',
  ],
},
{
  id: 'incred',
  company: 'Incred Money',
  shortName: 'Incred',
  role: 'Software Engineer Intern (Frontend)',
  period: 'Jan 2024 – Apr 2024',
  url: '#',
  points: [
    'Developed reusable Next.js components, reducing development effort by 25% and improving long-term maintainability',
    'Built responsive UI components following established design system and accessibility principles',
    'Optimized frontend performance through code splitting, lazy loading, and server-side rendering best practices',
    'Worked closely with backend engineers to integrate APIs and ensure seamless data flow across the application',
    'Participated in code reviews, sprint planning, and contributed to technical documentation',
  ],
},
{
  id: 'krista',
  company: 'Krista Software',
  shortName: 'Krista',
  role: 'Software Engineer Intern (Backend)',
  period: 'Jun 2023 – Dec 2023',
  url: '#',
  points: [
     'Built HubSpot CRM extensions that increased qualified leads by 40% through improved automation and integrations',
    'Developed RESTful APIs and backend services using Java and Node.js to support CRM workflows',
    'Implemented OAuth-based authentication and secure third-party integrations to protect sensitive data',
    'Designed and implemented backend data processing pipelines and a document generation extension, reducing documentation and manual processing time by 75%',
    'Collaborated with product and frontend teams to define technical requirements and backend interfaces',
 
  ],
},

];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  const activeExperience = experiences.find(exp => exp.id === activeTab) || experiences[0];

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      
      <div className="section-container max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <h2 className="font-serif text-2xl md:text-3xl text-foreground whitespace-nowrap font-semibold">
            <span className="text-primary font-mono text-lg md:text-xl mr-2 text-glow">02.</span>
            Where I've Worked
          </h2>
          <div className="h-px bg-gradient-to-r from-border to-transparent flex-1" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 md:gap-0"
        >
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l-2 border-border/50">
            {experiences.map((exp, index) => (
              <motion.button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className={`px-5 py-3 text-left font-mono text-sm whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-0.5 md:mb-0 md:-ml-0.5 ${
                  activeTab === exp.id
                    ? 'text-primary border-primary bg-primary/5 shadow-glow-subtle'
                    : 'text-muted-foreground border-transparent hover:text-primary hover:bg-primary/5'
                }`}
              >
                {exp.shortName}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <div className="md:pl-8 py-2 min-h-[320px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-foreground text-lg md:text-xl mb-1">
                {activeExperience.role}{' '}
                <a
                  href={activeExperience.url}
                  className="text-primary hover:underline text-glow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ {activeExperience.company}
                </a>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mb-6">
                {activeExperience.period}
              </p>
              <ul className="space-y-4">
                {activeExperience.points.map((point, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <span className="text-primary mt-1.5 text-xs">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
