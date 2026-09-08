'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function Metrics() {
  const { t } = useLanguage();

  return (
    <section id="metrics" className="py-20 md:py-28 px-4 sm:px-6 relative border-t border-border bg-background">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.metrics.map((item: any, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_30px_-5px_rgba(0,242,195,0.15)]"
            >
              {/* Subtle ambient tosca glow inside card on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative z-10">
                <div className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-accent drop-shadow-sm">
                  {item.number}
                </div>
                <div className="mt-3 text-xs font-mono font-semibold tracking-widest text-accent uppercase">
                  {item.label}
                </div>
              </div>

              <div className="relative z-10 mt-6 text-sm text-muted leading-relaxed font-medium">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
