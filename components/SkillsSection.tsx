'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { 
  SiNextdotjs, SiReact, SiTailwindcss, SiJavascript, SiTypescript,
  SiPython, SiFastapi, SiPhp, SiMysql, SiAnthropic, SiOpenai, SiGit
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { HiOutlineDatabase } from 'react-icons/hi';

const skills = [
  { name: 'Next.js', category: 'Framework', percentage: 80, color: 'var(--color-text-primary)', icon: <SiNextdotjs /> },
  { name: 'React', category: 'Framework', percentage: 80, color: '#61dafb', icon: <SiReact /> },
  { name: 'Tailwind CSS', category: 'Styling', percentage: 85, color: '#38bdf8', icon: <SiTailwindcss /> },
  { name: 'JavaScript', category: 'Language', percentage: 80, color: '#f7df1e', icon: <SiJavascript /> },
  { name: 'TypeScript', category: 'Language', percentage: 65, color: '#3178c6', icon: <SiTypescript /> },
  { name: 'Python', category: 'Language', percentage: 70, color: '#3776ab', icon: <SiPython /> },
  { name: 'FastAPI', category: 'Framework', percentage: 55, color: '#009688', icon: <SiFastapi /> },
  { name: 'PHP', category: 'Language', percentage: 65, color: '#777bb4', icon: <SiPhp /> },
  { name: 'MySQL', category: 'Database', percentage: 75, color: '#4479a1', icon: <SiMysql /> },
  { name: 'Neon DB', category: 'Database', percentage: 55, color: '#00e599', icon: <HiOutlineDatabase /> },
  { name: 'Claude Code', category: 'AI Tools', percentage: 70, color: '#d97757', icon: <SiAnthropic /> },
  { name: 'OpenAI SDK', category: 'Agentic AI', percentage: 65, color: '#412991', icon: <SiOpenai /> },
  { name: 'Git', category: 'Tools', percentage: 65, color: '#f05032', icon: <SiGit /> },
  { name: 'VS Code', category: 'Tools', percentage: 75, color: '#007acc', icon: <VscVscode /> },
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
        className="absolute inset-0 rounded-full blur-2xl opacity-5 dark:opacity-20 group-hover:opacity-10 dark:group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: color }}
      />
      
      <svg className="relative w-full h-full transform -rotate-90 pointer-events-none">
        {/* Inner dimmed track visually filled */}
        <circle
          cx="50%" cy="50%" r="35%"
          fill={color} stroke="none" className="opacity-10 dark:opacity-20"
        />
        {/* Outer dimmed track */}
        <circle
          cx="50%" cy="50%" r="45%"
          fill="none" stroke={color} strokeWidth="1.5" className="opacity-10 dark:opacity-20"
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
          className="dark:[filter:drop-shadow(0_0_6px_var(--skill-color))]"
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

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.05; // pixels per millisecond

    const autoScroll = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (!isInteracting) {
        container.scrollLeft += speed * deltaTime;

        // If we have scrolled past halfway (since we doubled the items), reset to 0 for infinite loop
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInteracting]);

  return (
    <section id="skills" className="py-24 bg-[var(--color-bg)] w-full overflow-hidden relative transition-colors duration-300 border-b border-zinc-200 dark:border-zinc-800">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_0.8px,transparent_1px)] dark:bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none" />

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
          <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-bold text-center text-[var(--color-text-primary)] dark:text-white mb-8">
            MY TECH STACK
          </motion.h2>
        </motion.div>

        {/* Skills Slider */}
        <div className="relative w-full  group py-4">
          {/* Gradient Masks for fading edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

          {/* Scrollable Track */}
          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onTouchStart={() => setIsInteracting(true)}
            onTouchEnd={() => setIsInteracting(false)}
            className="flex gap-4 md:gap-8 overflow-x-auto px-12 md:px-24 hide-scrollbar"
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-40 md:w-48 lg:w-56 shrink-0"
              >
                <CircularProgress 
                  percentage={skill.percentage} 
                  color={skill.color} 
                  iconItem={skill.icon} 
                />
                
                <h3 className="font-bold text-[var(--color-text-primary)] dark:text-white text-lg md:text-xl text-center mb-1 drop-shadow-sm">
                  {skill.name}
                </h3>
                <p className="text-[var(--color-text-secondary)] dark:text-zinc-500 text-xs md:text-sm mb-4 text-center">
                  {skill.category}
                </p>

                {/* Small horizontal progress component */}
                <div className="flex items-center justify-center gap-3 w-28 mx-auto">
                  <div className="flex-1 h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden relative">
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{ backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-[var(--color-text-primary)] font-semibold text-xs md:text-sm min-w-[32px] text-right">
                    {skill.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
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
