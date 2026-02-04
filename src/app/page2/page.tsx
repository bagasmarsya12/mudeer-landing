'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { Header } from '@/components/Header';

// ============================================
// CONTACT MODAL COMPONENT
// ============================================
const ContactModal = ({ isOpen, onClose, method }: { isOpen: boolean; onClose: () => void; method: 'form' | 'email' | null }) => {
  const { isRTL, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const text = {
    EN: {
      emailTitle: 'Send us an Email',
      emailDesc: 'Reach out to our team at your convenience.',
      formTitle: 'Schedule a Demo',
      formDesc: 'Fill in your details and we will respond shortly.',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      submit: 'Request Demo',
      sending: 'Sending...',
      thankYou: 'Thank You',
      thankYouDesc: 'Our team will contact you within 24 hours.',
      close: 'Close'
    },
    AR: {
      emailTitle: 'راسلنا عبر البريد',
      emailDesc: 'تواصل مع فريقنا في أي وقت',
      formTitle: 'جدولة عرض توضيحي',
      formDesc: 'املأ بياناتك وسنرد عليك قريباً',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      submit: 'طلب عرض توضيحي',
      sending: 'جاري الإرسال...',
      thankYou: 'شكراً لك',
      thankYouDesc: 'سيتواصل معك فريقنا خلال 24 ساعة',
      close: 'إغلاق'
    },
    ID: {
      emailTitle: 'Kirim Email',
      emailDesc: 'Hubungi tim kami kapan saja.',
      formTitle: 'Jadwalkan Demo',
      formDesc: 'Isi detail Anda dan kami akan merespons segera.',
      name: 'Nama Lengkap',
      email: 'Alamat Email',
      phone: 'Nomor Telepon',
      submit: 'Minta Demo',
      sending: 'Mengirim...',
      thankYou: 'Terima Kasih',
      thankYouDesc: 'Tim kami akan menghubungi Anda dalam 24 jam.',
      close: 'Tutup'
    }
  };

  const t = text[language];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" />
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className={`relative w-full max-w-md bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl text-left`}>
          <button onClick={handleClose} className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37] mb-3">{t.thankYou}</h3>
              <p className="text-[#CBC5CE]">{t.thankYouDesc}</p>
              <button onClick={handleClose} className="mt-6 px-6 py-3 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg">{t.close}</button>
            </div>
          ) : method === 'email' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#F8F9FA] mb-3">{t.emailTitle}</h3>
              <p className="text-[#9CA3AF] mb-6">{t.emailDesc}</p>
              <a href="mailto:hello@themudeer.com" className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A1628] rounded-lg font-semibold">hello@themudeer.com</a>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37] mb-2">{t.formTitle}</h3>
                <p className="text-[#9CA3AF] text-sm">{t.formDesc}</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="text" required placeholder={t.name} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA]" />
                <input type="email" required placeholder={t.email} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA]" />
                <input type="tel" placeholder={t.phone} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA]" />
                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg">{isSubmitting ? t.sending : t.submit}</button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// ============================================
