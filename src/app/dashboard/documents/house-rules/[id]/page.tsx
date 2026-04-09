'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Home,
  Mail,
  Settings,
  Search,
  Bell,
  Plus,
  ChevronRight,
  ChevronLeft,
  X,
  ChevronDown,
  MoreHorizontal,
  Undo2,
  Redo2,
  Bold,
  Italic,
  AlignLeft,
  List,
  MoreVertical,
  Smartphone,
  ZoomIn,
  Download,
  Trash2,
} from 'lucide-react';
import type { HouseRuleDetail } from '@/lib/data/documents';
import { houseRuleDetails } from '@/lib/data/documents';
import { navItems, docSubItems } from '@/lib/constants/navigation';

// ─── Sidebar ───────────────────────────────────────────────────────────────────────────────

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

    <nav
      className="flex-1 px-3 py-2 overflow-y-auto"
      style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
    >
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
              {isDocs && <ChevronDown size={14} className="opacity-50" />}
            </Link>

            {isDocs && (
              <div className="ml-7 mb-1 flex flex-col gap-0.5">
                {docSubItems.map(sub => {
                  const isActive = sub.id === 'house-rules';
                  return (
                    <Link
                      key={sub.label}
                      href={sub.id ? `/dashboard/documents/${sub.id}` : '/dashboard/documents'}
                    >
                      <div
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] transition-colors cursor-pointer ${
                          isActive
                            ? 'font-bold text-[#1a1814] bg-[#f4ebd9]'
                            : 'font-medium text-[#7d7870] hover:bg-[#f0ebe0]'
                        }`}
                      >
                        <sub.icon size={13} />
                        {sub.label}
                        {isActive && <ChevronRight size={12} className="ml-auto opacity-50" />}
                      </div>
                    </Link>
                  );
                })}
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

// ─── Page ───────────────────────────────────────────────────────────────────────────────

export default function HouseRuleDetailPage() {
  const params = useParams();
  const docId = Number(params.id);

  const detail = houseRuleDetails[docId] as HouseRuleDetail | undefined;

  const [activePage, setActivePage]             = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(detail?.selectedCategory ?? '');
  const [description, setDescription]           = useState(detail?.description ?? '');
  const [sendViaHausBuddy, setSendViaHausBuddy] = useState(detail?.sendViaHausBuddy ?? false);
  const [sendViaEmail, setSendViaEmail]         = useState(detail?.sendViaEmail ?? false);

  if (!detail) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#faf8f5]">
        <div className="text-center">
          <p className="text-[18px] font-bold text-[#1a1814] mb-2">Document not found</p>
          <Link href="/dashboard/documents/house-rules" className="text-[14px] text-[#b8975a] hover:underline">
            Back to House Rules
          </Link>
        </div>
      </div>
    );
  }

  const currentPage = detail.pages[activePage];

  return (
    <div className="flex h-screen bg-[#faf8f5] overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">

        {/* ── TopBar ── */}
        <header className="h-[88px] flex items-center px-8 gap-3 bg-[#faf8f5] min-w-0">
          <div className="flex items-center gap-1.5 text-[13px] flex-1 min-w-0 flex-wrap">
            <Link href="/dashboard">
              <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors whitespace-nowrap">
                <X size={11} className="text-[#7d7870]" />
                <span className="text-[#7d7870] font-medium">Overview</span>
              </button>
            </Link>
            <ChevronRight size={12} className="text-[#c5bfb5] shrink-0" />
            <Link href="/dashboard/documents">
              <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors whitespace-nowrap">
                <X size={11} className="text-[#7d7870]" />
                <span className="text-[#7d7870] font-medium">Documents</span>
              </button>
            </Link>
            <ChevronRight size={12} className="text-[#c5bfb5] shrink-0" />
            <Link href="/dashboard/documents/house-rules">
              <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors whitespace-nowrap">
                <X size={11} className="text-[#7d7870]" />
                <span className="text-[#7d7870] font-medium">House Rules</span>
              </button>
            </Link>
            <ChevronRight size={12} className="text-[#c5bfb5] shrink-0" />
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#f0ebe0] rounded-[10px] min-w-0">
              <span className="text-[#1a1814] font-semibold truncate max-w-[200px]">{detail.title}</span>
              <Link href="/dashboard/documents/house-rules">
                <X size={11} className="text-[#7d7870] cursor-pointer hover:text-[#1a1814] transition-colors shrink-0" />
              </Link>
            </div>
            <button className="w-6 h-6 flex items-center justify-center rounded-[7px] bg-[#e6e1d8] hover:bg-[#ddd8cf] transition-colors shrink-0">
              <Plus size={12} className="text-[#7d7870]" />
            </button>
          </div>

          <div className="flex items-center gap-2 bg-white border border-[#e8e4db] rounded-full px-3 py-2 w-[200px] shadow-sm shrink-0">
            <Search size={13} className="text-[#7d7870] shrink-0" />
            <input type="text" placeholder="Search" className="bg-transparent text-[13px] text-[#1a1814] placeholder:text-[#7d7870] outline-none w-full" />
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
            <Bell size={20} className="text-[#1a1814]" />
          </button>
        </header>

        {/* ── Main ── */}
        <div className="flex-1 bg-[#f0ebe0] rounded-tl-[36px] overflow-hidden min-h-0">
          <div
            className="h-full overflow-y-auto p-6"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
          >
            <button className="mb-3 w-8 h-8 rounded-[9px] bg-[#e6e1d8] hover:bg-[#ddd8cf] flex items-center justify-center transition-colors shadow-sm">
              <Plus size={14} className="text-[#7d7870]" />
            </button>

            <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] overflow-hidden">

              {/* SECTION 1 — Header */}
              <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-[#f5f2ee]">
                <Link href="/dashboard/documents/house-rules">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
                    <ChevronLeft size={18} className="text-[#1a1814]" />
                  </button>
                </Link>
                <h1 className="text-[18px] font-bold text-[#1a1814]">House Rule</h1>
                <div className="flex-1" />
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
                  <MoreHorizontal size={17} className="text-[#7d7870]" />
                </button>
              </div>

              {/* SECTION 2 — Subject */}
              <div className="px-7 py-3.5 border-b border-[#f0ebe0]">
                <p className="text-[14px] font-semibold text-[#1a1814]">{detail.title}</p>
              </div>

              {/* SECTION 3 — Preview + Right Panel */}
              <div className="flex" style={{ minHeight: 440 }}>

                {/* Left: preview + thumbnails */}
                <div className="w-[42%] shrink-0 border-r border-[#f0ebe0] flex flex-col">
                  <div className="relative flex-1 bg-[#f0ebe0] flex items-center justify-center overflow-hidden" style={{ minHeight: '380px' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentPage.preview}
                      alt={currentPage.label}
                      className="max-h-full max-w-full object-contain shadow-lg rounded-[8px]"
                      style={{ maxHeight: '340px' }}
                    />
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/80 backdrop-blur-sm rounded-[10px] px-2 py-1.5 shadow-sm border border-[#e8e4db]">
                      <button className="p-1 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><ZoomIn size={13} className="text-[#7d7870]" /></button>
                      <button className="p-1 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Download size={13} className="text-[#7d7870]" /></button>
                      <button className="p-1 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Trash2 size={13} className="text-[#7d7870]" /></button>
                    </div>
                    {detail.pages.length > 1 && (
                      <>
                        <button
                          onClick={() => setActivePage(p => Math.max(0, p - 1))}
                          disabled={activePage === 0}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e4db] shadow-sm disabled:opacity-30 hover:bg-white transition-colors"
                        >
                          <ChevronLeft size={14} className="text-[#4a453d]" />
                        </button>
                        <button
                          onClick={() => setActivePage(p => Math.min(detail.pages.length - 1, p + 1))}
                          disabled={activePage === detail.pages.length - 1}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-[#e8e4db] shadow-sm disabled:opacity-30 hover:bg-white transition-colors"
                        >
                          <ChevronRight size={14} className="text-[#4a453d]" />
                        </button>
                      </>
                    )}
                  </div>
                  <div
                    className="flex gap-2.5 px-4 py-3 bg-[#faf8f5] border-t border-[#f0ebe0] overflow-x-auto"
                    style={{ scrollbarWidth: 'none' } as React.CSSProperties}
                  >
                    {detail.pages.map((page, i) => (
                      <button
                        key={page.id}
                        onClick={() => setActivePage(i)}
                        className="shrink-0 flex flex-col items-center gap-1.5 group"
                      >
                        <div className={`w-[64px] h-[84px] rounded-[6px] overflow-hidden border-2 transition-all ${
                          activePage === i ? 'border-[#cda460] shadow-md' : 'border-[#e8e4db] hover:border-[#cda460]/50'
                        }`}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={page.preview} alt={page.label} className="w-full h-full object-cover" />
                        </div>
                        <span className={`text-[9px] font-semibold transition-colors ${
                          activePage === i ? 'text-[#b8975a]' : 'text-[#b0aaa2] group-hover:text-[#7d7870]'
                        }`}>{page.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Category + Description */}
                <div className="flex-1 p-7 flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <p className="text-[15px] font-bold text-[#1a1814]">Category</p>
                    <input
                      type="text"
                      value={selectedCategory}
                      onChange={e => setSelectedCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-[10px] border border-[#e8e4db] bg-[#faf8f5] text-[13px] font-semibold text-[#1a1814] outline-none focus:border-[#cda460] focus:bg-white transition-colors"
                      placeholder="Enter category..."
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <p className="text-[15px] font-bold text-[#1a1814]">Description</p>
                    <div className="border border-[#e8e4db] rounded-[12px] overflow-hidden flex flex-col flex-1">
                      <div className="flex items-center gap-1 px-3 py-2.5 border-b border-[#f0ebe0] bg-[#faf8f5] flex-wrap shrink-0">
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Undo2 size={12} className="text-[#7d7870]" /></button>
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Redo2 size={12} className="text-[#7d7870]" /></button>
                        <div className="w-px h-4 bg-[#e8e4db] mx-1" />
                        <div className="flex items-center gap-1 px-2 py-1 rounded-[6px] border border-[#e8e4db] bg-white text-[10px] text-[#7d7870] cursor-pointer hover:bg-[#f0ebe0]">
                          Paragraph <ChevronDown size={8} />
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-[6px] border border-[#e8e4db] bg-white text-[10px] text-[#7d7870] cursor-pointer hover:bg-[#f0ebe0]">
                          Inter <ChevronDown size={8} />
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-[6px] border border-[#e8e4db] bg-white text-[10px] text-[#7d7870] cursor-pointer hover:bg-[#f0ebe0]">
                          12pt <ChevronDown size={8} />
                        </div>
                        <div className="w-px h-4 bg-[#e8e4db] mx-1" />
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Bold size={12} className="text-[#7d7870]" /></button>
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Italic size={12} className="text-[#7d7870]" /></button>
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><AlignLeft size={12} className="text-[#7d7870]" /></button>
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><List size={12} className="text-[#7d7870]" /></button>
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><MoreVertical size={12} className="text-[#7d7870]" /></button>
                      </div>
                      <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="w-full flex-1 p-4 text-[13px] text-[#4a453d] leading-[1.7] bg-white outline-none resize-none"
                        placeholder="Enter description..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#f0ebe0]" />

              {/* SECTION 4 — Delivery channels */}
              <div className="flex items-center justify-end px-7 py-4 border-t border-[#e8e4db] bg-[#faf8f5]/40">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#7d7870] uppercase tracking-[0.8px] mr-1">Link</span>
                  <button
                    onClick={() => setSendViaHausBuddy(v => !v)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border transition-colors text-[12px] font-semibold ${
                      sendViaHausBuddy
                        ? 'bg-[#fdf7ec] border-[#e8dcc8] text-[#b8975a]'
                        : 'bg-[#f4f4f4] border-[#e8e4db] text-[#c5bfb5]'
                    }`}
                  >
                    <Smartphone size={14} />
                    HausBuddy
                  </button>
                  <button
                    onClick={() => setSendViaEmail(v => !v)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border transition-colors text-[12px] font-semibold ${
                      sendViaEmail
                        ? 'bg-[#fdf7ec] border-[#e8dcc8] text-[#b8975a]'
                        : 'bg-[#f4f4f4] border-[#e8e4db] text-[#c5bfb5]'
                    }`}
                  >
                    <Mail size={14} />
                    Email
                  </button>
                </div>
              </div>

              <div className="border-t border-[#f0ebe0]" />

              {/* SECTION 5 — Footer */}
              <div className="px-7 py-5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2.5 rounded-[10px] bg-[#1a1814] text-[13px] font-bold text-white hover:bg-[#2d2820] transition-colors"
                >
                  Update
                </motion.button>
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
