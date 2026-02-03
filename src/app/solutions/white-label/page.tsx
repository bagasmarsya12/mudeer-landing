'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const benefits = [
  {
    title: 'Complete Brand Control',
    description: 'Your logo, your colors, your domain. Every touchpoint reflects your corporate identity.',
    icon: '🎨'
  },
  {
    title: 'Rapid Deployment',
    description: 'Go live in weeks, not years. Our infrastructure is ready—just add your brand.',
    icon: '⚡'
  },
  {
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified infrastructure with 99.99% uptime SLA.',
    icon: '🔒'
  },
  {
    title: 'Scalable Architecture',
    description: 'From 100 units to 100,000. Our platform grows seamlessly with your business.',
    icon: '📈'
  },
  {
    title: 'Dedicated Support',
    description: 'White-glove onboarding and ongoing technical support for your team.',
    icon: '🤝'
  },
  {
    title: 'Revenue Growth',
    description: 'Add technology as a service. Generate new revenue streams from existing clients.',
    icon: '💎'
  }
];

const features = [
  'Custom domain and SSL',
  'Branded mobile apps (iOS & Android)',
  'White-labeled admin dashboard',
  'Custom email templates',
  'API access',
  'Dedicated server options',
  'Custom integrations',
  'Priority support'
];

export default function WhiteLabelPage() {
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
            <span className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase">White Label Solution</span>
            <h1 className="font-['Cormorant_Garamond'] text-[clamp(40px,6vw,72px)] leading-tight mt-4 mb-6">
              Your Brand,<br/>Our Technology
            </h1>
            <p className="text-xl text-[#CBC5CE] leading-relaxed mb-8">
              Offer a world-class property management platform under your own brand. 
              We handle the technology—you build the relationships and grow your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
                Request Proposal
              </button>
              <Link href="/page2#contact" className="px-8 py-4 border border-[#D4AF37]/30 text-[#F8F9FA] rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
                Speak with Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 border-y border-[#D4AF37]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
          <div className="text-center mb-16">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-4">How White Label Works</h2>
            <p className="text-[#CBC5CE] max-w-2xl mx-auto">From concept to launch in three simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Brand Integration', desc: 'We incorporate your logo, colors, and domain into our platform.' },
              { step: '02', title: 'Customization', desc: 'Configure features, workflows, and integrations to match your needs.' },
              { step: '03', title: 'Launch', desc: 'Go live with your branded platform. We handle hosting and maintenance.' }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-6xl font-['Cormorant_Garamond'] text-[#D4AF37]/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[#9CA3AF]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-4">Why Choose White Label?</h2>
            <p className="text-[#CBC5CE] max-w-2xl mx-auto">Build your brand while leveraging proven technology.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-2xl p-8 border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#0F1D2F]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-6">Everything Included</h2>
              <p className="text-[#CBC5CE] leading-relaxed mb-8">
                Our white label package comes with everything you need to launch your own 
                property management platform. No hidden costs, no surprises.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#CBC5CE]">
                    <svg className="w-5 h-5 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0A1628] rounded-2xl p-8 border border-[#D4AF37]/20">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm mb-4">White Label Package</div>
                <div className="text-4xl font-bold text-[#F8F9FA]">Custom Pricing</div>
                <p className="text-[#9CA3AF] mt-2">Tailored to your needs</p>
              </div>
              <ul className="space-y-3 mb-8">
                {['Complete brand customization', 'Unlimited properties', 'Full feature access', 'Dedicated account manager', '99.99% uptime SLA'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#CBC5CE] text-sm">
                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => setShowForm(true)} className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-4">Success Story</h3>
                <h4 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl mb-6">How Al-Rashid Group Transformed Their Business</h4>
                <p className="text-[#CBC5CE] leading-relaxed mb-6">
                  “The white label solution allowed us to offer a premium technology platform to our clients
                  without the massive investment in development. Within 6 months, we increased our client base by 40%.”
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0A1628] font-bold">MR</div>
                  <div>
                    <div className="font-semibold">Mohammed Al-Rashid</div>
                    <div className="text-sm text-[#9CA3AF]">CEO, Al-Rashid Group</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0A1628] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">40%</div>
                  <div className="text-sm text-[#9CA3AF] mt-1">Client Growth</div>
                </div>
                <div className="bg-[#0A1628] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">3mo</div>
                  <div className="text-sm text-[#9CA3AF] mt-1">Time to Launch</div>
                </div>
                <div className="bg-[#0A1628] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">99.9%</div>
                  <div className="text-sm text-[#9CA3AF] mt-1">Uptime</div>
                </div>
                <div className="bg-[#0A1628] rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">$0</div>
                  <div className="text-sm text-[#9CA3AF] mt-1">Dev Costs</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-6">Ready to Launch Your Own Platform?</h2>
          <p className="text-[#CBC5CE] max-w-2xl mx-auto mb-8">Get a customized proposal based on your specific requirements and goals.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
              Get Your Custom Quote
            </button>
            <Link href="/page2" className="px-8 py-4 border border-[#D4AF37]/30 text-[#F8F9FA] rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37]">Request White Label Proposal</h3>
              <button onClick={() => setShowForm(false)} className="text-[#9CA3AF] hover:text-[#F8F9FA]">✕</button>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
                <input type="text" placeholder="Company Name" className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <select className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#9CA3AF] focus:outline-none focus:border-[#D4AF37]">
                <option>Portfolio Size</option>
                <option>100-500 units</option>
                <option>500-2,000 units</option>
                <option>2,000-10,000 units</option>
                <option>10,000+ units</option>
              </select>
              <textarea rows={4} placeholder="Tell us about your requirements..." className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37] resize-none" />
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
