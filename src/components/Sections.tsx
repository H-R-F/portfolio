import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Scale, Code, Lock, Brain, GitBranch, Terminal, Users, BookOpen, Target, ArrowRight, ExternalLink } from 'lucide-react';
import TiltCard, { Reveal3D } from './TiltCard';

// About Section
export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-stone dark:text-stone-light leading-relaxed"
        >
          <p className="text-lg">
            I started with a <span className="text-ink dark:text-cream-dark font-medium">Licence en Droit</span> — studying how societies create rules, manage risk, and protect people. Then I moved into software engineering because I wanted to understand how the systems that those rules govern actually work.
          </p>
          <p>
            Today I'm at <span className="text-ink dark:text-cream-dark font-medium">1337 (42 Network, UM6P)</span>, deepening my engineering skills through project-based learning. Before that, I worked in web development at <span className="text-ink dark:text-cream-dark font-medium">2M TV</span> and completed web development training at <span className="text-ink dark:text-cream-dark font-medium">LionsGeek</span>.
          </p>
          <p>
            What makes my profile unusual isn't that I know law or that I write code. It's that I understand both — and I'm building toward the places where they intersect: privacy, data protection, cybersecurity compliance, and AI governance.
          </p>
          <p className="text-ink dark:text-cream-dark font-medium border-l-2 border-accent pl-4 italic font-serif">
            "Understanding technology is powerful. Understanding the rules around technology makes that understanding more valuable."
          </p>
        </motion.div>
      </div>

      {/* Side panel - Journey visualization with 3D tilt */}
      <Reveal3D direction="right">
        <TiltCard className="bg-white dark:bg-[#161616] border border-line dark:border-line-dark rounded-sm p-6 sm:p-8">
          <h3 className="font-mono text-xs text-stone-light uppercase tracking-wider mb-6">The Path</h3>
          <div className="space-y-6">
            {[
              { label: 'Law', detail: 'Licence en Droit — Université Hassan II', year: 'Foundation' },
              { label: 'Web Development', detail: 'LionsGeek Training', year: '2023' },
              { label: 'Professional Experience', detail: 'Web Developer — 2M TV', year: 'Practice' },
              { label: 'Software Engineering', detail: '1337 — 42 Network, UM6P', year: 'Current' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  {i < 3 && <div className="w-px flex-1 bg-line dark:bg-line-dark mt-1"></div>}
                </div>
                <div className="pb-2">
                  <div className="text-sm font-medium text-ink dark:text-cream-dark">{item.label}</div>
                  <div className="text-xs text-stone dark:text-stone-light mt-0.5">{item.detail}</div>
                  <div className="text-xs text-stone-light font-mono mt-1">{item.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </TiltCard>
      </Reveal3D>
    </div>
  );
}

// Experience Section
export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experiences = [
    {
      company: '2M TV',
      role: 'Web Developer',
      location: 'Casablanca, Morocco',
      description: 'Web development work at one of Morocco\'s leading television networks. Contributed to digital projects within a professional media environment.',
      tags: ['Web Development', 'Media', 'Professional Environment'],
    },
    {
      company: 'LionsGeek',
      role: 'Web Development Training',
      location: 'Morocco',
      description: 'Intensive web development training program covering modern web technologies and development practices.',
      tags: ['Web Development', 'Training', 'Certification — October 2023'],
    },
  ];

  return (
    <div ref={ref} className="space-y-0">
      {experiences.map((exp, i) => (
        <Reveal3D key={i} direction={i % 2 === 0 ? 'left' : 'right'}>
          <TiltCard className="py-8 border-b border-line dark:border-line-dark first:border-t cursor-default">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
              <div className="md:col-span-3">
                <span className="font-mono text-xs text-stone-light">{exp.location}</span>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-lg font-medium text-ink dark:text-cream-dark">{exp.company}</h3>
                <p className="text-sm text-accent dark:text-accent-light mt-1">{exp.role}</p>
                <p className="text-sm text-stone dark:text-stone-light mt-3 max-w-lg leading-relaxed">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-cream-dark dark:bg-[#1A1A1A] text-stone rounded-sm font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal3D>
      ))}
    </div>
  );
}

// Education Section
export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* 1337 - Featured */}
      <Reveal3D direction="left">
        <TiltCard className="bg-white dark:bg-[#161616] border border-accent/20 rounded-sm p-6 sm:p-8 relative overflow-hidden h-full">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-warm"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center">
              <Terminal size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="font-medium text-ink dark:text-cream-dark">1337 — 42 Network</h3>
              <p className="text-xs text-stone-light">UM6P • Current</p>
            </div>
          </div>
          <p className="text-sm text-stone dark:text-stone-light leading-relaxed">
            Software engineering through intensive project-based learning. The 42 pedagogy emphasizes peer-to-peer learning, real-world problem solving, and self-directed exploration. No traditional lectures — you learn by building, breaking, debugging, and collaborating.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Peer Learning', 'Project-Based', 'Systems Thinking', 'C/C++', 'Algorithms'].map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-accent/5 text-accent rounded-sm font-mono">
                {tag}
              </span>
            ))}
          </div>
        </TiltCard>
      </Reveal3D>

      {/* Law */}
      <Reveal3D direction="right">
        <TiltCard className="bg-white dark:bg-[#161616] border border-line dark:border-line-dark rounded-sm p-6 sm:p-8 h-full">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-sm bg-warm/10 flex items-center justify-center">
              <Scale size={18} className="text-warm" />
            </div>
            <div>
              <h3 className="font-medium text-ink dark:text-cream-dark">Licence en Droit</h3>
              <p className="text-xs text-stone-light">Université Hassan II, Casablanca</p>
            </div>
          </div>
          <p className="text-sm text-stone dark:text-stone-light leading-relaxed">
            Legal education covering civil law, regulatory frameworks, and the principles that govern how societies create rules, manage obligations, and protect rights. This foundation now informs how I think about data protection, compliance, and technology governance.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Civil Law', 'Regulation', 'Legal Analysis', 'Critical Thinking'].map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 bg-warm/5 text-warm rounded-sm font-mono">
                {tag}
              </span>
            ))}
          </div>
        </TiltCard>
      </Reveal3D>

      {/* LionsGeek */}
      <Reveal3D direction="up" className="lg:col-span-2">
        <TiltCard className="bg-white dark:bg-[#161616] border border-line dark:border-line-dark rounded-sm p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-sm bg-stone/10 flex items-center justify-center">
              <Code size={18} className="text-stone" />
            </div>
            <div>
              <h3 className="font-medium text-ink dark:text-cream-dark">Web Development Certification</h3>
              <p className="text-xs text-stone-light">LionsGeek • October 2023</p>
            </div>
          </div>
          <p className="text-sm text-stone dark:text-stone-light leading-relaxed">
            Intensive web development training covering modern front-end and back-end technologies. This program bridged the gap between self-learning and professional practice, leading directly to the web development role at 2M TV.
          </p>
        </TiltCard>
      </Reveal3D>
    </div>
  );
}

