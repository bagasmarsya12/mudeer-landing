'use client';

import { useState, useRef } from 'react';
import { useParams } from 'next/navigation';
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
  ChevronLeft,
  X,
  ChevronDown,
  MoreHorizontal,
  ClipboardList,
  BookOpen,
  Activity,
  Zap,
  Flame,
  Droplets,
  Thermometer,
  Folder,
  FolderOpen,
  Undo2,
  Redo2,
  Bold,
  Italic,
  AlignLeft,
  List,
  MoreVertical,
  Smartphone,
  Link2,
  CheckCircle,
  Pencil,
  Share2,
  User,
  Upload,
  Image,
  File,
  X as XIcon,
} from 'lucide-react';
import { navItems, docSubItems } from '@/lib/constants/navigation';
import type { DocActionType, TenantInfo, UploadedFile, ContractDetail } from '@/lib/data/documents';
import { contractDetails, watermarkText } from '@/lib/data/documents';

// ─── Types ────────────────────────────────────────────────────────────────────

// ─── Rental Contract Data ─────────────────────────────────────────────────────

// ─── Watermark text per action type ──────────────────────────────────────────

// ─── Nav data ─────────────────────────────────────────────────────────────────



// ─── Sidebar ──────────────────────────────────────────────────────────────────

const Sidebar = ({ activeCategory }: { activeCategory: string }) => (
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
                  const isActive = sub.id === activeCategory;
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

// ─── TopBar ───────────────────────────────────────────────────────────────────

const TopBar = ({ detail, category }: { detail: ContractDetail; category: string }) => {
  const categoryLabel = docSubItems.find(s => s.id === category)?.label ?? category;
  return (
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
        <Link href={`/dashboard/documents/${category}`}>
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors whitespace-nowrap">
            <X size={11} className="text-[#7d7870]" />
            <span className="text-[#7d7870] font-medium">{categoryLabel}</span>
          </button>
        </Link>
        <ChevronRight size={12} className="text-[#c5bfb5] shrink-0" />
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#f0ebe0] rounded-[10px] min-w-0">
          <span className="text-[#1a1814] font-semibold truncate max-w-[180px]">{detail.subject}</span>
          <Link href={`/dashboard/documents/${category}`}>
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
  );
};

// ─── Action status badge ──────────────────────────────────────────────────────

const StatusBadge = ({ type }: { type: DocActionType }) => {
  switch (type) {
    case 'signature-unsigned':
      return (
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[12px] font-bold text-amber-600 whitespace-nowrap">
          <Pencil size={12} /> Awaiting Signature
        </span>
      );
    case 'signature-signed':
      return (
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[12px] font-bold text-emerald-600 whitespace-nowrap">
          <CheckCircle size={12} /> Signed
        </span>
      );
    case 'receipt-unread':
      return (
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[12px] font-bold text-amber-600 whitespace-nowrap">
          <FileText size={12} /> Pending Read
        </span>
      );
    case 'receipt-read':
      return (
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[12px] font-bold text-emerald-600 whitespace-nowrap">
          <CheckCircle size={12} /> Read
        </span>
      );
    case 'share':
      return (
        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-[12px] font-bold text-violet-600 whitespace-nowrap">
          <Share2 size={12} /> Shared
        </span>
      );
  }
};

// ─── Watermark overlay ────────────────────────────────────────────────────────

const WatermarkOverlay = ({ text }: { text: string }) => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
    <span
      className="font-black tracking-tight text-center whitespace-nowrap"
      style={{
        transform: 'rotate(-25deg)',
        color: 'rgba(180, 130, 60, 0.13)',
        fontSize: 'clamp(26px, 4.5vw, 48px)',
        fontWeight: 900,
        lineHeight: 1.1,
      }}
    >
      {text}
    </span>
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DocumentDetailPage() {
  const params = useParams();
  const category = params.category as string;
  const docId = Number(params.id);

  const detail = contractDetails[docId];

  const INVOICE_CATEGORIES = ['electricity', 'water', 'gas', 'oil-heating', 'service-provider'];
  const invoiceUnitMap: Record<string, string> = {
    electricity: 'kWh',
    water: 'm³',
    gas: 'm³',
    'oil-heating': 'Liter',
    'service-provider': 'Hour',
  };
  const showInvoiceSection = INVOICE_CATEGORIES.includes(category);
  const invoiceUnit = invoiceUnitMap[category] ?? '';

  const [description, setDescription] = useState(detail?.description ?? '');
  const [meterValue, setMeterValue] = useState('');
  const [invoiceAmount, setInvoiceAmount] = useState('');
  const [ackReadReceipt, setAckReadReceipt] = useState(detail?.ackReadReceipt ?? false);
  const [ackSignature, setAckSignature]     = useState(detail?.ackSignature ?? false);
  const [sendViaHausBuddy, setSendViaHausBuddy] = useState(detail?.sendViaHausBuddy ?? false);
  const [sendViaEmail, setSendViaEmail]     = useState(detail?.sendViaEmail ?? false);
  const [sendViaLink, setSendViaLink]       = useState(detail?.sendViaLink ?? false);

  if (!detail) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#faf8f5]">
        <div className="text-center">
          <p className="text-[18px] font-bold text-[#1a1814] mb-2">Document not found</p>
          <Link href={`/dashboard/documents/${category}`} className="text-[14px] text-[#b8975a] hover:underline">
            Back to documents
          </Link>
        </div>
      </div>
    );
  }

  const wText = watermarkText[detail.actionType];
  const isSigned = detail.actionType === 'signature-signed';

  return (
    <div className="flex h-screen bg-[#faf8f5] overflow-hidden">
      <Sidebar activeCategory={category} />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar detail={detail} category={category} />

        <div className="flex-1 bg-[#f0ebe0] rounded-tl-[36px] overflow-hidden min-h-0">
          <div
            className="h-full overflow-y-auto p-6 scrollbar-minimal"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
          >
            {/* + tab button */}
            <button className="mb-3 w-8 h-8 rounded-[9px] bg-[#e6e1d8] hover:bg-[#ddd8cf] flex items-center justify-center transition-colors shadow-sm">
              <Plus size={14} className="text-[#7d7870]" />
            </button>

            <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] overflow-hidden">

              {/* ══════════════════════════════════════════════════════════
                  SECTION 1 — Header
              ══════════════════════════════════════════════════════════ */}
              <div className="flex items-center gap-3 px-6 pt-6 pb-4 flex-wrap border-b border-[#f5f2ee]">
                {/* Back */}
                <Link href={`/dashboard/documents/${category}`}>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
                    <ChevronLeft size={18} className="text-[#1a1814]" />
                  </button>
                </Link>

                <h1 className="text-[18px] font-bold text-[#1a1814]">Rental Contract</h1>

                <div className="flex-1" />

                {/* Rental period badge */}
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdf7ec] border border-[#e8dcc8] text-[12px] font-semibold text-[#b8975a]">
                  <ChevronLeft size={13} className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity" />
                  <span className="whitespace-nowrap">Rental Period: {detail.rentalPeriod}</span>
                  <ChevronRight size={13} className="cursor-pointer opacity-60 hover:opacity-100 transition-opacity" />
                </div>

                <StatusBadge type={detail.actionType} />

                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
                  <MoreHorizontal size={17} className="text-[#7d7870]" />
                </button>
              </div>

              {/* ══════════════════════════════════════════════════════════
                  SECTION 2 — Subject
              ══════════════════════════════════════════════════════════ */}
              <div className="px-7 py-3.5">
                <p className="text-[14px] text-[#4a453d]">
                  Re: <span className="italic text-[#7d7870]">{detail.subject}</span>
                </p>
              </div>

              <div className="border-t border-[#f0ebe0]" />

              {/* ══════════════════════════════════════════════════════════
                  SECTION 3 — Tenant Details + Files (two columns)
              ══════════════════════════════════════════════════════════ */}
              <div className="flex" style={{ height: '300px' }}>

                {/* ── Left: Tenant Details ─────────────────────────────── */}
                <div className="w-[42%] shrink-0 border-r border-[#f0ebe0] p-5 flex flex-col gap-3">
                  <h3 className="text-[13px] font-bold text-[#1a1814]">Tenant Details</h3>

                  <div className="flex-1 flex overflow-hidden rounded-[14px] border border-[#e8e4db] bg-[#faf8f5]">
                    {/* Avatar column — vertically centered with its own padding */}
                    <div className="flex flex-col items-center justify-center gap-2.5 shrink-0 px-8 py-4 border-r border-[#e8e4db]">
                      <div className="w-[60px] h-[60px] rounded-full bg-[#e8e4db] flex items-center justify-center">
                        <User size={30} className="text-[#c5bfb5]" />
                      </div>
                      <button className="text-[11px] font-bold text-[#b8975a] hover:text-[#9a7a40] hover:underline whitespace-nowrap transition-colors">
                        See Profile
                      </button>
                    </div>

                    {/* Fields — disabled form inputs */}
                    <div className="flex flex-col justify-center gap-2.5 flex-1 min-w-0 px-4 py-4">
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-semibold text-[#b0aaa2] uppercase tracking-[0.6px]">First name</label>
                          <input
                            type="text"
                            value={detail.tenant.firstName}
                            disabled
                            className="w-full px-2.5 py-1.5 rounded-[8px] border border-[#e8e4db] bg-[#f0ebe0] text-[13px] font-semibold text-[#4a453d] cursor-not-allowed outline-none"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] font-semibold text-[#b0aaa2] uppercase tracking-[0.6px]">Last name</label>
                          <input
                            type="text"
                            value={detail.tenant.lastName}
                            disabled
                            className="w-full px-2.5 py-1.5 rounded-[8px] border border-[#e8e4db] bg-[#f0ebe0] text-[13px] font-semibold text-[#4a453d] cursor-not-allowed outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-semibold text-[#b0aaa2] uppercase tracking-[0.6px]">Email</label>
                        <input
                          type="text"
                          value={detail.tenant.email}
                          disabled
                          className="w-full px-2.5 py-1.5 rounded-[8px] border border-[#e8e4db] bg-[#f0ebe0] text-[13px] text-[#4a453d] cursor-not-allowed outline-none"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[10px] font-semibold text-[#b0aaa2] uppercase tracking-[0.6px]">Phone</label>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-[8px] border border-[#e8e4db] bg-[#f0ebe0] text-[12px] text-[#4a453d] cursor-not-allowed whitespace-nowrap shrink-0">
                            {detail.tenant.countryCode}
                            <ChevronDown size={9} className="text-[#b0aaa2]" />
                          </div>
                          <input
                            type="text"
                            value={detail.tenant.phone}
                            disabled
                            className="flex-1 min-w-0 px-2.5 py-1.5 rounded-[8px] border border-[#e8e4db] bg-[#f0ebe0] text-[13px] text-[#4a453d] cursor-not-allowed outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Right: Files upload area ─────────────────────────── */}
                <div className="flex-1 p-5 flex flex-col gap-2.5 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[13px] font-bold text-[#1a1814]">Files</h3>
                    <label className="flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] bg-[#f0ebe0] hover:bg-[#e8dcc8] border border-[#e0d8c8] text-[11px] font-semibold text-[#7d6e5a] cursor-pointer transition-colors">
                      <Upload size={11} />
                      Upload
                      <input type="file" multiple accept=".pdf,.doc,.docx,image/*" className="hidden" />
                    </label>
                  </div>

                  {/* Drop zone + file icons */}
                  <div
                    className="flex-1 rounded-[14px] border-2 border-dashed border-[#e0d8c8] bg-[#faf8f5] overflow-y-auto p-3"
                    style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.08) transparent' } as React.CSSProperties}
                    onDragOver={e => e.preventDefault()}
                  >
                    {detail.uploadedFiles && detail.uploadedFiles.length > 0 ? (
                      <div className="grid grid-cols-3 gap-2">
                        {detail.uploadedFiles.map(f => (
                          <div
                            key={f.id}
                            className="flex flex-col items-center gap-1 p-2 rounded-[10px] bg-white border border-[#e8e4db] hover:border-[#cda460] hover:bg-[#fdf7ec] transition-all cursor-pointer group"
                          >
                            <div className={`w-9 h-9 rounded-[8px] flex items-center justify-center shrink-0 ${
                              f.type === 'pdf'   ? 'bg-red-50 text-red-400' :
                              f.type === 'image' ? 'bg-blue-50 text-blue-400' :
                                                   'bg-indigo-50 text-indigo-400'
                            }`}>
                              {f.type === 'image' ? <Image size={18} /> : <File size={18} />}
                            </div>
                            <p className="text-[10px] font-semibold text-[#4a453d] leading-tight text-center line-clamp-2 w-full">{f.name}</p>
                            <p className="text-[9px] text-[#b0aaa2]">{f.size}</p>
                          </div>
                        ))}
                        {/* Add more tile */}
                        <label className="flex flex-col items-center justify-center gap-1 p-2 rounded-[10px] border-2 border-dashed border-[#e0d8c8] hover:border-[#cda460] hover:bg-[#fdf7ec] transition-all cursor-pointer min-h-[80px]">
                          <Plus size={16} className="text-[#c5bfb5]" />
                          <span className="text-[10px] text-[#c5bfb5] font-semibold">Add</span>
                          <input type="file" multiple accept=".pdf,.doc,.docx,image/*" className="hidden" />
                        </label>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center gap-2 text-center">
                        <Upload size={24} className="text-[#c5bfb5]" />
                        <p className="text-[12px] font-semibold text-[#b0aaa2]">Drop files here or upload</p>
                        <p className="text-[10px] text-[#c5bfb5]">PDF, DOC, JPG, PNG</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-[#f0ebe0]" />

              {/* ══════════════════════════════════════════════════════════
                  SECTION 4 — Description (WYSIWYG)
              ══════════════════════════════════════════════════════════ */}
              <div className="p-7 flex flex-col gap-4">
                <h3 className="text-[13px] font-bold text-[#1a1814]">Description</h3>

                <div className="border border-[#e8e4db] rounded-[14px] overflow-hidden">
                  {/* Toolbar */}
                  <div className="flex items-center gap-1 px-3 py-2.5 border-b border-[#f0ebe0] bg-[#faf8f5] flex-wrap">
                    <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Undo2 size={13} className="text-[#7d7870]" /></button>
                    <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Redo2 size={13} className="text-[#7d7870]" /></button>
                    <div className="w-px h-4 bg-[#e8e4db] mx-1" />
                    <div className="flex items-center gap-1 px-2 py-1 rounded-[6px] border border-[#e8e4db] bg-white text-[11px] text-[#7d7870] cursor-pointer hover:bg-[#f0ebe0] transition-colors">
                      Paragraph <ChevronDown size={9} />
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-[6px] border border-[#e8e4db] bg-white text-[11px] text-[#7d7870] cursor-pointer hover:bg-[#f0ebe0] transition-colors">
                      Inter, sans-serif <ChevronDown size={9} />
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-[6px] border border-[#e8e4db] bg-white text-[11px] text-[#7d7870] cursor-pointer hover:bg-[#f0ebe0] transition-colors">
                      12pt <ChevronDown size={9} />
                    </div>
                    <div className="w-px h-4 bg-[#e8e4db] mx-1" />
                    <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Bold size={13} className="text-[#7d7870]" /></button>
                    <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Italic size={13} className="text-[#7d7870]" /></button>
                    <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><AlignLeft size={13} className="text-[#7d7870]" /></button>
                    <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><List size={13} className="text-[#7d7870]" /></button>
                    <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><MoreVertical size={13} className="text-[#7d7870]" /></button>
                  </div>

                  {/* Editable area with watermark */}
                  <div className="relative bg-white">
                    {wText && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
                        <span
                          className="font-black whitespace-nowrap tracking-tight"
                          style={{
                            transform: 'rotate(-25deg)',
                            color: 'rgba(180, 130, 60, 0.09)',
                            fontSize: '48px',
                            fontWeight: 900,
                          }}
                        >
                          {wText}
                        </span>
                      </div>
                    )}
                    <textarea
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      rows={7}
                      className="relative z-10 w-full p-4 text-[13px] text-[#4a453d] leading-[1.8] outline-none resize-none"
                      style={{ background: 'transparent' }}
                      placeholder="Enter document description..."
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-[#f0ebe0]" />

              {/* ══════════════════════════════════════════════════════════
                  SECTION 5 — Invoice Data (only for invoice categories)
              ══════════════════════════════════════════════════════════ */}
              {showInvoiceSection && (
                <>
                  <div className="p-7 flex flex-col gap-5">
                    <h3 className="text-[13px] font-bold text-[#1a1814]">Invoice Data</h3>
                    <div className="grid grid-cols-2 gap-6">

                      {/* Meter Reading */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold text-[#b0aaa2] uppercase tracking-[0.6px]">
                          Meter Reading
                        </label>
                        <div className="flex items-center rounded-[10px] border border-[#e8e4db] bg-[#faf8f5] overflow-hidden focus-within:border-[#cda460] focus-within:bg-white transition-colors">
                          <input
                            type="number"
                            value={meterValue}
                            onChange={e => setMeterValue(e.target.value)}
                            placeholder="0"
                            className="flex-1 min-w-0 px-3.5 py-2.5 text-[13px] text-[#4a453d] outline-none bg-transparent"
                          />
                          <span className="shrink-0 px-3 py-2.5 border-l border-[#e8e4db] bg-[#f0ebe0] text-[12px] font-semibold text-[#7d7870] select-none">
                            {invoiceUnit}
                          </span>
                        </div>
                      </div>

                      {/* Invoice Amount */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-semibold text-[#b0aaa2] uppercase tracking-[0.6px]">
                          Invoice Amount
                        </label>
                        <div className="flex items-center rounded-[10px] border border-[#e8e4db] bg-[#faf8f5] overflow-hidden focus-within:border-[#cda460] focus-within:bg-white transition-colors">
                          <span className="shrink-0 px-3 py-2.5 border-r border-[#e8e4db] bg-[#f0ebe0] text-[12px] font-semibold text-[#7d7870] select-none">
                            AED
                          </span>
                          <input
                            type="number"
                            value={invoiceAmount}
                            onChange={e => setInvoiceAmount(e.target.value)}
                            placeholder="0.00"
                            className="flex-1 min-w-0 px-3.5 py-2.5 text-[13px] text-[#4a453d] outline-none bg-transparent"
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="border-t border-[#f0ebe0]" />
                </>
              )}

              {/* ══════════════════════════════════════════════════════════
                  SECTION 6 — Tenant Acknowledgement
              ══════════════════════════════════════════════════════════ */}
              <div className="px-7 py-6 flex items-center justify-between flex-wrap gap-6">

                {/* Left: acknowledgement toggles */}
                <div className="flex flex-col gap-3">
                  <p className="text-[11px] font-bold text-[#9e9e9e] uppercase tracking-[0.8px]">Tenant acknowledgement</p>
                  <div className="flex items-center gap-3">

                    {/* Read Receipt */}
                    <button
                      onClick={() => setAckReadReceipt(v => !v)}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-[12px] border-2 transition-all text-[13px] font-semibold ${
                        ackReadReceipt
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-600'
                          : 'border-[#e8e4db] bg-[#f4f4f4] text-[#9e9e9e]'
                      }`}
                    >
                      <FileText size={16} />
                      Read Receipt
                    </button>

                    {/* Signature */}
                    <button
                      onClick={() => setAckSignature(v => !v)}
                      className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-[12px] border-2 transition-all text-[13px] font-semibold ${
                        ackSignature
                          ? isSigned
                            ? 'border-emerald-300 bg-emerald-50 text-emerald-600'
                            : 'border-amber-300 bg-amber-50 text-amber-600'
                          : 'border-[#e8e4db] bg-[#f4f4f4] text-[#9e9e9e]'
                      }`}
                    >
                      <div className="relative">
                        <Pencil size={16} />
                        {ackSignature && (
                          <span
                            className={`absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center shadow-sm ${
                              isSigned ? 'bg-emerald-500' : 'bg-amber-400'
                            }`}
                          >
                            {isSigned ? (
                              <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                                <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            ) : (
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            )}
                          </span>
                        )}
                      </div>
                      Signature
                    </button>
                  </div>
                </div>

                {/* Right: delivery channels */}
                <div className="flex items-center gap-3">

                  {/* Link — static label */}
                  <span className="flex items-center gap-1.5 text-[16px] font-semibold text-[#b0aaa2]">
                    
                    Link
                  </span>

                  {/* HausBuddy */}
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

                  {/* Email */}
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

              {/* ══════════════════════════════════════════════════════════
                  SECTION 6 — Footer: Resend request
              ══════════════════════════════════════════════════════════ */}
              <div className="px-7 py-5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2.5 rounded-[10px] bg-[#f0ebe0] border border-[#e0d8c8] text-[13px] font-bold text-[#7d6e5a] hover:bg-[#e8dcc8] transition-colors"
                >
                  Resend request
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
