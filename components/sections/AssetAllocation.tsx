'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export function AssetAllocation() {
  const { t } = useLanguage();

  const getAssetImage = (index: number) => {
    switch(index) {
      case 0: return '/assets/logos/swiss.svg';
      case 1: return '/assets/logos/gold.svg';
      case 2: return '/assets/logos/reksadana.png';
      default: return '';
    }
  };

  return (
    <section id="assets" className="py-24 px-6 relative z-10 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">
            {t.assets.tag}
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground tracking-tight leading-tight max-w-2xl">
            {t.assets.title}
          </h3>
          <p className="mt-6 text-muted max-w-2xl leading-relaxed text-lg">
            {t.assets.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.assets.cards.map((card: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="backdrop-blur-md bg-surface/50 border border-border hover:border-accent/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,242,195,0.1)] flex flex-col group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Vector Asset */}
                <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center mb-6 p-3 group-hover:border-accent/30 transition-colors shadow-sm">
                  <Image 
                    src={getAssetImage(index)} 
                    alt={card.title} 
                    width={40} 
                    height={40} 
                    className={`object-contain ${index === 0 ? 'scale-110' : ''}`}
                  />
                </div>
                
                {/* Tag & Title */}
                <div className="text-[10px] font-bold tracking-widest uppercase text-accent mb-3">
                  {card.tag}
                </div>
                <h4 className="text-xl text-foreground font-semibold mb-4 leading-snug">
                  {card.title}
                </h4>
                
                {/* Thesis */}
                <p className="text-muted/80 text-sm leading-relaxed mb-8 flex-1">
                  {card.thesis}
                </p>
                
                {/* Role */}
                <div className="mt-auto pt-4 border-t border-border/50">
                  <div className="text-xs font-semibold text-muted-dark uppercase tracking-wider mb-1">Strategic Role</div>
                  <div className="text-sm font-medium text-foreground">{card.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
