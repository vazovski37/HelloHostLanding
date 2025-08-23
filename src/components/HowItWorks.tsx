// file: src/components/HowItWorks.tsx
import { Section } from './Section';

export const HowItWorks = () => (
  <Section id="roadmap">
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">Get Ready for a Seamless Transition</h2>
    </div>
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <div className="text-4xl font-bold text-[var(--color-primary)]">1.</div>
        <h3 className="mt-2 text-xl font-bold">Join the Waitlist</h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">Sign up today to reserve your spot and get exclusive access to our private beta.</p>
      </div>
      <div>
        <div className="text-4xl font-bold text-[var(--color-primary)]">2.</div>
        <h3 className="mt-2 text-xl font-bold">Get Your Invitation</h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">We'll notify you when it's your turn to onboard. We'll help you connect your data in minutes.</p>
      </div>
      <div>
        <div className="text-4xl font-bold text-[var(--color-primary)]">3.</div>
        <h3 className="mt-2 text-xl font-bold">Transform Your Operations</h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">Watch as your team's efficiency skyrockets from day one.</p>
      </div>
    </div>
  </Section>
);