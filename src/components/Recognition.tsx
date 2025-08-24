'use client';

import { Award, Trophy, Newspaper } from 'lucide-react';
import { Section } from './Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const recognitions = [
  {
    icon: Award,
    title: "Winner, GITA Startup Grant 2025",
    description: "Awarded for outstanding innovation in the hospitality technology sector.",
  },
  {
    icon: Trophy,
    title: "First Place, Future of Hospitality Hackathon",
    description: "Recognized for developing a groundbreaking AI-powered solution for hotel management.",
  },
  {
    icon: Newspaper,
    title: "Featured in 'Top 5 Startups to Watch'",
    description: "Highlighted as a key innovator changing the future of the hospitality industry.",
  }
];

// Reusable component for the animated cards
const RecognitionCard = ({ recognition, i, scrollYProgress }: { recognition: any, i: number, scrollYProgress: any }) => {
  // As you scroll, each card will scale down. The top card is always at scale 1.
  const scale = useTransform(scrollYProgress, [i * 0.25, (i + 1) * 0.25], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [i * 0.25, (i + 1) * 0.25], [1, 0.5]);

  return (
    <motion.div
      style={{
        scale,
        opacity,
      }}
      className="sticky top-20 bg-[var(--color-content)] p-8 border border-white/10 rounded-[var(--rounded-soft)] w-full max-w-4xl min-h-[250px] shadow-2xl flex flex-col justify-center items-center text-center"
    >
      <recognition.icon className="h-12 w-12 text-[var(--color-primary)] mb-4" />
      <h3 className="text-2xl font-bold">{recognition.title}</h3>
      <p className="mt-2 text-lg text-[var(--color-text-secondary)] max-w-lg">{recognition.description}</p>
    </motion.div>
  );
};


export const Recognition = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  return (
    <Section ref={targetRef} className="h-[300vh]">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-3xl sm:text-4xl font-bold">Innovation in the Spotlight</h2>
      </div>

      <div className="relative flex flex-col items-center">
        {recognitions.map((recognition, i) => (
          <RecognitionCard key={i} i={i} recognition={recognition} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </Section>
  );
};