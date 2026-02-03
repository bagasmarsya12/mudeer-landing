'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// ============================================
// HEADER
// ============================================
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/page4" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-900 to-slate-700 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg width="20" height="20" viewBox="0 0 44 44" fill="none">
                <rect x="6" y="10" width="28" height="5" rx="2" fill="white"/>
                <rect x="6" y="19" width="22" height="5" rx="2" fill="white"/>
                <rect x="6" y="28" width="16" height="5" rx="2" fill="white"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg text-slate-900 tracking-tight">The Mudeer</span>
              <span className="text-[10px] text-slate-400 tracking-wide uppercase">Property Intelligence</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { label: 'Platform', href: '#platform' },
              { label: 'Solutions', href: '#solutions' },
              { label: 'Hausbuddy', href: '#hausbuddy' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'Resources', href: '#resources' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="hidden sm:block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Sign in
            </a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-lg transition-colors shadow-lg shadow-slate-900/10"
            >
              Get Started
            </motion.button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`w-5 h-0.5 bg-slate-900 transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-5 h-0.5 bg-slate-900 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`w-5 h-0.5 bg-slate-900 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-slate-100"
            >
              <nav className="flex flex-col pt-4 gap-1">
                {['Platform', 'Solutions', 'Hausbuddy', 'Pricing', 'Resources'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

// ============================================
// HERO SECTION
// ============================================
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-blue-50 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-l from-indigo-50 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-r from-slate-100 to-transparent rounded-full blur-3xl opacity-50" />
        
        {/* Grid */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-8"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-emerald-600">Live</span>
              </span>
              <span className="w-px h-4 bg-slate-200" />
              <span className="text-sm text-slate-600">Trusted by 500+ property managers</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight"
            >
              Property management,{' '}
              <span className="relative">
                <span className="relative z-10">reimagined</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-2 left-0 h-3 bg-blue-200/60 -z-0"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed"
            >
              The complete platform for modern real estate. Streamline operations, 
              delight tenants, and scale your portfolio with confidence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-base transition-all shadow-xl shadow-slate-900/20"
              >
                Start free trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-xl text-base border border-slate-200 transition-all shadow-lg shadow-slate-900/5 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch demo
              </motion.button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {['A', 'B', 'C', 'D', 'E'].map((letter, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center text-xs font-semibold text-slate-600"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-500 mt-1">4.9/5 from 500+ reviews</p>
              </div>
            </motion.div>
          </div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200 overflow-hidden">
              {/* Window Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-white rounded-md text-xs text-slate-400 border border-slate-200">
                    app.themudeer.com
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 bg-slate-50">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-slate-400">Welcome back</p>
                    <p className="text-sm font-semibold text-slate-900">Sarah Johnson</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-white rounded-lg border border-slate-200 flex items-center justify-center">
                      <span className="text-sm">🔔</span>
                    </div>
                    <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white text-xs font-semibold">
                      SJ
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Total Revenue', value: '$2.4M', trend: '+12%', color: 'emerald' },
                    { label: 'Occupancy', value: '96.4%', trend: '+3.2%', color: 'blue' },
                    { label: 'Properties', value: '847', trend: '+24', color: 'violet' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-xl p-4 border border-slate-100">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-1">{stat.label}</p>
                      <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                      <span className={`text-[10px] font-medium text-${stat.color}-600`}>{stat.trend}</span>
                    </div>
                  ))}
                </div>

                {/* Chart Placeholder */}
                <div className="bg-white rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-medium text-slate-900">Revenue Overview</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-slate-100 rounded text-[10px] text-slate-600">Monthly</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.8 + i * 0.05 }}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-slate-100 w-48"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-emerald-600">✓</span>
                </div>
                <p className="text-xs font-medium text-slate-900">Payment received</p>
              </div>
              <p className="text-lg font-bold text-slate-900">$8,500.00</p>
              <p className="text-[10px] text-slate-400">Unit 304 • Just now</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// LOGOS SECTION
// ============================================
const LogosSection = () => {
  const logos = ['EMAAR', 'ALDAR', 'NAKHEEL', 'DAMAC', 'MERAAS', 'SOBHA', 'AZIZI', 'DEYAAR'];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="text-center text-sm text-slate-400 mb-8">Trusted by leading developers worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {logos.map((logo) => (
            <span key={logo} className="text-xl font-bold text-slate-300 hover:text-slate-400 transition-colors">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PLATFORM SECTION
// ============================================
const PlatformSection = () => {
  const features = [
    {
      icon: '📊',
      title: 'Real-time Dashboard',
      desc: 'Monitor your entire portfolio at a glance. Track occupancy, revenue, and key metrics across all properties.',
      color: 'blue'
    },
    {
      icon: '⚡',
      title: 'Smart Automation',
      desc: 'Automate rent collection, lease renewals, and maintenance scheduling. Save 40+ hours per week.',
      color: 'amber'
    },
    {
      icon: '💰',
      title: 'Financial Management',
      desc: 'Multi-currency invoicing, automated reminders, and real-time cash flow tracking.',
      color: 'emerald'
    },
    {
      icon: '📈',
      title: 'Advanced Analytics',
      desc: 'AI-powered insights and predictive analytics to optimize your portfolio performance.',
      color: 'violet'
    },
    {
      icon: '🔗',
      title: 'Seamless Integrations',
      desc: 'Connect with your existing tools. SAP, Oracle, QuickBooks, and 50+ integrations.',
      color: 'rose'
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      desc: 'SOC2 Type II certified. End-to-end encryption and role-based access control.',
      color: 'slate'
    }
  ];

  return (
    <section id="platform" className="py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-6">
            Platform
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Everything you need to manage
            <br />properties at scale
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A unified platform that brings together all aspects of property management 
            into one beautiful, intuitive experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
            >
              <div className={`w-14 h-14 bg-${feature.color}-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// HAUSBUDDY SECTION
// ============================================
const HausbuddySection = () => {
  const features = [
    { icon: '💳', title: 'Easy Payments', desc: 'Pay rent instantly with Apple Pay, cards, or bank transfer' },
    { icon: '🔧', title: 'Quick Requests', desc: 'Submit and track maintenance requests in real-time' },
    { icon: '💬', title: 'Direct Chat', desc: 'Message your property manager instantly' },
    { icon: '🏊', title: 'Book Amenities', desc: 'Reserve facilities with just a tap' },
    { icon: '📄', title: 'Documents', desc: 'Access all your important documents anytime' },
    { icon: '📢', title: 'Updates', desc: 'Stay informed with building announcements' }
  ];

  return (
    <section id="hausbuddy" className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-full mb-6">
              Hausbuddy App
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Delight your tenants
              <br />with a modern experience
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              A beautiful mobile app that gives residents everything they need. 
              Increase satisfaction, reduce support calls, and improve retention.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-900/5 transition-all"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-0.5">{feature.title}</h4>
                    <p className="text-xs text-slate-500">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 pt-10 border-t border-slate-100">
              {[
                { value: '4.8★', label: 'App Rating' },
                { value: '60%', label: 'Less Support' },
                { value: '23%', label: 'Better Retention' }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone */}
              <div className="w-[300px] h-[620px] bg-slate-900 rounded-[55px] p-4 shadow-2xl shadow-slate-900/30">
                <div className="w-full h-full bg-white rounded-[42px] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-900 rounded-b-3xl z-10" />

                  {/* Screen */}
                  <div className="pt-10 pb-6 px-5 h-full bg-gradient-to-b from-slate-50 to-white flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-[10px] text-slate-400">Good morning</p>
                        <p className="text-sm font-semibold text-slate-900">Sarah Johnson</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-full" />
                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-5 mb-5 text-white">
                      <p className="text-[10px] text-slate-300 mb-1">Next payment due</p>
                      <p className="text-2xl font-bold mb-3">$2,450.00</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-slate-400">Feb 1, 2025</span>
                        <button className="px-4 py-1.5 bg-white text-slate-900 text-[10px] font-semibold rounded-full">
                          Pay now
                        </button>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-3">Quick actions</p>
                    <div className="grid grid-cols-4 gap-2 mb-5">
                      {['🔧', '📄', '🏊', '💬'].map((icon, i) => (
                        <div key={i} className="aspect-square bg-white rounded-xl border border-slate-100 flex items-center justify-center text-lg shadow-sm">
                          {icon}
                        </div>
                      ))}
                    </div>

                    {/* Recent */}
                    <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-3">Recent activity</p>
                    <div className="flex-1 bg-white rounded-xl border border-slate-100 p-3 space-y-3">
                      {[
                        { text: 'Payment confirmed', time: 'Just now', icon: '✓' },
                        { text: 'Maintenance complete', time: '2h ago', icon: '🔧' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-sm">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-xs font-medium text-slate-900">{item.text}</p>
                            <p className="text-[10px] text-slate-400">{item.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-8 top-24 bg-white rounded-xl p-3 shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">✓</div>
                  <div>
                    <p className="text-[10px] font-medium text-slate-900">Rent Paid</p>
                    <p className="text-[9px] text-slate-400">Just now</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -left-8 bottom-32 bg-white rounded-xl p-3 shadow-xl border border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">🔧</div>
                  <div>
                    <p className="text-[10px] font-medium text-slate-900">Request resolved</p>
                    <p className="text-[9px] text-slate-400">15 min ago</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SOLUTIONS SECTION
// ============================================
const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Property Developers',
      desc: 'Manage multiple projects and units with ease. From pre-sales to handover and beyond.',
      icon: '🏗️',
      features: ['Project tracking', 'Unit inventory', 'Sales management', 'Handover workflows']
    },
    {
      title: 'Property Managers',
      desc: 'Streamline operations across your entire portfolio. One platform for everything.',
      icon: '🏢',
      features: ['Tenant management', 'Lease tracking', 'Maintenance', 'Financial reporting']
    },
    {
      title: 'Real Estate Investors',
      desc: 'Get complete visibility into your investments. Track performance and maximize returns.',
      icon: '📈',
      features: ['Portfolio analytics', 'ROI tracking', 'Cash flow management', 'Market insights']
    }
  ];

  return (
    <section id="solutions" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-600 text-sm font-medium rounded-full mb-6">
            Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Built for every role in
            <br />real estate
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Whether you’re a developer, property manager, or investor, 
            The Mudeer adapts to your specific needs.
          </p>
        </motion.div>

        {/* Solutions */}
        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-200 hover:shadow-xl hover:shadow-slate-900/5 transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-100 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">{solution.desc}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PRICING SECTION
// ============================================
const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      desc: 'Perfect for small portfolios',
      features: ['Up to 50 units', 'Basic analytics', 'Email support', 'Hausbuddy app'],
      cta: 'Start free trial'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      desc: 'For growing property managers',
      features: ['Up to 500 units', 'Advanced analytics', 'Priority support', 'API access', 'White-label option', 'Custom workflows'],
      cta: 'Start free trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      desc: 'For large-scale operations',
      features: ['Unlimited units', 'Dedicated success manager', '24/7 phone support', 'Custom integrations', 'On-premise option', 'SLA guarantee'],
      cta: 'Contact sales'
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-violet-50 text-violet-600 text-sm font-medium rounded-full mb-6">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl transition-all ${
                plan.popular
                  ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/30 scale-105'
                  : 'bg-white border border-slate-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-slate-300' : 'text-slate-500'}`}>
                {plan.desc}
              </p>
              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? 'text-slate-400' : 'text-slate-500'}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className={`flex items-center gap-3 text-sm ${plan.popular ? 'text-slate-300' : 'text-slate-600'}`}>
                    <svg className={`w-5 h-5 ${plan.popular ? 'text-blue-400' : 'text-emerald-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
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
      quote: "The Mudeer has completely transformed how we manage our portfolio. The efficiency gains have been remarkable.",
      name: 'Ahmed Al-Rashid',
      role: 'CEO, Gulf Properties',
      avatar: 'AR'
    },
    {
      quote: "Our tenants love the Hausbuddy app. Support tickets dropped by 60% in the first month.",
      name: 'Sarah Mitchell',
      role: 'Operations Director, Prime Estates',
      avatar: 'SM'
    },
    {
      quote: "Finally, a platform that understands the needs of property managers. The automation saves us hours every day.",
      name: 'James Chen',
      role: 'Managing Partner, Skyline Realty',
      avatar: 'JC'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-50 text-amber-600 text-sm font-medium rounded-full mb-6">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Loved by property managers
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-slate-50 rounded-2xl hover:shadow-lg hover:shadow-slate-900/5 transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center text-white font-semibold">
                  {item.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
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
// CTA SECTION
// ============================================
const CTASection = () => {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to transform your
            <br />property management?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Join 500+ property managers who’ve already made the switch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl text-lg shadow-xl shadow-white/10"
            >
              Start free trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl text-lg border border-white/20 backdrop-blur"
            >
              Schedule a demo
            </motion.button>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            No credit card required • 14-day free trial • Cancel anytime
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
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/page4" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 44 44" fill="none">
                  <rect x="6" y="10" width="28" height="5" rx="2" fill="white"/>
                  <rect x="6" y="19" width="22" height="5" rx="2" fill="white"/>
                  <rect x="6" y="28" width="16" height="5" rx="2" fill="white"/>
                </svg>
              </div>
              <span className="font-semibold text-lg text-slate-900">The Mudeer</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              The complete platform for modern property management. 
              Trusted by 500+ property managers worldwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Integrations', 'API', 'Changelog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Hausbuddy</h4>
            <ul className="space-y-3">
              {['Overview', 'iOS App', 'Android App', 'For Tenants'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              {['Privacy', 'Terms', 'Security', 'GDPR'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© 2025 The Mudeer. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <a key={social} href="#" className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// MAIN PAGE
// ============================================
export default function Page4() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-['Outfit']">
      <Header />
      <HeroSection />
      <LogosSection />
      <PlatformSection />
      <HausbuddySection />
      <SolutionsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
