'use client';

import { useState } from 'react';
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
  X,
  ChevronDown,
  ChevronLeft,
  MoreHorizontal,
  Smartphone,
  Undo2,
  Redo2,
  Bold,
  Italic,
  AlignLeft,
  List,
  MoreVertical,
  ListFilter,
  CalendarClock,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

interface DamageReport {
  id: number;
  urgency: 'High' | 'Medium' | 'Low';
  date: string;
  time: string;
  lastUpdated: string;
  firstName: string;
  lastName: string;
  building: string;
  district: string;
  title: string;
  category: string;
  status: 'In Progress' | 'Appointment' | 'Completed' | 'Cancelled';
  appointmentDate?: string;
  description: string;
  hasApp: boolean;
  hasEmail: boolean;
  images?: string[];
}

const reports: DamageReport[] = [
  {
    id: 1,
    urgency: 'High',
    date: '21 Jan 2026',
    time: '11:02 AM',
    lastUpdated: '21 January 2026, 11:02',
    firstName: 'Tunan',
    lastName: 'Tunan',
    building: '222m Street',
    district: 'Mitte',
    title: 'Roof Structural Damage',
    category: 'Attic',
    status: 'In Progress',
    description: 'There is visible structural damage to the roof near the attic access hatch. Several wooden beams appear cracked and there is daylight visible through a gap in the roofing material. Immediate inspection is required to prevent further deterioration and potential water ingress.',
    hasApp: true,
    hasEmail: false,
    images: [
      'https://placehold.co/600x400/c4b08a/4a3a2a?text=Roof+View+1',
      'https://placehold.co/600x400/b0a080/3a2a1a?text=Roof+View+2',
    ],
  },
  {
    id: 2,
    urgency: 'High',
    date: '13 Jan 2026',
    time: '03:08 PM',
    lastUpdated: '15 January 2026, 15:08',
    firstName: 'Matthiass',
    lastName: 'Vogel',
    building: 'Alexanderplatz 10',
    district: 'Mitte',
    title: 'Attic Insulation Failure',
    category: 'Attic',
    status: 'In Progress',
    description: 'The insulation in the attic has deteriorated significantly. Cold air is entering the living space above the ceiling, causing uncomfortable temperatures and increased heating costs. The vapor barrier also appears damaged in multiple areas.',
    hasApp: true,
    hasEmail: true,
  },
  {
    id: 3,
    urgency: 'Low',
    date: '5 Jan 2026',
    time: '04:29 PM',
    lastUpdated: '05 January 2026, 16:29',
    firstName: 'Sendi',
    lastName: 'Patryjar',
    building: 'Wilhelmstraße 4',
    district: 'Mitte',
    title: 'Door Handle Broken',
    category: 'Hallway',
    status: 'In Progress',
    description: 'The interior door handle in the hallway is broken and does not latch properly. The mechanism feels loose and has partially detached from the door plate. While the door can still be opened manually, it is not secure and should be replaced.',
    hasApp: false,
    hasEmail: true,
  },
  {
    id: 4,
    urgency: 'Medium',
    date: '17 Nov 2025',
    time: '03:41 PM',
    lastUpdated: '17 November 2025, 15:41',
    firstName: 'Matthiass',
    lastName: 'Vogel',
    building: 'Alexanderplatz 10',
    district: 'Mitte',
    title: 'Ceiling Water Stain',
    category: 'Attic',
    status: 'In Progress',
    description: 'A large water stain has appeared on the ceiling of the living room, directly below the attic. The stain has been growing over the past two weeks and the plaster is beginning to bubble and crack. The source appears to be a slow roof leak.',
    hasApp: true,
    hasEmail: false,
  },
  {
    id: 5,
    urgency: 'Medium',
    date: '17 Nov 2025',
    time: '03:40 PM',
    lastUpdated: '17 November 2025, 15:40',
    firstName: 'Matthiass',
    lastName: 'Vogel',
    building: 'Alexanderplatz 10',
    district: 'Mitte',
    title: 'Attic Ventilation Issue',
    category: 'Attic',
    status: 'In Progress',
    description: 'The ventilation system in the attic is no longer functioning properly. There is a noticeable musty odor spreading into the upper floor apartments and condensation is forming on the interior rafters. This may lead to mold growth if not addressed promptly.',
    hasApp: true,
    hasEmail: true,
  },
  {
    id: 6,
    urgency: 'High',
    date: '17 Nov 2025',
    time: '02:31 PM',
    lastUpdated: '17 November 2025, 14:31',
    firstName: 'Matthiass',
    lastName: 'Vogel',
    building: 'Alexanderplatz 10',
    district: 'Mitte',
    title: 'Clogged Toilet',
    category: 'Bathroom',
    status: 'Appointment',
    appointmentDate: '25 November 2025, 10:00 AM – 12:00 PM',
    description: 'The toilet in the main bathroom is completely clogged and has overflowed twice. Standard plunging has not resolved the issue. There may be a blockage deeper in the pipe system. The bathroom floor has minor water damage from the overflow.',
    hasApp: true,
    hasEmail: true,
    images: [
      'https://placehold.co/600x400/d0c4b4/6a5a4a?text=Bathroom+1',
      'https://placehold.co/600x400/c0b0a0/5a4a3a?text=Bathroom+2',
      'https://placehold.co/600x400/b8a898/4a3a2a?text=Bathroom+3',
    ],
  },
  {
    id: 7,
    urgency: 'Low',
    date: '22 Oct 2025',
    time: '02:32 PM',
    lastUpdated: '31 October 2025, 14:32',
    firstName: 'Bagas',
    lastName: 'Marsya',
    building: 'Alexanderplatz 10',
    district: 'Mitte',
    title: 'Engineering Test Report',
    category: 'Attic',
    status: 'Appointment',
    appointmentDate: '05 November 2025, 02:00 PM – 04:00 PM',
    description: 'This is an engineering test report submitted for system verification purposes. An inspection of the attic space and structural assessment is requested to validate the maintenance schedule and ensure all systems are compliant with current building regulations.',
    hasApp: true,
    hasEmail: false,
  },
  {
    id: 8,
    urgency: 'Low',
    date: '16 Oct 2025',
    time: '11:59 AM',
    lastUpdated: '16 October 2025, 11:59',
    firstName: 'Matthiass',
    lastName: 'Vogel',
    building: 'Alexanderplatz 10',
    district: 'Mitte',
    title: 'Attic Skylight Crack',
    category: 'Attic',
    status: 'Completed',
    description: 'A hairline crack was discovered in the attic skylight frame. Although minor, it was reported as a precaution. The crack was sealed with weatherproof sealant and the skylight was inspected to ensure no water infiltration. Issue has been resolved.',
    hasApp: false,
    hasEmail: true,
  },
  {
    id: 9,
    urgency: 'Medium',
    date: '24 Sep 2025',
    time: '04:24 PM',
    lastUpdated: '30 September 2025, 16:24',
    firstName: 'Matthiass',
    lastName: 'Vogel',
    building: 'Alexanderplatz 10',
    district: 'Mitte',
    title: 'Roof Tile Displacement',
    category: 'Roof',
    status: 'Appointment',
    appointmentDate: '18 September 2025, 01:00 PM – 03:00 PM',
    description: 'Several roof tiles on the south-facing slope have shifted out of position after strong winds. Water may be able to penetrate the underlayer during rain. The displaced tiles need to be repositioned and secured, and the underlayer should be inspected for damage.',
    hasApp: true,
    hasEmail: true,
    images: [
      'https://placehold.co/600x400/c8b898/5a4a3a?text=Roof+Tile+1',
      'https://placehold.co/600x400/b8a888/4a3a2a?text=Roof+Tile+2',
    ],
  },
  {
    id: 10,
    urgency: 'Low',
    date: '22 Sep 2025',
    time: '03:02 PM',
    lastUpdated: '22 September 2025, 15:02',
    firstName: 'Matthiass',
    lastName: 'Vogel',
    building: 'Alexanderplatz 10',
    district: 'Mitte',
    title: 'New Damage Report Filed',
    category: 'Attic',
    status: 'Cancelled',
    description: 'A new damage report was submitted regarding a minor cosmetic issue in the attic storage area. Upon further review, the issue was found to be within normal wear and tear parameters and did not require professional intervention. The report has been cancelled accordingly.',
    hasApp: false,
    hasEmail: false,
  },
  {
    id: 11,
    urgency: 'Medium',
    date: '10 Sep 2025',
    time: '09:15 AM',
    lastUpdated: '10 September 2025, 09:15',
    firstName: 'Anna',
    lastName: 'Schmidt',
    building: 'Friedrichstraße 44',
    district: 'Mitte',
    title: 'Broken Window Latch',
    category: 'Living Room',
    status: 'Completed',
    description: 'The window latch in the living room was broken and the window could not be secured from the inside. This posed a safety and security risk. A technician replaced the latch mechanism and tested the window seal. The repair was completed successfully.',
    hasApp: false,
    hasEmail: true,
  },
  {
    id: 12,
    urgency: 'High',
    date: '05 Aug 2025',
    time: '11:30 AM',
    lastUpdated: '05 August 2025, 11:30',
    firstName: 'Daniel',
    lastName: 'Richter',
    building: 'Alexanderplatz 10',
    district: 'Mitte',
    title: 'Heating System Failure',
    category: 'Basement',
    status: 'Appointment',
    appointmentDate: '12 August 2025, 09:00 AM – 11:00 AM',
    description: 'The central heating system serving the entire building has stopped functioning. The boiler in the basement is showing an error code and has shut down automatically. Residents on all floors are without heating. An emergency service call has been logged with the HVAC provider.',
    hasApp: true,
    hasEmail: true,
  },
  {
    id: 13,
    urgency: 'High',
    date: '20 Jul 2025',
    time: '02:00 PM',
    lastUpdated: '20 July 2025, 14:00',
    firstName: 'Marco',
    lastName: 'Reus',
    building: 'Alexanderplatz 25',
    district: 'Mitte',
    title: 'Mold Growth in Bathroom',
    category: 'Bathroom',
    status: 'In Progress',
    description: 'Significant black mold growth has been identified in the bathroom, particularly around the shower enclosure and ceiling corners. The ventilation fan appears to have failed, causing excessive humidity build-up. The affected area spans approximately 0.5 sqm and requires professional mold remediation.',
    hasApp: true,
    hasEmail: true,
    images: [
      'https://placehold.co/600x400/cac2b8/6a5a5a?text=Mold+View+1',
      'https://placehold.co/600x400/bab2a8/5a4a4a?text=Mold+View+2',
      'https://placehold.co/600x400/aaa298/4a3a3a?text=Mold+View+3',
    ],
  },
];

