'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-[var(--color-bg)] py-12 px-6 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-600 dark:text-zinc-500 font-medium"
        >
          © {currentYear} Shahab Ud Din. All rights reserved.
        </motion.p>
        
      
      </div>
    </footer>
  );
}
