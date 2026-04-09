'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
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
  ClipboardList,
  BookOpen,
  Activity,
  Zap,
  Flame,
  Droplets,
  Thermometer,
  Folder,
  FolderOpen,
  Pencil,
  CheckCircle,
  Share2,
  Smartphone,
  MoreHorizontal,
  ChevronLeft,
} from 'lucide-react';
import { navItems, docSubItems } from '@/lib/constants/navigation';
import type { DocActionType, StandardDoc, HouseRulesDoc } from '@/lib/data/documents';
import { rentalContractDocs, houseRulesDocs, meterReadingsDocs, electricityDocs, gasDocs, waterDocs, oilHeatingDocs, serviceProviderDocs, othersDocs } from '@/lib/data/documents';

// ─── Types ────────────────────────────────────────────────────────────────────

// ─── Data ─────────────────────────────────────────────────────────────────────

// ─── Tenant & Meter-type data (for Add Meter Reading flow) ───────────────────

interface TenantOption {
  id: number;
  firstName: string;
  lastName: string;
  building: string;
  phone: string;
  email: string;
  hausBuddyStatus: 'registered' | 'unregistered';
  tenantStatus: 'Tenant' | 'Owner';
}

const tenantOptions: TenantOption[] = [
  { id: 1, firstName: 'Mohammed', lastName: 'Al-Farsi',  building: 'Ammana Building Dubai',    phone: '+971 50 456 7890', email: 'mohammed.alfarsi@hausbuddy.com', hausBuddyStatus: 'registered',   tenantStatus: 'Tenant' },
  { id: 2, firstName: 'Layla',    lastName: 'Ibrahim',   building: 'Orchid Building',          phone: '+971 52 567 8901', email: 'layla.ibrahim@hausbuddy.com',    hausBuddyStatus: 'registered',   tenantStatus: 'Tenant' },
  { id: 3, firstName: 'David',    lastName: 'Schneider', building: 'Palm Residences',          phone: '+49 170 234 5678', email: 'david.schneider@hausbuddy.com',  hausBuddyStatus: 'unregistered', tenantStatus: 'Owner'  },
  { id: 4, firstName: 'Ahmed',    lastName: 'Hassan',    building: 'Tulip Building',           phone: '+971 55 123 4567', email: 'ahmed.hassan@gmail.com',         hausBuddyStatus: 'registered',   tenantStatus: 'Tenant' },
  { id: 5, firstName: 'Sara',     lastName: 'Al-Rashid', building: 'Royal Building Dubai',     phone: '+971 50 987 6543', email: 'sara.alrashid@outlook.com',      hausBuddyStatus: 'unregistered', tenantStatus: 'Owner'  },
  { id: 6, firstName: 'James',    lastName: 'Miller',    building: 'Cedar Heights',            phone: '+44 77 1234 5678', email: 'james.miller@gmail.com',         hausBuddyStatus: 'registered',   tenantStatus: 'Tenant' },
  { id: 7, firstName: 'Fatima',   lastName: 'Al-Zaabi',  building: 'Sky View Tower Dubai',     phone: '+971 56 789 0123', email: 'fatima.alzaabi@hausbuddy.com',   hausBuddyStatus: 'registered',   tenantStatus: 'Tenant' },
  { id: 8, firstName: 'Carlos',   lastName: 'Mendez',    building: 'Cedar Heights',            phone: '+34 61 234 5678',  email: 'carlos.mendez@gmail.com',        hausBuddyStatus: 'unregistered', tenantStatus: 'Tenant' },
];

type MeterType = 'electricity' | 'gas' | 'water';

const meterTypeConfig = {
  electricity: { label: 'Electricity', icon: Zap,      color: 'text-amber-500',  bgColor: 'bg-amber-50',  desc: 'electricity consumption' },
  gas:         { label: 'Gas',         icon: Flame,    color: 'text-orange-500', bgColor: 'bg-orange-50', desc: 'gas consumption'         },
  water:       { label: 'Water',       icon: Droplets, color: 'text-blue-500',   bgColor: 'bg-blue-50',   desc: 'water consumption'       },
} satisfies Record<MeterType, { label: string; icon: React.ElementType; color: string; bgColor: string; desc: string }>;