// Projects Section with 3D tilt cards
export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      number: '01',
      name: 'Chaos Engineering Playground',
      description: 'An experimental environment for exploring chaos engineering principles — testing system resilience through controlled failure injection.',
      problem: 'How do systems behave under unexpected stress? Understanding failure modes is essential for building reliable software.',
      tech: ['Go', 'Systems', 'Resilience'],
      learning: 'Explored how distributed systems fail and how to design for resilience. Deepened understanding of system-level thinking.',
      github: 'https://github.com/sabir7achraf/Chaos-Engineering-Playground',
    },
    {
      number: '02',
      name: 'Traveling Salesman Problem',
      description: 'Implementation of algorithmic solutions to the classic TSP — exploring optimization, graph theory, and computational complexity.',
      problem: 'Finding optimal routes through multiple points is fundamental to logistics, networking, and many real-world systems.',
      tech: ['Java', 'Algorithms', 'Graph Theory'],
      learning: 'Deepened understanding of NP-hard problems, heuristic approaches, and the tradeoffs between optimality and computation time.',
      github: 'https://github.com/sabir7achraf/Traveling-Salesman-Problem',
    },
    {
      number: '03',
      name: 'LASAN',
      description: 'A TypeScript-based project exploring modern web application development patterns.',
      problem: 'Building practical applications that solve real problems using modern tooling and architecture.',
      tech: ['TypeScript', 'Web', 'Application Development'],
      learning: 'Applied modern TypeScript patterns and learned to structure maintainable web applications.',
      github: 'https://github.com/sabir7achraf/LASAN',
    },
    {
      number: '04',
      name: 'MYO — Moroccan Youth Organization',
      description: 'Full-stack web application for a Moroccan youth organization, built with Spring Boot backend and Angular frontend.',
      problem: 'Creating a digital platform to serve an organization\'s operational needs with proper architecture.',
      tech: ['Spring Boot', 'Angular', 'Full Stack'],
      learning: 'Built a complete application from database to frontend. Understood the challenges of connecting backend logic with user-facing interfaces.',
      github: 'https://github.com/sabir7achraf/MYO',
    },
    {
      number: '05',
      name: 'Infrastructure as Code — Terraform',
      description: 'Exploring infrastructure provisioning and cloud resource management through declarative configuration.',
      problem: 'How do you manage infrastructure reliably and reproducibly? Manual configuration doesn\'t scale.',
      tech: ['Terraform', 'HCL', 'Infrastructure'],
      learning: 'Understood the principles of infrastructure as code and how declarative approaches improve reliability and collaboration.',
      github: 'https://github.com/sabir7achraf/Terraform',
    },
    {
      number: '06',
      name: 'Speech Recognition System',
      description: 'A speech recognition application exploring audio processing and machine learning integration.',
      problem: 'Bridging the gap between human speech and machine understanding — a fundamental challenge in accessible technology.',
      tech: ['JavaScript', 'Web APIs', 'Audio Processing'],
      learning: 'Explored how audio data is processed programmatically and how machine learning models can be integrated into applications.',
      github: 'https://github.com/sabir7achraf/Speech-Recognition',
    },
  ];

  return (
    <div ref={ref} className="space-y-8">
      {projects.map((project, i) => (
        <Reveal3D key={i} direction={i % 2 === 0 ? 'left' : 'right'}>
          <TiltCard className="group bg-white dark:bg-[#161616] border border-line dark:border-line-dark rounded-sm p-6 sm:p-8 hover:border-accent/30 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Number + Name */}
              <div className="md:col-span-4">
                <span className="font-mono text-xs text-stone-light">PROJECT {project.number}</span>
                <h3 className="text-lg font-medium text-ink dark:text-cream-dark mt-2 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-stone dark:text-stone-light mt-2">{project.description}</p>
              </div>

              {/* Details */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <span className="text-xs font-mono text-stone-light uppercase tracking-wider">Problem</span>
                  <p className="text-sm text-stone dark:text-stone-light mt-1">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-stone-light uppercase tracking-wider">Key Learning</span>
                  <p className="text-sm text-stone dark:text-stone-light mt-1">{project.learning}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-cream-dark dark:bg-[#1A1A1A] text-stone rounded-sm font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs text-accent hover:text-accent-light flex items-center gap-1 transition-colors"
                  >
                    GitHub <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </TiltCard>
        </Reveal3D>
      ))}
    </div>
  );
}

// Skills Section with 3D cards
export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Software Engineering',
      icon: <Code size={18} />,
      items: ['C/C++', 'Java', 'TypeScript', 'JavaScript', 'Python', 'Go', 'Spring Boot', 'Angular', 'Next.js'],
    },
    {
      title: 'Systems & Infrastructure',
      icon: <Terminal size={18} />,
      items: ['Linux', 'Shell Scripting', 'Terraform', 'Networking', 'System Programming', 'Git'],
    },
    {
      title: 'Engineering Practices',
      icon: <GitBranch size={18} />,
      items: ['Algorithm Design', 'Debugging', 'Architecture', 'Peer Review', 'Problem Solving', 'Documentation'],
    },
    {
      title: 'Trust & Technology',
      icon: <Shield size={18} />,
      items: ['Data Protection', 'Privacy Frameworks', 'Cybersecurity', 'Compliance', 'AI Governance', 'Risk Analysis'],
    },
    {
      title: 'Legal & Analytical',
      icon: <Scale size={18} />,
      items: ['Regulatory Analysis', 'Legal Research', 'Critical Thinking', 'Risk Assessment', 'Policy Understanding'],
    },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, i) => (
        <Reveal3D key={i} direction="up">
          <TiltCard className="bg-white dark:bg-[#161616] border border-line dark:border-line-dark rounded-sm p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-accent">{category.icon}</div>
              <h3 className="text-sm font-medium text-ink dark:text-cream-dark">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span key={item} className="text-xs px-2 py-1 bg-cream-dark dark:bg-[#1A1A1A] text-stone rounded-sm">
                  {item}
                </span>
              ))}
            </div>
          </TiltCard>
        </Reveal3D>
      ))}
    </div>
  );
}

