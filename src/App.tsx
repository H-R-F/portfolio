import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, ChevronDown } from 'lucide-react';
import { About, Experience, Education, Projects, Skills, Differentiator, Direction, Journey, Contact } from './components/Sections';
import TiltCard, { Reveal3D } from './components/TiltCard';

// Lazy load 3D components for performance
const HeroScene = lazy(() => import('./components/HeroScene'));
const BackgroundParticles = lazy(() => import('./components/BackgroundParticles'));

// Navigation
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Direction', href: '#direction' },
  { label: 'Contact', href: '#contact' },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cream/90 dark:bg-[#0C0C0C]/90 backdrop-blur-md border-b border-line dark:border-line-dark' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-mono text-sm tracking-wider text-ink dark:text-cream-dark hover:text-accent transition-colors">
            A.B.S
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-stone hover:text-ink dark:hover:text-cream-dark transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/achrafbensabir/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:text-accent-light transition-colors flex items-center gap-1"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ink dark:text-cream-dark"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream dark:bg-[#0C0C0C] border-b border-line dark:border-line-dark"
          >
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-stone hover:text-ink dark:hover:text-cream-dark py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/achrafbensabir/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-medium text-accent py-2"
              >
                LinkedIn →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Hero Section with 3D
function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center relative px-6 lg:px-8 pt-20 overflow-hidden">
      {/* 3D Background Scene */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="section-number">Portfolio — 2025</span>
        </motion.div>

        {/* Main headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 20, rotateX: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-600 leading-[1.1] tracking-tight text-ink dark:text-cream-dark"
              style={{ transformStyle: 'preserve-3d' }}
            >
              Where law
              <br />
              meets{' '}
              <span className="italic text-accent dark:text-accent-light">technology.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-lg sm:text-xl text-stone dark:text-stone-light max-w-xl leading-relaxed"
            >
              Software engineer with a legal background. Building at the intersection of code, privacy, cybersecurity, and AI governance — where understanding systems and understanding rules creates something more valuable than either alone.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-cream-dark text-cream dark:text-ink text-sm font-medium rounded-sm hover:bg-accent dark:hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                View Work
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-line dark:border-line-dark text-ink dark:text-cream-dark text-sm font-medium rounded-sm hover:border-accent dark:hover:border-accent transition-all duration-300 hover:scale-105"
              >
                About Me
              </a>
              <a
                href="https://www.linkedin.com/in/achrafbensabir/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm text-stone hover:text-accent transition-colors duration-200"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com/sabir7achraf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm text-stone hover:text-accent transition-colors duration-200"
              >
                <Github size={16} /> GitHub
              </a>
            </motion.div>
          </div>

          {/* Side element - visual metaphor with 3D depth */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hidden lg:flex lg:col-span-4 flex-col justify-center items-end"
            style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
          >
            <div className="font-mono text-xs text-stone-light space-y-3 text-right">
              {[
                { label: 'LAW', width: 'w-8', color: 'bg-accent' },
                { label: 'RULES', width: 'w-12', color: 'bg-accent/60' },
                { label: 'SYSTEMS', width: 'w-16', color: 'bg-accent/40' },
                { label: 'CODE', width: 'w-20', color: 'bg-accent/30' },
                { label: 'TRUST', width: 'w-24', color: 'bg-warm', highlight: true },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                  className="flex items-center gap-3 justify-end"
                  style={{ transform: `translateZ(${i * 5}px)` }}
                >
                  <span className={`${item.width} h-px ${item.color}`}></span>
                  <span className={item.highlight ? 'text-warm font-medium' : ''}>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex items-center gap-4 text-xs text-stone-light font-mono"
        >
          <span>Casablanca, Morocco</span>
          <span className="w-1 h-1 rounded-full bg-stone-light"></span>
          <span>1337 — 42 Network</span>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center gap-2 text-stone-light hover:text-accent transition-colors" aria-label="Scroll down">
            <span className="text-xs font-mono">Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Section wrapper with 3D animation
function Section({ id, children, className = '' }: { id: string; children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40, rotateX: -2 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`py-20 sm:py-28 px-6 lg:px-8 ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}

// Section Header
function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <Reveal3D direction="up">
      <div className="mb-12 sm:mb-16">
        <span className="section-number">{number}</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-600 text-ink dark:text-cream-dark tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-stone dark:text-stone-light max-w-lg">{subtitle}</p>
        )}
        <div className="mt-6 editorial-line w-24"></div>
      </div>
    </Reveal3D>
  );
}

export default function App() {
  return (
    <div className="bg-cream dark:bg-[#0C0C0C] text-ink dark:text-cream-dark min-h-screen transition-colors duration-300 relative">
      {/* Subtle 3D background particles */}
      <Suspense fallback={null}>
        <BackgroundParticles />
      </Suspense>

      <div className="relative z-10">
        <Navigation />
        <Hero />

        <Section id="about">
          <SectionHeader number="01 — About" title="Two Worlds, One Direction" />
          <About />
        </Section>

        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-line dark:bg-line-dark"></div>
        </div>

        <Section id="experience">
          <SectionHeader number="02 — Experience" title="Professional Journey" subtitle="Building practical experience across web development and software engineering." />
          <Experience />
        </Section>

        <Section id="education" className="bg-cream-dark/50 dark:bg-[#111111]">
          <SectionHeader number="03 — Education" title="Learning Path" subtitle="From legal studies to software engineering through project-based, peer-learning methodology." />
          <Education />
        </Section>

        <Section id="projects">
          <SectionHeader number="04 — Projects" title="Selected Work" subtitle="Projects that demonstrate engineering thinking and problem-solving across different domains." />
          <Projects />
        </Section>

        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="h-px bg-line dark:bg-line-dark"></div>
        </div>

        <Section id="skills">
          <SectionHeader number="05 — Capabilities" title="Technical & Domain Skills" subtitle="Organized by capability rather than a flat list of technologies." />
          <Skills />
        </Section>

        <Section id="differentiator" className="bg-cream-dark/50 dark:bg-[#111111]">
          <Differentiator />
        </Section>

        <Section id="direction">
          <SectionHeader number="07 — Direction" title="Where I'm Heading" subtitle="Career directions I'm actively building toward." />
          <Direction />
        </Section>

        <Section id="journey" className="bg-cream-dark/50 dark:bg-[#111111]">
          <SectionHeader number="08 — Methodology" title="The 1337 Way" subtitle="How I learn, build, and grow as an engineer." />
          <Journey />
        </Section>

        <Section id="contact">
          <Contact />
        </Section>

        {/* Footer */}
        <footer className="border-t border-line dark:border-line-dark py-8 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-mono text-xs text-stone-light">© 2025 Achraf Ben Sabir</span>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/achrafbensabir/" target="_blank" rel="noopener noreferrer" className="text-stone-light hover:text-accent transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com/sabir7achraf" target="_blank" rel="noopener noreferrer" className="text-stone-light hover:text-accent transition-colors">
                <Github size={16} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
