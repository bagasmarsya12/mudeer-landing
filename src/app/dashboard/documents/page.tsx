'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Home,
  Archive,
  Trash2,
  Users,
  Mail,
  AlertTriangle,
  FileText,
  Wrench,
  Database,
  Settings,
  Search,
  Bell,
  Plus,
  ChevronRight,
  X,
  ChevronDown,
  ClipboardList,
  BookOpen,
  Activity,
  Zap,
  Flame,
  Droplets,
  Thermometer,
  HandMetal,
  Folder,
  LayoutGrid,
  List,
  MoreHorizontal,
  FolderOpen,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

interface DocCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  count: number;
}

const categories: DocCategory[] = [
  { id: 'rental-contract',  label: 'Rental Contract',   icon: ClipboardList, count: 5 },
  { id: 'house-rules',      label: 'House Rules',        icon: BookOpen,      count: 5 },
  { id: 'meter-readings',   label: 'Meter Readings',     icon: Activity,      count: 3 },
  { id: 'electricity',      label: 'Electricity',        icon: Zap,           count: 3 },
  { id: 'gas',              label: 'Gas',                icon: Flame,         count: 3 },
  { id: 'water',            label: 'Water',              icon: Droplets,      count: 3 },
  { id: 'oil-heating',      label: 'Oil Heating',        icon: Thermometer,   count: 0 },
  { id: 'service-provider', label: 'Service Provider',   icon: Wrench,        count: 0 },
  { id: 'others',           label: 'Others',             icon: FolderOpen,    count: 0 },
];

const totalFiles = categories.reduce((s, c) => s + c.count, 0);

const navItems = [
  { icon: Users,         label: 'Tenant Management', href: '/dashboard/tenant-management' },
  { icon: Mail,          label: 'Messages',           href: '/dashboard/messages' },
  { icon: AlertTriangle, label: 'Damage Reports',     href: '/dashboard/damage-reports' },
  { icon: FileText,      label: 'Documents',          href: '/dashboard/documents' },
  { icon: Wrench,        label: 'Service Providers',  href: '/dashboard/service-providers' },
  { icon: Database,      label: 'Data',               href: '#' },
];

