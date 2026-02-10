'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { useLanguage } from '@/lib/LanguageContext';

const content = {
  EN: {
    hero: {
      badge: 'White Label Solution',
      title: 'Your Brand,\nOur Technology',
      description: 'Offer a world-class property management platform under your own brand. We handle the technology—you build the relationships and grow your business.',
      cta1: 'Request Proposal',
      cta2: 'Speak with Sales'
    },
    whyWhiteLabel: {
      badge: 'Why White Label',
      title: 'Scale Without the Headache',
      description: 'Building property management software from scratch takes years and millions of dollars. With our white label solution, you can launch in weeks with a proven, battle-tested platform.',
      items: [
        { title: 'Go to Market Faster', desc: 'Launch in weeks, not years. Our infrastructure is ready.' },
        { title: 'Reduce Risk', desc: 'Proven technology used by thousands of units worldwide.' },
        { title: 'Focus on Growth', desc: 'Spend your energy on sales and relationships, not coding.' }
      ]
    },
    howItWorks: {
      badge: 'How It Works',
      title: 'From Concept to Launch',
      subtitle: 'Three simple steps to your branded platform.',
      steps: [
        { step: '01', title: 'Brand Integration', desc: 'We incorporate your logo, colors, and domain into our platform.' },
        { step: '02', title: 'Customization', desc: 'Configure features, workflows, and integrations to match your needs.' },
        { step: '03', title: 'Launch', desc: 'Go live with your branded platform. We handle hosting and maintenance.' }
      ]
    },
    benefits: {
      badge: 'Benefits',
      title: 'Why Choose White Label?',
      subtitle: 'Build your brand while leveraging proven technology.',
      items: [
        { title: 'Complete Brand Control', description: 'Your logo, your colors, your domain. Every touchpoint reflects your corporate identity.', icon: '🎨' },
        { title: 'Rapid Deployment', description: 'Go live in weeks, not years. Our infrastructure is ready—just add your brand.', icon: '⚡' },
        { title: 'Enterprise Security', description: 'SOC 2 Type II certified infrastructure with 99.99% uptime SLA.', icon: '🔒' },
        { title: 'Scalable Architecture', description: 'From 100 units to 100,000. Our platform grows seamlessly with your business.', icon: '📈' },
        { title: 'Dedicated Support', description: 'White-glove onboarding and ongoing technical support for your team.', icon: '🤝' },
        { title: 'Revenue Growth', description: 'Add technology as a service. Generate new revenue streams from existing clients.', icon: '💎' }
      ]
    },
    features: {
      title: 'Everything Included',
      description: 'Our white label package comes with everything you need to launch your own property management platform. No hidden costs, no surprises.',
      items: [
        'Custom domain and SSL',
        'Branded mobile apps (iOS & Android)',
        'White-labeled admin dashboard',
        'Custom email templates',
        'API access',
        'Dedicated server options',
        'Custom integrations',
        'Priority support'
      ],
      package: {
        badge: 'White Label Package',
        price: 'Custom Pricing',
        subtitle: 'Tailored to your needs',
        includes: ['Complete brand customization', 'Unlimited properties', 'Full feature access', 'Dedicated account manager', '99.99% uptime SLA'],
        cta: 'Request Proposal'
      }
    },
    successStory: {
      badge: 'Success Story',
      title: 'How Al-Rashid Group Transformed Their Business',
      quote: '"The white label solution allowed us to offer a premium technology platform to our clients without the massive investment in development. Within 6 months, we increased our client base by 40%."',
      author: 'Mohammed Al-Rashid',
      role: 'CEO, Al-Rashid Group',
      stats: [
        { value: '40%', label: 'Client Growth' },
        { value: '3mo', label: 'Time to Launch' },
        { value: '99.9%', label: 'Uptime' },
        { value: '$0', label: 'Dev Costs' }
      ]
    },
    cta: {
      title: 'Ready to Launch Your Own Platform?',
      subtitle: 'Get a customized proposal based on your specific requirements and goals.',
      button1: 'Get Your Custom Quote',
      button2: 'Back to Home'
    },
    modal: {
      title: 'Request White Label Proposal',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      company: 'Company Name',
      portfolioSize: 'Portfolio Size',
      portfolioOptions: ['Portfolio Size', '100-500 units', '500-2,000 units', '2,000-10,000 units', '10,000+ units'],
      message: 'Tell us about your requirements...',
      submit: 'Submit',
      close: '✕'
    },
    footer: '© 2025 The Mudeer. All rights reserved.'
  },
  AR: {
    hero: {
      badge: 'حل العلامة البيضاء',
      title: 'علامتك التجارية،\nتقنيتنا',
      description: 'قدم منصة إدارة عقارات عالمية المستوى تحت علامتك التجارية الخاصة. نحن نتعامل مع التقنية—وأنت تبني العلاقات وتنمي عملك.',
      cta1: 'طلب اقتراح',
      cta2: 'التحدث مع المبيعات'
    },
    whyWhiteLabel: {
      badge: 'لماذا العلامة البيضاء',
      title: 'توسع دون صداع',
      description: 'يستغرق بناء برنامج إدارة العقارات من الصفر سنوات وملايين الدولارات. مع حل العلامة البيضاء لدينا، يمكنك الإطلاق في أسابيع مع منصة مثبتة ومجربة.',
      items: [
        { title: 'الوصول إلى السوق بشكل أسرع', desc: 'انطلق في أسابيع، لا سنوات. بنيتنا التحتية جاهزة.' },
        { title: 'تقليل المخاطر', desc: 'تقنية مثبتة مستخدمة من آلاف الوحدات حول العالم.' },
        { title: 'التركيز على النمو', desc: 'وجه طاقتك نحو المبيعات والعلاقات، وليس البرمجة.' }
      ]
    },
    howItWorks: {
      badge: 'كيف يعمل',
      title: 'من الفكرة إلى الإطلاق',
      subtitle: 'ثلاث خطوات بسيطة لمنصتك ذات العلامة التجارية.',
      steps: [
        { step: '01', title: 'دمج العلامة التجارية', desc: 'ندمج شعارك وألوانك ونطاقك في منصتنا.' },
        { step: '02', title: 'التخصيص', desc: 'قم بتكوين الميزات وسير العمل والتكاملات لتتناسب مع احتياجاتك.' },
        { step: '03', title: 'الإطلاق', desc: 'انطلق بمنصتك ذات العلامة التجارية. نتعامل مع الاستضافة والصيانة.' }
      ]
    },
    benefits: {
      badge: 'الفوائد',
      title: 'لماذا تختار العلامة البيضاء؟',
      subtitle: 'ابنِ علامتك التجارية مع الاستفادة من التقنية المثبتة.',
      items: [
        { title: 'التحكم الكامل في العلامة التجارية', description: 'شعارك، ألوانك، نطاقك. كل نقطة اتصال تعكس هويتك المؤسسية.', icon: '🎨' },
        { title: 'النشر السريع', description: 'انطلق في أسابيع، لا سنوات. بنيتنا التحتية جاهزة—فقط أضف علامتك التجارية.', icon: '⚡' },
        { title: 'أمان المؤسسات', description: 'بنية تحتية معتمدة SOC 2 Type II مع 99.99% اتفاقية مستوى الخدمة.', icon: '🔒' },
        { title: 'هندسة قابلة للتوسع', description: 'من 100 وحدة إلى 100,000. منصتنا تنمو بسلاسة مع عملك.', icon: '📈' },
        { title: 'دعم مخصص', description: 'تأهيل متميز ودعم تقني مستمر لفريقك.', icon: '🤝' },
        { title: 'نمو الإيرادات', description: 'أضف التقنية كخدمة. أنشئ مصادر إيرادات جديدة من العملاء الحاليين.', icon: '💎' }
      ]
    },
    features: {
      title: 'كل شيء متضمن',
      description: 'يأتي حزمة العلامة البيضاء الخاصة بنا مع كل ما تحتاجه لإطلاق منصة إدارة العقارات الخاصة بك. لا تكاليف خفية، لا مفاجآت.',
      items: [
        'نطاق مخصص وSSL',
        'تطبيقات جوال ذات علامة تجارية (iOS وAndroid)',
        'لوحة تحكم إدارية بيضاء',
        'قوالب بريد مخصصة',
        'الوصول إلى API',
        'خيارات خادم مخصصة',
        'تكاملات مخصصة',
        'دعم ذو أولوية'
      ],
      package: {
        badge: 'حزمة العلامة البيضاء',
        price: 'تسعير مخصص',
        subtitle: 'مصمم حسب احتياجاتك',
        includes: ['تخصيص علامة تجارية كامل', 'عقارات غير محدودة', 'الوصول الكامل للميزات', 'مدير حساب مخصص', '99.99% اتفاقية مستوى الخدمة'],
        cta: 'طلب اقتراح'
      }
    },
    successStory: {
      badge: 'قصة نجاح',
      title: 'كيف حولت مجموعة الرشيد أعمالها',
      quote: '«سمح لنا حل العلامة البيضاء بتقديم منصة تقنية متميزة لعملائنا دون الاستثمار الضخم في التطوير. في غضون 6 أشهر، زادنا قاعدة عملائنا بنسبة 40%.»',
      author: 'محمد الرشيد',
      role: 'الرئيس التنفيذي، مجموعة الرشيد',
      stats: [
        { value: '40%', label: 'نمو العملاء' },
        { value: '3ش', label: 'وقت الإطلاق' },
        { value: '99.9%', label: 'الوقت التشغيلي' },
        { value: '$0', label: 'تكاليف التطوير' }
      ]
    },
    cta: {
      title: 'مستعد لإطلاق منصتك الخاصة؟',
      subtitle: 'احصل على اقتراح مخصص بناءً على متطلباتك وأهدافك المحددة.',
      button1: 'احصل على عرض السعر المخصص',
      button2: 'العودة للرئيسية'
    },
    modal: {
      title: 'طلب اقتراح العلامة البيضاء',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      company: 'اسم الشركة',
      portfolioSize: 'حجم المحفظة',
      portfolioOptions: ['حجم المحفظة', '100-500 وحدة', '500-2,000 وحدة', '2,000-10,000 وحدة', '10,000+ وحدة'],
      message: 'أخبرنا عن متطلباتك...',
      submit: 'إرسال',
      close: '✕'
    },
    footer: '© 2025 المدير. جميع الحقوق محفوظة.'
  },
  ID: {
    hero: {
      badge: 'Solusi White Label',
      title: 'Merek Anda,\nTeknologi Kami',
      description: 'Tawarkan platform manajemen properti kelas dunia di bawah merek Anda sendiri. Kami menangani teknologinya—Anda membangun hubungan dan mengembangkan bisnis Anda.',
      cta1: 'Minta Proposal',
      cta2: 'Bicara dengan Penjualan'
    },
    whyWhiteLabel: {
      badge: 'Mengapa White Label',
      title: 'Skalakan Tanpa Sakit Kepala',
      description: 'Membangun perangkat lunak manajemen properti dari nol membutuhkan waktu bertahun-tahun dan jutaan dolar. Dengan solusi white label kami, Anda dapat meluncurkan dalam hitungan minggu dengan platform yang terbukti dan teruji.',
      items: [
        { title: 'Lebih Cepat ke Pasar', desc: 'Luncurkan dalam minggu, bukan tahun. Infrastruktur kami siap.' },
        { title: 'Kurangi Risiko', desc: 'Teknologi terbukti yang digunakan oleh ribuan unit di seluruh dunia.' },
        { title: 'Fokus pada Pertumbuhan', desc: 'Gunakan energi Anda untuk penjualan dan hubungan, bukan coding.' }
      ]
    },
    howItWorks: {
      badge: 'Cara Kerja',
      title: 'Dari Konsep hingga Peluncuran',
      subtitle: 'Tiga langkah sederhana untuk platform bermerek Anda.',
      steps: [
        { step: '01', title: 'Integrasi Merek', desc: 'Kami menggabungkan logo, warna, dan domain Anda ke platform kami.' },
        { step: '02', title: 'Kustomisasi', desc: 'Konfigurasikan fitur, alur kerja, dan integrasi sesuai kebutuhan Anda.' },
        { step: '03', title: 'Peluncuran', desc: 'Go live dengan platform bermerek Anda. Kami menangani hosting dan pemeliharaan.' }
      ]
    },
    benefits: {
      badge: 'Manfaat',
      title: 'Mengapa Memilih White Label?',
      subtitle: 'Bangun merek Anda sambil memanfaatkan teknologi yang terbukti.',
      items: [
        { title: 'Kontrol Merek Lengkap', description: 'Logo Anda, warna Anda, domain Anda. Setiap titik sentuh mencerminkan identitas perusahaan Anda.', icon: '🎨' },
        { title: 'Penyebaran Cepat', description: 'Go live dalam minggu, bukan tahun. Infrastruktur kami siap—tambahkan merek Anda saja.', icon: '⚡' },
        { title: 'Keamanan Perusahaan', description: 'Infrastruktur tersertifikasi SOC 2 Type II dengan 99,99% uptime SLA.', icon: '🔒' },
        { title: 'Arsitektur Skalabel', description: 'Dari 100 unit hingga 100.000. Platform kami tumbuh tanpa batas dengan bisnis Anda.', icon: '📈' },
        { title: 'Dukungan Khusus', description: 'Onboarding white-glove dan dukungan teknis berkelanjutan untuk tim Anda.', icon: '🤝' },
        { title: 'Pertumbuhan Pendapatan', description: 'Tambahkan teknologi sebagai layanan. Hasilkan aliran pendapatan baru dari klien yang ada.', icon: '💎' }
      ]
    },
    features: {
      title: 'Semua Termasuk',
      description: 'Paket white label kami datang dengan semua yang Anda butuhkan untuk meluncurkan platform manajemen properti Anda sendiri. Tanpa biaya tersembunyi, tanpa kejutan.',
      items: [
        'Domain kustom dan SSL',
        'Aplikasi seluler bermerek (iOS & Android)',
        'Dashboard admin white-label',
        'Template email kustom',
        'Akses API',
        'Opsi server khusus',
        'Integrasi kustom',
        'Dukungan prioritas'
      ],
      package: {
        badge: 'Paket White Label',
        price: 'Harga Kustom',
        subtitle: 'Disesuaikan dengan kebutuhan Anda',
        includes: ['Kustomisasi merek lengkap', 'Properti tak terbatas', 'Akses fitur penuh', 'Manajer akun khusus', '99,99% uptime SLA'],
        cta: 'Minta Proposal'
      }
    },
    successStory: {
      badge: 'Kisah Sukses',
      title: 'Bagaimana Al-Rashid Group Mentransformasi Bisnis Mereka',
      quote: '"Solusi white label memungkinkan kami menawarkan platform teknologi premium kepada klien kami tanpa investasi besar dalam pengembangan. Dalam waktu 6 bulan, kami meningkatkan basis klien kami sebesar 40%."',
      author: 'Mohammed Al-Rashid',
      role: 'CEO, Al-Rashid Group',
      stats: [
        { value: '40%', label: 'Pertumbuhan Klien' },
        { value: '3bln', label: 'Waktu Peluncuran' },
        { value: '99.9%', label: 'Uptime' },
        { value: '$0', label: 'Biaya Dev' }
      ]
    },
    cta: {
      title: 'Siap Meluncurkan Platform Anda Sendiri?',
      subtitle: 'Dapatkan proposal kustom berdasarkan kebutuhan dan tujuan spesifik Anda.',
      button1: 'Dapatkan Penawaran Kustom',
      button2: 'Kembali ke Beranda'
    },
    modal: {
      title: 'Minta Proposal White Label',
      name: 'Nama Lengkap',
      email: 'Alamat Email',
      phone: 'Nomor Telepon',
      company: 'Nama Perusahaan',
      portfolioSize: 'Ukuran Portofolio',
      portfolioOptions: ['Ukuran Portofolio', '100-500 unit', '500-2.000 unit', '2.000-10.000 unit', '10.000+ unit'],
      message: 'Ceritakan tentang kebutuhan Anda...',
      submit: 'Kirim',
      close: '✕'
    },
    footer: '© 2025 The Mudeer. Hak cipta dilindungi.'
  }
};

