'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { SiteFooter } from '@/components/SiteFooter';
import { useLanguage } from '@/lib/LanguageContext';

const content = {
  EN: {
    hero: {
      badge: 'The Mudeer Platform',
      title: 'Command Center for Property Managers',
      description: 'A comprehensive dashboard that puts you in complete control of your portfolio. From financial oversight to tenant relations, manage every aspect of your properties with precision and ease.',
      cta1: 'Request Executive Demo',
      cta2: 'Contact Sales'
    },
    stats: [
      { value: '40%', label: 'Time Saved' },
      { value: '98%', label: 'Collection Rate' },
      { value: '24/7', label: 'Access' }
    ],
    featuresTitle: 'Platform Features',
    featuresSubtitle: 'Powerful tools designed to elevate your property management operations.',
    features: [
      { 
        title: 'The "Mudeer" Dashboard', 
        description: 'Gain a powerful, centralized command center that puts your entire portfolio on the map.',
        longDescription: 'Gain a powerful, centralized command center that puts your entire portfolio on the map. From filtering properties by street to monitoring real-time ticket status—maximum oversight and intuitive navigation for every unit you manage. View occupancy rates, track revenue trends, and access key metrics updated in real-time. The dashboard provides a bird\'s eye view of your entire operation, allowing you to drill down into specific properties or units with just a few clicks.',
        image: '/images/features/dashboard.png',
        screenshot: '/images/features/content-mudeer/Feature_1.png'
      },
      { 
        title: 'Unified Communication Hub', 
        description: 'End the email fragmentation. Channel all tenant inquiries into one central inbox.',
        longDescription: 'End the email fragmentation. Channel all tenant inquiries, complaints, and requests into one central inbox. Whether it is a noise complaint or a contract question, handle every interaction from one place to boost response times and tenant satisfaction. Our unified inbox organizes conversations by property and unit, ensuring you never miss an important message. Automated responses and templates help you reply faster while maintaining a professional tone.',
        image: '/images/features/communication.png',
        screenshot: '/images/features/content-mudeer/Feature_2.png'
      },
      { 
        title: 'Dynamic Billboard & Revenue Engine', 
        description: 'Transform your communication channel into a revenue stream.',
        longDescription: 'Transform your communication channel into a revenue stream. Use the digital notice board to push upscale advertising, new property developments, or exclusive promotions directly to resident smartphones. Reach your existing client base instantly with the touch of a button. Monetize your tenant network by offering premium ad placements to local businesses, creating an additional income source for your properties.',
        image: '/images/features/revenue.png',
        screenshot: '/images/features/content-mudeer/feature_3.png'
      },
      { 
        title: 'Intelligent Ticket & Damage Workflow', 
        description: 'Turn chaos into clarity with our smart "Traffic Light" prioritization system.',
        longDescription: 'Turn chaos into clarity with our smart "Traffic Light" prioritization system. We automate the organization of the damage lifecycle—collecting structured data, photos, and message history into a clean, professional audit trail ready to file or share. Tenants can submit requests with photos, you can assign vendors, track progress, and maintain complete documentation for compliance and insurance purposes.',
        image: '/images/features/workflow.png',
        screenshot: '/images/features/content-mudeer/feature_4.png'
      },
      { 
        title: 'The Paperless Document Vault', 
        description: 'Digitize your entire filing cabinet with secure cloud storage.',
        longDescription: 'Digitize your entire filing cabinet. Securely upload, archive, and retrieve lease agreements, utility bills, and house rules instantly. Our smart search replaces dusty folders, saving you time while supporting a sustainable, green office strategy. Advanced OCR technology makes all documents searchable, and automatic backups ensure you never lose important paperwork again.',
        image: '/images/features/documents.png',
        screenshot: '/images/features/content-mudeer/feature_5.png'
      },
      { 
        title: 'Internal Task & Vendor Organization', 
        description: 'Assign tickets to staff or external providers directly within the dashboard.',
        longDescription: 'Stop chasing loose ends. Assign specific tickets to internal staff or external providers—like roofers or electricians—directly within the dashboard. Keep your database of contacts, categories, and job statuses in one transparent interface. Track vendor performance, manage service contracts, and ensure nothing falls through the cracks with automated reminders and status updates.',
        image: '/images/features/organization.png',
        screenshot: '/images/features/content-mudeer/feature_6.png'
      }
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
      title: 'Request Executive Demo',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      submit: 'Submit',
      close: '✕'
    },
    footer: '© 2025 The Mudeer. All rights reserved.'
  },
  AR: {
    hero: {
      badge: 'منصة المدير',
      title: 'مركز القيادة لمديري العقارات',
      description: 'لوحة تحكم شاملة تمنحك السيطرة الكاملة على محفظتك. من الإشراف المالي إلى علاقات المستأجرين، أدِر كل جانب من جوانب عقاراتك بدقة وسهولة.',
      cta1: 'طلب عرض تنفيذي',
      cta2: 'التواصل مع المبيعات'
    },
    stats: [
      { value: '40%', label: 'توفير الوقت' },
      { value: '98%', label: 'معدل التحصيل' },
      { value: '24/7', label: 'وصول' }
    ],
    featuresTitle: 'ميزات المنصة',
    featuresSubtitle: 'أدوات قوية مصممة لتطوير عمليات إدارة العقارات لديك.',
    features: [
      { 
        title: 'لوحة تحكم "المدير"', 
        description: 'احصل على مركز قيادة مركزي قوي يضع محفظتك بأكملها على الخريطة.',
        longDescription: 'احصل على مركز قيادة مركزي قوي يضع محفظتك بأكملها على الخريطة. من تصفية العقارات حسب الشارع إلى مراقبة حالة التذاكر في الوقت الفعلي—إشراف أقصى وتنقل بديهي لكل وحدة تديرها. اعرض معدلات الإشغال، وتتبع اتجاهات الإيرادات، واستخدم المقاييس الرئيسية المحدثة في الوقت الفعلي. توفر لوحة التحكم نظرة شاملة على عملياتك بأكملها، مما يسمح لك بالتعمق في عقارات أو وحدات محددة بنقرات قليلة.',
        image: '/images/features/dashboard.png',
        screenshot: '/images/features/content-mudeer/Feature_1.png'
      },
      { 
        title: 'مركز التواصل الموحد', 
        description: 'انهِ تجزئة البريد الإلكتروني. وجه جميع استفسارات المستأجرين إلى صندوق وارد مركزي واحد.',
        longDescription: 'انهِ تجزئة البريد الإلكتروني. وجه جميع استفسارات المستأجرين وشكاواهم وطلباتهم إلى صندوق وارد مركزي واحد. سواء كانت شكوى ضوضاء أو سؤال عقد، تعامل مع كل تفاعل من مكان واحد لتعزيز أوقات الاستجابة ورضا المستأجرين. ينظم صندوق الوارد الموحد المحادثات حسب العقار والوحدة، مما يضمن عدم تفويتك لأي رسالة مهمة. الردود الآلية والقوالب تساعدك على الرد بشكل أسرع مع الحفاظ على نبرة احترافية.',
        image: '/images/features/communication.png',
        screenshot: '/images/features/content-mudeer/Feature_2.png'
      },
      { 
        title: 'لوحة الإعلانات والإيرادات', 
        description: 'حول قناتك التواصلية إلى مصدر دخل.',
        longDescription: 'حول قناتك التواصلية إلى مصدر دخل. استخدم لوحة الإعلانات الرقمية لدفع الإعلانات الراقية والتطويرات العقارية الجديدة أو العروض الحصرية مباشرة إلى هواتف السكان. الوصول إلى قاعدة عملائك الحالية على الفور بلمسة زر. حقق دخلاً إضافياً من شبكة المستأجرين الخاصة بك من خلال تقديم مواضع إعلانية متميزة للشركات المحلية.',
        image: '/images/features/revenue.png',
        screenshot: '/images/features/content-mudeer/feature_3.png'
      },
      { 
        title: 'سير عمل التذاكر الذكي', 
        description: 'حول الفوضى إلى وضوح مع نظام الأولوية الذكي "إشارة المرور".',
        longDescription: 'حول الفوضى إلى وضوح مع نظام الأولوية الذكي "إشارة المرور". نحن نؤتمت تنظيم دورة حياة الأضرار—جمع البيانات المنظمة والصور وتاريخ الرسائل في سجل تدقيق احترافي نظيف جاهز للتقديم أو المشاركة. يمكن للمستأجرين تقديم الطلبات مع الصور، ويمكنك تعيين البائعين، وتتبع التقدم، والحفاظ على الوثائق الكاملة للامتثال وأغراض التأمين.',
        image: '/images/features/workflow.png',
        screenshot: '/images/features/content-mudeer/feature_4.png'
      },
      { 
        title: 'خزنة المستندات الرقمية', 
        description: 'قم برقمنة خزانة ملفاتك بأكملها مع التخزين السحابي الآمن.',
        longDescription: 'رقّم خزانة ملفاتك بأكملها. قم برفع وأرشفة واسترجاع اتفاقيات الإيجار وفواتير الخدمات وقواعد المنزل بشكل آمن على الفور. يستبدل بحثنا الذكي الملفات الغبارية، مما يوفر وقتك مع دعم استراتيجية مكتب خضراء مستدامة. تقنية التعرف الضوئي على الحروب المتقدمة تجعل جميع المستندات قابلة للبحث، والنسخ الاحتياطي التلقائي يضمن عدم فقدانك للأوراق المهمة مرة أخرى.',
        image: '/images/features/documents.png',
        screenshot: '/images/features/content-mudeer/feature_5.png'
      },
      { 
        title: 'تنظيم المهام والموردين', 
        description: 'عيّن التذاكر للموظفين أو مقدمي الخدمات الخارجيين مباشرة داخل لوحة التحكم.',
        longDescription: 'توقف عن مطاردة الأمور المعلقة. عيّن تذاكر محددة للموظفين الداخليين أو مقدمي الخدمات الخارجيين—مثل ال roofers أو الكهربائيين—مباشرة داخل لوحة التحكم. احتفظ بقاعدة بيانات جهات الاتصال والفئات وحالات العمل في واجهة شفافة واحدة. تتبع أداء البائعين، وإدارة عقود الخدمة، وضمان عدم سقوط أي شيء من الشقوق مع التذكيرات الآلية وتحديثات الحالة.',
        image: '/images/features/organization.png',
        screenshot: '/images/features/content-mudeer/feature_6.png'
      }
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
      button1: 'طلب عرض تنفيذي',
      button2: 'العودة للرئيسية'
    },
    modal: {
      title: 'طلب عرض تنفيذي',
      name: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      submit: 'إرسال',
      close: '✕'
    },
    footer: '© 2025 المدير. جميع الحقوق محفوظة.'
  },
  ID: {
    hero: {
      badge: 'Platform The Mudeer',
      title: 'Pusat Komando untuk Manajer Properti',
      description: 'Dashboard komprehensif yang memberi Anda kendali penuh atas portofolio Anda. Dari pengawasan keuangan hingga hubungan penyewa, kelola setiap aspek properti Anda dengan presisi dan mudah.',
      cta1: 'Minta Demo Eksekutif',
      cta2: 'Hubungi Penjualan'
    },
    stats: [
      { value: '40%', label: 'Hemat Waktu' },
      { value: '98%', label: 'Tingkat Koleksi' },
      { value: '24/7', label: 'Akses' }
    ],
    featuresTitle: 'Fitur Platform',
    featuresSubtitle: 'Alat canggih yang dirancang untuk meningkatkan operasi manajemen properti Anda.',
    features: [
      { 
        title: 'Dashboard "The Mudeer"', 
        description: 'Dapatkan pusat komando terpusat yang powerful yang menempatkan seluruh portofolio Anda pada peta.',
        longDescription: 'Dapatkan pusat komando terpusat yang powerful yang menempatkan seluruh portofolio Anda pada peta. Dari menyaring properti berdasarkan jalan hingga memantau status tiket real-time—pengawasan maksimum dan navigasi intuitif untuk setiap unit yang Anda kelola. Lihat tingkat hunian, lacak tren pendapatan, dan akses metrik kunci yang diperbarui secara real-time. Dashboard menyediakan pandangan mata burung atas seluruh operasi Anda, memungkinkan Anda untuk mendalami properti atau unit tertentu dengan beberapa klik.',
        image: '/images/features/dashboard.png',
        screenshot: '/images/features/content-mudeer/Feature_1.png'
      },
      { 
        title: 'Pusat Komunikasi Terpadu', 
        description: 'Akhiri fragmentasi email. Salurkan semua pertanyaan penyewa ke satu inbox terpusat.',
        longDescription: 'Akhiri fragmentasi email. Salurkan semua pertanyaan, keluhan, dan permintaan penyewa ke satu inbox terpusat. Apakah itu keluhan kebisingan atau pertanyaan kontrak, tangani setiap interaksi dari satu tempat untuk meningkatkan waktu respons dan kepuasan penyewa. Inbox terpadu kami mengatur percakapan berdasarkan properti dan unit, memastikan Anda tidak pernah melewatkan pesan penting. Respons otomatis dan template membantu Anda membalas lebih cepat sambil menjaga nada profesional.',
        image: '/images/features/communication.png',
        screenshot: '/images/features/content-mudeer/Feature_2.png'
      },
      { 
        title: 'Billboard Dinamis & Mesin Pendapatan', 
        description: 'Ubah saluran komunikasi Anda menjadi aliran pendapatan.',
        longDescription: 'Ubah saluran komunikasi Anda menjadi aliran pendapatan. Gunakan papan pengumuman digital untuk mendorong iklan mewah, pengembangan properti baru, atau promosi eksklusif langsung ke smartphone penghuni. Jangkau basis klien Anda yang ada secara instan dengan sentuhan tombol. Monetisasi jaringan penyewa Anda dengan menawarkan penempatan iklan premium untuk bisnis lokal, menciptakan sumber pendapatan tambahan untuk properti Anda.',
        image: '/images/features/revenue.png',
        screenshot: '/images/features/content-mudeer/feature_3.png'
      },
      { 
        title: 'Alur Kerja Tiket & Kerusakan Cerdas', 
        description: 'Ubah kekacauan menjadi kejelasan dengan sistem prioritas "Lampu Lalu Lintas" kami.',
        longDescription: 'Ubah kekacauan menjadi kejelasan dengan sistem prioritas "Lampu Lalu Lintas" kami. Kami mengotomatiskan organisasi siklus hidup kerusakan—mengumpulkan data terstruktur, foto, dan riwayat pesan ke dalam jejak audit profesional yang bersih dan siap diajukan. Penyewa dapat mengirimkan permintaan dengan foto, Anda dapat menetapkan vendor, melacak kemajuan, dan memelihara dokumentasi lengkap untuk kepatuhan dan tujuan asuransi.',
        image: '/images/features/workflow.png',
        screenshot: '/images/features/content-mudeer/feature_4.png'
      },
      { 
        title: 'Ruang Dokumen Tanpa Kertas', 
        description: 'Digitalisasi seluruh lemari file Anda dengan penyimpanan cloud yang aman.',
        longDescription: 'Digitalisasi seluruh lemari file Anda. Unggah, arsipkan, dan ambil perjanjian sewa, tagihan utilitas, dan aturan rumah secara instan dan aman. Pencarian cerdas kami menggantikan folder berdebu, menghemat waktu Anda sambil mendukung strategi kantor hijau yang berkelanjutan. Teknologi OCR canggih membuat semua dokumen dapat dicari, dan cadangan otomatis memastikan Anda tidak pernah kehilangan dokumen penting lagi.',
        image: '/images/features/documents.png',
        screenshot: '/images/features/content-mudeer/feature_5.png'
      },
      { 
        title: 'Organisasi Tugas & Vendor Internal', 
        description: 'Tetapkan tiket ke staf atau penyedia eksternal langsung dalam dashboard.',
        longDescription: 'Berhenti mengejar ujung yang longgar. Tetapkan tiket tertentu ke staf internal atau penyedia eksternal—seperti tukang atap atau ahli listrik—langsung dalam dashboard. Pertahankan database kontak, kategori, dan status pekerjaan Anda dalam satu antarmuka yang transparan. Lacak kinerja vendor, kelola kontrak layanan, dan pastikan tidak ada yang terlewat dengan pengingat otomatis dan pembaruan status.',
        image: '/images/features/organization.png',
        screenshot: '/images/features/content-mudeer/feature_6.png'
      }
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
      button1: 'Minta Demo Eksekutif',
      button2: 'Kembali ke Beranda'
    },
    modal: {
      title: 'Minta Demo Eksekutif',
      name: 'Nama Lengkap',
      email: 'Alamat Email',
      phone: 'Nomor Telepon',
      submit: 'Kirim',
      close: '✕'
    },
    footer: '© 2025 The Mudeer. Hak cipta dilindungi.'
  }
};

