'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const projects = [
  {
    title: 'ToscaFlow Tech Solution',
    description: 'Founder & Chief Executive Officer. Leading operations and technical direction for end-to-end software solutions.',
    tags: ['ASP.NET Core', 'Laravel', 'Flutter'],
    metrics: 'Since Apr 2024',
    featured: true,
  },
  {
    title: 'Yayasan Sagasitas Indonesia',
    description: 'Web Administrator, DevOps, & Database Administrator for sagasitas.org. Lead of SagaFarm IoT Program.',
    tags: ['DevOps', 'AWS', 'IoT'],
    metrics: 'Since Dec 2022',
    featured: false,
  },
  {
    title: 'Universitas Alma Ata',
    description: 'Assistant Lecturer & KKN Tematik Team Leader. Educating students and leading community projects.',
    tags: ['Education', 'Leadership', 'Tech'],
    metrics: 'Since Mar 2024',
    featured: false,
  },
];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="track-record" className="py-24 px-6 relative border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-accent uppercase mb-4">
              {t.portfolio.tag}
            </h2>
            <h3 className="text-3xl md:text-4xl font-medium text-white">
              {t.portfolio.title}
            </h3>
          </div>
          <button className="flex items-center gap-2 text-sm text-muted hover:text-white transition-colors group">
            {t.portfolio.viewAll} 
            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/40 transition-all overflow-hidden ${
                project.featured ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="text-2xl font-semibold text-white">{project.title}</h4>
                    <ExternalLink size={20} className="text-muted group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-muted/90 mb-8 max-w-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto border-t border-white/[0.08] pt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-muted bg-[#121619] rounded-md border border-white/[0.05]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-accent">
                    {project.metrics}
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
