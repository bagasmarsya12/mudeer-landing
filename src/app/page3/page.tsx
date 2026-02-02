'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  en: {
    nav: {
      platform: 'Platform',
      hausbuddy: 'Hausbuddy',
      enterprise: 'Enterprise',
      pricing: 'Pricing',
      contact: 'Contact',
      login: 'Login',
      demo: 'Request Demo'
    },
    hero: {
      badge: 'Trusted by 500+ property managers across 12 countries',
      title: 'The Global Standard in',
      titleHighlight: 'Property Intelligence.',
      subtitle: 'Enterprise-grade property management platform powering portfolios from Dubai to London, Singapore to New York. One platform. Every market.',
      cta: 'Schedule a Demo',
      ctaSecondary: 'Explore Platform',
      clients: 'Trusted by industry leaders worldwide'
    },
    stats: {
      items: [
        { value: '2.5M+', label: 'Units Managed Globally' },
        { value: '12', label: 'Countries' },
        { value: '$4.2B', label: 'Transactions Processed' },
        { value: '99.99%', label: 'Uptime SLA' }
      ]
    },
    platform: {
      badge: 'The Mudeer Platform',
      title: 'Command Your Portfolio.',
      titleHighlight: 'From Anywhere.',
      subtitle: 'A unified operating system for modern real estate. Manage assets, automate operations, and scale globally with enterprise-grade infrastructure.',
      features: [
        {
          icon: '📊',
          title: 'Executive Dashboard',
          desc: 'Real-time portfolio analytics, occupancy tracking, and financial health monitoring across all your properties worldwide.'
        },
        {
          icon: '⚡',
          title: 'Intelligent Automation',
          desc: 'Automate rent collection, lease renewals, maintenance workflows, and compliance reporting. Reduce manual work by 70%.'
        },
        {
          icon: '💰',
          title: 'Financial Engine',
          desc: 'Multi-currency support, automated invoicing, bank integrations, and real-time cash flow visibility across all regions.'
        },
        {
          icon: '📈',
          title: 'Advanced Analytics',
          desc: 'AI-powered insights, predictive maintenance, market benchmarking, and board-ready reporting in seconds.'
        },
        {
          icon: '🔗',
          title: 'Open API',
          desc: 'RESTful APIs, webhooks, and pre-built integrations with leading ERP, CRM, and accounting systems.'
        },
        {
          icon: '🏢',
          title: 'White Label',
          desc: 'Deploy under your brand. Custom domains, branded mobile apps, and complete visual customization.'
        }
      ]
    },
    hausbuddy: {
      badge: 'Hausbuddy App',
      title: 'The Tenant Experience',
      titleHighlight: 'Reimagined.',
      subtitle: 'A beautiful, intuitive mobile app that transforms how residents interact with their homes. Increase tenant satisfaction, reduce churn, and streamline communications.',
      features: [
        {
          title: 'Instant Payments',
          desc: 'Apple Pay, Google Pay, bank transfers. Tenants pay rent in seconds, you get paid faster.',
          icon: '💳'
        },
        {
          title: 'Smart Maintenance',
          desc: 'Photo & video uploads, AI categorization, real-time status tracking. Issues resolved 3x faster.',
          icon: '🔧'
        },
        {
          title: 'Direct Messaging',
          desc: 'Secure in-app chat with property managers. No more lost emails or phone tag.',
          icon: '💬'
        },
        {
          title: 'Amenity Booking',
          desc: 'Pool, gym, parking, guest suites. Residents book facilities with one tap.',
          icon: '🏊'
        },
        {
          title: 'Document Hub',
          desc: 'Lease agreements, invoices, building rules. All documents accessible anytime.',
          icon: '📄'
        },
        {
          title: 'Community Feed',
          desc: 'Building announcements, events, and neighbor connections. Build community.',
          icon: '🏠'
        }
      ],
      stats: [
        { value: '4.8', label: 'App Store Rating' },
        { value: '60%', label: 'Fewer Support Calls' },
        { value: '23%', label: 'Higher Retention' }
      ]
    },
    connection: {
      title: 'Seamless Sync.',
      subtitle: 'Every action in Hausbuddy instantly reflects in The Mudeer. Payments, requests, communications—synchronized in real-time across your entire portfolio.'
    },
    global: {
      badge: 'Global Coverage',
      title: 'One Platform.',
      titleHighlight: 'Every Market.',
      subtitle: 'Built for international portfolios. Localized for every region.',
      regions: [
        { name: 'Middle East', cities: 'Dubai • Abu Dhabi • Riyadh • Doha' },
        { name: 'Europe', cities: 'London • Paris • Berlin • Amsterdam' },
        { name: 'Asia Pacific', cities: 'Singapore • Hong Kong • Sydney • Tokyo' },
        { name: 'Americas', cities: 'New York • Miami • Toronto • São Paulo' }
      ],
      features: [
        'Multi-currency & multi-language support',
        'Regional compliance & tax frameworks',
        'Local payment gateway integrations',
        'Timezone-aware automation',
        'GDPR, SOC2, ISO 27001 certified',
        '24/7 global support coverage'
      ]
    },
    enterprise: {
      badge: 'Enterprise',
      title: 'Built for Scale.',
      titleHighlight: 'Engineered for Security.',
      subtitle: 'The infrastructure that Fortune 500 companies trust with their real estate portfolios.',
      features: [
        {
          title: 'Dedicated Infrastructure',
          desc: 'Private cloud deployment, dedicated resources, and custom SLAs for mission-critical operations.',
          icon: '☁️'
        },
        {
          title: 'Advanced Security',
          desc: 'SOC2 Type II, ISO 27001, GDPR compliant. End-to-end encryption, SSO, and role-based access.',
          icon: '🔒'
        },
        {
          title: 'Custom Integrations',
          desc: 'Connect to your existing tech stack. SAP, Oracle, Salesforce, and custom ERP integrations.',
          icon: '🔌'
        },
        {
          title: 'Dedicated Success Team',
          desc: 'Named account manager, implementation specialists, and 24/7 priority support.',
          icon: '👥'
        }
      ]
    },
    testimonials: {
      badge: 'Customer Stories',
      title: 'Trusted by',
      titleHighlight: 'Global Leaders.',
      items: [
        {
          quote: 'The Mudeer transformed our operations across 15 countries. What used to require regional teams now runs from one dashboard. The ROI was immediate.',
          name: 'James Chen',
          role: 'Chief Operating Officer',
          company: 'Meridian Properties, Singapore',
          image: 'JC'
        },
        {
          quote: 'Hausbuddy increased our tenant satisfaction scores by 40%. Residents love the app, and our support team finally has bandwidth for strategic work.',
          name: 'Sophie Laurent',
          role: 'Head of Resident Experience',
          company: 'European Living Group, Paris',
          image: 'SL'
        },
        {
          quote: 'The platform handles our multi-currency, multi-language requirements flawlessly. Finally, a solution that understands international real estate.',
          name: 'Ahmed Al-Rashid',
          role: 'CEO',
          company: 'Gulf Premier Developments, Dubai',
          image: 'AR'
        }
      ]
    },
    pricing: {
      badge: 'Pricing',
      title: 'Transparent Pricing.',
      titleHighlight: 'Predictable Costs.',
      subtitle: 'No hidden fees. No long-term contracts. Scale with confidence.',
      plans: [
        {
          name: 'Growth',
          price: '$0.50',
          unit: 'per unit/month',
          desc: 'For growing portfolios ready to scale',
          features: [
            'Up to 500 units',
            'Hausbuddy tenant app',
            'Financial management',
            'Maintenance tracking',
            'Email & chat support',
            'Standard integrations'
          ],
          cta: 'Start Free Trial'
        },
        {
          name: 'Professional',
          price: '$0.35',
          unit: 'per unit/month',
          desc: 'For established property managers',
          features: [
            'Up to 5,000 units',
            'Everything in Growth',
            'White-label option',
            'Advanced analytics',
            'API access',
            'Priority support',
            'Custom workflows'
          ],
          cta: 'Start Free Trial',
          popular: true
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          unit: 'tailored to your needs',
          desc: 'For large-scale global operations',
          features: [
            'Unlimited units',
            'Everything in Professional',
            'Dedicated infrastructure',
            'Custom integrations',
            'Dedicated success manager',
            '24/7 phone support',
            'SLA guarantee',
            'On-premise option'
          ],
          cta: 'Contact Sales'
        }
      ]
    },
    cta: {
      title: 'Ready to Go Global?',
      subtitle: 'Join 500+ property managers who\'ve transformed their operations with The Mudeer.',
      button: 'Schedule Your Demo',
      note: '30-minute personalized demo • No commitment required'
    },
    footer: {
      tagline: 'The global standard in property management intelligence. Powering portfolios across 12 countries.',
      platform: 'Platform',
      platformLinks: ['Dashboard', 'Automation', 'Analytics', 'Integrations', 'API Docs'],
      hausbuddy: 'Hausbuddy',
      hausbuddyLinks: ['Features', 'iOS App', 'Android App', 'For Residents'],
      company: 'Company',
      companyLinks: ['About Us', 'Careers', 'Press', 'Blog', 'Contact'],
      legal: 'Legal',
      legalLinks: ['Privacy Policy', 'Terms of Service', 'Security', 'GDPR', 'Cookie Settings'],
      copyright: '© 2025 The Mudeer. All rights reserved.',
      locations: 'Dubai • London • Singapore • New York'
    }
  },
  ar: {
    nav: {
      platform: 'المنصة',
      hausbuddy: 'هاوس بادي',
      enterprise: 'المؤسسات',
      pricing: 'الأسعار',
      contact: 'تواصل معنا',
      login: 'تسجيل الدخول',
      demo: 'طلب عرض'
    },
    hero: {
      badge: 'موثوق من قبل +500 مدير عقارات في 12 دولة',
      title: 'المعيار العالمي في',
      titleHighlight: 'ذكاء العقارات.',
      subtitle: 'منصة إدارة عقارات بمستوى المؤسسات تدير المحافظ من دبي إلى لندن، سنغافورة إلى نيويورك. منصة واحدة. كل سوق.',
      cta: 'جدولة عرض توضيحي',
      ctaSecondary: 'استكشف المنصة',
      clients: 'موثوق من قبل قادة الصناعة حول العالم'
    },
    stats: {
      items: [
        { value: '+2.5M', label: 'وحدة مُدارة عالمياً' },
        { value: '12', label: 'دولة' },
        { value: '$4.2B', label: 'معاملات معالجة' },
        { value: '99.99%', label: 'ضمان التشغيل' }
      ]
    },
    platform: {
      badge: 'منصة المدير',
      title: 'تحكم بمحفظتك.',
      titleHighlight: 'من أي مكان.',
      subtitle: 'نظام تشغيل موحد للعقارات الحديثة. أدر الأصول، أتمت العمليات، وتوسع عالمياً مع بنية تحتية بمستوى المؤسسات.',
      features: [
        {
          icon: '📊',
          title: 'لوحة التحكم التنفيذية',
          desc: 'تحليلات المحفظة الفورية، تتبع الإشغال، ومراقبة الصحة المالية عبر جميع عقاراتك حول العالم.'
        },
        {
          icon: '⚡',
          title: 'الأتمتة الذكية',
          desc: 'أتمتة تحصيل الإيجار، تجديد العقود، سير عمل الصيانة، وتقارير الامتثال. تقليل العمل اليدوي بنسبة 70%.'
        },
        {
          icon: '💰',
          title: 'المحرك المالي',
          desc: 'دعم متعدد العملات، فواتير آلية، تكامل بنكي، ورؤية التدفق النقدي الفوري عبر جميع المناطق.'
        },
        {
          icon: '📈',
          title: 'التحليلات المتقدمة',
          desc: 'رؤى مدعومة بالذكاء الاصطناعي، الصيانة التنبؤية، مقارنة السوق، وتقارير جاهزة للمجلس في ثوانٍ.'
        },
        {
          icon: '🔗',
          title: 'API مفتوح',
          desc: 'واجهات RESTful، webhooks، وتكاملات جاهزة مع أنظمة ERP وCRM والمحاسبة الرائدة.'
        },
        {
          icon: '🏢',
          title: 'علامة بيضاء',
          desc: 'انشر تحت علامتك التجارية. نطاقات مخصصة، تطبيقات هاتف بعلامتك، وتخصيص بصري كامل.'
        }
      ]
    },
    hausbuddy: {
      badge: 'تطبيق هاوس بادي',
      title: 'تجربة المستأجر',
      titleHighlight: 'بشكل جديد.',
      subtitle: 'تطبيق جوال جميل وسهل الاستخدام يغير طريقة تفاعل السكان مع منازلهم. زيادة رضا المستأجرين، تقليل المغادرة، وتبسيط التواصل.',
      features: [
        {
          title: 'مدفوعات فورية',
          desc: 'Apple Pay، Google Pay، تحويلات بنكية. يدفع المستأجرون الإيجار في ثوانٍ، وتحصل على أموالك أسرع.',
          icon: '💳'
        },
        {
          title: 'صيانة ذكية',
          desc: 'رفع صور وفيديو، تصنيف بالذكاء الاصطناعي، تتبع الحالة الفوري. حل المشاكل أسرع 3 مرات.',
          icon: '🔧'
        },
        {
          title: 'مراسلة مباشرة',
          desc: 'دردشة آمنة داخل التطبيق مع مديري العقارات. لا مزيد من الإيميلات الضائعة.',
          icon: '💬'
        },
        {
          title: 'حجز المرافق',
          desc: 'المسبح، الصالة الرياضية، المواقف، أجنحة الضيوف. السكان يحجزون بلمسة واحدة.',
          icon: '🏊'
        },
        {
          title: 'مركز المستندات',
          desc: 'اتفاقيات الإيجار، الفواتير، قواعد المبنى. جميع المستندات متاحة في أي وقت.',
          icon: '📄'
        },
        {
          title: 'موجز المجتمع',
          desc: 'إعلانات المبنى، الفعاليات، والتواصل مع الجيران. بناء المجتمع.',
          icon: '🏠'
        }
      ],
      stats: [
        { value: '4.8', label: 'تقييم المتجر' },
        { value: '60%', label: 'مكالمات دعم أقل' },
        { value: '23%', label: 'احتفاظ أعلى' }
      ]
    },
    connection: {
      title: 'مزامنة سلسة.',
      subtitle: 'كل إجراء في هاوس بادي ينعكس فوراً في المدير. المدفوعات، الطلبات، التواصل—متزامنة في الوقت الفعلي عبر محفظتك بالكامل.'
    },
    global: {
      badge: 'تغطية عالمية',
      title: 'منصة واحدة.',
      titleHighlight: 'كل سوق.',
      subtitle: 'مبني للمحافظ الدولية. مخصص لكل منطقة.',
      regions: [
        { name: 'الشرق الأوسط', cities: 'دبي • أبوظبي • الرياض • الدوحة' },
        { name: 'أوروبا', cities: 'لندن • باريس • برلين • أمستردام' },
        { name: 'آسيا والمحيط الهادئ', cities: 'سنغافورة • هونغ كونغ • سيدني • طوكيو' },
        { name: 'الأمريكتان', cities: 'نيويورك • ميامي • تورنتو • ساو باولو' }
      ],
      features: [
        'دعم متعدد العملات واللغات',
        'امتثال إقليمي وأطر ضريبية',
        'تكاملات بوابات الدفع المحلية',
        'أتمتة واعية بالمنطقة الزمنية',
        'معتمد GDPR، SOC2، ISO 27001',
        'دعم عالمي على مدار الساعة'
      ]
    },
    enterprise: {
      badge: 'المؤسسات',
      title: 'مبني للتوسع.',
      titleHighlight: 'مهندس للأمان.',
      subtitle: 'البنية التحتية التي تثق بها شركات فورتشن 500 لمحافظها العقارية.',
      features: [
        {
          title: 'بنية تحتية مخصصة',
          desc: 'نشر سحابي خاص، موارد مخصصة، وSLAs مخصصة للعمليات الحرجة.',
          icon: '☁️'
        },
        {
          title: 'أمان متقدم',
          desc: 'متوافق مع SOC2 Type II، ISO 27001، GDPR. تشفير شامل، SSO، والتحكم بالوصول.',
          icon: '🔒'
        },
        {
          title: 'تكاملات مخصصة',
          desc: 'اتصل بمجموعتك التقنية الحالية. SAP، Oracle، Salesforce، وتكاملات ERP مخصصة.',
          icon: '🔌'
        },
        {
          title: 'فريق نجاح مخصص',
          desc: 'مدير حساب مسمى، متخصصون في التنفيذ، ودعم أولوية على مدار الساعة.',
          icon: '👥'
        }
      ]
    },
    testimonials: {
      badge: 'قصص العملاء',
      title: 'موثوق من قبل',
      titleHighlight: 'القادة العالميين.',
      items: [
        {
          quote: 'غيّر المدير عملياتنا عبر 15 دولة. ما كان يتطلب فرقاً إقليمية يعمل الآن من لوحة تحكم واحدة. العائد على الاستثمار كان فورياً.',
          name: 'جيمس تشن',
          role: 'الرئيس التنفيذي للعمليات',
          company: 'ميريديان العقارية، سنغافورة',
          image: 'JC'
        },
        {
          quote: 'زاد هاوس بادي درجات رضا المستأجرين بنسبة 40%. السكان يحبون التطبيق، وفريق الدعم لدينا أصبح لديه وقت للعمل الاستراتيجي.',
          name: 'صوفي لوران',
          role: 'رئيسة تجربة السكان',
          company: 'مجموعة المعيشة الأوروبية، باريس',
          image: 'SL'
        },
        {
          quote: 'المنصة تتعامل مع متطلباتنا متعددة العملات واللغات بسلاسة. أخيراً، حل يفهم العقارات الدولية.',
          name: 'أحمد الراشد',
          role: 'الرئيس التنفيذي',
          company: 'تطويرات الخليج الممتازة، دبي',
          image: 'AR'
        }
      ]
    },
    pricing: {
      badge: 'الأسعار',
      title: 'أسعار شفافة.',
      titleHighlight: 'تكاليف متوقعة.',
      subtitle: 'لا رسوم خفية. لا عقود طويلة. توسع بثقة.',
      plans: [
        {
          name: 'النمو',
          price: '$0.50',
          unit: 'لكل وحدة/شهر',
          desc: 'للمحافظ النامية الجاهزة للتوسع',
          features: [
            'حتى 500 وحدة',
            'تطبيق هاوس بادي للمستأجرين',
            'الإدارة المالية',
            'تتبع الصيانة',
            'دعم البريد والدردشة',
            'التكاملات القياسية'
          ],
          cta: 'ابدأ التجربة المجانية'
        },
        {
          name: 'الاحترافي',
          price: '$0.35',
          unit: 'لكل وحدة/شهر',
          desc: 'لمديري العقارات المعتمدين',
          features: [
            'حتى 5,000 وحدة',
            'كل شيء في النمو',
            'خيار العلامة البيضاء',
            'تحليلات متقدمة',
            'الوصول لـ API',
            'دعم أولوية',
            'سير عمل مخصص'
          ],
          cta: 'ابدأ التجربة المجانية',
          popular: true
        },
        {
          name: 'المؤسسات',
          price: 'مخصص',
          unit: 'مصمم لاحتياجاتك',
          desc: 'للعمليات العالمية الكبيرة',
          features: [
            'وحدات غير محدودة',
            'كل شيء في الاحترافي',
            'بنية تحتية مخصصة',
            'تكاملات مخصصة',
            'مدير نجاح مخصص',
            'دعم هاتفي 24/7',
            'ضمان SLA',
            'خيار محلي'
          ],
          cta: 'تواصل مع المبيعات'
        }
      ]
    },
    cta: {
      title: 'جاهز للانطلاق عالمياً؟',
      subtitle: 'انضم إلى +500 مدير عقارات حولوا عملياتهم مع المدير.',
      button: 'جدولة عرضك التوضيحي',
      note: 'عرض توضيحي مخصص 30 دقيقة • لا التزام مطلوب'
    },
    footer: {
      tagline: 'المعيار العالمي في ذكاء إدارة العقارات. تشغيل المحافظ عبر 12 دولة.',
      platform: 'المنصة',
      platformLinks: ['لوحة التحكم', 'الأتمتة', 'التحليلات', 'التكاملات', 'وثائق API'],
      hausbuddy: 'هاوس بادي',
      hausbuddyLinks: ['المميزات', 'تطبيق iOS', 'تطبيق Android', 'للسكان'],
      company: 'الشركة',
      companyLinks: ['من نحن', 'الوظائف', 'الصحافة', 'المدونة', 'تواصل معنا'],
      legal: 'قانوني',
      legalLinks: ['سياسة الخصوصية', 'شروط الخدمة', 'الأمان', 'GDPR', 'إعدادات الكوكيز'],
      copyright: '© 2025 المدير. جميع الحقوق محفوظة.',
      locations: 'دبي • لندن • سنغافورة • نيويورك'
    }
  }
};

