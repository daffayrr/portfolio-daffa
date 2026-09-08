'use client';

import { motion } from 'framer-motion';
import { Server, Code, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Pillars() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 relative border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">
            {t.pillars.tag}
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-white mb-6">
            {t.pillars.title} <br className="hidden md:block" />
            {t.pillars.title2}
          </h3>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1: ToscaFlow Ecosystem (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 lg:col-span-2 group p-8 rounded-2xl bg-gradient-to-br from-[#121619] to-[#0B0E0F] border border-white/[0.08] hover:border-accent/30 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Server size={120} />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded flex items-center justify-center font-bold text-black text-xl shadow-[0_0_15px_rgba(0,242,195,0.3)]">
                  TF
                </div>
                <h4 className="text-2xl text-white font-semibold">{t.pillars.card1Title}</h4>
              </div>
              <p className="text-muted text-lg max-w-lg leading-relaxed mb-8">
                {t.pillars.card1Desc}
              </p>
              <div className="flex gap-4">
                <a href="https://toscaflow.id" target="_blank" rel="noreferrer" className="text-sm font-semibold text-accent hover:text-white transition-colors">
                  Explore Ecosystem &rarr;
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Systems & Software */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-[#121619] border border-white/[0.08] flex items-center justify-center mb-6">
              <Code className="text-muted" size={24} />
            </div>
            <h4 className="text-white font-medium text-lg mb-3">{t.pillars.card2Title}</h4>
            <p className="text-muted/80 leading-relaxed text-sm">
              {t.pillars.card2Desc}
            </p>
          </motion.div>

          {/* Card 3: Strategic Capital */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 lg:col-span-1 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-all flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-[#121619] border border-white/[0.08] flex items-center justify-center mb-6">
              <TrendingUp className="text-muted" size={24} />
            </div>
            <h4 className="text-white font-medium text-lg mb-3">{t.pillars.card3Title}</h4>
            <p className="text-muted/80 leading-relaxed text-sm">
              {t.pillars.card3Desc}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
