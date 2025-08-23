// file: src/components/Footer.tsx
import { WaitlistForm } from './WaitlistForm';

export const Footer = () => (
  <footer id="join" className="bg-[var(--color-content)] py-20 sm:py-28 text-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold">The Next Era of Hotel Management is Arriving.</h2>
      <WaitlistForm />
      <div className="mt-8 text-sm text-[var(--color-text-secondary)]">
        <a href="#" className="hover:text-white mx-3">Privacy Policy</a>·
        <a href="#" className="hover:text-white mx-3">Contact Us</a>
      </div>
      <p className="mt-4 text-xs text-[var(--color-text-secondary)]/70">&copy; {new Date().getFullYear()} Hello Host, Inc. All rights reserved.</p>
    </div>
  </footer>
);