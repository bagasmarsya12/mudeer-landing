'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ============================================
// CONTACT MODAL COMPONENT
// ============================================
const ContactModal = ({ isOpen, onClose, method }: { isOpen: boolean; onClose: () => void; method: 'form' | 'whatsapp' | 'email' | null }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
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
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  if (method === 'email') {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="fixed inset-0 flex items-center justify-center z-50 p-4">
              <div className="relative w-full max-w-md bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl text-center">
                <button onClick={handleClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="w-16 h-16 mx-auto mb-6 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#F8F9FA] mb-3">Send us an Email</h3>
                <p className="text-[#9CA3AF] mb-6">Reach out to our team at your convenience.</p>
                <a href="mailto:hello@themudeer.com" className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A1628] rounded-lg font-semibold hover:bg-[#E8C968] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  hello@themudeer.com
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-md bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl">
              <button onClick={handleClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              {isSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37] mb-3">Thank You</h3>
                  <p className="text-[#CBC5CE]">Our team will contact you within 24 hours.</p>
                  <button onClick={handleClose} className="mt-6 px-6 py-3 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">Close</button>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37] mb-2">Schedule a Demo</h3>
                    <p className="text-[#9CA3AF] text-sm">Fill in your details and we will respond shortly.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-2">Full Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-2">Email Address</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-2">Phone Number</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="+971 50 123 4567" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold tracking-wider uppercase rounded-lg hover:bg-[#E8C968] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Request Demo'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ============================================
// WHITE LABEL WIZARD MODAL
// ============================================
const WhiteLabelWizard = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', portfolioSize: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => {
        setStep(1);
        setFormData({ name: '', email: '', phone: '', company: '', portfolioSize: '' });
        setIsSubmitted(false);
      }, 300);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const wizardContent = [
    {
      title: 'Your Brand, Our Technology',
      description: 'Offer a fully-branded property management platform to your clients. They see your logo, your colors, your domain—while we power everything behind the scenes.',
      illustration: (
        <svg viewBox="0 0 300 200" className="w-full h-full">
          <defs>
            <linearGradient id="wlGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <rect x="50" y="30" width="200" height="140" rx="12" fill="url(#wlGrad1)" stroke="#D4AF37" strokeWidth="2" />
          <motion.rect x="70" y="50" width="60" height="40" rx="6" fill="#0A1628" stroke="#D4AF37" strokeWidth="1"
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
          <text x="100" y="75" textAnchor="middle" fill="#D4AF37" fontSize="12">Your Logo</text>
          <motion.rect x="170" y="50" width="60" height="40" rx="6" fill="#0A1628" stroke="#D4AF37" strokeWidth="1"
            animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
          <text x="200" y="75" textAnchor="middle" fill="#D4AF37" fontSize="10">Dashboard</text>
          <rect x="70" y="100" width="160" height="50" rx="6" fill="#0A1628" stroke="#D4AF37" strokeWidth="1" />
          <motion.circle cx="100" cy="125" r="15" fill="#D4AF37" opacity="0.5"
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.circle cx="150" cy="125" r="15" fill="#D4AF37" opacity="0.5"
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
          <motion.circle cx="200" cy="125" r="15" fill="#D4AF37" opacity="0.5"
            animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
        </svg>
      )
    },
    {
      title: 'Complete Control & Customization',
      description: 'From custom domains to branded mobile apps, every touchpoint reflects your identity. Your clients never know we exist—and that is exactly how it should be.',
      illustration: (
        <svg viewBox="0 0 300 200" className="w-full h-full">
          <defs>
            <linearGradient id="wlGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <motion.g animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <rect x="100" y="40" width="100" height="120" rx="12" fill="url(#wlGrad2)" stroke="#D4AF37" strokeWidth="2" />
            <rect x="115" y="60" width="70" height="80" rx="6" fill="#0A1628" />
            <circle cx="150" cy="80" r="12" fill="#D4AF37" opacity="0.5" />
            <rect x="125" y="100" width="50" height="4" rx="2" fill="#D4AF37" opacity="0.7" />
            <rect x="125" y="110" width="35" height="4" rx="2" fill="#D4AF37" opacity="0.5" />
            <rect x="125" y="120" width="45" height="4" rx="2" fill="#D4AF37" opacity="0.5" />
          </motion.g>
          {[0, 60, 120, 180, 240].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 150 + 70 * Math.cos(rad);
            const y = 100 + 45 * Math.sin(rad);
            return (
              <motion.circle key={i} cx={x} cy={y} r="4" fill="#D4AF37"
                animate={{ scale: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} />
            );
          })}
        </svg>
      )
    },
    {
      title: 'Enterprise-Grade Infrastructure',
      description: 'Built on the same technology that powers the world\'s leading property management companies. SOC 2 compliant, 99.9% uptime SLA, and dedicated support.',
      illustration: (
        <svg viewBox="0 0 300 200" className="w-full h-full">
          <defs>
            <linearGradient id="wlGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <motion.g initial={{ scale: 0.9 }} animate={{ scale: [0.9, 1.05, 0.9] }} transition={{ duration: 3, repeat: Infinity }}>
            <path d="M150 30 L80 70 V130 C80 165 150 190 150 190 C150 190 220 165 220 130 V70 Z" fill="url(#wlGrad3)" stroke="#D4AF37" strokeWidth="3" />
            <motion.path d="M120 100 L140 120 L180 80" stroke="#D4AF37" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }} />
          </motion.g>
          {['SOC 2', 'ISO 27001', 'GDPR'].map((cert, i) => (
            <motion.rect key={cert} x={60 + i * 70} y="160" width="55" height="25" rx="4" fill="#0A1628" stroke="#D4AF37" strokeWidth="1"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.2 }} />
          ))}
        </svg>
      )
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/20 rounded-3xl shadow-2xl">
              <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors z-10">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>

              {!isSubmitted ? (
                <div className="grid lg:grid-cols-2 min-h-[500px]">
                  {step <= 3 ? (
                    <>
                      {/* Left - Illustration */}
                      <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[#0A1628] to-[#1A2B42] p-8 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                          <svg className="w-full h-full" viewBox="0 0 400 400">
                            <defs>
                              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                          </svg>
                        </div>
                        <motion.div key={step} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="relative z-10 w-full max-w-[280px]">
                          {wizardContent[step - 1].illustration}
                        </motion.div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl" />
                      </div>

                      {/* Right - Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-8">
                          {[1, 2, 3, 4].map((s) => (
                            <div key={s} className={`flex-1 h-1 rounded-full transition-colors ${s <= step ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/20'}`} />
                          ))}
                        </div>

                        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                          <span className="text-[#D4AF37] text-sm font-medium">Step {step} of 4</span>
                          <h3 className="font-['Cormorant_Garamond'] text-3xl text-[#F8F9FA] mt-2 mb-4">{wizardContent[step - 1].title}</h3>
                          <p className="text-[#CBC5CE] leading-relaxed mb-8">{wizardContent[step - 1].description}</p>
                        </motion.div>

                        <div className="flex gap-4 mt-auto">
                          {step > 1 && (
                            <button onClick={handleBack} className="px-6 py-3 border border-[#D4AF37]/30 text-[#F8F9FA] rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
                              Back
                            </button>
                          )}
                          <button onClick={handleNext} className="flex-1 px-6 py-3 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors flex items-center justify-center gap-2">
                            Next
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Step 4 - Form */
                    <div className="p-8 lg:p-12 lg:col-span-2 max-w-2xl mx-auto w-full">
                      <div className="flex items-center gap-2 mb-8">
                        {[1, 2, 3, 4].map((s) => (
                          <div key={s} className={`flex-1 h-1 rounded-full transition-colors ${s <= step ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/20'}`} />
                        ))}
                      </div>
                      <span className="text-[#D4AF37] text-sm font-medium">Step 4 of 4</span>
                      <h3 className="font-['Cormorant_Garamond'] text-3xl text-[#F8F9FA] mt-2 mb-2">Let&apos;s Get Started</h3>
                      <p className="text-[#CBC5CE] mb-8">Tell us about yourself and we&apos;ll prepare a customized proposal.</p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-2">Full Name</label>
                            <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="John Smith" />
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-2">Company</label>
                            <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="Your Company" />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-2">Email</label>
                            <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="john@company.com" />
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-2">Phone</label>
                            <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="+971 50 123 4567" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-2">Portfolio Size</label>
                          <select value={formData.portfolioSize} onChange={(e) => setFormData({...formData, portfolioSize: e.target.value})} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37] transition-colors">
                            <option value="">Select portfolio size</option>
                            <option value="1-50">1-50 units</option>
                            <option value="51-200">51-200 units</option>
                            <option value="201-500">201-500 units</option>
                            <option value="500+">500+ units</option>
                          </select>
                        </div>
                        <div className="flex gap-4 pt-4">
                          <button type="button" onClick={handleBack} className="px-6 py-3 border border-[#D4AF37]/30 text-[#F8F9FA] rounded-lg hover:bg-[#D4AF37]/10 transition-colors">Back</button>
                          <button type="submit" disabled={isSubmitting} className="flex-1 px-6 py-3 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors disabled:opacity-50">
                            {isSubmitting ? 'Submitting...' : 'Get White Label Proposal'}
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-3xl text-[#D4AF37] mb-4">Thank You!</h3>
                  <p className="text-[#CBC5CE] max-w-md mx-auto mb-8">Our white label team will review your information and send a customized proposal within 24 hours.</p>
                  <button onClick={onClose} className="px-8 py-3 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">Close</button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ============================================
// HEADER COMPONENT
// ============================================
const Header = ({ onContactClick }: { onContactClick: (method: 'form' | 'email') => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-[#0A1628]/95 backdrop-blur-[20px] py-3 border-b border-[#D4AF37]/10' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
        <div className="flex items-center justify-between">
          <Link href="/page2" className="flex items-center gap-2 sm:gap-3 group">
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <svg className="w-8 h-8 sm:w-11 sm:h-11" viewBox="0 0 44 44" fill="none">
                <rect x="6" y="8" width="32" height="6" rx="2" fill="#D4AF37"/>
                <rect x="6" y="19" width="26" height="6" rx="2" fill="#D4AF37"/>
                <rect x="6" y="30" width="20" height="6" rx="2" fill="#D4AF37"/>
              </svg>
            </motion.div>
            <div className="hidden sm:block">
              <div className="font-['Outfit'] font-semibold text-sm sm:text-lg tracking-[0.2em] text-[#F8F9FA] uppercase">The Mudeer</div>
              <div className="text-[8px] sm:text-[9px] tracking-[0.15em] text-[#D4AF37] uppercase mt-0.5">Property Management</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {['Platform', 'Hausbuddy', 'White Label', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[#F8F9FA] text-sm font-normal tracking-[0.05em] relative group"
                whileHover={{ color: '#D4AF37' }}
              >
                {item}
                <motion.span className="absolute bottom-[-4px] left-0 h-[1px] bg-[#D4AF37]" initial={{ width: 0 }} whileHover={{ width: '100%' }} transition={{ duration: 0.3 }} />
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onContactClick('form')}
              className="px-3 sm:px-5 py-2 sm:py-2.5 border border-[#D4AF37] bg-transparent text-[#D4AF37] text-xs sm:text-sm font-medium rounded-lg transition-all hover:bg-[#D4AF37] hover:text-[#0A1628]"
            >
              <span className="hidden sm:inline">Contact Us</span>
              <span className="sm:hidden">Contact</span>
            </motion.button>
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-3 sm:px-5 py-2 sm:py-2.5 bg-[#D4AF37] text-[#0A1628] text-xs sm:text-sm font-medium rounded-lg hover:bg-[#E8C968] transition-colors"
              >
                Login
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

// ============================================
// HERO SECTION
// ============================================
const HeroSection = ({ onContactClick }: { onContactClick: (method: 'form' | 'email') => void }) => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-[80px] sm:pt-[100px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/97 via-[#0A1628]/85 to-[#0A1628]/75 z-10" />
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 80% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(0, 167, 157, 0.05) 0%, transparent 50%), linear-gradient(180deg, #0A1628 0%, #0F1D2F 100%)` }} />
        <motion.div className="absolute inset-0 z-20" animate={{ opacity: [0.08, 0.15, 0.08] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} style={{ backgroundImage: `linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] relative z-10">
        <div className="max-w-[900px]">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="inline-flex items-center gap-3 mb-6 sm:mb-8">
            <motion.span className="w-6 sm:w-10 h-[1px] bg-[#D4AF37]" initial={{ width: 0 }} animate={{ width: 'auto' }} transition={{ duration: 0.8, delay: 0.5 }} />
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#D4AF37]">Premium Property Management</span>
            <motion.span className="w-6 sm:w-10 h-[1px] bg-[#D4AF37]" initial={{ width: 0 }} animate={{ width: 'auto' }} transition={{ duration: 0.8, delay: 0.5 }} />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-['Cormorant_Garamond'] text-[clamp(36px,8vw,84px)] leading-[1.05] mb-6 sm:mb-8">
            Elevate Your<br/>Real Estate Portfolio
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-base sm:text-xl font-light text-[#CBC5CE] max-w-[600px] mb-8 sm:mb-10 leading-[1.7]">
            A refined approach to property management. Seamless operations, satisfied tenants, and complete control over your assets.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.button onClick={() => onContactClick('form')} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 sm:px-8 py-3 sm:py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
              Schedule a Demo
            </motion.button>
            <motion.button onClick={() => onContactClick('email')} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 sm:px-8 py-3 sm:py-4 border border-[#D4AF37]/30 text-[#F8F9FA] font-medium rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
              Email Us
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#9CA3AF]">Scroll</span>
        <motion.div animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-[1px] h-[40px] sm:h-[60px] bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </motion.div>
    </section>
  );
};

// ============================================
// THREE PILLARS SECTION
// ============================================
const ThreePillarsSection = ({ onContactClick, onWhiteLabelClick }: { onContactClick: (method: 'form' | 'email') => void; onWhiteLabelClick: () => void }) => {
  const pillars = [
    {
      id: 'platform',
      tag: 'For Property Managers',
      title: 'The Mudeer Platform',
      description: 'A comprehensive dashboard designed for those who oversee portfolios. Track performance, manage operations, and make informed decisions with clarity.',
      features: ['Real-time analytics dashboard', 'Automated financial reporting', 'Maintenance workflow management'],
      link: '/solutions/platform',
      linkText: 'Explore Platform',
      graphic: (
        <div className="relative w-full h-full bg-[#0A1628] rounded-lg p-3 sm:p-4 overflow-hidden">
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
            <div className="h-12 sm:h-20 bg-[#D4AF37]/5 rounded mt-2" />
          </div>
        </div>
      )
    },
    {
      id: 'hausbuddy',
      tag: 'For Tenants',
      title: 'Hausbuddy App',
      description: 'A refined mobile experience for residents. Pay rent, submit requests, and stay connected with their home—all from the palm of their hand.',
      features: ['One-tap rent payments', 'Maintenance request with photos', 'Community announcements'],
      link: '/solutions/hausbuddy',
      linkText: 'View App Features',
      graphic: (
        <div className="relative w-full h-full bg-[#0A1628] rounded-lg p-3 sm:p-4 overflow-hidden flex items-center justify-center">
          <motion.div className="w-14 sm:w-20 h-24 sm:h-36 bg-gradient-to-b from-[#1A2B42] to-[#0A1628] rounded-xl border border-[#00A79D]/30 p-1" whileHover={{ y: -5 }}>
            <div className="w-full h-full bg-[#0F1D2F] rounded-lg p-1.5 sm:p-2">
              <div className="w-full h-1.5 sm:h-2 bg-[#00A79D]/30 rounded mb-1.5 sm:mb-2" />
              <div className="w-3/4 h-1.5 sm:h-2 bg-[#00A79D]/20 rounded mb-2 sm:mb-4" />
              <div className="space-y-1 sm:space-y-2">
                <div className="h-4 sm:h-6 bg-[#00A79D]/10 rounded" />
                <div className="h-4 sm:h-6 bg-[#00A79D]/10 rounded" />
              </div>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 'white-label',
      tag: 'For Enterprises',
      title: 'White Label Solution',
      description: 'Your brand, our technology. Offer a fully-branded property management experience to your clients while we power everything behind the scenes.',
      features: ['Complete brand customization', 'Your domain, your logo', 'Dedicated infrastructure'],
      onClick: true,
      linkText: 'Learn About White Label',
      graphic: (
        <div className="relative w-full h-full bg-[#0A1628] rounded-lg p-3 sm:p-4 overflow-hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-xl bg-[#D4AF37]/20 border-2 border-dashed border-[#D4AF37] flex items-center justify-center mb-2 sm:mb-3">
              <span className="text-[#D4AF37] text-[10px] sm:text-xs">Your Logo</span>
            </div>
            <div className="w-16 sm:w-24 h-1.5 sm:h-2 bg-[#D4AF37]/30 rounded" />
            <div className="w-10 sm:w-16 h-1 sm:h-2 bg-[#D4AF37]/20 rounded mt-1.5 sm:mt-2" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="platform" className="py-20 sm:py-32 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
        <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="text-center mb-12 sm:mb-20">
          <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-4 sm:mb-6">Our Solutions</span>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,5vw,56px)] mb-4 sm:mb-6">Three Pillars of Excellence</h2>
          <p className="text-base sm:text-xl text-[#CBC5CE] max-w-[600px] mx-auto px-4">Each designed to serve a distinct purpose, working in harmony to create a seamless property management ecosystem.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="h-36 sm:h-48 overflow-hidden bg-[#0A1628]/50">{pillar.graphic}</div>
              <div className="p-5 sm:p-8">
                <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#D4AF37]/60">{pillar.tag}</span>
                <h3 className="text-lg sm:text-2xl font-['Cormorant_Garamond'] text-[#F8F9FA] mt-1 sm:mt-2 mb-2 sm:mb-4">{pillar.title}</h3>
                <p className="text-[#9CA3AF] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{pillar.description}</p>
                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {pillar.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs sm:text-sm text-[#CBC5CE]">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {pillar.onClick ? (
                  <button onClick={onWhiteLabelClick} className="text-[#D4AF37] text-xs sm:text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    {pillar.linkText}
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                ) : (
                  <Link href={pillar.link} className="text-[#D4AF37] text-xs sm:text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    {pillar.linkText}
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
const HowItWorksSection = ({ onContactClick }: { onContactClick: (method: 'form') => void }) => {
  const steps = [
    { number: '01', title: 'Connect', description: 'We integrate with your existing systems and migrate your data seamlessly. No disruption to your operations.' },
    { number: '02', title: 'Customize', description: 'Tailor the platform to your brand and workflow. Configure automations that match your processes.' },
    { number: '03', title: 'Launch', description: 'Go live with confidence. Our team provides support throughout the transition and beyond.' },
  ];

  return (
    <section id="white-label" className="py-20 sm:py-32 bg-[#F5F3F0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-20">
          <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#0A1628]/60 mb-4 sm:mb-6">Implementation</span>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,5vw,56px)] text-[#0A1628] mb-4 sm:mb-6">Start Within Days, Not Months</h2>
          <p className="text-base sm:text-lg text-[#1A2B42]/70 max-w-[550px] mx-auto">A streamlined onboarding process designed to get you operational quickly.</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl p-5 sm:p-8 border border-[#0A1628]/10 hover:border-[#D4AF37]/30 transition-all group"
            >
              <span className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl text-[#D4AF37]/20">{step.number}</span>
              <h3 className="text-lg sm:text-xl font-['Outfit'] font-semibold text-[#0A1628] mt-2 sm:mt-4 mb-2 sm:mb-3">{step.title}</h3>
              <p className="text-[#1A2B42]/70 text-xs sm:text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <button onClick={() => onContactClick('form')} className="px-6 sm:px-10 py-3 sm:py-4 bg-[#0A1628] text-white text-sm sm:text-base font-medium rounded-lg hover:bg-[#1A2B42] transition-colors">
            Begin Your Journey
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
  const contactMethods = [
    { icon: (<svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>), title: 'Schedule a Demo', description: 'See the platform in action with our team.', action: 'Book Demo', color: 'bg-[#D4AF37] hover:bg-[#E8C968] text-[#0A1628]', method: 'form' as const },
    { icon: (<svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>), title: 'Email Us', description: 'Reach out for detailed inquiries.', action: 'Send Email', color: 'bg-[#0A1628] border border-[#D4AF37] hover:bg-[#1A2B42]', method: 'email' as const },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)` }} />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-4 sm:mb-6">Get in Touch</span>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,5vw,56px)] mb-4 sm:mb-6">Ready to Elevate Your Portfolio?</h2>
          <p className="text-base sm:text-xl text-[#CBC5CE] max-w-[600px] mx-auto">Connect with our team. We are here to assist you.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {contactMethods.map((method, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => onContactClick(method.method)}
              className={`p-6 sm:p-8 rounded-2xl text-center transition-all ${method.color}`}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/10 rounded-full flex items-center justify-center">{method.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{method.title}</h3>
              <p className={`text-xs sm:text-sm mb-4 sm:mb-6 ${method.method === 'form' ? 'text-[#0A1628]/70' : 'text-white/80'}`}>{method.description}</p>
              <span className="inline-flex items-center gap-2 font-medium text-sm">
                {method.action}
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
const Footer = ({ onContactClick }: { onContactClick: (method: 'form' | 'email') => void }) => (
  <footer className="bg-[#0F1D2F] pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-[#D4AF37]/10">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 mb-8 sm:mb-12">
        <div className="col-span-2 md:col-span-2">
          <Link href="/page2" className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <svg className="w-7 h-7 sm:w-9 sm:h-9" viewBox="0 0 44 44" fill="none">
              <rect x="6" y="8" width="32" height="6" rx="2" fill="#D4AF37"/>
              <rect x="6" y="19" width="26" height="6" rx="2" fill="#D4AF37"/>
              <rect x="6" y="30" width="20" height="6" rx="2" fill="#D4AF37"/>
            </svg>
            <span className="font-['Outfit'] font-semibold text-xs sm:text-sm tracking-[0.2em] text-[#F8F9FA] uppercase">The Mudeer</span>
          </Link>
          <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed max-w-xs">Refined property management solutions for discerning professionals.</p>
        </div>
        <div>
          <h4 className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-[#D4AF37] mb-3 sm:mb-4">Solutions</h4>
          <ul className="space-y-2 sm:space-y-3">
            <li><Link href="/solutions/platform" className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">Platform</Link></li>
            <li><Link href="/solutions/hausbuddy" className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">Hausbuddy</Link></li>
            <li><Link href="/solutions/white-label" className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">White Label</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-[#D4AF37] mb-3 sm:mb-4">Contact</h4>
          <ul className="space-y-2 sm:space-y-3">
            <li><button onClick={() => onContactClick('form')} className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">Schedule Demo</button></li>
            <li><button onClick={() => onContactClick('email')} className="text-xs sm:text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">Email Us</button></li>
            <li><span className="text-xs sm:text-sm text-[#9CA3AF]">Dubai, UAE</span></li>
          </ul>
        </div>
      </div>
      <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <div className="text-xs text-[#9CA3AF]">© 2025 The Mudeer. All rights reserved.</div>
        <div className="flex gap-4 sm:gap-6">
          <a href="#" className="text-xs text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">Privacy</a>
          <a href="#" className="text-xs text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

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
