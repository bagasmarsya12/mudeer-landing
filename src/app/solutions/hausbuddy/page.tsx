'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/lib/LanguageContext';

const content = {
  EN: {
    hero: {
      badge: 'Hausbuddy App',
      title: 'Your Home,\nIn Your Hand',
      description: 'A refined mobile experience designed for modern residents. Pay rent, submit requests, and stay connected with your building—all from one elegant app.',
      cta1: 'Download App',
      cta2: 'Learn More'
    },
    stats: [
      { value: '4.9★', label: 'App Rating' },
      { value: '85%', label: 'Active Users' },
      { value: '3min', label: 'Avg Session' }
    ],
    featuresTitle: 'Features Tenants Love',
    featuresSubtitle: 'Everything your tenants need to feel at home, right in their pocket.',
    features: [
      { title: 'One-Tap Payments', description: 'Tenants can pay rent in seconds using their preferred payment method. No more checks, no more delays.', icon: '💳' },
      { title: 'Maintenance Requests', description: 'Submit maintenance requests with photos and videos. Track progress in real-time until completion.', icon: '📸' },
      { title: 'Community Hub', description: 'Stay connected with building announcements, events, and important notices—all in one place.', icon: '📢' },
      { title: 'Document Access', description: 'Access lease agreements, payment receipts, and important documents anytime, anywhere.', icon: '📄' },
      { title: 'Direct Messaging', description: 'Communicate directly with property management through secure in-app messaging.', icon: '💬' },
      { title: 'Amenity Booking', description: 'Reserve building amenities like gyms, pools, and common areas with just a few taps.', icon: '🏊' }
    ],
    howItWorks: {
      badge: 'How It Works',
      title: 'Simple. Fast. Convenient.',
      steps: [
        { number: '01', title: 'Download', desc: 'Get the app from App Store or Google Play in seconds.' },
        { number: '02', title: 'Connect', desc: 'Link your unit and verify your identity securely.' },
        { number: '03', title: 'Enjoy', desc: 'Start managing your home with a few taps.' }
      ]
    },
    testimonial: {
      name: 'Sarah M.',
      role: 'Tenant since 2023',
      quote: '"Hausbuddy has made my rental experience so much smoother. Paying rent takes seconds, and I love being able to track my maintenance requests in real-time."'
    },
    retention: {
      title: 'Happy Tenants, Better Retention',
      description: 'When tenants have the tools they need, they stay longer. Hausbuddy creates a seamless living experience that turns residents into advocates for your properties.',
      items: ['95% tenant satisfaction', '40% faster rent collection', '60% fewer payment delays', '3x longer average tenancy']
    },
    cta: {
      title: 'Give Your Tenants the Experience They Deserve',
      subtitle: 'Available on iOS and Android. White-label options available for property managers.',
      button1: 'Get the App',
      button2: 'Back to Home'
    },
    modal: {
      title: 'Get Hausbuddy',
      name: 'Full Name',
      email: 'Email Address',
      role: 'I am a...',
      roles: ['Tenant', 'Property Manager', 'Developer'],
      submit: 'Get Access',
      close: '✕'
    },
    footer: '© 2025 The Mudeer. All rights reserved.'
  },
  AR: {
    hero: {
      badge: 'تطبيق هاوس بادي',
      title: 'منزلك،\nفي يدك',
      description: 'تجربة جوال راقية مصممة للسكان الحديثين. دفع الإيجار، تقديم الطلبات، والبقاء على اتصال بمبناك—كل ذلك من تطبيق أنيق واحد.',
      cta1: 'تحميل التطبيق',
      cta2: 'اعرف المزيد'
    },
    stats: [
      { value: '4.9★', label: 'تقييم التطبيق' },
      { value: '85%', label: 'المستخدمون النشطون' },
      { value: '3د', label: 'متوسط الجلسة' }
    ],
    featuresTitle: 'الميزات التي يحبها المستأجرون',
    featuresSubtitle: 'كل ما يحتاجه مستأجروك للشعور بالراحة في المنزل، في جيبهم.',
    features: [
      { title: 'المدفوعات بنقرة واحدة', description: 'يمكن للمستأجرين دفع الإيجار في ثوانٍ باستخدام طريقة الدفع المفضلة لديهم. لا مزيد من الشيكات، لا مزيد من التأخير.', icon: '💳' },
      { title: 'طلبات الصيانة', description: 'قدم طلبات الصيانة مع الصور ومقاطع الفيديو. تتبع التقدم في الوقت الفعلي حتى الانتهاء.', icon: '📸' },
      { title: 'مركز المجتمع', description: 'ابقَ على اتصال مع إعلانات المبنى والفعاليات والإشعارات المهمة—كل ذلك في مكان واحد.', icon: '📢' },
      { title: 'الوصول إلى المستندات', description: 'الوصول إلى اتفاقيات الإيجار وإيصالات الدفع والمستندات المهمة في أي وقت ومن أي مكان.', icon: '📄' },
      { title: 'المراسلة المباشرة', description: 'تواصل مباشرة مع إدارة العقارات من خلال مراسلة آمنة داخل التطبيق.', icon: '💬' },
      { title: 'حجز المرافق', description: 'احجز مرافق المبنى مثل الصالات الرياضية والمسابح والمناطق المشتركة بنقرات قليلة فقط.', icon: '🏊' }
    ],
    howItWorks: {
      badge: 'كيف يعمل',
      title: 'بسيط. سريع. مريح.',
      steps: [
        { number: '01', title: 'تحميل', desc: 'احصل على التطبيق من App Store أو Google Play في ثوانٍ.' },
        { number: '02', title: 'توصيل', desc: 'اربط وحدة الخاصة بك وتحقق من هويتك بأمان.' },
        { number: '03', title: 'استمتع', desc: 'ابدأ في إدارة منزلك بنقرات قليلة.' }
      ]
    },
    testimonial: {
      name: 'سارة م.',
      role: 'مستأجرة منذ 2023',
      quote: '«جعل هاوس بادي تجربة الإيجار الخاصة بي أكثر سلاسة بكثير. دفع الإيجار يستغرق ثوانٍ، وأحب القدرة على تتبع طلبات الصيانة الخاصة بي في الوقت الفعلي.»'
    },
    retention: {
      title: 'مستأجرون سعداء، احتفاظ أفضل',
      description: 'عندما يكون لدى المستأجرين الأدوات التي يحتاجونها، يبقون لفترة أطول. يخلق هاوس بادي تجربة معيشية سلسة تحول السكان إلى داعمين لعقاراتك.',
      items: ['95% رضا المستأجرين', '40% أسرع في تحصيل الإيجار', '60% أقل تأخيراً في المدفوعات', '3x فترة إيجار متوسطة أطول']
    },
    cta: {
      title: 'امنح مستأجريك التجربة التي يستحقونها',
      subtitle: 'متاح على iOS وAndroid. خيارات العلامة البيضاء متاحة لمديري العقارات.',
      button1: 'احصل على التطبيق',
      button2: 'العودة للرئيسية'
    },
    modal: {
      title: 'احصل على هاوس بادي',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      role: 'أنا...',
      roles: ['مستأجر', 'مدير عقارات', 'مطور'],
      submit: 'الحصول على الوصول',
      close: '✕'
    },
    footer: '© 2025 المدير. جميع الحقوق محفوظة.'
  },
  ID: {
    hero: {
      badge: 'Aplikasi Hausbuddy',
      title: 'Rumah Anda,\nDi Tangan Anda',
      description: 'Pengalaman seluler yang halus dirancang untuk penghuni modern. Bayar sewa, ajukan permintaan, dan tetap terhubung dengan gedung Anda—semua dari satu aplikasi yang elegan.',
      cta1: 'Unduh Aplikasi',
      cta2: 'Pelajari Lebih Lanjut'
    },
    stats: [
      { value: '4.9★', label: 'Rating Aplikasi' },
      { value: '85%', label: 'Pengguna Aktif' },
      { value: '3mnt', label: 'Sesi Rata-rata' }
    ],
    featuresTitle: 'Fitur yang Disukai Penyewa',
    featuresSubtitle: 'Semua yang dibutuhkan penyewa Anda untuk merasa seperti di rumah, tepat di saku mereka.',
    features: [
      { title: 'Pembayaran Sekali Ketuk', description: 'Penyewa dapat membayar sewa dalam hitungan detik menggunakan metode pembayaran pilihan mereka. Tidak ada cek lagi, tidak ada penundaan lagi.', icon: '💳' },
      { title: 'Permintaan Perawatan', description: 'Kirimkan permintaan perawatan dengan foto dan video. Lacak kemajuan secara real-time hingga selesai.', icon: '📸' },
      { title: 'Pusat Komunitas', description: 'Tetap terhubung dengan pengumuman gedung, acara, dan pemberitahuan penting—semua di satu tempat.', icon: '📢' },
      { title: 'Akses Dokumen', description: 'Akses perjanjian sewa, tanda terima pembayaran, dan dokumen penting kapan saja, di mana saja.', icon: '📄' },
      { title: 'Pesan Langsung', description: 'Berkomunikasi langsung dengan manajemen properti melalui pesan dalam aplikasi yang aman.', icon: '💬' },
      { title: 'Pemesanan Fasilitas', description: 'Pesan fasilitas gedung seperti gym, kolam renang, dan area umum dengan beberapa ketukan saja.', icon: '🏊' }
    ],
    howItWorks: {
      badge: 'Cara Kerja',
      title: 'Sederhana. Cepat. Nyaman.',
      steps: [
        { number: '01', title: 'Unduh', desc: 'Dapatkan aplikasi dari App Store atau Google Play dalam hitungan detik.' },
        { number: '02', title: 'Hubungkan', desc: 'Tautkan unit Anda dan verifikasi identitas Anda dengan aman.' },
        { number: '03', title: 'Nikmati', desc: 'Mulai kelola rumah Anda dengan beberapa ketukan.' }
      ]
    },
    testimonial: {
      name: 'Sarah M.',
      role: 'Penyewa sejak 2023',
      quote: '"Hausbuddy telah membuat pengalaman sewa saya jauh lebih lancar. Membayar sewa hanya membutuhkan hitungan detik, dan saya suka dapat melacak permintaan perawatan saya secara real-time."'
    },
    retention: {
      title: 'Penyewa Senang, Retensi Lebih Baik',
      description: 'Ketika penyewa memiliki alat yang mereka butuhkan, mereka tinggal lebih lama. Hausbuddy menciptakan pengalaman hidup yang lancar yang mengubah penghuni menjadi pendukung properti Anda.',
      items: ['95% kepuasan penyewa', '40% lebih cepat mengumpulkan sewa', '60% lebih sedikit keterlambatan pembayaran', '3x lebih lama rata-rata sewa']
    },
    cta: {
      title: 'Berikan Penyewa Anda Pengalaman yang Mereka Layak Dapatkan',
      subtitle: 'Tersedia di iOS dan Android. Opsi white-label tersedia untuk manajer properti.',
      button1: 'Dapatkan Aplikasi',
      button2: 'Kembali ke Beranda'
    },
    modal: {
      title: 'Dapatkan Hausbuddy',
      name: 'Nama Lengkap',
      email: 'Alamat Email',
      role: 'Saya adalah...',
      roles: ['Penyewa', 'Manajer Properti', 'Pengembang'],
      submit: 'Dapatkan Akses',
      close: '✕'
    },
    footer: '© 2025 The Mudeer. Hak cipta dilindungi.'
  }
};

