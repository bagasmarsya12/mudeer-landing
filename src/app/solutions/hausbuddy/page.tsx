'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { SiteFooter } from '@/components/SiteFooter';
import { CtaPopup } from '@/components/CtaPopup';
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
      { title: 'The Digital "Blackboard"', description: 'Never miss an update again. Receive instant push notifications for urgent water shut-offs, elevator maintenance, or community events.', longDescription: 'Transform how you communicate with residents. The Digital Blackboard replaces outdated paper notices with instant push notifications delivered directly to tenants phones. Whether it is an urgent water shut-off, elevator maintenance schedule, or upcoming community events, your messages reach residents immediately with 100% reliability.', image: '/images/hausbuddy/1.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_1.png',
        points: [
          'Urgent alerts, maintenance schedules, and community events — delivered instantly to every resident.',
          'No more lost paper notices or missed announcements on a crowded board.',
          'Push targeted updates to specific floors, units, or your entire building at once.',
          'Residents stay informed. You stay in control.'
        ]
      },
      { title: 'The Social Butterfly', description: 'Make your building a home. Connect with neighbors to organize playdates, study sessions, or prayer and sports groups.', longDescription: 'Turn your building into a thriving community. The Social Butterfly feature provides a dedicated platform where residents can connect, organize activities, and build meaningful relationships. From arranging playdates for children to coordinating study groups or sports activities.', image: '/images/hausbuddy/2.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_2.png',
        points: [
          'Connect with neighbors and organize activities right inside the app — no group chats needed.',
          'Discover sports groups, study sessions, parenting circles, and community events near you.',
          'Build a sense of belonging that turns residents into long-term community members.',
          'Your building becomes more than four walls — it becomes a community.'
        ]
      },
      { title: 'Direct "One-Stop" Chat', description: 'Stop wasting time on hold. Open a direct, secure line to your property manager for quick questions about rent, contracts, or keys.', longDescription: 'Eliminate communication friction with instant messaging. The Direct One-Stop Chat creates a secure, organized channel between tenants and property managers. No more waiting on hold or playing phone tag—tenants get quick answers to questions about rent, contracts, keys, or any concerns.', image: '/images/hausbuddy/3.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_3.png',
        points: [
          'Message your property manager directly — no phone tags, no waiting on hold.',
          'All conversations in one thread: rent, contracts, requests, and more.',
          'Faster response times mean happier tenants and fewer escalations.',
          'Full conversation history — safe, searchable, and always at your fingertips.'
        ]
      },
      { title: 'Smart Damage Reporting', description: 'Report issues in seconds. Snap a photo, hit send, and track repair status in real-time from "Received" to "Resolved."', longDescription: 'Revolutionize maintenance requests with a seamless 3-click process. Tenants simply snap a photo of any issue—whether it is a broken light, leaking faucet, or any defect—add a brief description, and submit. Track the entire journey from "Received" to "In Progress" to "Resolved" in real-time.', image: '/images/hausbuddy/4.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_4.png',
        points: [
          'Snap a photo, add a note, and submit a repair request in under 30 seconds.',
          'Track every issue from "Received" to "In Progress" to "Resolved" in real-time.',
          'No follow-up calls needed — you always know the status of your request.',
          'Property managers get structured reports. Tenants get peace of mind.'
        ]
      },
      { title: 'Integrated Service Marketplace', description: 'Get a lifestyle upgrade. Access exclusive deals and services like on-demand apartment cleaning right from the app.', longDescription: 'Offer more than just housing—provide a complete lifestyle solution. The Integrated Service Marketplace gives tenants access to exclusive deals and premium services directly through the app. From on-demand apartment cleaning to laundry services, handyman repairs to moving assistance.', image: '/images/hausbuddy/5.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_5.png',
        points: [
          'Book cleaning, laundry, or handyman services directly from your apartment app.',
          'Exclusive resident-only deals curated for your building lifestyle.',
          'One-tap booking — no calls, no searching, no middlemen.',
          'More than a home. Your everyday services, always one step away.'
        ]
      },
      { title: 'Documents in Your Pocket', description: 'Enjoy 24/7 access to your vital home information. Rental contracts, utility statements, and house rules safely stored.', longDescription: 'Never lose important documents again. The Documents feature provides secure, 24/7 access to all essential home information. Rental contracts, utility statements, house rules, insurance documents—everything is safely stored in the cloud and retrievable instantly.', image: '/images/hausbuddy/6.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_6.png',
        points: [
          'Your lease, utility bills, and house rules — stored securely and always within reach.',
          'No more searching drawers or emailing management for a copy of your contract.',
          'Access any document in seconds, 24/7, from anywhere.',
          'Paperless, organized, and always up to date.'
        ]
      }
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
      submit: 'Submit',
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
      { title: 'السبورة الرقمية', description: 'لا تفوت أي تحديث. استلم إشعارات فورية لإغلاق المياه، أو صيانة المصعد، أو فعاليات المجتمع.', longDescription: 'حوّل طريقة تواصلك مع السكان. السبورة الرقمية تحل محل إشعارات الورق القديمة بإشعارات فورية تصل مباشرة إلى هواتف المستأجرين. سواء كان إغلاقاً عاجلاً للمياه، أو جدولة صيانة المصعد، أو فعاليات المجتمع القادمة.', image: '/images/hausbuddy/1.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_1.png',
        points: [
          'تنبيهات عاجلة وجداول صيانة وفعاليات — تصل فوراً إلى كل ساكن.',
          'لا مزيد من الإشعارات الورقية الضائعة أو اللوحات المزدحمة.',
          'أرسل تحديثات مستهدفة لطوابق أو وحدات بعينها أو للمبنى كاملاً.',
          'السكان دائماً على علم. وأنت دائماً في السيطرة.'
        ]
      },
      { title: 'التواصل الاجتماعي', description: 'اجعل مبناك وطناً. تواصل مع الجيران لتنظيم مواعيد اللعب، أو جلسات الدراسة، أو مجموعات الصلاة.', longDescription: 'حوّل مبناك إلى مجتمع نابض بالحياة. ميزة التواصل الاجتماعي توفر منصة مخصصة حيث يمكن للسكان التواصل وتنظيم الأنشطة وبناء علاقات هادفة. من ترتيب مواعيد اللعب للأطفال إلى تنسيق مجموعات الدراسة.', image: '/images/hausbuddy/2.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_2.png',
        points: [
          'تواصل مع الجيران ونظّم الأنشطة مباشرة من التطبيق — بدون مجموعات دردشة منفصلة.',
          'اكتشف مجموعات رياضية ودراسية وعائلية وفعاليات مجتمعية قريبة منك.',
          'ابنِ روح الانتماء التي تحوّل السكان إلى أعضاء مجتمع دائمين.',
          'مبناك يصبح أكثر من أربعة جدران — يصبح مجتمعاً حقيقياً.'
        ]
      },
      { title: 'دردشة مباشرة', description: 'توقف عن الانتظار. افتح خط اتصال آمن مع مدير العقارة لأسئلة سريعة.', longDescription: 'أزل احتكاك التواصل مع الرسائل الفورية. الدردشة المباشرة تخلق قناة آمنة ومنظمة بين المستأجرين ومديري العقارات. لا مزيد من الانتظار على الخط—يحصل المستأجرون على إجابات سريعة حول الإيجار أو العقود.', image: '/images/hausbuddy/3.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_3.png',
        points: [
          'راسل مدير عقاراتك مباشرة — لا انتظار، لا مرور عبر وسيط.',
          'كل المحادثات في خيط واحد: الإيجار والعقود والطلبات وأكثر.',
          'أوقات استجابة أسرع تعني مستأجرين أكثر رضاً وتصعيدات أقل.',
          'سجل المحادثات الكامل محفوظ وقابل للبحث في كل وقت.'
        ]
      },
      { title: 'الإبلاغ الذكي عن الأضرار', description: 'أبلغ عن المشكلات في ثوانٍ. التقط صورة، اضغط إرسال، وتتبع حالة الإصلاح.', longDescription: 'أحدث ثورة في طلبات الصيانة بعملية سلسة من 3 نقرات. يلتقط المستأجرون ببساطة صورة لأي مشكلة—سواء كان مصباحاً مكسوراً أو صنبوراً متسرباً—يضيفون وصفاً موجزاً ويرسلون. تتبع الرحلة بأكملها من "مستلم" إلى "تم الحل".', image: '/images/hausbuddy/4.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_4.png',
        points: [
          'التقط صورة، أضف ملاحظة، وأرسل طلب إصلاح في أقل من 30 ثانية.',
          'تابع كل مشكلة من "مستلم" إلى "جاري التنفيذ" إلى "تم الحل" في الوقت الفعلي.',
          'لا حاجة لمتابعة هاتفية — أنت دائماً على علم بحالة طلبك.',
          'مديرو العقارات يحصلون على تقارير منظمة. والمستأجرون يحصلون على راحة بال.'
        ]
      },
      { title: 'سوق الخدمات المتكامل', description: 'احصل على ترقية لنمط حياتك. استفد من عروض وخدمات حصرية مثل تنظيف الشقق.', longDescription: 'قدّم أكثر من مجرد سكن—قدّم حلًا كاملاً للحياة. سوق الخدمات المتكامل يمنح المستأجرين إمكانية الوصول إلى صفقات حصرية وخدمات متميزة مباشرة من خلال التطبيق. من تنظيف الشقق عند الطلب إلى خدمات الغسيل.', image: '/images/hausbuddy/5.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_5.png',
        points: [
          'احجز خدمات التنظيف والغسيل والصيانة مباشرة من تطبيق شقتك.',
          'عروض حصرية للسكان فقط، مختارة لتناسب أسلوب حياة مبناك.',
          'حجز بنقرة واحدة — بدون مكالمات، بدون بحث، بدون وسطاء.',
          'أكثر من منزل. خدماتك اليومية دائماً على بعد خطوة.'
        ]
      },
      { title: 'المستندات في جيبك', description: 'استمتع بالوصول على مدار الساعة. عقود الإيجار وكشوفات الخدمات مخزنة بأمان.', longDescription: 'لا تفقد المستندات المهمة مرة أخرى. ميزة المستندات توفر وصولاً آمنًا على مدار الساعة إلى جميع معلومات المنزل الأساسية. عقود الإيجار، كشوفات الخدمات، قواعد المنزل، وثائق التأمين—كل شيء مخزن بأمان.', image: '/images/hausbuddy/6.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_6.png',
        points: [
          'عقدك وفواتيرك وقواعد المنزل — محفوظة بأمان وفي متناولك دائماً.',
          'لا مزيد من البحث في الأدراج أو مراسلة الإدارة للحصول على نسخة عقدك.',
          'استرجع أي مستند في ثوانٍ، 24/7، من أي مكان.',
          'بلا ورق، منظم، وحديث دائماً.'
        ]
      }
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
      submit: 'إرسال',
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
      { title: 'Papan Pengumuman Digital', description: 'Jangan lewatkan update. Terima notifikasi instan untuk pemadaman air, perawatan lift, atau acara komunitas.', longDescription: 'Ubah cara Anda berkomunikasi dengan penghuni. Papan Pengumuman Digital menggantikan pemberitahuan kertas yang usang dengan notifikasi push instan yang dikirim langsung ke ponsel penyewa. Baik itu pemadaman air darurat, jadwal perawatan lift, atau acara komunitas yang akan datang.', image: '/images/hausbuddy/1.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_1.png',
        points: [
          'Peringatan mendesak, jadwal pemeliharaan, dan acara komunitas — terkirim instan ke setiap penghuni.',
          'Tidak ada lagi pemberitahuan kertas yang hilang atau papan pengumuman yang penuh sesak.',
          'Kirim pembaruan tertarget ke lantai, unit, atau seluruh gedung sekaligus.',
          'Penghuni selalu terinformasi. Anda selalu memegang kendali.'
        ]
      },
      { title: 'Komunitas Sosial', description: 'Jadikan gedung Anda rumah. Terhubung dengan tetangga untuk playdate, sesi belajar, atau grup olahraga.', longDescription: 'Ubah gedung Anda menjadi komunitas yang berkembang. Fitur Komunitas Sosial menyediakan platform khusus di mana penghuni dapat terhubung, mengorganisir aktivitas, dan membangun hubungan yang bermakna. Dari mengatur playdate untuk anak-anak hingga mengoordinasikan kelompok belajar.', image: '/images/hausbuddy/2.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_2.png',
        points: [
          'Terhubung dengan tetangga dan atur aktivitas langsung di dalam aplikasi — tanpa perlu grup chat terpisah.',
          'Temukan grup olahraga, belajar, parenting, atau acara komunitas di dekat Anda.',
          'Bangun rasa kebersamaan yang mengubah penghuni menjadi anggota komunitas jangka panjang.',
          'Gedung Anda menjadi lebih dari sekadar empat dinding — ia menjadi komunitas.'
        ]
      },
      { title: 'Chat Langsung', description: 'Berhenti membuang waktu. Buka jalur aman ke manajer properti untuk pertanyaan cepat.', longDescription: 'Hilangkan hambatan komunikasi dengan pesan instan. Chat Langsung menciptakan saluran aman dan terorganisir antara penyewa dan manajer properti. Tidak ada lagi menunggu di telepon—penyewa mendapat jawaban cepat untuk pertanyaan tentang sewa, kontrak, atau kunci.', image: '/images/hausbuddy/3.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_3.png',
        points: [
          'Kirim pesan ke manajer properti Anda langsung — tidak perlu menelepon, tidak perlu menunggu.',
          'Semua percakapan dalam satu thread: masalah sewa, kontrak, permintaan, dan lainnya.',
          'Waktu respons lebih cepat berarti penyewa lebih puas dan lebih sedikit eskalasi.',
          'Riwayat percakapan lengkap tersimpan aman dan dapat dicari kapan saja.'
        ]
      },
      { title: 'Pelaporan Kerusakan Cerdas', description: 'Laporkan masalah dalam detik. Ambil foto, kirim, dan lacak status perbaikan real-time.', longDescription: 'Revolusi permintaan perawatan dengan proses mulus 3-klik. Penyewa cukup mengambil foto masalah apa pun—baik itu lampu rusak, keran bocor, atau cacat lainnya—menambahkan deskripsi singkat, dan mengirimkan. Lacak seluruh perjalanan dari "Diterima" ke "Sedang Dikerjakan".', image: '/images/hausbuddy/4.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_4.png',
        points: [
          'Ambil foto, tambahkan catatan, dan kirim permintaan perbaikan dalam waktu kurang dari 30 detik.',
          'Lacak setiap masalah dari "Diterima" ke "Sedang Dikerjakan" ke "Selesai" secara real-time.',
          'Tidak perlu follow-up via telepon — Anda selalu tahu status permintaan Anda.',
          'Manajer properti mendapat laporan terstruktur. Penyewa mendapat ketenangan pikiran.'
        ]
      },
      { title: 'Marketplace Layanan', description: 'Dapatkan peningkatan gaya hidup. Akses penawaran eksklusif seperti pembersihan apartemen.', longDescription: 'Tawarkan lebih dari sekadar perumahan—berikan solusi gaya hidup lengkap. Marketplace Layanan memberi penyewa akses ke penawaran eksklusif dan layanan premium langsung melalui aplikasi. Dari pembersihan apartemen sesuai permintaan hingga layanan laundry dan perbaikan.', image: '/images/hausbuddy/5.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_5.png',
        points: [
          'Pesan layanan kebersihan, laundry, atau handyman langsung dari aplikasi apartemen Anda.',
          'Penawaran eksklusif khusus penghuni yang dikurasi untuk gaya hidup gedung Anda.',
          'Booking satu ketukan — tidak perlu menelepon, tidak perlu mencari, tidak ada perantara.',
          'Lebih dari sekadar rumah. Layanan harian Anda, selalu selangkah lebih dekat.'
        ]
      },
      { title: 'Dokumen di Saku', description: 'Akses 24/7 ke informasi penting. Kontrak sewa dan tagihan tersimpan dengan aman.', longDescription: 'Jangan pernah kehilangan dokumen penting lagi. Fitur Dokumen menyediakan akses aman 24/7 ke semua informasi rumah penting. Kontrak sewa, pernyataan utilitas, aturan rumah, dokumen asuransi—semuanya tersimpan dengan aman di cloud dan dapat diambil secara instan.', image: '/images/hausbuddy/6.png', screenshot: '/images/hausbuddy/content-hausbuddy/hb_6.png',
        points: [
          'Kontrak, tagihan, dan aturan rumah Anda — tersimpan aman dan selalu dalam jangkauan.',
          'Tidak perlu lagi menggeledah laci atau menghubungi manajemen untuk salinan kontrak Anda.',
          'Akses dokumen apa pun dalam hitungan detik, 24/7, dari mana saja.',
          'Tanpa kertas, terorganisir, dan selalu mutakhir.'
        ]
      }
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
      submit: 'Kirim',
      close: '✕'
    },
    footer: '© 2025 The Mudeer. Hak cipta dilindungi.'
  }
};

