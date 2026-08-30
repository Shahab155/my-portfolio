"use client"

import {motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function HeroSection(){
const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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

    return (
         <section id="home" className="relative min-h-screen bg-[var(--color-bg)] overflow-x-hidden flex items-center py-10 border-b border-zinc-800">
        {/* Subtle dot grid background */}
        <div className="absolute inset-0 bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40" />

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
                <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white uppercase">
                  IT&apos;S ME
                </h1>
                <h1 className="text-6xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-[var(--color-accent)] to-cyan-400 bg-clip-text text-transparent uppercase">
                  SHAHAB UD DIN
                </h1>
              </div>

              {/* Description */}
              <p className="max-w-lg text-base font-light text-zinc-400 leading-relaxed tracking-wide">
                I am a{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[var(--color-text-primary)] font-semibold">
                    Full Stack Developer
                  </span>
                  <motion.svg
                    viewBox="0 0 200 12"
                    className="absolute -bottom-1 left-0 w-full h-3 text-[var(--color-accent)] opacity-70"
                    initial={shouldReduceMotion ? { opacity: 0.7 } : { pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.7 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 1, delay: 1, ease: "easeOut" }}
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
                I build web applications and AI-powered agents using Next.js, FastAPI, and the OpenAI Agents SDK
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <motion.button
                  suppressHydrationWarning
                  onClick={scrollToProjects}
                  className="px-10 py-4 bg-[var(--color-accent)] hover:bg-cyan-400 transition-all text-black font-semibold text-md rounded-full flex items-center gap-3 shadow-lg shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)] cursor-pointer"
                >
                  View my Work
                  <span className="text-xl">→</span>
                </motion.button>

                <motion.a
                  href="/shahab.pdf"
                  download="Shahab_Resume.pdf"
                  className="px-10 py-4 bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black transition-all font-semibold text-md rounded-full flex items-center gap-3 group hover:shadow-[0_0_20px_var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
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
                    animate={shouldReduceMotion ? {} : { y: [0, 2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>

            {/* RIGHT COLUMN - Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 40 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative w-full h-[500px] lg:h-[600px]"
            >
              <Image
                src="/hero.png"
                // alt="Shahab Ud Din - Full Stack & AI Developer"
                alt=""
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>


      </section>
    )
}