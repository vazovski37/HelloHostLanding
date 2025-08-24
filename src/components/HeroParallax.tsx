// file: src/components/HeroParallax.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from './Section';
import { Button } from './Button';
import { BrainCircuit, AreaChart, Blocks, Zap, Rocket } from 'lucide-react';
import { useRef } from 'react';

export const HeroParallax = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  // Create different parallax speeds for each layer
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const yTagline = useTransform(scrollYProgress, [0, 1], ['0%', '150%']);
  const yButtons = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <Section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* All hero content is now inside this sticky container */}
        <motion.div className="z-10 text-center">
          <motion.p
            style={{ y: yTagline }}
            className="flex items-center justify-center gap-2 text-md text-[var(--color-text-secondary)]"
          >
            <span>HelloHost, your</span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-full text-xs font-medium text-white">
              <Rocket size={14} className="text-[var(--color-primary)]" />
              success
            </span>
          </motion.p>
          
          <motion.div style={{ y: yText }} className="mt-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-glow">
              The Future of Hotel Management
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white/90">
                Give Your Team a Superpower
              </span>
            </h1>
          </motion.div>

          <motion.div className="mt-8 flex justify-center items-center gap-4 text-sm text-[var(--color-text-secondary)]">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <BrainCircuit size={16} className="text-[var(--color-primary)]/70" /> Smart Assistant
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <Zap size={16} className="text-[var(--color-primary)]/70" /> Operations Optimization
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <Blocks size={16} className="text-[var(--color-primary)]/70" /> Integrated System
            </span>
          </motion.div>
          
          <motion.div style={{ y: yButtons }} className="mt-10 flex justify-center gap-4">
            <Button href="#features" variant="primary">Explore Features</Button>
            <Button href="#join" variant="secondary">Try for Free</Button>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};