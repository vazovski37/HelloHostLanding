// file: src/components/Section.tsx
'use client';

import { motion } from 'framer-motion';
import React, { forwardRef } from 'react'; // 1. Import forwardRef

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  },
};

// 2. Wrap the component definition in forwardRef
export const Section = forwardRef<HTMLElement, { children: React.ReactNode; className?: string; id?: string }>(
  ({ children, className = '', id }, ref) => (
    <motion.section
      ref={ref} // 3. Pass the ref directly to the motion component
      id={id}
      className={`py-20 sm:py-28 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  )
);

// Add a display name for better debugging
Section.displayName = 'Section';