export default function HausbuddyPage() {
  const { language } = useLanguage();
  const [showForm, setShowForm] = useState(false);

  const t = content[language];
  const isRTL = language === 'AR';

  const openContact = () => setShowForm(true);

  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F8F9FA] font-['Outfit']" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header onContactClick={openContact} />

      {/* Hero - Navy */}
      <section className="pt-32 pb-20 px-4 sm:px-6 md:px-[60px] bg-[#0A1628]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#00A79D] text-sm tracking-[0.2em] uppercase">{t.hero.badge}</span>
              <h1 className="font-['Cormorant_Garamond'] text-[clamp(40px,6vw,72px)] leading-tight mt-4 mb-6 whitespace-pre-line">
                {t.hero.title}
              </h1>
              <p className="text-xl text-[#CBC5CE] leading-relaxed mb-8">
                {t.hero.description}
              </p>
              <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-[#00A79D] text-white font-semibold rounded-lg hover:bg-[#008B82] transition-colors">
                  {t.hero.cta1}
                </button>
                <Link href="/page2#contact" className="px-8 py-4 border border-[#00A79D]/30 text-[#F8F9FA] rounded-lg hover:bg-[#00A79D]/10 transition-colors">
                  {t.hero.cta2}
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: isRTL ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative">
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

      {/* Stats - Navy with border */}
      <section className="py-16 border-y border-[#00A79D]/10 bg-[#0A1628]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
          <div className="grid grid-cols-3 gap-8">
            {t.stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#00A79D]">{stat.value}</div>
                <div className="text-sm text-[#9CA3AF] mt-2 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Sand */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#F5F3F0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#0A1628]/60 mb-4">Features</span>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] text-[#0A1628] mb-4">{t.featuresTitle}</h2>
            <p className="text-[#1A2B42]/70 max-w-2xl mx-auto">{t.featuresSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-[#0A1628]/10 hover:border-[#00A79D]/30 transition-all text-left shadow-sm"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#0A1628]">{feature.title}</h3>
                <p className="text-[#1A2B42]/70 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Navy */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#0A1628]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#00A79D] mb-4">{t.howItWorks.badge}</span>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-4">{t.howItWorks.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.howItWorks.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-['Cormorant_Garamond'] text-[#00A79D]/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-[#9CA3AF]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial + Retention - Sand */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#F5F3F0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRTL ? 'order-2' : ''}`}>
              <div className="bg-white rounded-2xl p-8 border border-[#0A1628]/10 shadow-sm">
                <div className={`flex items-center gap-3 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-[#00A79D] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{t.testimonial.name.charAt(0)}</span>
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <div className="font-semibold text-[#0A1628]">{t.testimonial.name}</div>
                    <div className="text-sm text-[#1A2B42]/60">{t.testimonial.role}</div>
                  </div>
                </div>
                <p className="text-[#1A2B42]/80 italic text-lg leading-relaxed">{t.testimonial.quote}</p>
                <div className={`flex gap-1 mt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className={`${isRTL ? 'order-1' : ''}`}>
              <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#00A79D] mb-4">Benefits</span>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] text-[#0A1628] mb-6">{t.retention.title}</h2>
              <p className="text-[#1A2B42]/70 leading-relaxed mb-6">
                {t.retention.description}
              </p>
              <ul className="space-y-4">
                {t.retention.items.map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 text-[#0A1628] ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <svg className="w-5 h-5 text-[#00A79D] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Navy */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#0A1628]">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-6">{t.cta.title}</h2>
          <p className="text-[#CBC5CE] max-w-2xl mx-auto mb-8">{t.cta.subtitle}</p>
          <div className={`flex flex-wrap justify-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-[#00A79D] text-white font-semibold rounded-lg hover:bg-[#008B82] transition-colors">
              {t.cta.button1}
            </button>
            <Link href="/page2" className="px-8 py-4 border border-[#00A79D]/30 text-[#F8F9FA] rounded-lg hover:bg-[#00A79D]/10 transition-colors">
              {t.cta.button2}
            </Link>
          </div>
        </div>
      </section>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#00A79D]/30 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#00A79D]">{t.modal.title}</h3>
              <button onClick={() => setShowForm(false)} className="text-[#9CA3AF] hover:text-[#F8F9FA]">{t.modal.close}</button>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder={t.modal.name} className="w-full px-4 py-3 bg-[#0A1628] border border-[#00A79D]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#00A79D]" />
              <input type="email" placeholder={t.modal.email} className="w-full px-4 py-3 bg-[#0A1628] border border-[#00A79D]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#00A79D]" />
              <select className="w-full px-4 py-3 bg-[#0A1628] border border-[#00A79D]/20 rounded-lg text-[#9CA3AF] focus:outline-none focus:border-[#00A79D]">
                <option>{t.modal.role}</option>
                {t.modal.roles.map((role, i) => (
                  <option key={i}>{role}</option>
                ))}
              </select>
              <button type="submit" className="w-full py-4 bg-[#00A79D] text-white font-semibold rounded-lg hover:bg-[#008B82] transition-colors">
                {t.modal.submit}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0F1D2F] py-8 border-t border-[#00A79D]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] text-center text-[#9CA3AF] text-sm">
          {t.footer}
        </div>
      </footer>
    </main>
  );
}
