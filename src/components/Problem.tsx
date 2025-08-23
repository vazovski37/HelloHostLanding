// file: src/components/Problem.tsx
import { ArrowRightLeft, Frown, GitBranchPlus } from 'lucide-react';
import { Section } from './Section';

export const Problem = () => (
  <Section id="features">
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">Running a Hotel Shouldn't Be This Disconnected.</h2>
    </div>
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-[var(--color-content)] p-8 rounded-[var(--rounded-soft)] text-center">
        <ArrowRightLeft className="mx-auto h-10 w-10 text-[var(--color-primary)]" />
        <h3 className="mt-4 text-xl font-bold">Fragmented Communication</h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">Hours lost daily coordinating between front desk, housekeeping, and maintenance over radios and paper logs.</p>
      </div>
      <div className="bg-[var(--color-content)] p-8 rounded-[var(--rounded-soft)] text-center">
        <Frown className="mx-auto h-10 w-10 text-[var(--color-primary)]" />
        <h3 className="mt-4 text-xl font-bold">Guest Experience Suffers</h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">Slow response times and missed details lead to negative reviews and lost revenue.</p>
      </div>
      <div className="bg-[var(--color-content)] p-8 rounded-[var(--rounded-soft)] text-center">
        <GitBranchPlus className="mx-auto h-10 w-10 text-[var(--color-primary)]" />
        <h3 className="mt-4 text-xl font-bold">Operational Chaos</h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">Juggling multiple, complex systems that don't talk to each other creates friction for your team.</p>
      </div>
    </div>
  </Section>
);