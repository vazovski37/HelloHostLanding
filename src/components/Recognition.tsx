// file: src/components/Recognition.tsx
import { Award, Trophy, Newspaper } from 'lucide-react';
import { Section } from './Section';

export const Recognition = () => (
  <Section>
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl font-bold">Innovation in the Spotlight</h2>
    </div>
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-[var(--color-content)] p-8 rounded-[var(--rounded-soft)]">
        <Award className="h-10 w-10 text-[var(--color-primary)] mb-4" />
        <h3 className="text-xl font-bold">Winner, GITA Startup Grant 2025</h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">Awarded for outstanding innovation in the hospitality technology sector.</p>
      </div>
      <div className="bg-[var(--color-content)] p-8 rounded-[var(--rounded-soft)]">
        <Trophy className="h-10 w-10 text-[var(--color-primary)] mb-4" />
        <h3 className="text-xl font-bold">First Place, Future of Hospitality Hackathon</h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">Recognized for developing a groundbreaking AI-powered solution for hotel management.</p>
      </div>
      <div className="bg-[var(--color-content)] p-8 rounded-[var(--rounded-soft)]">
        <Newspaper className="h-10 w-10 text-[var(--color-primary)] mb-4" />
        <h3 className="text-xl font-bold">Featured in "Top 5 Startups to Watch"</h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">Highlighted as a key innovator changing the future of the hospitality industry.</p>
      </div>
    </div>
  </Section>
);