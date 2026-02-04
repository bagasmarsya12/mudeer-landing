'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { useLanguage } from '@/lib/LanguageContext';

const content = {
  EN: {
    welcome: {
      title: 'Welcome to',
      highlight: 'The Future',
      subtitle: 'Access your property management dashboard and take control of your real estate portfolio with elegance and precision.',
      stats: [
        { value: '500+', label: 'Properties' },
        { value: '50K+', label: 'Users' },
        { value: '99.9%', label: 'Uptime' }
      ]
    },
    form: {
      title: 'Client Portal',
      subtitle: 'Sign in to access your dashboard',
      email: 'Email Address',
      password: 'Password',
      remember: 'Remember me',
      forgot: 'Forgot password?',
      signIn: 'Sign In',
      signingIn: 'Signing In...',
      divider: 'or',
      google: 'Continue with Google',
      apple: 'Continue with Apple',
      noAccount: "Don't have an account?",
      requestAccess: 'Request Access'
    },
    footer: '© 2025 The Mudeer. All rights reserved.'
  },
  AR: {
    welcome: {
      title: 'مرحباً بك في',
      highlight: 'المستقبل',
      subtitle: 'الوصول إلى لوحة تحكم إدارة العقارات الخاصة بك والسيطرة على محفظتك العقارية بأناقة ودقة.',
      stats: [
        { value: '500+', label: 'عقار' },
        { value: '50K+', label: 'مستخدم' },
        { value: '99.9%', label: 'الوقت التشغيلي' }
      ]
    },
    form: {
      title: 'بوابة العملاء',
      subtitle: 'سجل الدخول للوصول إلى لوحة التحكم',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      remember: 'تذكرني',
      forgot: 'نسيت كلمة المرور؟',
      signIn: 'تسجيل الدخول',
      signingIn: 'جاري تسجيل الدخول...',
      divider: 'أو',
      google: 'المتابعة مع Google',
      apple: 'المتابعة مع Apple',
      noAccount: 'ليس لديك حساب؟',
      requestAccess: 'طلب الوصول'
    },
    footer: '© 2025 المدير. جميع الحقوق محفوظة.'
  },
  ID: {
    welcome: {
      title: 'Selamat datang di',
      highlight: 'Masa Depan',
      subtitle: 'Akses dasbor manajemen properti Anda dan ambil kendali atas portofolio real estate Anda dengan elegan dan presisi.',
      stats: [
        { value: '500+', label: 'Properti' },
        { value: '50K+', label: 'Pengguna' },
        { value: '99.9%', label: 'Uptime' }
      ]
    },
    form: {
      title: 'Portal Klien',
      subtitle: 'Masuk untuk mengakses dasbor Anda',
      email: 'Alamat Email',
      password: 'Kata Sandi',
      remember: 'Ingat saya',
      forgot: 'Lupa kata sandi?',
      signIn: 'Masuk',
      signingIn: 'Sedang Masuk...',
      divider: 'atau',
      google: 'Lanjutkan dengan Google',
      apple: 'Lanjutkan dengan Apple',
      noAccount: 'Belum punya akun?',
      requestAccess: 'Minta Akses'
    },
    footer: '© 2025 The Mudeer. Hak cipta dilindungi.'
  }
};

// ============================================
// ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
};

