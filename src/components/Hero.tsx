// file: src/components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Section } from './Section';
import { AnimatedHeroBackground } from './AnimatedHeroBackground';
import { ParticlesBackground } from './ParticlesBackground';
import { GridBackground } from './GridBackground';
import { HeroGlow } from './HeroGlow';
import { Button } from './Button'; // Import the new Button component
import { BrainCircuit, AreaChart, Blocks, Zap, Rocket } from 'lucide-react';

// ... (variants and text arrays remain unchanged) ...
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } } };
const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeIn' } } };
const headlineVariants = { visible: { transition: { staggerChildren: 0.05 } } };
const wordVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeIn' } } };
const headlineLine1 = "The Future of Hotel Management".split(" ");
const headlineLine2 = "Give Your Team a Superpower".split(" ");

export const Hero = () => (
  <Section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden mt-20 pt-20">
    <GridBackground />
    <HeroGlow />
    <AnimatedHeroBackground />
    <ParticlesBackground />
    
    <motion.div
      className="z-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p variants={itemVariants} className="flex items-center justify-center gap-2 text-md text-[var(--color-text-secondary)]">
        <span>HelloHost, your</span>
        <span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-full text-xs font-medium text-white">
          <Rocket size={14} className="text-[var(--color-primary)]" />
          success
        </span>
      </motion.p>
      
      <motion.div variants={itemVariants} className="mt-4">
        <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-glow" variants={headlineVariants}>
          {headlineLine1.map((word, index) => ( <motion.span key={index} variants={wordVariants} className="inline-block mr-3 md:mr-4">{word}</motion.span>))}
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white/90">
            {headlineLine2.map((word, index) => ( <motion.span key={index} variants={wordVariants} className="inline-block mr-2.5 md:mr-3">{word}</motion.span>))}
          </span>
        </motion.h1>
      </motion.div>

      {/* --- STYLED FEATURE SNIPPETS --- */}
      <motion.div variants={itemVariants} className="mt-8 flex justify-center items-center gap-4 text-sm text-[var(--color-text-secondary)]">
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
      {/* ------------------------------- */}

      {/* --- USE THE NEW BUTTON COMPONENT --- */}
      <motion.div variants={itemVariants} className="mt-10 flex justify-center gap-4">
            <Button 
              href="#join" 
              variant="primary" 
              className="py-2 px-5" 
              onClick={(e) => handleScroll(e, '#join')}
            >
              Join Waitlist
            </Button>
      </motion.div>
      {/* --------------------------------- */}
    </motion.div>
  </Section>
);
