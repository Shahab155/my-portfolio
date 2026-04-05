'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import FloatingActions from './FloatingActions';
import { motion, AnimatePresence } from 'framer-motion';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-full flex flex-col"
      >
        {!isLoading && (
          <>
            <CustomCursor />
            <Navbar />
            <FloatingActions />
            {children}
          </>
        )}
      </motion.div>
    </>
  );
}
