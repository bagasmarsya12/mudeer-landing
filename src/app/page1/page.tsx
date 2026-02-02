'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Building2,
  Smartphone,
  Shield,
  Infinity as InfinityIcon,
  Settings,
  ChevronRight,
  Menu,
  X,
  CreditCard,
  CalendarDays,
  Wrench,
  ArrowRight,
  Play,
  MapPin,
} from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';

// ============================================
// NAVBAR COMPONENT
// ============================================
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const languages = ['EN', 'AR', 'ID'] as const;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cycleLang = () => {
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const navLinks = [
    { name: t.nav.solutions, href: '#solutions' },
    { name: t.nav.whiteLabel, href: '#whitelabel' },
    { name: t.nav.hausbuddyApp, href: '#hausbuddy' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 rounded-professional bg-gradient-to-br from-muted-gold to-yellow-600 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-deep-navy" />
            </div>
            <span className="font-serif text-xl font-semibold text-white">
              The <span className="text-muted-gold">Mudeer</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-muted-gold transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={cycleLang}
              className="flex items-center space-x-2 text-gray-300 hover:text-muted-gold transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{language}</span>
            </motion.button>

            {/* Client Portal Login */}
            <motion.button
              whileHover={{ scale: 1.02, borderColor: '#F5E6A3' }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 border-2 border-muted-gold text-muted-gold rounded-professional font-medium text-sm hover:bg-muted-gold/10 transition-all duration-200"
            >
              {t.nav.clientPortal}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-muted-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-700 flex items-center justify-between">
              <button
                onClick={cycleLang}
                className="flex items-center space-x-2 text-gray-300"
              >
                <Globe className="w-5 h-5" />
                <span>{language}</span>
              </button>
              <button className="px-4 py-2 border-2 border-muted-gold text-muted-gold rounded-professional text-sm">
                {t.nav.clientPortal}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

// ============================================
// HERO SECTION
// ============================================
const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://placehold.co/1920x1080/0A1628/1a2a3a?text=)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 via-deep-navy/60 to-deep-navy" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-muted-gold/10 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-20 w-32 h-32 rounded-full bg-electric-teal/10 blur-xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-muted-gold/30 bg-muted-gold/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-muted-gold animate-pulse" />
            <span className="text-muted-gold text-sm font-medium">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">{t.hero.headline1}</span>
            <br />
            <span className="gradient-text-gold">{t.hero.headline2}</span>
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10"
          >
            {t.hero.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-muted-gold to-yellow-600 text-deep-navy rounded-professional font-semibold text-lg flex items-center space-x-2 shadow-lg"
            >
              <Play className="w-5 h-5" />
              <span>{t.hero.cta1}</span>
            </motion.button>
            <motion.a
              href="#whitelabel"
              whileHover={{ x: 5 }}
              className="flex items-center space-x-2 text-gray-300 hover:text-muted-gold transition-colors text-lg font-medium"
            >
              <span>{t.hero.cta2}</span>
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-gold/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 rounded-full bg-muted-gold"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// ECOSYSTEM SECTION (INFINITY LOOP)
// ============================================
const EcosystemSection = () => {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="py-32 relative overflow-hidden bg-deep-navy">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">{t.ecosystem.title1}</span>{' '}
            <span className="gradient-text-gold">{t.ecosystem.title2}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.ecosystem.subtitle}
          </p>
        </motion.div>

        {/* Infinity Loop Visualization */}
        <div className="relative flex items-center justify-center py-20">
          <svg
            viewBox="0 0 400 150"
            className="w-full max-w-3xl h-auto"
            fill="none"
          >
            <path
              d="M100,75 C100,30 150,30 200,75 C250,120 300,120 300,75 C300,30 250,30 200,75 C150,120 100,120 100,75"
              stroke="rgba(212, 175, 55, 0.2)"
              strokeWidth="3"
              fill="none"
            />
            <motion.path
              d="M100,75 C100,30 150,30 200,75 C250,120 300,120 300,75 C300,30 250,30 200,75 C150,120 100,120 100,75"
              stroke="url(#infinityGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray="600"
              initial={{ strokeDashoffset: 600 }}
              whileInView={{ strokeDashoffset: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <defs>
              <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#00A79D" />
              </linearGradient>
            </defs>
          </svg>

          {/* Left Icon - Building/Dashboard (Mudeer) */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute left-[15%] md:left-[20%]"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-muted-gold to-yellow-600 flex items-center justify-center shadow-lg shadow-muted-gold/30"
            >
              <Building2 className="w-10 h-10 md:w-12 md:h-12 text-deep-navy" />
            </motion.div>
            <p className="mt-4 text-center text-muted-gold font-semibold">{t.ecosystem.mudeer}</p>
            <p className="text-center text-gray-500 text-sm">{t.ecosystem.mudeerSub}</p>
          </motion.div>

          {/* Right Icon - Smartphone (Hausbuddy) */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute right-[15%] md:right-[20%]"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-electric-teal to-teal-400 flex items-center justify-center shadow-lg shadow-electric-teal/30"
            >
              <Smartphone className="w-10 h-10 md:w-12 md:h-12 text-deep-navy" />
            </motion.div>
            <p className="mt-4 text-center text-electric-teal font-semibold">{t.ecosystem.hausbuddy}</p>
            <p className="text-center text-gray-500 text-sm">{t.ecosystem.hausbuddySub}</p>
          </motion.div>

          {/* Floating Data Dots */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-muted-gold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, 100, 0, -100, 0],
                y: [0, -30, 0, -30, 0],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Description Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border border-muted-gold/20 bg-gradient-to-br from-muted-gold/5 to-transparent"
          >
            <h3 className="text-2xl font-serif font-bold text-muted-gold mb-4">
              {t.ecosystem.forManagers}
            </h3>
            <p className="text-gray-400">
              {t.ecosystem.managersDesc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border border-electric-teal/20 bg-gradient-to-br from-electric-teal/5 to-transparent"
          >
            <h3 className="text-2xl font-serif font-bold text-electric-teal mb-4">
              {t.ecosystem.forResidents}
            </h3>
            <p className="text-gray-400">
              {t.ecosystem.residentsDesc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// MUDEER B2B SECTION (WHITE LABEL)
// ============================================
const MudeerSection = () => {
  const { t } = useLanguage();

  const metrics = [
    { value: '847', label: t.mudeer.units, suffix: '' },
    { value: '96', label: t.mudeer.occupancy, suffix: '%' },
    { value: '2.4M', label: t.mudeer.revenue, suffix: ' AED' },
  ];

  return (
    <section id="whitelabel" className="py-32 bg-deep-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(circle at 100% 50%, rgba(212, 175, 55, 0.5) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-muted-gold text-sm font-semibold tracking-wider uppercase">
            {t.mudeer.badge}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6 text-white">
            {t.mudeer.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.mudeer.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard Mockup with White Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
              {/* Browser Chrome */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="flex-1 ml-4 h-6 bg-gray-700 rounded-md" />
              </div>

              {/* Dashboard Content */}
              <div className="bg-gray-900 rounded-xl p-6">
                {/* White Label Logo Area */}
                <motion.div
                  animate={{ borderColor: ['#D4AF37', '#F5E6A3', '#D4AF37'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-6 p-4 border-2 border-dashed border-muted-gold rounded-xl flex items-center justify-center bg-muted-gold/5"
                >
                  <span className="text-muted-gold font-serif text-lg">
                    {t.mudeer.brandPlaceholder}
                  </span>
                </motion.div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {metrics.map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * i }}
                      className="bg-gray-800 rounded-lg p-4 text-center"
                    >
                      <div className="text-2xl font-bold text-muted-gold">
                        {metric.value}
                        <span className="text-sm">{metric.suffix}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Mini Chart Placeholder */}
                <div className="h-24 bg-gray-800 rounded-lg flex items-end justify-center space-x-2 p-4">
                  {[40, 65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, duration: 0.5 }}
                      className="w-6 bg-gradient-to-t from-muted-gold to-yellow-500 rounded-t"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-muted-gold text-deep-navy px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              {t.mudeer.whitelabelBadge}
            </motion.div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {t.mudeer.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-muted-gold/20 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-5 h-5 text-muted-gold" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 px-8 py-4 bg-muted-gold text-deep-navy rounded-professional font-semibold flex items-center space-x-2"
            >
              <span>{t.mudeer.learnMore}</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// CONNECTION ANIMATION (TRANSITION)
// ============================================
const ConnectionAnimation = () => {
  return (
    <section className="relative h-64 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-deep-navy/50 to-warm-sand" />

      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#00A79D" />
          </linearGradient>
        </defs>
        <motion.path
          d="M50%,0 Q50%,50% 50%,100%"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </svg>

      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            animate={{
              top: ['0%', '100%'],
              backgroundColor: ['#D4AF37', '#00A79D'],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: 'linear',
            }}
          />
        ))}
      </div>
    </section>
  );
};

// ============================================
// HAUSBUDDY SECTION (TENANT APP)
// ============================================
const HausbuddySection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: CreditCard,
      title: t.hausbuddy.payments,
      desc: t.hausbuddy.paymentsDesc,
    },
    {
      icon: CalendarDays,
      title: t.hausbuddy.amenities,
      desc: t.hausbuddy.amenitiesDesc,
    },
    {
      icon: Wrench,
      title: t.hausbuddy.serviceRequests,
      desc: t.hausbuddy.serviceRequestsDesc,
    },
  ];

  return (
    <section id="hausbuddy" className="py-32 bg-warm-sand relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full opacity-10">
        <div
          className="w-full h-full"
          style={{
            background: 'radial-gradient(circle at 0% 50%, rgba(0, 167, 157, 0.5) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-electric-teal text-sm font-semibold tracking-wider uppercase">
            {t.hausbuddy.badge}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6 text-deep-navy">
            {t.hausbuddy.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.hausbuddy.subtitle}
          </p>
        </motion.div>

        {/* Phone Mockups */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              className={`relative ${i === 1 ? 'lg:-mt-8 z-10' : ''}`}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="phone-mockup w-64 md:w-72"
              >
                <div className="phone-screen aspect-[9/16] relative">
                  <div className="h-8 bg-white flex items-center justify-between px-4">
                    <span className="text-xs text-gray-500">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-gray-400 rounded-sm" />
                    </div>
                  </div>

                  <div className="bg-electric-teal p-4">
                    <div className="flex items-center space-x-2">
                      <feature.icon className="w-6 h-6 text-white" />
                      <span className="text-white font-semibold">{feature.title}</span>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-electric-teal/10 flex items-center justify-center">
                          <div className="w-5 h-5 rounded bg-electric-teal/30" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="h-3 bg-gray-200 rounded w-3/4" />
                          <div className="h-2 bg-gray-100 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-electric-teal text-white text-center py-3 rounded-xl font-semibold text-sm">
                      {feature.desc}
                    </div>
                  </div>
                </div>
              </motion.div>

              <p className="text-center mt-4 text-deep-navy font-semibold">{feature.title}</p>
            </motion.div>
          ))}
        </div>

        {/* App Store Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center space-x-4 mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-deep-navy text-white rounded-xl flex items-center space-x-2"
          >
            <span className="text-2xl">🍎</span>
            <div className="text-left">
              <div className="text-xs text-gray-400">{t.hausbuddy.downloadOn}</div>
              <div className="font-semibold">{t.hausbuddy.appStore}</div>
            </div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-deep-navy text-white rounded-xl flex items-center space-x-2"
          >
            <span className="text-2xl">▶️</span>
            <div className="text-left">
              <div className="text-xs text-gray-400">{t.hausbuddy.getItOn}</div>
              <div className="font-semibold">{t.hausbuddy.googlePlay}</div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// TRUST SECTION (SOCIAL PROOF)
// ============================================
const TrustSection = () => {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: Shield,
      title: t.trust.security,
      desc: t.trust.securityDesc,
    },
    {
      icon: InfinityIcon,
      title: t.trust.scalability,
      desc: t.trust.scalabilityDesc,
    },
    {
      icon: Settings,
      title: t.trust.engineering,
      desc: t.trust.engineeringDesc,
    },
  ];

  return (
    <section className="py-32 bg-deep-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            {t.trust.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * i, duration: 0.6 }}
              className="text-center p-8 rounded-2xl border border-gray-800 hover:border-muted-gold/50 transition-colors bg-gradient-to-b from-gray-900/50 to-transparent"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-muted-gold to-yellow-600 flex items-center justify-center"
              >
                <item.icon className="w-8 h-8 text-deep-navy" />
              </motion.div>
              <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// FOOTER SECTION
// ============================================
const Footer = () => {
  const { t } = useLanguage();

  const footerSections = [
    {
      title: t.footer.platform,
      links: t.footer.platformLinks,
    },
    {
      title: t.footer.company,
      links: t.footer.companyLinks,
    },
    {
      title: t.footer.legal,
      links: t.footer.legalLinks,
    },
  ];

  return (
    <footer id="contact" className="bg-deep-navy border-t border-gray-800">
      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
              {t.footer.ctaTitle}
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              {t.footer.ctaSubtitle}
            </p>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-gradient-to-r from-muted-gold to-yellow-600 text-deep-navy rounded-professional font-bold text-lg shadow-lg"
            >
              {t.footer.ctaButton}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-professional bg-gradient-to-br from-muted-gold to-yellow-600 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-deep-navy" />
                </div>
                <span className="font-serif text-xl font-semibold text-white">
                  The <span className="text-muted-gold">Mudeer</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                {t.footer.tagline}
              </p>
            </div>

            {/* Links */}
            {footerSections.map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-500 hover:text-muted-gold transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Trust Signal & Copyright */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-500 mb-4 md:mb-0">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                {t.footer.globalFootprint}
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================
function LandingPageContent() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <EcosystemSection />
      <MudeerSection />
      <ConnectionAnimation />
      <HausbuddySection />
      <TrustSection />
      <Footer />
    </main>
  );
}

export default function LandingPage() {
  return (
    <LanguageProvider>
      <LandingPageContent />
    </LanguageProvider>
  );
}
