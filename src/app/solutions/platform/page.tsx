'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/lib/LanguageContext';

const content = {
  EN: {
    hero: {
      badge: 'The Mudeer Platform',
      title: 'Command Center for Property Managers',
      description: 'A comprehensive dashboard that puts you in complete control of your portfolio. From financial oversight to tenant relations, manage every aspect of your properties with precision and ease.',
      cta1: 'Request Demo',
      cta2: 'Contact Sales'
    },
    stats: [
      { value: '40%', label: 'Time Saved' },
      { value: '98%', label: 'Collection Rate' },
      { value: '24/7', label: 'Access' }
    ],
    featuresTitle: 'Everything You Need',
    featuresSubtitle: 'Powerful features designed to streamline your property management operations.',
    features: [
      { title: 'Real-Time Analytics', description: 'Monitor portfolio performance with live dashboards showing occupancy rates, revenue trends, and key metrics updated every 15 minutes.', icon: '📊' },
      { title: 'Financial Management', description: 'Automated rent collection, expense tracking, and comprehensive financial reporting—all in one place.', icon: '💰' },
      { title: 'Maintenance Workflow', description: 'Streamlined maintenance requests with automatic vendor assignment, progress tracking, and completion verification.', icon: '🔧' },
      { title: 'Tenant Communication', description: 'Integrated messaging system for seamless communication with tenants, including automated notifications and announcements.', icon: '💬' },
      { title: 'Document Management', description: 'Secure cloud storage for all property documents, leases, and contracts with easy search and retrieval.', icon: '📄' },
      { title: 'Reporting & Insights', description: 'Generate comprehensive reports for stakeholders with one click. From occupancy reports to financial summaries.', icon: '📈' }
    ],
    whyChoose: {
      badge: 'Why Choose Us',
      title: 'Built for Modern Property Management',
      description: 'Our platform combines cutting-edge technology with intuitive design, giving you the tools you need to manage properties efficiently while delivering exceptional experiences to your tenants.',
      items: [
        { title: 'Intuitive Design', desc: 'Clean, modern interface that your team will love using every day.' },
        { title: 'Enterprise Security', desc: 'Bank-grade encryption and compliance with industry standards.' },
        { title: 'Seamless Integration', desc: 'Connect with your existing tools and workflows effortlessly.' }
      ]
    },
    dashboard: {
      title: 'Intuitive Dashboard Design',
      description: 'Our dashboard is designed with clarity in mind. Every metric, every notification, every action item is exactly where you expect it to be. No clutter, no confusion—just pure productivity.',
      items: ['Customizable widgets', 'Dark mode support', 'Mobile responsive', 'Real-time updates']
    },
    cta: {
      title: 'Ready to Transform Your Operations?',
      subtitle: 'Join hundreds of property managers who have elevated their portfolio management with The Mudeer.',
      button1: 'Schedule a Demo',
      button2: 'Back to Home'
    },
    modal: {
      title: 'Request Demo',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      submit: 'Submit Request',
      close: '✕'
    },
    footer: '© 2025 The Mudeer. All rights reserved.'
  },
  AR: {
    hero: {
      badge: 'منصة المدير',
      title: 'مركز القيادة لمديري العقارات',
      description: 'لوحة تحكم شاملة تمنحك السيطرة الكاملة على محفظتك. من الإشراف المالي إلى علاقات المستأجرين، أدِر كل جانب من جوانب عقاراتك بدقة وسهولة.',
      cta1: 'طلب عرض توضيحي',
      cta2: 'التواصل مع المبيعات'
    },
    stats: [
      { value: '40%', label: 'توفير الوقت' },
      { value: '98%', label: 'معدل التحصيل' },
      { value: '24/7', label: 'وصول' }
    ],
    featuresTitle: 'كل ما تحتاجه',
    featuresSubtitle: 'ميزات قوية مصممة لتبسيط عمليات إدارة العقارات الخاصة بك.',
    features: [
      { title: 'التحليلات في الوقت الفعلي', description: 'راقب أداء المحفظة مع لوحات المعلومات المباشرة التي تعرض معدلات الإشغال واتجاهات الإيرادات والمقاييس الرئيسية المحدثة كل 15 دقيقة.', icon: '📊' },
      { title: 'الإدارة المالية', description: 'تحصيل الإيجار الآلي، وتتبع النفقات، والتقارير المالية الشاملة—كل ذلك في مكان واحد.', icon: '💰' },
      { title: 'سير عمل الصيانة', description: 'طلبات صيانة مبسطة مع تعيين البائعين تلقائياً، وتتبع التقدم، والتحقق من الإنجاز.', icon: '🔧' },
      { title: 'التواصل مع المستأجرين', description: 'نظام مراسلة متكامل للتواصل السلس مع المستأجرين، بما في ذلك الإشعارات والإعلانات الآلية.', icon: '💬' },
      { title: 'إدارة المستندات', description: 'تخزين سحابي آمن لجميع مستندات العقارات والعقود والاتفاقيات مع البحث والاسترجاع السهل.', icon: '📄' },
      { title: 'التقارير والرؤى', description: 'أنشئ تقارير شاملة لأصحاب المصلحة بنقرة واحدة. من تقارير الإشغال إلى الملخصات المالية.', icon: '📈' }
    ],
    whyChoose: {
      badge: 'لماذا تختارنا',
      title: 'مصمم لإدارة العقارات الحديثة',
      description: 'تجمع منصتنا بين التقنية المتقدمة والتصميم البديهي، مما يمنحك الأدوات التي تحتاجها لإدارة العقارات بكفاءة مع تقديم تجارب استثنائية لمستأجريك.',
      items: [
        { title: 'تصميم بديهي', desc: 'واجهة نظيفة وعصرية ستحب فريقك استخدامها كل يوم.' },
        { title: 'أمان المؤسسات', desc: 'تشفير على مستوى البنوك والامتثال لمعايير الصناعة.' },
        { title: 'تكامل سلس', desc: 'تواصل مع أدواتك وسير عملك الحالي بسهولة.' }
      ]
    },
    dashboard: {
      title: 'تصميم لوحة تحكم بديهي',
      description: 'تم تصميم لوحة التحكم لدينا مع وضع الوضوح في الاعتبار. كل مقياس، كل إشعار، كل عنصر عمل هو بالضبط حيث تتوقعه. لا فوضى، لا ارتباك—مجرد إنتاجية نقية.',
      items: ['عناصر قابلة للتخصيص', 'دعم الوضع الداكن', 'متجاوب مع الجوال', 'تحديثات في الوقت الفعلي']
    },
    cta: {
      title: 'مستعد لتحويل عملياتك؟',
      subtitle: 'انضم إلى مئات مديري العقارات الذين ارتقوا بإدارة محافظهم مع المدير.',
      button1: 'جدولة عرض توضيحي',
      button2: 'العودة للرئيسية'
    },
    modal: {
      title: 'طلب عرض توضيحي',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      submit: 'إرسال الطلب',
      close: '✕'
    },
    footer: '© 2025 المدير. جميع الحقوق محفوظة.'
  },
  ID: {
    hero: {
      badge: 'Platform The Mudeer',
      title: 'Pusat Komando untuk Manajer Properti',
      description: 'Dashboard komprehensif yang memberi Anda kendali penuh atas portofolio Anda. Dari pengawasan keuangan hingga hubungan penyewa, kelola setiap aspek properti Anda dengan presisi dan mudah.',
      cta1: 'Minta Demo',
      cta2: 'Hubungi Penjualan'
    },
    stats: [
      { value: '40%', label: 'Hemat Waktu' },
      { value: '98%', label: 'Tingkat Koleksi' },
      { value: '24/7', label: 'Akses' }
    ],
    featuresTitle: 'Semua yang Anda Butuhkan',
    featuresSubtitle: 'Fitur canggih yang dirancang untuk menyederhanakan operasi manajemen properti Anda.',
    features: [
      { title: 'Analitik Real-Time', description: 'Pantau kinerja portofolio dengan dashboard live yang menampilkan tingkat hunian, tren pendapatan, dan metrik kunci yang diperbarui setiap 15 menit.', icon: '📊' },
      { title: 'Manajemen Keuangan', description: 'Pengumpulan sewa otomatis, pelacakan pengeluaran, dan pelaporan keuangan komprehensif—semua dalam satu tempat.', icon: '💰' },
      { title: 'Alur Kerja Pemeliharaan', description: 'Permintaan pemeliharaan yang disederhanakan dengan penugasan vendor otomatis, pelacakan kemajuan, dan verifikasi penyelesaian.', icon: '🔧' },
      { title: 'Komunikasi Penyewa', description: 'Sistem pesan terintegrasi untuk komunikasi lancar dengan penyewa, termasuk pemberitahuan dan pengumuman otomatis.', icon: '💬' },
      { title: 'Manajemen Dokumen', description: 'Penyimpanan cloud yang aman untuk semua dokumen properti, sewa, dan kontrak dengan pencarian dan pengambilan yang mudah.', icon: '📄' },
      { title: 'Pelaporan & Wawasan', description: 'Hasilkan laporan komprehensif untuk pemangku kepentingan dengan satu klik. Dari laporan hunian hingga ringkasan keuangan.', icon: '📈' }
    ],
    whyChoose: {
      badge: 'Mengapa Memilih Kami',
      title: 'Dibangun untuk Manajemen Properti Modern',
      description: 'Platform kami menggabungkan teknologi mutakhir dengan desain intuitif, memberi Anda alat yang Anda butuhkan untuk mengelola properti secara efisien sambil memberikan pengalaman luar biasa kepada penyewa Anda.',
      items: [
        { title: 'Desain Intuitif', desc: 'Antarmuka bersih dan modern yang akan disukai tim Anda untuk digunakan setiap hari.' },
        { title: 'Keamanan Perusahaan', desc: 'Enkripsi tingkat bank dan kepatuhan terhadap standar industri.' },
        { title: 'Integrasi Tanpa Batas', desc: 'Terhubung dengan alat dan alur kerja Anda yang ada dengan mudah.' }
      ]
    },
    dashboard: {
      title: 'Desain Dashboard Intuitif',
      description: 'Dashboard kami dirancang dengan mempertimbangkan kejelasan. Setiap metrik, setiap pemberitahuan, setiap item tindakan persis di tempat yang Anda harapkan. Tanpa kekacauan, tanpa kebingungan—hanya produktivitas murni.',
      items: ['Widget yang dapat disesuaikan', 'Dukungan mode gelap', 'Responsif seluler', 'Pembaruan real-time']
    },
    cta: {
      title: 'Siap Mengubah Operasi Anda?',
      subtitle: 'Bergabunglah dengan ratusan manajer properti yang telah meningkatkan manajemen portofolio mereka dengan The Mudeer.',
      button1: 'Jadwalkan Demo',
      button2: 'Kembali ke Beranda'
    },
    modal: {
      title: 'Minta Demo',
      name: 'Nama Lengkap',
      email: 'Alamat Email',
      phone: 'Nomor Telepon',
      submit: 'Kirim Permintaan',
      close: '✕'
    },
    footer: '© 2025 The Mudeer. Hak cipta dilindungi.'
  }
};

