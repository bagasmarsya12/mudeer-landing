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

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

// ============================================
// CONSULTATION MODAL COMPONENT
// ============================================
const ConsultationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="relative w-full max-w-md bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl p-8 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#0A1628]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37] mb-3">Thank You!</h3>
                  <p className="text-[#CBC5CE]">Our team will contact you within 24 hours.</p>
                  <button
                    onClick={handleClose}
                    className="mt-6 px-6 py-3 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37] mb-2">Schedule a Consultation</h3>
                    <p className="text-[#9CA3AF] text-sm">Fill in your details and we&apos;ll get back to you shortly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D4AF37] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#D4AF37] transition-colors"
                        placeholder="+971 50 123 4567"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold tracking-wider uppercase rounded-lg hover:bg-[#E8C968] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Request Consultation'
                      )}
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
// HEADER COMPONENT
// ============================================
const Header = ({ onConsultClick }: { onConsultClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-[20px] py-4 border-b border-[#D4AF37]/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/page2" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none">
                <rect x="6" y="8" width="32" height="6" rx="2" fill="#D4AF37"/>
                <rect x="6" y="19" width="26" height="6" rx="2" fill="#D4AF37"/>
                <rect x="6" y="30" width="20" height="6" rx="2" fill="#D4AF37"/>
              </svg>
              <motion.div
                className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
            <div>
              <div className="font-['Outfit'] font-semibold text-lg tracking-[0.2em] text-[#F8F9FA] uppercase">
                The Mudeer
              </div>
              <div className="text-[9px] tracking-[0.15em] text-[#D4AF37] uppercase mt-0.5">
                Property Management, Mastered
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {['Solutions', 'Features', 'Pricing', 'About', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-[#F8F9FA] text-sm font-normal tracking-[0.05em] relative group"
                whileHover={{ color: '#D4AF37' }}
              >
                {item}
                <motion.span 
                  className="absolute bottom-[-4px] left-0 h-[1px] bg-[#D4AF37]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <motion.div 
              className="flex items-center gap-2 text-[#9CA3AF] text-[13px] cursor-pointer hover:text-[#D4AF37] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              EN
            </motion.div>
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#D4AF37', color: '#0A1628' }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-[#D4AF37] bg-transparent text-[#D4AF37] font-['Outfit'] text-[13px] font-medium tracking-[0.1em] uppercase transition-all rounded"
              >
                Client Portal Login
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex flex-col gap-[5px] cursor-pointer p-2.5">
            <span className="w-6 h-0.5 bg-[#D4AF37]" />
            <span className="w-6 h-0.5 bg-[#D4AF37]" />
            <span className="w-6 h-0.5 bg-[#D4AF37]" />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

// ============================================
// HERO SECTION
// ============================================
const HeroSection = ({ onConsultClick }: { onConsultClick: () => void }) => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-[100px]">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/97 via-[#0A1628]/85 to-[#0A1628]/75 z-10" />
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 80% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 20% 80%, rgba(0, 167, 157, 0.05) 0%, transparent 50%),
              linear-gradient(180deg, #0A1628 0%, #0F1D2F 100%)
            `
          }}
        />
        
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 z-20"
          animate={{ opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            backgroundImage: `
              linear-gradient(#D4AF37 1px, transparent 1px),
              linear-gradient(90deg, #D4AF37 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 z-30 overflow-hidden">
          {[10, 25, 40, 55, 70, 85].map((left, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
              style={{ left: `${left}%` }}
              animate={{
                y: ['100vh', '-100px'],
                opacity: [0, 0.8, 0.8, 0],
                scale: [0, 1]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: i * 2,
                ease: 'linear'
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] relative z-10">
        <div className="max-w-[900px]">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <motion.span 
              className="w-10 h-[1px] bg-[#D4AF37]"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
              The Future of Property Management
            </span>
            <motion.span 
              className="w-10 h-[1px] bg-[#D4AF37]"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-['Cormorant_Garamond'] text-[clamp(48px,8vw,96px)] leading-[1.05] mb-8"
          >
            Command Your<br/>
            Real Estate <span className="text-[#D4AF37]">Empire.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl font-light text-[#CBC5CE] max-w-[600px] mb-12 leading-[1.7]"
          >
            The definitive digital ecosystem for elite developers and asset managers. 
            Bridging physical assets with executive digital control.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-12 mb-12"
          >
            {[
              { value: '500+', label: 'Properties Managed' },
              { value: '50K+', label: 'Active Tenants' },
              { value: '$2B+', label: 'Assets Under Management' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-[#D4AF37]">{stat.value}</div>
                <div className="text-xs text-[#9CA3AF] uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-8 flex-wrap"
          >
            <motion.button
              onClick={onConsultClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-3 px-10 py-[18px] bg-[#D4AF37] text-[#0A1628] font-['Outfit'] text-sm font-semibold tracking-[0.1em] uppercase overflow-hidden group rounded"
            >
              <span className="absolute inset-0 bg-[#E8C968] -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
              <span className="relative z-10">Request Executive Demo</span>
            </motion.button>

            <motion.a
              href="#features"
              className="inline-flex items-center gap-2 text-[#F8F9FA] text-sm font-normal tracking-[0.05em] hover:text-[#D4AF37] hover:gap-4 transition-all"
              whileHover={{ x: 5 }}
            >
              Explore Solutions
              <motion.svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </motion.svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase text-[#9CA3AF]">Scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-[60px] bg-gradient-to-b from-[#D4AF37] to-transparent"
        />
      </motion.div>
    </section>
  );
};

// ============================================
// TRUSTED BY SECTION
// ============================================
const TrustedBySection = () => {
  const logos = [
    { name: 'Emaar', abbr: 'EMAAR' },
    { name: 'Damac', abbr: 'DAMAC' },
    { name: 'Aldar', abbr: 'ALDAR' },
    { name: 'Sobha', abbr: 'SOBHA' },
    { name: 'Meraas', abbr: 'MERAAS' },
    { name: 'Nakheel', abbr: 'NAKHEEL' },
  ];

  return (
    <section className="py-16 bg-[#0A1628] border-y border-[#D4AF37]/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
        <motion.p
          {...fadeIn}
          className="text-center text-[#9CA3AF] text-sm uppercase tracking-[0.2em] mb-10"
        >
          Trusted by Leading Developers
        </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="flex justify-center items-center gap-12 flex-wrap"
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{ scale: 1.1, color: '#D4AF37' }}
              className="text-[#9CA3AF]/50 text-lg font-semibold tracking-[0.15em] cursor-pointer transition-colors hover:text-[#D4AF37]"
            >
              {logo.abbr}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// FEATURE DETAIL MODAL COMPONENT
// ============================================
const FeatureDetailModal = ({ feature, isOpen, onClose }: { 
  feature: any; 
  isOpen: boolean; 
  onClose: () => void;
}) => {
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

  if (!feature) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/20 rounded-3xl shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="grid lg:grid-cols-2">
                {/* Left Side - Illustration */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-[#0A1628] to-[#1A2B42] p-8 flex items-center justify-center overflow-hidden">
                  {/* Background Pattern */}
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
                  
                  {/* Feature Illustration */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="relative z-10 w-full max-w-[280px]"
                  >
                    {feature.detailedIllustration}
                  </motion.div>

                  {/* Decorative Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl" />
                </div>

                {/* Right Side - Content */}
                <div className="p-8 lg:p-10">
                  {/* Icon & Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-4 mb-6"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#B8962E] flex items-center justify-center text-3xl shadow-lg shadow-[#D4AF37]/20">
                      {feature.icon}
                    </div>
                    <div>
                      <span className="text-[11px] tracking-[0.2em] uppercase text-[#D4AF37]/60">Feature</span>
                      <h3 className="font-['Cormorant_Garamond'] text-3xl text-[#F8F9FA]">{feature.title}</h3>
                    </div>
                  </motion.div>

                  {/* Story/Pitch */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <p className="text-lg text-[#CBC5CE] leading-relaxed mb-4 font-light">
                      {feature.story}
                    </p>
                    <p className="text-[#9CA3AF] leading-relaxed">
                      {feature.pitch}
                    </p>
                  </motion.div>

                  {/* Key Benefits */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8"
                  >
                    <h4 className="text-sm uppercase tracking-wider text-[#D4AF37] mb-4 font-semibold">What You Get</h4>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit: string, i: number) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[#CBC5CE] text-sm">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-3 gap-4 mb-8 p-4 bg-[#0A1628]/50 rounded-xl border border-[#D4AF37]/10"
                  >
                    {feature.stats.map((stat: any, i: number) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-[#D4AF37]">{stat.value}</div>
                        <div className="text-[10px] text-[#9CA3AF] uppercase tracking-wider mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>

                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <button className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8962E] text-[#0A1628] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all flex items-center justify-center gap-2 group">
                      Learn More About {feature.title}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// ============================================
// FEATURES SECTION WITH MODALS
// ============================================
const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (feature: any) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedFeature(null), 300);
  };

  const features = [
    {
      icon: '📊',
      title: 'Executive Dashboard',
      description: 'Real-time portfolio analytics, occupancy rates, and financial metrics at your fingertips.',
      story: 'Imagine starting your day with complete clarity. No more digging through spreadsheets or chasing updates from your team.',
      pitch: 'Our Executive Dashboard aggregates every critical metric across your portfolio into one elegant command center. From occupancy trends to cash flow projections, you make decisions based on real-time data—not yesterday\'s reports.',
      benefits: [
        'Real-time portfolio performance metrics updated every 15 minutes',
        'Predictive analytics for occupancy and revenue forecasting',
        'Customizable KPI widgets for your specific business goals',
        'Automated alerts for anomalies or opportunities',
        'One-click export of board-ready reports'
      ],
      stats: [
        { value: '15min', label: 'Data Refresh' },
        { value: '50+', label: 'Metrics' },
        { value: '24/7', label: 'Monitoring' }
      ],
      graphic: (
        <div className="relative w-full h-full bg-[#0A1628] rounded-lg p-4 overflow-hidden">
          <div className="flex items-end justify-between h-16 gap-2 mb-4">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <motion.div
                key={i}
                className="w-full bg-gradient-to-t from-[#D4AF37] to-[#D4AF37]/50 rounded-t"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-[#D4AF37]/10 rounded p-2">
                <div className="h-2 w-8 bg-[#D4AF37]/30 rounded mb-1" />
                <div className="h-3 w-12 bg-[#D4AF37] rounded" />
              </div>
            ))}
          </div>
        </div>
      ),
      detailedIllustration: (
        <svg viewBox="0 0 280 200" className="w-full">
          {/* Dashboard Frame */}
          <rect x="10" y="10" width="260" height="180" rx="12" fill="#0A1628" stroke="#D4AF37" strokeWidth="1" />
          {/* Header */}
          <rect x="10" y="10" width="260" height="30" rx="12" fill="#D4AF37" />
          <circle cx="30" cy="25" r="4" fill="#0A1628" />
          <circle cx="45" cy="25" r="4" fill="#0A1628" opacity="0.5" />
          <circle cx="60" cy="25" r="4" fill="#0A1628" opacity="0.3" />
          {/* Chart Area */}
          <rect x="25" y="55" width="150" height="80" rx="8" fill="#1A2B42" />
          {/* Line Chart */}
          <motion.path
            d="M40 115 L60 100 L80 105 L100 85 L120 90 L140 70 L160 75"
            stroke="#D4AF37"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
          {/* Stats Cards */}
          <rect x="185" y="55" width="70" height="35" rx="6" fill="#D4AF37" opacity="0.2" />
          <text x="195" y="75" fill="#D4AF37" fontSize="10" fontWeight="bold">94%</text>
          <text x="195" y="85" fill="#9CA3AF" fontSize="6">Occupancy</text>
          
          <rect x="185" y="100" width="70" height="35" rx="6" fill="#D4AF37" opacity="0.2" />
          <text x="195" y="120" fill="#D4AF37" fontSize="10" fontWeight="bold">$2.4M</text>
          <text x="195" y="130" fill="#9CA3AF" fontSize="6">Revenue</text>
          {/* Bottom Widgets */}
          <rect x="25" y="145" width="110" height="35" rx="6" fill="#1A2B42" />
          <rect x="145" y="145" width="110" height="35" rx="6" fill="#1A2B42" />
        </svg>
      )
    },
    {
      icon: '🔧',
      title: 'Smart Maintenance',
      description: 'AI-powered predictive maintenance scheduling with automated vendor dispatch.',
      story: 'Maintenance requests used to slip through cracks. Emergency repairs at 2 AM. Frustrated tenants. Overworked staff.',
      pitch: 'Our AI engine learns from historical data to predict issues before they become emergencies. From HVAC servicing to elevator inspections, every task is automatically scheduled, assigned, and tracked—keeping your assets in peak condition.',
      benefits: [
        'AI-powered failure prediction reduces emergency repairs by 60%',
        'Automatic vendor dispatch based on expertise and availability',
        'Tenant self-service portal for submitting requests with photos',
        'Real-time progress tracking and automatic status updates',
        'Digital maintenance history for every asset'
      ],
      stats: [
        { value: '60%', label: 'Fewer Emergencies' },
        { value: '4hr', label: 'Avg Response' },
        { value: '100%', label: 'Tracked' }
      ],
      graphic: (
        <div className="relative w-full h-full bg-[#0A1628] rounded-lg p-4 overflow-hidden">
          <div className="flex items-center justify-between">
            {['Report', 'Assign', 'Complete'].map((step, i) => (
              <div key={i} className="flex items-center">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8962E] flex items-center justify-center text-[#0A1628] font-bold text-xs"
                  whileHover={{ scale: 1.1 }}
                >
                  {i + 1}
                </motion.div>
                {i < 2 && (
                  <motion.div
                    className="w-8 h-0.5 bg-[#D4AF37]/30"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <div className="h-2 bg-[#D4AF37]/20 rounded flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      ),
      detailedIllustration: (
        <svg viewBox="0 0 280 200" className="w-full">
          {/* Maintenance Flow */}
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {/* Flow Lines */}
          <path d="M50 100 L230 100" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
          {/* Step 1: Alert */}
          <motion.circle
            cx="50" cy="100" r="30" fill="#D4AF37" opacity="0.2"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <circle cx="50" cy="100" r="25" fill="#0A1628" stroke="#D4AF37" strokeWidth="2" />
          <text x="50" y="95" textAnchor="middle" fill="#D4AF37" fontSize="16">🔔</text>
          <text x="50" y="145" textAnchor="middle" fill="#CBC5CE" fontSize="8">Alert</text>
          {/* Step 2: AI Processing */}
          <rect x="95" y="75" width="60" height="50" rx="8" fill="#1A2B42" stroke="#D4AF37" strokeWidth="1" />
          <motion.circle
            cx="125" cy="90" r="3" fill="#D4AF37"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.circle
            cx="135" cy="90" r="3" fill="#D4AF37"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.circle
            cx="145" cy="90" r="3" fill="#D4AF37"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
          <text x="125" y="115" fill="#9CA3AF" fontSize="8">AI Analysis</text>
          {/* Step 3: Assignment */}
          <circle cx="200" cy="100" r="25" fill="#0A1628" stroke="#D4AF37" strokeWidth="2" />
          <text x="200" y="95" textAnchor="middle" fill="#D4AF37" fontSize="14">👷</text>
          <text x="200" y="145" textAnchor="middle" fill="#CBC5CE" fontSize="8">Assigned</text>
          {/* Checkmark */}
          <motion.path
            d="M230 70 L240 80 L255 60"
            stroke="#D4AF37"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          />
        </svg>
      )
    },
    {
      icon: '💰',
      title: 'Financial Hub',
      description: 'Automated rent collection, expense tracking, and comprehensive reporting.',
      story: 'Chasing late payments. Reconciling accounts at month-end. Explaining variances to investors. Sound familiar?',
      pitch: 'Our Financial Hub automates the entire revenue cycle—from invoice generation to reconciliation. Tenants pay through multiple channels, funds deposit automatically, and your books stay balanced without the manual grind.',
      benefits: [
        'Automated rent invoicing and collection via multiple payment methods',
        'Real-time cash flow visibility across all properties',
        'Automatic late fee calculation and reminder sequences',
        'Expense categorization and vendor payment tracking',
        'Investor-ready financial reports generated instantly'
      ],
      stats: [
        { value: '98%', label: 'Collection Rate' },
        { value: '0', label: 'Manual Entry' },
        { value: '3s', label: 'Reconciliation' }
      ],
      graphic: (
        <div className="relative w-full h-full bg-[#0A1628] rounded-lg p-4 overflow-hidden">
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Revenue', value: '$2.4M', trend: '+12%' },
              { label: 'Expenses', value: '$450K', trend: '-5%' },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-lg p-3 border border-[#D4AF37]/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-[8px] text-[#9CA3AF] uppercase tracking-wider">{card.label}</div>
                <div className="text-lg font-bold text-[#D4AF37]">{card.value}</div>
                <div className={`text-[10px] ${card.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {card.trend}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-3 h-8 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/30 to-[#D4AF37]/10 rounded"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      ),
      detailedIllustration: (
        <svg viewBox="0 0 280 200" className="w-full">
          {/* Financial Hub */}
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8962E" />
            </linearGradient>
          </defs>
          {/* Central Hub */}
          <circle cx="140" cy="100" r="40" fill="#0A1628" stroke="url(#goldGrad)" strokeWidth="3" />
          <text x="140" y="95" textAnchor="middle" fill="#D4AF37" fontSize="20">💰</text>
          <text x="140" y="115" textAnchor="middle" fill="#CBC5CE" fontSize="8">HUB</text>
          {/* Connected Nodes */}
          {[0, 60, 120, 180, 240].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 140 + 40 * Math.cos(rad);
            const y1 = 100 + 40 * Math.sin(rad);
            const x2 = 140 + 80 * Math.cos(rad);
            const y2 = 100 + 80 * Math.sin(rad);
            return (
              <g key={i}>
                <motion.line
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="#D4AF37"
                  strokeWidth="2"
                  opacity="0.4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                />
                <circle cx={x2} cy={y2} r="15" fill="#1A2B42" stroke="#D4AF37" strokeWidth="1" />
              </g>
            );
          })}
          {/* Labels */}
          <text x="140" y="25" textAnchor="middle" fill="#9CA3AF" fontSize="8">Auto-Collect</text>
          <text x="230" y="60" textAnchor="middle" fill="#9CA3AF" fontSize="8">Reports</text>
          <text x="230" y="155" textAnchor="middle" fill="#9CA3AF" fontSize="8">Expenses</text>
          <text x="50" y="155" textAnchor="middle" fill="#9CA3AF" fontSize="8">Analytics</text>
          <text x="50" y="60" textAnchor="middle" fill="#9CA3AF" fontSize="8">Invoices</text>
        </svg>
      )
    },
    {
      icon: '👥',
      title: 'Tenant Portal',
      description: 'Self-service portal for tenants with payments, requests, and communication.',
      story: 'Your tenants are customers. They expect the same convenience they get from their banking app or food delivery service.',
      pitch: 'Give tenants the modern experience they demand. Pay rent in seconds. Submit maintenance requests with photos. Book amenities. All from their phone. Happy tenants stay longer—and refer their friends.',
      benefits: [
        'Native mobile apps for iOS and Android with biometric login',
        'One-tap rent payment with Apple Pay, Google Pay, or card',
        'Maintenance requests with photo/video attachment',
        'Amenity booking and community announcements',
        'Digital lease documents and payment history'
      ],
      stats: [
        { value: '4.9★', label: 'App Rating' },
        { value: '85%', label: 'Active Users' },
        { value: '3min', label: 'Avg Session' }
      ],
      graphic: (
        <div className="relative w-full h-full bg-[#0A1628] rounded-lg p-4 overflow-hidden">
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8962E] border-2 border-[#0A1628] flex items-center justify-center text-[10px] text-[#0A1628] font-bold"
                style={{ marginLeft: i > 0 ? '-8px' : 0 }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
              >
                {String.fromCharCode(65 + i)}
              </motion.div>
            ))}
            <div className="ml-2 text-[10px] text-[#9CA3AF]">+2.4K</div>
          </div>
          <div className="space-y-2">
            {['Payment Received', 'Maintenance Request', 'Lease Renewal'].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-[10px]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="text-[#CBC5CE]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ),
      detailedIllustration: (
        <svg viewBox="0 0 280 200" className="w-full">
          {/* Phone Mockup */}
          <rect x="90" y="20" width="100" height="160" rx="16" fill="#0A1628" stroke="#D4AF37" strokeWidth="2" />
          <rect x="95" y="30" width="90" height="140" rx="10" fill="#1A2B42" />
          {/* Notch */}
          <rect x="125" y="25" width="30" height="4" rx="2" fill="#0A1628" />
          {/* App Interface */}
          <text x="140" y="55" textAnchor="middle" fill="#F8F9FA" fontSize="10" fontWeight="bold">Welcome, Sarah</text>
          {/* Quick Actions */}
          <rect x="105" y="70" width="35" height="35" rx="8" fill="#D4AF37" opacity="0.2" />
          <text x="122" y="90" textAnchor="middle" fill="#D4AF37" fontSize="14">💳</text>
          <text x="122" y="110" textAnchor="middle" fill="#9CA3AF" fontSize="6">Pay</text>
          
          <rect x="150" y="70" width="35" height="35" rx="8" fill="#D4AF37" opacity="0.2" />
          <text x="167" y="90" textAnchor="middle" fill="#D4AF37" fontSize="14">🔧</text>
          <text x="167" y="110" textAnchor="middle" fill="#9CA3AF" fontSize="6">Fix</text>
          {/* Notification */}
          <motion.rect
            x="105" y="125" width="80" height="30" rx="6" fill="#0A1628" stroke="#D4AF37" strokeWidth="1"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          />
          <text x="145" y="143" textAnchor="middle" fill="#CBC5CE" fontSize="7">Rent Paid ✅</text>
          {/* Home Indicator */}
          <rect x="125" y="165" width="30" height="3" rx="1.5" fill="#D4AF37" opacity="0.3" />
        </svg>
      )
    },
    {
      icon: '📱',
      title: 'Mobile Command',
      description: 'Manage your entire portfolio from anywhere with our native mobile apps.',
      story: 'Property management doesn\'t stop when you leave the office. Emergencies happen. Decisions need to be made. Opportunities arise.',
      pitch: 'Take your entire operation in your pocket. Approve expenses during your commute. Respond to tenant requests from the coffee shop. Monitor portfolio performance from across the globe. You\'re always in command.',
      benefits: [
        'Native iOS and Android apps built for speed and reliability',
        'Push notifications for critical alerts requiring approval',
        'Offline mode—work continues even without connectivity',
        'Biometric security with Face ID and fingerprint login',
        'Voice commands for quick actions and dictation'
      ],
      stats: [
        { value: '99.9%', label: 'Uptime' },
        { value: '<2s', label: 'Load Time' },
        { value: '50K+', label: 'Downloads' }
      ],
      graphic: (
        <div className="relative w-full h-full bg-[#0A1628] rounded-lg p-4 overflow-hidden">
          <div className="flex justify-center">
            <motion.div
              className="w-16 h-28 bg-gradient-to-b from-[#1A2B42] to-[#0A1628] rounded-xl border border-[#D4AF37]/30 p-1"
              whileHover={{ y: -5 }}
            >
              <div className="w-full h-full bg-[#0F1D2F] rounded-lg p-1">
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="aspect-square rounded bg-[#D4AF37]/20"
                      animate={{ opacity: [0.3, 0.7, 0.3] }}
                      transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-2 text-center text-[10px] text-[#9CA3AF]">iOS & Android</div>
        </div>
      ),
      detailedIllustration: (
        <svg viewBox="0 0 280 200" className="w-full">
          {/* Manager Phone */}
          <motion.g
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="60" y="40" width="70" height="120" rx="12" fill="#0A1628" stroke="#D4AF37" strokeWidth="2" />
            <rect x="67" y="50" width="56" height="100" rx="8" fill="#1A2B42" />
            {/* Signal Waves */}
            <motion.path
              d="M130 100 Q160 100 180 80"
              stroke="#D4AF37"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M130 110 Q160 110 180 130"
              stroke="#D4AF37"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.g>
          {/* Building Icon */}
          <motion.g
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <rect x="170" y="60" width="60" height="80" rx="4" fill="#0A1628" stroke="#D4AF37" strokeWidth="2" />
            {/* Windows */}
            <rect x="180" y="75" width="15" height="12" rx="2" fill="#D4AF37" opacity="0.3" />
            <rect x="205" y="75" width="15" height="12" rx="2" fill="#D4AF37" opacity="0.3" />
            <rect x="180" y="95" width="15" height="12" rx="2" fill="#D4AF37" opacity="0.5" />
            <rect x="205" y="95" width="15" height="12" rx="2" fill="#D4AF37" opacity="0.5" />
            <rect x="180" y="115" width="15" height="12" rx="2" fill="#D4AF37" opacity="0.7" />
            <rect x="205" y="115" width="15" height="12" rx="2" fill="#D4AF37" opacity="0.7" />
          </motion.g>
          {/* Connection Status */}
          <circle cx="200" cy="150" r="8" fill="#D4AF37" />
          <text x="200" y="154" textAnchor="middle" fill="#0A1628" fontSize="8">✓</text>
        </svg>
      )
    },
    {
      icon: '🔐',
      title: 'Enterprise Security',
      description: 'Bank-grade encryption with SOC 2 compliance and role-based access control.',
      story: 'Your data is your competitive advantage. One breach could destroy trust built over decades. Security isn\'t optional—it\'s survival.',
      pitch: 'Built with the same security standards as the world\'s leading financial institutions. End-to-end encryption. Multi-factor authentication. Role-based access. Full audit trails. Sleep soundly knowing your data is fortress-protected.',
      benefits: [
        'SOC 2 Type II certified with annual third-party audits',
        '256-bit AES encryption at rest and TLS 1.3 in transit',
        'Role-based access control with granular permissions',
        'Comprehensive audit logs of all user activities',
        '99.99% uptime SLA with redundant infrastructure'
      ],
      stats: [
        { value: '256-bit', label: 'Encryption' },
        { value: '99.99%', label: 'Uptime SLA' },
        { value: '24/7', label: 'Monitoring' }
      ],
      graphic: (
        <div className="relative w-full h-full bg-[#0A1628] rounded-lg p-4 overflow-hidden">
          <div className="flex justify-center">
            <motion.div
              className="relative"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                <path
                  d="M32 4L8 16v16c0 14.67 10.24 28.4 24 32 13.76-3.6 24-17.33 24-32V16L32 4z"
                  stroke="#D4AF37"
                  strokeWidth="2"
                  fill="none"
                />
                <motion.path
                  d="M22 32l8 8 12-16"
                  stroke="#D4AF37"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </svg>
            </motion.div>
          </div>
          <div className="mt-2 flex justify-center gap-1">
            {['SOC 2', 'GDPR', 'ISO'].map((badge, i) => (
              <span key={i} className="px-2 py-0.5 bg-[#D4AF37]/10 rounded text-[8px] text-[#D4AF37]">
                {badge}
              </span>
            ))}
          </div>
        </div>
      ),
      detailedIllustration: (
        <svg viewBox="0 0 280 200" className="w-full">
          {/* Security Shield */}
          <defs>
            <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8962E" />
            </linearGradient>
          </defs>
          {/* Central Shield */}
          <motion.g
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <path
              d="M140 30 L80 60 V110 C80 150 140 180 140 180 C140 180 200 150 200 110 V60 Z"
              fill="#0A1628"
              stroke="url(#shieldGrad)"
              strokeWidth="3"
            />
            <motion.path
              d="M115 95 L135 115 L165 75"
              stroke="#D4AF37"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.g>
          {/* Orbiting Elements */}
          {[0, 72, 144, 216, 288].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 140 + 70 * Math.cos(rad);
            const y = 105 + 50 * Math.sin(rad);
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="6"
                fill="#D4AF37"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              />
            );
          })}
          {/* Lock Icons */}
          <text x="60" y="60" fill="#D4AF37" fontSize="16" opacity="0.6">🔒</text>
          <text x="210" y="60" fill="#D4AF37" fontSize="16" opacity="0.6">🔒</text>
          <text x="60" y="160" fill="#D4AF37" fontSize="16" opacity="0.6">🔒</text>
          <text x="210" y="160" fill="#D4AF37" fontSize="16" opacity="0.6">🔒</text>
        </svg>
      )
    },
  ];

  return (
    <>
      <FeatureDetailModal 
        feature={selectedFeature} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
      <section id="features" className="py-32 bg-[#0A1628] relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(0, 167, 157, 0.02) 0%, transparent 50%)
            `
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] relative z-10">
          {/* Section Header */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.span 
              className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Powerful Features
            </motion.span>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,64px)] mb-6">
              Everything You Need to <span className="text-[#D4AF37]">Succeed</span>
            </h2>
            <p className="text-xl text-[#CBC5CE] max-w-[600px] mx-auto">
              Comprehensive tools designed specifically for modern property management.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => openModal(feature)}
                className="group bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-2xl p-6 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500 cursor-pointer"
              >
                {/* Graphic */}
                <div className="h-32 mb-6 rounded-xl overflow-hidden bg-[#0A1628]/50">
                  {feature.graphic}
                </div>
                
                {/* Content */}
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-['Outfit'] font-semibold text-[#F8F9FA] mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Click Hint */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-[#9CA3AF]/60 uppercase tracking-wider">Click to explore</span>
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center"
                  >
                    <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

// ============================================
// BENEFITS SECTION WITH VISUALS
// ============================================
const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Reduce Operational Costs',
      value: '40%',
      description: 'Average reduction in administrative overhead through automation.',
      visual: (
        <div className="relative h-full flex items-center justify-center">
          <svg className="w-32 h-32" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="#1A2B42" strokeWidth="8" fill="none" />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="#D4AF37"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="283"
              initial={{ strokeDashoffset: 283 }}
              whileInView={{ strokeDashoffset: 170 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              transform="rotate(-90 50 50)"
            />
            <text x="50" y="55" textAnchor="middle" fill="#0A1628" fontSize="20" fontWeight="bold">40%</text>
          </svg>
        </div>
      )
    },
    {
      title: 'Faster Response Time',
      value: '3x',
      description: 'Quicker resolution of maintenance requests and tenant inquiries.',
      visual: (
        <div className="relative h-full flex items-center justify-center gap-4">
          {[
            { height: 30, color: '#1A2B42' },
            { height: 50, color: '#1A2B42' },
            { height: 80, color: '#D4AF37' },
          ].map((bar, i) => (
            <motion.div
              key={i}
              className="w-6 rounded-t"
              style={{ backgroundColor: bar.color }}
              initial={{ height: 0 }}
              whileInView={{ height: `${bar.height}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            />
          ))}
        </div>
      )
    },
    {
      title: 'Tenant Satisfaction',
      value: '95%',
      description: 'Average tenant satisfaction score across all managed properties.',
      visual: (
        <div className="relative h-full flex items-center justify-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill={i < 4 ? '#0A1628' : '#0A1628/20'}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </motion.svg>
            ))}
          </div>
        </div>
      )
    },
  ];

  return (
    <section id="solutions" className="py-32 bg-[#F5F3F0] relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 167, 157, 0.03) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] relative z-10">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#0A1628]/60 mb-6">
            Proven Results
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,64px)] text-[#0A1628] mb-6">
            Measurable Impact
          </h2>
          <p className="text-xl text-[#1A2B42] max-w-[600px] mx-auto">
            Real results from real clients who transformed their property management.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 border border-[#D4AF37]/10 hover:shadow-xl hover:border-[#D4AF37]/20 transition-all"
            >
              {/* Visual */}
              <div className="h-40 mb-6 bg-gradient-to-br from-[#0A1628] to-[#1A2B42] rounded-xl">
                {benefit.visual}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#0A1628] mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#1A2B42] text-sm leading-relaxed">
                {benefit.description}
              </p>
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
const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Seamless Import',
      description: 'We migrate your existing data—units, contracts, and tenant profiles—into the Mudeer ecosystem securely in 48 hours.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 13L20 17C20 18.6569 18.6569 20 17 20L7 20C5.34315 20 4 18.6569 4 17L4 13M12 15L12 3M12 3L16 7M12 3L8 7" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Brand Configuration',
      description: 'Apply your corporate identity. Your logo on the dashboard, your colors on the Hausbuddy app. A fully owned experience.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Instant Activation',
      description: "Invite tenants via email/SMS. They download 'House Body ID', login instantly, and your portfolio is live.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      },
    },
  };

  return (
    <section className="relative py-32 bg-[#F5F3F0] overflow-hidden">
      {/* Subtle decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#0A1628]/60 mb-6 font-medium"
          >
            Implementation
          </motion.span>

          <h2 className="font-['Cormorant_Garamond'] text-[clamp(36px,5vw,56px)] text-[#0A1628] leading-[1.1] mb-6">
            Skip 18 Months of Development
          </h2>

          <p className="text-lg text-[#1A2B42]/70 max-w-[550px] mx-auto leading-relaxed font-light">
            Enterprise-grade property management in three simple steps. From
            legacy chaos to digital excellence in under one week.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connecting Golden Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[80px] left-[16.67%] right-[16.67%] h-px">
            <motion.div
              variants={lineVariants}
              className="w-full h-full bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 lg:p-10 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(10,22,40,0.08)] h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="relative mb-8">
                    <span className="font-['Cormorant_Garamond'] text-[72px] lg:text-[88px] font-light text-[#D4AF37]/20 leading-none select-none">
                      {step.number}
                    </span>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8962E] rounded-xl flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 group-hover:scale-110 group-hover:shadow-[#D4AF37]/30 transition-all duration-500">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-['Cormorant_Garamond'] text-2xl lg:text-[28px] text-[#0A1628] mb-4 group-hover:text-[#1A2B42] transition-colors duration-300">
                      {step.title}
                    </h3>

                    <p className="text-[#1A2B42]/70 leading-relaxed text-[15px] flex-1">
                      {step.description}
                    </p>

                    {/* Step indicator for mobile */}
                    <div className="mt-6 flex items-center gap-2 lg:hidden">
                      <span className="text-[#0A1628]/60 text-xs tracking-wider uppercase font-medium">
                        Step {step.number}
                      </span>
                      <svg className="w-4 h-4 text-[#0A1628]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-8 right-8 h-px bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/30 transition-colors duration-500" />
                </div>

                {/* Arrow connector - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[80px] -right-6 transform translate-x-1/2 z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white border border-[#D4AF37]/20 flex items-center justify-center shadow-sm">
                        <svg className="w-5 h-5 text-[#0A1628]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-[#1A2B42]/60 text-sm mb-6">
            Average implementation time:{" "}
            <span className="text-[#0A1628] font-semibold">5 business days</span>
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#0A1628] text-[#F8F9FA] font-medium tracking-wide rounded-lg hover:bg-[#1A2B42] transition-colors group"
          >
            Start Your Migration
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// WHY INVEST SECTION (Sales Pitch)
// ============================================
const WhyInvestSection = () => {
  const roiPoints = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Cut Operational Costs by 40%',
      description: 'Automate rent collection, maintenance scheduling, and tenant communications. One platform replaces five separate tools.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Increase Property Value',
      description: 'Digitally-enabled properties command higher rents and sell faster. Modern tenants expect modern management.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Retain Tenants Longer',
      description: '95% tenant satisfaction scores. Happy tenants renew leases, reducing costly turnover and vacancy periods.',
    },
  ];

  return (
    <section id="pricing" className="py-32 bg-[#0A1628] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - The Pitch */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#0A1628]/60 mb-6 bg-[#D4AF37]/20 px-4 py-2 rounded-full">
              ROI Focused
            </span>
            
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,56px)] text-white leading-[1.1] mb-6">
              Stop Burning Money on Inefficiency
            </h2>
            
            <p className="text-lg text-[#CBC5CE] leading-relaxed mb-8">
              Your competitors are already automating. Every month you wait is profit left on the table. The Mudeer pays for itself within 90 days—guaranteed.
            </p>

            {/* ROI Calculator Preview */}
            <div className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-2xl p-8 border border-white/10 mb-8">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Quick ROI Estimate
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-[#9CA3AF]">Annual admin cost savings</span>
                  <span className="text-[#D4AF37] font-semibold">$48,000+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-[#9CA3AF]">Reduced vacancy rates</span>
                  <span className="text-[#D4AF37] font-semibold">+15% revenue</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#9CA3AF]">Tenant retention improvement</span>
                  <span className="text-[#D4AF37] font-semibold">3x longer</span>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {['SC', 'MA', 'JW', 'AK'].map((initials, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8962E] flex items-center justify-center text-[#0A1628] text-xs font-bold border-2 border-[#0A1628]">
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-sm text-[#9CA3AF]">
                <span className="text-white font-semibold">500+</span> property managers switched this quarter
              </div>
            </div>
          </motion.div>

          {/* Right Side - Value Points */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {roiPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all group"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0A1628] transition-all">
                    {point.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">{point.title}</h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-[#D4AF37] rounded-xl p-6 text-center"
            >
              <h4 className="text-[#0A1628] font-semibold text-lg mb-2">
                Ready to see your potential savings?
              </h4>
              <p className="text-[#0A1628]/70 text-sm mb-4">
                Get a personalized ROI analysis for your portfolio.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-[#0A1628] text-white font-semibold rounded-lg hover:bg-[#1A2B42] transition-colors"
              >
                Calculate My ROI
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// TESTIMONIALS SECTION
// ============================================
const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The Mudeer transformed how we manage our portfolio. We've reduced operational costs by 35% and tenant satisfaction is at an all-time high.",
      author: 'Sarah Chen',
      role: 'CEO, Horizon Properties',
      avatar: 'SC',
    },
    {
      quote: "The white-label solution allowed us to maintain our brand while leveraging world-class technology. Our clients love the seamless experience.",
      author: 'Mohammed Al-Rashid',
      role: 'Director, Al-Rashid Group',
      avatar: 'MA',
    },
    {
      quote: "Finally, a property management platform that understands the needs of large-scale operators. The analytics alone are worth the investment.",
      author: 'James Wilson',
      role: 'COO, Global Estates',
      avatar: 'JW',
    },
  ];

  return (
    <section className="py-32 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6">
            Testimonials
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,64px)] mb-6">
            Loved by <span className="text-[#D4AF37]">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-2xl p-8 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all"
            >
              {/* Quote Icon */}
              <div className="text-4xl text-[#D4AF37]/30 mb-4">&ldquo;</div>
              
              <p className="text-[#CBC5CE] leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8962E] flex items-center justify-center text-[#0A1628] font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[#F8F9FA]">{testimonial.author}</div>
                  <div className="text-sm text-[#9CA3AF]">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// ABOUT SECTION
// ============================================
const AboutSection = () => {
  const stats = [
    { value: '2018', label: 'Founded' },
    { value: '50+', label: 'Team Members' },
    { value: '12', label: 'Countries' },
    { value: '99.9%', label: 'Uptime' },
  ];

  return (
    <section id="about" className="py-32 bg-[#F5F3F0] relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 70%, rgba(212, 175, 55, 0.05) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#B8962E] mb-6">
              About Us
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,56px)] text-[#0A1628] mb-6">
              Building the Future of <span className="text-[#D4AF37]">Property Management</span>
            </h2>
            <p className="text-[#1A2B42] leading-relaxed mb-6">
              Founded in 2018, The Mudeer has grown from a small startup to a leading property management platform trusted by developers and asset managers worldwide. Our mission is simple: to bring modern technology to an industry that desperately needs it.
            </p>
            <p className="text-[#1A2B42] leading-relaxed mb-8">
              With offices in Dubai, London, and Singapore, we serve clients across 12 countries, managing over $2 billion in real estate assets. Our team of 50+ engineers, designers, and property experts work tirelessly to deliver the best possible experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-[#D4AF37]">{stat.value}</div>
                  <div className="text-xs text-[#9CA3AF] uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] bg-gradient-to-br from-[#0A1628] to-[#1A2B42] rounded-2xl overflow-hidden">
              {/* Abstract Pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  {[...Array(5)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={100 + i * 50}
                      cy={200}
                      r={50 + i * 30}
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: i * 0.3 }}
                    />
                  ))}
                </svg>
              </div>
              
              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32"
                >
                  <svg className="w-full h-full" viewBox="0 0 128 128" fill="none">
                    <rect x="20" y="24" width="88" height="16" rx="4" fill="#D4AF37" opacity="0.8"/>
                    <rect x="20" y="56" width="72" height="16" rx="4" fill="#D4AF37" opacity="0.6"/>
                    <rect x="20" y="88" width="56" height="16" rx="4" fill="#D4AF37" opacity="0.4"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FINAL CTA SECTION
// ============================================
const FinalCTASection = ({ onConsultClick }: { onConsultClick: () => void }) => {
  return (
    <section id="contact" className="py-40 bg-[#0A1628] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-[700px] mx-auto"
        >
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,64px)] mb-5">
            Ready to <span className="text-[#D4AF37]">Modernize</span> Your Portfolio?
          </h2>
          <p className="text-xl text-[#CBC5CE] mb-12">
            Join hundreds of property managers who have transformed their operations with The Mudeer.
          </p>
          <motion.button
            onClick={onConsultClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-3 px-14 py-[22px] bg-[#D4AF37] text-[#0A1628] font-['Outfit'] text-base font-semibold tracking-[0.1em] uppercase overflow-hidden group rounded"
          >
            <span className="absolute inset-0 bg-[#E8C968] -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
            <span className="relative z-10">Schedule a Consultation</span>
          </motion.button>
          
          <p className="mt-6 text-sm text-[#9CA3AF]">
            Free consultation. No commitment required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// FOOTER
// ============================================
const Footer = () => {
  const footerColumns = [
    {
      title: 'Solutions',
      links: ['The Mudeer Platform', 'Hausbuddy App', 'White Label', 'Enterprise']
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Press', 'Blog']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference', 'Support Center', 'Community']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'GDPR']
    },
    {
      title: 'Contact',
      links: ['hello@themudeer.com', '+971 4 123 4567', 'Dubai, UAE']
    }
  ];

  return (
    <footer className="bg-[#0F1D2F] pt-20 pb-10 border-t border-[#D4AF37]/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr] gap-12 mb-[60px]">
          {/* Brand */}
          <div>
            <Link href="/page2" className="flex items-center gap-3 mb-5">
              <svg className="w-9 h-9" viewBox="0 0 44 44" fill="none">
                <rect x="6" y="8" width="32" height="6" rx="2" fill="#D4AF37"/>
                <rect x="6" y="19" width="26" height="6" rx="2" fill="#D4AF37"/>
                <rect x="6" y="30" width="20" height="6" rx="2" fill="#D4AF37"/>
              </svg>
              <div className="font-['Outfit'] font-semibold text-sm tracking-[0.2em] text-[#F8F9FA] uppercase">
                The Mudeer
              </div>
            </Link>
            <p className="text-sm text-[#9CA3AF] leading-[1.7] max-w-[280px] mb-6">
              The definitive digital ecosystem for elite property developers and asset managers.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, color: '#D4AF37' }}
                  className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#9CA3AF] hover:bg-[#D4AF37]/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerColumns.map((col, i) => (
            <div key={i}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase text-[#D4AF37] mb-6 font-['Outfit']">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-sm text-[#9CA3AF] hover:text-[#D4AF37] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="text-[13px] text-[#9CA3AF]">
            <strong className="text-[#D4AF37]">Global Footprint:</strong> Operating across Europe, Middle East, and Asia.
          </div>
          <div className="text-[13px] text-[#9CA3AF]">
            © 2025 The Mudeer. All Rights Reserved.
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F8F9FA] font-['Outfit']">
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onConsultClick={() => setIsModalOpen(true)} />
      <HeroSection onConsultClick={() => setIsModalOpen(true)} />
      <TrustedBySection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <WhyInvestSection />
      <TestimonialsSection />
      <AboutSection />
      <FinalCTASection onConsultClick={() => setIsModalOpen(true)} />
      <Footer />
    </main>
  );
}
