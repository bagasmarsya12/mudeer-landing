'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { ChevronDown } from 'lucide-react';

// ============================================
// LANGUAGE DROPDOWN COMPONENT
// ============================================
const LanguageDropdown = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'EN', label: 'English', flag: '🇬🇧' },
    { code: 'AR', label: 'العربية', flag: '🇦🇪' },
    { code: 'ID', label: 'Indonesia', flag: '🇮🇩' },
  ];

  const currentLang = languages.find(l => l.code === language);

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    if (isOpen) window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative" dir="ltr">
      <button
        onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
        className="flex items-center gap-2 px-3 py-2 bg-[#0A1628]/50 rounded-lg border border-[#D4AF37]/20 text-[#F8F9FA] text-sm hover:border-[#D4AF37]/40 transition-colors"
      >
        <span>{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 right-0 bg-[#0F1D2F] border border-[#D4AF37]/20 rounded-lg shadow-xl overflow-hidden min-w-[140px] z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => { setLanguage(lang.code as 'EN' | 'AR' | 'ID'); setIsOpen(false); }}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors hover:bg-[#D4AF37]/10 ${
                  language === lang.code ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'text-[#F8F9FA]'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ============================================
// SHARED HEADER COMPONENT
// ============================================
interface HeaderProps {
  onContactClick?: (method: 'form' | 'email') => void;
}

export const Header = ({ onContactClick }: HeaderProps) => {
  const { isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = isRTL 
    ? ['المنصة', 'هاوس بادي', 'العلامة البيضاء', 'اتصل بنا']
    : ['Platform', 'Hausbuddy', 'White Label', 'Contact'];

  const handleNavClick = (index: number) => {
    if (index === 3 && onContactClick) {
      onContactClick('form');
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-[#0A1628]/95 backdrop-blur-[20px] py-3 border-b border-[#D4AF37]/10' : 'bg-transparent py-5'
      }`}
      dir="ltr"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
        <div className="flex items-center justify-between" dir="ltr">
          <Link href="/page2" className="flex items-center gap-3 group">
            <svg className="w-8 h-8 sm:w-11 sm:h-11" viewBox="0 0 44 44" fill="none">
              <rect x="6" y="8" width="32" height="6" rx="2" fill="#D4AF37"/>
              <rect x="6" y="19" width="26" height="6" rx="2" fill="#D4AF37"/>
              <rect x="6" y="30" width="20" height="6" rx="2" fill="#D4AF37"/>
            </svg>
            <div className="hidden sm:block">
              <div className="font-['Outfit'] font-semibold text-sm sm:text-lg tracking-[0.2em] text-[#F8F9FA] uppercase">The Mudeer</div>
              <div className="text-[8px] sm:text-[9px] tracking-[0.15em] text-[#D4AF37] uppercase mt-0.5">{isRTL ? 'إدارة العقارات' : 'Property Management'}</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, i) => (
              <motion.a 
                key={i} 
                href={i === 3 ? '#contact' : `/solutions/${['platform', 'hausbuddy', 'white-label', 'contact'][i]}`}
                onClick={(e) => { if (i === 3 && onContactClick) { e.preventDefault(); handleNavClick(i); } }}
                className="text-[#F8F9FA] text-sm font-normal tracking-[0.05em] relative group cursor-pointer" 
                whileHover={{ color: '#D4AF37' }}
              >
                {item}
                <motion.span className="absolute bottom-[-4px] left-0 h-[1px] bg-[#D4AF37]" initial={{ width: 0 }} whileHover={{ width: '100%' }} transition={{ duration: 0.3 }} />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4" dir="ltr">
            <LanguageDropdown />
            <Link href="/login">
              <motion.button 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }} 
                className="px-3 sm:px-5 py-2 sm:py-2.5 bg-[#D4AF37] text-[#0A1628] text-xs sm:text-sm font-medium rounded-lg hover:bg-[#E8C968] transition-colors"
              >
                {isRTL ? 'دخول العملاء' : 'Client Login'}
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
