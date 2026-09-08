'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-surface/80 backdrop-blur-md border border-border rounded-2xl shadow-2xl"
      >
        <div className="flex items-center">
          <div className="bg-accent text-black font-bold tracking-widest uppercase text-[11px] px-2 py-1 rounded-sm shadow-[0_0_15px_rgba(0,242,195,0.4)]">
            FDY.
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-muted">
          <a href="#about-me" className="hover:text-foreground transition-colors">{t.nav.pillars}</a>
          <a href="#ventures" className="hover:text-foreground transition-colors">{t.nav.timeline}</a>
          
          <a href="#metrics" className="hover:text-foreground transition-colors">{t.nav.assets}</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-bold tracking-widest text-muted hover:text-foreground transition-colors"
          >
            <span className={language === 'en' ? 'text-foreground' : ''}>EN</span>
            <span className="text-muted/50">/</span>
            <span className={language === 'id' ? 'text-foreground' : ''}>ID</span>
          </button>
          
          <a href="#contact" className="px-5 py-2 text-[13px] font-semibold text-black bg-accent rounded-lg hover:bg-accent-dark transition-colors shadow-[0_0_20px_rgba(0,242,195,0.3)] hover:shadow-[0_0_25px_rgba(0,242,195,0.5)]">
            {t.nav.cta}
          </a>
        </div>

        <button 
          className="lg:hidden text-white ml-auto md:ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-6 right-6 pointer-events-auto bg-surface border border-border rounded-2xl p-4 flex flex-col gap-4 shadow-xl lg:hidden">
          <a href="#about-me" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors py-2">{t.nav.pillars}</a>
          <a href="#ventures" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors py-2">{t.nav.timeline}</a>
          
          <a href="#assets" className="text-xs font-semibold uppercase tracking-widest text-muted hover:text-foreground transition-colors py-2">{t.nav.assets}</a>
          
          <div className="flex items-center justify-between p-2 mt-2 border-t border-border">
            <span className="text-xs text-muted tracking-widest">THEME</span>
            <ThemeToggle />
          </div>

          <div className="flex items-center justify-between p-2 border-t border-border">
            <span className="text-xs text-muted tracking-widest">LANGUAGE</span>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-bold tracking-widest text-muted"
            >
              <span className={language === 'en' ? 'text-foreground' : ''}>EN</span>
              <span className="text-muted/50">|</span>
              <span className={language === 'id' ? 'text-foreground' : ''}>ID</span>
            </button>
          </div>

          <button className="w-full mt-2 px-5 py-3 text-sm font-semibold text-black bg-accent rounded-lg">
            {t.nav.cta}
          </button>
        </div>
      )}
    </header>
  );
}
