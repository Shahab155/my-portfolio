'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isDevicePointer, setIsDevicePointer] = useState(false);

  // Motion values for the primary cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the trail effect
  const springConfig = { damping: 25, stiffness: 250 };
  
  const mainX = useSpring(cursorX, springConfig);
  const mainY = useSpring(cursorY, springConfig);

  // Trail springs with more delay/inertia
  const trail1X = useSpring(cursorX, { damping: 20, stiffness: 150 });
  const trail1Y = useSpring(cursorY, { damping: 20, stiffness: 150 });

  const trail2X = useSpring(cursorX, { damping: 18, stiffness: 80 });
  const trail2Y = useSpring(cursorY, { damping: 18, stiffness: 80 });

  const trail3X = useSpring(cursorX, { damping: 15, stiffness: 40 });
  const trail3Y = useSpring(cursorY, { damping: 15, stiffness: 40 });

  useEffect(() => {
    // Check if machine has a fine pointer (desktop)
    const checkPointer = () => {
      setIsDevicePointer(window.matchMedia('(pointer: fine)').matches);
    };
    checkPointer();

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', moveCursor);

    // Listen for interactive elements
    const updateInteractiveListeners = () => {
      const elements = document.querySelectorAll('a, button, input, [role="button"]');
      elements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateInteractiveListeners();
    
    // Observer for dynamic content to re-scan for interactive elements
    const observer = new MutationObserver(updateInteractiveListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (!isDevicePointer) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Luminous Trail - Purple Blur */}
      <motion.div
        style={{ x: trail3X, y: trail3Y }}
        className="absolute w-12 h-12 -left-6 -top-6 rounded-full bg-purple-500/20 blur-3xl"
      />
      
      {/* Luminous Trail - Cyan Blur */}
      <motion.div
        style={{ x: trail2X, y: trail2Y }}
        className="absolute w-8 h-8 -left-4 -top-4 rounded-full bg-cyan-500/10 blur-2xl"
      />
      
      {/* Main Glow Base */}
      <motion.div
        style={{ x: mainX, y: mainY }}
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(34, 211, 238, 0.4)' : 'rgba(34, 211, 238, 0.1)',
        }}
        className="absolute w-16 h-16 -left-8 -top-8 rounded-full blur-[40px] transition-colors duration-300"
      />

       {/* Core Point Glow */}
       <motion.div
        style={{ x: mainX, y: mainY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 1 : 0.8,
        }}
        className="absolute w-4 h-4 -left-2 -top-2 rounded-full bg-cyan-400 blur-sm opacity-80"
      />

       {/* Precision Dot */}
       <motion.div
        style={{ x: mainX, y: mainY }}
        className="absolute w-1.5 h-1.5 -left-[3px] -top-[3px] rounded-full bg-white shadow-[0_0_10px_#fff] z-10"
      />
    </div>
  );
}
