import Image from 'next/image';

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-background)]/80 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-3">
          <Image 
            src="/icon.jpg" 
            alt="Hello Host Logo" 
            width={40} 
            height={40} 
            className="rounded-full" // Added for a circular look, remove if not needed
          />
          <span className="text-2xl font-bold">Hello Host</span>
        </a>

        {/* Navigation Section */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            Features
          </a>
          <a href="#roadmap" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
            Roadmap
          </a>
          <a href="#join" className="px-5 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold rounded-[var(--rounded-soft)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300">
            Join Waitlist
          </a>
        </nav>
      </div>
    </div>
  </header>
);
