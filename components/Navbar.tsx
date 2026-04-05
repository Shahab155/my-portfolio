'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';
import Link from 'next/link';

const NavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Add scroll event for visual feedback
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`
          w-full max-w-5xl px-0 py-4 flex justify-between items-center
          transition-all duration-500 rounded-3xl backdrop-blur-xl
          border
          ${scrolled 
            ? 'bg-background/80 border-[var(--color-accent)]/30 shadow-[0_20px_48px_-12px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.6)]' 
            : 'bg-background/40 border-[var(--color-accent)]/15 shadow-md'}
        `}
      >
        <div className="w-full flex justify-between items-center px-6">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-primary)] dark:text-[var(--color-accent)] group"
          >
            Shahab
          </Link>

          {/* Right Side Items */}
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-md font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all group"
                >
                  {link.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-accent)] transition-all group-hover:w-full"
                    layoutId={`nav-underline-${link.name}`}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 text-[var(--color-text-primary)] bg-surface/50 rounded-xl border border-[var(--color-accent)]/10 xl:active:scale-90"
                aria-label="Toggle Menu"
              >
                {isOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 md:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`
                fixed top-0 right-0 bottom-0 w-[280px] p-10
                bg-background/95 backdrop-blur-2xl border-l border-white/5 dark:border-zinc-800/50 shadow-2xl
                flex flex-col items-start gap-8 md:hidden z-50
              `}
            >
              {/* Close Button in Sidebar */}
              <div className="w-full flex justify-end mb-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  <HiX size={28} />
                </button>
              </div>

              {NavLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors block py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
