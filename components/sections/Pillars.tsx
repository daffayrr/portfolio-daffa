'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Terminal, Cloud } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Pillars() {
  const { t } = useLanguage();
  const cards = t.pillars.items;

  return (
    <section id="about" className="py-24 px-6 relative z-10 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">
            {t.pillars.badge}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight leading-tight">
            {t.pillars.heading} <br />
            <span className="text-muted-dark">{t.pillars.subheading}</span>
          </h3>
        </motion.div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Enterprise Ecosystem (ToscaFlow) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-2xl border border-border bg-surface/80 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(0,242,195,0.15)] flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent rounded flex items-center justify-center font-bold text-black text-xl shadow-[0_0_15px_rgba(0,242,195,0.3)]">
                    TF
                  </div>
                  <h4 className="text-lg md:text-xl text-foreground font-semibold">{cards[0].title}</h4>
                </div>
                
                {/* Top-Right Status */}
                <div className="inline-flex items-center gap-2 bg-background/50 border border-border px-3 py-1.5 rounded-full self-start">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-foreground">{cards[0].badge}</span>
                </div>
              </div>

              <p className="text-muted/80 text-sm md:text-base leading-relaxed mb-6">
                {cards[0].description}
              </p>
            </div>

            {/* Bottom Metrics & Tags */}
            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {cards[0].tags.map((tag: string, i: number) => (
                  <span key={i} className="text-[10px] font-semibold tracking-wider text-muted px-2.5 py-1 bg-background rounded-md border border-border flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent/70"></span>
                    {tag}
                  </span>
                ))}
              </div>
              <a href="https://toscaflow.id" target="_blank" rel="noreferrer" className="text-xs font-semibold text-accent hover:text-foreground transition-colors group/link mt-2 inline-flex items-center gap-1">
                {cards[0].link}
              </a>
            </div>
          </motion.div>

          {/* Card 2: Strategic Finance & Capital Allocation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative rounded-2xl border border-border bg-surface/80 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(0,242,195,0.15)] flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded flex items-center justify-center">
                    <TrendingUp className="text-accent" size={20} />
                  </div>
                  <h4 className="text-lg md:text-xl text-foreground font-semibold max-w-[200px] leading-tight">{cards[1].title}</h4>
                </div>
                
                {/* Top-Right Status */}
                <div className="inline-flex items-center bg-background/50 border border-border px-3 py-1.5 rounded-full self-start">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-muted">{cards[1].badge}</span>
                </div>
              </div>

              <p className="text-muted/80 text-sm md:text-base leading-relaxed mb-6">
                {cards[1].description}
              </p>
            </div>

            {/* Bottom Metrics & Tags */}
            <div className="flex flex-col gap-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                {cards[1].tags.map((tag: string, i: number) => (
                  <span key={i} className="text-[10px] font-bold tracking-widest uppercase text-muted bg-background px-2.5 py-1 rounded-md border border-border">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-[10px] font-bold text-accent uppercase tracking-wider mt-2 bg-accent/5 border border-accent/10 inline-block px-3 py-1.5 rounded-md w-fit">
                
              </div>
            </div>
          </motion.div>

          {/* Card 3: Core Engineering & Systems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group relative rounded-2xl border border-border bg-surface/80 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(0,242,195,0.15)] flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-background border border-border rounded flex items-center justify-center">
                    <Terminal className="text-muted group-hover:text-foreground transition-colors" size={20} />
                  </div>
                  <h4 className="text-lg md:text-xl text-foreground font-semibold max-w-[200px] leading-tight">{cards[2].title}</h4>
                </div>
                
                {/* Top-Right Status */}
                <div className="inline-flex items-center bg-background/50 border border-border px-3 py-1.5 rounded-full self-start">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-muted">{cards[2].badge}</span>
                </div>
              </div>

              <p className="text-muted/80 text-sm md:text-base leading-relaxed mb-6">
                {cards[2].description}
              </p>
            </div>

            {/* Bottom Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {cards[2].tags.map((tag: string, i: number) => (
                <span key={i} className="text-[10px] font-semibold tracking-wider text-muted px-2.5 py-1 bg-background rounded-md border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Quantitative Intelligence & Cloud Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group relative rounded-2xl border border-border bg-surface/80 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_0_30px_-10px_rgba(0,242,195,0.15)] flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-background border border-border rounded flex items-center justify-center">
                    <Cloud className="text-muted group-hover:text-foreground transition-colors" size={20} />
                  </div>
                  <h4 className="text-lg md:text-xl text-foreground font-semibold max-w-[200px] leading-tight">{cards[3].title}</h4>
                </div>
                
                {/* Top-Right Status */}
                <div className="inline-flex items-center bg-background/50 border border-border px-3 py-1.5 rounded-full self-start">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-muted">{cards[3].badge}</span>
                </div>
              </div>

              <p className="text-muted/80 text-sm md:text-base leading-relaxed mb-6">
                {cards[3].description}
              </p>
            </div>

            {/* Bottom Tech Pills */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {cards[3].tags.map((tag: string, i: number) => (
                <span key={i} className="text-[10px] font-semibold tracking-wider text-muted px-2.5 py-1 bg-background rounded-md border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
