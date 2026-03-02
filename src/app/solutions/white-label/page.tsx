'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
      badge: 'Why White Label',
      title: 'Scale Without the Headache',
      subtitle: 'Building property management software from scratch takes years and millions. With our white label solution, launch in weeks with a proven platform.',
      items: [
        { title: 'Your Brand Ecosystem, Front & Center', description: 'Don\'t dilute your brand equity with third-party logos. We provide "Invisible Technology" that wraps entirely in your corporate identity.', longDescription: 'Don\'t dilute your brand equity with third-party logos. We provide "Invisible Technology" that wraps entirely in your corporate identity. From the App Store icon to the dashboard color palette and domain name, your tenants and staff interact exclusively with your brand. We build the engine; you get the credit.', image: '/images/white-label/1.png', screenshot: '/images/features/content-mudeer/1.jpg' },
        { title: 'Market-Ready Technology, Zero Risk', description: 'Why spend millions and years building from scratch? Bypass the CAPEX and development risks with our turnkey solution.', longDescription: 'Why spend millions and years building a proprietary platform from scratch? Bypass the massive CAPEX and development risks. Our White Label solution is a turnkey product that allows you to launch a fully mature, bug-tested, and feature-rich digital ecosystem in weeks, not years.', image: '/images/white-label/2.png', screenshot: '/images/features/content-mudeer/2.jpg' },
        { title: 'Monetize Your Digital Real Estate', description: 'Transform your portfolio into a high-margin digital marketplace with full control over the revenue engine.', longDescription: 'Transform your portfolio into a high-margin digital marketplace. With full control over the "Revenue Engine," you can curate exclusive partnerships, sell advertising space to local businesses, or offer premium concierge services under your own banner, creating a recurring revenue stream that goes beyond rent.', image: '/images/white-label/3.png', screenshot: '/images/features/content-mudeer/3.jpg' },
        { title: 'Own the Data, Own the Customer', description: 'Retain full data sovereignty. Harvest deep analytics on tenant behavior and facility usage to drive smarter decisions.', longDescription: 'In the digital age, data is your most valuable asset. Unlike standard SaaS platforms that gatekeep your information, our White Label solution ensures you retain full data sovereignty. Harvest deep analytics on tenant behavior, facility usage, and payment trends to drive smarter investment decisions and increase property valuation.', image: '/images/white-label/4.png', screenshot: '/images/features/content-mudeer/4.jpg' },
        { title: 'Effortless Data Onboarding & Portability', description: 'Simply bulk-upload your existing portfolio data via Excel to get started instantly. Your data remains yours.', longDescription: 'Forget complex, expensive IT integration projects that drag on for months. Our system is designed for immediate deployment. Simply bulk-upload your existing portfolio data via Excel to get started instantly. Need reports? Your data remains yours—easily exportable at any time for your internal accounting or analysis needs with zero friction.', image: '/images/white-label/5.png', screenshot: '/images/features/content-mudeer/5.jpg' },
        { title: 'Enterprise-Class Scalability & Support', description: 'From 100 units to 100,000, our infrastructure grows with you. Our technical team handles updates invisibly.', longDescription: 'Whether you manage 100 units or 100,000, our infrastructure is built to grow with you. We utilize robust, industry-standard cloud architecture to ensure high performance and reliability. While you focus on expanding your portfolio, our dedicated technical team works invisibly in the background to handle updates, patches, and server maintenance.', image: '/images/white-label/6.png', screenshot: '/images/features/content-mudeer/6.jpg' }
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
      badge: 'لماذا العلامة البيضاء',
      title: 'نمو بدون صداع',
      subtitle: 'يستغرق بناء برنامج إدارة العقارات من الصفر سنوات وملايين. مع العلامة البيضاء، أطلق في أسابيع مع منصة مثبتة.',
      items: [
        { title: 'نظام العلامة التجارية الخاصة بك في المقدمة', description: 'لا تخفف من قيمة علامتك التجارية. نقدم "تقنية غير مرئية" ملفوفة بالكامل في هويتك.', longDescription: 'لا تخفف من قيمة علامتك التجارية مع شعارات جهات خارجية. نحن نقدم "تقنية غير مرئية" ملفوفة بالكامل في هويتك المؤسسية. من أيقونة متجر التطبيقات إلى لوحة الألوان واسم النطاق، يتفاعل مستأجروك وموظفوك حصريًا مع علامتك التجارية. نحن نبني المحرك؛ وأنت تحصل على الفضل.', image: '/images/white-label/1.png', screenshot: '/images/white-label/1.png' },
        { title: 'تقنية جاهزة للسوق، صفر مخاطر', description: 'لماذا تنفق الملايين والسنوات في البناء؟ تجاوز مخاطر رأس المال والتطوير مع حلنا الجاهز.', longDescription: 'لماذا تنفق الملايين والسنوات في بناء منصة ملكية من الصفر؟ تجاوز مخاطر رأس المال والتطوير الضخمة. حل العلامة البيضاء لدينا هو منتج جاهز يتيح لك إطلاق نظام بيئي رقمي ناضج ومجرب وغني بالميزات في أسابيع، وليس سنوات.', image: '/images/white-label/2.png', screenshot: '/images/white-label/2.png' },
        { title: 'تحقيق الدخل من عقاراتك الرقمية', description: 'حوّل محفظتك إلى سوق رقمي هامشي مرتفع مع التحكم الكامل في محرك الإيرادات.', longDescription: 'حوّل محفظتك إلى سوق رقمي هامشي مرتفع. مع التحكم الكامل في "محرك الإيرادات"، يمكنك اختيار شراكات حصرية، وبيع مساحة إعلانية للشركات المحلية، أو تقديم خدمات كونسيرج متميزة تحت رايتك الخاصة، مما يخلق تدفقًا متكررًا للإيرادات يتجاوز الإيجار.', image: '/images/white-label/3.png', screenshot: '/images/white-label/3.png' },
        { title: 'امتلك البيانات، امتلك العميل', description: 'احتفظ بالسيادة الكاملة على البيانات. احصد تحليلات عميقة حول سلوك المستأجرين لاتخاذ قرارات أكثر ذكاءً.', longDescription: 'في عصر رقمي، البيانات هي أصلك الأكثر قيمة. على عكس منصات SaaS القياسية التي تحتفظ بمعلوماتك، يضمن حل العلامة البيضاء لدينا احتفاظك بالسيادة الكاملة على البيانات. احصد تحليلات عميقة حول سلوك المستأجرين واستخدام المرافق واتجاهات الدفع لدفع قرارات استثمارية أكثر ذكاءً وزيادة تقييم العقار.', image: '/images/white-label/4.png', screenshot: '/images/white-label/4.png' },
        { title: 'تسجيل بيانات سهل وقابلية النقل', description: 'ما عليك سوى تحميل بيانات محفظتك الحالية بكميات كبيرة عبر Excel للبدء فورًا. بياناتك تبقى لك.', longDescription: 'انسَ مشاريع تكامل IT المعقدة والمكلفة التي تمتد لأشهر. تم تصميم نظامنا للنشر الفوري. ما عليك سوى تحميل بيانات محفظتك الحالية بكميات كبيرة عبر Excel للبدء فورًا. هل تحتاج تقارير؟ بياناتك تبقى لك—قابلة للتصدير بسهولة في أي وقت لاحتياجات محاسبتك أو تحليلاتك الداخلية بدون احتكاك.', image: '/images/white-label/5.png', screenshot: '/images/white-label/5.png' },
        { title: 'قابلية التوسع والدعم على مستوى المؤسسات', description: 'من 100 وحدة إلى 100,000، بنيتنا التحتية تنمو معك. فريقنا التقني يتعامل مع التحديثات بشكل غير مرئي.', longDescription: 'سواء كنت تدير 100 وحدة أو 100,000، بنيتنا التحتية مبنية للنمو معك. نحن نستخدم بنية سحابية قوية وقياسية في الصناعة لضمان الأداء والموثوقية العاليين. بينما تركز على توسيع محفظتك، يعمل فريقنا التقني المخصص في الخلفية بشكل غير مرئي للتعامل مع التحديثات والتصحيحات وصيانة الخادم.', image: '/images/white-label/6.png', screenshot: '/images/white-label/6.png' }
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
      badge: 'Mengapa White Label',
      title: 'Skalakan Tanpa Sakit Kepala',
      subtitle: 'Membangun software manajemen properti dari nol membutuhkan waktu bertahun-tahun dan jutaan dolar. Dengan white label, luncurkan dalam minggu dengan platform terbukti.',
      items: [
        { title: 'Ekosistem Merek Anda di Pusat Perhatian', description: 'Jangan mencairkan ekuitas merek Anda dengan logo pihak ketiga. Kami sediakan "Teknologi Tak Terlihat" yang seluruhnya dibungkus dalam identitas Anda.', longDescription: 'Jangan mencairkan ekuitas merek Anda dengan logo pihak ketiga. Kami menyediakan "Teknologi Tak Terlihat" yang seluruhnya dibungkus dalam identitas perusahaan Anda. Dari ikon App Store hingga palet warna dashboard dan nama domain, penyewa dan staf Anda berinteraksi secara eksklusif dengan merek Anda. Kami membangun mesinnya; Anda mendapatkan kreditnya.', image: '/images/white-label/1.png', screenshot: '/images/white-label/1.png' },
        { title: 'Teknologi Siap Pasar, Risiko Nol', description: 'Mengapa menghabiskan jutaan dan tahunan membangun dari nol? Lewati risiko CAPEX dan pengembangan dengan solusi siap pakai kami.', longDescription: 'Mengapa menghabiskan jutaan dan tahunan membangun platform proprietary dari nol? Lewati risiko CAPEX dan pengembangan yang masif. Solusi White Label kami adalah produk siap pakai yang memungkinkan Anda meluncurkan ekosistem digital yang matang, teruji, dan kaya fitur dalam hitungan minggu, bukan tahun.', image: '/images/white-label/2.png', screenshot: '/images/white-label/2.png' },
        { title: 'Monetisasi Real Estate Digital Anda', description: 'Ubah portofolio Anda menjadi marketplace digital margin tinggi dengan kontrol penuh atas mesin pendapatan.', longDescription: 'Ubah portofolio Anda menjadi marketplace digital margin tinggi. Dengan kontrol penuh atas "Mesin Pendapatan", Anda dapat mengkurasi kemitraan eksklusif, menjual ruang iklan ke bisnis lokal, atau menawarkan layanan concierge premium di bawah spanduk Anda sendiri, menciptakan aliran pendapatan berulang yang melampaui sewa.', image: '/images/white-label/3.png', screenshot: '/images/white-label/3.png' },
        { title: 'Kuasai Data, Kuasai Pelanggan', description: 'Pertahankan kedaulatan data penuh. Panen analitik mendalam tentang perilaku penyewa untuk mendorong keputusan yang lebih cerdas.', longDescription: 'Di era digital, data adalah aset Anda yang paling berharga. Berbeda dengan platform SaaS standar yang menyimpan informasi Anda, solusi White Label kami memastikan Anda mempertahankan kedaulatan data penuh. Panen analitik mendalam tentang perilaku penyewa, penggunaan fasilitas, dan tren pembayaran untuk mendorong keputusan investasi yang lebih cerdas dan meningkatkan valuasi properti.', image: '/images/white-label/4.png', screenshot: '/images/white-label/4.png' },
        { title: 'Onboarding Data & Portabilitas Tanpa Usaha', description: 'Cukup unggah data portofolio Anda yang ada secara massal via Excel untuk memulai secara instan. Data tetap menjadi milik Anda.', longDescription: 'Lupakan proyek integrasi IT yang kompleks dan mahal yang berlangsung berbulan-bulan. Sistem kami dirancang untuk deployment segera. Cukup unggah data portofolio Anda yang ada secara massal via Excel untuk memulai secara instan. Butuh laporan? Data Anda tetap menjadi milik Anda—mudah diekspor kapan saja untuk kebutuhan akuntansi atau analisis internal Anda tanpa gesekan.', image: '/images/white-label/5.png', screenshot: '/images/white-label/5.png' },
        { title: 'Skalabilitas & Dukungan Kelas Perusahaan', description: 'Dari 100 unit hingga 100.000+, infrastruktur kami tumbuh bersama Anda. Tim teknis kami menangani pembaruan secara tak terlihat.', longDescription: 'Baik Anda mengelola 100 unit atau 100.000+, infrastruktur kami dibangun untuk tumbuh bersama Anda. Kami menggunakan arsitektur cloud yang kuat dan standar industri untuk memastikan performa dan keandalan tinggi. Sementara Anda fokus memperluas portofolio, tim teknis khusus kami bekerja di latar belakang secara tak terlihat untuk menangani pembaruan, patch, dan pemeliharaan server.', image: '/images/white-label/6.png', screenshot: '/images/white-label/6.png' }
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
                <button onClick={() => setShowContactForm(true)} className="px-8 py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
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
                className="bg-white rounded-2xl overflow-hidden border border-[#0A1628]/10 hover:border-[#D4AF37]/30 transition-all text-left shadow-sm group"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image 
                    src={benefit.image} 
                    alt={benefit.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-[#0A1628] group-hover:text-[#D4AF37] transition-colors">{benefit.title}</h3>
                  <p className="text-[#1A2B42]/70 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
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
              <button onClick={() => setShowContactForm(true)} className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold rounded-lg hover:bg-[#E8C968] transition-colors">
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

      {/* Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37]">{t.modal.title}</h3>
              <button onClick={() => setShowContactForm(false)} className="text-[#9CA3AF] hover:text-[#F8F9FA]">{t.modal.close}</button>
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
