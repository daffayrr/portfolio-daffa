'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowUpRight } from 'lucide-react';

export interface TimelineItem {
  id: number;
  title: string;
  period: string;
  domain: string;
  description: string;
  objective: string;
  link?: string;
  logo: string;
}

export function BrandPath() {
  const { t } = useLanguage();

  return (
    <section id="ventures" className="py-24 px-6 relative border-t border-border overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">
            {t.brandPath.tag}
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-foreground">
            {t.brandPath.title}
          </h3>
        </motion.div>

        <div className="relative border-l border-border md:ml-6 space-y-12">
          {t.brandPath.items.map((item: TimelineItem, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline Node */}
              <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(0,242,195,0.6)] group-hover:shadow-[0_0_15px_rgba(0,242,195,1)] transition-all duration-500 z-10" />
              {/* Glowing Line segment */}
              <div className="absolute left-[-1px] top-4 bottom-[-3rem] w-[2px] bg-gradient-to-b from-accent/50 to-transparent transition-opacity duration-500" />
              
              {/* Card */}
              <div className="backdrop-blur-md bg-surface/50 border border-accent/20 group-hover:border-accent/50 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 shadow-[0_0_15px_rgba(0,242,195,0.05)] group-hover:shadow-[0_0_30px_rgba(0,242,195,0.2)] relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  
                  {/* Logo */}
                  <div className="shrink-0 w-24 h-24 md:w-32 md:h-32 bg-white rounded-xl p-3 border border-border flex items-center justify-center relative">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 96px, 128px"
                      className="object-contain p-3"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-foreground tracking-tight">{item.title}</h4>
                        <div className="text-sm text-accent font-semibold mt-1">{item.period}</div>
                      </div>
                      {item.link && (
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-dark bg-background border border-border rounded-lg hover:text-foreground hover:border-accent/30 transition-all group/btn shrink-0"
                        >
                          Visit
                          <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>

                    <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-wider uppercase text-muted bg-background rounded-md border border-border">
                      {item.domain}
                    </div>

                    <p className="text-muted leading-relaxed mb-4 text-sm md:text-base">
                      {item.description}
                    </p>
                    
                    <div className="bg-background/50 border-l-2 border-accent/50 p-4 rounded-r-lg">
                      <p className="text-xs md:text-sm text-muted-dark italic">
                        <span className="font-semibold not-italic text-muted">Objective: </span> 
                        {item.objective}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
