'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

const NavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Determine initial theme after hydration to avoid mismatch
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    // Add scroll event for visual feedback
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  // Prevent flash of unstyled toggle
  if (!theme) return null;

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`
          w-full max-w-7xl px-0 py-4 flex justify-between items-center
          transition-all duration-500 rounded-3xl backdrop-blur-xl
          border border-[var(--color-accent)]/10
          ${scrolled ? 'bg-background/80 shadow-[0_20px_48px_-12px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.4)]' : 'bg-background/40 shadow-sm'}
        `}
      >
        <div className="w-full flex justify-between items-center px-6">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-primary)] dark:text-[var(--color-accent)] group"
        >
          &lt;Shahab/&gt;
        </Link>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-md sm:text-lg font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all group"
            >
              {link.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-accent)] transition-all group-hover:w-full"
                layoutId={`nav-underline-${link.name}`}
              />
            </Link>
          ))}
        </div>

        {/* Right Section: Theme Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-accent/5 text-accent hover:bg-accent/15 transition-all active:scale-90 border border-accent/10"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 text-[var(--color-text-primary)] bg-surface/50 rounded-xl border border-[var(--color-accent)]/10 xl:active:scale-90"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className={`
              fixed top-32 left-[10%] right-[10%] p-8 rounded-[32px]
              bg-surface/95 backdrop-blur-2xl border border-[var(--color-accent)]/10 shadow-2xl
              flex flex-col items-center gap-6 md:hidden z-40
            `}
          >
            {NavLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="w-full text-center"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-[var(--color-accent)] block py-2"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
