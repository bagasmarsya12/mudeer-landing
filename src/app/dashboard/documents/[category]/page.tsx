'use client';

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

// ─── Types ────────────────────────────────────────────────────────────────────

type DocActionType = 'signature-unsigned' | 'signature-signed' | 'receipt-unread' | 'receipt-read' | 'share';

interface StandardDoc {
  id: number;
  actionType: DocActionType;
  date: string;
  time: string;
  lastUpdated: string;
  firstName: string;
  lastName: string;
  building: string;
  title: string;
  hasEmail: boolean;
  hasPhone: boolean;
}

interface HouseRulesDoc {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  lastUpdated: string;
  building: string;
  hasEmail: boolean;
  hasPhone: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const rentalContractDocs: StandardDoc[] = [
  { id: 1, actionType: 'signature-unsigned', date: '15 Jan 2026', time: '10:30 AM', lastUpdated: '15 January 2026, 10:30', firstName: 'Ahmed',  lastName: 'Hassan',    building: 'Tulip Building',       title: 'Residential Lease Agreement 2026',         hasEmail: true,  hasPhone: true  },
  { id: 2, actionType: 'signature-signed',   date: '12 Jan 2026', time: '11:00 AM', lastUpdated: '12 January 2026, 11:00', firstName: 'Sara',   lastName: 'Al-Rashid', building: 'Royal Building Dubai', title: 'Lease Renewal Confirmation',               hasEmail: true,  hasPhone: false },
  { id: 3, actionType: 'receipt-unread',     date: '10 Jan 2026', time: '02:15 PM', lastUpdated: '10 January 2026, 14:15', firstName: 'James',  lastName: 'Miller',    building: 'Cedar Heights',        title: 'Sublease Permission Notice',               hasEmail: false, hasPhone: true  },
  { id: 4, actionType: 'receipt-read',       date: '07 Jan 2026', time: '09:45 AM', lastUpdated: '07 January 2026, 09:45', firstName: 'Khalid', lastName: 'Al-Nasser', building: 'Orchid Building',       title: 'Move-in Inspection Report 2026',           hasEmail: true,  hasPhone: true  },
  { id: 5, actionType: 'share',              date: '05 Jan 2026', time: '09:00 AM', lastUpdated: '05 January 2026, 09:00', firstName: 'Nour',   lastName: 'Farhat',    building: 'Sky View Tower Dubai', title: 'Building Regulations & Compliance Notice', hasEmail: true,  hasPhone: false },
];

const houseRulesDocs: HouseRulesDoc[] = [
  { id: 1, title: 'No Smoking Policy',          category: 'General',        date: '01 Mar 2026', time: '09:00 AM', lastUpdated: '01 March 2026, 09:00',    building: 'Tulip Building',        hasEmail: true,  hasPhone: true  },
  { id: 2, title: 'Noise Regulation Guidelines', category: 'Conduct',        date: '15 Feb 2026', time: '11:30 AM', lastUpdated: '15 February 2026, 11:30', building: 'Orchid Building',       hasEmail: true,  hasPhone: false },
  { id: 3, title: 'Parking Rules & Procedures',  category: 'Parking',        date: '10 Feb 2026', time: '02:00 PM', lastUpdated: '10 February 2026, 14:00', building: 'Ammana Building Dubai', hasEmail: false, hasPhone: true  },
  { id: 4, title: 'Waste Disposal Guidelines',   category: 'Maintenance',    date: '05 Feb 2026', time: '08:45 AM', lastUpdated: '05 February 2026, 08:45', building: 'Palm Residences',       hasEmail: true,  hasPhone: true  },
  { id: 5, title: 'Pet Policy',                  category: 'General',        date: '01 Feb 2026', time: '10:15 AM', lastUpdated: '01 February 2026, 10:15', building: 'Rose Building',         hasEmail: false, hasPhone: false },
];

const meterReadingsDocs: StandardDoc[] = [
  { id: 1, actionType: 'signature-unsigned', date: '20 Dec 2025', time: '11:00 AM', lastUpdated: '20 December 2025, 11:00',  firstName: 'Mohammed', lastName: 'Al-Farsi',  building: 'Ammana Building Dubai',    title: 'Annual Meter Reading Q4 2025',                hasEmail: true,  hasPhone: true  },
  { id: 2, actionType: 'receipt-unread',     date: '18 Dec 2025', time: '03:00 PM', lastUpdated: '18 December 2025, 15:00',  firstName: 'Layla',    lastName: 'Ibrahim',   building: 'Orchid Building',          title: 'Water & Electricity Meter Reading Dec 2025',  hasEmail: true,  hasPhone: false },
  { id: 3, actionType: 'share',     date: '15 Nov 2025', time: '09:30 AM', lastUpdated: '15 November 2025, 09:30',  firstName: 'David',    lastName: 'Schneider', building: 'Palm Residences',          title: 'Monthly Meter Reading November 2025',         hasEmail: false, hasPhone: true  },
];

const electricityDocs: StandardDoc[] = [
  { id: 1, actionType: 'receipt-unread',     date: '01 Jan 2026', time: '08:00 AM', lastUpdated: '01 January 2026, 08:00',   firstName: 'Fatima', lastName: 'Al-Zaabi', building: 'Sky View Tower Dubai',  title: 'Electricity Bill Q4 2025',                hasEmail: true,  hasPhone: true  },
  { id: 2, actionType: 'signature-unsigned', date: '02 Dec 2025', time: '01:45 PM', lastUpdated: '02 December 2025, 13:45',  firstName: 'Omar',   lastName: 'Khalil',   building: 'Rose Building',         title: 'Electricity Usage Report November 2025',  hasEmail: true,  hasPhone: false },
  { id: 3, actionType: 'share',     date: '15 Nov 2025', time: '10:00 AM', lastUpdated: '15 November 2025, 10:00',  firstName: 'Priya',  lastName: 'Patel',    building: 'Maple Tower',           title: 'Electricity Service Agreement',           hasEmail: false, hasPhone: true  },
];

const gasDocs: StandardDoc[] = [
  { id: 1, actionType: 'signature-unsigned', date: '15 Dec 2025', time: '09:15 AM', lastUpdated: '15 December 2025, 09:15',  firstName: 'Lucas',  lastName: 'Weber',     building: 'Sunflower Building',      title: 'Gas Consumption Report 2025',  hasEmail: true,  hasPhone: true  },
  { id: 2, actionType: 'receipt-unread',     date: '01 Oct 2025', time: '04:00 PM', lastUpdated: '01 October 2025, 16:00',   firstName: 'Aisha',  lastName: 'Mansoor',   building: 'Highland Tower Abu Dhabi', title: 'Gas Bill Q3 2025',             hasEmail: true,  hasPhone: true  },
  { id: 3, actionType: 'share',     date: '20 Sep 2025', time: '11:30 AM', lastUpdated: '20 September 2025, 11:30', firstName: 'Yusuf',  lastName: 'Al-Hamdan', building: 'Jasmine Court',            title: 'Gas Safety Certificate 2025', hasEmail: false, hasPhone: false },
];

const waterDocs: StandardDoc[] = [
  { id: 1, actionType: 'receipt-unread',     date: '05 Jan 2026', time: '10:00 AM', lastUpdated: '05 January 2026, 10:00',  firstName: 'Elena',   lastName: 'Kowalski', building: 'Amina Tower',    title: 'Water Usage Report Q4 2025',      hasEmail: true,  hasPhone: false },
  { id: 2, actionType: 'signature-unsigned', date: '31 Dec 2025', time: '05:00 PM', lastUpdated: '31 December 2025, 17:00', firstName: 'Carlos',  lastName: 'Mendez',   building: 'Cedar Heights', title: 'Water Bill December 2025',         hasEmail: true,  hasPhone: true  },
  { id: 3, actionType: 'share',     date: '10 Dec 2025', time: '02:30 PM', lastUpdated: '10 December 2025, 14:30', firstName: 'Hana',    lastName: 'Tanaka',   building: 'Tulip Building', title: 'Water Meter Calibration Certificate', hasEmail: false, hasPhone: true  },
];

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
  'oil-heating':      { label: 'Oil Heating',       icon: Thermometer,   type: 'standard',     standardDocs: [] },
  'service-provider': { label: 'Service Provider',  icon: Wrench,        type: 'standard',     standardDocs: [] },
  'others':           { label: 'Others',            icon: FolderOpen,    type: 'standard',     standardDocs: [] },
};

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

