'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white/[0.02] backdrop-blur-md border border-white/[0.08] rounded-2xl shadow-2xl"
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-accent rounded-sm shadow-[0_0_15px_rgba(0,242,195,0.4)]" />
          <span className="text-white font-bold tracking-widest uppercase text-sm">FDY.</span>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-muted">
          <a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a>
          <a href="https://toscaflow.id" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.nav.ventures}</a>
          <a href="#track-record" className="hover:text-white transition-colors">{t.nav.trackRecord}</a>
          <a href="#thesis" className="hover:text-white transition-colors">{t.nav.thesis}</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-bold tracking-widest text-muted hover:text-white transition-colors"
          >
            <span className={language === 'en' ? 'text-white' : ''}>EN</span>
            <span className="text-white/[0.2]">/</span>
            <span className={language === 'id' ? 'text-white' : ''}>ID</span>
          </button>
          
          <button className="px-5 py-2 text-[13px] font-semibold text-black bg-accent rounded-lg hover:bg-accent-dark transition-colors shadow-[0_0_20px_rgba(0,242,195,0.3)] hover:shadow-[0_0_25px_rgba(0,242,195,0.5)]">
            {t.nav.cta}
          </button>
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
        <div className="absolute top-20 left-6 right-6 pointer-events-auto bg-[#121619] border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-4 shadow-xl lg:hidden">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-muted hover:text-white font-medium p-2">{t.nav.about}</a>
          <a href="https://toscaflow.id" onClick={() => setIsOpen(false)} className="text-muted hover:text-white font-medium p-2">{t.nav.ventures}</a>
          <a href="#track-record" onClick={() => setIsOpen(false)} className="text-muted hover:text-white font-medium p-2">{t.nav.trackRecord}</a>
          <a href="#thesis" onClick={() => setIsOpen(false)} className="text-muted hover:text-white font-medium p-2">{t.nav.thesis}</a>
          
          <div className="flex items-center justify-between p-2 mt-2 border-t border-white/[0.05]">
            <span className="text-xs text-muted tracking-widest">LANGUAGE</span>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-xs font-bold tracking-widest text-muted"
            >
              <span className={language === 'en' ? 'text-white' : ''}>EN</span>
              <span className="text-white/[0.2]">|</span>
              <span className={language === 'id' ? 'text-white' : ''}>ID</span>
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
