// file: src/components/ParticlesBackground.tsx
'use client';
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type IOptions, type Engine } from '@tsparticles/engine';
import { loadFull } from "tsparticles";
import { motion } from 'framer-motion';

const ambientOptions: IOptions = {
  particles: {
    number: { value: 120, density: { enable: true } },
    color: { value: '#ffffff' },
    opacity: { value: { min: 0.1, max: 0.4 }, animation: { enable: true, speed: 0.5 } },
    size: { value: { min: 1, max: 2.5 } },
    move: { enable: true, speed: 0.3, direction: 'none', random: true, outModes: { default: 'out' } },
  },
  interactivity: { events: { resize: true } },
  detectRetina: true,
  background: { color: 'transparent' },
};

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }} // Fade in slowly
      >
        <Particles id="tsparticles" options={ambientOptions} className="absolute inset-0 -z-20" />
      </motion.div>
    );
  }

  return null;
};