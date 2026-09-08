'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { content, Language } from '@/lib/content';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof content.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Hydration safety
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  const t = content[language];

  if (!mounted) {
    // Provide default during SSR
    return (
      <LanguageContext.Provider value={{ language: 'en', toggleLanguage: () => {}, t: content.en }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
