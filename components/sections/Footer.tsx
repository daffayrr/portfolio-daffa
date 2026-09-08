'use client';

import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/[0.05] bg-[#080808] relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-accent rounded-sm opacity-80" />
            <span className="text-white font-bold tracking-widest uppercase text-sm">FDY.</span>
          </div>
          <p className="text-xs text-muted/60">
            © {new Date().getFullYear()} Farras Daffa Yassarramadhan. {t.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-muted">
          <a href="https://www.linkedin.com/in/daffayrr" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://toscaflow.id" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">ToscaFlow</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] text-muted hover:text-white hover:border-accent/40 transition-colors group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
      
      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-white/[0.05] text-[10px] text-muted/40 uppercase tracking-widest text-center md:text-left leading-relaxed">
        {t.footer.disclaimer}
      </div>
    </footer>
  );
}
