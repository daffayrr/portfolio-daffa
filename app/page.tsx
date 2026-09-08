import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Pillars } from '@/components/sections/Pillars';
import { Portfolio } from '@/components/sections/Portfolio';
import { Metrics } from '@/components/sections/Metrics';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-black">
      <Header />
      <Hero />
      <Pillars />
      <Portfolio />
      <Metrics />
      <Footer />
    </main>
  );
}
