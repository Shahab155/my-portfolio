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
    <div className="relative flex items-center justify-center md:mb-0 mb-12">
      {/* Left Card */}
      {isLeft && (
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-5/12 md:pr-12 pl-8 md:pl-0"
        >
          <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 backdrop-blur-sm p-8 rounded-lg hover:border-[var(--color-accent)]/50 transition-all duration-300">
            <p className="text-[var(--color-accent)] text-sm font-medium tracking-wider mb-4">
              {dateRange}
            </p>
            <h3 className="text-[var(--color-text-primary)] dark:text-white text-2xl font-bold uppercase mb-2 tracking-wide">
              {company}
            </h3>
            <p className="text-[var(--color-text-secondary)] dark:text-zinc-500 text-sm uppercase tracking-wider mb-4">
              {role}
            </p>
            <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed mb-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-white dark:bg-zinc-900 dark:border-zinc-800 dark:text-white text-xs font-medium uppercase tracking-wider rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Timeline */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center">
        {/* Dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-4 h-4 rounded-full bg-[var(--color-accent)] border-4 border-[var(--color-bg)] z-10"
        />
        {/* Line */}
        {!isLast && (
          <div className="w-0.5 h-32 md:h-32 h-12 bg-[var(--color-accent)] mt-4" />
        )}
      </div>

      {/* Right Card */}
      {!isLeft && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-5/12 md:pl-12 pl-8 md:pl-12"
        >
          <div className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 backdrop-blur-sm p-8 rounded-lg hover:border-[var(--color-accent)]/50 transition-all duration-300">
            <p className="text-[var(--color-accent)] text-sm font-medium tracking-wider mb-4">
              {dateRange}
            </p>
            <h3 className="text-[var(--color-text-primary)] dark:text-white text-2xl font-bold uppercase mb-2 tracking-wide">
              {company}
            </h3>
            <p className="text-[var(--color-text-secondary)] dark:text-zinc-500 text-sm uppercase tracking-wider mb-4">
              {role}
            </p>
            <p className="text-zinc-700 dark:text-zinc-400 leading-relaxed mb-6">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-white dark:bg-zinc-900 dark:border-zinc-800 dark:text-white text-xs font-medium uppercase tracking-wider rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Spacer for opposite side */}
      {isLeft ? <div className="hidden md:block md:w-5/12" /> : <div className="hidden md:block md:w-5/12" />}
    </div>
  );
};

export default function ExperienceSectionNew() {
  const experiences = [
    {
      dateRange: '2025 - PRESENT',
      company: 'IRIS SOFTWARE SOLUTIONS',
      role: 'FULL STACK DEVELOPER',
      description: 'Worked as a Full Stack Developer on real client-facing projects delivering complete web solutions from frontend to backend. Built and maintained web applications using Next.js and Tailwind CSS for modern responsive frontends.',
      tags: ['NEXT.JS', 'TAILWIND CSS', 'PHP', 'MYSQL', 'XAMPP'],
      position: 'left' as const,
    },
    {
      dateRange: '2026 - PRESENT',
      company: 'NAVTTC',
      role: 'PYTHON INSTRUCTOR',
      description: 'Currently training students in Python fundamentals and programming concepts as an official instructor at NAVTTC. Designing and delivering structured lesson plans to help beginners build a strong foundation in Python.',
      tags: ['PYTHON', 'TEACHING', 'TRAINING'],
      position: 'right' as const,
    },
    {
      dateRange: '2025',
      company: 'IRIS SOFTWARE SOLUTIONS',
      role: 'WEB DEVELOPER INTERN',
      description: 'Completed a 3-month internship building full stack web applications using PHP, MySQL, XAMPP, Next.js and Tailwind CSS. Gained hands-on experience working in a professional software house environment collaborating with a team on live projects.',
      tags: ['PHP', 'MYSQL', 'XAMPP', 'NEXT.JS', 'TAILWIND CSS'],
      position: 'left' as const,
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-[var(--color-bg)] w-full relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
    >
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_0.8px,transparent_1px)] dark:bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50" />
            <span className="text-xs tracking-widest text-[var(--color-accent)] uppercase font-bold">
              EXPERIENCE
            </span>
            <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] dark:text-white mb-4">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Experience Entries */}
          <div className="space-y-0">
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