// ============================================
// LOGIN FORM COMPONENT
// ============================================
const LoginForm = ({ t, isRTL }: { t: typeof content.EN.form; isRTL: boolean }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Email Field */}
      <motion.div variants={fadeInUp} className="relative">
        <motion.label
          className={`absolute ${isRTL ? 'right-4' : 'left-4'} transition-all duration-300 pointer-events-none ${
            focusedField === 'email' || email
              ? '-top-2.5 text-xs text-[#D4AF37] bg-[#0F1D2F] px-2'
              : 'top-4 text-[#9CA3AF]'
          }`}
        >
          {t.email}
        </motion.label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocusedField('email')}
          onBlur={() => setFocusedField(null)}
          className="w-full px-4 py-4 bg-transparent border border-[#D4AF37]/30 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37] transition-all"
          required
        />
        <motion.div
          className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} h-0.5 bg-[#D4AF37]`}
          initial={{ width: 0 }}
          animate={{ width: focusedField === 'email' ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Password Field */}
      <motion.div variants={fadeInUp} className="relative">
        <motion.label
          className={`absolute ${isRTL ? 'right-4' : 'left-4'} transition-all duration-300 pointer-events-none ${
            focusedField === 'password' || password
              ? '-top-2.5 text-xs text-[#D4AF37] bg-[#0F1D2F] px-2'
              : 'top-4 text-[#9CA3AF]'
          }`}
        >
          {t.password}
        </motion.label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setFocusedField('password')}
          onBlur={() => setFocusedField(null)}
          className={`w-full px-4 py-4 bg-transparent border border-[#D4AF37]/30 rounded-lg text-[#F8F9FA] focus:outline-none focus:border-[#D4AF37] transition-all ${isRTL ? 'pl-12 pr-4' : 'pr-12'}`}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#D4AF37] transition-colors`}
        >
          {showPassword ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          )}
        </button>
        <motion.div
          className={`absolute bottom-0 ${isRTL ? 'right-0' : 'left-0'} h-0.5 bg-[#D4AF37]`}
          initial={{ width: 0 }}
          animate={{ width: focusedField === 'password' ? '100%' : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Remember Me & Forgot Password */}
      <motion.div variants={fadeInUp} className={`flex items-center justify-between text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
        <label className={`flex items-center gap-2 cursor-pointer group ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="relative">
            <input type="checkbox" className="peer sr-only" />
            <div className="w-5 h-5 border border-[#D4AF37]/30 rounded peer-checked:bg-[#D4AF37] peer-checked:border-[#D4AF37] transition-all" />
            <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-[#0A1628] opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-[#9CA3AF] group-hover:text-[#F8F9FA] transition-colors">{t.remember}</span>
        </label>
        <Link href="#" className="text-[#D4AF37] hover:text-[#E8C968] transition-colors">
          {t.forgot}
        </Link>
      </motion.div>

      {/* Submit Button */}
      <motion.button
        variants={fadeInUp}
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-[#D4AF37] text-[#0A1628] font-semibold tracking-wider uppercase rounded-lg hover:bg-[#E8C968] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group"
      >
        <motion.span
          className="absolute inset-0 bg-white/20"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.5 }}
        />
        {isLoading ? (
          <>
            <motion.svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </motion.svg>
            {t.signingIn}
          </>
        ) : (
          t.signIn
        )}
      </motion.button>
    </motion.form>
  );
};

