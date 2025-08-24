// file: src/components/Header.tsx
import Image from 'next/image';
import { Button } from './Button'; // 1. Import the new Button component

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <a href="#" className="flex items-center gap-3">
          <Image 
            src="/icon.jpg" 
            alt="Hello Host Logo" 
            width={40} 
            height={40} 
            className="rounded-lg"
          />
          <span className="text-2xl font-bold">Hello Host</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            Features
          </a>
          <a href="#roadmap" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            Roadmap
          </a>
          {/* 2. Replace the old `<a>` tag with the new Button component */}
          <Button href="#join" variant="primary" className="py-2 px-5">
            Join Waitlist
          </Button>
        </nav>
      </div>
    </div>
  </header>
);