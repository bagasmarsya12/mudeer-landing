'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';

type FooterContactType = 'lets-talk' | 'email';

interface SiteFooterProps {
  onContactClick?: (type: FooterContactType) => void;
}

export const SiteFooter = ({ onContactClick }: SiteFooterProps) => {
  const { language } = useLanguage();

  const content = {
    EN: {
      tagline: 'Refined property management solutions for discerning professionals.',
      solutions: 'Solutions',
      solutionLinks: ['Platform B2B', 'Hausbuddy B2C', 'White Label'],
      contact: 'Contact',
      copyright: '© 2025 The Mudeer. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      letsTalk: "Let's Talk",
      emailUs: 'Email Us',
    },
    AR: {
      tagline: 'حلول إدارة عقارات راقية للمحترفين المتميزين.',
      solutions: 'الحلول',
      solutionLinks: ['المنصة B2B', 'هاوس بادي B2C', 'العلامة البيضاء'],
      contact: 'تواصل معنا',
      copyright: '© 2025 المدير. جميع الحقوق محفوظة.',
      privacy: 'الخصوصية',
      terms: 'الشروط',
      letsTalk: 'دعنا نتحدث',
      emailUs: 'راسلنا',
    },
    ID: {
      tagline: 'Solusi manajemen properti yang halus untuk profesional yang cerdas.',
      solutions: 'Solusi',
      solutionLinks: ['Platform B2B', 'Hausbuddy B2C', 'White Label'],
      contact: 'Kontak',
      copyright: '© 2025 The Mudeer. Hak cipta dilindungi.',
      privacy: 'Privasi',
      terms: 'Ketentuan',
      letsTalk: 'Mari Bicara',
      emailUs: 'Email Kami',
    },
  };

  const t = content[language];

  return (
    <footer className="bg-[#0F1D2F] pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-[#D4AF37]/10">
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 mb-8 sm:mb-12 text-left">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <svg className="w-7 h-7 sm:w-9 sm:h-9" viewBox="0 0 44 44" fill="none">
                <rect x="6" y="8" width="32" height="6" rx="2" fill="#D4AF37" />
                <rect x="6" y="19" width="26" height="6" rx="2" fill="#D4AF37" />
                <rect x="6" y="30" width="20" height="6" rx="2" fill="#D4AF37" />
              </svg>
              <span className="font-['Outfit'] font-semibold text-xs sm:text-sm tracking-[0.2em] text-[#F8F9FA] uppercase">The Mudeer</span>
            </Link>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed max-w-xs">{t.tagline}</p>
          </div>

          <div>
            <h4 className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-[#D4AF37] mb-3 sm:mb-4">{t.solutions}</h4>
            <ul className="space-y-2 sm:space-y-3">
              {t.solutionLinks.map((link, i) => (
                <li key={i}>
                  <Link href={`/solutions/${['platform', 'hausbuddy', 'white-label'][i]}`} className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-[#D4AF37] mb-3 sm:mb-4">{t.contact}</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                {onContactClick ? (
                  <button onClick={() => onContactClick('lets-talk')} className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">
                    {t.letsTalk}
                  </button>
                ) : (
                  <Link href="/#contact" className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">
                    {t.letsTalk}
                  </Link>
                )}
              </li>
              <li>
                {onContactClick ? (
                  <button onClick={() => onContactClick('email')} className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">
                    {t.emailUs}
                  </button>
                ) : (
                  <a href="mailto:hello@themudeer.com" className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">
                    {t.emailUs}
                  </a>
                )}
              </li>
              <li><span className="text-xs sm:text-sm text-[#9CA3AF]">Dubai, UAE</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="text-xs text-[#9CA3AF]">{t.copyright}</div>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="text-xs text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">{t.privacy}</a>
            <a href="#" className="text-xs text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
