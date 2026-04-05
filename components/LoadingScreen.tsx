'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Small delay before fading out
          setTimeout(() => setVisible(false), 800);
          return 100;
        }
        // Accelerate as it gets closer
        const increment = Math.random() * (prev > 80 ? 2 : 10);
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  const handleSkip = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(onComplete, 800);
      return () => clearTimeout(timer);
    }
  }, [visible, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
        >
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
          </div>

          {/* Concentric Rings Container */}
          <div className="relative flex items-center justify-center w-64 h-64 mb-12">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-cyan-500/30 rounded-full"
                initial={{ width: 0, height: 0, opacity: 0 }}
                animate={{ 
                  width: [100 + i * 60, 120 + i * 60, 100 + i * 60],
                  height: [100 + i * 60, 120 + i * 60, 100 + i * 60],
                  opacity: [0.1, 0.3, 0.1],
                  rotate: i % 2 === 0 ? 360 : -360
                }}
                transition={{ 
                  duration: 4 + i, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            ))}
            
            {/* Inner Pulsing Circle */}
            <motion.div 
               className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center"
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
            >
               <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]" />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="text-center z-10 space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-black tracking-[0.3em] uppercase bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent"
            >
              Shahab ud Din
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xs tracking-[0.5em] uppercase text-zinc-500"
            >
              Loading Portfolio
            </motion.p>
          </div>

          {/* Progress Bar Container */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 space-y-2">
            <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-zinc-600">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-cyan-500 shadow-[0_0_8px_#22d3ee]"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={handleSkip}
            className="absolute bottom-8 right-8 text-[10px] uppercase tracking-[0.3em] text-zinc-600 hover:text-cyan-500 transition-colors duration-300 flex items-center gap-2 group"
          >
            Skip Intro
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
