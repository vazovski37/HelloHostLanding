'use client';

import Image from 'next/image';
import { Button } from './Button'; // Assuming Button component is in this path
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling for the remaining button
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }

    // Close the mobile menu after clicking a link
    setIsMenuOpen(false);
  };

  const menuVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/icon.jpg"
              alt="Hello Host Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold">Hello Host</span>
          </a>

          {/* Desktop Button */}
          <nav className="hidden md:flex items-center">
            <Button 
              href="#join" 
              variant="primary" 
              className="py-2 px-5" 
              onClick={(e) => handleScroll(e, '#join')}
            >
              Join Waitlist
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:hidden absolute top-20 left-0 w-full bg-[var(--color-background)]/95 backdrop-blur-md"
          >
            <nav className="flex flex-col items-center py-8">
              <Button 
                href="#join" 
                variant="primary" 
                onClick={(e) => handleScroll(e, '#join')}
              >
                Join Waitlist
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