// ============================================
// BACKGROUND ANIMATION COMPONENT
// ============================================
const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0F1D2F] to-[#1A2B42]" />
      
      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#D4AF37 1px, transparent 1px),
            linear-gradient(90deg, #D4AF37 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating Orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: 300 + i * 100,
            height: 300 + i * 100,
            background: i % 2 === 0 
              ? 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(0, 167, 157, 0.05) 0%, transparent 70%)',
            left: `${20 + i * 30}%`,
            top: `${30 + i * 15}%`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Glowing Lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <motion.path
          d="M0,50 Q400,100 800,50 T1600,50"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.path
          d="M0,150 Q400,100 800,150 T1600,150"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.15 }}
          transition={{ duration: 4, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// ============================================
// LOGO COMPONENT
// ============================================
const Logo = () => (
  <Link href="/page2" className="flex items-center gap-3 group">
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative"
    >
      <svg className="w-10 h-10" viewBox="0 0 44 44" fill="none">
        <rect x="6" y="8" width="32" height="6" rx="2" fill="#D4AF37"/>
        <rect x="6" y="19" width="26" height="6" rx="2" fill="#D4AF37"/>
        <rect x="6" y="30" width="20" height="6" rx="2" fill="#D4AF37"/>
      </svg>
      <motion.div
        className="absolute inset-0 bg-[#D4AF37]/20 blur-xl rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
    <div>
      <div className="font-['Outfit'] font-semibold text-base tracking-[0.2em] text-[#F8F9FA] uppercase">
        The Mudeer
      </div>
      <div className="text-[8px] tracking-[0.15em] text-[#D4AF37] uppercase">
        Property Management
      </div>
    </div>
  </Link>
);

// ============================================
// MAIN LOGIN PAGE
// ============================================
export default function LoginPage() {
  const { language } = useLanguage();
  const t = content[language];
  const isRTL = language === 'AR';

  return (
    <div className="min-h-screen bg-[#0A1628] text-[#F8F9FA] font-['Outfit'] relative overflow-hidden flex flex-col">
      <Header />
      
      <div className="flex-1 flex" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Left Side - Decorative */}
        <div className="hidden lg:block w-1/2 relative">
          <BackgroundAnimation />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-16">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-['Cormorant_Garamond'] text-5xl xl:text-6xl leading-tight mb-6">
                {t.welcome.title}<br />
                <span className="text-[#D4AF37]">{t.welcome.highlight}</span>
              </h1>
              <p className="text-lg text-[#CBC5CE] max-w-md leading-relaxed">
                {t.welcome.subtitle}
              </p>
            </motion.div>

            {/* Decorative Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`flex gap-12 mt-16 ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t.welcome.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37]">{stat.value}</div>
                  <div className="text-xs text-[#9CA3AF] uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col relative">
          {/* Mobile Background */}
          <div className="lg:hidden absolute inset-0">
            <BackgroundAnimation />
          </div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 p-8"
          >
            <Logo />
          </motion.header>

          {/* Form Container */}
          <div className="flex-1 flex items-center justify-center p-8 relative z-10">
            <motion.div
              variants={scaleIn}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md"
            >
              {/* Login Card */}
              <div className="bg-gradient-to-br from-[#0F1D2F]/90 to-[#1A2B42]/90 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-[#D4AF37]/20 shadow-2xl">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center mb-10"
                >
                  <h2 className="font-['Cormorant_Garamond'] text-3xl text-[#F8F9FA] mb-2">
                    {t.form.title}
                  </h2>
                  <p className="text-[#9CA3AF] text-sm">
                    {t.form.subtitle}
                  </p>
                </motion.div>

                {/* Login Form */}
                <LoginForm t={t.form} isRTL={isRTL} />

                {/* Divider */}
                <motion.div
                  variants={fadeIn}
                  className={`flex items-center gap-4 my-8 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 h-px bg-[#D4AF37]/20" />
                  <span className="text-[#9CA3AF] text-xs uppercase tracking-wider">{t.form.divider}</span>
                  <div className="flex-1 h-px bg-[#D4AF37]/20" />
                </motion.div>

                {/* Social Login */}
                <motion.div variants={fadeIn} className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 border border-[#D4AF37]/30 rounded-lg flex items-center justify-center gap-3 text-[#F8F9FA] hover:bg-[#D4AF37]/5 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    {t.form.google}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 border border-[#D4AF37]/30 rounded-lg flex items-center justify-center gap-3 text-[#F8F9FA] hover:bg-[#D4AF37]/5 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    {t.form.apple}
                  </motion.button>
                </motion.div>

                {/* Sign Up Link */}
                <motion.p
                  variants={fadeIn}
                  className={`text-center mt-8 text-[#9CA3AF] text-sm ${isRTL ? 'flex flex-row-reverse items-center justify-center gap-1' : ''}`}
                >
                  {t.form.noAccount}{' '}
                  <Link href="#" className="text-[#D4AF37] hover:text-[#E8C968] transition-colors font-medium">
                    {t.form.requestAccess}
                  </Link>
                </motion.p>
              </div>

              {/* Footer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-8 text-[#9CA3AF] text-xs"
              >
                {t.footer}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
