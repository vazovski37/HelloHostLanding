'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

type AnimatedStatisticProps = {
  to: number;
  from?: number;
  label: string;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export const AnimatedStatistic = ({
  to,
  from = 0,
  label,
  prefix = '',
  suffix = '',
  className = '',
}: AnimatedStatisticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  
  const rounded = useTransform(count, (latest) => {
      const formatted = new Intl.NumberFormat('en-US').format(Math.round(latest));
      return formatted;
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration: 2.5,
        ease: 'easeOut',
      });
      return () => controls.stop();
    }
  }, [inView, count, to]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <h3 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] text-glow">
        {prefix}<motion.span>{rounded}</motion.span>{suffix}
      </h3>
      <p className="mt-2 text-md sm:text-lg text-[var(--color-text-secondary)]">{label}</p>
    </div>
  );
};