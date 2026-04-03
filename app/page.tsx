'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
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
    <section className="relative min-h-screen bg-[var(--color-bg)] overflow-hidden flex items-center py-10">
      {/* Subtle dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_0.8px,transparent_1px)] dark:bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 lg:pb-0 relative z-10">
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
            <p className="max-w-lg text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
              I&apos;m a Full Stack Developer building modern, scalable web applications
              with clean, maintainable code and exceptional user experiences.
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToContact}
              className="mt-8 px-10 py-4 bg-[var(--color-accent)] hover:bg-cyan-400 transition-all text-black font-semibold text-lg rounded-full flex items-center gap-3 shadow-lg shadow-cyan-500/30"
            >
              Hire Me
              <span className="text-xl">→</span>
            </motion.button>
          </motion.div>

          {/* RIGHT COLUMN - Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] lg:max-w-[480px]">
              {/* Glow / Background Effect */}
              <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 rounded-[4rem] blur-3xl" />

              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
                <Image
                  src="/hero.png"
                  alt="Shahab Ud Din - Full Stack Developer"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-1 left-1/2 hidden lg:flex flex-col items-center gap-2 text-zinc-500">
        <div className="text-xs tracking-widest">SCROLL</div>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-500 to-transparent"
        />
      </div>
    </section>
  );
}