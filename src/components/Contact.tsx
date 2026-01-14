"use client";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding py-32" ref={ref}>
      <div className="section-container max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-primary font-mono text-sm mb-4"
        >
          04. What's Next?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-foreground mb-6"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg mb-12 leading-relaxed max-w-md mx-auto"
        >
          I'm currently open to new opportunities. Whether you have a question or just want to say hi,
          my inbox is always open!
        </motion.p>

        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rohangsharma12345@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
        >
          <Mail size={18} />
          Say Hello — rohangsharma12345@gmail.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-8 mt-12"
        >
          <a
            href="https://github.com/Rohan-Sharma00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rohan-sharma-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://leetcode.com/u/Rohan_Sharma_dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label="LeetCode"
          >
            <Code size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