// ─── Category Config ──────────────────────────────────────────────────────────

type CategoryType = 'standard' | 'house-rules';

interface CategoryConfig {
  label: string;
  icon: React.ElementType;
  type: CategoryType;
  standardDocs?: StandardDoc[];
  houseRulesDocs?: HouseRulesDoc[];
}

const categoryConfig: Record<string, CategoryConfig> = {
  'rental-contract':  { label: 'Rental Contract',  icon: ClipboardList, type: 'standard',     standardDocs: rentalContractDocs },
  'house-rules':      { label: 'House Rules',       icon: BookOpen,      type: 'house-rules',  houseRulesDocs: houseRulesDocs },
  'meter-readings':   { label: 'Meter Readings',    icon: Activity,      type: 'standard',     standardDocs: meterReadingsDocs },
  'electricity':      { label: 'Electricity',       icon: Zap,           type: 'standard',     standardDocs: electricityDocs },
  'gas':              { label: 'Gas',               icon: Flame,         type: 'standard',     standardDocs: gasDocs },
  'water':            { label: 'Water',             icon: Droplets,      type: 'standard',     standardDocs: waterDocs },
  'oil-heating':      { label: 'Oil Heating',       icon: Thermometer,   type: 'standard',     standardDocs: oilHeatingDocs },
  'service-provider': { label: 'Service Provider',  icon: Wrench,        type: 'standard',     standardDocs: serviceProviderDocs },
  'others':           { label: 'Others',            icon: FolderOpen,    type: 'standard',     standardDocs: othersDocs },
};



const totalFiles = Object.values(categoryConfig).reduce((s, c) => s + (c.standardDocs?.length ?? c.houseRulesDocs?.length ?? 0), 0);

// ─── Helpers ──────────────────────────────────────────────────────────────────

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-3 text-left">
    <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273] hover:text-[#1a1814] transition-colors whitespace-nowrap">
      {children}
      <ArrowUpDown size={10} className="opacity-50" />
    </button>
  </th>
);

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
                {docSubItems.map(sub => {
                  const isActive = sub.id === activeCategory;
                  return (
                    <Link key={sub.label} href={sub.id ? `/dashboard/documents/${sub.id}` : '/dashboard/documents'}>
                      <button
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] transition-colors w-full text-left ${
                          isActive
                            ? 'font-bold text-[#1a1814] bg-[#f4ebd9]'
                            : 'font-medium text-[#7d7870] hover:bg-[#f0ebe0]'
                        }`}
                      >
                        <sub.icon size={13} />
                        {sub.label}
                        {isActive && <ChevronRight size={12} className="ml-auto opacity-50" />}
                      </button>
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

const TopBar = ({ categoryLabel }: { categoryLabel: string }) => (
  <header className="h-[88px] flex items-center px-8 gap-4 bg-[#faf8f5]">
    <div className="flex items-center gap-2 text-[14px] flex-1">
      <Link href="/dashboard">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors">
          <X size={12} className="text-[#7d7870]" />
          <span className="text-[#7d7870] font-medium">Overview</span>
        </button>
      </Link>
      <ChevronRight size={14} className="text-[#c5bfb5]" />
      <Link href="/dashboard/documents">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors">
          <X size={12} className="text-[#7d7870]" />
          <span className="text-[#7d7870] font-medium">Documents</span>
        </button>
      </Link>
      <ChevronRight size={14} className="text-[#c5bfb5]" />
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0ebe0] rounded-[10px]">
        <span className="text-[#1a1814] font-semibold">{categoryLabel}</span>
        <Link href="/dashboard/documents">
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

// ─── Action type icons ────────────────────────────────────────────────────────

const docActionConfig: Record<DocActionType, {
  Icon: React.ElementType;
  bg: string;
  text: string;
  border: string;
  label: string;
}> = {
  'signature-unsigned': { Icon: Pencil,      bg: 'bg-[#f5f5f5]',  text: 'text-[#9e9e9e]',  border: 'border-[#e0ddd8]',  label: 'Awaiting Signature' },
  'signature-signed':   { Icon: Pencil,      bg: 'bg-blue-50',    text: 'text-blue-500',   border: 'border-blue-200',   label: 'Signed'             },
  'signature-rejected': { Icon: Pencil,      bg: 'bg-red-50',     text: 'text-red-500',    border: 'border-red-200',    label: 'Rejected'           },
  'receipt-unread':     { Icon: CheckCircle, bg: 'bg-[#f5f5f5]',  text: 'text-[#9e9e9e]',  border: 'border-[#e0ddd8]',  label: 'Not Read'           },
  'receipt-read':       { Icon: CheckCircle, bg: 'bg-blue-50',    text: 'text-blue-500',   border: 'border-blue-200',   label: 'Read'               },
  'share':              { Icon: Share2,      bg: 'bg-blue-50',    text: 'text-blue-500',   border: 'border-blue-200',   label: 'Shared'             },
};

const DocActionBadge = ({ type }: { type: DocActionType }) => {
  const { Icon, bg, text, border, label } = docActionConfig[type];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[11px] font-semibold whitespace-nowrap ${bg} ${text} ${border}`}>
      <Icon size={11} />
      {label}
    </span>
  );
};

