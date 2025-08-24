// file: src/components/ParallaxBackground.tsx
'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { AnimatedHeroBackground } from './AnimatedHeroBackground';
import { ParticlesBackground } from './ParticlesBackground';
import { GridBackground } from './GridBackground';
import { HeroGlow } from './HeroGlow';
import { useEffect } from 'react';

export const ParallaxBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for a smooth, delayed reaction to mouse movement
  const springConfig = { stiffness: 100, damping: 20 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Transform mouse position into rotation values for the 3D effect
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ['-7.5deg', '7.5deg']);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ['7.5deg', '-7.5deg']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to a -0.5 to 0.5 range
      const { clientX, clientY, currentTarget } = e;
      const { innerWidth, innerHeight } = currentTarget as Window;
      const x = clientX / innerWidth - 0.5;
      const y = clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed left-0 top-0 w-full h-full -z-50"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Each background layer is given a different Z-translation to create depth */}
      <div style={{ transform: 'translateZ(-100px)' }}><GridBackground /></div>
      <div style={{ transform: 'translateZ(-200px)' }}><HeroGlow /></div>
      <div style={{ transform: 'translateZ(0px)' }}><AnimatedHeroBackground /></div>
      <div style={{ transform: 'translateZ(-50px)' }}><ParticlesBackground /></div>
    </motion.div>
  );
};