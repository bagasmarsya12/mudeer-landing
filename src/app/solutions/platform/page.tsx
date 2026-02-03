'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const features = [
  {
    title: 'Real-Time Analytics',
    description: 'Monitor portfolio performance with live dashboards showing occupancy rates, revenue trends, and key metrics updated every 15 minutes.',
    icon: '📊'
  },
  {
    title: 'Financial Management',
    description: 'Automated rent collection, expense tracking, and comprehensive financial reporting—all in one place.',
    icon: '💰'
  },
  {
    title: 'Maintenance Workflow',
    description: 'Streamlined maintenance requests with automatic vendor assignment, progress tracking, and completion verification.',
    icon: '🔧'
  },
  {
    title: 'Tenant Communication',
    description: 'Integrated messaging system for seamless communication with tenants, including automated notifications and announcements.',
    icon: '💬'
  },
  {
    title: 'Document Management',
    description: 'Secure cloud storage for all property documents, leases, and contracts with easy search and retrieval.',
    icon: '📄'
  },
  {
    title: 'Reporting & Insights',
    description: 'Generate comprehensive reports for stakeholders with one click. From occupancy reports to financial summaries.',
    icon: '📈'
  }
];

const stats = [
  { value: '40%', label: 'Time Saved' },
  { value: '98%', label: 'Collection Rate' },
  { value: '24/7', label: 'Access' }
];

export default function PlatformPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F8F9FA] font-['Outfit']">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#0A1628]/95 backdrop-blur-[20px] py-4 border-b border-[#D4AF37]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] flex items-center justify-between">
          <Link href="/page2" className="flex items-center gap-3">
            <svg className="w-9 h-9" viewBox="0 0 44 44" fill="none">
              <rect x="6" y="8" width="32" height="6" rx="2" fill="#D4AF37"/>
              <rect x="6" y="19" width="26" height="6" rx="2" fill="#D4AF37"/>
              <rect x="6" y="30" width="20" height="6" rx="2" fill="#D4AF37"/>
            </svg>
            <span className="font-['Outfit'] font-semibold text-sm tracking-[0.2em] text-[#F8F9FA] uppercase">The Mudeer</span>
          </Link>
          <Link href="/page2" className="text-[#D4AF37] text-sm hover:underline">← Back to Home</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 md:px-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase">The Mudeer Platform</span>
            <h1 className="font-['Cormorant_Garamond'] text-[clamp(40px,6vw,72px)] leading-tight mt-4 mb-6">
              Command Center for Property Managers
            </h1>
            <p className="text-xl text-[#CBC5CE] leading-relaxed mb-8">
              A comprehensive dashboard that puts you in complete control of your portfolio. 
              From financial oversight to tenant relations, manage every aspect of your properties 
              with precision and ease.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
                Request Demo
              </button>
              <Link href="/page2#contact" className="px-8 py-4 border border-[#D4AF37]/30 text-[#F8F9FA] rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-[#D4AF37]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#D4AF37]">{stat.value}</div>
                <div className="text-sm text-[#9CA3AF] mt-2 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-4">Everything You Need</h2>
            <p className="text-[#CBC5CE] max-w-2xl mx-auto">Powerful features designed to streamline your property management operations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-2xl p-8 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#0F1D2F]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-6">Intuitive Dashboard Design</h2>
              <p className="text-[#CBC5CE] leading-relaxed mb-6">
                Our dashboard is designed with clarity in mind. Every metric, every notification, 
                every action item is exactly where you expect it to be. No clutter, no confusion—just 
                pure productivity.
              </p>
              <ul className="space-y-4">
                {['Customizable widgets', 'Dark mode support', 'Mobile responsive', 'Real-time updates'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#CBC5CE]">
                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0A1628] rounded-2xl p-6 border border-[#D4AF37]/20">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-[#D4AF37]/20 rounded w-3/4" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-[#D4AF37]/10 rounded" />
                  <div className="h-20 bg-[#D4AF37]/10 rounded" />
                  <div className="h-20 bg-[#D4AF37]/10 rounded" />
                </div>
                <div className="h-32 bg-[#D4AF37]/5 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-[#CBC5CE] max-w-2xl mx-auto mb-8">Join hundreds of property managers who have elevated their portfolio management with The Mudeer.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
              Schedule a Demo
            </button>
            <Link href="/page2" className="px-8 py-4 border border-[#D4AF37]/30 text-[#F8F9FA] rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37]">Request Demo</h3>
              <button onClick={() => setShowForm(false)} className="text-[#9CA3AF] hover:text-[#F8F9FA]">✕</button>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              <button type="submit" className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0F1D2F] py-8 border-t border-[#D4AF37]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] text-center text-[#9CA3AF] text-sm">
          © 2025 The Mudeer. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
