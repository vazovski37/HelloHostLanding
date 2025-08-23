// file: src/app/page.tsx
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Problem } from '../components/Problem';
import { Solution } from '../components/Solution';
import { HowItWorks } from '../components/HowItWorks';
import { Recognition } from '../components/Recognition';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Recognition />
      <Footer />
    </main>
  );
}