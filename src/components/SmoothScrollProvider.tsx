// file: src/components/SmoothScrollProvider.tsx
'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // disable browser auto-restoration, let lenis control scroll
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return <>{children}</>;
}

export default SmoothScrollProvider;
