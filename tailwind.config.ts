// file: tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b20d31',
        background: '#121212',
        content: '#1E1E1E',
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0A0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-poppins)'],
      },
      borderRadius: {
        soft: '12px',
      },
    },
  },
  plugins: [],
};
export default config;