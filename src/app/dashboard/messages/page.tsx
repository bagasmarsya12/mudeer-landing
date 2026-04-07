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
  Send,
  Inbox,
  Smartphone,
  ExternalLink,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const navItems = [
  { icon: Users,         label: 'Tenant Management', href: '/dashboard/tenant-management' },
  { icon: Mail,          label: 'Messages',           href: '/dashboard/messages' },
  { icon: AlertTriangle, label: 'Damage Reports',     href: '/dashboard/damage-reports' },
  { icon: FileText,      label: 'Documents',          href: '/dashboard/documents' },
  { icon: Wrench,        label: 'Service Providers',  href: '/dashboard/service-providers' },
  { icon: Database,      label: 'Data',               href: '#' },
];

interface Message {
  id: number;
  time: string;
  lastUpdated: string;
  firstName: string;
  lastName: string;
  building: string;
  title: string;
  hasApp: boolean;
  hasEmail: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    time: '19 Nov 2025, 10:40 AM',
    lastUpdated: '19 November 2025, 10:41',
    firstName: 'Matthiass',
    lastName: 'Vogel',
    building: 'Alexanderplatz 10',
    title: 'Wohnungsreinigung – Terminbestätigung',
    hasApp: true,
    hasEmail: true,
  },
  {
    id: 2,
    time: '20 Oct 2025, 02:46 PM',
    lastUpdated: '20 October 2025, 14:47',
    firstName: 'Matthiass',
    lastName: 'Vogel',
    building: 'Alexanderplatz 10',
    title: 'Test',
    hasApp: true,
    hasEmail: true,
  },
  {
    id: 3,
    time: '14 Oct 2025, 09:15 AM',
    lastUpdated: '14 October 2025, 09:20',
    firstName: 'Marco',
    lastName: 'Reus',
    building: 'Alexanderplatz 25',
    title: 'Nebenkostenabrechnung 2024 verfügbar',
    hasApp: true,
    hasEmail: false,
  },
  {
    id: 4,
    time: '02 Oct 2025, 03:30 PM',
    lastUpdated: '02 October 2025, 15:35',
    firstName: 'Sendi',
    lastName: 'Patryjar',
    building: 'Leopoldstraße 55',
    title: 'Wartungsarbeiten Aufzug – 10. Oktober',
    hasApp: false,
    hasEmail: true,
  },
  {
    id: 5,
    time: '28 Sep 2025, 11:00 AM',
    lastUpdated: '28 September 2025, 11:05',
    firstName: 'Katarina',
    lastName: 'Kochc',
    building: 'Alexanderplatz 10',
    title: 'Wichtige Hausordnungsänderung',
    hasApp: true,
    hasEmail: true,
  },
  {
    id: 6,
    time: '15 Sep 2025, 08:45 AM',
    lastUpdated: '15 September 2025, 08:50',
    firstName: 'Daniel',
    lastName: 'Richter',
    building: 'Alexanderplatz 10',
    title: 'Einladung Mieterversammlung – 25.09.2025',
    hasApp: true,
    hasEmail: true,
  },
  {
    id: 7,
    time: '10 Sep 2025, 02:00 PM',
    lastUpdated: '10 September 2025, 14:05',
    firstName: 'Bagas',
    lastName: 'Marsya',
    building: 'Alexanderplatz 10',
    title: 'Parkplatzregelung Tiefgarage',
    hasApp: true,
    hasEmail: false,
  },
  {
    id: 8,
    time: '05 Sep 2025, 10:20 AM',
    lastUpdated: '05 September 2025, 10:25',
    firstName: 'Anna',
    lastName: 'Schmidt',
    building: 'Friedrichstraße 44',
    title: 'Wasserversorgung – kurze Unterbrechung am 08.09',
    hasApp: false,
    hasEmail: true,
  },
  {
    id: 9,
    time: '29 Aug 2025, 04:10 PM',
    lastUpdated: '29 August 2025, 16:15',
    firstName: 'Lukas',
    lastName: 'Bauer',
    building: 'Prenzlauer Allee 8',
    title: 'Paketlieferung – Abholung erforderlich',
    hasApp: true,
    hasEmail: true,
  },
  {
    id: 10,
    time: '20 Aug 2025, 09:00 AM',
    lastUpdated: '20 August 2025, 09:05',
    firstName: 'Felix',
    lastName: 'Wagner',
    building: 'Kantstraße 33',
    title: 'Handwerkertermin – Bitte Zugang ermöglichen',
    hasApp: true,
    hasEmail: true,
  },
  {
    id: 11,
    time: '12 Aug 2025, 01:30 PM',
    lastUpdated: '12 August 2025, 13:35',
    firstName: 'Hannah',
    lastName: 'Müller',
    building: 'Torstraße 120',
    title: 'Mieterhöhung ab 01.01.2026 – Information',
    hasApp: false,
    hasEmail: true,
  },
  {
    id: 12,
    time: '05 Aug 2025, 03:45 PM',
    lastUpdated: '05 August 2025, 15:50',
    firstName: 'Emre',
    lastName: 'Yildiz',
    building: 'Boxhagener Str 77',
    title: 'Gratulation – Wilkommen im Haus!',
    hasApp: true,
    hasEmail: false,
  },
];

