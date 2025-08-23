// file: src/components/Hero.tsx
import { Section } from './Section';
import { WaitlistForm } from './WaitlistForm';

export const Hero = () => (
  <Section className="pt-40 text-center">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">The Future of Hotel Management is Coming.</h1>
    <p className="mt-6 max-w-3xl mx-auto text-lg text-[var(--color-text-secondary)]">
      Hello Host is the AI-powered command center that unifies your entire hotel's operations. Stop chasing tasks and prepare to delight guests. Join the private beta waitlist.
    </p>
    <WaitlistForm />
    <p className="mt-4 text-sm text-[var(--color-text-secondary)]">Be the first to get exclusive access. No spam, we promise.</p>
  </Section>
);