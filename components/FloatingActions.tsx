'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function FloatingActions() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4"
    >
       {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/923022187590"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-full bg-[#25D366] text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[#25D366]/40 transition-all hover:scale-110 active:scale-90 flex items-center justify-center relative group"
        aria-label="Contact on WhatsApp"
      >
        {/* Simple ping animation for emphasis */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20 hidden group-hover:block" />
        <FaWhatsapp size={26} />
      </Link>
    </motion.div>
  );
}
