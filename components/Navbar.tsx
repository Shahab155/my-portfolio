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
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    // Add scroll event for visual feedback
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Track active section based on scroll position
    const handleScroll = () => {
      const sections = NavLinks.map(link => {
        const id = link.href === '/' ? 'home' : link.href.replace('#', '');
        const element = document.getElementById(id);
        return element ? { element, name: link.name } : null;
      }).filter(Boolean) as { element: Element; name: string }[];

      // Get the viewport height
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Find which section is most visible
      let activeSection = 'Home';
      let maxVisibleArea = 0;

      sections.forEach(({ element, name }) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementBottom = elementTop + rect.height;
        const viewportTop = scrollY;
        const viewportBottom = scrollY + viewportHeight;

        // Calculate visible area of this section
        const visibleTop = Math.max(elementTop, viewportTop);
        const visibleBottom = Math.min(elementBottom, viewportBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        // Adjust for navbar offset (sections near the top get priority)
        const adjustedVisibleHeight = rect.top < 200 && rect.top > -200 ? visibleHeight * 1.5 : visibleHeight;

        if (adjustedVisibleHeight > maxVisibleArea) {
          maxVisibleArea = adjustedVisibleHeight;
          activeSection = name;
        }
      });

      setActiveSection(activeSection);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`
          w-full max-w-7xl px-0 py-4 flex justify-between items-center
          transition-all duration-500 rounded-3xl backdrop-blur-xl
          border-2
          ${scrolled
            ? 'bg-background/80 border-[var(--color-accent)]/30 shadow-[0_20px_48px_-12px_rgba(0,0,0,0.6)]'
            : 'bg-background/40 border-[var(--color-accent)]/15 shadow-md'}
        `}
      >
        <div className="w-full flex justify-between items-center px-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-accent)] group hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded-md px-2 py-1"
          >
            Shahab
          </Link>

          {/* Right Side Items */}
          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NavLinks.map((link) => {
                const isActive = activeSection === link.name;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-md font-medium transition-all group focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-background rounded-sm px-2 py-1 ${
                      isActive
                        ? 'text-[var(--color-accent)]'
                        : 'text-white hover:text-[var(--color-accent)]'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[var(--color-accent)] transition-all ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 text-[var(--color-text-primary)] bg-surface/50 rounded-xl border border-[var(--color-accent)]/10 xl:active:scale-90 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
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
                bg-background/95 backdrop-blur-2xl border-l border-zinc-800/50 shadow-2xl
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

              {NavLinks.map((link, idx) => {
                const isActive = activeSection === link.name;
                return (
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
                      className={`text-xl font-semibold transition-colors block py-2 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                        isActive
                          ? 'text-[var(--color-accent)]'
                          : 'text-white hover:text-[var(--color-accent)]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
