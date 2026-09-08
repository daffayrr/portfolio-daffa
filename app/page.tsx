import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { AboutMe } from '@/components/sections/AboutMe';
import { BrandPath } from '@/components/sections/BrandPath';
import { Pillars } from '@/components/sections/Pillars';
import { Portfolio } from '@/components/sections/Portfolio';
import { Metrics } from '@/components/sections/Metrics';
import { ClosingCTA } from '@/components/sections/ClosingCTA';
import { Footer } from '@/components/sections/Footer';
import { InitialLoader } from '@/components/InitialLoader';

export default function Home() {
  return (
    <InitialLoader>
      <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-black overflow-x-hidden">
        <Header />
        <Hero />
        <AboutMe />
        <BrandPath />
        <Pillars />
        <Portfolio />
        <Metrics />
        <ClosingCTA />
        <Footer />
      </main>
    </InitialLoader>
  );
}
