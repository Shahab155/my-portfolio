'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <main>
      <section className="relative min-h-screen bg-[var(--color-bg)] overflow-hidden flex items-center py-10 border-b border-zinc-200 dark:border-zinc-800">
        {/* Subtle dot grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_0.8px,transparent_1px)] dark:bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 md:pt-20 pb-16 lg:pb-0 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT COLUMN - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8 lg:pt-12"
            >
             

              {/* Heading */}
              <div className="space-y-3">
                <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-[var(--color-text-primary)] dark:text-white uppercase">
                  IT&apos;S ME
                </h1>
                <h1 className="text-6xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-[var(--color-accent)] to-cyan-400 bg-clip-text text-transparent uppercase">
                  SHAHAB UD DIN
                </h1>
              </div>

              {/* Description */}
              <p className="max-w-lg text-base font-light text-zinc-700 dark:text-zinc-400 leading-relaxed tracking-wide">
                I am a{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[var(--color-text-primary)] font-semibold">
                    Full Stack Developer
                  </span>
                  <motion.svg
                    viewBox="0 0 200 12"
                    className="absolute -bottom-1 left-0 w-full h-3 text-[var(--color-accent)] opacity-70"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                  >
                    <motion.path
                      d="M2 10 C 40 2, 160 2, 198 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>{' '}
                building modern, scalable web applications
                with clean, maintainable code and exceptional user experiences.
              </p>

              {/* CTA Button */}
              <motion.button
                suppressHydrationWarning
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="mt-8 px-10 py-4 bg-[var(--color-accent)] hover:bg-cyan-400 transition-all text-black font-semibold text-lg rounded-full flex items-center gap-3 shadow-lg shadow-cyan-500/30"
              >
               View my Work
                <span className="text-xl">→</span>
              </motion.button>
            </motion.div>

            {/* RIGHT COLUMN - Portrait Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className=""
            >
              <div className="relative w-full max-w-[310px] lg:max-w-[330px] mx-auto">
                {/* Glow / Background Effect */}
                <div className="absolute -inset-6 rounded-[3rem] blur-3xl opacity-50" />

                <div className="relative aspect-[3/4] rounded-[2.5rem] bg-white dark:bg-transparent overflow-hidden shadow-xl shadow-zinc-200/50 dark:shadow-xl flex items-center justify-center group transition-all duration-500 hover:border-cyan-500/30">
                 
                  
                  {/* Centered Content */}
                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="relative">
                      {/* Animated Geometric Patterns */}
                      <div className="absolute w-[350%] h-[350%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 dark:opacity-40 flex items-center justify-center pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <motion.circle 
                            cx="50" cy="50" r="38" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="0.15" 
                            className="text-cyan-500"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          />
                          <motion.circle 
                            cx="50" cy="50" r="30" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="0.15" 
                            strokeDasharray="4 4"
                            className="text-purple-500"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          />
                        </svg>
                      </div>

                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative z-10 w-28 h-28 rounded-[1.5rem] bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 dark:from-cyan-500/10 dark:to-purple-500/10 border border-cyan-500/20 dark:border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg shadow-cyan-500/5 dark:shadow-inner"
                      >
                      <motion.span 
                        className="text-6xl drop-shadow-2xl"
                        animate={{ 
                          y: [0, -8, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      >
                         👨‍💻
                      </motion.span>
                    </motion.div>
                  </div>
                    
                    <div className="text-center space-y-1">
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="font-bold text-[var(--color-text-primary)] dark:text-zinc-300 tracking-[0.3em] uppercase text-xs"
                      >
                        Shahab
                      </motion.p>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mx-auto"
                      />
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-cyan-400 text-xs tracking-widest uppercase mt-2 font-sans"
                      >
                        Full Stack Developer
                      </motion.p>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-8 left-8 w-1.5 h-1.5 rounded-full bg-cyan-500/40 animate-pulse" />
                  <div className="absolute bottom-8 right-8 w-10 h-10 border-r border-b border-white/5 dark:border-white/10 rounded-br-2xl" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-700 text-white text-sm px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                  <div className="text-emerald-400">●</div>
                  <div>
                    <div className="font-medium">Open to Work</div>
                    <div className="text-xs text-zinc-400">Available Now</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        
      </section>
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}