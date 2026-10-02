'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import {
  SiNextdotjs,SiNodedotjs , SiReact, SiTailwindcss, SiJavascript, SiTypescript,
  SiPython, SiFastapi, SiPhp, SiMysql, SiAnthropic, SiOpenai, SiGit,
  SiPostgresql,
  SiMongodb,
  SiSqlite
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { HiOutlineDatabase } from 'react-icons/hi';

const categories = ['Frontend', 'Backend', 'Languages', 'Databases', 'DevOps & Tools'] as const;
type SkillCategory = (typeof categories)[number];

const skills = [
  { name: 'Next.js', category: 'Frontend', percentage: 80, color: 'var(--color-text-primary)', icon: <SiNextdotjs /> },
  { name: 'Node.js', category: 'Backend', percentage: 75, color: 'green', icon: <SiNodedotjs /> },
  { name: 'React', category: 'Frontend', percentage: 80, color: '#61dafb', icon: <SiReact /> },
  { name: 'Tailwind CSS', category: 'Frontend', percentage: 85, color: '#38bdf8', icon: <SiTailwindcss /> },
  { name: 'JavaScript', category: 'Languages', percentage: 80, color: '#f7df1e', icon: <SiJavascript /> },
  { name: 'JavaScript', category: 'Backend', percentage: 80, color: '#f7df1e', icon: <SiJavascript /> },
  { name: 'TypeScript', category: 'Languages', percentage: 65, color: '#3178c6', icon: <SiTypescript /> },

  { name: 'Python', category: 'Languages', percentage: 70, color: '#b1c328', icon: <SiPython /> },
{ name: 'Python', category: 'Backend', percentage: 70, color: '#b1c328', icon: <SiPython /> },
  { name: 'SQL', category: 'Languages', percentage: 100, color: '#3776ab' },
  { name: 'FastAPI', category: 'Backend', percentage: 55, color: '#009688', icon: <SiFastapi /> },
  { name: 'MySQL', category: 'Databases', percentage: 75, color: '#4479a1', icon: <SiMysql /> },
  { name: 'MongoDB', category: 'Databases', percentage: 75, color: '#00e599', icon: <SiMongodb /> },
   { name: 'PostreSQL', category: 'Databases', percentage: 75, color: '#4479a1', icon: <SiPostgresql /> },
  { name: 'Neon DB', category: 'Databases', percentage: 55, color: '#00e599', icon: <HiOutlineDatabase /> },
  { name: 'Claude Code', category: 'DevOps & Tools', percentage: 70, color: '#d97757', icon: <SiAnthropic /> },
  { name: 'OpenAI SDK', category: 'DevOps & Tools', percentage: 65, color: '#412991', icon: <SiOpenai /> },
  { name: 'Git/Github', category: 'DevOps & Tools', percentage: 65, color: '#f05032', icon: <SiGit /> },
  { name: 'VS Code', category: 'DevOps & Tools', percentage: 75, color: '#007acc', icon: <VscVscode /> },
];

const CircularProgress = ({ percentage, color, iconItem }: { percentage: number, color: string, iconItem: React.ReactNode }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      className="relative flex items-center justify-center w-28 md:w-36 lg:w-40  mx-auto mb-4 group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{ '--skill-color': color } as React.CSSProperties}
    >
      {/* Background Glow */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: color }}
      />

      <svg className="relative w-full h-full transform -rotate-90 pointer-events-none">
        {/* Inner dimmed track visually filled */}
        <circle
          cx="50%" cy="50%" r="35%"
          fill={color} stroke="none" className="opacity-20"
        />
        {/* Outer dimmed track */}
        <circle
          cx="50%" cy="50%" r="45%"
          fill="none" stroke={color} strokeWidth="1.5" className="opacity-20"
        />
        {/* Progress Arc */}
        <motion.circle
          cx="50%" cy="50%" r="45%"
          fill="none" stroke={color} strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="[filter:drop-shadow(0_0_6px_var(--skill-color))]"
        />
      </svg>
      {/* Center content */}
      <div
        className="absolute flex items-center justify-center text-4xl md:text-5xl pointer-events-none"
        style={{ color: color }}
      >
        {iconItem}
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Frontend');
  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-[var(--color-bg)] w-full overflow-hidden relative transition-colors duration-300 border-b border-zinc-800">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="text-center mb-20 px-4"
        >
          <motion.div variants={fadeUpVariant} className="flex justify-center items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50"></div>
            <span className="text-xs tracking-widest text-[var(--color-accent)] uppercase font-bold">
              TECHNOLOGIES & SKILLS
            </span>
            <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50"></div>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="text-3xl font-bold text-white md:text-4xl text-center mb-4">
            MY TECH STACK
          </motion.h2>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-3 px-4" role="group" aria-label="Filter skills by category">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)]'
                    : 'border-zinc-600 text-zinc-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4 py-4 md:gap-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex w-40 shrink-0 flex-col items-center md:w-48 lg:w-56"
            >
              <CircularProgress
                percentage={skill.percentage}
                color={skill.color}
                iconItem={skill.icon}
              />

              <h3 className="mb-1 text-center text-lg font-bold text-white drop-shadow-sm md:text-xl">
                {skill.name}
              </h3>
              <p className="text-center text-xs text-zinc-500 md:text-sm">
                {skill.category}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >

        </motion.div>
      </div>
    </section>
  );
}
