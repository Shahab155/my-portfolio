'use client';

import { motion } from 'framer-motion';

interface ExperienceEntryProps {
  dateRange: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
  position: 'left' | 'right';
  isLast?: boolean;
}

const ExperienceEntry = ({
  dateRange,
  company,
  role,
  description,
  tags,
  position,
  isLast,
}: ExperienceEntryProps) => {
  const isLeft = position === 'left';

  return (
    <div className="relative mb-8 lg:mb-0">
      {/* Mobile/Tablet Layout (< lg) - Simple stacked cards */}
      <div className="lg:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-8"
        >
          {/* Timeline dot for mobile */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-bg)] z-10"
          />

          <div className="border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-4 sm:p-6 rounded-lg hover:border-[var(--color-accent)]/50 transition-all duration-300">
            <p className="text-[var(--color-accent)] text-xs sm:text-sm font-medium tracking-wider mb-3">
              {/* {dateRange} */}
            </p>
            <h3 className="text-white text-lg sm:text-xl font-bold uppercase mb-2 tracking-wide">
              {/* {company} */}
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm uppercase tracking-wider mb-3">
              {role}
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 sm:px-3 py-1 bg-zinc-900 border border-zinc-800 text-white text-[10px] sm:text-xs font-medium uppercase tracking-wider rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop Layout (>= lg) - Timeline with alternating sides */}
      <div className="hidden lg:flex items-start">
        {/* Left side */}
        <div className="flex-1 pr-8">
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-8 rounded-lg hover:border-[var(--color-accent)]/50 transition-all duration-300">
                <p className="text-[var(--color-accent)] text-sm font-medium tracking-wider mb-4">
                  {dateRange}
                </p>
                <h3 className="text-white text-2xl font-bold uppercase mb-2 tracking-wide">
                  {company}
                </h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wider mb-4">
                  {role}
                </p>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-white text-xs font-medium uppercase tracking-wider rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Timeline Dot */}
        <div className="relative flex flex-col items-center justify-start pt-6" style={{ width: '2px' }}>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-bg)] z-10"
            style={{ marginLeft: '-7px' }}
          />
        </div>

        {/* Right side */}
        <div className="flex-1 pl-8">
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-8 rounded-lg hover:border-[var(--color-accent)]/50 transition-all duration-300">
                <p className="text-[var(--color-accent)] text-sm font-medium tracking-wider mb-4">
                  {dateRange}
                </p>
                <h3 className="text-white text-2xl font-bold uppercase mb-2 tracking-wide">
                  {company}
                </h3>
                <p className="text-zinc-500 text-sm uppercase tracking-wider mb-4">
                  {role}
                </p>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-white text-xs font-medium uppercase tracking-wider rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ExperienceSectionNew() {
  const experiences = [
    {
      dateRange: '3/2026 - Present',
      company: 'SOFTORA SYSTEMS',
      role: 'FULL STACK DEVELOPER',
      description: 'Developing full-stack, client-facing applications with a focus on scalable backend systems, API development, database integration, and end-to-end feature delivery. Building modern applications using Next.js, FastAPI, PostgreSQL, and Python while collaborating on real-world product requirements.',
      tags: ['REACT.JS','NEXT.JS', 'TAILWIND CSS', 'POSTGRESQL', "PYTHON", 'FASTAPI'],
      position: 'left' as const,
    },
     
    {
      dateRange: '8/2025 - 2/2026',
      company: 'IRIS SOFTWARE SOLUTIONS',
      role: 'Junior Web DEVELOPER',
      description: 'Worked as a Junior Web Developer on real client-facing projects delivered complete web solutions from frontend to backend. Built and maintained web applications using Next.js and Tailwind CSS for modern responsive frontends.',
      tags: ['NEXT.JS', 'TAILWIND CSS', 'PHP', 'MYSQL', 'XAMPP'],
      position: 'right' as const,
    },
    {
      dateRange: '2/2026 - 5/2026',
      company: 'NAVTTC',
      role: 'PYTHON INSTRUCTOR',
      description: 'Trained students in Python fundamentals and programming concepts as an official instructor at NAVTTC. Designing and delivering structured lesson plans to help beginners build a strong foundation in Python.',
      tags: ['PYTHON', 'TEACHING', 'TRAINING'],
      position: 'left' as const,
    },
    {
      dateRange: '5/2025 - 7/2025',
      company: 'IRIS SOFTWARE SOLUTIONS',
      role: 'WEB DEVELOPER INTERN',
      description: 'Completed a 3-month internship building full stack web applications using PHP, MySQL, XAMPP, Next.js and Tailwind CSS. Gained hands-on experience working in a professional software house environment collaborating with a team on live projects.',
      tags: ['PHP', 'MYSQL', 'XAMPP', 'NEXT.JS', 'TAILWIND CSS'],
      position: 'right' as const,
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 bg-[var(--color-bg)] w-full relative overflow-hidden border-b border-zinc-800 transition-colors duration-300"
    >
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-[1px] bg-[var(--color-accent)] opacity-50" />
            <span className="text-[10px] sm:text-xs tracking-widest text-[var(--color-accent)] uppercase font-bold">
              EXPERIENCE
            </span>
            <div className="w-6 sm:w-8 h-[1px] bg-[var(--color-accent)] opacity-50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Mobile Timeline Line (left-aligned) */}
          <div className="absolute lg:hidden left-[5px] top-0 bottom-0 w-0.5 bg-[var(--color-accent)]" />

          {/* Desktop Timeline Line (center) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-accent)] transform -translate-x-1/2" />

          {/* Experience Entries */}
          <div className="flex flex-col">
            {experiences.map((exp, index) => (
              <ExperienceEntry
                key={index}
                {...exp}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
