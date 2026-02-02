'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CreditCard,
  Globe,
  MapPin,
  Menu,
  Shield,
  Smartphone,
  Sparkles,
  X,
  Wrench,
} from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/lib/LanguageContext';

const palette = {
  base: 'bg-[#070B1F]',
  ink: '#070B1F',
  accentMetal: '#E6C08E', // rose-gold / champagne
  accentJade: '#2DD4BF',
  accentRoyal: '#7C3AED',
  sand: '#F6F3ED',
};

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#070B1F] text-white">
      {/* subtle texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.25]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 10%, rgba(124,58,237,0.20), transparent 40%), radial-gradient(circle at 80% 30%, rgba(45,212,191,0.16), transparent 45%), radial-gradient(circle at 40% 90%, rgba(230,192,142,0.12), transparent 45%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(circle at 50% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)',
          }}
        />
      </div>

      <div className="relative">{children}</div>
    </div>
  );
};

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
    {children}
  </span>
);

const SectionTitle = ({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) => (
  <div className="max-w-3xl">
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
      <Sparkles className="h-4 w-4 text-[#E6C08E]" />
      <span>{eyebrow}</span>
    </div>
    <h2 className="mt-5 text-3xl md:text-4xl font-serif font-semibold tracking-tight text-white">
      {title}
    </h2>
    <p className="mt-4 text-base md:text-lg text-white/70 leading-relaxed">{desc}</p>
  </div>
);

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const languages = ['EN', 'AR', 'ID'] as const;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cycleLang = () => {
    const idx = languages.indexOf(language);
    setLanguage(languages[(idx + 1) % languages.length]);
  };

  const links = useMemo(
    () => [
      { label: t.nav.solutions, href: '#ecosystem' },
      { label: t.nav.whiteLabel, href: '#platform' },
      { label: t.nav.hausbuddyApp, href: '#hausbuddy' },
      { label: t.nav.contact, href: '#contact' },
    ],
    [t]
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070B1F]/70 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <Link href="/page5" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#E6C08E] to-[#B98B5E] flex items-center justify-center">
              <Building2 className="h-6 w-6 text-[#070B1F]" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-xl font-semibold text-white">
                The <span className="text-[#E6C08E]">Mudeer</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                premium operations
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white/70 hover:text-[#E6C08E] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={cycleLang}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>{language}</span>
            </button>
            <button className="rounded-xl border border-[#E6C08E]/40 bg-[#E6C08E]/10 px-5 py-2 text-sm font-semibold text-[#E6C08E] hover:bg-[#E6C08E]/15 transition-colors">
              {t.nav.clientPortal}
            </button>
            <button className="rounded-xl bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-black/25">
              {t.hero.cta1}
            </button>
          </div>

          <button
            className="lg:hidden p-2 rounded-xl border border-white/10 bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden pb-4"
            >
              <div className="rounded-2xl border border-white/10 bg-[#070B1F]/70 backdrop-blur-xl p-4">
                <div className="grid gap-2">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/5"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
                <div className="mt-4 grid gap-2">
                  <button
                    onClick={cycleLang}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 flex items-center justify-center gap-2"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{language}</span>
                  </button>
                  <button className="rounded-xl bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED] px-4 py-3 text-sm font-semibold">
                    {t.hero.cta1}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Pill>
                <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
                <span>{t.hero.badge}</span>
              </Pill>
              <Pill>
                <MapPin className="h-4 w-4 text-[#E6C08E]" />
                <span>{t.footer.globalFootprint}</span>
              </Pill>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-8 text-5xl md:text-6xl font-serif font-semibold tracking-tight leading-[1.05]"
            >
              {t.hero.headline1}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E6C08E] via-white to-[#2DD4BF]">
                {t.hero.headline2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl"
            >
              {t.hero.subhead}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button className="rounded-2xl bg-gradient-to-r from-[#E6C08E] to-[#B98B5E] px-7 py-3.5 font-semibold text-[#070B1F] shadow-lg shadow-black/30 hover:opacity-95">
                {t.hero.cta1}
              </button>
              <a
                href="#platform"
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white/85 hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                {t.hero.cta2}
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 grid grid-cols-3 gap-4 max-w-lg"
            >
              {[
                { label: t.mudeer.units, value: '180k+' },
                { label: t.mudeer.occupancy, value: '96.4%' },
                { label: t.mudeer.revenue, value: '$4.2M' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="text-xl font-semibold text-white">{s.value}</div>
                  <div className="text-xs text-white/55 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#E6C08E]/20 via-[#2DD4BF]/10 to-[#7C3AED]/15 blur-2xl" />

              <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl shadow-black/40 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-white/55">Portfolio overview</div>
                      <div className="mt-1 text-lg font-semibold">Executive cockpit</div>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
                      Live
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/55">Occupancy</div>
                      <div className="mt-2 text-2xl font-semibold">96.4%</div>
                      <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full w-[82%] bg-gradient-to-r from-[#2DD4BF] to-[#7C3AED]" />
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs text-white/55">Collections</div>
                      <div className="mt-2 text-2xl font-semibold">$4.2M</div>
                      <div className="mt-2 text-xs text-[#E6C08E]">+14.2% MoM</div>
                    </div>
                    <div className="col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-white/55">Automation health</div>
                        <div className="text-xs text-white/60">Last 24h</div>
                      </div>
                      <div className="mt-4 grid grid-cols-4 gap-2">
                        {[72, 48, 90, 63, 84, 55, 78, 92].map((v, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: `${v}%`, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.35 + i * 0.05 }}
                            className="h-24 rounded-xl bg-gradient-to-t from-[#E6C08E] via-[#2DD4BF] to-[#7C3AED] opacity-70"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-black/20 p-5">
                  <div className="grid grid-cols-3 gap-4">
                    {[{ k: 'SLA', v: '99.99%' }, { k: 'Tickets', v: '−38%' }, { k: 'NPS', v: '62' }].map(
                      (x) => (
                        <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <div className="text-xs text-white/55">{x.k}</div>
                          <div className="mt-1 text-lg font-semibold">{x.v}</div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-8 -left-6 rounded-2xl border border-white/10 bg-[#070B1F]/70 backdrop-blur-xl px-5 py-4 shadow-xl shadow-black/30"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#E6C08E]/15 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-[#E6C08E]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Rent collected</div>
                    <div className="text-xs text-white/60">$12,450 • 3 min ago</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="absolute -top-8 -right-6 rounded-2xl border border-white/10 bg-[#070B1F]/70 backdrop-blur-xl px-5 py-4 shadow-xl shadow-black/30"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[#2DD4BF]/15 flex items-center justify-center">
                    <Wrench className="h-5 w-5 text-[#2DD4BF]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Maintenance closed</div>
                    <div className="text-xs text-white/60">Unit 18B • Today</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Ecosystem = () => {
  const { t } = useLanguage();

  const cards = [
    {
      title: t.ecosystem.forManagers,
      desc: t.ecosystem.managersDesc,
      icon: <Building2 className="h-6 w-6 text-[#E6C08E]" />,
      highlight: t.ecosystem.mudeerSub,
      gradient: 'from-[#E6C08E]/15 via-white/5 to-white/0',
    },
    {
      title: t.ecosystem.forResidents,
      desc: t.ecosystem.residentsDesc,
      icon: <Smartphone className="h-6 w-6 text-[#2DD4BF]" />,
      highlight: t.ecosystem.hausbuddySub,
      gradient: 'from-[#2DD4BF]/15 via-white/5 to-white/0',
    },
    {
      title: t.trust.security,
      desc: t.trust.securityDesc,
      icon: <Shield className="h-6 w-6 text-[#7C3AED]" />,
      highlight: t.trust.security,
      gradient: 'from-[#7C3AED]/15 via-white/5 to-white/0',
    },
  ];

  return (
    <section id="ecosystem" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.ecosystem.title1}
          title={t.ecosystem.title2}
          desc={t.ecosystem.subtitle}
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group rounded-3xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <div className={`p-8 bg-gradient-to-b ${c.gradient}`}>
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                    {c.icon}
                  </div>
                  <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/50">
                    {c.highlight}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{c.title}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{c.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white">
                  {t.mudeer.learnMore}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm text-white/60">Operational score</div>
              <div className="text-sm font-semibold text-[#E6C08E]">+18% QoQ</div>
            </div>
            <div className="mt-5 text-4xl font-semibold tracking-tight">92</div>
            <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[78%] bg-gradient-to-r from-[#E6C08E] via-[#2DD4BF] to-[#7C3AED]" />
            </div>
            <p className="mt-4 text-sm text-white/65 leading-relaxed max-w-xl">
              A single metric that reflects collections, occupancy, maintenance SLAs, and resident engagement — updated in real time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="md:col-span-5 rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-white/60">Resident sentiment</div>
                <div className="mt-2 text-2xl font-semibold">4.8★</div>
              </div>
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-[#2DD4BF]" />
              </div>
            </div>
            <p className="mt-4 text-sm text-white/65 leading-relaxed">
              Hausbuddy consolidates payments, requests, and messaging — reducing support load while improving retention.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[{ k: 'Tickets', v: '−60%' }, { k: 'Renewals', v: '+23%' }].map((x) => (
                <div key={x.k} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <div className="text-xs text-white/55">{x.k}</div>
                  <div className="mt-1 text-lg font-semibold">{x.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Platform = () => {
  const { t } = useLanguage();

  const featureIcons = [
    <Sparkles key="a" className="h-5 w-5 text-[#E6C08E]" />,
    <Building2 key="b" className="h-5 w-5 text-[#2DD4BF]" />,
    <Shield key="c" className="h-5 w-5 text-[#7C3AED]" />,
    <Globe key="d" className="h-5 w-5 text-[#E6C08E]" />,
  ];

  return (
    <section id="platform" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={t.mudeer.badge}
          title={t.mudeer.title}
          desc={t.mudeer.subtitle}
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs text-white/55">Command center</div>
                <div className="mt-2 text-2xl font-semibold">Portfolio intelligence</div>
                <p className="mt-3 text-sm text-white/65 leading-relaxed max-w-xl">
                  Configure workflows, unify financials, and automate resident operations — designed for executive confidence.
                </p>
              </div>
              <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-[#E6C08E]" />
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {t.mudeer.features.map((it, idx) => (
                <div
                  key={it.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                      {featureIcons[idx] ?? featureIcons[0]}
                    </div>
                    <div className="font-semibold">{it.title}</div>
                  </div>
                  <p className="mt-3 text-sm text-white/65 leading-relaxed">{it.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="lg:col-span-5 rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="text-xs text-white/55">{t.mudeer.whitelabelBadge}</div>
            <div className="mt-2 text-2xl font-semibold">{t.mudeer.subtitle}</div>
            <p className="mt-3 text-sm text-white/65 leading-relaxed">{t.mudeer.subtitle}</p>

            <div className="mt-6 space-y-3">
              {[t.mudeer.features[0]?.title, t.mudeer.features[1]?.title, t.mudeer.features[2]?.title]
                .filter(Boolean)
                .map((x) => (
                  <div
                    key={x}
                    className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 px-5 py-4"
                  >
                    <div className="text-sm font-semibold text-white/85">{x}</div>
                  </div>
                ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-[#070B1F]/60 p-5">
              <div className="text-xs text-white/55">{t.mudeer.units}</div>
              <div className="mt-1 text-lg font-semibold">180k+</div>
              <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[68%] bg-gradient-to-r from-[#2DD4BF] to-[#E6C08E]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Hausbuddy = () => {
  const { t } = useLanguage();

  const bullets = [
    {
      icon: <CreditCard className="h-4 w-4" />,
      title: t.hausbuddy.payments,
      desc: t.hausbuddy.paymentsDesc,
    },
    {
      icon: <CalendarDays className="h-4 w-4" />,
      title: t.hausbuddy.amenities,
      desc: t.hausbuddy.amenitiesDesc,
    },
    {
      icon: <Wrench className="h-4 w-4" />,
      title: t.hausbuddy.serviceRequests,
      desc: t.hausbuddy.serviceRequestsDesc,
    },
  ];

  return (
    <section id="hausbuddy" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <SectionTitle
              eyebrow={t.hausbuddy.badge}
              title={t.hausbuddy.title}
              desc={t.hausbuddy.subtitle}
            />

            <div className="mt-10 space-y-4">
              {bullets.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/80">
                      {b.icon}
                    </div>
                    <div>
                      <div className="font-semibold">{b.title}</div>
                      <div className="mt-1 text-sm text-white/65 leading-relaxed">{b.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm font-semibold text-white/85">{t.hausbuddy.downloadOn}</div>
              <div className="mt-3 flex flex-col sm:flex-row gap-3">
                <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/10" href="#">
                  {t.hausbuddy.appStore}
                </a>
                <a className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/10" href="#">
                  {t.hausbuddy.googlePlay}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-[#2DD4BF]/18 via-[#E6C08E]/12 to-[#7C3AED]/12 blur-2xl" />

              <div className="relative grid md:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Hausbuddy</div>
                    <div className="text-xs text-white/60">Resident view</div>
                  </div>
                  <div className="mt-5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-5">
                    <div className="text-xs text-white/55">Next rent</div>
                    <div className="mt-1 text-2xl font-semibold">$2,450</div>
                    <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#E6C08E] to-[#B98B5E] py-2.5 text-sm font-semibold text-[#070B1F]">
                      Pay now
                    </button>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      { k: 'Requests', v: '2 open', c: '#2DD4BF' },
                      { k: 'Messages', v: '1 new', c: '#7C3AED' },
                    ].map((x) => (
                      <div
                        key={x.k}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="text-xs text-white/55">{x.k}</div>
                        <div className="mt-1 text-sm font-semibold" style={{ color: x.c }}>
                          {x.v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 overflow-hidden">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">The Mudeer</div>
                    <div className="text-xs text-white/60">Manager view</div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[{ t: 'Collections synced', s: 'Realtime', c: '#E6C08E' }, { t: 'Work orders routed', s: 'Auto', c: '#2DD4BF' }, { t: 'Resident comms logged', s: 'Unified', c: '#7C3AED' }].map(
                      (row) => (
                        <div
                          key={row.t}
                          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 px-5 py-4"
                        >
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-semibold text-white/85">
                              {row.t}
                            </div>
                            <div className="text-xs font-semibold" style={{ color: row.c }}>
                              {row.s}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-[#070B1F]/60 p-5">
                    <div className="text-xs text-white/55">Engagement</div>
                    <div className="mt-2 flex items-end gap-2 h-20">
                      {[35, 55, 42, 70, 60, 85, 58, 76, 64, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-lg"
                          style={{
                            height: `${h}%`,
                            background:
                              'linear-gradient(to top, rgba(45,212,191,0.9), rgba(124,58,237,0.9))',
                            opacity: 0.85,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
          <div className="p-10 md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-[#2DD4BF]" />
              {t.footer.ctaSubtitle}
            </div>
            <h3 className="mt-5 text-3xl md:text-4xl font-serif font-semibold tracking-tight">
              {t.footer.ctaTitle}
            </h3>
            <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">{t.footer.tagline}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="rounded-2xl bg-gradient-to-r from-[#E6C08E] to-[#B98B5E] px-7 py-3.5 font-semibold text-[#070B1F] shadow-lg shadow-black/30">
                {t.footer.ctaButton}
              </button>
              <a
                href="#platform"
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white/85 hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                {t.mudeer.learnMore}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid md:grid-cols-12 gap-8 border-t border-white/10 pt-10">
              <div className="md:col-span-4">
                <div className="text-sm font-semibold text-white">{t.footer.platform}</div>
                <div className="mt-4 space-y-2">
                  {t.footer.platformLinks.map((x) => (
                    <a key={x} className="block text-sm text-white/65 hover:text-white" href="#">
                      {x}
                    </a>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="text-sm font-semibold text-white">{t.footer.company}</div>
                <div className="mt-4 space-y-2">
                  {t.footer.companyLinks.map((x) => (
                    <a key={x} className="block text-sm text-white/65 hover:text-white" href="#">
                      {x}
                    </a>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="text-sm font-semibold text-white">{t.footer.legal}</div>
                <div className="mt-4 space-y-2">
                  {t.footer.legalLinks.map((x) => (
                    <a key={x} className="block text-sm text-white/65 hover:text-white" href="#">
                      {x}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/55">
              <div>{t.footer.globalFootprint}</div>
              <div>© {new Date().getFullYear()} {t.footer.copyright}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Page5Inner() {
  return (
    <Shell>
      <NavBar />
      <Hero />
      <Ecosystem />
      <Platform />
      <Hausbuddy />
      <Contact />
    </Shell>
  );
}

export default function Page5() {
  return (
    <LanguageProvider>
      <Page5Inner />
    </LanguageProvider>
  );
}
