'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Ambient Tosca Glow */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-ambient-glow pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center text-center max-w-5xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-surface/50 border border-border"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-[11px] font-medium tracking-widest uppercase text-muted">
            {t.hero.status}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-[1.1] mb-6"
        >
          {t.hero.titleLine1} <br className="hidden md:block" />
          {t.hero.titleLine2} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-dark">
            {t.hero.titleLine3}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted max-w-2xl font-light leading-relaxed mb-12"
        >
          {t.hero.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="https://toscaflow.id"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 text-sm font-semibold text-black bg-accent rounded-lg hover:bg-accent-dark transition-colors shadow-[0_0_20px_rgba(0,242,195,0.2)] text-center"
          >
            {t.hero.ctaPrimary}
          </a>
          <a 
            href="#track-record"
            className="px-8 py-4 text-sm font-semibold text-foreground bg-surface/50 border border-border rounded-lg hover:bg-surface hover:border-accent/50 transition-all text-center group"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