const docSubItems = [
  { id: '',                 label: 'All Files',        icon: FolderOpen },
  { id: 'rental-contract',  label: 'Rental Contract',  icon: ClipboardList },
  { id: 'house-rules',      label: 'House Rules',      icon: BookOpen },
  { id: 'meter-readings',   label: 'Meter Readings',   icon: Activity },
  { id: 'electricity',      label: 'Electricity',      icon: Zap },
  { id: 'gas',              label: 'Gas',              icon: Flame },
  { id: 'water',            label: 'Water',            icon: Droplets },
  { id: 'oil-heating',      label: 'Oil Heating',      icon: Thermometer },
  { id: 'service-provider', label: 'Service Provider', icon: Wrench },
  { id: 'others',           label: 'Others',           icon: Folder },
];

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const Sidebar = () => (
  <aside className="w-[280px] shrink-0 bg-[#faf8f5] flex flex-col h-screen sticky top-0">
    <div className="px-6 pt-6 pb-4 flex items-center gap-3">
      <div className="flex flex-col gap-[3px]">
        <div className="w-[18px] h-1 bg-[#cda460] rounded-full" />
        <div className="w-[14px] h-1 bg-[#cda460] rounded-full" />
        <div className="w-[10px] h-1 bg-[#cda460] rounded-full" />
      </div>
      <div className="flex flex-col gap-[2px]">
        <span className="font-black text-[18px] tracking-[-0.89px] text-[#1a1814] leading-none">THE MUDEER</span>
        <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#7d7870] leading-none">Property Management</span>
      </div>
    </div>

    <nav className="flex-1 px-3 py-2 overflow-y-auto scrollbar-minimal" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}>
      <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[#7d7870] hover:bg-[#f0ebe0] transition-colors mb-1">
        <Home size={18} /><span className="text-[14px] font-semibold">Overview</span>
      </Link>

      {navItems.map(({ icon: Icon, label, href }) => {
        const isDocs = label === 'Documents';
        return (
          <div key={label}>
            <Link
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors mb-1 ${
                isDocs ? 'bg-[#f0ebe0] text-[#1a1814]' : 'text-[#7d7870] hover:bg-[#f0ebe0]'
              }`}
            >
              <Icon size={18} />
              <span className="text-[14px] font-semibold flex-1">{label}</span>
              {isDocs && (
                <>
                  <span className="text-[11px] font-bold bg-[#e05252] text-white rounded-full px-1.5 py-0.5 leading-none">{totalFiles}</span>
                  <ChevronDown size={14} className="opacity-50" />
                </>
              )}
            </Link>

            {isDocs && (
              <div className="ml-7 mb-1 flex flex-col gap-0.5">
                {docSubItems.map((sub) => (
                  <Link key={sub.label} href={sub.id ? `/dashboard/documents/${sub.id}` : '/dashboard/documents'}>
                    <div
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] transition-colors w-full text-left cursor-pointer ${
                        sub.id === ''
                          ? 'font-bold text-[#1a1814] bg-[#f4ebd9]'
                          : 'font-medium text-[#7d7870] hover:bg-[#f0ebe0]'
                      }`}
                    >
                      <sub.icon size={13} />
                      {sub.label}
                      {sub.id === '' && <ChevronRight size={12} className="ml-auto opacity-50" />}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>

    <div className="px-3 pb-6">
      <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[#7d7870] hover:bg-[#f0ebe0] transition-colors">
        <Settings size={18} /><span className="text-[14px] font-semibold">Settings</span>
      </Link>
    </div>
  </aside>
);

// ─── TopBar ───────────────────────────────────────────────────────────────────

const TopBar = () => (
  <header className="h-[88px] flex items-center px-8 gap-4 bg-[#faf8f5]">
    <div className="flex items-center gap-2 text-[14px] flex-1">
      <Link href="/dashboard">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors">
          <X size={12} className="text-[#7d7870]" />
          <span className="text-[#7d7870] font-medium">Overview</span>
        </button>
      </Link>
      <ChevronRight size={14} className="text-[#c5bfb5]" />
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0ebe0] rounded-[10px]">
        <span className="text-[#1a1814] font-semibold">Documents</span>
        <Link href="/dashboard">
          <X size={12} className="text-[#7d7870] cursor-pointer hover:text-[#1a1814] transition-colors" />
        </Link>
      </div>
      <button className="w-7 h-7 flex items-center justify-center rounded-[8px] bg-[#e6e1d8] hover:bg-[#ddd8cf] transition-colors">
        <Plus size={13} className="text-[#7d7870]" />
      </button>
    </div>

    <div className="flex items-center gap-2 bg-white border border-[#e8e4db] rounded-full px-4 py-2 w-[220px] shadow-sm">
      <Search size={14} className="text-[#7d7870] shrink-0" />
      <input type="text" placeholder="Search" className="bg-transparent text-[14px] text-[#1a1814] placeholder:text-[#7d7870] outline-none w-full" />
    </div>
    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors">
      <Bell size={20} className="text-[#1a1814]" />
    </button>
  </header>
);

// ─── Category Card ────────────────────────────────────────────────────────────

const CategoryCard = ({ cat, view }: { cat: DocCategory; view: 'grid' | 'list' }) => {
  const Icon = cat.icon;

  if (view === 'list') {
    return (
      <Link href={`/dashboard/documents/${cat.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 p-4 bg-white border border-[#e8e4db] rounded-[16px] hover:shadow-md transition-shadow cursor-pointer group"
      >
        {/* Icon tile */}
        <div className="relative shrink-0">
          <div className="w-11 h-11 rounded-[12px] bg-[#7d6e5a] flex items-center justify-center">
            <Icon size={20} className="text-white" />
          </div>
          {cat.count > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#e05252] text-white text-[9px] font-bold flex items-center justify-center">
              {cat.count}
            </span>
          )}
        </div>
        <span className="text-[14px] font-bold text-[#1a1814] flex-1">{cat.label}</span>
        <span className="text-[12px] text-[#9e9e9e] mr-2">{cat.count} file{cat.count !== 1 ? 's' : ''}</span>
        <ChevronRight size={15} className="text-[#c5bfb5] group-hover:text-[#b8975a] transition-colors" />
      </motion.div>
      </Link>
    );
  }

  return (
    <Link href={`/dashboard/documents/${cat.id}`}>
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
      className="bg-white border border-[#e8e4db] rounded-[20px] p-5 flex flex-col items-center gap-4 cursor-pointer hover:shadow-lg transition-shadow group relative"
    >
      {/* 3-dots menu — shown on hover */}
      <button className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#f0ebe0] transition-all">
        <MoreHorizontal size={15} className="text-[#7d7870]" />
      </button>

      {/* Icon tile */}
      <div className="relative mt-2">
        <div className="w-[72px] h-[72px] rounded-[18px] bg-[#7d6e5a] flex items-center justify-center shadow-sm">
          <Icon size={32} className="text-white" strokeWidth={1.8} />
        </div>
        {cat.count > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#e05252] text-white text-[10px] font-bold flex items-center justify-center shadow">
            {cat.count}
          </span>
        )}
      </div>

      {/* Label + chevron */}
      <div className="flex items-center justify-center gap-1.5">
        <span className="text-[15px] font-bold text-[#1a1814]">{cat.label}</span>
        <ChevronRight size={14} className="text-[#c5bfb5] group-hover:text-[#b8975a] transition-colors" />
      </div>
    </motion.div>
    </Link>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function DocumentsPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <div className="flex h-screen bg-[#faf8f5] overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar />

        {/* Main area */}
        <div className="flex-1 bg-[#f0ebe0] rounded-tl-[36px] overflow-hidden min-h-0">
          <div
            className="h-full overflow-y-auto p-6 scrollbar-minimal"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
          >
            {/* + add tab button */}
            <button className="mb-3 w-8 h-8 rounded-[9px] bg-[#e6e1d8] hover:bg-[#ddd8cf] flex items-center justify-center transition-colors shadow-sm">
              <Plus size={14} className="text-[#7d7870]" />
            </button>

            <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] overflow-hidden">

              {/* ─── Header ─────────────────────────────────────────────── */}
              <div className="flex items-center justify-between px-7 pt-6 pb-5">
                <div className="flex items-center gap-3">
                  <h1 className="text-[20px] font-bold text-[#1a1814]">Documents</h1>
                  <span className="flex items-center gap-1.5 text-[14px] text-[#b8975a] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b8975a] inline-block" />
                    {totalFiles} files
                  </span>
                </div>

                {/* Grid / List toggle */}
                <div className="flex items-center gap-1 p-1 bg-[#f0ebe0] rounded-[10px]">
                  <button
                    onClick={() => setView('grid')}
                    className={`w-8 h-8 flex items-center justify-center rounded-[8px] transition-colors ${
                      view === 'grid' ? 'bg-white shadow-sm text-[#1a1814]' : 'text-[#9e9e9e] hover:text-[#7d7870]'
                    }`}
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button
                    onClick={() => setView('list')}
                    className={`w-8 h-8 flex items-center justify-center rounded-[8px] transition-colors ${
                      view === 'list' ? 'bg-white shadow-sm text-[#1a1814]' : 'text-[#9e9e9e] hover:text-[#7d7870]'
                    }`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>

              {/* ─── Grid / List ─────────────────────────────────────────── */}
              <div className="px-6 pb-6">
                {view === 'grid' ? (
                  <div className="grid grid-cols-3 gap-4">
                    {categories.map((cat, i) => (
                      <motion.div key={cat.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18, delay: i * 0.04 }}>
                        <CategoryCard cat={cat} view="grid" />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    {categories.map((cat, i) => (
                      <motion.div key={cat.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15, delay: i * 0.03 }}>
                        <CategoryCard cat={cat} view="list" />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#1a1814] text-white shadow-2xl flex items-center justify-center hover:bg-[#2d2820] transition-colors hover:scale-105 active:scale-95 z-50">
        <Plus size={24} />
      </button>
    </div>
  );
}
