'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronLeft,
  ChevronDown,
  ArrowUpDown,
  UserCircle2,
  Check,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const navItems = [
  { icon: Users, label: 'Tenant Management', href: '/dashboard/tenant-management' },
  { icon: Mail, label: 'Messages', href: '/dashboard/messages' },
  { icon: AlertTriangle, label: 'Damage Reports', href: '/dashboard/damage-reports' },
  { icon: FileText, label: 'Documents', href: '#' },
  { icon: Wrench, label: 'Service Providers', href: '/dashboard/service-providers' },
  { icon: Database, label: 'Data', href: '#' },
];

type Status = 'Tenant' | 'Owner' | 'N/A';

interface Tenant {
  id: number;
  firstName: string;
  lastName: string;
  building: string;
  phone: string;
  email: string;
  lastUpdated: string;
  status: Status;
  hausbuddyActive: boolean;
}

const tenants: Tenant[] = [
  { id: 1,  firstName: 'Tunan',     lastName: 'Tunan',     building: '222m',                phone: '+49 21',            email: '—',                         lastUpdated: '21 Jan 2026, 04:00', status: 'N/A',    hausbuddyActive: false },
  { id: 2,  firstName: 'Tenant',    lastName: 'Random',    building: 'ABC',                 phone: '+49 221 21',        email: '—',                         lastUpdated: '21 Jan 2026, 03:00', status: 'N/A',    hausbuddyActive: false },
  { id: 3,  firstName: 'Sendi',     lastName: 'Patryjar',  building: 'Leopoldstraße 55',    phone: '+49 812 312111113', email: 'sendi@stebasia.com',         lastUpdated: '15 Jan 2026, 07:00', status: 'Tenant', hausbuddyActive: true },
  { id: 4,  firstName: 'Sendi',     lastName: 'Patryjar',  building: 'Wilhelmstraße 4',     phone: '+49 812 3123123123',email: 'sendipatryjar@gmail.com',    lastUpdated: '05 Jan 2026, 07:00', status: 'Tenant', hausbuddyActive: true },
  { id: 5,  firstName: 'Katarina',  lastName: 'Kochc',     building: 'Alexanderplatz 10',   phone: '+49 309 012345',    email: 'katarina.koch@hausb…',      lastUpdated: '05 Jan 2026, 06:00', status: 'Tenant', hausbuddyActive: true },
  { id: 6,  firstName: 'Tenant',    lastName: 'AG',        building: 'ABC',                 phone: '+49 211 11',        email: '—',                         lastUpdated: '31 Oct 2025, 03:00', status: 'Tenant', hausbuddyActive: false },
  { id: 7,  firstName: 'Manuela',   lastName: 'God of werkewerke', building: 'Friedrichstraße 200', phone: '+49 21',    email: '—',                         lastUpdated: '31 Oct 2025, 03:00', status: 'N/A',    hausbuddyActive: false },
  { id: 8,  firstName: 'Marco',     lastName: 'Reus',      building: 'Alexanderplatz 25',   phone: '+49 812 3123123123',email: 'myhausbuddy@gmail…',         lastUpdated: '31 Oct 2025, 03:00', status: 'Owner',  hausbuddyActive: true },
  { id: 9,  firstName: 'Matthiass', lastName: 'Vogel',     building: 'Alexanderplatz 10',   phone: '+49 301 23345',     email: 'hausbuddyprod@gm…',         lastUpdated: '15 Oct 2025, 00:00', status: 'Owner',  hausbuddyActive: true },
  { id: 10, firstName: 'Bagas',     lastName: 'Marsya',    building: 'Alexanderplatz 10',   phone: '+49 123 11',        email: 'bagas@stebasia.com',         lastUpdated: '25 Sep 2025, 00:00', status: 'Tenant', hausbuddyActive: true },
  { id: 11, firstName: 'Matthiass', lastName: 'Manco',     building: 'Königstraße 9',       phone: '+49 121 21',        email: 'mycondoprod1@gma…',         lastUpdated: '23 Sep 2025, 00:00', status: 'Owner',  hausbuddyActive: false },
  { id: 12, firstName: 'Daniel',    lastName: 'Richter',   building: 'Alexanderplatz 10',   phone: '+49 300 123456',    email: 'daniel.r@hausbuddy…',       lastUpdated: '15 Sep 2025, 00:00', status: 'Owner',  hausbuddyActive: true },
  { id: 13, firstName: 'Anna',      lastName: 'Schmidt',   building: 'Friedrichstraße 44',  phone: '+49 171 8765432',   email: 'anna.schmidt@mail.de',       lastUpdated: '10 Sep 2025, 00:00', status: 'Tenant', hausbuddyActive: false },
  { id: 14, firstName: 'Lukas',     lastName: 'Bauer',     building: 'Prenzlauer Allee 8',  phone: '+49 160 1234567',   email: 'l.bauer@web.de',             lastUpdated: '08 Sep 2025, 00:00', status: 'Tenant', hausbuddyActive: true },
  { id: 15, firstName: 'Hannah',    lastName: 'Müller',    building: 'Torstraße 120',       phone: '+49 177 9988776',   email: 'h.mueller@gmx.de',           lastUpdated: '01 Sep 2025, 00:00', status: 'Owner',  hausbuddyActive: false },
  { id: 16, firstName: 'Felix',     lastName: 'Wagner',    building: 'Kantstraße 33',       phone: '+49 162 5544332',   email: 'felix.wagner@gmail.com',     lastUpdated: '28 Aug 2025, 00:00', status: 'Tenant', hausbuddyActive: true },
  { id: 17, firstName: 'Sophie',    lastName: 'Braun',     building: 'Rosenthaler Str 2',   phone: '+49 155 7766554',   email: 'sophie.braun@icloud.com',    lastUpdated: '20 Aug 2025, 00:00', status: 'N/A',    hausbuddyActive: false },
  { id: 18, firstName: 'Emre',      lastName: 'Yildiz',    building: 'Boxhagener Str 77',   phone: '+49 176 9988001',   email: 'emre.yildiz@hotmail.com',    lastUpdated: '15 Aug 2025, 00:00', status: 'Tenant', hausbuddyActive: false },
  { id: 19, firstName: 'Laura',     lastName: 'Koch',      building: 'Landsberger Allee 55',phone: '+49 152 3311224',   email: 'laura.koch@t-online.de',     lastUpdated: '10 Aug 2025, 00:00', status: 'Owner',  hausbuddyActive: true },
  { id: 20, firstName: 'Jan',       lastName: 'Fischer',   building: 'Müllerstraße 90',     phone: '+49 163 6677889',   email: 'jan.f@yahoo.de',             lastUpdated: '05 Aug 2025, 00:00', status: 'Tenant', hausbuddyActive: false },
];

