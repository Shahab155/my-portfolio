'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function FloatingActions() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    // Theme initialization
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Prevent hydration mismatch
  if (!theme) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4"
    >
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="p-3.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 backdrop-blur-md border border-zinc-200 dark:border-[var(--color-accent)]/20 text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)] hover:text-[var(--color-accent)] dark:hover:text-[var(--color-accent)] shadow-lg dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all hover:scale-110 active:scale-90 flex items-center justify-center group"
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? (
          <HiOutlineMoon size={22} className="group-hover:fill-[var(--color-accent)] transition-colors" />
        ) : (
          <HiOutlineSun size={22} className="group-hover:text-yellow-400 transition-colors" />
        )}
      </button>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/923022187590"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-[#25D366]/40 dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all hover:scale-110 active:scale-90 flex items-center justify-center relative group"
        aria-label="Contact on WhatsApp"
      >
        {/* Simple ping animation for emphasis */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20 hidden group-hover:block" />
        <FaWhatsapp size={26} />
      </Link>
    </motion.div>
  );
}
