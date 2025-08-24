// file: src/components/CustomCursor.tsx
'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed left-0 top-0 w-8 h-8 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999]"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        backgroundImage: 'radial-gradient(circle, rgba(185,28,28,0.5) 0%, transparent 60%)',
      }}
    />
  );
};