// WHITE LABEL WIZARD
// ============================================
const WhiteLabelWizard = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { isRTL, language } = useLanguage();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else {
      document.body.style.overflow = 'unset';
      setTimeout(() => { setStep(1); setIsSubmitted(false); }, 300);
    }
  }, [isOpen]);

  const text = {
    EN: {
      steps: ['Your Brand, Our Technology', 'Complete Control & Customization', 'Enterprise-Grade Infrastructure', "Let's Get Started"],
      desc: [
        'Offer a fully-branded property management platform to your clients.',
        'From custom domains to branded mobile apps.',
        'Built on the same technology that powers leading property management companies.',
        'Tell us about yourself and we will prepare a customized proposal.'
      ],
      name: 'Full Name', company: 'Company', email: 'Email', phone: 'Phone',
      portfolioSize: 'Portfolio Size', submit: 'Get Proposal', back: 'Back', next: 'Next',
      thankYou: 'Thank You!', close: 'Close'
    },
    AR: {
      steps: ['علامتك التجارية، تقنيتنا', 'تحكم وتخصيص كامل', 'بنية تحتية مؤسسية', 'لنبدأ'],
      desc: [
        'قدّم منصة إدارة عقارات تحمل علامتك التجارية بالكامل لعملائك.',
        'من النطاقات المخصصة إلى تطبيقات الهاتف المحمول ذات العلامة التجارية.',
        'مبنية على نفس التقنية التي تعمل بها شركات إدارة العقارات الرائدة.',
        'أخبرنا عن نفسك وسنعد اقتراحاً مخصصاً لك.'
      ],
      name: 'الاسم الكامل', company: 'الشركة', email: 'البريد الإلكتروني', phone: 'رقم الهاتف',
      portfolioSize: 'حجم المحفظة', submit: 'احصل على اقتراح', back: 'رجوع', next: 'التالي',
      thankYou: 'شكراً لك!', close: 'إغلاق'
    },
    ID: {
      steps: ['Merek Anda, Teknologi Kami', 'Kontrol & Kustomisasi Lengkap', 'Infrastruktur Kelas Enterprise', 'Mari Mulai'],
      desc: [
        'Tawarkan platform manajemen properti bermerek penuh kepada klien Anda.',
        'Dari domain kustom hingga aplikasi seluler bermerek.',
        'Dibangun di atas teknologi yang sama yang mendukung perusahaan manajemen properti terkemuka.',
        'Ceritakan tentang diri Anda dan kami akan menyiapkan proposal kustom.'
      ],
      name: 'Nama Lengkap', company: 'Perusahaan', email: 'Email', phone: 'Telepon',
      portfolioSize: 'Ukuran Portofolio', submit: 'Dapatkan Proposal', back: 'Kembali', next: 'Lanjut',
      thankYou: 'Terima Kasih!', close: 'Tutup'
    }
  };

  const t = text[language];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/20 rounded-3xl shadow-2xl text-left`}>
          <button onClick={onClose} className={`absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 z-10`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          {!isSubmitted ? (
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              {step <= 3 ? (
                <>
                  <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[#0A1628] to-[#1A2B42] p-8 flex items-center justify-center">
                    <div className="w-full max-w-[280px] h-40 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/30 flex items-center justify-center">
                      <span className="text-[#D4AF37] text-4xl">{step}</span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-8">
                      {[1,2,3,4].map(s => <div key={s} className={`flex-1 h-1 rounded-full ${s <= step ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/20'}`} />)}
                    </div>
                    <h3 className="font-['Cormorant_Garamond'] text-3xl text-[#F8F9FA] mb-4">{t.steps[step-1]}</h3>
                    <p className="text-[#CBC5CE] mb-8">{t.desc[step-1]}</p>
                    <div className="flex gap-4 mt-auto">
                      {step > 1 && <button onClick={() => setStep(step-1)} className="px-6 py-3 border border-[#D4AF37]/30 text-[#F8F9FA] rounded-lg">{t.back}</button>}
                      <button onClick={() => setStep(step+1)} className="flex-1 px-6 py-3 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg">{t.next}</button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-8 lg:p-12 lg:col-span-2 max-w-2xl mx-auto w-full">
                  <h3 className="font-['Cormorant_Garamond'] text-3xl text-[#F8F9FA] mb-6">{t.steps[3]}</h3>
                  <form onSubmit={(e) => { e.preventDefault(); setIsSubmitting(true); setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1500); }} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <input type="text" placeholder={t.name} required className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA]" />
                      <input type="text" placeholder={t.company} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA]" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <input type="email" placeholder={t.email} required className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA]" />
                      <input type="tel" placeholder={t.phone} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA]" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg">{isSubmitting ? '...' : t.submit}</button>
                  </form>
                </div>
              )}
            </div>
          ) : (
            <div className="p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-3xl text-[#D4AF37] mb-4">{t.thankYou}</h3>
              <button onClick={onClose} className="px-8 py-3 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg">{t.close}</button>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// ============================================
// HERO SECTION
// ============================================
const HeroSection = ({ onContactClick }: { onContactClick: (method: 'form' | 'email') => void }) => {
  const { isRTL, language } = useLanguage();

  const content = {
    EN: {
      badge: 'Premium Property Management',
      headline: 'Elevate Your Real Estate Portfolio',
      subhead: 'A refined approach to property management. Seamless operations, satisfied tenants, and complete control over your assets.',
      cta1: 'Schedule a Demo',
      cta2: 'White Label Solution',
      scroll: 'Scroll'
    },
    AR: {
      badge: 'إدارة عقارات متميزة',
      headline: 'ارتقِ بمحفظتك العقارية',
      subhead: 'نهج راقٍ في إدارة العقارات. عمليات سلسة، مستأجرين راضين، وسيطرة كاملة على أصولك.',
      cta1: 'جدولة عرض توضيحي',
      cta2: 'حل العلامة البيضاء',
      scroll: 'scroll'
    },
    ID: {
      badge: 'Manajemen Properti Premium',
      headline: 'Tingkatkan Portofolio Real Estate Anda',
      subhead: 'Pendekatan terhalus untuk manajemen properti. Operasi tanpa hambatan, penyewa puas, dan kontrol penuh atas aset Anda.',
      cta1: 'Jadwalkan Demo',
      cta2: 'Solusi White Label',
      scroll: 'Scroll'
    }
  };

  const t = content[language];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-[80px] sm:pt-[100px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/97 via-[#0A1628]/85 to-[#0A1628]/75 z-10" />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 80% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(0, 167, 157, 0.05) 0%, transparent 50%), linear-gradient(180deg, #0A1628 0%, #0F1D2F 100%)` }} />
        <motion.div className="absolute inset-0 z-20" animate={{ opacity: [0.08, 0.15, 0.08] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} style={{ backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] relative z-10">
        <div className={`max-w-[900px] ${isRTL ? 'mr-auto ml-0 text-right rtl' : 'ml-auto mr-0 text-left ltr'}`}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className={`inline-flex items-center gap-3 mb-6 sm:mb-8 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
            <motion.span className="w-6 sm:w-10 h-[1px] bg-[#D4AF37]" initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.5 }} />
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#D4AF37]">{t.badge}</span>
            <motion.span className="w-6 sm:w-10 h-[1px] bg-[#D4AF37]" initial={{ width: 0 }} animate={{ width: 40 }} transition={{ duration: 0.8, delay: 0.5 }} />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-['Cormorant_Garamond'] text-[clamp(36px,8vw,84px)] leading-[1.05] mb-6 sm:mb-8">
            {t.headline}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-base sm:text-xl font-light text-[#CBC5CE] max-w-[600px] mb-8 sm:mb-10 leading-[1.7]">
            {t.subhead}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <motion.button onClick={() => onContactClick('form')} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 sm:px-8 py-3 sm:py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
              {t.cta1}
            </motion.button>
            <Link href="/solutions/white-label">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-6 sm:px-8 py-3 sm:py-4 border border-[#D4AF37]/30 text-[#F8F9FA] font-medium rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
                {t.cta2}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#9CA3AF]">{t.scroll}</span>
        <motion.div animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-[1px] h-[40px] sm:h-[60px] bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </motion.div>
    </section>
  );
};

// ============================================
// THREE PILLARS SECTION
// ============================================
const ThreePillarsSection = ({ onContactClick, onWhiteLabelClick }: { onContactClick: (method: 'form' | 'email') => void; onWhiteLabelClick: () => void }) => {
  const { isRTL, language } = useLanguage();

  const content = {
    EN: {
      badge: 'Our Solutions',
      title: 'Three Pillars of Excellence',
      subtitle: 'Each designed to serve a distinct purpose, working in harmony to create a seamless property management ecosystem.',
      pillars: [
        { tag: 'For Property Managers', title: 'The Mudeer Platform', description: 'A comprehensive dashboard designed for those who oversee portfolios. Track performance, manage operations, and make informed decisions with clarity.', features: ['Real-time analytics dashboard', 'Automated financial reporting', 'Maintenance workflow management'], cta: 'Explore Platform', link: '/solutions/platform' },
        { tag: 'For Tenants', title: 'Hausbuddy App', description: 'A refined mobile experience for residents. Pay rent, submit requests, and stay connected with their home—all from the palm of their hand.', features: ['One-tap rent payments', 'Maintenance request with photos', 'Community announcements'], cta: 'View App Features', link: '/solutions/hausbuddy' },
        { tag: 'For Enterprises', title: 'White Label Solution', description: 'Your brand, our technology. Offer a fully-branded property management experience to your clients while we power everything behind the scenes.', features: ['Complete brand customization', 'Your domain, your logo', 'Dedicated infrastructure'], cta: 'Learn About White Label', action: 'wizard' },
      ]
    },
    AR: {
      badge: 'حلولنا',
      title: 'ثلاثة أعمدة للتميز',
      subtitle: 'كل منها مصمم لخدمة غرض محدد، تعمل معاً بانسجام لإنشاء نظام بيئي سلس لإدارة العقارات.',
      pillars: [
        { tag: 'لمديري العقارات', title: 'منصة المدير', description: 'لوحة تحكم شاملة مصممة لأولئك الذين يشرفون على المحافظ. تتبع الأداء، وإدارة العمليات، واتخاذ قرارات مستنيرة بوضوح.', features: ['لوحة تحكم تحليلية في الوقت الفعلي', 'تقارير مالية آلية', 'إدارة سير عمل الصيانة'], cta: 'استكشف المنصة', link: '/solutions/platform' },
        { tag: 'للمستأجرين', title: 'تطبيق هاوس بادي', description: 'تجربة جوال راقية للسكان. دفع الإيجار، تقديم الطلبات، والبقاء على اتصال بمنزلهم—كل ذلك من راحة أيديهم.', features: ['دفع الإيجار بنقرة واحدة', 'طلب صيانة مع صور', 'إعلانات المجتمع'], cta: 'عرض ميزات التطبيق', link: '/solutions/hausbuddy' },
        { tag: 'للمؤسسات', title: 'حل العلامة البيضاء', description: 'علامتك التجارية، تقنيتنا. قدم تجربة إدارة عقارات تحمل علامتك التجارية بالكامل لعملائك بينما ندعم كل شيء في الخلفية.', features: ['تخصيص العلامة التجارية بالكامل', 'نطاقك، شعارك', 'بنية تحتية مخصصة'], cta: 'تعرف على العلامة البيضاء', action: 'wizard' },
      ]
    },
    ID: {
      badge: 'Solusi Kami',
      title: 'Tiga Pilar Keunggulan',
      subtitle: 'Masing-masing dirancang untuk tujuan tertentu, bekerja selaras untuk menciptakan ekosistem manajemen properti yang mulus.',
      pillars: [
        { tag: 'Untuk Manajer Properti', title: 'Platform The Mudeer', description: 'Dashboard komprehensif yang dirancang untuk mereka yang mengawasi portofolio. Lacak kinerja, kelola operasi, dan buat keputusan yang terinformasi dengan jelas.', features: ['Dashboard analitik real-time', 'Pelaporan keuangan otomatis', 'Manajemen alur kerja pemeliharaan'], cta: 'Jelajahi Platform', link: '/solutions/platform' },
        { tag: 'Untuk Penyewa', title: 'Aplikasi Hausbuddy', description: 'Pengalaman seluler yang halus untuk penghuni. Bayar sewa, ajukan permintaan, dan tetap terhubung dengan rumah mereka—semua dari telapak tangan mereka.', features: ['Pembayaran sewa sekali ketuk', 'Permintaan perbaikan dengan foto', 'Pengumuman komunitas'], cta: 'Lihat Fitur Aplikasi', link: '/solutions/hausbuddy' },
        { tag: 'Untuk Perusahaan', title: 'Solusi White Label', description: 'Merek Anda, teknologi kami. Tawarkan pengalaman manajemen properti bermerek penuh kepada klien Anda sementara kami mendukung semuanya di balik layar.', features: ['Kustomisasi merek lengkap', 'Domain Anda, logo Anda', 'Infrastruktur khusus'], cta: 'Pelajari White Label', action: 'wizard' },
      ]
    }
  };

  const t = content[language];

  return (
    <section id="platform" className="py-20 sm:py-32 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`text-center mb-12 sm:mb-20`}>
          <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-4 sm:mb-6">{t.badge}</span>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,5vw,56px)] mb-4 sm:mb-6">{t.title}</h2>
          <p className="text-base sm:text-xl text-[#CBC5CE] max-w-[600px] mx-auto px-4">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
          {t.pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`group bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden text-left`}
            >
              <div className="h-36 sm:h-48 overflow-hidden bg-[#0A1628]/50">
                {i === 0 && (
                  <div className="relative w-full h-full p-3 sm:p-4">
                    <div className="absolute top-2 left-2 right-2 flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                      <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                      <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="mt-5 sm:mt-6 space-y-1.5 sm:space-y-2">
                      <div className="h-1.5 sm:h-2 bg-[#D4AF37]/30 rounded w-3/4" />
                      <div className="h-1.5 sm:h-2 bg-[#D4AF37]/20 rounded w-1/2" />
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                        <div className="h-10 sm:h-16 bg-[#D4AF37]/10 rounded" />
                        <div className="h-10 sm:h-16 bg-[#D4AF37]/10 rounded" />
                      </div>
                    </div>
                  </div>
                )}
                {i === 1 && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-14 sm:w-20 h-24 sm:h-36 bg-gradient-to-b from-[#1A2B42] to-[#0A1628] rounded-xl border border-[#00A79D]/30 p-1">
                      <div className="w-full h-full bg-[#0F1D2F] rounded-lg p-1.5 sm:p-2">
                        <div className="w-full h-1.5 sm:h-2 bg-[#00A79D]/30 rounded mb-1.5 sm:mb-2" />
                        <div className="space-y-1 sm:space-y-2">
                          <div className="h-4 sm:h-6 bg-[#00A79D]/10 rounded" />
                          <div className="h-4 sm:h-6 bg-[#00A79D]/10 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {i === 2 && (
                  <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl bg-[#D4AF37]/20 border-2 border-dashed border-[#D4AF37] flex items-center justify-center mb-2 sm:mb-3">
                      <span className="text-[#D4AF37] text-[10px] sm:text-xs">{isRTL ? 'شعارك' : 'Your Logo'}</span>
                    </div>
                    <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-[#D4AF37]/30 rounded" />
                  </div>
                )}
              </div>
              <div className="p-5 sm:p-8">
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]/60">{pillar.tag}</span>
                <h3 className="text-lg sm:text-2xl font-['Cormorant_Garamond'] text-[#F8F9FA] mt-1 sm:mt-2 mb-2 sm:mb-4">{pillar.title}</h3>
                <p className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{pillar.description}</p>
                <ul className={`space-y-2 mb-4 sm:mb-6`}>
                  {pillar.features.map((feature, j) => (
                    <li key={j} className={`flex items-center gap-2 text-xs sm:text-sm text-[#CBC5CE] ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {'action' in pillar && pillar.action === 'wizard' ? (
                  <button onClick={onWhiteLabelClick} className="text-[#D4AF37] text-xs sm:text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    {pillar.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                ) : (
                  <Link href={'link' in pillar ? pillar.link : '#'} className="text-[#D4AF37] text-xs sm:text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    {pillar.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// HOW IT WORKS SECTION
// ============================================
const HowItWorksSection = ({ onContactClick }: { onContactClick: (method: 'form' | 'email') => void }) => {
  const { isRTL, language } = useLanguage();

  const content = {
    EN: {
      badge: 'Implementation',
      title: 'Start Within Days, Not Months',
      subtitle: 'A streamlined onboarding process designed to get you operational quickly.',
      steps: [
        { number: '01', title: 'Connect', description: 'We integrate with your existing systems and migrate your data seamlessly. No disruption to your operations.' },
        { number: '02', title: 'Customize', description: 'Tailor the platform to your brand and workflow. Configure automations that match your processes.' },
        { number: '03', title: 'Launch', description: 'Go live with confidence. Our team provides support throughout the transition and beyond.' },
      ],
      cta: 'Begin Your Journey'
    },
    AR: {
      badge: 'التنفيذ',
      title: 'ابدأ خلال أيام، لا أشهر',
      subtitle: 'عملية تأهيل مبسطة مصممة لتشغيلك بسرعة.',
      steps: [
        { number: '01', title: 'الاتصال', description: 'ندمج مع أنظمتك الحالية وننقل بياناتك بسلاسة. دون إزعاج لعملياتك.' },
        { number: '02', title: 'التخصيص', description: 'خصص المنصة لعلامتك التجارية وسير عملك. اضبط الأتمتة لتناسب عملياتك.' },
        { number: '03', title: 'الإطلاق', description: 'انطلق بثقة. يقدم فريقنا الدعم طوال الانتقال وما بعده.' },
      ],
      cta: 'ابدأ رحلتك'
    },
    ID: {
      badge: 'Implementasi',
      title: 'Mulai Dalam Hitungan Hari, Bukan Bulan',
      subtitle: 'Proses onboarding yang disederhanakan untuk membuat Anda operasional dengan cepat.',
      steps: [
        { number: '01', title: 'Hubungkan', description: 'Kami mengintegrasikan dengan sistem Anda yang ada dan memigrasi data Anda dengan mulus. Tidak ada gangguan pada operasi Anda.' },
        { number: '02', title: 'Kustomisasi', description: 'Sesuaikan platform dengan merek dan alur kerja Anda. Konfigurasikan otomatisasi yang sesuai dengan proses Anda.' },
        { number: '03', title: 'Luncurkan', description: 'Go live dengan percaya diri. Tim kami memberikan dukungan sepanjang transisi dan seterusnya.' },
      ],
      cta: 'Mulai Perjalanan Anda'
    }
  };

  const t = content[language];

  return (
    <section id="white-label" className="py-20 sm:py-32 bg-[#F5F3F0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-center mb-12 sm:mb-20`}>
          <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#0A1628]/60 mb-4 sm:mb-6">{t.badge}</span>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,5vw,56px)] text-[#0A1628] mb-4 sm:mb-6">{t.title}</h2>
          <p className="text-base sm:text-lg text-[#1A2B42]/70 max-w-[550px] mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-16">
          {t.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`bg-white rounded-2xl p-5 sm:p-8 border border-[#0A1628]/10 hover:border-[#D4AF37]/30 transition-all group text-left`}
            >
              <span className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl text-[#D4AF37]/20">{step.number}</span>
              <h3 className="text-lg sm:text-xl font-['Outfit'] font-semibold text-[#0A1628] mt-2 sm:mt-4 mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-[#1A2B42]/70 text-xs sm:text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <button onClick={() => onContactClick('form')} className="px-6 sm:px-10 py-3 sm:py-4 bg-[#0A1628] text-white text-sm sm:text-base font-medium rounded-lg hover:bg-[#1A2B42] transition-colors">
            {t.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// CONTACT SECTION
// ============================================
const ContactSection = ({ onContactClick }: { onContactClick: (method: 'form' | 'email') => void }) => {
  const { isRTL, language } = useLanguage();

  const content = {
    EN: {
      badge: 'Get in Touch',
      title: 'Ready to Elevate Your Portfolio?',
      subtitle: 'Connect with our team. We are here to assist you.',
      methods: [
        { icon: 'calendar', title: 'Schedule a Demo', description: 'See the platform in action with our team.', action: 'Schedule Now', method: 'form' as const },
        { icon: 'email', title: 'Email Us', description: 'Reach out for detailed inquiries.', action: 'Send Email', method: 'email' as const },
      ]
    },
    AR: {
      badge: 'تواصل معنا',
      title: 'مستعد لرفع مستوى محفظتك؟',
      subtitle: 'تواصل مع فريقنا. نحن هنا لمساعدتك.',
      methods: [
        { icon: 'calendar', title: 'جدولة عرض توضيحي', description: 'شاهد المنصة أثناء العمل مع فريقنا.', action: 'جدولة الآن', method: 'form' as const },
        { icon: 'email', title: 'راسلنا بالبريد', description: 'تواصل للاستفسارات التفصيلية.', action: 'إرسال بريد', method: 'email' as const },
      ]
    },
    ID: {
      badge: 'Hubungi Kami',
      title: 'Siap Meningkatkan Portofolio Anda?',
      subtitle: 'Terhubung dengan tim kami. Kami di sini untuk membantu Anda.',
      methods: [
        { icon: 'calendar', title: 'Jadwalkan Demo', description: 'Lihat platform beraksi dengan tim kami.', action: 'Jadwalkan Sekarang', method: 'form' as const },
        { icon: 'email', title: 'Email Kami', description: 'Hubungi kami untuk pertanyaan detail.', action: 'Kirim Email', method: 'email' as const },
      ]
    }
  };

  const t = content[language];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)` }} />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-center mb-12 sm:mb-16`}>
          <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-4 sm:mb-6">{t.badge}</span>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,5vw,56px)] mb-4 sm:mb-6">{t.title}</h2>
          <p className="text-base sm:text-xl text-[#CBC5CE] max-w-[600px] mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {t.methods.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => onContactClick(item.method)}
              className={`p-6 sm:p-8 rounded-2xl text-center transition-all ${i === 0 ? 'bg-[#D4AF37] text-[#0A1628]' : 'bg-[#0A1628] border border-[#D4AF37] text-[#F8F9FA] hover:bg-[#1A2B42]'}`}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center ${i === 0 ? 'bg-[#0A1628]/10' : 'bg-[#D4AF37]/10'}`}>
                {item.icon === 'calendar' ? (
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                ) : (
                  <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{item.title}</h3>
              <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${i === 0 ? 'text-[#0A1628]/70' : 'text-white/80'}`}>{item.description}</p>
              <span className="inline-flex items-center gap-2 font-medium text-sm">
                {item.action}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// FOOTER
// ============================================
const Footer = ({ onContactClick }: { onContactClick: (method: 'form' | 'email') => void }) => {
  const { isRTL, language } = useLanguage();

  const content = {
    EN: {
      tagline: 'Refined property management solutions for discerning professionals.',
      solutions: 'Solutions',
      solutionLinks: ['Platform', 'Hausbuddy', 'White Label'],
      contact: 'Contact',
      copyright: '© 2025 The Mudeer. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms'
    },
    AR: {
      tagline: 'حلول إدارة عقارات راقية للمحترفين المتميزين.',
      solutions: 'الحلول',
      solutionLinks: ['المنصة', 'هاوس بادي', 'العلامة البيضاء'],
      contact: 'تواصل معنا',
      copyright: '© 2025 المدير. جميع الحقوق محفوظة.',
      privacy: 'الخصوصية',
      terms: 'الشروط'
    },
    ID: {
      tagline: 'Solusi manajemen properti yang halus untuk profesional yang cerdas.',
      solutions: 'Solusi',
      solutionLinks: ['Platform', 'Hausbuddy', 'White Label'],
      contact: 'Kontak',
      copyright: '© 2025 The Mudeer. Hak cipta dilindungi.',
      privacy: 'Privasi',
      terms: 'Ketentuan'
    }
  };

  const t = content[language];

  return (
    <footer className="bg-[#0F1D2F] pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-[#D4AF37]/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 mb-8 sm:mb-12 text-left`}>
          <div className="col-span-2 md:col-span-2">
            <Link href="/page2" className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <svg className="w-7 h-7 sm:w-9 sm:h-9" viewBox="0 0 44 44" fill="none">
                <rect x="6" y="8" width="32" height="6" rx="2" fill="#D4AF37"/>
                <rect x="6" y="19" width="26" height="6" rx="2" fill="#D4AF37"/>
                <rect x="6" y="30" width="20" height="6" rx="2" fill="#D4AF37"/>
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
              <li><button onClick={() => onContactClick('form')} className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">{language === 'AR' ? 'جدولة عرض' : language === 'ID' ? 'Jadwalkan Demo' : 'Schedule Demo'}</button></li>
              <li><button onClick={() => onContactClick('email')} className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">{language === 'AR' ? 'راسلنا' : language === 'ID' ? 'Email Kami' : 'Email Us'}</button></li>
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

// ============================================
// MAIN PAGE
// ============================================
export default function Page2() {
  const [contactModal, setContactModal] = useState<{ isOpen: boolean; method: 'form' | 'email' | null }>({ isOpen: false, method: null });
  const [whiteLabelOpen, setWhiteLabelOpen] = useState(false);

  const openContact = (method: 'form' | 'email') => {
    setContactModal({ isOpen: true, method });
  };

  const closeContact = () => {
    setContactModal({ isOpen: false, method: null });
  };

  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F8F9FA] font-['Outfit']">
      <ContactModal isOpen={contactModal.isOpen} onClose={closeContact} method={contactModal.method} />
      <WhiteLabelWizard isOpen={whiteLabelOpen} onClose={() => setWhiteLabelOpen(false)} />
      <Header onContactClick={openContact} />
      <HeroSection onContactClick={openContact} />
      <ThreePillarsSection onContactClick={openContact} onWhiteLabelClick={() => setWhiteLabelOpen(true)} />
      <HowItWorksSection onContactClick={openContact} />
      <ContactSection onContactClick={openContact} />
      <Footer onContactClick={openContact} />
    </main>
  );
}