const PAGE_SIZE = 20;

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
        <Home size={18} />
        <span className="text-[14px] font-semibold">Overview</span>
      </Link>

      {navItems.map(({ icon: Icon, label, href }) => {
        const isActive = label === 'Messages';
        const isMessages = label === 'Messages';
        return (
          <div key={label}>
            <Link
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors mb-1 ${
                isActive ? 'bg-[#f0ebe0] text-[#1a1814]' : 'text-[#7d7870] hover:bg-[#f0ebe0]'
              }`}
            >
              <Icon size={18} />
              <span className="text-[14px] font-semibold flex-1">{label}</span>
              {isMessages && <ChevronDown size={14} className="opacity-50" />}
            </Link>
            {isMessages && (
              <div className="ml-7 mb-1 flex flex-col gap-0.5">
                {[
                  { icon: Inbox,   label: 'Inbox',      active: true },
                  { icon: Send,    label: 'Sent',        active: false },
                  { icon: Archive, label: 'All Drafts',  active: false },
                  { icon: Trash2,  label: 'Bin',         active: false },
                ].map(sub => (
                  <button
                    key={sub.label}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] font-medium transition-colors w-full text-left ${
                      sub.active ? 'bg-[#f4ebd9] text-[#b8975a]' : 'text-[#7d7870] hover:bg-[#f0ebe0]'
                    }`}
                  >
                    <sub.icon size={14} />
                    {sub.label}
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
        <Settings size={18} />
        <span className="text-[14px] font-semibold">Settings</span>
      </Link>
    </div>
  </aside>
);

// ─── TopBar ───────────────────────────────────────────────────────────────────

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
        <span className="text-[#1a1814] font-semibold">Messages</span>
        <Link href="/dashboard">
          <X size={12} className="text-[#7d7870] cursor-pointer hover:text-[#1a1814] transition-colors" />
        </Link>
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

// ─── ColHeader ────────────────────────────────────────────────────────────────

const ColHeader = ({ label }: { label: string }) => (
  <th className="px-4 py-3 text-left">
    <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273] hover:text-[#1a1814] transition-colors whitespace-nowrap">
      {label}
      <ArrowUpDown size={11} className="opacity-50" />
    </button>
  </th>
);

// ─── FAB ──────────────────────────────────────────────────────────────────────

const FAB = () => (
  <motion.button
    whileHover={{ scale: 1.07 }}
    whileTap={{ scale: 0.93 }}
    className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#b8975a] flex items-center justify-center shadow-2xl"
  >
    <Plus size={26} className="text-white" />
  </motion.button>
);

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function MessagesPage() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(PAGE_SIZE);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const filtered = messages.filter(m =>
    `${m.firstName} ${m.lastName} ${m.building} ${m.title}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paged = filtered.slice((page - 1) * perPage, page * perPage);

  const toggleAll = () => {
    if (selected.size === paged.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(paged.map(m => m.id)));
    }
  };

  const toggleOne = (id: number) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  const allChecked = paged.length > 0 && paged.every(m => selected.has(m.id));

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
                  <h1 className="text-[#1a1814] text-[24px] font-bold tracking-[0.07px]">Messages</h1>
                  <span className="text-[#b8975a] text-[14px] font-semibold bg-[#f4ebd9] px-3 py-1 rounded-full">
                    {filtered.length} Files
                  </span>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#f4ebd9] border border-[#e8dcc8] rounded-[12px] text-[14px] font-semibold text-[#1a1814] hover:bg-[#ecdfc8] transition-colors">
                  Edit Table
                </button>
              </div>

              {/* Table */}
              <div className="border border-[#e8e4db] rounded-[20px] overflow-hidden mb-4">
                <div
                  className="overflow-x-auto scrollbar-minimal"
                  style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
                >
                  <table className="w-full min-w-[900px]">
                    <thead>
                      <tr className="bg-[#faf8f5] border-b border-[#e8e4db]">
                        {/* Checkbox */}
                        <th className="px-4 py-3 w-10">
                          <input
                            type="checkbox"
                            checked={allChecked}
                            onChange={toggleAll}
                            className="w-4 h-4 rounded border-[#e8e4db] accent-[#b8975a] cursor-pointer"
                          />
                        </th>
                        <ColHeader label="Time" />
                        <ColHeader label="Last updated" />
                        <ColHeader label="First name" />
                        <ColHeader label="Last name" />
                        <ColHeader label="Building" />
                        <ColHeader label="Title" />
                        <th className="px-4 py-3 text-left">
                          <span className="text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273]">Link</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {paged.map((msg, i) => (
                        <tr
                          key={msg.id}
                          onClick={() => window.location.href = `/dashboard/messages/${msg.id}`}
                          className={`hover:bg-[#faf8f5]/70 transition-colors cursor-pointer ${
                            selected.has(msg.id) ? 'bg-[#fdf9f4]' : ''
                          } ${i < paged.length - 1 ? 'border-b border-[#e8e4db]' : ''}`}
                        >
                          {/* Checkbox */}
                          <td className="px-4 py-3">
                            <input
                              type="checkbox"
                              checked={selected.has(msg.id)}
                              onChange={() => toggleOne(msg.id)}
                              className="w-4 h-4 rounded border-[#e8e4db] accent-[#b8975a] cursor-pointer"
                            />
                          </td>
                          {/* Time */}
                          <td className="px-4 py-3 text-[13px] text-[#4a453d] whitespace-nowrap">{msg.time}</td>
                          {/* Last updated */}
                          <td className="px-4 py-3 text-[13px] text-[#7d7870] whitespace-nowrap">{msg.lastUpdated}</td>
                          {/* First name */}
                          <td className="px-4 py-3 text-[14px] font-medium text-[#1a1814] whitespace-nowrap">{msg.firstName}</td>
                          {/* Last name */}
                          <td className="px-4 py-3 text-[14px] font-medium text-[#1a1814] whitespace-nowrap">{msg.lastName}</td>
                          {/* Building */}
                          <td className="px-4 py-3 text-[13px] text-[#4a453d] whitespace-nowrap">{msg.building}</td>
                          {/* Title */}
                          <td className="px-4 py-3 text-[13px] text-[#1a1814] max-w-[240px] truncate">{msg.title}</td>
                          {/* Link icons */}
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1.5">
                              {msg.hasApp && (
                                <button
                                  title="Open in App"
                                  className="w-7 h-7 flex items-center justify-center rounded-[7px] bg-[#eef1fb] hover:bg-[#dde3f8] transition-colors"
                                >
                                  <Smartphone size={13} className="text-[#3a52a0]" />
                                </button>
                              )}
                              {msg.hasEmail && (
                                <button
                                  title="Send Email"
                                  className="w-7 h-7 flex items-center justify-center rounded-[7px] bg-[#eef1fb] hover:bg-[#dde3f8] transition-colors"
                                >
                                  <Mail size={13} className="text-[#3a52a0]" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}

                      {paged.length === 0 && (
                        <tr>
                          <td colSpan={8} className="px-4 py-12 text-center text-[14px] text-[#7d7870]">
                            No messages found.
                          </td>
                        </tr>
                      )}
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
                  <span>Items per page {(page - 1) * perPage + 1} – {Math.min(page * perPage, filtered.length)} of {filtered.length} Items</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="w-7 h-7 flex items-center justify-center rounded-[8px] border border-[#e8e4db] bg-white hover:bg-[#f0ebe0] transition-colors disabled:opacity-30 shadow-sm"
                  >
                    <ChevronLeft size={14} />
                  </button>

                  <div className="flex items-center gap-1 border border-[#e8e4db] rounded-[8px] bg-white px-2 py-1 shadow-sm">
                    <span className="font-semibold text-[#1a1814]">{page}</span>
                    <ChevronDown size={13} className="text-[#7d7870]" />
                  </div>

                  <span>of {totalPages} page</span>

                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages}
                    className="w-7 h-7 flex items-center justify-center rounded-[8px] border border-[#e8e4db] bg-white hover:bg-[#f0ebe0] transition-colors disabled:opacity-30 shadow-sm"
                  >
                    <ChevronRight size={14} />
                  </button>
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