const MeterStatusBadge = ({ type }: { type: DocActionType }) => {
  const isSigned = type === 'signature-signed';
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[11px] font-semibold whitespace-nowrap ${
      isSigned
        ? 'bg-blue-50 text-blue-500 border-blue-200'
        : 'bg-[#f5f5f5] text-[#9e9e9e] border-[#e0ddd8]'
    }`}>
      <Pencil size={11} />
      {isSigned ? 'Signed' : 'Not Signed'}
    </span>
  );
};

// ─── Link icons ───────────────────────────────────────────────────────────────

const LinkIcons = ({ hasEmail, hasPhone }: { hasEmail: boolean; hasPhone: boolean }) => (
  <div className="flex items-center gap-1.5">
    <span title="Email" className={`w-6 h-6 rounded-full flex items-center justify-center ${hasEmail ? 'bg-[#fdf7ec] text-[#b8975a]' : 'bg-[#f4f4f4] text-[#d0cdc8]'}`}>
      <Mail size={12} />
    </span>
    <span title="Phone / App" className={`w-6 h-6 rounded-full flex items-center justify-center ${hasPhone ? 'bg-[#fdf7ec] text-[#b8975a]' : 'bg-[#f4f4f4] text-[#d0cdc8]'}`}>
      <Smartphone size={12} />
    </span>
  </div>
);

// ─── Empty state ──────────────────────────────────────────────────────────────

const EmptyState = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center py-16 text-center">
    <div className="w-14 h-14 rounded-[16px] bg-[#f0ebe0] flex items-center justify-center mb-4">
      <FileText size={24} className="text-[#c5bfb5]" />
    </div>
    <p className="text-[15px] font-bold text-[#1a1814] mb-1">No {label} documents yet</p>
    <p className="text-[13px] text-[#9e9e9e]">Click + to upload your first document</p>
  </div>
);

// ─── Standard Table ───────────────────────────────────────────────────────────

const StandardTable = ({ docs, label, category, statusVariant = 'none' }: { docs: StandardDoc[]; label: string; category: string; statusVariant?: 'full' | 'meter' | 'none' }) => {
  const router = useRouter();
  const showStatus = statusVariant !== 'none';
  const colSpanTotal = showStatus ? 10 : 9;
  return (
  <table className="w-full border-collapse min-w-[900px]">
      <thead>
        <tr className="border-y border-[#e8e4db] bg-[#faf8f5]/60">
          {showStatus && <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273] whitespace-nowrap">Status</th>}
          <Th>Date</Th>
          <Th>Time</Th>
          <Th>Last Updated</Th>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Building</Th>
          <Th>Title</Th>
          <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273]">Link</th>
          <th className="px-4 py-3 w-10" />
        </tr>
      </thead>
      <tbody>
        {docs.length === 0 ? (
          <tr>
            <td colSpan={colSpanTotal}>
              <EmptyState label={label} />
            </td>
          </tr>
        ) : (
          docs.map((doc, i) => (
            <motion.tr
              key={doc.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: i * 0.04 }}
              className="border-b border-[#f0ebe0] hover:bg-[#faf8f5]/70 cursor-pointer transition-colors"
              onClick={() => router.push(`/dashboard/documents/${category}/${doc.id}`)}
            >
              {showStatus && (
                <td className="px-4 py-3.5">
                  {statusVariant === 'meter'
                    ? <MeterStatusBadge type={doc.actionType} />
                    : <DocActionBadge type={doc.actionType} />}
                </td>
              )}
              <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{doc.date}</td>
              <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{doc.time}</td>
              <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{doc.lastUpdated}</td>
              <td className="px-4 py-3.5 text-[13px] font-medium text-[#1a1814]">{doc.firstName}</td>
              <td className="px-4 py-3.5 text-[13px] font-medium text-[#1a1814]">{doc.lastName}</td>
              <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{doc.building}</td>
              <td className="px-4 py-3.5 text-[13px] text-[#1a1814] max-w-[180px] truncate">{doc.title}</td>
              <td className="px-4 py-3.5"><LinkIcons hasEmail={doc.hasEmail} hasPhone={doc.hasPhone} /></td>
              <td className="px-4 py-3.5">
                <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors">
                  <MoreHorizontal size={15} className="text-[#7d7870]" />
                </button>
              </td>
            </motion.tr>
          ))
        )}
      </tbody>
    </table>
  );
};

// ─── House Rules Table ────────────────────────────────────────────────────────

const HouseRulesTable = ({ docs }: { docs: HouseRulesDoc[] }) => {
  const router = useRouter();
  return (
  <table className="w-full border-collapse min-w-[800px]">
      <thead>
        <tr className="border-y border-[#e8e4db] bg-[#faf8f5]/60">
          <Th>Title</Th>
          <Th>Category</Th>
          <Th>Date</Th>
          <Th>Time</Th>
          <Th>Last Updated</Th>
          <Th>Building</Th>
          <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273]">Link</th>
          <th className="px-4 py-3 w-10" />
        </tr>
      </thead>
      <tbody>
        {docs.length === 0 ? (
          <tr>
            <td colSpan={8}>
              <EmptyState label="House Rules" />
            </td>
          </tr>
        ) : (
          docs.map((doc, i) => (
            <motion.tr
              key={doc.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: i * 0.04 }}
              onClick={() => router.push(`/dashboard/documents/house-rules/${doc.id}`)}
              className="border-b border-[#f0ebe0] hover:bg-[#faf8f5]/70 cursor-pointer transition-colors"
            >
              <td className="px-4 py-3.5 text-[13px] font-medium text-[#1a1814] max-w-[200px] truncate">{doc.title}</td>
              <td className="px-4 py-3.5 text-[13px] text-[#4a453d]">{doc.category}</td>
              <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{doc.date}</td>
              <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{doc.time}</td>
              <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{doc.lastUpdated}</td>
              <td className="px-4 py-3.5 text-[13px] text-[#4a453d]">{doc.building}</td>
              <td className="px-4 py-3.5"><LinkIcons hasEmail={doc.hasEmail} hasPhone={doc.hasPhone} /></td>
              <td className="px-4 py-3.5">
                <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors">
                  <MoreHorizontal size={15} className="text-[#7d7870]" />
                </button>
              </td>
            </motion.tr>
          ))
        )}
      </tbody>
    </table>
  );
};

// ─── Add Meter Reading Modal ──────────────────────────────────────────────────

interface AddMeterReadingModalProps {
  step: 1 | 2;
  selectedTenants: number[];
  selectedTypes: MeterType[];
  onTenantToggle: (id: number) => void;
  onTypeToggle: (type: MeterType) => void;
  onSelectAll: () => void;
  onNext: () => void;
  onBack: () => void;
  onCancel: () => void;
  onSubmit: () => void;
}

const AddMeterReadingModal = ({
  step,
  selectedTenants,
  selectedTypes,
  onTenantToggle,
  onTypeToggle,
  onSelectAll,
  onNext,
  onBack,
  onCancel,
  onSubmit,
}: AddMeterReadingModalProps) => {
  const allSelected  = selectedTenants.length === tenantOptions.length;
  const someSelected = selectedTenants.length > 0 && !allSelected;
  const totalDocs    = selectedTenants.length * selectedTypes.length;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1a1814]/40 backdrop-blur-sm" onClick={onCancel} />

      {/* Modal */}
      <div
        className="relative bg-white rounded-[24px] shadow-2xl flex flex-col overflow-hidden"
        style={{ width: 780, maxHeight: '85vh' }}
      >
        {/* ── Modal Header ── */}
        <div className="flex items-center gap-4 px-7 pt-6 pb-4 border-b border-[#f0ebe0] shrink-0">
          <div className="flex-1">
            <h2 className="text-[17px] font-bold text-[#1a1814]">Add Meter Reading</h2>
            <p className="text-[12px] text-[#b0aaa2] font-medium mt-0.5">
              Step {step} of 2 — {step === 1 ? 'Select Tenant(s)' : 'Select Meter Type(s)'}
            </p>
          </div>

          {/* Step indicator */}
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold border-2 ${
              step === 1 ? 'border-[#1a1814] bg-[#1a1814] text-white' : 'border-emerald-400 bg-emerald-50 text-emerald-500'
            }`}>
              {step === 1 ? '1' : (
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1.5 5L4.5 8L10.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <div className={`w-10 h-0.5 ${step === 2 ? 'bg-[#1a1814]' : 'bg-[#e8e4db]'}`} />
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold border-2 ${
              step === 2 ? 'border-[#1a1814] bg-[#1a1814] text-white' : 'border-[#e8e4db] bg-white text-[#c5bfb5]'
            }`}>2</div>
          </div>

          <button
            onClick={onCancel}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors"
          >
            <X size={16} className="text-[#7d7870]" />
          </button>
        </div>

        {/* ── Modal Body ── */}
        <div
          className="flex-1 overflow-y-auto min-h-0"
          style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.08) transparent' } as React.CSSProperties}
        >
          {/* ─ Step 1: Tenant Table ─ */}
          {step === 1 && (
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#f0ebe0] bg-[#faf8f5] sticky top-0 z-10">
                  <th className="px-5 py-3 w-10">
                    <button
                      onClick={onSelectAll}
                      className={`w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center transition-colors ${
                        allSelected
                          ? 'bg-[#1a1814] border-[#1a1814]'
                          : someSelected
                          ? 'bg-[#1a1814]/20 border-[#1a1814]/40'
                          : 'bg-white border-[#c5bfb5] hover:border-[#1a1814]'
                      }`}
                    >
                      {(allSelected || someSelected) && (
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                          {allSelected
                            ? <path d="M1.5 4.5L3.5 6.5L7.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            : <rect x="1.5" y="4" width="6" height="1.5" rx="0.75" fill="white" />}
                        </svg>
                      )}
                    </button>
                  </th>
                  {['HausBuddy', 'First Name', 'Last Name', 'Building', 'Phone', 'Email', 'Status'].map(h => (
                    <th key={h} className="px-3 py-3 text-left text-[10px] font-bold uppercase tracking-[0.6px] text-[#8b8273] whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tenantOptions.map(tenant => {
                  const isSelected = selectedTenants.includes(tenant.id);
                  return (
                    <tr
                      key={tenant.id}
                      onClick={() => onTenantToggle(tenant.id)}
                      className={`border-b border-[#f5f2ee] cursor-pointer transition-colors ${
                        isSelected ? 'bg-[#fdf7ec]' : 'hover:bg-[#faf8f5]'
                      }`}
                    >
                      <td className="px-5 py-3 w-10">
                        <div className={`w-[18px] h-[18px] rounded-[4px] border-2 flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#1a1814] border-[#1a1814]' : 'bg-white border-[#c5bfb5]'
                        }`}>
                          {isSelected && (
                            <svg width="9" height="8" viewBox="0 0 9 8" fill="none">
                              <path d="M1.5 4L3.5 6L7.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-2 h-2 rounded-full shrink-0 ${tenant.hausBuddyStatus === 'registered' ? 'bg-emerald-400' : 'bg-[#d0cdc8]'}`} />
                          <span className={`text-[11px] font-semibold whitespace-nowrap ${tenant.hausBuddyStatus === 'registered' ? 'text-emerald-500' : 'text-[#b0aaa2]'}`}>
                            {tenant.hausBuddyStatus === 'registered' ? 'Registered' : 'Not registered'}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-[13px] font-medium text-[#1a1814]">{tenant.firstName}</td>
                      <td className="px-3 py-3 text-[13px] font-medium text-[#1a1814]">{tenant.lastName}</td>
                      <td className="px-3 py-3 text-[12px] text-[#4a453d] whitespace-nowrap">{tenant.building}</td>
                      <td className="px-3 py-3 text-[12px] text-[#4a453d] whitespace-nowrap">{tenant.phone}</td>
                      <td className="px-3 py-3 text-[12px] text-[#4a453d]">{tenant.email}</td>
                      <td className="px-3 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                          tenant.tenantStatus === 'Owner'
                            ? 'bg-violet-50 text-violet-500 border border-violet-200'
                            : 'bg-blue-50 text-blue-500 border border-blue-200'
                        }`}>
                          {tenant.tenantStatus}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          {/* ─ Step 2: Meter Type ─ */}
          {step === 2 && (
            <div className="p-7 flex flex-col gap-4">
              <p className="text-[13px] text-[#7d7870]">
                Select one or more meter types. A reading document will be created for each combination of tenant and type selected.
              </p>

              <div className="flex flex-col gap-3">
                {(Object.entries(meterTypeConfig) as [MeterType, typeof meterTypeConfig[MeterType]][]).map(([type, cfg]) => {
                  const Icon = cfg.icon;
                  const isSelected = selectedTypes.includes(type);
                  return (
                    <button
                      key={type}
                      onClick={() => onTypeToggle(type)}
                      className={`flex items-center gap-5 px-5 py-4 rounded-[14px] border-2 transition-all text-left w-full ${
                        isSelected
                          ? 'border-[#1a1814] bg-[#fdf7ec]'
                          : 'border-[#e8e4db] bg-[#faf8f5] hover:border-[#c5bfb5] hover:bg-white'
                      }`}
                    >
                      <div className={`w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0 ${cfg.bgColor}`}>
                        <Icon size={22} className={cfg.color} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-[15px] font-bold text-[#1a1814]">{cfg.label}</p>
                        <p className="text-[12px] text-[#b0aaa2] mt-0.5">Create a meter reading document for {cfg.desc}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected ? 'border-[#1a1814] bg-[#1a1814]' : 'border-[#c5bfb5] bg-white'
                      }`}>
                        {isSelected && (
                          <svg width="9" height="8" viewBox="0 0 9 8" fill="none">
                            <path d="M1.5 4L3.5 6L7.5 2" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {totalDocs > 0 && (
                <div className="px-4 py-3 rounded-[10px] bg-[#f0ebe0] border border-[#e0d8c8]">
                  <p className="text-[12px] text-[#7d6e5a] font-medium">
                    This will create{' '}
                    <span className="font-bold text-[#1a1814]">{totalDocs}</span>{' '}
                    meter reading document(s) —{' '}
                    <span className="font-bold text-[#1a1814]">{selectedTenants.length}</span> tenant(s) ×{' '}
                    <span className="font-bold text-[#1a1814]">{selectedTypes.length}</span> meter type(s).
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Modal Footer ── */}
        <div className="flex items-center justify-between px-7 py-4 border-t border-[#f0ebe0] bg-[#faf8f5]/60 shrink-0">
          {/* Left count badge */}
          <div className="flex items-center gap-2">
            <button
              onClick={step === 1 ? onCancel : onBack}
              className="px-4 py-2 rounded-[10px] border border-[#e8e4db] bg-white text-[13px] font-semibold text-[#7d7870] hover:bg-[#f0ebe0] transition-colors"
            >
              {step === 1 ? 'Cancel' : 'Back'}
            </button>
            {step === 1 && selectedTenants.length > 0 && (
              <span className="text-[12px] text-[#b0aaa2] font-medium">{selectedTenants.length} selected</span>
            )}
            {step === 2 && selectedTypes.length > 0 && (
              <span className="text-[12px] text-[#b0aaa2] font-medium">{selectedTypes.length} type(s) selected</span>
            )}
          </div>

          {step === 1 ? (
            <motion.button
              onClick={onNext}
              disabled={selectedTenants.length === 0}
              whileHover={selectedTenants.length > 0 ? { scale: 1.02 } : {}}
              whileTap={selectedTenants.length > 0 ? { scale: 0.97 } : {}}
              className={`flex items-center gap-2 px-5 py-2 rounded-[10px] text-[13px] font-bold transition-colors ${
                selectedTenants.length > 0
                  ? 'bg-[#1a1814] text-white hover:bg-[#2d2820]'
                  : 'bg-[#e8e4db] text-[#b0aaa2] cursor-not-allowed'
              }`}
            >
              Next
              <ChevronRight size={15} />
            </motion.button>
          ) : (
            <motion.button
              onClick={onSubmit}
              disabled={selectedTypes.length === 0}
              whileHover={selectedTypes.length > 0 ? { scale: 1.02 } : {}}
              whileTap={selectedTypes.length > 0 ? { scale: 0.97 } : {}}
              className={`flex items-center gap-2 px-5 py-2 rounded-[10px] text-[13px] font-bold transition-colors ${
                selectedTypes.length > 0
                  ? 'bg-[#1a1814] text-white hover:bg-[#2d2820]'
                  : 'bg-[#e8e4db] text-[#b0aaa2] cursor-not-allowed'
              }`}
            >
              Create Meter Readings
              <CheckCircle size={15} />
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DocumentCategoryPage() {
  const params = useParams();
  const category = (params.category as string) ?? '';
  const config = categoryConfig[category];

  // ── Modal state ──
  const [modalStep, setModalStep]       = useState<1 | 2 | null>(null);
  const [selectedTenants, setSelectedTenants] = useState<number[]>([]);
  const [selectedTypes, setSelectedTypes]     = useState<MeterType[]>([]);

  // ── Local meter readings (so new ones appear in the table) ──
  const [localMeterDocs, setLocalMeterDocs] = useState<StandardDoc[]>(meterReadingsDocs);

  if (!config) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#faf8f5]">
        <div className="text-center">
          <p className="text-[18px] font-bold text-[#1a1814] mb-2">Category not found</p>
          <Link href="/dashboard/documents" className="text-[14px] text-[#b8975a] hover:underline">Back to Documents</Link>
        </div>
      </div>
    );
  }

  // ── Handlers ──
  const handleTenantToggle = (id: number) =>
    setSelectedTenants(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const handleTypeToggle = (type: MeterType) =>
    setSelectedTypes(prev => prev.includes(type) ? prev.filter(x => x !== type) : [...prev, type]);

  const handleSelectAll = () =>
    setSelectedTenants(prev => prev.length === tenantOptions.length ? [] : tenantOptions.map(t => t.id));

  const handleOpenModal = () => {
    setSelectedTenants([]);
    setSelectedTypes([]);
    setModalStep(1);
  };

  const handleCancel = () => {
    setModalStep(null);
    setSelectedTenants([]);
    setSelectedTypes([]);
  };

  const handleSubmit = () => {
    const now  = new Date();
    const day  = String(now.getDate()).padStart(2, '0');
    const mon  = now.toLocaleString('en-GB', { month: 'short' });
    const year = now.getFullYear();
    const hh   = String(now.getHours()).padStart(2, '0');
    const mm   = String(now.getMinutes()).padStart(2, '0');
    const dateStr = `${day} ${mon} ${year}`;
    const timeStr = `${hh}:${mm} AM`;

    let nextId = localMeterDocs.length > 0 ? Math.max(...localMeterDocs.map(d => d.id)) + 1 : 1;
    const newDocs: StandardDoc[] = [];

    for (const tenantId of selectedTenants) {
      const tenant = tenantOptions.find(t => t.id === tenantId)!;
      for (const type of selectedTypes) {
        newDocs.push({
          id: nextId++,
          actionType: 'signature-unsigned',
          date: dateStr,
          time: timeStr,
          lastUpdated: `${dateStr}, ${hh}:${mm}`,
          firstName: tenant.firstName,
          lastName: tenant.lastName,
          building: tenant.building,
          title: `Meter Reading - ${meterTypeConfig[type].label}`,
          hasEmail: true,
          hasPhone: true,
        });
      }
    }

    setLocalMeterDocs(prev => [...newDocs, ...prev]);
    handleCancel();
  };

  const currentDocs = category === 'meter-readings' ? localMeterDocs : (config.standardDocs ?? []);
  const docCount = config.type === 'house-rules'
    ? (config.houseRulesDocs?.length ?? 0)
    : currentDocs.length;

  return (
    <div className="flex h-screen bg-[#faf8f5] overflow-hidden">
      <Sidebar activeCategory={category} />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar categoryLabel={config.label} />

        <div className="flex-1 bg-[#f0ebe0] rounded-tl-[36px] overflow-hidden min-h-0 flex flex-col p-6 gap-3">
          {/* + add tab */}
          <button className="w-8 h-8 rounded-[9px] bg-[#e6e1d8] hover:bg-[#ddd8cf] flex items-center justify-center transition-colors shadow-sm shrink-0">
            <Plus size={14} className="text-[#7d7870]" />
          </button>

          <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] overflow-hidden flex-1 flex flex-col min-h-0">

            {/* ─── Header ──────────────────────────────────────────────── */}
            <div className="flex items-center justify-between px-7 pt-6 pb-5 shrink-0">
              <div className="flex items-center gap-3">
                <Link href="/dashboard/documents">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors">
                    <ChevronLeft size={18} className="text-[#1a1814]" />
                  </button>
                </Link>
                <h1 className="text-[20px] font-bold text-[#1a1814]">{config.label}</h1>
                <span className="flex items-center gap-1.5 text-[14px] text-[#b8975a] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8975a] inline-block" />
                  {docCount} {docCount === 1 ? 'file' : 'files'}
                </span>
              </div>
              <button className="px-4 py-2 rounded-[10px] border border-[#e8e4db] bg-white text-[13px] font-semibold text-[#1a1814] hover:bg-[#f0ebe0] transition-colors shadow-sm">
                Edit Table
              </button>
            </div>

            {/* ─── Table ───────────────────────────────────────────────── */}
            <div
              className="flex-1 min-h-0 overflow-auto"
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
            >
              {config.type === 'house-rules' ? (
                <HouseRulesTable docs={config.houseRulesDocs ?? []} />
              ) : (
                <StandardTable docs={currentDocs} label={config.label} category={category} statusVariant={category === 'meter-readings' ? 'meter' : ['rental-contract','electricity','gas','water','oil-heating','service-provider','others'].includes(category) ? 'full' : 'none'} />
              )}
            </div>

            {/* ─── Pagination ──────────────────────────────────────────── */}
            {docCount > 0 && (
              <div className="flex items-center justify-between px-6 py-4 border-t border-[#e8e4db] shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 border border-[#e8e4db] rounded-[8px] px-2 py-1 bg-white text-[12px] text-[#1a1814] font-medium cursor-pointer hover:bg-[#f0ebe0] transition-colors">
                    20 <ChevronDown size={11} className="text-[#7d7870]" />
                  </div>
                  <span className="text-[12px] text-[#7d7870]">Items per page 1 – {docCount} of {docCount} items</span>
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
            )}
          </div>
        </div>
      </div>

      {/* Add Meter Reading Modal */}
      {modalStep !== null && (
        <AddMeterReadingModal
          step={modalStep}
          selectedTenants={selectedTenants}
          selectedTypes={selectedTypes}
          onTenantToggle={handleTenantToggle}
          onTypeToggle={handleTypeToggle}
          onSelectAll={handleSelectAll}
          onNext={() => setModalStep(2)}
          onBack={() => setModalStep(1)}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      )}

      {/* FAB — opens Add Meter Reading modal when on meter-readings page */}
      <button
        onClick={category === 'meter-readings' ? handleOpenModal : undefined}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#1a1814] text-white shadow-2xl flex items-center justify-center hover:bg-[#2d2820] transition-colors hover:scale-105 active:scale-95 z-50"
      >
        <Plus size={24} />
      </button>
    </div>
  );
}
