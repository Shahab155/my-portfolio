'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';
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

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // 3D Tilt Effect Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = x / width - 0.5;
    const yPct = y / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main>
      <section className="relative min-h-screen bg-[var(--color-bg)] overflow-x-hidden flex items-center py-10 border-b border-zinc-200 dark:border-zinc-800">
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

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <motion.button
                  suppressHydrationWarning
                  onClick={scrollToProjects}
                  className="px-10 py-4 bg-[var(--color-accent)] hover:bg-cyan-400 transition-all text-black font-semibold text-md rounded-full flex items-center gap-3 shadow-lg shadow-cyan-500/30"
                >
                  View my Work
                  <span className="text-xl">→</span>
                </motion.button>

                <motion.a
                  href="/ShahabResume (1).pdf"
                  download="Shahab_Resume.pdf"
                  className="px-10 py-4 bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-all font-semibold text-md rounded-full flex items-center gap-3 group hover:shadow-[0_0_20px_var(--color-accent)]"
                >
                  Download Resume
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{ y: [0, 2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>

            {/* RIGHT COLUMN - 3D Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="perspective-[1000px] flex justify-center"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d"
                }}
                className="relative w-full max-w-[320px] lg:max-w-[360px]"
              >
                {/* Main Glass Card */}
                <div className="relative aspect-[3/4.2] rounded-[3rem] bg-white/5 dark:bg-zinc-900/20 backdrop-blur-2xl border border-[var(--color-accent)]/30 dark:border-white/10 overflow-hidden shadow-2xl shadow-cyan-500/10 flex flex-col items-center justify-center group transition-all duration-500 will-change-transform">

                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{
                      left: ["-100%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "linear",
                    }}
                    className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none"
                  />

                  {/* Laser Scan Effect */}
                  <motion.div
                    animate={{
                      top: ["-10%", "110%"],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                    className="absolute left-0 right-0 h-px bg-cyan-400 shadow-[0_0_15px_#22d3ee] z-20 pointer-events-none"
                  />

                  {/* Animated Background Grid */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                    <motion.div
                      animate={{
                        opacity: [0.1, 0.3, 0.1]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"
                    />
                  </div>

                  {/* Centered Content */}
                  <div className="relative z-10 flex flex-col items-center gap-8" style={{ transform: "translateZ(50px)" }}>
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="relative z-10 w-32 h-32 rounded-3xl bg-gradient-to-tr from-[var(--color-accent)]/20 to-cyan-500/10 border border-[var(--color-accent)]/20 flex items-center justify-center backdrop-blur-xl shadow-2xl"
                    >
                      <motion.span
                        className="text-7xl drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      >
                        👨‍💻
                      </motion.span>
                    </motion.div>
                  </div>

                  <div className="text-center space-y-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-4"
                    />

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="text-cyan-400 text-sm tracking-[0.4em] uppercase font-medium"
                    >
                      Full Stack Developer
                    </motion.p>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee] animate-pulse" />
                  <div className="absolute bottom-10 right-10 w-12 h-12 border-r-2 border-b-2 border-cyan-500/30 rounded-br-3xl" />
                </div>


                <motion.div
                  animate={{ y: [0, 15, 0], rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 -right-4 w-12 h-12 bg-zinc-900/80 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center shadow-xl z-30"
                >
                  <div className="w-5 h-5 flex flex-wrap gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-sm" />
                    <div className="w-2 h-2 bg-cyan-500 rounded-sm" />
                    <div className="w-2 h-2 bg-cyan-500 rounded-sm" />
                    <div className="w-2 h-2 bg-purple-500 rounded-sm" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-4 bg-zinc-950 border border-zinc-800 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 z-40"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <div className="relative">
                    {/* <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping absolute inset-0" /> */}
                    <div className="w-3 h-3 bg-emerald-500 rounded-full relative" />
                  </div>
                  <div>
                    <div className="font-bold text-sm tracking-tight">Open to Work</div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium">Available Now</div>
                  </div>
                </motion.div>
              </motion.div>
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
    </main >
  );
}