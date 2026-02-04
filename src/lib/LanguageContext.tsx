'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language, Translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('EN');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    const savedLang = localStorage.getItem('mudeer-language') as Language;
    if (savedLang && ['EN', 'AR', 'ID'].includes(savedLang)) {
      setLanguageState(savedLang);
      setIsRTL(savedLang === 'AR');
      document.documentElement.dir = savedLang === 'AR' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLang.toLowerCase();
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setIsRTL(lang === 'AR');
    localStorage.setItem('mudeer-language', lang);
    document.documentElement.dir = lang === 'AR' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang.toLowerCase();
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