const DocActionIcons = ({ type }: { type: DocActionType }) => {
  const isSig   = type === 'signature-unsigned' || type === 'signature-signed';
  const signed  = type === 'signature-signed';
  const isRec   = type === 'receipt-unread' || type === 'receipt-read';
  const read    = type === 'receipt-read';
  const isShare = type === 'share';

  return (
    <div className="flex items-center">
      {/* ── Signature ── */}
      <div className="flex items-center px-2">
        <span
          title={isSig ? (signed ? 'Signed' : 'Awaiting Signature') : 'N/A'}
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
            isSig
              ? signed
                ? 'bg-emerald-50 text-emerald-500'
                : 'bg-amber-50 text-amber-500'
              : 'bg-[#f4f4f4] text-[#d0cdc8]'
          }`}
        >
          <Pencil size={12} />
        </span>
      </div>
    </div>
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

const StandardTable = ({ docs, label, category }: { docs: StandardDoc[]; label: string; category: string }) => {
  const router = useRouter();
  return (
  <table className="w-full border-collapse min-w-[900px]">
      <thead>
        <tr className="border-y border-[#e8e4db] bg-[#faf8f5]/60">
          <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273] whitespace-nowrap">Action</th>
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
            <td colSpan={10}>
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
              <td className="px-4 py-3.5"><DocActionIcons type={doc.actionType} /></td>
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DocumentCategoryPage() {
  const params = useParams();
  const category = (params.category as string) ?? '';
  const config = categoryConfig[category];

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

  const docCount = config.type === 'house-rules'
    ? (config.houseRulesDocs?.length ?? 0)
    : (config.standardDocs?.length ?? 0);

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
                className="flex-1 min-h-0 overflow-auto scrollbar-minimal"
                style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
              >
                {config.type === 'house-rules' ? (
                  <HouseRulesTable docs={config.houseRulesDocs ?? []} />
                ) : (
                  <StandardTable docs={config.standardDocs ?? []} label={config.label} category={category} />
                )}
              </div>

              {/* ─── Pagination ───────────────────────────────────────────── */}
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

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#1a1814] text-white shadow-2xl flex items-center justify-center hover:bg-[#2d2820] transition-colors hover:scale-105 active:scale-95 z-50">
        <Plus size={24} />
      </button>
    </div>
  );
}