const PAGE_SIZE = 20;

// ─── Helpers ──────────────────────────────────────────────────────────────────

const statusStyle: Record<Status, string> = {
  Tenant: 'bg-[#eef6ee] text-[#3a7d44]',
  Owner:  'bg-[#eef0fa] text-[#3a52a0]',
  'N/A':  'bg-[#f0ebe0] text-[#7d7870]',
};

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const Sidebar = () => (
  <aside className="w-[280px] shrink-0 bg-[#faf8f5] flex flex-col h-screen sticky top-0">
    {/* Logo */}
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

    {/* Navigation */}
    <nav className="flex-1 px-6 pt-8 overflow-y-auto scrollbar-minimal" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}>
      {/* Overview */}
      <Link href="/dashboard">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-[16px] mb-1 hover:bg-[#f0ebe0]/60 transition-colors">
          <Home size={20} className="text-[#7d7870] shrink-0" />
          <span className="font-semibold text-[16px] tracking-[-0.31px] text-[#7d7870]">Overview</span>
        </button>
      </Link>

      {/* Sub-items */}
      <div className="ml-[25px] border-l-2 border-[#e6e2d8] pl-[18px] py-1 flex flex-col gap-1 mb-2">
        <button className="flex items-center gap-3 px-2 py-2 rounded-[12px] hover:bg-[#f0ebe0]/60 transition-colors w-full">
          <Archive size={16} className="text-[#7d7870] shrink-0" />
          <span className="font-semibold text-[14px] tracking-[-0.15px] text-[#7d7870]">All Drafts</span>
        </button>
        <button className="flex items-center gap-3 px-2 py-2 rounded-[12px] hover:bg-[#f0ebe0]/60 transition-colors w-full">
          <Trash2 size={16} className="text-[#7d7870] shrink-0" />
          <span className="font-semibold text-[14px] tracking-[-0.15px] text-[#7d7870]">Recycle Bin</span>
        </button>
      </div>

      {/* Nav items */}
      {navItems.map(({ icon: Icon, label, href }) => (
        <Link key={label} href={href}>
          <button
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-[16px] mb-1 transition-colors ${
              label === 'Tenant Management' ? 'bg-[#f0ebe0]' : 'hover:bg-[#f0ebe0]/60'
            }`}
          >
            <Icon
              size={20}
              className={label === 'Tenant Management' ? 'text-[#1a1814] shrink-0' : 'text-[#7d7870] shrink-0'}
            />
            <span
              className={`text-[16px] tracking-[-0.31px] ${
                label === 'Tenant Management' ? 'font-bold text-[#1a1814]' : 'font-semibold text-[#7d7870]'
              }`}
            >
              {label}
            </span>
          </button>
        </Link>
      ))}
    </nav>

    {/* Settings */}
    <div className="px-6 pb-6 pt-2">
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-[16px] hover:bg-[#f0ebe0]/60 transition-colors">
        <Settings size={20} className="text-[#7d7870] shrink-0" />
        <span className="font-semibold text-[16px] tracking-[-0.31px] text-[#7d7870]">Settings</span>
      </button>
    </div>
  </aside>
);

// ─── Top Bar ──────────────────────────────────────────────────────────────────

const TopBar = () => (
  <header className="h-[88px] flex items-center px-8 gap-4 bg-[#faf8f5]">
    <div className="flex items-center gap-2 text-[14px] flex-1 flex-wrap">
      <Link href="/dashboard">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors">
          <X size={12} className="text-[#7d7870]" />
          <span className="text-[#7d7870] font-medium">Overview</span>
        </button>
      </Link>
      <ChevronRight size={14} className="text-[#c5bfb5]" />
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0ebe0] rounded-[10px]">
        <span className="text-[#1a1814] font-semibold">Tenant Management</span>
        <X size={12} className="text-[#7d7870] cursor-pointer hover:text-[#1a1814] transition-colors" />
      </div>
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

// ─── Status Badge ─────────────────────────────────────────────────────────────

const StatusBadge = ({ status }: { status: Status }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-semibold ${statusStyle[status]}`}>
    {status}
  </span>
);

// ─── Column header ────────────────────────────────────────────────────────────

const ColHeader = ({ label }: { label: string }) => (
  <th className="px-4 py-3 text-left">
    <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273] hover:text-[#1a1814] transition-colors whitespace-nowrap">
      {label}
      <ArrowUpDown size={11} className="opacity-50" />
    </button>
  </th>
);

// ─── FAB ──────────────────────────────────────────────────────────────────────

const FAB_RADIUS = 92;
const FAB_ANGLES = [Math.PI / 2, (Math.PI * 3) / 4, Math.PI];

const fabActions = [
  { icon: Users,    label: 'Add Tenant',   bg: '#f4ebd9', iconColor: '#b8975a' },
  { icon: FileText, label: 'Import CSV',   bg: '#f0ebe0', iconColor: '#7d7870' },
  { icon: Plus,     label: 'New Entry',    bg: '#e8e4db', iconColor: '#4a453d' },
];

const FAB = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-8 right-8 z-50" style={{ width: 64, height: 64 }}>
        <AnimatePresence>
          {open && fabActions.map(({ icon: Icon, label, bg, iconColor }, i) => {
            const tx = Math.cos(FAB_ANGLES[i]) * FAB_RADIUS;
            const ty = -Math.sin(FAB_ANGLES[i]) * FAB_RADIUS;
            return (
              <motion.button
                key={label}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                animate={{ opacity: 1, x: tx, y: ty, scale: 1 }}
                exit={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28, delay: i * 0.055 }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                style={{ position: 'absolute', left: '50%', top: '50%', marginLeft: -28, marginTop: -28, backgroundColor: bg }}
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
                title={label}
              >
                <Icon size={22} style={{ color: iconColor }} />
              </motion.button>
            );
          })}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(v => !v)}
          whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.93 }}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="absolute inset-0 rounded-full bg-[#1a1814] flex items-center justify-center shadow-2xl"
        >
          <Plus size={28} className="text-white" />
        </motion.button>
      </div>
    </>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function TenantManagementPage() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(PAGE_SIZE);
  const [search, setSearch] = useState('');

  const filtered = tenants.filter(t =>
    `${t.firstName} ${t.lastName} ${t.building} ${t.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

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
            {/* Browser-tab add button — outside card */}
            <button className="mb-3 w-8 h-8 rounded-[9px] bg-[#e6e1d8] hover:bg-[#ddd8cf] flex items-center justify-center transition-colors shadow-sm">
              <Plus size={14} className="text-[#7d7870]" />
            </button>
            <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] min-h-full p-8">

              {/* Header row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <h1 className="text-[#1a1814] text-[24px] font-bold tracking-[0.07px]">Tenant Management</h1>
                  <span className="text-[#b8975a] text-[14px] font-semibold bg-[#f4ebd9] px-3 py-1 rounded-full">
                    {filtered.length} Entries
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 border border-[#e8e4db] rounded-[12px] bg-white text-[14px] font-semibold text-[#1a1814] hover:bg-[#faf8f5] transition-colors shadow-sm">
                    <Database size={15} className="text-[#7d7870]" />
                    Data
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#f4ebd9] border border-[#e8dcc8] rounded-[12px] text-[14px] font-semibold text-[#1a1814] hover:bg-[#ecdfc8] transition-colors">
                    Edit Table
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="border border-[#e8e4db] rounded-[20px] overflow-hidden mb-4">
                <div
                  className="overflow-x-auto scrollbar-minimal"
                  style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
                >
                  <table className="w-full min-w-[800px]">
                    <thead>
                      <tr className="bg-[#faf8f5] border-b border-[#e8e4db]">
                        <th className="px-4 py-3 w-10 text-left">
                          <span className="text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273]">HausBuddy</span>
                        </th>
                        <ColHeader label="First name" />
                        <ColHeader label="Last name" />
                        <ColHeader label="Building" />
                        <ColHeader label="Phone" />
                        <ColHeader label="Email" />
                        <ColHeader label="Last updated" />
                        <ColHeader label="Status" />
                      </tr>
                    </thead>
                    <tbody>
                      {paged.map((tenant, i) => (
                        <tr
                          key={tenant.id}
                          onClick={() => window.location.href = `/dashboard/tenant-management/${tenant.id}`}
                          className={`hover:bg-[#faf8f5]/70 transition-colors cursor-pointer ${
                            i < paged.length - 1 ? 'border-b border-[#e8e4db]' : ''
                          }`}
                        >
                          {/* HausBuddy */}
                          <td className="px-4 py-3">
                            <div className="relative w-8 h-8 shrink-0">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                                tenant.hausbuddyActive
                                  ? 'bg-[#f4ebd9] border-[#e8dcc8]'
                                  : 'bg-[#f0ebe0] border-[#e8e4db]'
                              }`}>
                                <UserCircle2 size={18} className={tenant.hausbuddyActive ? 'text-[#b8975a]' : 'text-[#c5bfb5]'} />
                              </div>
                              {tenant.hausbuddyActive && (
                                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#3a7d44] flex items-center justify-center border border-white">
                                  <Check size={8} className="text-white" strokeWidth={3} />
                                </div>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-[14px] font-medium text-[#1a1814] whitespace-nowrap">{tenant.firstName}</td>
                          <td className="px-4 py-3 text-[14px] font-medium text-[#1a1814] whitespace-nowrap">{tenant.lastName}</td>
                          <td className="px-4 py-3 text-[14px] text-[#4a453d] whitespace-nowrap">{tenant.building}</td>
                          <td className="px-4 py-3 text-[14px] text-[#4a453d] whitespace-nowrap">{tenant.phone}</td>
                          <td className="px-4 py-3 text-[14px] text-[#4a453d] max-w-[160px] truncate">{tenant.email}</td>
                          <td className="px-4 py-3 text-[14px] text-[#7d7870] whitespace-nowrap">{tenant.lastUpdated}</td>
                          <td className="px-4 py-3">
                            <StatusBadge status={tenant.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between text-[13px] text-[#7d7870]">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 border border-[#e8e4db] rounded-[10px] bg-white px-2 py-1 shadow-sm">
                    <span className="font-semibold text-[#1a1814]">{perPage}</span>
                    <ChevronDown size={13} className="text-[#7d7870]" />
                  </div>
                  <span>Items per page · {filtered.length} of {tenants.length} Items</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="w-7 h-7 flex items-center justify-center rounded-[8px] border border-[#e8e4db] bg-white hover:bg-[#f0ebe0] transition-colors disabled:opacity-30 shadow-sm"
                  >
                    <ChevronLeft size={14} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-7 h-7 flex items-center justify-center rounded-[8px] text-[13px] font-semibold transition-colors ${
                        p === page
                          ? 'bg-[#1a1814] text-white shadow'
                          : 'border border-[#e8e4db] bg-white hover:bg-[#f0ebe0] text-[#1a1814]'
                      }`}
                    >
                      {p}
                    </button>
                  ))}

                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="w-7 h-7 flex items-center justify-center rounded-[8px] border border-[#e8e4db] bg-white hover:bg-[#f0ebe0] transition-colors disabled:opacity-30 shadow-sm"
                  >
                    <ChevronRight size={14} />
                  </button>

                  <span className="ml-1">of {totalPages} page</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <FAB />
    </div>
  );
}
