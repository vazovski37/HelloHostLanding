// file: src/components/HeroGlow.tsx
'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export const HeroGlow = () => {
  const [isMounted, setIsMounted] = useState(false);

  const opacity = useMotionValue(0);
  const size = useMotionValue(0);

  const backgroundImage = useTransform(
    [opacity, size],
    ([latestOpacity, latestSize]) => {
      // This is the line we're changing for the new look
      return `radial-gradient(ellipse ${latestSize}% 60% at 50% -10%, rgba(185, 28, 28, ${latestOpacity}), transparent 80%)`;
    }
  );

  useEffect(() => {
    setIsMounted(true);
    
    // Animate to the final state
    animate(opacity, 0.2, { // Reduced final opacity for a subtler effect
      duration: 1.5, 
      ease: [0.2, 0.8, 0.2, 1] 
    });
    animate(size, 100, { // Increased size for a wider spread
      duration: 1.5, 
      ease: [0.2, 0.8, 0.2, 1] 
    });
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      className="absolute inset-0 -z-20"
      style={{
        backgroundImage,
      }}
    />
  );
};