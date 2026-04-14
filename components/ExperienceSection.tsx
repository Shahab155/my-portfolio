'use client';

import { motion } from 'framer-motion';
import { HiOutlineCalendarDays, HiOutlineMapPin, HiOutlineChevronRight } from 'react-icons/hi2';

interface ExperienceEntryProps {
  role: string;
  company: string;
  companyFull?: string;
  duration: string;
  durationBadge: string;
  typeBadge: string;
  location: string;
  bullets: string[];
  tags: string[];
  isLast?: boolean;
  isCurrent?: boolean;
  delay?: number;
}

const ExperienceEntry = ({
  role,
  company,
  companyFull,
  duration,
  durationBadge,
  typeBadge,
  location,
  bullets,
  tags,
  isLast,
  isCurrent,
  delay = 0,
}: ExperienceEntryProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
      }}
      transition={{ duration: 0.5 }}
      className={`relative pl-16 ${!isLast ? 'border-b border-zinc-800/50 pb-10' : ''}`}
    >
      {/* Timeline Node */}
      <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full flex items-center justify-center border-2 border-cyan-500 bg-zinc-950 z-10 transition-transform duration-300 hover:scale-110">
        <div className="relative">
          {isCurrent && (
            <div className="absolute inset-0 w-3 h-3 bg-emerald-400/50 rounded-full animate-ping" />
          )}
          <div className={`w-3 h-3 rounded-full ${isCurrent ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
        </div>
      </div>

      {/* Top Row */}
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div>
          <h3 className="text-lg font-bold text-[var(--color-text-primary)] dark:text-white transition-colors hover:text-[var(--color-accent)] cursor-default">
            {role}
          </h3>
          <div className="flex flex-col mt-0.5">
            <span className="text-[var(--color-accent)] text-sm font-medium">{company}</span>
            {companyFull && (
              <span className="text-xs text-[var(--color-text-secondary)] dark:text-zinc-500 mt-1">{companyFull}</span>
            )}
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 font-medium">
            {durationBadge}
          </span>
          <span
            className={`text-xs px-3 py-1 rounded-full border flex items-center gap-1.5 font-medium
              ${isCurrent 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                : 'bg-zinc-800 text-[var(--color-text-secondary)] dark:text-zinc-400 border-zinc-700'}`}
          >
            {isCurrent && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            )}
            {typeBadge}
          </span>
        </div>
      </div>

      {/* Info Row */}
      <div className="flex gap-4 flex-wrap mt-2">
        <div className="flex items-center gap-1.5">
          <HiOutlineCalendarDays className="text-[var(--color-text-secondary)] dark:text-zinc-500" size={14} />
          <span className="text-xs text-[var(--color-text-secondary)] dark:text-zinc-500">{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <HiOutlineMapPin className="text-[var(--color-text-secondary)] dark:text-zinc-500" size={14} />
          <span className="text-xs text-[var(--color-text-secondary)] dark:text-zinc-500">{location}</span>
        </div>
      </div>

      {/* Bullet Points */}
      <div className="mt-3 space-y-2">
        {bullets.map((bullet, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4 }}
            className="flex items-start gap-2 group"
          >
            <HiOutlineChevronRight
              size={14}
              className="text-cyan-400 mt-1 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
            <p className="text-base font-light text-zinc-700 dark:text-zinc-400 leading-relaxed tracking-wide">
              {bullet}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Tech Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <motion.span
            key={idx}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.3 }}
            className="text-xs px-3 py-1.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Python Trainer',
      company: 'NAVTTC',
      companyFull: '(National Vocational and Technical Training Commission)',
      duration: '2+ Months & Ongoing',
      durationBadge: '2+ Months',
      typeBadge: 'Currently Working',
      location: 'Hyderabad, Pakistan',
      isCurrent: true,
      bullets: [
        'Currently training students in Python fundamentals and programming concepts as an official trainer at NAVTTC.',
        'Designing and delivering structured lesson plans to help beginners build a strong foundation in Python.',
      ],
      tags: ['Python', 'Teaching', 'Training'],
    },
    {
      role: 'Full Stack Developer',
      company: 'IRIS Software Solutions',
      duration: '3 Months',
      durationBadge: '3 Months',
      typeBadge: 'Employment',
      location: 'Hyderabad, Pakistan',
      bullets: [
        'Worked as a Full Stack Developer on real client-facing projects delivering complete web solutions from frontend to backend.',
        'Built and maintained web applications using Next.js and Tailwind CSS for modern responsive frontends.',
        'Handled backend and database tasks using PHP and MySQL to support application functionality.',
      ],
      tags: ['Next.js', 'Tailwind CSS', 'PHP', 'MySQL'],
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'IRIS Software Solutions',
      duration: '3 Months',
      durationBadge: '3 Months',
      typeBadge: 'Internship',
      location: 'Hyderabad, Pakistan',
      bullets: [
        'Completed a 3-month internship building full stack web applications using PHP, MySQL, and XAMPP.',
        'Gained hands-on experience working in a professional software house environment collaborating with a team on live projects.',
        'Transitioned into a full-time employment role at the same company after successfully completing the internship.',
      ],
      tags: ['PHP', 'MySQL', 'XAMPP', 'Next.js', 'Tailwind CSS'],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[var(--color-bg)] w-full relative overflow-hidden transition-colors duration-300 border-b border-zinc-200 dark:border-zinc-800">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_0.8px,transparent_1px)] dark:bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none" />

      {/* Subtle background glow accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto">
        {/* Section Label & Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50"></div>
            <span className="text-xs tracking-widest text-[var(--color-accent)] uppercase font-bold">
              EXPERIENCE
            </span>
            <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] dark:text-white mb-4">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="mt-16 relative">
          {/* Vertical Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-5 top-2 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-zinc-700 origin-top hidden sm:block"
          />

          {/* Timeline Entries */}
          <motion.div 
            className="flex flex-col gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {experiences.map((exp, index) => (
              <ExperienceEntry
                key={index}
                {...exp}
                isLast={index === experiences.length - 1}
                // delay removed as staggerChildren handles it
              />
            ))}
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