// Differentiator Section with 3D cards
export function Differentiator() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const intersections = [
    {
      icon: <Scale size={20} />,
      title: 'Law → Regulation',
      description: 'Understanding how rules are created, interpreted, and enforced. Knowing what obligations exist before building systems.',
    },
    {
      icon: <Code size={20} />,
      title: 'Engineering → Systems',
      description: 'Understanding how technology actually works — not just at the API level, but at the system, network, and data level.',
    },
    {
      icon: <Lock size={20} />,
      title: 'Privacy → Data',
      description: 'Understanding how personal data moves through systems, where it\'s stored, and what protections are needed.',
    },
    {
      icon: <Shield size={20} />,
      title: 'Security → Risk',
      description: 'Understanding technical controls, threat models, and how to reason about security at the architecture level.',
    },
    {
      icon: <Brain size={20} />,
      title: 'AI Governance → Trust',
      description: 'Understanding the relationship between emerging technology, societal impact, and the need for responsible frameworks.',
    },
  ];

  return (
    <div ref={ref}>
      <div className="mb-12 sm:mb-16">
        <span className="section-number">06 — The Intersection</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-serif font-600 text-ink dark:text-cream-dark tracking-tight">
          Why This Combination Matters
        </h2>
        <p className="mt-3 text-stone dark:text-stone-light max-w-xl">
          Most people understand either technology or regulation. The rare value is understanding both — and how they connect.
        </p>
        <div className="mt-6 editorial-line w-24"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {intersections.map((item, i) => (
          <Reveal3D key={i} direction={i % 2 === 0 ? 'up' : 'down'}>
            <TiltCard className="relative p-6 bg-white dark:bg-[#161616] border border-line dark:border-line-dark rounded-sm h-full">
              <div className="text-accent mb-4">{item.icon}</div>
              <h3 className="text-sm font-medium text-ink dark:text-cream-dark mb-2">{item.title}</h3>
              <p className="text-sm text-stone dark:text-stone-light leading-relaxed">{item.description}</p>
            </TiltCard>
          </Reveal3D>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-10 p-6 bg-accent/5 border border-accent/10 rounded-sm"
      >
        <p className="text-sm text-ink dark:text-cream-dark leading-relaxed">
          <span className="font-medium">I'm not claiming expertise in all of these fields yet.</span> I'm building toward this intersection. My legal background gives me a framework for understanding regulation. My engineering training gives me the ability to understand systems. The combination allows me to ask better questions — and eventually, build better solutions.
        </p>
      </motion.div>
    </div>
  );
}

// Direction Section with 3D cards
export function Direction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const directions = [
    { title: 'Privacy & Data Protection', status: 'Exploring', description: 'Understanding how personal data flows through systems and what protections are needed.' },
    { title: 'Cybersecurity GRC', status: 'Building toward', description: 'Governance, risk, and compliance in technology environments.' },
    { title: 'AI Governance', status: 'Developing interest', description: 'The intersection of artificial intelligence, regulation, and societal impact.' },
    { title: 'Technology Compliance', status: 'Exploring', description: 'How organizations meet regulatory requirements in their technology operations.' },
    { title: 'Software Engineering', status: 'Active', description: 'Deepening core engineering skills through project-based learning at 1337.' },
    { title: 'Legal Technology', status: 'Interested in', description: 'Building tools that bridge legal processes and technology.' },
  ];

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {directions.map((dir, i) => (
          <Reveal3D key={i} direction="up">
            <TiltCard className="p-5 border border-line dark:border-line-dark rounded-sm h-full">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-2 h-2 rounded-full ${dir.status === 'Active' ? 'bg-green-500' : dir.status === 'Building toward' ? 'bg-accent' : 'bg-warm'}`}></div>
                <span className="text-xs font-mono text-stone-light">{dir.status}</span>
              </div>
              <h3 className="text-sm font-medium text-ink dark:text-cream-dark">{dir.title}</h3>
              <p className="text-xs text-stone dark:text-stone-light mt-2 leading-relaxed">{dir.description}</p>
            </TiltCard>
          </Reveal3D>
        ))}
      </div>
    </div>
  );
}

// 1337 Journey Section
export function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const principles = [
    { icon: <Target size={18} />, title: 'Learning by Doing', description: 'No lectures. You learn by building real projects and solving real problems.' },
    { icon: <Users size={18} />, title: 'Peer Learning', description: 'Knowledge is shared horizontally. Teaching others deepens your own understanding.' },
    { icon: <Terminal size={18} />, title: 'Debugging as Thinking', description: 'Finding bugs isn\'t frustration — it\'s the core of engineering thinking.' },
    { icon: <BookOpen size={18} />, title: 'Self-Directed', description: 'No one tells you what to learn. You identify gaps and fill them independently.' },
    { icon: <GitBranch size={18} />, title: 'Systems Thinking', description: 'Understanding how components connect, not just how individual pieces work.' },
    { icon: <Shield size={18} />, title: 'Persistence', description: 'Projects are designed to be difficult. Completion requires sustained effort.' },
  ];

  return (
    <div ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {principles.map((p, i) => (
          <Reveal3D key={i} direction="up">
            <TiltCard className="flex gap-4 p-4">
              <div className="text-accent flex-shrink-0 mt-0.5">{p.icon}</div>
              <div>
                <h3 className="text-sm font-medium text-ink dark:text-cream-dark">{p.title}</h3>
                <p className="text-xs text-stone dark:text-stone-light mt-1 leading-relaxed">{p.description}</p>
              </div>
            </TiltCard>
          </Reveal3D>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-stone dark:text-stone-light italic font-serif max-w-md mx-auto">
          "The 42 pedagogy doesn't teach you to code. It teaches you to learn."
        </p>
      </motion.div>
    </div>
  );
}

// Contact Section
export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20, rotateX: -5 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <span className="section-number">09 — Connect</span>
        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-600 text-ink dark:text-cream-dark tracking-tight">
          Let's build something
          <br />
          <span className="italic text-accent dark:text-accent-light">meaningful.</span>
        </h2>
        <p className="mt-6 text-stone dark:text-stone-light max-w-md mx-auto">
          Interested in technology, privacy, compliance, or building something at the intersection of law and engineering? I'd like to hear from you.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/achrafbensabir/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink dark:bg-cream-dark text-cream dark:text-ink text-sm font-medium rounded-sm hover:bg-accent dark:hover:bg-accent transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Connect on LinkedIn <ArrowRight size={16} />
          </a>
          <a
            href="https://github.com/sabir7achraf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-line dark:border-line-dark text-ink dark:text-cream-dark text-sm font-medium rounded-sm hover:border-accent dark:hover:border-accent transition-all duration-300 hover:scale-105"
          >
            View GitHub
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-stone-light font-mono">
          <span>Casablanca, Morocco</span>
          <span className="w-1 h-1 rounded-full bg-stone-light"></span>
          <span>Open to opportunities</span>
        </div>
      </motion.div>
    </div>
  );
}
