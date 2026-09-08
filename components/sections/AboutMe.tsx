'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export function AboutMe() {
  const { t } = useLanguage();

  return (
    <section id="about-me" className="py-24 px-6 relative border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative w-48 h-48 md:w-64 md:h-64 shrink-0"
        >
          <Image
            src="/assets/pic.png"
            alt={t.aboutMe.title}
            fill
            sizes="(max-width: 768px) 192px, 256px"
            className="rounded-3xl object-cover border-2 border-accent shadow-[0_0_30px_rgba(0,242,195,0.2)]"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">
            {t.aboutMe.tag}
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t.aboutMe.title}
          </h3>
          <h4 className="text-xl font-medium text-muted-dark mb-6">
            {t.aboutMe.subtitle}
          </h4>
          <p className="text-muted leading-relaxed mb-6">
            {t.aboutMe.p1}
          </p>
          <p className="text-muted leading-relaxed">
            {t.aboutMe.p2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