export default function PlatformPage() {
  const { language } = useLanguage();
  const t = content[language];
  const isRTL = language === 'AR';
  
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<typeof t.features[0] | null>(null);
  const [activeDashboardSlide, setActiveDashboardSlide] = useState(0);
  const selectedFeatureIndex = selectedFeature ? t.features.findIndex((feature) => feature.title === selectedFeature.title) : -1;

  const openContact = () => setShowContactForm(true);

  const dashboardFeaturePoints = {
    EN: [
      'Your entire portfolio, mapped and organized in one powerful command center — no more switching between tabs.',
      'Filter properties by street, zone, or folder and jump to any unit in seconds.',
      'Monitor occupancy rates, ticket status, and revenue trends updated in real-time.',
      'Switch between Grid View and Table View to match the way you and your team work.'
    ],
    AR: [
      'محفظتك كاملة، منظمة في مركز قيادة واحد قوي — لا مزيد من التنقل بين التبويبات.',
      'صفّ العقارات حسب الشارع أو المنطقة أو المجلد وانتقل إلى أي وحدة في ثوانٍ.',
      'تابع معدلات الإشغال وحالة التذاكر واتجاهات الإيرادات محدّثة بالوقت الفعلي.',
      'تنقل بين عرض الشبكة وعرض الجدول بحسب أسلوب عملك وفريقك.'
    ],
    ID: [
      'Seluruh portofolio Anda, terorganisir dalam satu pusat komando — tidak perlu beralih tab.',
      'Filter properti berdasarkan jalan, zona, atau folder dan langsung ke unit mana pun dalam hitungan detik.',
      'Pantau tingkat hunian, status tiket, dan tren pendapatan yang diperbarui secara real-time.',
      'Beralih antara Grid View dan Table View sesuai cara kerja Anda dan tim.'
    ]
  }[language];

  const communicationFeaturePoints = {
    EN: [
      'One inbox for every tenant message — no scattered emails, no missed conversations.',
      'Attach contracts and files directly in chat so context is always in the same thread.',
      'Resident name, unit, floor, and topic visible at a glance on every conversation.',
      'Share, download PDF, or print any conversation record with a single click.'
    ],
    AR: [
      'صندوق وارد واحد لكل رسالة مستأجر — لا رسائل متفرقة، لا محادثات فائتة.',
      'أرفق العقود والملفات مباشرة في الدردشة حتى يبقى السياق في نفس الخيط دائماً.',
      'اسم المستأجر والوحدة والطابق والموضوع ظاهر بنظرة واحدة في كل محادثة.',
      'شارك أو حمّل PDF أو اطبع أي سجل محادثة بنقرة واحدة.'
    ],
    ID: [
      'Satu inbox untuk setiap pesan penyewa — tidak ada email berserakan, tidak ada percakapan terlewat.',
      'Lampirkan kontrak dan file langsung di chat agar konteks selalu berada dalam satu thread.',
      'Nama penghuni, unit, lantai, dan topik terlihat sekilas di setiap percakapan.',
      'Share, download PDF, atau cetak rekaman percakapan apa pun hanya dengan satu klik.'
    ]
  }[language];

  const feature3Points = {
    EN: [
      'Turn your property\'s communication channel into a direct revenue stream.',
      'Push promotions, new property launches, or exclusive deals straight to resident smartphones.',
      'Monetize your tenant network with premium ad placements for local brands and businesses.',
      'Reach every resident instantly — no third-party platforms, no extra costs.'
    ],
    AR: [
      'حوّل قناة التواصل في عقاراتك إلى مصدر دخل مباشر.',
      'أرسل العروض الترويجية والإطلاقات الجديدة مباشرة إلى هواتف السكان.',
      'حقق دخلاً إضافياً بمساحات إعلانية مميزة للعلامات التجارية والشركات المحلية.',
      'اوصل إلى كل ساكن فوراً — بدون منصات خارجية، بدون تكاليف إضافية.'
    ],
    ID: [
      'Ubah saluran komunikasi properti Anda menjadi aliran pendapatan langsung.',
      'Kirim promosi, peluncuran properti baru, atau penawaran eksklusif langsung ke smartphone penghuni.',
      'Monetisasi jaringan penyewa Anda dengan penempatan iklan premium untuk brand dan bisnis lokal.',
      'Jangkau setiap penghuni secara instan — tanpa platform pihak ketiga, tanpa biaya tambahan.'
    ]
  }[language];

  const feature4Points = {
    EN: [
      'Every repair request logged, assigned, and tracked automatically from submission to resolution.',
      'Traffic-light prioritization keeps urgent issues front and center — no guesswork.',
      'Tenants submit photos; managers assign vendors and monitor progress — all in one flow.',
      'A clean audit trail ready for insurance, compliance, or property handover at any time.'
    ],
    AR: [
      'كل طلب إصلاح مسجل ومعين ومتتبع تلقائياً من التقديم حتى الحل.',
      'نظام إشارة المرور يُبقي المشكلات العاجلة في المقدمة دائماً — بدون تخمين.',
      'المستأجر يرفق الصور، والمدير يعيّن الموردين ويتابع التقدم — كل ذلك في تدفق واحد.',
      'سجل تدقيق احترافي جاهز للتأمين والامتثال وتسليم العقارات في أي وقت.'
    ],
    ID: [
      'Setiap permintaan perbaikan dicatat, ditugaskan, dan dilacak otomatis dari pengajuan hingga penyelesaian.',
      'Prioritisasi traffic-light menjaga isu mendesak tetap di garis terdepan — tanpa tebak-tebakan.',
      'Penyewa kirim foto; manajer tetapkan vendor dan pantau progres — semua dalam satu alur.',
      'Jejak audit profesional siap untuk asuransi, kepatuhan, atau serah terima properti kapan saja.'
    ]
  }[language];

  const feature5Points = {
    EN: [
      'Every lease, utility bill, and house rule — archived, searchable, and retrievable in seconds.',
      'Smart search replaces dusty folders and eliminates manual filing forever.',
      'Automatic cloud backup keeps your records safe and always accessible, anywhere.',
      'Support a paperless office strategy while staying fully compliant and organized.'
    ],
    AR: [
      'كل عقد إيجار وفاتورة وقاعدة منزلية — مؤرشفة وقابلة للبحث والاسترجاع في ثوانٍ.',
      'البحث الذكي يحل محل الملفات الغبارية ويتخلص من الأرشفة اليدوية إلى الأبد.',
      'نسخ احتياطي سحابي تلقائي يحافظ على سجلاتك آمنة وفي متناولك من أي مكان.',
      'ادعم استراتيجية مكتب بلا ورق مع البقاء منظماً ومتوافقاً تماماً.'
    ],
    ID: [
      'Setiap kontrak sewa, tagihan, dan aturan rumah — diarsipkan, dapat dicari, dan diambil dalam hitungan detik.',
      'Pencarian cerdas menggantikan folder berdebu dan menghilangkan pengarsipan manual selamanya.',
      'Backup cloud otomatis menjaga catatan Anda aman dan selalu dapat diakses dari mana saja.',
      'Dukung strategi kantor tanpa kertas sambil tetap terorganisir dan sepenuhnya patuh.'
    ]
  }[language];

  const feature6Points = {
    EN: [
      'Assign maintenance tickets to the right staff or vendor directly from the dashboard.',
      'Track every job — open, in progress, or closed — without chasing anyone.',
      'Maintain a clean vendor database with contacts, service categories, and performance history.',
      'Automated reminders ensure no task ever slips through the cracks.'
    ],
    AR: [
      'عيّن تذاكر الصيانة للموظف أو المورد المناسب مباشرة من لوحة التحكم.',
      'تابع كل مهمة — مفتوحة أو قيد التنفيذ أو مغلقة — دون مطاردة أحد.',
      'احتفظ بقاعدة موردين منظمة مع جهات الاتصال وفئات الخدمة وسجل الأداء.',
      'تذكيرات تلقائية تضمن عدم ضياع أي مهمة أو إغفالها.'
    ],
    ID: [
      'Tetapkan tiket pemeliharaan ke staf atau vendor yang tepat langsung dari dashboard.',
      'Lacak setiap pekerjaan — terbuka, sedang dikerjakan, atau selesai — tanpa mengejar siapa pun.',
      'Pertahankan database vendor yang tertata dengan kontak, kategori layanan, dan riwayat kinerja.',
      'Pengingat otomatis memastikan tidak ada tugas yang pernah terlewat atau terlupakan.'
    ]
  }[language];

  const dashboardSlides = {
    EN: [
      { src: '/images/features/content-mudeer/Feature_1.png', label: 'Grid View' },
      { src: '/images/features/content-mudeer/Feature_1_slide.png', label: 'Table View' }
    ],
    AR: [
      { src: '/images/features/content-mudeer/Feature_1.png', label: 'عرض الشبكة' },
      { src: '/images/features/content-mudeer/Feature_1_slide.png', label: 'عرض الجدول' }
    ],
    ID: [
      { src: '/images/features/content-mudeer/Feature_1.png', label: 'Grid View' },
      { src: '/images/features/content-mudeer/Feature_1_slide.png', label: 'Table View' }
    ]
  }[language];

  const sliderNavText = {
    EN: { prev: 'Prev', next: 'Next' },
    AR: { prev: 'السابق', next: 'التالي' },
    ID: { prev: 'Sebelumnya', next: 'Berikutnya' }
  }[language];

  // Contact Section Content
  const contactContent = {
    EN: {
      badge: "Let's Talk",
      title: 'Ready to Transform Your Operations?',
      subtitle: 'Choose your preferred way to connect with our team.',
      methods: [
        { icon: 'form', title: 'Contact Form', description: 'Fill out our form and we will get back to you.', action: 'Fill Form' },
        { icon: 'email', title: 'Email', description: 'Reach out for detailed inquiries.', action: 'Send Email', href: 'mailto:hello@themudeer.com' },
        { icon: 'whatsapp', title: 'WhatsApp', description: 'Chat with us directly on WhatsApp.', action: 'Chat Now', href: 'https://wa.me/971501234567' },
      ]
    },
    AR: {
      badge: 'دعنا نتحدث',
      title: 'مستعد لتحويل عملياتك؟',
      subtitle: 'اختر طريقتك المفضلة للتواصل مع فريقنا.',
      methods: [
        { icon: 'form', title: 'نموذج التواصل', description: 'املأ النموذج وسنرد عليك.', action: 'املأ النموذج' },
        { icon: 'email', title: 'البريد', description: 'تواصل للاستفسارات التفصيلية.', action: 'إرسال بريد', href: 'mailto:hello@themudeer.com' },
        { icon: 'whatsapp', title: 'واتساب', description: 'دردش معنا مباشرة على واتساب.', action: 'دردش الآن', href: 'https://wa.me/971501234567' },
      ]
    },
    ID: {
      badge: 'Mari Bicara',
      title: 'Siap Mengubah Operasi Anda?',
      subtitle: 'Pilih cara pilihan Anda untuk terhubung dengan tim kami.',
      methods: [
        { icon: 'form', title: 'Form Kontak', description: 'Isi formulir kami dan kami akan menghubungi Anda.', action: 'Isi Formulir' },
        { icon: 'email', title: 'Email', description: 'Hubungi kami untuk pertanyaan detail.', action: 'Kirim Email', href: 'mailto:hello@themudeer.com' },
        { icon: 'whatsapp', title: 'WhatsApp', description: 'Chat langsung dengan kami di WhatsApp.', action: 'Chat Sekarang', href: 'https://wa.me/971501234567' },
      ]
    }
  };

  const ct = contactContent[language];
  const heroMockup = {
    EN: {
      appName: 'The Mudeer Console',
      cards: [
        { title: 'Service Requests', value: '124', note: '18 high priority' },
        { title: 'Resolved This Week', value: '86', note: '+12% vs last week' }
      ],
      metrics: [
        { label: 'Occupancy', value: '96%' },
        { label: 'Avg. Response', value: '12m' }
      ]
    },
    AR: {
      appName: 'لوحة المدير',
      cards: [
        { title: 'طلبات الخدمة', value: '124', note: '18 أولوية عالية' },
        { title: 'المغلقة هذا الأسبوع', value: '86', note: '+12% مقارنة بالأسبوع الماضي' }
      ],
      metrics: [
        { label: 'الإشغال', value: '96%' },
        { label: 'متوسط الاستجابة', value: '12د' }
      ]
    },
    ID: {
      appName: 'Konsol The Mudeer',
      cards: [
        { title: 'Permintaan Layanan', value: '124', note: '18 prioritas tinggi' },
        { title: 'Selesai Minggu Ini', value: '86', note: '+12% vs minggu lalu' }
      ],
      metrics: [
        { label: 'Hunian', value: '96%' },
        { label: 'Respon Rata-rata', value: '12m' }
      ]
    }
  }[language];

  const dashboardMockup = {
    EN: {
      title: 'Live Portfolio Board',
      summary: 'North Tower • 248 units • 96% occupied',
      stats: [
        { label: 'Response Time', value: '12m avg' },
        { label: 'Tickets', value: '32 Open' },
        { label: 'SLA', value: '99.9%' }
      ],
      activity: ['Unit A-120 lease renewed', 'Water leak ticket assigned', 'Monthly report exported']
    },
    AR: {
      title: 'لوحة المحفظة المباشرة',
      summary: 'برج الشمال • 248 وحدة • إشغال 96%',
      stats: [
        { label: 'زمن الاستجابة', value: '12د متوسط' },
        { label: 'التذاكر', value: '32 مفتوحة' },
        { label: 'SLA', value: '99.9%' }
      ],
      activity: ['تجديد عقد الوحدة A-120', 'تعيين بلاغ تسرب مياه', 'تصدير التقرير الشهري']
    },
    ID: {
      title: 'Papan Portofolio Live',
      summary: 'North Tower • 248 unit • 96% terisi',
      stats: [
        { label: 'Waktu Respon', value: '12m rata-rata' },
        { label: 'Tiket', value: '32 Open' },
        { label: 'SLA', value: '99.9%' }
      ],
      activity: ['Sewa unit A-120 diperpanjang', 'Tiket kebocoran air ditugaskan', 'Laporan bulanan diekspor']
    }
  }[language];

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
                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <div className="text-[#D4AF37] font-semibold">{heroMockup.appName}</div>
                </div>
                <div className="space-y-3">
                  {heroMockup.cards.map((card, i) => (
                    <div key={i} className="p-4 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/20">
                      <div className="text-xs text-[#CBC5CE] mb-1">{card.title}</div>
                      <div className="text-lg font-semibold text-[#F8F9FA]">{card.value}</div>
                      <div className="text-[11px] text-[#D4AF37] mt-1">{card.note}</div>
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-3">
                    {heroMockup.metrics.map((metric, i) => (
                      <div key={i} className="p-4 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/20">
                        <div className="text-xl font-bold text-[#D4AF37]">{metric.value}</div>
                        <div className="text-xs text-[#CBC5CE] mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
                onClick={() => {
                  setSelectedFeature(feature);
                  setActiveDashboardSlide(0);
                }}
                className="bg-white rounded-2xl overflow-hidden border border-[#0A1628]/10 hover:border-[#D4AF37]/30 transition-all text-left shadow-sm cursor-pointer group"
              >
                <div className="relative w-full h-40 overflow-hidden">
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-[#0A1628] group-hover:text-[#D4AF37] transition-colors">{feature.title}</h3>
                  <p className="text-[#1A2B42]/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
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
              <div className="text-xs tracking-[0.2em] uppercase text-[#D4AF37]/80 mb-2">{dashboardMockup.title}</div>
              <div className="text-sm text-[#CBC5CE] mb-4">{dashboardMockup.summary}</div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {dashboardMockup.stats.map((item, i) => (
                  <div key={i} className="rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-3">
                    <div className="text-[11px] text-[#CBC5CE]">{item.label}</div>
                    <div className="text-sm font-semibold text-[#F8F9FA] mt-1">{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-[#D4AF37]/15 bg-[#D4AF37]/5 p-3 space-y-2">
                {dashboardMockup.activity.map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 text-xs text-[#CBC5CE] ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Form Modal -->
      {showContactForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37]">{t.modal.title}</h3>
              <button onClick={() => setShowContactForm(false)} className="text-[#9CA3AF] hover:text-[#F8F9FA]">{t.modal.close}</button>
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

      {/* Feature Detail Modal */}
      <AnimatePresence>
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#D4AF37]/30 rounded-2xl lg:rounded-3xl w-full max-w-5xl max-h-[92vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border-b border-[#D4AF37]/20 px-6 sm:px-8 py-5 sm:py-6 flex justify-between items-center shrink-0">
              <h3 className="text-2xl font-['Cormorant_Garamond'] text-[#D4AF37]">{selectedFeature.title}</h3>
              <button 
                onClick={() => {
                  setSelectedFeature(null);
                  setActiveDashboardSlide(0);
                }} 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Content */}
            <div className="px-5 sm:px-8 pt-5 sm:pt-8 pb-4 flex-1 min-h-0 overflow-y-auto">
              {(() => {
                const popupPoints =
                  selectedFeatureIndex === 0 ? dashboardFeaturePoints
                  : selectedFeatureIndex === 1 ? communicationFeaturePoints
                  : selectedFeatureIndex === 2 ? feature3Points
                  : selectedFeatureIndex === 3 ? feature4Points
                  : selectedFeatureIndex === 4 ? feature5Points
                  : feature6Points;

                const isDashboardFeature = selectedFeatureIndex === 0;

                const popupImage = isDashboardFeature
                  ? dashboardSlides[activeDashboardSlide].src
                  : selectedFeatureIndex === 1
                    ? '/images/features/content-mudeer/Feature_2.png'
                    : selectedFeature.screenshot;

                return (
                  <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-0 lg:h-full lg:items-stretch">
                    {/* Bullets — below image on mobile, left col on desktop */}
                    <div className={`order-2 lg:order-1 space-y-3 lg:pr-6 lg:self-stretch lg:flex lg:flex-col lg:justify-center ${isRTL ? 'text-right' : ''}`}>
                      {popupPoints.map((point, i) => (
                        <div key={i} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
                          <p className="text-sm text-[#C7D0DE] leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>

                    {/* Image — top on mobile, right col on desktop */}
                    <div className="order-1 lg:order-2 w-full lg:self-stretch lg:min-h-0 flex flex-col">
                      <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:flex-1 lg:min-h-0">
                        <Image
                          src={popupImage}
                          alt={`${selectedFeature.title} screenshot`}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>

                      {isDashboardFeature && (
                        <div className={`mt-3 flex items-center justify-between gap-3 shrink-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <button
                            type="button"
                            onClick={() => setActiveDashboardSlide((prev) => (prev - 1 + dashboardSlides.length) % dashboardSlides.length)}
                            className="px-3 py-1.5 rounded-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs hover:bg-[#D4AF37]/10"
                          >
                            {sliderNavText.prev}
                          </button>

                          <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            {dashboardSlides.map((slide, index) => (
                              <button
                                key={slide.src}
                                type="button"
                                onClick={() => setActiveDashboardSlide(index)}
                                className={`px-2.5 py-1 rounded-full text-[11px] border transition-colors ${
                                  activeDashboardSlide === index
                                    ? 'bg-[#D4AF37] text-[#0A1628] border-[#D4AF37]'
                                    : 'bg-transparent text-[#C7D0DE] border-[#D4AF37]/35 hover:bg-[#D4AF37]/10'
                                }`}
                              >
                                {slide.label}
                              </button>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => setActiveDashboardSlide((prev) => (prev + 1) % dashboardSlides.length)}
                            className="px-3 py-1.5 rounded-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs hover:bg-[#D4AF37]/10"
                          >
                            {sliderNavText.next}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          </motion.div>
        </div>
      )}
      </AnimatePresence>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