type Language = 'en' | 'ar';

// ============================================
// HEADER
// ============================================
const Header = ({ lang, setLang, t }: { lang: Language; setLang: (l: Language) => void; t: typeof translations.en }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/page3" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 44 44" fill="none">
                <rect x="6" y="10" width="28" height="5" rx="2" fill="white"/>
                <rect x="6" y="19" width="22" height="5" rx="2" fill="white"/>
                <rect x="6" y="28" width="16" height="5" rx="2" fill="white"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white tracking-tight">THE MUDEER</span>
              <span className="text-[10px] text-zinc-500 tracking-[0.2em] uppercase">Property Intelligence</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: t.nav.platform, href: '#platform' },
              { label: t.nav.hausbuddy, href: '#hausbuddy' },
              { label: t.nav.enterprise, href: '#enterprise' },
              { label: t.nav.pricing, href: '#pricing' },
              { label: t.nav.contact, href: '#contact' }
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-400 hover:text-white transition-all border border-white/5"
            >
              {lang === 'en' ? '🇦🇪 العربية' : '🇬🇧 English'}
            </button>

            <a href="#" className="hidden sm:block text-sm text-zinc-400 hover:text-white transition-colors">
              {t.nav.login}
            </a>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:block px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-medium text-sm rounded-lg transition-all"
            >
              {t.nav.demo}
            </motion.button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`w-6 h-0.5 bg-white transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 bg-white transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 bg-white transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <nav className="flex flex-col gap-4">
                {[
                  { label: t.nav.platform, href: '#platform' },
                  { label: t.nav.hausbuddy, href: '#hausbuddy' },
                  { label: t.nav.enterprise, href: '#enterprise' },
                  { label: t.nav.pricing, href: '#pricing' }
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button className="w-full px-5 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium rounded-lg">
                  {t.nav.demo}
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

// ============================================
// HERO SECTION
// ============================================
const HeroSection = ({ t }: { t: typeof translations.en }) => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-fuchsia-600/15 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-violet-600/5 to-fuchsia-600/5 rounded-full blur-[100px]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
          >
            <span className="flex gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </span>
            <span className="text-sm text-zinc-300">{t.hero.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight"
          >
            {t.hero.title}<br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-xl text-lg transition-all shadow-lg shadow-violet-500/25"
            >
              {t.hero.cta}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl text-lg border border-white/10 transition-colors"
            >
              {t.hero.ctaSecondary}
            </motion.button>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="pt-12 border-t border-white/5"
          >
            <p className="text-sm text-zinc-500 mb-8">{t.hero.clients}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
              {['EMAAR', 'ALDAR', 'NAKHEEL', 'DAMAC', 'MERAAS', 'SOBHA'].map((client) => (
                <span key={client} className="text-lg md:text-xl font-bold text-zinc-600 tracking-wider">
                  {client}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// STATS SECTION
// ============================================
const StatsSection = ({ t }: { t: typeof translations.en }) => {
  return (
    <section className="py-20 bg-black border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {t.stats.items.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PLATFORM SECTION
// ============================================
const PlatformSection = ({ t }: { t: typeof translations.en }) => {
  return (
    <section id="platform" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm text-violet-400 mb-4 font-medium tracking-wide uppercase">{t.platform.badge}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t.platform.title}<br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{t.platform.titleHighlight}</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{t.platform.subtitle}</p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.platform.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, borderColor: 'rgba(139, 92, 246, 0.3)' }}
              className="group p-8 bg-zinc-900/50 rounded-2xl border border-white/5 transition-all hover:bg-zinc-900/80"
            >
              <span className="text-4xl mb-6 block">{feature.icon}</span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// HAUSBUDDY SECTION
// ============================================
const HausbuddySection = ({ t }: { t: typeof translations.en }) => {
  return (
    <section id="hausbuddy" className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[150px]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm text-fuchsia-400 mb-4 font-medium tracking-wide uppercase">{t.hausbuddy.badge}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t.hausbuddy.title}<br />
            <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">{t.hausbuddy.titleHighlight}</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{t.hausbuddy.subtitle}</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-[280px] h-[580px] bg-zinc-900 rounded-[50px] p-3 shadow-2xl shadow-fuchsia-500/20 border border-white/10">
                <div className="w-full h-full bg-gradient-to-b from-fuchsia-950 to-black rounded-[40px] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-10" />
                  
                  {/* Screen Content */}
                  <div className="pt-14 px-5 pb-5 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-xs text-zinc-500">Good Morning</p>
                        <p className="text-white font-semibold">Sarah Johnson</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-pink-500 rounded-full" />
                    </div>

                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-2xl p-5 mb-5">
                      <p className="text-xs text-white/70 mb-1">Next Payment Due</p>
                      <p className="text-2xl font-bold text-white mb-3">$2,450.00</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-white/70">Due Feb 1, 2025</span>
                        <button className="px-4 py-1.5 bg-white text-fuchsia-600 text-xs font-semibold rounded-full">
                          Pay Now
                        </button>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-4 gap-3 mb-5">
                      {['🔧', '📄', '🏊', '💬'].map((icon, i) => (
                        <div key={i} className="aspect-square bg-white/5 rounded-xl flex items-center justify-center text-xl">
                          {icon}
                        </div>
                      ))}
                    </div>

                    {/* Recent Activity */}
                    <div className="flex-1 bg-white/5 rounded-2xl p-4">
                      <p className="text-xs text-zinc-500 mb-3">Recent Activity</p>
                      {[
                        { text: 'Rent Payment Received', time: 'Today' },
                        { text: 'Maintenance Complete', time: 'Yesterday' }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                          <span className="text-sm text-white">{item.text}</span>
                          <span className="text-xs text-zinc-500">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -right-16 top-20 bg-zinc-900 rounded-xl p-4 shadow-xl border border-white/10"
              >
                <p className="text-xs text-zinc-500 mb-1">App Rating</p>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-white">4.8</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-fuchsia-400">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -left-16 bottom-32 bg-zinc-900 rounded-xl p-4 shadow-xl border border-white/10"
              >
                <p className="text-xs text-zinc-500 mb-1">Support Tickets</p>
                <p className="text-2xl font-bold text-fuchsia-400">-60%</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6">
              {t.hausbuddy.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 p-5 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-fuchsia-500/30 transition-all group"
                >
                  <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-fuchsia-400 transition-colors">{feature.title}</h4>
                    <p className="text-sm text-zinc-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {t.hausbuddy.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// CONNECTION SECTION
// ============================================
const ConnectionSection = ({ t }: { t: typeof translations.en }) => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Connection Visual */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-violet-600 to-violet-800 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/30">
              <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
                <rect x="6" y="10" width="28" height="5" rx="2" fill="white"/>
                <rect x="6" y="19" width="22" height="5" rx="2" fill="white"/>
                <rect x="6" y="28" width="16" height="5" rx="2" fill="white"/>
              </svg>
            </div>

            <div className="relative w-32 h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
              <motion.div
                className="absolute w-4 h-4 rounded-full bg-white shadow-lg top-1/2 -translate-y-1/2"
                animate={{ left: ['0%', '100%', '0%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            <div className="w-20 h-20 bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-fuchsia-500/30">
              <span className="text-3xl">📱</span>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.connection.title}</h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">{t.connection.subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// GLOBAL SECTION
// ============================================
const GlobalSection = ({ t }: { t: typeof translations.en }) => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm text-violet-400 mb-4 font-medium tracking-wide uppercase">{t.global.badge}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t.global.title}<br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{t.global.titleHighlight}</span>
          </h2>
          <p className="text-xl text-zinc-400">{t.global.subtitle}</p>
        </motion.div>

        {/* Regions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {t.global.regions.map((region, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5 text-center hover:border-violet-500/30 transition-all"
            >
              <h4 className="text-lg font-semibold text-white mb-2">{region.name}</h4>
              <p className="text-sm text-zinc-500">{region.cities}</p>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {t.global.features.map((feature, i) => (
            <div
              key={i}
              className="px-5 py-3 bg-zinc-900/50 rounded-full border border-white/5 text-sm text-zinc-300"
            >
              <span className="text-violet-400 mr-2">✓</span>
              {feature}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// ENTERPRISE SECTION
// ============================================
const EnterpriseSection = ({ t }: { t: typeof translations.en }) => {
  return (
    <section id="enterprise" className="py-32 bg-gradient-to-b from-black to-zinc-950 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm text-violet-400 mb-4 font-medium tracking-wide uppercase">{t.enterprise.badge}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t.enterprise.title}<br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{t.enterprise.titleHighlight}</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{t.enterprise.subtitle}</p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.enterprise.features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
              <p className="text-zinc-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TESTIMONIALS SECTION
// ============================================
const TestimonialsSection = ({ t }: { t: typeof translations.en }) => {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-[150px]" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm text-violet-400 mb-4 font-medium tracking-wide uppercase">{t.testimonials.badge}</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            {t.testimonials.title} <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{t.testimonials.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 hover:border-violet-500/20 transition-all"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-violet-400">★</span>
                ))}
              </div>
              <p className="text-zinc-300 mb-8 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {item.image}
                </div>
                <div>
                  <div className="font-semibold text-white">{item.name}</div>
                  <div className="text-sm text-zinc-500">{item.role}</div>
                  <div className="text-xs text-violet-400">{item.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// PRICING SECTION
// ============================================
const PricingSection = ({ t }: { t: typeof translations.en }) => {
  return (
    <section id="pricing" className="py-32 bg-black relative">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-sm text-violet-400 mb-4 font-medium tracking-wide uppercase">{t.pricing.badge}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t.pricing.title}<br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="text-xl text-zinc-400">{t.pricing.subtitle}</p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all ${
                plan.popular
                  ? 'bg-gradient-to-b from-violet-600/20 to-fuchsia-600/10 border-violet-500/30'
                  : 'bg-zinc-900/50 border-white/5 hover:border-white/10'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-zinc-500 mb-6">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-zinc-500 text-sm ml-1">{plan.unit}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-zinc-300">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// CTA SECTION
// ============================================
const CTASection = ({ t }: { t: typeof translations.en }) => {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t.cta.title}
          </h2>
          <p className="text-xl text-zinc-400 mb-10">{t.cta.subtitle}</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-violet-500/25"
          >
            {t.cta.button}
          </motion.button>
          <p className="mt-6 text-sm text-zinc-500">{t.cta.note}</p>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// FOOTER
// ============================================
const Footer = ({ t }: { t: typeof translations.en }) => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/page3" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 44 44" fill="none">
                  <rect x="6" y="10" width="28" height="5" rx="2" fill="white"/>
                  <rect x="6" y="19" width="22" height="5" rx="2" fill="white"/>
                  <rect x="6" y="28" width="16" height="5" rx="2" fill="white"/>
                </svg>
              </div>
              <span className="font-bold text-lg text-white">THE MUDEER</span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mb-4">
              {t.footer.tagline}
            </p>
            <p className="text-xs text-zinc-600">{t.footer.locations}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.platform}</h4>
            <ul className="space-y-3">
              {t.footer.platformLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-zinc-500 hover:text-violet-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.hausbuddy}</h4>
            <ul className="space-y-3">
              {t.footer.hausbuddyLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-zinc-500 hover:text-violet-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.company}</h4>
            <ul className="space-y-3">
              {t.footer.companyLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-zinc-500 hover:text-violet-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3">
              {t.footer.legalLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-zinc-500 hover:text-violet-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-600">{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <a key={social} href="#" className="text-sm text-zinc-600 hover:text-violet-400 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// MAIN PAGE
// ============================================
export default function Page3() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-black text-white font-['Outfit']">
      <Header lang={lang} setLang={setLang} t={t} />
      <HeroSection t={t} />
      <StatsSection t={t} />
      <PlatformSection t={t} />
      <HausbuddySection t={t} />
      <ConnectionSection t={t} />
      <GlobalSection t={t} />
      <EnterpriseSection t={t} />
      <TestimonialsSection t={t} />
      <PricingSection t={t} />
      <CTASection t={t} />
      <Footer t={t} />
    </main>
  );
}
