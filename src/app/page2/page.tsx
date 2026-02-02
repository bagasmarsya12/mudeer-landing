'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// ============================================
// HEADER COMPONENT
// ============================================
const Header = () => {
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-[20px] py-4 border-b border-[#D4AF37]/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/page2" className="flex items-center gap-3">
            <svg className="w-11 h-11" viewBox="0 0 44 44" fill="none">
              <rect x="6" y="8" width="32" height="6" rx="2" fill="#D4AF37"/>
              <rect x="6" y="19" width="26" height="6" rx="2" fill="#D4AF37"/>
              <rect x="6" y="30" width="20" height="6" rx="2" fill="#D4AF37"/>
            </svg>
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
            {['Solutions', 'White Label', 'Hausbuddy App', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-[#F8F9FA] text-sm font-normal tracking-[0.05em] relative group"
                whileHover={{ color: '#D4AF37' }}
              >
                {item}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-[#9CA3AF] text-[13px] cursor-pointer hover:text-[#D4AF37] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              EN
            </div>
            <motion.button
              whileHover={{ backgroundColor: '#D4AF37', color: '#0A1628' }}
              className="px-6 py-3 border border-[#D4AF37] bg-transparent text-[#D4AF37] font-['Outfit'] text-[13px] font-medium tracking-[0.1em] uppercase transition-all"
            >
              Client Portal Login
            </motion.button>
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
const HeroSection = () => {
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
            <span className="w-10 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37]">
              The Future of Property Management
            </span>
            <span className="w-10 h-[1px] bg-[#D4AF37]" />
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

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-8 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-3 px-10 py-[18px] bg-[#D4AF37] text-[#0A1628] font-['Outfit'] text-sm font-semibold tracking-[0.1em] uppercase overflow-hidden group"
            >
              <span className="absolute inset-0 bg-[#E8C968] -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
              <span className="relative z-10">Request Executive Demo</span>
            </motion.button>

            <motion.a
              href="#white-label"
              className="inline-flex items-center gap-2 text-[#F8F9FA] text-sm font-normal tracking-[0.05em] hover:text-[#D4AF37] hover:gap-4 transition-all"
              whileHover={{ x: 5 }}
            >
              Explore White Label Solutions
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
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
// ECOSYSTEM SECTION
// ============================================
const EcosystemSection = () => {
  return (
    <section className="py-40 bg-[#F5F3F0] relative overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(212, 175, 55, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 167, 157, 0.03) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#B8962E] mb-6 pl-12 relative before:absolute before:left-0 before:top-1/2 before:w-8 before:h-[1px] before:bg-[#D4AF37]">
              The Seamless Ecosystem
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,64px)] text-[#0A1628] mb-8 leading-[1.1]">
              Two Horizons.<br/>One Pulse.
            </h2>
            <p className="text-lg text-[#1A2B42] leading-[1.8] max-w-[520px]">
              We harmonize property management complexity. The Mudeer gives managers absolute clarity. 
              Hausbuddy gives residents absolute convenience. A synchronized heartbeat for your entire portfolio.
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[400px] h-[400px]">
              {/* Mudeer Icon */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 rounded-[20px] bg-[#D4AF37] flex items-center justify-center shadow-[0_20px_60px_rgba(212,175,55,0.3)]"
                >
                  <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
                    <rect x="6" y="10" width="28" height="5" rx="2" fill="#0A1628"/>
                    <rect x="6" y="19" width="22" height="5" rx="2" fill="#0A1628"/>
                    <rect x="6" y="28" width="16" height="5" rx="2" fill="#0A1628"/>
                  </svg>
                </motion.div>
                <span className="text-sm font-semibold tracking-[0.1em] uppercase text-[#0A1628]">The Mudeer</span>
              </div>

              {/* Connection Lines */}
              <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[3px] h-20 bg-gradient-to-b from-[#D4AF37] to-[#00A79D] rounded" />
              <div className="absolute bottom-[100px] left-1/2 -translate-x-1/2 w-[3px] h-20 bg-gradient-to-b from-[#D4AF37] to-[#00A79D] rounded" />

              {/* Building Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[180px] bg-gradient-to-b from-[#1A2B42] to-[#0A1628] rounded-t-lg flex flex-col items-center pt-5 gap-2.5">
                <div className="grid grid-cols-3 gap-2 px-4">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-5 h-6 rounded-sm"
                      animate={{
                        backgroundColor: ['rgba(212,175,55,0.2)', 'rgba(212,175,55,0.6)', 'rgba(212,175,55,0.2)']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i % 2 === 0 ? 0.5 : 0
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Hausbuddy Icon */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <span className="text-sm font-semibold tracking-[0.1em] uppercase text-[#0A1628]">Hausbuddy</span>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 rounded-[20px] bg-[#00A79D] flex items-center justify-center shadow-[0_20px_60px_rgba(0,167,157,0.3)] text-3xl"
                >
                  📱
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
// MUDEER PLATFORM SECTION
// ============================================
const MudeerSection = () => {
  const showcaseItems = [
    { title: 'The Executive Overwatch', desc: 'Financial health, occupancy metrics, and portfolio status at a glance.', type: 1 },
    { title: 'Preventative Precision', desc: 'Maintenance schedules, asset lifecycles, and digital property records.', type: 2 },
    { title: 'Revenue Clarity', desc: 'Automated rent collection, arrears tracking, and real-time cash flow in AED.', type: 3 },
    { title: 'Broadcast Command', desc: 'Building-wide announcements or individual tenant notices in seconds.', type: 4 },
    { title: 'Boardroom-Ready Data', desc: 'Professional PDF reports generated instantly for stakeholders.', type: 5 },
  ];

  return (
    <section id="solutions" className="py-40 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.05) 0%, transparent 60%),
            radial-gradient(circle at 10% 90%, rgba(0, 167, 157, 0.03) 0%, transparent 40%)
          `
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6 pl-12 relative before:absolute before:left-0 before:top-1/2 before:w-8 before:h-[1px] before:bg-[#D4AF37]">
            B2B Platform
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,72px)] mb-6">
            Executive Control. <span className="text-[#D4AF37]">Redefined.</span>
          </h2>
          <p className="text-xl text-[#CBC5CE] max-w-[600px] mx-auto">
            Forget cluttered spreadsheets. Welcome to the operating system for modern real estate.
          </p>
        </motion.div>

        {/* White Label Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          id="white-label"
          className="relative bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/20 rounded-2xl p-10 md:p-[60px] mb-24 grid lg:grid-cols-2 gap-[60px] items-center overflow-hidden"
        >
          <div className="absolute -top-1/2 -right-1/5 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div>
            <h3 className="font-['Cormorant_Garamond'] text-4xl text-[#D4AF37] mb-5">
              Your Prestige. Powered by Our Engine.
            </h3>
            <p className="text-[17px] text-[#CBC5CE] leading-[1.8]">
              Significant portfolios deserve their own digital identity. Full white-label deployment available. 
              Your logo. Your domain. Your brand experience. We remain the silent engine beneath your success.
            </p>
          </div>

          <div className="bg-[#0A1628] rounded-xl p-6 border border-[#D4AF37]/10">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
              <div className="w-10 h-10 border-2 border-dashed border-[#D4AF37] rounded-lg flex items-center justify-center text-[10px] text-[#D4AF37] text-center leading-tight">
                YOUR<br/>LOGO
              </div>
              <div className="px-4 py-2 border border-dashed border-[#D4AF37] rounded text-xs text-[#D4AF37] tracking-[0.1em]">
                YOUR BRAND HERE
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '847', label: 'Units' },
                { value: '96%', label: 'Occupancy' },
                { value: '2.4M', label: 'AED / Month' },
              ].map((metric, i) => (
                <div key={i} className="bg-[#D4AF37]/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-[#D4AF37]">{metric.value}</div>
                  <div className="text-[11px] text-[#9CA3AF] uppercase tracking-[0.05em]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Platform Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, borderColor: 'rgba(212, 175, 55, 0.3)' }}
              className="bg-[#0F1D2F] rounded-2xl overflow-hidden border border-[#D4AF37]/10 transition-all duration-400 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
            >
              <div className="aspect-[4/3] bg-[#0A1628] p-4 relative">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                  <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className={`h-2 rounded ${item.type === 1 || item.type === 3 || item.type === 5 ? 'bg-[#D4AF37] w-3/5' : 'bg-[#D4AF37]/20 w-2/5'}`} />
                  <div className="h-2 bg-[#D4AF37]/20 rounded w-4/5" />
                  {item.type === 1 || item.type === 3 ? (
                    <div className="grid grid-cols-3 gap-1.5 mt-2">
                      {[...Array(6)].map((_, j) => (
                        <div key={j} className={`aspect-square rounded ${j === 0 || j === 4 ? 'bg-[#D4AF37]/30' : 'bg-[#D4AF37]/10'}`} />
                      ))}
                    </div>
                  ) : (
                    <>
                      <div className={`h-2 rounded ${item.type === 2 || item.type === 4 ? 'bg-[#D4AF37] w-3/5' : 'bg-[#D4AF37]/20 w-2/5'}`} />
                      <div className="h-2 bg-[#D4AF37]/20 rounded w-2/5" />
                    </>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-base text-[#D4AF37] mb-2 font-['Outfit'] font-semibold">{item.title}</h4>
                <p className="text-[13px] text-[#9CA3AF] leading-[1.6]">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// CONNECTION SECTION
// ============================================
const ConnectionSection = () => {
  return (
    <section className="py-[120px] bg-gradient-to-b from-[#0A1628] via-[#0F1D2F] to-[#F5F3F0] text-center relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
        <div className="relative h-[200px] flex items-center justify-center">
          <div className="w-[300px] h-1 bg-gradient-to-r from-[#D4AF37] to-[#00A79D] rounded relative">
            <motion.div
              className="absolute w-3 h-3 rounded-full top-1/2 -translate-y-1/2"
              animate={{
                left: ['0%', 'calc(100% - 12px)'],
                backgroundColor: ['#D4AF37', '#00A79D'],
                boxShadow: ['0 0 20px #D4AF37', '0 0 20px #00A79D']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="font-['Cormorant_Garamond'] text-[32px] text-[#0A1628]">
            Instant Synchronization. <span className="text-[#D4AF37]">Zero Latency.</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

// ============================================
// HAUSBUDDY SECTION
// ============================================
const HausbuddySection = () => {
  const phones = [
    {
      title: 'Your Home, One Tap Away',
      desc: 'Rent status, quick actions, building updates.',
      greeting: 'Good Morning, Ahmed',
      cardLabel: 'Next Rent Due',
      cardValue: '8,500 AED',
      actions: [
        { icon: '💳', label: 'Pay Now' },
        { icon: '🔧', label: 'Request' }
      ]
    },
    {
      title: 'Frictionless Finance',
      desc: 'Secure payments via Apple Pay or card.',
      greeting: 'Payments',
      cardLabel: 'Total Balance',
      cardValue: '0 AED',
      actions: [
        { icon: '📄', label: 'History' },
        { icon: '⚡', label: 'Auto-Pay' }
      ]
    },
    {
      title: 'The Lifestyle Concierge',
      desc: 'Book facilities and services instantly.',
      greeting: 'Amenities',
      cardLabel: null,
      cardValue: null,
      actions: [
        { icon: '🏊', label: 'Pool' },
        { icon: '💪', label: 'Gym' },
        { icon: '🎾', label: 'Tennis' },
        { icon: '🧖', label: 'Spa' }
      ]
    }
  ];

  return (
    <section id="hausbuddy" className="py-40 bg-[#F5F3F0] relative">
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 80% 20%, rgba(0, 167, 157, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)
          `
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px] relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#00A79D] mb-6 pl-12 relative before:absolute before:left-0 before:top-1/2 before:w-8 before:h-[1px] before:bg-[#00A79D]">
            Tenant Mobile App
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(40px,5vw,72px)] text-[#0A1628] mb-6">
            Elevate the <span className="text-[#00A79D]">Resident Experience.</span>
          </h2>
          <p className="text-xl text-[#1A2B42] max-w-[600px] mx-auto">
            Satisfied tenants renew leases. Hausbuddy transforms a rented apartment into a connected home.
          </p>
        </motion.div>

        {/* Phone Showcase */}
        <div className="flex justify-center gap-8 flex-wrap">
          {phones.map((phone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center gap-6"
            >
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-[220px] h-[440px] bg-[#0A1628] rounded-[36px] p-3 shadow-[0_40px_80px_rgba(10,22,40,0.3)]"
              >
                <div className="w-full h-full bg-white rounded-[28px] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#0A1628] rounded-xl z-10" />

                  <div className="pt-10 px-4 pb-4 h-full flex flex-col gap-3">
                    {/* App Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] text-[#0A1628] font-semibold">{phone.greeting}</span>
                      <div className="w-7 h-7 bg-[#00A79D] rounded-full" />
                    </div>

                    {/* Card */}
                    {phone.cardLabel && (
                      <div className="bg-gradient-to-br from-[#0A1628] to-[#1A2B42] rounded-xl p-4 text-white">
                        <div className="text-[9px] opacity-70 uppercase tracking-[0.05em]">{phone.cardLabel}</div>
                        <div className="text-xl font-semibold text-[#D4AF37]">{phone.cardValue}</div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className={`grid gap-2 ${phone.actions.length > 2 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                      {phone.actions.map((action, j) => (
                        <div key={j} className="bg-[#F5F3F0] rounded-lg p-3 text-center">
                          <div className="text-base mb-1">{action.icon}</div>
                          <div className="text-[9px] text-[#1A2B42] font-medium">{action.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="text-center">
                <h4 className="text-[15px] text-[#0A1628] font-['Outfit'] font-semibold mb-1">{phone.title}</h4>
                <p className="text-[13px] text-[#1A2B42]">{phone.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TRUST SECTION
// ============================================
const TrustSection = () => {
  const trustItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-8 h-8 stroke-[#D4AF37]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: 'Bank-Grade Security',
      desc: 'Data sovereignty compliant. Enterprise-class encryption protects every transaction.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-8 h-8 stroke-[#D4AF37]">
          <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.781 0-4.781 8 0 8 5.606 0 7.644-8 12.74-8z"/>
        </svg>
      ),
      title: 'Infinite Scalability',
      desc: 'From 5 towers to 500. Our infrastructure expands with your ambition.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-8 h-8 stroke-[#D4AF37]">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      title: 'German Engineering',
      desc: 'Built on proven European technology. Adapted for Gulf market dynamics.'
    }
  ];

  return (
    <section className="py-40 bg-[#0A1628] relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6 pl-12 relative before:absolute before:left-0 before:top-1/2 before:w-8 before:h-[1px] before:bg-[#D4AF37]">
            Why The Mudeer
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(36px,4vw,56px)]">
            Engineered for High-Volume Portfolios.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, borderColor: 'rgba(212, 175, 55, 0.3)' }}
              className="text-center p-12 bg-[#0F1D2F] rounded-2xl border border-[#D4AF37]/10 transition-all"
            >
              <div className="w-[72px] h-[72px] mx-auto mb-6 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-[22px] text-[#D4AF37] mb-3 font-['Outfit'] font-semibold">{item.title}</h3>
              <p className="text-[15px] text-[#9CA3AF] leading-[1.7]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// FINAL CTA SECTION
// ============================================
const FinalCTASection = () => {
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
            Let us discuss a tailored strategy for your properties.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-3 px-14 py-[22px] bg-[#D4AF37] text-[#0A1628] font-['Outfit'] text-base font-semibold tracking-[0.1em] uppercase overflow-hidden group"
          >
            <span className="absolute inset-0 bg-[#E8C968] -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
            <span className="relative z-10">Schedule a Consultation</span>
          </motion.button>
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
      links: ['About', 'Careers', 'Press']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Settings']
    },
    {
      title: 'Contact',
      links: ['hello@themudeer.com', 'Dubai, UAE']
    }
  ];

  return (
    <footer className="bg-[#0F1D2F] pt-20 pb-10 border-t border-[#D4AF37]/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12 mb-[60px]">
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
            <p className="text-sm text-[#9CA3AF] leading-[1.7] max-w-[280px]">
              The definitive digital ecosystem for elite property developers and asset managers.
            </p>
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
  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F8F9FA] font-['Outfit']">
      <Header />
      <HeroSection />
      <EcosystemSection />
      <MudeerSection />
      <ConnectionSection />
      <HausbuddySection />
      <TrustSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
