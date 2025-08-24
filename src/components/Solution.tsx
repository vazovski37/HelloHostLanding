'use client';

import { BrainCircuit, Building, Users } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: Building,
    title: "Unified PMS",
  },
  {
    icon: Users,
    title: "Integrated CRM",
  },
  {
    icon: BrainCircuit,
    title: "AI Communications",
  },
];

// Capitalize the icon components for JSX
const Icon1 = features[0].icon;
const Icon2 = features[1].icon;
const Icon3 = features[2].icon;

export const Solution = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // This offset makes the animation play out for the entire time the section is on screen
    offset: ["start start", "end end"] 
  });

  // Animate the drawing of the lines
  const line1Draw = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const line2Draw = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const line3Draw = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  // Animate the opacity of the feature circles
  const feature1Opacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const feature2Opacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const feature3Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  
  return (
    // We use a standard <section> tag here to ensure sticky positioning works
    <section ref={targetRef} className="relative h-[200vh] bg-[var(--color-background)]">
      {/* This is the sticky container that stays fixed while scrolling */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Your Unified, Intelligent Command Center</h2>
            <p className="mt-4 text-[var(--color-text-secondary)] text-lg max-w-4xl mx-auto">
              Hello Host is more than a tool—it's the AI-powered core that connects your entire hotel's operations.
            </p>
        </div>

        <div className="relative max-w-5xl mx-auto h-[400px] md:h-[500px] w-full mt-12">
            <svg
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              <motion.path
                d="M 50% 20% Q 30% 50%, 20% 80%"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="4"
                pathLength="1"
                style={{ pathLength: line1Draw }}
              />
              <motion.path
                d="M 50% 20% Q 50% 50%, 50% 80%"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="4"
                pathLength="1"
                style={{ pathLength: line2Draw }}
              />
              <motion.path
                d="M 50% 20% Q 70% 50%, 80% 80%"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="4"
                pathLength="1"
                style={{ pathLength: line3Draw }}
              />
            </svg>

            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-red-800 shadow-[0_0_40px_rgba(178,13,49,0.7)]">
              <div className="w-[90%] h-[90%] bg-[var(--color-content)] rounded-full flex items-center justify-center">
                <BrainCircuit className="w-12 h-12 md:w-16 md:h-16 text-[var(--color-primary)]" />
              </div>
            </div>

            <motion.div style={{ opacity: feature1Opacity }} className="absolute top-[80%] left-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-full bg-[var(--color-content)] border-2 border-white/10">
                    <Icon1 className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
                </div>
                <h3 className="font-bold text-white">{features[0].title}</h3>
            </motion.div>
            
            <motion.div style={{ opacity: feature3Opacity }} className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-full bg-[var(--color-content)] border-2 border-white/10">
                    <Icon3 className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
                </div>
                <h3 className="font-bold text-white">{features[2].title}</h3>
            </motion.div>

             <motion.div style={{ opacity: feature2Opacity }} className="absolute top-[80%] left-[80%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-full bg-[var(--color-content)] border-2 border-white/10">
                    <Icon2 className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
                </div>
                <h3 className="font-bold text-white">{features[1].title}</h3>
            </motion.div>
        </div>
      </div>
    </section>
  );
};