'use client';

import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-[var(--color-bg)] w-full overflow-hidden relative border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
    >
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_0.8px,transparent_1px)] dark:bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            }
          }
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* SECTION LABEL */}
          <motion.div
            variants={fadeUpVariant}
            className="flex justify-center items-center gap-4 mb-4"
          >
            <div className="w-8 h-px bg-cyan-500 opacity-50" />
            <span className="text-xs tracking-widest text-cyan-500 uppercase font-bold">
              ABOUT ME
            </span>
            <div className="w-8 h-px bg-cyan-500 opacity-50" />
          </motion.div>

          {/* HEADING */}
          <motion.h2
            variants={fadeUpVariant}
            className="text-4xl font-bold text-[var(--color-text-primary)] dark:text-white mt-4"
          >
            A Little About Me
          </motion.h2>

          {/* PARAGRAPHS */}
          <div className="mt-6 space-y-4">
            <motion.p
              variants={fadeUpVariant}
              className="text-base font-light text-zinc-700 dark:text-zinc-400 leading-relaxed tracking-wide"
            >
              I specialize in building production-ready full stack applications and AI-powered tools. I've shipped real client projects at IRIS Software Solutions, built a government web platform used by Pakistan's Fishermen's Co-operative Society, and developed AI agents using OpenAI Agents SDK. 
            </motion.p>
            <motion.p
              variants={fadeUpVariant}
              className="text-base font-light text-zinc-700 dark:text-zinc-400 leading-relaxed tracking-wide"
            >
              I'm currently deepening my expertise in agentic AI architecture.
            </motion.p>
          </div>

          {/* STATS ROW */}
          <motion.div
            variants={fadeUpVariant}
            className="flex justify-center items-center mt-8 divide-x divide-zinc-200 dark:divide-zinc-800"
          >
            {/* Stat 1 */}
            <div className="flex flex-col items-center px-4 md:px-8">
              <span className="text-2xl font-bold text-[var(--color-text-primary)] dark:text-white">1+</span>
              <span className="text-[10px] md:text-xs text-[var(--color-text-secondary)] dark:text-zinc-500 mt-1 uppercase tracking-wider">Years of Experience</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center px-4 md:px-8">
              <span className="text-2xl font-bold text-[var(--color-text-primary)] dark:text-white">5+</span>
              <span className="text-[10px] md:text-xs text-[var(--color-text-secondary)] dark:text-zinc-500 mt-1 uppercase tracking-wider">Projects Done</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center px-4 md:px-8">
              <span className="text-2xl font-bold text-[var(--color-text-primary)] dark:text-white">💼</span>
              <span className="text-[10px] md:text-xs text-[var(--color-text-secondary)] dark:text-zinc-500 mt-1 uppercase tracking-wider">Available for Freelance</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
