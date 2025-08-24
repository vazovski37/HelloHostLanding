import { Mail, Phone, Twitter, Linkedin, Facebook } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';

export const Footer = () => (
  <footer id="join" className="bg-[var(--color-content)] py-20 sm:py-28 text-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold">The Next Era of Hotel Management is Arriving.</h2>
      <WaitlistForm />

      {/* Social Media Links */}
      <div className="mt-12 flex justify-center items-center space-x-6">
        {/* <a href="#" aria-label="Twitter" className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
          <Twitter size={24} />
        </a>
        <a href="#" aria-label="LinkedIn" className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
          <Linkedin size={24} />
        </a> */}
        <a href="#" aria-label="Facebook" className="text-[var(--color-text-secondary)] hover:text-white transition-colors">
          <Facebook size={24} />
        </a>
      </div>

      {/* Contact Information */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-[var(--color-text-secondary)]">
        <a href="mailto:contact@hellohost.com" className="flex items-center gap-2 hover:text-white transition-colors">
          <Mail size={16} />
          <span>contact@hellohost.com</span>
        </a>
        <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
          <Phone size={16} />
          <span>+1 (234) 567-890</span>
        </a>
      </div>

      {/* Legal Links & Copyright */}
      <div className="mt-8 border-t border-gray-800 pt-8 text-sm text-[var(--color-text-secondary)]">
        <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-white mx-3">Privacy Policy</a>·
            <a href="#" className="hover:text-white mx-3">Contact Us</a>
        </div>
        <p className="mt-4 text-xs text-[var(--color-text-secondary)]/70">&copy; {new Date().getFullYear()} Hello Host, Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
);