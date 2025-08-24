// file: src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { SocialLinks } from '../components/SocialLinks';
import SmoothScrollProvider from '../components/SmoothScrollProvider';
import { CustomCursor } from '../components/CustomCursor'; // 1. Import the cursor

// ... (font definitions)
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-poppins' });

export const metadata = {
  title: 'Hello Host | The Future of Hotel Management',
  description: "The AI-powered command center that unifies your entire hotel's operations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <CustomCursor /> {/* 2. Add the cursor component here */}
        <SmoothScrollProvider>
          {children}
          <SocialLinks />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}