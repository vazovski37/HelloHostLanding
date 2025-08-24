// file: src/app/page.tsx
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Solution } from '../components/Solution';
import { HowItWorks } from '../components/HowItWorks';
import { Recognition } from '../components/Recognition';
import { Footer } from '../components/Footer';
import { ParallaxBackground } from '../components/ParallaxBackground';
import { Problem } from '../components/Problem';

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