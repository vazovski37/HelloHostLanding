// file: src/components/SocialLinks.tsx
import { Facebook, Send, Music2, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61579427575463&mibextid=wwXIfr&rdid=R1X3xa33PkLJ4Fj7&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19DRzebBZt%2F%3Fmibextid%3DwwXIfr#', 'aria-label': 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/hellohostagent/?utm_source=ig_web_button_share_sheet', 'aria-label': 'Instagram' },
  { icon: Music2, href: 'https://www.tiktok.com/@hellohostagent?is_from_webapp=1&sender_device=pc', 'aria-label': 'TikTok' },      // Placeholder for TikTok
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