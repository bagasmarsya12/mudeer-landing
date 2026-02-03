'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const features = [
  {
    title: 'One-Tap Payments',
    description: 'Tenants can pay rent in seconds using their preferred payment method. No more checks, no more delays.',
    icon: '💳'
  },
  {
    title: 'Maintenance Requests',
    description: 'Submit maintenance requests with photos and videos. Track progress in real-time until completion.',
    icon: '📸'
  },
  {
    title: 'Community Hub',
    description: 'Stay connected with building announcements, events, and important notices—all in one place.',
    icon: '📢'
  },
  {
    title: 'Document Access',
    description: 'Access lease agreements, payment receipts, and important documents anytime, anywhere.',
    icon: '📄'
  },
  {
    title: 'Direct Messaging',
    description: 'Communicate directly with property management through secure in-app messaging.',
    icon: '💬'
  },
  {
    title: 'Amenity Booking',
    description: 'Reserve building amenities like gyms, pools, and common areas with just a few taps.',
    icon: '🏊'
  }
];

const stats = [
  { value: '4.9★', label: 'App Rating' },
  { value: '85%', label: 'Active Users' },
  { value: '3min', label: 'Avg Session' }
];

export default function HausbuddyPage() {
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#00A79D] text-sm tracking-[0.2em] uppercase">Hausbuddy App</span>
              <h1 className="font-['Cormorant_Garamond'] text-[clamp(40px,6vw,72px)] leading-tight mt-4 mb-6">
                Your Home,<br/>In Your Hand
              </h1>
              <p className="text-xl text-[#CBC5CE] leading-relaxed mb-8">
                A refined mobile experience designed for modern residents. Pay rent, submit requests, 
                and stay connected with your building—all from one elegant app.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-[#00A79D] text-white font-semibold rounded-lg hover:bg-[#008B82] transition-colors">
                  Download App
                </button>
                <Link href="/page2#contact" className="px-8 py-4 border border-[#00A79D]/30 text-[#F8F9FA] rounded-lg hover:bg-[#00A79D]/10 transition-colors">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative">
              <div className="relative mx-auto w-64 h-[500px] bg-gradient-to-b from-[#1A2B42] to-[#0A1628] rounded-[40px] border-4 border-[#1A2B42] shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#0A1628] rounded-b-xl" />
                <div className="p-6 pt-12 h-full">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-[#00A79D] rounded-xl mx-auto mb-2" />
                    <div className="text-sm text-[#00A79D] font-semibold">Hausbuddy</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-16 bg-[#00A79D]/10 rounded-xl" />
                    <div className="h-16 bg-[#00A79D]/10 rounded-xl" />
                    <div className="h-16 bg-[#00A79D]/10 rounded-xl" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-[#00A79D]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#00A79D]">{stat.value}</div>
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
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-4">Features Tenants Love</h2>
            <p className="text-[#CBC5CE] max-w-2xl mx-auto">Everything your tenants need to feel at home, right in their pocket.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-2xl p-8 border border-[#00A79D]/10 hover:border-[#00A79D]/30 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#0F1D2F]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#0A1628] rounded-2xl p-6 border border-[#00A79D]/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#00A79D] rounded-full" />
                  <div>
                    <div className="text-sm font-semibold">Sarah M.</div>
                    <div className="text-xs text-[#9CA3AF]">Tenant since 2023</div>
                  </div>
                </div>
                <p className="text-[#CBC5CE] italic">
                  "Hausbuddy has made my rental experience so much smoother. Paying rent takes seconds, 
                  and I love being able to track my maintenance requests in real-time."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-6">Happy Tenants, Better Retention</h2>
              <p className="text-[#CBC5CE] leading-relaxed mb-6">
                When tenants have the tools they need, they stay longer. Hausbuddy creates a 
                seamless living experience that turns residents into advocates for your properties.
              </p>
              <ul className="space-y-4">
                {['95% tenant satisfaction', '40% faster rent collection', '60% fewer payment delays', '3x longer average tenancy'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#CBC5CE]">
                    <svg className="w-5 h-5 text-[#00A79D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-6">Give Your Tenants the Experience They Deserve</h2>
          <p className="text-[#CBC5CE] max-w-2xl mx-auto mb-8">Available on iOS and Android. White-label options available for property managers.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-[#00A79D] text-white font-semibold rounded-lg hover:bg-[#008B82] transition-colors">
              Get the App
            </button>
            <Link href="/page2" className="px-8 py-4 border border-[#00A79D]/30 text-[#F8F9FA] rounded-lg hover:bg-[#00A79D]/10 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#00A79D]/30 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#00A79D]">Get Hausbuddy</h3>
              <button onClick={() => setShowForm(false)} className="text-[#9CA3AF] hover:text-[#F8F9FA]">✕</button>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-[#0A1628] border border-[#00A79D]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#00A79D]" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-[#0A1628] border border-[#00A79D]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#00A79D]" />
              <select className="w-full px-4 py-3 bg-[#0A1628] border border-[#00A79D]/20 rounded-lg text-[#9CA3AF] focus:outline-none focus:border-[#00A79D]">
                <option>I am a...</option>
                <option>Tenant</option>
                <option>Property Manager</option>
                <option>Developer</option>
              </select>
              <button type="submit" className="w-full py-4 bg-[#00A79D] text-white font-semibold rounded-lg hover:bg-[#008B82] transition-colors">
                Get Access
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0F1D2F] py-8 border-t border-[#00A79D]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] text-center text-[#9CA3AF] text-sm">
          © 2025 The Mudeer. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
