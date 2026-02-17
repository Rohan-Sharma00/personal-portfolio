import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { number: '01.', name: 'Projects', href: '#personal-projects' },
  { number: '02.', name: 'Experience', href: '#experience' },
  { number: '03.', name: 'Work', href: '#projects' },
  { number: '04.', name: 'Contact', href: '#contact' },
  { number: '', name: 'Javascript Playground', href: '/javascript-playground' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (!isHomePage && href.startsWith('#')) {
      window.location.href = '/' + href;
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50 py-4 shadow-glow-subtle' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-primary font-mono text-xl hover:text-glow transition-all duration-300">
          &lt;RS /&gt;
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              href={isHomePage ? item.href : `/${item.href}`}
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              onClick={() => handleNavClick(item.href)}
            >
              <span className="text-primary">{item.number}</span> {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            href="/Rohan_Sharma_SDE_Fullstack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 hover:shadow-glow transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:hidden fixed inset-0 top-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-8"
        >
          <button
            className="absolute top-6 right-6 text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              href={isHomePage ? item.href : `/${item.href}`}
              className="font-mono text-lg text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => handleNavClick(item.href)}
            >
              <span className="text-primary block text-center text-sm mb-1">{item.number}</span>
              {item.name}
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            href="/Resume_Rohan_Sharma.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 border border-primary text-primary font-mono text-base rounded hover:bg-primary/10 hover:shadow-glow transition-all duration-300"
          >
            Resume
          </motion.a>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;
