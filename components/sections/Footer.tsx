'use client';

import { ArrowUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-12 px-6 border-t border-border bg-background relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center">
            <div className="bg-accent text-black font-bold tracking-widest uppercase text-[11px] px-2 py-1 rounded-sm opacity-90">
              FDY.
            </div>
          </div>
          <p className="text-xs text-muted/60">
            © {new Date().getFullYear()} Farras Daffa Yassarramadhan. {t.footer.copyright}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-6 text-sm font-medium text-muted">
            <a href="https://www.linkedin.com/in/daffayrr" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="https://toscaflow.id" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">ToscaFlow</a>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-muted/80">
            <a href="mailto:farrasdy@gmail.com" className="hover:text-accent transition-colors">farrasdy@gmail.com</a>
            <span className="hidden md:block text-border">•</span>
            <a href="mailto:farras.yassarramadhan@toscaflow.id" className="hover:text-accent transition-colors">farras.yassarramadhan@toscaflow.id</a>
          </div>
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-surface/50 border border-border text-muted hover:text-foreground hover:border-accent/40 transition-colors group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
      
      <div className="max-w-5xl mx-auto mt-12 pt-6 border-t border-border text-[10px] text-muted/40 uppercase tracking-widest text-center md:text-left leading-relaxed">
        {t.footer.disclaimer}
      </div>
    </footer>
  );
}
