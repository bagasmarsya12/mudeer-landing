import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="text-center space-y-8 px-6 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          The <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Mudeer</span>
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Choose a landing page design
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link
            href="/page1"
            className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-yellow-600 text-[#0A1628] rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-yellow-600/20"
          >
            Page 1 - Luxury Gold
          </Link>
          <Link
            href="/page2"
            className="px-8 py-4 bg-[#0A1628] border-2 border-[#D4AF37] text-[#D4AF37] rounded-xl font-semibold text-lg hover:bg-[#D4AF37] hover:text-[#0A1628] transition-all"
          >
            Page 2 - Editorial Navy
          </Link>
          <Link
            href="/page3"
            className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-semibold text-lg hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-violet-600/20"
          >
            Page 3 - Global SaaS (Dark)
          </Link>
          <Link
            href="/page4"
            className="px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all shadow-lg shadow-white/20 border border-slate-200"
          >
            Page 4 - Professional (Light)
          </Link>
        </div>
        <div className="pt-8 border-t border-white/10 mt-8">
          <p className="text-slate-500 text-sm mb-4">
            ✨ Page 4 Features
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300">☀️ Light Theme</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300">💎 Professional</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300">📊 Dashboard Preview</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300">📱 Hausbuddy</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300">💰 Pricing</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-slate-300">⭐ Testimonials</span>
          </div>
        </div>
      </div>
    </div>
  );
}
