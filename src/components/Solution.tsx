'use client';

import { BrainCircuit, Building, Users } from 'lucide-react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';
import { useRef } from 'react';
import { GridBackground } from './GridBackground';

type IconType = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;

const features: { icon: IconType; title: string }[] = [
  { icon: Building,     title: 'Unified PMS' },
  { icon: BrainCircuit, title: 'AI Communications' },
  { icon: Users,        title: 'Integrated CRM' },
];

/** SVG space */
const VB = { w: 1200, h: 760 };

// Core (top circle) — centered
const CORE = { cx: VB.w / 2, cy: 180, r: 110 };

// Bottom circles — spread
const CIRCLES = [
  { cx: VB.w * 0.1, cy: 560, r: 90, label: features[0].title, Icon: features[0].icon },
  { cx: VB.w * 0.50, cy: 560, r: 90, label: features[1].title, Icon: features[1].icon },
  { cx: VB.w * 0.9, cy: 560, r: 90, label: features[2].title, Icon: features[2].icon },
];

const STROKE_W = 8;

export default function Solution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  /** Parallax scroll */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  // animate line draw
  const draw = useTransform(smooth, [0.05, 0.35], [0, 1]);

  // core subtle motion
  const coreScale = useTransform(smooth, [0, 0.5, 1], [0.96, 1.07, 1]);
  const coreY     = useTransform(smooth, [0, 1], [6, -6]);

  // glow
  const glow      = useTransform(draw, [0.8, 1], [0, 1]);
  const glowBlur  = useTransform(glow, (v) => `${18 + v * 28}px`);
  const glowAlpha = useTransform(glow, (v) => 0.22 + v * 0.38);
  const filterCSS = useMotionTemplate`drop-shadow(0 0 ${glowBlur} rgba(178,13,49,${glowAlpha}))`;

  // stroke-dash
  const dash = useTransform(draw, [0, 1], [1, 0]);

  // starting Y for lines (bottom of core)
  const startY = CORE.cy ;

  return (
    <section
      ref={sectionRef}
      className="relative h-[400vh] bg-[rgba(var(--color-background-rgb),0.1)]"
      aria-labelledby="solution-title"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
         <GridBackground />
        <div className="mx-auto flex h-full w-full flex-col items-center justify-start pt-20">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
            className="text-center"
          >
            <h2 id="solution-title" className="text-3xl mt-9 sm:text-4xl md:text-5xl font-bold tracking-tight">
              Your Unified, Intelligent Command Center
            </h2>
            <p className="mt-4 text-[var(--color-text-secondary)] text-base sm:text-lg max-w-3xl mx-auto">
              Hello Host is the AI-powered core connecting your hotel’s PMS, CRM, and communications.
            </p>
          </motion.div>

          {/* Diagram */}
          <motion.svg
            viewBox={`0 0 ${VB.w} ${VB.h}`}
            className="mx-auto mt-12 block w-full max-w-6xl h-[60vh] min-h-[520px]"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" />
                <stop offset="100%" stopColor="#7a0b23" />
              </linearGradient>
            </defs>

            {/* 3 independent lines */}
            <motion.g
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth={STROKE_W}
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
              style={{ filter: filterCSS as any }}
            >
              {/* LEFT branch: straight down, elbow, into left circle */}
              <motion.path
                pathLength={1}
                d={[
                  `M ${CORE.cx - (CORE.cx * 0.1)  } ${startY}`,          // start at bottom of core
                  `V ${CIRCLES[0].cy - CIRCLES[0].r - 100}`, // go down partway
                  `H ${CIRCLES[0].cx}`,              // elbow to align with circle
                  `V ${CIRCLES[0].cy - CIRCLES[0].r}` // down into circle
                ].join(' ')}
                strokeDasharray="1"
                style={{ strokeDashoffset: dash }}
              />

              {/* MIDDLE branch: straight down */}
              <motion.path
                pathLength={1}
                d={[
                  `M ${CORE.cx + (CORE.cx * 0.00001) } ${startY}`,
                  `V ${CIRCLES[1].cy - CIRCLES[1].r - 100}`,
                  `H ${CIRCLES[1].cx}`,
                  `V ${CIRCLES[1].cy - CIRCLES[1].r}`
                ].join(' ')}
                strokeDasharray="1"
                style={{ strokeDashoffset: dash }}
              />

              {/* RIGHT branch: straight down, elbow, into right circle */}
              <motion.path
                pathLength={1}
                d={[
                  `M ${CORE.cx + (CORE.cx * 0.1) } ${startY}`,
                  `V ${CIRCLES[2].cy - CIRCLES[2].r - 100}`,
                  `H ${CIRCLES[2].cx}`,
                  `V ${CIRCLES[2].cy - CIRCLES[2].r}`
                ].join(' ')}
                strokeDasharray="1"
                style={{ strokeDashoffset: dash }}
              />
            </motion.g>

            {/* Core */}
            <motion.g
              style={{ y: CORE.cy, x: CORE.cx , scale: coreScale }}
              transform={`translate(${CORE.cx}, ${CORE.cy})`}
            >
              <motion.circle
                r={CORE.r + 34}
                fill="var(--color-primary)"
                opacity={0.2}
                style={{ opacity: glow }}
              />
              <circle r={CORE.r} fill="var(--color-content)" stroke="white" strokeOpacity={0.08} />
              <circle r={CORE.r * 0.86} fill="url(#lineGrad)" opacity={0.12} />
              <foreignObject x={-60} y={-60} width={120} height={120}>
                <div className="w-full h-full flex items-center justify-center">
                  <BrainCircuit className="w-16 h-16 text-[var(--color-primary)]" />
                </div>
              </foreignObject>
            </motion.g>

            {/* Feature circles */}
            {CIRCLES.map(({ cx, cy, r, label, Icon }) => (
              <g key={label} transform={`translate(${cx}, ${cy})`}>
                <circle
                  r={r}
                  fill="rgba(18,18,18,0.95)"
                  stroke="white"
                  strokeOpacity={0.10}
                />
                <foreignObject x={-r} y={-r} width={r * 2} height={r * 2}>
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 pointer-events-none">
                    <Icon className="h-12 w-12 text-white/85" />
                    <div className="text-sm md:text-base font-semibold text-white/95">
                      {label}
                    </div>
                  </div>
                </foreignObject>
              </g>
            ))}
          </motion.svg>
        </div>
      </div>
    </section>
  );
}

export { Solution };
