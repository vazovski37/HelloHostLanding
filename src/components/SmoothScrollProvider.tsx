// file: src/components/SmoothScrollProvider.tsx
'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import { useEffect } from 'react'; // 1. Import useEffect

function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  // 2. Add this useEffect hook
  useEffect(() => {
    // This tells the browser to let us handle scrolling
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrollProvider;