// file: src/components/SocialLinks.tsx
import { Facebook, Twitter, Send, MessageSquare, Music } from 'lucide-react';

const socialLinks = [
  { icon: MessageSquare, href: '#', 'aria-label': 'Discord' }, // Placeholder for Discord
  { icon: Facebook, href: '#', 'aria-label': 'Facebook' },
  { icon: Twitter, href: '#', 'aria-label': 'X (formerly Twitter)' },
  { icon: Music, href: '#', 'aria-label': 'TikTok' },      // Placeholder for TikTok
  { icon: Send, href: '#', 'aria-label': 'Telegram' },
];

export const SocialLinks = () => (
  <div className="fixed bottom-8 left-8 z-50 hidden md:flex items-center gap-4">
    <span className="text-md font-medium text-[var(--color-text-secondary)]">Follow Us</span>
    <div className="flex items-center gap-2">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          aria-label={link['aria-label']}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
        >
          <link.icon size={18} className="text-white" />
        </a>
      ))}
    </div>
  </div>
);