const navItems = [
  { icon: Users,         label: 'Tenant Management', href: '/dashboard/tenant-management' },
  { icon: Mail,          label: 'Messages',           href: '/dashboard/messages' },
  { icon: AlertTriangle, label: 'Damage Reports',     href: '/dashboard/damage-reports' },
  { icon: FileText,      label: 'Documents',          href: '/dashboard/documents' },
  { icon: Wrench,        label: 'Service Providers',  href: '/dashboard/service-providers' },
  { icon: Database,      label: 'Data',               href: '#' },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  default: { bg: 'bg-[#f0ebe0]', text: 'text-[#7d7870]', border: 'border-[#e8dcc8]' },
};

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
        const isDamage = label === 'Damage Reports';
        return (
          <div key={label}>
            <Link
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors mb-1 ${
                isDamage ? 'bg-[#f0ebe0] text-[#1a1814]' : 'text-[#7d7870] hover:bg-[#f0ebe0]'
              }`}
            >
              <Icon size={18} />
              <span className="text-[14px] font-semibold flex-1">{label}</span>
              {isDamage && <ChevronDown size={14} className="opacity-50" />}
            </Link>

            {isDamage && (
              <div className="ml-7 mb-1 flex flex-col gap-0.5">
                {[
                  { label: 'All Items',  icon: ListFilter, active: true },
                  { label: 'All Drafts', icon: Archive,    active: false },
                  { label: 'Bin',        icon: Trash2,     active: false },
                ].map(sub => (
                  <button
                    key={sub.label}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] font-medium transition-colors w-full text-left ${
                      sub.active ? 'text-[#1a1814] font-semibold' : 'text-[#7d7870] hover:bg-[#f0ebe0]'
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
      <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[#7d7870] hover:bg-[#f0ebe0] transition-colors">
        <Settings size={18} /><span className="text-[14px] font-semibold">Settings</span>
      </Link>
    </div>
  </aside>
);

// ─── TopBar ───────────────────────────────────────────────────────────────────

const TopBar = ({ report }: { report: DamageReport }) => (
  <header className="h-[88px] flex items-center px-8 gap-3 bg-[#faf8f5] min-w-0">
    <div className="flex items-center gap-1.5 text-[13px] flex-1 min-w-0 flex-wrap">
      <Link href="/dashboard">
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors whitespace-nowrap">
          <X size={11} className="text-[#7d7870]" />
          <span className="text-[#7d7870] font-medium">Overview</span>
        </button>
      </Link>
      <ChevronRight size={12} className="text-[#c5bfb5] shrink-0" />
      <Link href="/dashboard/damage-reports">
        <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors whitespace-nowrap">
          <X size={11} className="text-[#7d7870]" />
          <span className="text-[#7d7870] font-medium">Damage Reports</span>
        </button>
      </Link>
      <ChevronRight size={12} className="text-[#c5bfb5] shrink-0" />
      <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors whitespace-nowrap">
        <X size={11} className="text-[#7d7870]" />
        <span className="text-[#7d7870] font-medium">{report.district}</span>
      </button>
      <ChevronRight size={12} className="text-[#c5bfb5] shrink-0" />
      <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors whitespace-nowrap">
        <X size={11} className="text-[#7d7870]" />
        <span className="text-[#7d7870] font-medium">{report.building}</span>
      </button>
      <ChevronRight size={12} className="text-[#c5bfb5] shrink-0" />
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#f0ebe0] rounded-[10px] min-w-0">
        <span className="text-[#1a1814] font-semibold truncate max-w-[140px]">{report.title}</span>
        <Link href="/dashboard/damage-reports">
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

// ─── Status display helper ────────────────────────────────────────────────────

function StatusChip({ report }: { report: DamageReport }) {
  if (report.status === 'Appointment' && report.appointmentDate) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#fdf7ec] border border-[#e8dcc8]">
        <CalendarClock size={13} className="text-[#b8975a] shrink-0" />
        <span className="text-[12px] font-semibold text-[#b8975a] whitespace-nowrap">
          Appointment : {report.appointmentDate}
        </span>
        <ChevronRight size={12} className="text-[#b8975a] shrink-0" />
      </div>
    );
  }
  if (report.status === 'Completed') {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-emerald-50 border border-emerald-200">
        <span className="text-[12px] font-semibold text-emerald-600">Completed</span>
      </div>
    );
  }
  if (report.status === 'Cancelled') {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#f4f4f4] border border-[#e8e4db]">
        <span className="text-[12px] font-semibold text-[#9e9e9e]">Cancelled</span>
      </div>
    );
  }
  // In Progress
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#fdf7ec] border border-[#e8dcc8]">
      <span className="text-[12px] font-semibold text-[#b8975a]">In Progress</span>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const TABS = ['Damage Report', 'Messages', 'Tenant', 'Service Provider'] as const;
type Tab = typeof TABS[number];

export default function DamageReportDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const report = reports.find(r => r.id === id);

  const [activeTab, setActiveTab] = useState<Tab>('Damage Report');
  const [urgency, setUrgency] = useState<'Low' | 'Medium' | 'High'>(report?.urgency ?? 'Low');
  const [hasApp, setHasApp]   = useState(report?.hasApp ?? false);
  const [hasEmail, setHasEmail] = useState(report?.hasEmail ?? false);
  const [description, setDescription] = useState(report?.description ?? '');
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const reportImages = report?.images ?? [`https://placehold.co/600x400/d4c4a8/7d7870?text=${encodeURIComponent(report?.category ?? 'Damage')}`];

  if (!report) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#faf8f5]">
        <div className="text-center">
          <p className="text-[18px] font-bold text-[#1a1814] mb-2">Report not found</p>
          <Link href="/dashboard/damage-reports" className="text-[14px] text-[#b8975a] hover:underline">Back to Damage Reports</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#faf8f5] overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar report={report} />

        {/* Main scroll area */}
        <div className="flex-1 bg-[#f0ebe0] rounded-tl-[36px] overflow-hidden min-h-0">
          <div className="h-full overflow-y-auto p-6 scrollbar-minimal" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}>

            {/* + add tab */}
            <button className="mb-3 w-8 h-8 rounded-[9px] bg-[#e6e1d8] hover:bg-[#ddd8cf] flex items-center justify-center transition-colors shadow-sm">
              <Plus size={14} className="text-[#7d7870]" />
            </button>

            {/* ─── Card ─────────────────────────────────────────────────── */}
            <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden">

              {/* ══════════════════════════════════════════════════════════
                  SECTION 1 — Header
              ══════════════════════════════════════════════════════════ */}
              <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-[#f0ebe0] flex-wrap">
                {/* Back */}
                <Link href="/dashboard/damage-reports">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
                    <ChevronLeft size={18} className="text-[#1a1814]" />
                  </button>
                </Link>

                {/* Title */}
                <span className="text-[18px] font-bold text-[#1a1814] shrink-0">Damage Report</span>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Status chip */}
                <StatusChip report={report} />

                {/* Category pill */}
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0ebe0] border border-[#e8dcc8] rounded-[8px] cursor-pointer hover:bg-[#e8dcc8]/60 transition-colors shrink-0">
                  <span className="text-[13px] font-semibold text-[#4a453d]">{report.category}</span>
                  <ChevronRight size={12} className="text-[#7d7870]" />
                </div>

                {/* 3-dot menu */}
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
                  <MoreHorizontal size={17} className="text-[#7d7870]" />
                </button>
              </div>

              {/* ══════════════════════════════════════════════════════════
                  SECTION 2 — Tabs
              ══════════════════════════════════════════════════════════ */}
              <div className="flex border-b border-[#e8e4db]">
                {TABS.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3.5 text-[13px] font-semibold text-center transition-colors relative ${
                      activeTab === tab ? 'text-[#1a1814]' : 'text-[#9e9e9e] hover:text-[#7d7870]'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div
                        layoutId="tab-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b8975a] rounded-full"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* ══════════════════════════════════════════════════════════
                  SECTION 3 — Content (Damage Report tab)
              ══════════════════════════════════════════════════════════ */}
              {activeTab === 'Damage Report' && (
                <div className="flex flex-1" style={{ minHeight: 440 }}>
                  {/* Left — Title + Image + Thumbnails */}
                  <div className="w-[42%] shrink-0 border-r border-[#f0ebe0] p-7 flex flex-col gap-4">
                    <h2 className="text-[18px] font-bold text-[#1a1814] leading-tight shrink-0">{report.title}</h2>
                    {/* Main image */}
                    <div className="rounded-[16px] overflow-hidden bg-[#e8e4db] flex-1 relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={reportImages[selectedImageIdx]}
                        alt={report.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                    </div>
                    {/* Thumbnail strip — only visible when >1 image */}
                    {reportImages.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto scrollbar-minimal shrink-0" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}>
                        {reportImages.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedImageIdx(i)}
                            className={`shrink-0 w-16 h-14 rounded-[8px] overflow-hidden border-2 transition-all ${
                              i === selectedImageIdx ? 'border-[#b8975a]' : 'border-[#e8e4db] opacity-55 hover:opacity-90'
                            }`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={img} alt={`view ${i + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right — Description */}
                  <div className="flex-1 p-7 flex flex-col gap-4">
                    <p className="text-[15px] font-bold text-[#1a1814] shrink-0">Description</p>

                    {/* Mini WYSIWYG toolbar */}
                    <div className="border border-[#e8e4db] rounded-[12px] overflow-hidden flex flex-col flex-1">
                      <div className="flex items-center gap-1 px-3 py-2.5 border-b border-[#f0ebe0] bg-[#faf8f5] flex-wrap shrink-0">
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Undo2 size={13} className="text-[#7d7870]" /></button>
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Redo2 size={13} className="text-[#7d7870]" /></button>
                        <div className="w-px h-4 bg-[#e8e4db] mx-1" />
                        <div className="flex items-center gap-1 px-2 py-1 rounded-[6px] border border-[#e8e4db] bg-white text-[11px] text-[#7d7870] cursor-pointer hover:bg-[#f0ebe0] transition-colors">
                          Paragraph <ChevronDown size={10} />
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-[6px] border border-[#e8e4db] bg-white text-[11px] text-[#7d7870] cursor-pointer hover:bg-[#f0ebe0] transition-colors">
                          Inter, sans-serif <ChevronDown size={10} />
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 rounded-[6px] border border-[#e8e4db] bg-white text-[11px] text-[#7d7870] cursor-pointer hover:bg-[#f0ebe0] transition-colors">
                          12pt <ChevronDown size={10} />
                        </div>
                        <div className="w-px h-4 bg-[#e8e4db] mx-1" />
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Bold size={13} className="text-[#7d7870]" /></button>
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><Italic size={13} className="text-[#7d7870]" /></button>
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><AlignLeft size={13} className="text-[#7d7870]" /></button>
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><List size={13} className="text-[#7d7870]" /></button>
                        <button className="p-1.5 rounded-[6px] hover:bg-[#f0ebe0] transition-colors"><MoreVertical size={13} className="text-[#7d7870]" /></button>
                      </div>
                      <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="w-full flex-1 p-4 text-[13px] text-[#4a453d] leading-[1.7] bg-white outline-none resize-none"
                        placeholder="Enter damage description..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Other tabs placeholder */}
              {activeTab !== 'Damage Report' && (
                <div className="flex-1 flex items-center justify-center p-12 min-h-[420px]">
                  <p className="text-[14px] text-[#c5bfb5] font-medium">{activeTab} — coming soon</p>
                </div>
              )}

              {/* ══════════════════════════════════════════════════════════
                  SECTION 4 — Link indicators + Urgency selector
              ══════════════════════════════════════════════════════════ */}
              <div className="flex items-center justify-between px-7 py-4 border-t border-[#e8e4db] bg-[#faf8f5]/40">
                {/* Left: Channel indicators */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#7d7870] uppercase tracking-[0.8px] mr-1">Sent via</span>

                  {/* HausBuddy App */}
                  <button
                    onClick={() => setHasApp(v => !v)}
                    title="HausBuddy App"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border transition-colors text-[12px] font-semibold ${
                      hasApp
                        ? 'bg-[#fdf7ec] border-[#e8dcc8] text-[#b8975a]'
                        : 'bg-[#f4f4f4] border-[#e8e4db] text-[#c5bfb5]'
                    }`}
                  >
                    <Smartphone size={14} />
                    HausBuddy
                  </button>

                  {/* Email */}
                  <button
                    onClick={() => setHasEmail(v => !v)}
                    title="Email"
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border transition-colors text-[12px] font-semibold ${
                      hasEmail
                        ? 'bg-[#fdf7ec] border-[#e8dcc8] text-[#b8975a]'
                        : 'bg-[#f4f4f4] border-[#e8e4db] text-[#c5bfb5]'
                    }`}
                  >
                    <Mail size={14} />
                    Email
                  </button>
                </div>

                {/* Right: Urgency level */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#7d7870] uppercase tracking-[0.8px] mr-1">Urgency</span>
                  {(['Low', 'Medium', 'High'] as const).map(level => (
                    <button
                      key={level}
                      onClick={() => setUrgency(level)}
                      className={`px-3 py-1.5 rounded-[8px] border text-[12px] font-semibold transition-colors ${
                        urgency === level
                          ? 'bg-[#fdf7ec] border-[#e8dcc8] text-[#b8975a]'
                          : 'bg-[#f4f4f4] border-[#e8e4db] text-[#c5bfb5]'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* ══════════════════════════════════════════════════════════
                  Footer — Cancel + Update
              ══════════════════════════════════════════════════════════ */}
              <div className="flex items-center gap-2 px-7 py-4 bg-[#fcfbf9] rounded-b-[32px] border-t border-[#e8e4db] sticky bottom-0">
                <Link
                  href="/dashboard/damage-reports"
                  className="flex items-center justify-center px-5 py-2 border border-[#e8e4db] rounded-[10px] text-[13px] font-semibold text-[#7d7870] hover:bg-[#f0ebe0] transition-colors"
                >
                  Cancel
                </Link>
                <button className="flex items-center justify-center px-5 py-2 bg-[#d0cfc9] rounded-[10px] text-[13px] font-semibold text-white">
                  Update
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
