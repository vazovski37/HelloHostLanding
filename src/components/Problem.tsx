// file: src/components/Problem.tsx
'use client';

import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { ArrowRightLeft, Frown, GitBranchPlus } from 'lucide-react';
import { Section } from './Section';
import { useRef } from 'react';

const problems = [
  { icon: ArrowRightLeft, title: "Fragmented Communication", description: "Hours lost daily coordinating between front desk, housekeeping, and maintenance over radios and paper logs." },
  { icon: Frown, title: "Guest Experience Suffers", description: "Slow response times and missed details lead to negative reviews and lost revenue." },
  { icon: GitBranchPlus, title: "Operational Chaos", description: "Juggling multiple, complex systems that don't talk to each other creates friction for your team." }
];

export const Problem = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Mouse Tracking for Spotlight Effect ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 400, damping: 30 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    }
  };
  
  const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
  }
  // ------------------------------------------

  // --- Scroll Tracking for Parallax Effect ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Each card will have a different parallax speed
  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-140, 140]);
  const cardParallax = [y1, y2, y3];
  // ------------------------------------------

  return (
    <Section ref={containerRef}>
      {/* --- Corrected Headline Animation --- */}
      <div className="text-center mb-24 overflow-hidden">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] leading-tight"
        >
          Running a Hotel Shouldn't Be This Disconnected.
        </motion.h2>
      </div>
      {/* ------------------------------------ */}
      
      {/* Main container for the grid that tracks the mouse */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative grid grid-cols-1 md:grid-cols-3 gap-8 group"
      >
        {/* --- The Spotlight Div --- */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [smoothMouseX, smoothMouseY],
              ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(185, 28, 28, 0.15), transparent 80%)`
            )
          }}
        />
        {/* ------------------------- */}

        {problems.map((problem, i) => (
          <motion.div
            key={i}
            style={{ y: cardParallax[i] }} // Apply the parallax effect here
            className="relative bg-[var(--color-content)] p-8 rounded-[var(--rounded-soft)] border border-white/10"
          >
            <div className="relative z-10 text-center flex flex-col items-center">
              <problem.icon className="h-10 w-10 text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-bold">{problem.title}</h3>
              <p className="mt-2 text-[var(--color-text-secondary)]">{problem.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};