export default function WhiteLabelPage() {
  const { language } = useLanguage();
  const [showContactForm, setShowContactForm] = useState(false);

  const t = content[language];
  const isRTL = language === 'AR';

  const openContact = () => setShowContactForm(true);

  // Contact Section Content
  const contactContent = {
    EN: {
      badge: "Let's Talk",
      title: 'Ready to Launch Your Own Platform?',
      subtitle: 'Choose your preferred way to connect with our team.',
      methods: [
        { icon: 'form', title: 'Contact Form', description: 'Fill out our form and we will get back to you.', action: 'Fill Form' },
        { icon: 'email', title: 'Email', description: 'Reach out for detailed inquiries.', action: 'Send Email', href: 'mailto:hello@themudeer.com' },
        { icon: 'whatsapp', title: 'WhatsApp', description: 'Chat with us directly on WhatsApp.', action: 'Chat Now', href: 'https://wa.me/971501234567' },
      ]
    },
    AR: {
      badge: 'دعنا نتحدث',
      title: 'مستعد لإطلاق منصتك الخاصة؟',
      subtitle: 'اختر طريقتك المفضلة للتواصل مع فريقنا.',
      methods: [
        { icon: 'form', title: 'نموذج التواصل', description: 'املأ النموذج وسنرد عليك.', action: 'املأ النموذج' },
        { icon: 'email', title: 'البريد', description: 'تواصل للاستفسارات التفصيلية.', action: 'إرسال بريد', href: 'mailto:hello@themudeer.com' },
        { icon: 'whatsapp', title: 'واتساب', description: 'دردش معنا مباشرة على واتساب.', action: 'دردش الآن', href: 'https://wa.me/971501234567' },
      ]
    },
    ID: {
      badge: 'Mari Bicara',
      title: 'Siap Meluncurkan Platform Anda Sendiri?',
      subtitle: 'Pilih cara pilihan Anda untuk terhubung dengan tim kami.',
      methods: [
        { icon: 'form', title: 'Form Kontak', description: 'Isi formulir kami dan kami akan menghubungi Anda.', action: 'Isi Formulir' },
        { icon: 'email', title: 'Email', description: 'Hubungi kami untuk pertanyaan detail.', action: 'Kirim Email', href: 'mailto:hello@themudeer.com' },
        { icon: 'whatsapp', title: 'WhatsApp', description: 'Chat langsung dengan kami di WhatsApp.', action: 'Chat Sekarang', href: 'https://wa.me/971501234567' },
      ]
    }
  };

  const ct = contactContent[language];

  return (
    <main className="min-h-screen bg-[#0A1628] text-[#F8F9FA] font-['Outfit']" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header onContactClick={openContact} />

      {/* Hero - Navy */}
      <section className="pt-32 pb-20 px-4 sm:px-6 md:px-[60px] bg-[#0A1628]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase">{t.hero.badge}</span>
              <h1 className="font-['Cormorant_Garamond'] text-[clamp(40px,6vw,72px)] leading-tight mt-4 mb-6 whitespace-pre-line">
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
            <motion.div initial={{ opacity: 0, x: isRTL ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative">
              <div className="relative mx-auto w-full max-w-[420px] h-[420px] bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-3xl border border-[#D4AF37]/20 shadow-2xl overflow-hidden p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center border border-[#D4AF37]/30">
                    <span className="text-[#D4AF37] text-[10px] font-semibold">Your Logo</span>
                  </div>
                  <div className="h-3 bg-[#D4AF37]/30 rounded w-28" />
                </div>
                <div className="space-y-3">
                  <div className="h-20 bg-[#D4AF37]/10 rounded-xl" />
                  <div className="h-20 bg-[#D4AF37]/10 rounded-xl" />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-24 bg-[#D4AF37]/10 rounded-xl" />
                    <div className="h-24 bg-[#D4AF37]/10 rounded-xl" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why White Label - Sand */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#F5F3F0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#0A1628]/60 mb-4">{t.whyWhiteLabel.badge}</span>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] text-[#0A1628] mb-6">{t.whyWhiteLabel.title}</h2>
              <p className="text-[#1A2B42]/70 leading-relaxed mb-8">
                {t.whyWhiteLabel.description}
              </p>
              <div className="space-y-6">
                {t.whyWhiteLabel.items.map((item, i) => (
                  <div key={i} className={`flex gap-4 ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#D4AF37] font-bold">0{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0A1628] mb-1">{item.title}</h4>
                      <p className="text-[#1A2B42]/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[#0A1628]/10 shadow-lg">
              <div className="space-y-4">
                <div className="h-4 bg-[#D4AF37]/20 rounded w-3/4" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-[#0A1628]/5 rounded" />
                  <div className="h-24 bg-[#0A1628]/5 rounded" />
                </div>
                <div className="h-4 bg-[#D4AF37]/20 rounded w-1/2" />
                <div className="h-32 bg-[#0A1628]/5 rounded" />
                <div className="flex gap-2">
                  <div className="h-10 bg-[#D4AF37]/20 rounded flex-1" />
                  <div className="h-10 bg-[#0A1628]/10 rounded flex-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Navy */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#0A1628]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-4">{t.howItWorks.badge}</span>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-4">{t.howItWorks.title}</h2>
            <p className="text-[#CBC5CE] max-w-2xl mx-auto">{t.howItWorks.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.howItWorks.steps.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="text-6xl font-['Cormorant_Garamond'] text-[#D4AF37]/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[#9CA3AF]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Sand */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#F5F3F0]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#0A1628]/60 mb-4">{t.benefits.badge}</span>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] text-[#0A1628] mb-4">{t.benefits.title}</h2>
            <p className="text-[#1A2B42]/70 max-w-2xl mx-auto">{t.benefits.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.benefits.items.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-[#0A1628]/10 hover:border-[#D4AF37]/30 transition-all text-left shadow-sm"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-[#0A1628]">{benefit.title}</h3>
                <p className="text-[#1A2B42]/70 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List - Navy */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#0A1628]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={isRTL ? 'order-2' : ''}>
              <h2 className="font-['Cormorant_Garamond'] text-[clamp(32px,4vw,48px)] mb-6">{t.features.title}</h2>
              <p className="text-[#CBC5CE] leading-relaxed mb-8">
                {t.features.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {t.features.items.map((feature, i) => (
                  <div key={i} className={`flex items-center gap-3 text-[#CBC5CE] ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <svg className="w-5 h-5 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-2xl p-8 border border-[#D4AF37]/20 ${isRTL ? 'order-1' : ''}`}>
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-sm mb-4">{t.features.package.badge}</div>
                <div className="text-4xl font-bold text-[#F8F9FA]">{t.features.package.price}</div>
                <p className="text-[#9CA3AF] mt-2">{t.features.package.subtitle}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {t.features.package.includes.map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 text-[#CBC5CE] text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => setShowForm(true)} className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
                {t.features.package.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story - Sand */}
      <section className="py-24 px-4 sm:px-6 md:px-[60px] bg-[#F5F3F0]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 sm:p-12 border border-[#0A1628]/10 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-[#D4AF37] text-sm tracking-[0.2em] uppercase mb-4">{t.successStory.badge}</h3>
                <h4 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-[#0A1628] mb-6">{t.successStory.title}</h4>
                <p className="text-[#1A2B42]/70 leading-relaxed mb-6">
                  {t.successStory.quote}
                </p>
                <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#0A1628] font-bold">
                    {t.successStory.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A1628]">{t.successStory.author}</div>
                    <div className="text-sm text-[#1A2B42]/60">{t.successStory.role}</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {t.successStory.stats.map((stat, i) => (
                  <div key={i} className="bg-[#F5F3F0] rounded-xl p-6 text-center border border-[#0A1628]/5">
                    <div className="text-3xl font-bold text-[#D4AF37]">{stat.value}</div>
                    <div className="text-sm text-[#1A2B42]/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Modal -->
      {showForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37]">{t.modal.title}</h3>
              <button onClick={() => setShowForm(false)} className="text-[#9CA3AF] hover:text-[#F8F9FA]">{t.modal.close}</button>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder={t.modal.name} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
                <input type="email" placeholder={t.modal.email} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="tel" placeholder={t.modal.phone} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
                <input type="text" placeholder={t.modal.company} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <select className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#9CA3AF] focus:outline-none focus:border-[#D4AF37]">
                {t.modal.portfolioOptions.map((option, i) => (
                  <option key={i}>{option}</option>
                ))}
              </select>
              <textarea rows={4} placeholder={t.modal.message} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37] resize-none" />
              <button type="submit" className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
                {t.modal.submit}
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Let's Talk Section */}
      <section id="contact" className="py-20 sm:py-32 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)` }} />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-[60px] relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-center mb-12 sm:mb-16`}>
            <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-4 sm:mb-6">{ct.badge}</span>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,5vw,56px)] mb-4 sm:mb-6">{ct.title}</h2>
            <p className="text-base sm:text-xl text-[#CBC5CE] max-w-[600px] mx-auto">{ct.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {ct.methods.map((item, i) => {
              const CardWrapper = i === 0 ? motion.button : motion.a;
              const cardProps = i === 0 
                ? { onClick: () => setShowContactForm(true) } 
                : { href: item.href, target: '_blank', rel: 'noopener noreferrer' };
              
              return (
                <CardWrapper
                  key={i}
                  {...cardProps}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`p-5 rounded-xl text-center transition-all ${i === 0 ? 'bg-[#D4AF37] text-[#0A1628]' : 'bg-[#0A1628] border border-[#D4AF37] text-[#F8F9FA] hover:bg-[#1A2B42]'}`}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-full flex items-center justify-center ${i === 0 ? 'bg-[#0A1628]/10' : 'bg-[#D4AF37]/10'}`}>
                    {item.icon === 'form' ? (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    ) : item.icon === 'email' ? (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    ) : (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold">{item.title}</h3>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37]">{language === 'AR' ? 'نموذج التواصل' : language === 'ID' ? 'Form Kontak' : 'Contact Form'}</h3>
              <button onClick={() => setShowContactForm(false)} className="text-[#9CA3AF] hover:text-[#F8F9FA]">{t.modal.close}</button>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder={language === 'AR' ? 'الاسم الأول' : language === 'ID' ? 'Nama Depan' : 'First Name'} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
                <input type="text" placeholder={language === 'AR' ? 'اسم العائلة' : language === 'ID' ? 'Nama Belakang' : 'Last Name'} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              </div>
              <input type="tel" placeholder={language === 'AR' ? 'الهاتف' : language === 'ID' ? 'Telepon' : 'Phone'} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              <input type="email" placeholder={language === 'AR' ? 'البريد' : language === 'ID' ? 'Email' : 'Email'} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37]" />
              <textarea rows={4} placeholder={language === 'AR' ? 'الرسالة' : language === 'ID' ? 'Pesan' : 'Message'} className="w-full px-4 py-3 bg-[#0A1628] border border-[#D4AF37]/20 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37] resize-none" />
              <button type="submit" className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
                {language === 'AR' ? 'إرسال' : language === 'ID' ? 'Kirim' : 'Submit'}
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
