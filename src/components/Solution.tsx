// file: src/components/Solution.tsx
import { BrainCircuit, Building, Users } from 'lucide-react';
import Image from 'next/image';
import { Section } from './Section';

export const Solution = () => (
  <Section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="bg-[var(--color-content)] rounded-[var(--rounded-soft)] p-4">
        <Image src="https://placehold.co/1200x750/1E1E1E/FFFFFF?text=Dashboard+Preview" alt="Hello Host Dashboard" width={1200} height={750} className="rounded-md" />
      </div>
      <div>
        <h2 className="text-3xl sm:text-4xl font-bold">Your Unified, Intelligent Command Center</h2>
        <h3 className="mt-6 text-xl font-bold text-[var(--color-primary)]">The AI Assistant That Understands Your Hotel</h3>
        <p className="mt-2 text-[var(--color-text-secondary)]">
          Hello Host's core is a natural language AI. Instead of clicking through menus, just ask questions like 'What are the priority maintenance tasks today?' or 'Show me all available clean rooms' and get instant answers.
        </p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-center gap-3">
            <BrainCircuit className="h-6 w-6 text-[var(--color-primary)]" />
            <span>AI-Powered Communication</span>
          </li>
          <li className="flex items-center gap-3">
            <Building className="h-6 w-6 text-[var(--color-primary)]" />
            <span>Full Property Management (PMS)</span>
          </li>
          <li className="flex items-center gap-3">
            <Users className="h-6 w-6 text-[var(--color-primary)]" />
            <span>Integrated Guest Relations (CRM)</span>
          </li>
        </ul>
      </div>
    </div>
  </Section>
);