export default function HausbuddyPage() {
  const { language } = useLanguage();
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactTitle, setContactTitle] = useState(content[language].modal.title);
  const [selectedFeature, setSelectedFeature] = useState<typeof content.EN.features[0] | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const t = content[language];
  const isRTL = language === 'AR';

  const openContact = (title?: string) => {
    setContactTitle(title || t.modal.title);
    setShowContactForm(true);
  };

  const APPSTORE_URL = 'https://apps.apple.com/us/app/hausbuddy/id6444334330';
  const PLAYSTORE_URL = 'https://play.google.com/store/apps/details?id=com.hausbuddy.app';

  const handleDownloadApp = () => {
    if (typeof navigator === 'undefined') return;
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) {
      window.open(APPSTORE_URL, '_blank', 'noopener,noreferrer');
    } else if (/Android/.test(ua)) {
      window.open(PLAYSTORE_URL, '_blank', 'noopener,noreferrer');
    } else {
      // Desktop: open App Store as default
      window.open(APPSTORE_URL, '_blank', 'noopener,noreferrer');
    }
  };

  // Contact Section Content
  const contactContent = {
    EN: {
      badge: "Let's Talk",
      title: 'Give Your Tenants the Experience They Deserve',
      subtitle: 'Choose your preferred way to connect with our team.',
      methods: [
        { icon: 'form', title: 'Contact Form', description: 'Fill out our form and we will get back to you.', action: 'Fill Form' },
        { icon: 'email', title: 'Email', description: 'Reach out for detailed inquiries.', action: 'Send Email', href: 'mailto:hello@themudeer.com' },
        { icon: 'whatsapp', title: 'WhatsApp', description: 'Chat with us directly on WhatsApp.', action: 'Chat Now', href: 'https://wa.me/971501234567' },
      ]
    },
    AR: {
      badge: 'دعنا نتحدث',
      title: 'امنح مستأجريك التجربة التي يستحقونها',
      subtitle: 'اختر طريقتك المفضلة للتواصل مع فريقنا.',
      methods: [
        { icon: 'form', title: 'نموذج التواصل', description: 'املأ النموذج وسنرد عليك.', action: 'املأ النموذج' },
        { icon: 'email', title: 'البريد', description: 'تواصل للاستفسارات التفصيلية.', action: 'إرسال بريد', href: 'mailto:hello@themudeer.com' },
        { icon: 'whatsapp', title: 'واتساب', description: 'دردش معنا مباشرة على واتساب.', action: 'دردش الآن', href: 'https://wa.me/971501234567' },
      ]
    },
    ID: {
      badge: 'Mari Bicara',
      title: 'Berikan Penyewa Anda Pengalaman yang Mereka Layak Dapatkan',
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
      <section className="pt-32 pb-20 bg-[#0A1628]">
        <div className="page-container">
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
                <button onClick={handleDownloadApp} className="px-8 py-4 bg-[#00A79D] text-white font-semibold rounded-lg hover:bg-[#008B82] transition-colors">
                  {t.hero.cta1}
                </button>
                <Link href="#features" className="px-8 py-4 border border-[#00A79D]/30 text-[#F8F9FA] rounded-lg hover:bg-[#00A79D]/10 transition-colors">
                  {t.hero.cta2}
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: isRTL ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative flex justify-center">
              {/* Phone frame */}
              <div className="relative w-[240px] h-[500px] bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] rounded-[3rem] border-[3px] border-[#00A79D]/30 shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-[#0A1628] rounded-b-2xl z-10" />
                {/* Screen */}
                <div className="pt-8 px-4 pb-6 h-full flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-4 px-1">
                    <div className="w-8 h-1.5 bg-[#00A79D]/30 rounded-full" />
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 bg-[#00A79D]/30 rounded-full" />
                      <div className="w-3 h-1.5 bg-[#00A79D]/30 rounded-full" />
                      <div className="w-3 h-1.5 bg-[#00A79D]/30 rounded-full" />
                    </div>
                  </div>
                  {/* App header */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-7 h-7 bg-[#00A79D] rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div className="text-[#00A79D] text-sm font-semibold">Hausbuddy</div>
                    <div className="ml-auto w-5 h-5 bg-[#00A79D]/20 rounded-full" />
                  </div>
                  {/* App content */}
                  <div className="flex-1 space-y-2.5 overflow-hidden">
                    {/* Announcement banner */}
                    <div className="bg-[#00A79D]/10 rounded-2xl px-3 py-3 border border-[#00A79D]/20">
                      <p className="text-[9px] text-[#00A79D]/60 uppercase tracking-widest mb-1">Announcement</p>
                      <p className="text-[10px] font-semibold text-[#F8F9FA]/80 leading-snug">Water maintenance on 14 Mar, 8–10 AM</p>
                      <p className="text-[9px] text-[#A7B0BE]/60 mt-1">Tap to read more →</p>
                    </div>
                    {/* Two quick-action tiles */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#00A79D]/10 rounded-xl px-2.5 py-2.5 border border-[#00A79D]/15">
                        <p className="text-[9px] text-[#00A79D]/70 uppercase tracking-wider mb-1">Payments</p>
                        <p className="text-[11px] font-bold text-[#F8F9FA]/80">AED 4,200</p>
                        <p className="text-[8px] text-[#A7B0BE]/50 mt-0.5">Due Apr 1</p>
                      </div>
                      <div className="bg-[#00A79D]/10 rounded-xl px-2.5 py-2.5 border border-[#00A79D]/15">
                        <p className="text-[9px] text-[#00A79D]/70 uppercase tracking-wider mb-1">Requests</p>
                        <p className="text-[11px] font-bold text-[#F8F9FA]/80">2 Open</p>
                        <p className="text-[8px] text-[#A7B0BE]/50 mt-0.5">In progress</p>
                      </div>
                    </div>
                    {/* Chat preview rows */}
                    <div className="bg-[#00A79D]/10 rounded-xl px-3 py-2 flex items-center gap-2 border border-[#00A79D]/15">
                      <div className="w-5 h-5 bg-[#00A79D]/40 rounded-full shrink-0 flex items-center justify-center">
                        <span className="text-[7px] text-white font-bold">M</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-semibold text-[#F8F9FA]/80">Management</p>
                        <p className="text-[8px] text-[#A7B0BE]/60 truncate">Your AC unit has been scheduled…</p>
                      </div>
                    </div>
                    <div className="bg-[#00A79D]/10 rounded-xl px-3 py-2 flex items-center gap-2 border border-[#00A79D]/15">
                      <div className="w-5 h-5 bg-[#00A79D]/40 rounded-full shrink-0 flex items-center justify-center">
                        <span className="text-[7px] text-white font-bold">N</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-semibold text-[#F8F9FA]/80">Neighbour Chat</p>
                        <p className="text-[8px] text-[#A7B0BE]/60 truncate">Anyone joining the rooftop BBQ?</p>
                      </div>
                    </div>
                  </div>
                  {/* Bottom nav */}
                  <div className="mt-4 flex justify-around items-center pt-3 border-t border-[#00A79D]/10">
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className={`w-6 h-6 rounded-lg ${i === 0 ? 'bg-[#00A79D]/40' : 'bg-[#00A79D]/15'}`} />
                    ))}
                  </div>
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#00A79D]/30 rounded-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Features Grid - Sand */}
      <section id="features" className="py-24 bg-[#F5F3F0]">
        <div className="page-container">
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
                }}
                className="bg-white rounded-2xl overflow-hidden border border-[#0A1628]/10 hover:border-[#00A79D]/30 transition-all text-left shadow-sm cursor-pointer group"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image 
                    src={feature.image} 
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-[#0A1628] group-hover:text-[#00A79D] transition-colors">{feature.title}</h3>
                  <p className="text-[#1A2B42]/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Detail Modal */}
      <AnimatePresence>
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center lg:p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gradient-to-br from-[#0F1D2F] to-[#1A2B42] border border-[#00A79D]/30 lg:rounded-3xl w-full h-full lg:max-w-6xl lg:h-[96vh] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="border-b border-[#00A79D]/20 px-6 sm:px-8 py-4 sm:py-5 flex justify-between items-center shrink-0">
              <h3 className="text-xl sm:text-2xl font-['Cormorant_Garamond'] text-[#00A79D]">{selectedFeature.title}</h3>
              <button 
                onClick={() => setSelectedFeature(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00A79D]/10 text-[#00A79D] hover:bg-[#00A79D]/20 transition-colors shrink-0"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-h-0 flex flex-row overflow-hidden">
              {/* Image — left on mobile, right on desktop */}
              <div className="w-[45%] lg:flex-1 flex flex-col min-h-0 bg-[#0A1628]/40 order-1 lg:order-2">
                <div
                  className="relative flex-1 min-h-0 cursor-zoom-in"
                  onClick={() => setLightboxImage(selectedFeature.screenshot)}
                  title="Click to enlarge"
                >
                  <Image
                    src={selectedFeature.screenshot}
                    alt={`${selectedFeature.title} screenshot`}
                    fill
                    className="object-contain py-2 px-0"
                    unoptimized
                  />
                  <div className="absolute bottom-3 right-3 bg-black/50 rounded-full p-1.5 pointer-events-none">
                    <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                  </div>
                </div>
              </div>

              {/* Bullets — right on mobile, left on desktop */}
              <div className={`flex-1 lg:w-[400px] lg:shrink-0 overflow-y-auto p-4 sm:p-6 border-l lg:border-l-0 lg:border-r border-[#00A79D]/10 flex flex-col justify-center gap-3 order-2 lg:order-1 ${isRTL ? 'text-right lg:border-r-0 lg:border-l' : ''}`}>
                {selectedFeature.points.map((point, i) => (
                  <div key={i} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="mt-[7px] w-1.5 h-1.5 shrink-0 rounded-full bg-[#00A79D]" />
                    <p className="text-sm text-[#C7D0DE] leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full h-full max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Fullscreen preview"
                fill
                className="object-contain"
                unoptimized
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* How It Works - Navy -->
      <section className="py-24 bg-[#0A1628]">
        <div className="page-container">
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
      <section className="py-24 bg-[#F5F3F0]">
        <div className="page-container">
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
            </div>
          </div>
        </div>
      </section>

      <CtaPopup
        isOpen={showContactForm}
        onClose={() => setShowContactForm(false)}
        language={language}
        title={contactTitle}
      />

      {/* Let's Talk Section */}
      <section id="contact" className="py-20 sm:py-32 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)` }} />
        <div className="page-container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`text-center mb-12 sm:mb-16`}>
            <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-4 sm:mb-6">{ct.badge}</span>
            <h2 className="font-['Cormorant_Garamond'] text-[clamp(28px,5vw,56px)] mb-4 sm:mb-6">{ct.title}</h2>
            <p className="text-base sm:text-xl text-[#CBC5CE] max-w-[600px] mx-auto">{ct.subtitle}</p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {ct.methods.map((item, i) => {
              const CardWrapper = i === 0 ? motion.button : motion.a;
              const cardProps = i === 0 
                ? { onClick: () => openContact(item.title) } 
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

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
