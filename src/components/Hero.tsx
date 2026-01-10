"use client";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [null, '-20%', '120%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="section-container w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-mono text-sm mb-4 text-glow"
            >
              Hi, my name is
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-2 font-semibold"
            >
              Rohan Sharma.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-muted-foreground leading-tight mb-6"
            >
              I build things for the web.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg max-w-lg mb-10 leading-relaxed"
            >
              I'm an AI-driven software engineer specializing in building fast, scalable,
              real-world web experiences with a focus on performance and architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#personal-projects"
                className="group px-6 py-3 border border-primary text-primary rounded font-mono text-sm hover:bg-primary/10 hover:shadow-glow transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
              <a
                href="/Rohan_Sharma_SDE_Fullstack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 border border-primary text-primary rounded font-mono text-sm hover:bg-primary/10 hover:shadow-glow transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="flex-shrink-0 mx-auto sm:mx-0"
          >
            <div className="relative group">
              <div
                className="
        relative
        w-60 h-[21rem] md:w-64 md:h-[21rem]
        rounded-xl overflow-hidden
        bg-neutral-900
        transition-shadow duration-300
        group-hover:shadow-[0_0_28px_rgba(56,189,248,0.35)]
      "
              >
                <motion.img
                  src="/rohan_photo.jpg"
                  alt="Rohan Sharma"
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                  className="
          w-full h-full object-cover
          transition-transform duration-700
          group-hover:scale-[1.03]
        "
                />

                <div
                  className="
          absolute inset-0
          rounded-xl
          border border-primary/25
          pointer-events-none
        "
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
