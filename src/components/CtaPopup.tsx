'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Language = 'EN' | 'AR' | 'ID';

interface CtaPopupProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  title: string;
}

export const CtaPopup = ({ isOpen, onClose, language, title }: CtaPopupProps) => {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'unset';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const text = {
    EN: {
      description: 'Fill in your details and we will respond shortly.',
      firstName: 'First Name',
      lastName: 'Last Name',
      phone: 'Phone',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
      close: 'Close'
    },
    AR: {
      description: 'املأ بياناتك وسنرد عليك قريباً',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      phone: 'الهاتف',
      email: 'البريد',
      message: 'الرسالة',
      submit: 'إرسال',
      close: 'إغلاق'
    },
    ID: {
      description: 'Isi detail Anda dan kami akan merespons segera.',
      firstName: 'Nama Depan',
      lastName: 'Nama Belakang',
      phone: 'Telepon',
      email: 'Email',
      message: 'Pesan',
      submit: 'Kirim',
      close: 'Tutup'
    }
  };

  const t = text[language];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className="relative w-full max-w-md bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20"
            aria-label={t.close}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37] mb-2">{title}</h3>
            <p className="text-[#9CA3AF] text-sm">{t.description}</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder={t.firstName} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] placeholder:text-[#9CA3AF]" />
              <input type="text" placeholder={t.lastName} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] placeholder:text-[#9CA3AF]" />
            </div>
            <input type="tel" placeholder={t.phone} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] placeholder:text-[#9CA3AF]" />
            <input type="email" placeholder={t.email} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] placeholder:text-[#9CA3AF]" />
            <textarea rows={4} placeholder={t.message} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] placeholder:text-[#9CA3AF] resize-none" />
            <button type="submit" className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
              {t.submit}
            </button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
