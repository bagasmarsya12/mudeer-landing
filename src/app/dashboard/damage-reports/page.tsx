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
  ArrowUpDown,
  ListFilter,
} from 'lucide-react';
import { navItems } from '@/lib/constants/navigation';
import type { DamageReport } from '@/lib/data/damageReports';
import { reports, urgencyBadge, statusColor } from '@/lib/data/damageReports';


// ─── Helpers ──────────────────────────────────────────────────────────────────

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
      <Link
        href="/dashboard"
        className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[#7d7870] hover:bg-[#f0ebe0] transition-colors mb-1"
      >
        <Home size={18} /><span className="text-[14px] font-semibold">Overview</span>
      </Link>

      {navItems.map(({ icon: Icon, label, href }) => {
        const isDamage = label === 'Damage Reports';
        return (
          <div key={label}>
            <Link
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors mb-1 ${
                isDamage
                  ? 'bg-[#f0ebe0] text-[#1a1814]'
                  : 'text-[#7d7870] hover:bg-[#f0ebe0]'
              }`}
            >
              <Icon size={18} />
              <span className="text-[14px] font-semibold flex-1">{label}</span>
              {isDamage && <ChevronDown size={14} className="opacity-50" />}
            </Link>

            {isDamage && (
              <div className="ml-7 mb-1 flex flex-col gap-0.5">
                {[
                  { label: 'All Items',   icon: ListFilter, active: true },
                  { label: 'All Drafts', icon: Archive,     active: false },
                  { label: 'Bin',        icon: Trash2,      active: false },
                ].map(sub => (
                  <button
                    key={sub.label}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] font-medium transition-colors w-full text-left ${
                      sub.active
                        ? 'text-[#1a1814] font-semibold'
                        : 'text-[#7d7870] hover:bg-[#f0ebe0]'
                    }`}
                  >
                    <sub.icon size={14} />
                    {sub.label}
                    {sub.active && <ChevronRight size={12} className="ml-auto opacity-50" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>

    <div className="px-3 pb-6">
      <Link
        href="#"
        className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[#7d7870] hover:bg-[#f0ebe0] transition-colors"
      >
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
        <span className="text-[#1a1814] font-semibold">Damage Reports</span>
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
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent text-[14px] text-[#1a1814] placeholder:text-[#7d7870] outline-none w-full"
      />
    </div>
    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors">
      <Bell size={20} className="text-[#1a1814]" />
    </button>
  </header>
);

// ─── Th helper ────────────────────────────────────────────────────────────────

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-3 text-left">
    <button className="flex items-center gap-1.5 text-[12px] font-semibold text-[#7d7870] hover:text-[#1a1814] transition-colors whitespace-nowrap">
      {children}
      <ArrowUpDown size={11} className="opacity-60" />
    </button>
  </th>
);

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function DamageReportsPage() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleAll = () =>
    setSelected(selected.length === reports.length ? [] : reports.map(r => r.id));

  const toggle = (id: number) =>
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  return (
    <div className="flex h-screen bg-[#faf8f5] overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar />

        {/* Main area */}
        <div className="flex-1 bg-[#f0ebe0] rounded-tl-[36px] overflow-y-auto scrollbar-minimal" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}>
          <div className="p-6">
            {/* + add tab */}
            <button className="mb-3 w-8 h-8 rounded-[9px] bg-[#e6e1d8] hover:bg-[#ddd8cf] flex items-center justify-center transition-colors shadow-sm">
              <Plus size={14} className="text-[#7d7870]" />
            </button>

            <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] overflow-hidden">

              {/* ─── Header row ───────────────────────────────────────── */}
              <div className="flex items-center justify-between px-7 pt-6 pb-5">
                <div className="flex items-center gap-3">
                  <h1 className="text-[20px] font-bold text-[#1a1814]">Damage Reports</h1>
                  <span className="text-[14px] text-[#b8975a] font-semibold">• {reports.length} Files</span>
                </div>
                <button className="px-4 py-2 rounded-[10px] border border-[#e8e4db] bg-white text-[13px] font-semibold text-[#1a1814] hover:bg-[#f0ebe0] transition-colors shadow-sm">
                  Edit Table
                </button>
              </div>

              {/* ─── Table ─────────────────────────────────────────────── */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-y border-[#e8e4db] bg-[#faf8f5]/60">
                      <th className="px-4 py-3 w-10">
                        <input
                          type="checkbox"
                          checked={selected.length === reports.length}
                          onChange={toggleAll}
                          className="w-4 h-4 rounded accent-[#b8975a] cursor-pointer"
                        />
                      </th>
                      <Th>Urgency</Th>
                      <Th>Date</Th>
                      <Th>Time</Th>
                      <Th>Last Updated</Th>
                      <Th>First Name</Th>
                      <Th>Last Name</Th>
                      <Th>Building</Th>
                      <Th>Title</Th>
                      <Th>Category</Th>
                      <Th>Status</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((r, i) => (
                      <motion.tr
                        key={r.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18, delay: i * 0.03 }}
                        onClick={() => window.location.href = `/dashboard/damage-reports/${r.id}`}
                        className={`border-b border-[#f0ebe0] hover:bg-[#faf8f5]/70 cursor-pointer transition-colors ${
                          selected.includes(r.id) ? 'bg-[#f4ebd9]/50' : ''
                        }`}
                      >
                        <td className="px-4 py-3.5" onClick={e => e.stopPropagation()}>
                          <input
                            type="checkbox"
                            checked={selected.includes(r.id)}
                            onChange={() => toggle(r.id)}
                            className="w-4 h-4 rounded accent-[#b8975a] cursor-pointer"
                          />
                        </td>
                        <td className="px-4 py-3.5">
                          <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-[6px] text-[11px] font-semibold whitespace-nowrap ${urgencyBadge[r.urgency]}`}>
                            {r.urgency}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{r.date}</td>
                        <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{r.time}</td>
                        <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{r.lastUpdated}</td>
                        <td className="px-4 py-3.5 text-[13px] font-medium text-[#1a1814]">{r.firstName}</td>
                        <td className="px-4 py-3.5 text-[13px] font-medium text-[#1a1814]">{r.lastName}</td>
                        <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{r.building}</td>
                        <td className="px-4 py-3.5 text-[13px] text-[#1a1814] max-w-[180px] truncate">{r.title}</td>
                        <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{r.category}</td>
                        <td className="px-4 py-3.5">
                          <span className={`text-[13px] font-semibold ${statusColor[r.status]}`}>
                            {r.status}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ─── Pagination ────────────────────────────────────────── */}
              <div className="flex items-center justify-between px-6 py-4 border-t border-[#e8e4db]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 border border-[#e8e4db] rounded-[8px] px-2 py-1 bg-white text-[12px] text-[#1a1814] font-medium cursor-pointer hover:bg-[#f0ebe0] transition-colors">
                    20 <ChevronDown size={11} className="text-[#7d7870]" />
                  </div>
                  <span className="text-[12px] text-[#7d7870]">
                    Items per page 1 – {reports.length} of {reports.length} items
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 border border-[#e8e4db] rounded-[8px] px-2 py-1 bg-white text-[12px] text-[#1a1814] font-medium cursor-pointer hover:bg-[#f0ebe0] transition-colors">
                    1 <ChevronDown size={11} className="text-[#7d7870]" />
                  </div>
                  <span className="text-[12px] text-[#7d7870]">of 1 page</span>
                  <button className="w-6 h-6 flex items-center justify-center rounded-[6px] border border-[#e8e4db] bg-white hover:bg-[#f0ebe0] transition-colors text-[#7d7870] text-[12px]">‹</button>
                  <button className="w-6 h-6 flex items-center justify-center rounded-[6px] border border-[#e8e4db] bg-white hover:bg-[#f0ebe0] transition-colors text-[#7d7870] text-[12px]">›</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ─── FAB ─────────────────────────────────────────────────────────── */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#b8975a] hover:bg-[#a8875a] text-white shadow-[0px_8px_24px_rgba(184,151,90,0.5)] flex items-center justify-center transition-all hover:scale-105 active:scale-95 z-50">
        <Plus size={24} />
      </button>
    </div>
  );
}
