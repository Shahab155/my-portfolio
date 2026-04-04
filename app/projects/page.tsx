'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiPlay } from 'react-icons/fi';
import { projects } from '@/lib/data';
import Link from 'next/link';

export default function ProjectsPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-[var(--color-bg)] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_0.8px,transparent_1px)] dark:bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Back navigation */}
        <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="mb-8"
        >
            <Link href="/#projects" className="text-zinc-400 hover:text-[var(--color-accent)] transition-colors flex items-center gap-2 w-fit">
                <span>←</span> Back to Portfolio
            </Link>
        </motion.div>

        {/* Page Heading */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50"></div>
            <span className="text-xs tracking-widest text-[var(--color-accent)] uppercase font-bold">
              COMPLETE PORTFOLIO
            </span>
            <div className="w-8 h-[1px] bg-[var(--color-accent)] opacity-50"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[var(--color-text-primary)] dark:text-white mb-8">
            ALL MY PROJECTS
          </h1>
        </motion.div>

        {/* Projects Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card Wrapper with Gradient Border Effect */}
              <div className="h-full rounded-[2rem] p-[1px] bg-gradient-to-b from-[var(--color-accent)]/30 to-transparent hover:from-[var(--color-accent)]/50 hover:to-cyan-500/20 transition-all duration-500 group">
                <div className="h-full bg-zinc-50 dark:bg-[#0a0a0a] rounded-[2rem] p-6 flex flex-col relative overflow-hidden">
                  
                  {/* Subtle inner glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[var(--color-accent)]/10 blur-3xl rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Project Image */}
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-zinc-200 dark:border-white/5 group-hover:border-[var(--color-accent)]/30 transition-colors duration-500">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] dark:text-white mb-3 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tech?.map((item) => (
                      <span 
                        key={item} 
                        className="text-[10px] px-2 py-1 rounded-md bg-zinc-50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 transition-colors hover:border-[var(--color-accent)]/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-4 mt-auto">
                    {project.repoUrl ? (
                      <>
                        <Link
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[var(--color-accent)]/30 text-[var(--color-text-primary)] dark:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 hover:border-[var(--color-accent)]/60 transition-all duration-300 text-sm font-medium"
                        >
                          Repository <FiGithub size={16} />
                        </Link>
                        <Link 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[var(--color-accent)] hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 text-sm font-medium"
                        >
                          Demo <FiPlay size={16} fill="currentColor" />
                        </Link>
                      </>
                    ) : (
                      <Link 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-accent)] hover:bg-cyan-400 text-black shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 text-sm font-medium"
                      >
                        Live Demo <FiPlay size={16} fill="currentColor" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
