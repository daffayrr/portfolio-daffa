'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function ClosingCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 relative border-t border-border bg-background overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-mono font-bold tracking-[0.2em] text-accent uppercase mb-6">
            {t.closingCta.tag}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-12 max-w-3xl mx-auto drop-shadow-sm">
            {t.closingCta.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-surface/50 hover:bg-accent text-foreground hover:text-black border border-border transition-all duration-300 rounded-full px-10 py-4 font-semibold text-sm shadow-[0_0_20px_rgba(0,242,195,0.1)] hover:shadow-[0_0_30px_rgba(0,242,195,0.4)]"
          >
            {t.closingCta.btn}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