export default function PlatformPage() {
  const { language } = useLanguage();
  const [showForm, setShowForm] = useState(false);

  const t = content[language];
  const isRTL = language === 'AR';

  const openContact = () => setShowForm(true);

  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F8F9FA] font-['Outfit']" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header onContactClick={openContact} />

      {/* Hero - Navy */}
      <section className="pt-32 pb-20 px-4 sm:px-6 md:px-[60px]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase">{t.hero.badge}</span>
            <h1 className="font-['Cormorant_Garamond'] text-[clamp(40px,6vw,72px)] leading-tight mt-4 mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-[#CBC5CE] leading-relaxed mb-8">
              {t.hero.description}
            </p>
            <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
                {t.hero.cta1}
              </button>
              <Link href="/page2#contact" className="px-8 py-4 border border-[#D4AF37]/30 text-[#F8F9FA] rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
                {t.hero.cta2}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats - Navy with border */}
      <section className="py-16 border-y border-[#D4AF37]/10 bg-[#0A1628]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px]">
          <div className="grid grid-cols-3 gap-8">
            {t.stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#D4AF37]">{stat.value}</div>
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
                className="bg-white rounded-2xl p-8 border border-[#0A1628]/10 hover:border-[#D4AF37]/30 transition-all text-left shadow-sm"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#0A1628]">{feature.title}</h3>
                <p className="text-[#1A2B42]/70 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - Navy */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#0A1628]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-4">{t.whyChoose.badge}</span>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-6">{t.whyChoose.title}</h2>
              <p className="text-[#CBC5CE] leading-relaxed mb-8">
                {t.whyChoose.description}
              </p>
              <div className="space-y-6">
                {t.whyChoose.items.map((item, i) => (
                  <div key={i} className={`flex gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#D4AF37] font-bold">0{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#F8F9FA] mb-1">{item.title}</h4>
                      <p className="text-[#9CA3AF] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-2xl p-8 border border-[#D4AF37]/20">
              <div className="space-y-4">
                <div className="h-4 bg-[#D4AF37]/20 rounded w-3/4" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-[#D4AF37]/10 rounded" />
                  <div className="h-20 bg-[#D4AF37]/10 rounded" />
                  <div className="h-20 bg-[#D4AF37]/10 rounded" />
                </div>
                <div className="h-32 bg-[#D4AF37]/5 rounded" />
                <div className="h-4 bg-[#D4AF37]/20 rounded w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview - Sand */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#F5F3F0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isRTL ? 'order-2' : ''}`}>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] text-[#0A1628] mb-6">{t.dashboard.title}</h2>
              <p className="text-[#1A2B42]/70 leading-relaxed mb-6">
                {t.dashboard.description}
              </p>
              <ul className="space-y-4">
                {t.dashboard.items.map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 text-[#0A1628] ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <svg className="w-5 h-5 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`bg-white rounded-2xl p-6 border border-[#0A1628]/10 shadow-lg ${isRTL ? 'order-1' : ''}`}>
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-[#D4AF37]/20 rounded w-3/4" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-[#0A1628]/5 rounded" />
                  <div className="h-20 bg-[#0A1628]/5 rounded" />
                  <div className="h-20 bg-[#0A1628]/5 rounded" />
                </div>
                <div className="h-32 bg-[#0A1628]/5 rounded" />
              </div>
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
            <button onClick={() => setShowForm(true)} className="px-8 py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
              {t.cta.button1}
            </button>
            <Link href="/page2" className="px-8 py-4 border border-[#D4AF37]/30 text-[#F8F9FA] rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
              {t.cta.button2}
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37]">{t.modal.title}</h3>
              <button onClick={() => setShowForm(false)} className="text-[#9CA3AF] hover:text-[#F8F9FA]">{t.modal.close}</button>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder={t.modal.name} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              <input type="email" placeholder={t.modal.email} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              <input type="tel" placeholder={t.modal.phone} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              <button type="submit" className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
                {t.modal.submit}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#0F1D2F] py-8 border-t border-[#D4AF37]/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] text-center text-[#9CA3AF] text-sm">
          {t.footer}
        </div>
      </footer>
    </main>
  );
}
