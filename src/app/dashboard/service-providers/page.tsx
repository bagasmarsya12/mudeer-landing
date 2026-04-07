'use client';

import { useState, useRef } from 'react';
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
  ChevronDown,
  ArrowUpDown,
  MoreHorizontal,
  ListFilter,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceProvider {
  id: number;
  category: string;
  services: string[];
  companyName: string;
  phone: string;
  email: string;
  city: string;
  province: string;
  lastUpdated: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const providers: ServiceProvider[] = [
  {
    id: 1,
    category: 'Plumbing',
    services: ['Pipe Repair', 'Leak Detection', 'Water Heater Installation', 'Drain Cleaning', 'Toilet Replacement'],
    companyName: 'AquaFix Plumbing Co.',
    phone: '+971 50 123 4567',
    email: 'contact@aquafix.ae',
    city: 'Dubai',
    province: 'Dubai',
    lastUpdated: '06 April 2026, 09:00',
  },
  {
    id: 2,
    category: 'Electrical',
    services: ['Wiring Installation', 'Circuit Breaker Repair', 'Lighting Installation', 'Generator Servicing', 'CCTV Wiring', 'Switchboard Upgrade', 'Emergency Repairs'],
    companyName: 'Volta Electric Services',
    phone: '+971 52 234 5678',
    email: 'info@volta-electric.ae',
    city: 'Abu Dhabi',
    province: 'Abu Dhabi',
    lastUpdated: '05 April 2026, 14:30',
  },
  {
    id: 3,
    category: 'HVAC',
    services: ['AC Installation', 'AC Maintenance', 'Duct Cleaning', 'Refrigerant Refill'],
    companyName: 'CoolBreeze HVAC LLC',
    phone: '+971 55 345 6789',
    email: 'service@coolbreeze.ae',
    city: 'Dubai',
    province: 'Dubai',
    lastUpdated: '04 April 2026, 11:15',
  },
  {
    id: 4,
    category: 'Cleaning',
    services: ['Deep Cleaning', 'Move-in / Move-out Cleaning', 'Window Cleaning', 'Carpet Shampooing', 'Post-Construction Cleaning', 'Regular Maintenance Cleaning'],
    companyName: 'SparkClean Professional Services',
    phone: '+971 56 456 7890',
    email: 'hello@sparkclean.ae',
    city: 'Sharjah',
    province: 'Sharjah',
    lastUpdated: '03 April 2026, 08:45',
  },
  {
    id: 5,
    category: 'Landscaping',
    services: ['Garden Maintenance', 'Irrigation Installation', 'Tree Trimming'],
    companyName: 'GreenEdge Landscaping',
    phone: '+971 54 567 8901',
    email: 'info@greenedge.ae',
    city: 'Abu Dhabi',
    province: 'Abu Dhabi',
    lastUpdated: '02 April 2026, 16:00',
  },
  {
    id: 6,
    category: 'Painting',
    services: ['Interior Painting', 'Exterior Painting', 'Wallpaper Installation', 'Surface Priming', 'Epoxy Flooring'],
    companyName: 'PrimePaint Contractors',
    phone: '+971 50 678 9012',
    email: 'quotes@primepaint.ae',
    city: 'Dubai',
    province: 'Dubai',
    lastUpdated: '01 April 2026, 10:20',
  },
  {
    id: 7,
    category: 'Security',
    services: ['CCTV Installation', 'Access Control Setup', 'Burglar Alarm Installation', 'Security Guard Placement', 'Intercom Systems', 'Remote Monitoring'],
    companyName: 'ShieldGuard Security Systems',
    phone: '+971 52 789 0123',
    email: 'ops@shieldguard.ae',
    city: 'Dubai',
    province: 'Dubai',
    lastUpdated: '31 Mar 2026, 09:10',
  },
  {
    id: 8,
    category: 'Pest Control',
    services: ['Rodent Control', 'Cockroach Treatment', 'Termite Inspection', 'Bed Bug Extermination'],
    companyName: 'SafeZone Pest Control',
    phone: '+971 55 890 1234',
    email: 'bookings@safezone-pest.ae',
    city: 'Ajman',
    province: 'Ajman',
    lastUpdated: '30 Mar 2026, 13:55',
  },
  {
    id: 9,
    category: 'Elevator',
    services: ['Elevator Installation', 'Annual Maintenance Contract', 'Emergency Call-out', 'Modernization', 'Safety Inspection', 'Hydraulic Repair', 'Escalator Servicing'],
    companyName: 'LiftTech Emirates',
    phone: '+971 56 901 2345',
    email: 'support@lifttech.ae',
    city: 'Abu Dhabi',
    province: 'Abu Dhabi',
    lastUpdated: '29 Mar 2026, 07:30',
  },
  {
    id: 10,
    category: 'Carpentry',
    services: ['Custom Furniture', 'Door Repair', 'Cabinet Installation'],
    companyName: 'WoodCraft Interiors',
    phone: '+971 50 012 3456',
    email: 'design@woodcraft.ae',
    city: 'Ras Al Khaimah',
    province: 'Ras Al Khaimah',
    lastUpdated: '28 Mar 2026, 15:40',
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

// ─── Services Tag w/ Tooltip ──────────────────────────────────────────────────

const ServicesTag = ({ services }: { services: string[] }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f0ebe0] text-[#7d6e5a] text-[12px] font-bold cursor-default select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-[#b8975a] inline-block" />
        {services.length} {services.length === 1 ? 'service' : 'services'}
      </span>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.14 }}
            className="absolute bottom-[calc(100%+8px)] left-0 z-50 min-w-[200px] max-w-[260px] bg-white border border-[#e8e4db] rounded-[14px] shadow-[0_8px_32px_rgba(0,0,0,0.1)] p-3"
          >
            {/* Arrow */}
            <div className="absolute -bottom-[5px] left-4 w-2.5 h-2.5 bg-white border-r border-b border-[#e8e4db] rotate-45" />
            <p className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#9e9e9e] mb-2 px-1">Services Provided</p>
            <ul className="flex flex-col gap-1">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-2 px-1 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8975a] shrink-0" />
                  <span className="text-[13px] text-[#1a1814] font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
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
        const isSP = label === 'Service Providers';
        return (
          <div key={label}>
            <Link
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors mb-1 ${
                isSP ? 'bg-[#f0ebe0] text-[#1a1814]' : 'text-[#7d7870] hover:bg-[#f0ebe0]'
              }`}
            >
              <Icon size={18} />
              <span className="text-[14px] font-semibold flex-1">{label}</span>
              {isSP && <ChevronDown size={14} className="opacity-50" />}
            </Link>

            {isSP && (
              <div className="ml-7 mb-1 flex flex-col gap-0.5">
                {[
                  { label: 'All Providers', icon: ListFilter, active: true },
                  { label: 'All Drafts',    icon: Archive,    active: false },
                  { label: 'Bin',           icon: Trash2,     active: false },
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
        <span className="text-[#1a1814] font-semibold">Service Providers</span>
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

// ─── Table header helper ──────────────────────────────────────────────────────

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-3 text-left">
    <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273] hover:text-[#1a1814] transition-colors whitespace-nowrap">
      {children}
      <ArrowUpDown size={10} className="opacity-50" />
    </button>
  </th>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServiceProvidersPage() {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggleAll = () => {
    if (selected.size === providers.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(providers.map(p => p.id)));
    }
  };

  const toggleOne = (id: number) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const allSelected = selected.size === providers.length;
  const someSelected = selected.size > 0 && !allSelected;

  return (
    <div className="flex h-screen bg-[#faf8f5] overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar />

        <div className="flex-1 bg-[#f0ebe0] rounded-tl-[36px] overflow-hidden min-h-0 flex flex-col p-6 gap-3">
          {/* + tab button */}
          <button className="w-8 h-8 rounded-[9px] bg-[#e6e1d8] hover:bg-[#ddd8cf] flex items-center justify-center transition-colors shadow-sm shrink-0">
            <Plus size={14} className="text-[#7d7870]" />
          </button>

          <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] overflow-hidden flex-1 flex flex-col min-h-0">

            {/* ─── Header ───────────────────────────────────────────────── */}
            <div className="flex items-center justify-between px-7 pt-6 pb-5 shrink-0">
              <div className="flex items-center gap-3">
                <h1 className="text-[20px] font-bold text-[#1a1814]">Service Providers</h1>
                <span className="flex items-center gap-1.5 text-[14px] text-[#b8975a] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8975a] inline-block" />
                  {providers.length} providers
                </span>
              </div>
              <div className="flex items-center gap-2">
                {selected.size > 0 && (
                  <motion.span
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[13px] text-[#b8975a] font-semibold"
                  >
                    {selected.size} selected
                  </motion.span>
                )}
                <button className="px-4 py-2 rounded-[10px] border border-[#e8e4db] bg-white text-[13px] font-semibold text-[#1a1814] hover:bg-[#f0ebe0] transition-colors shadow-sm">
                  + Add Provider
                </button>
              </div>
            </div>

            {/* ─── Table ────────────────────────────────────────────────── */}
            <div
              className="flex-1 min-h-0 overflow-auto scrollbar-minimal"
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
            >
              <table className="w-full border-collapse min-w-[1100px]">
                <thead>
                  <tr className="border-y border-[#e8e4db] bg-[#faf8f5]/60">
                    {/* Checkbox */}
                    <th className="px-4 py-3 w-10">
                      <button
                        onClick={toggleAll}
                        className={`w-4 h-4 rounded-[4px] border-2 flex items-center justify-center transition-colors ${
                          allSelected
                            ? 'bg-[#1a1814] border-[#1a1814]'
                            : someSelected
                            ? 'bg-[#1a1814]/20 border-[#1a1814]/40'
                            : 'border-[#c5bfb5] hover:border-[#7d7870]'
                        }`}
                      >
                        {allSelected && (
                          <svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        )}
                        {someSelected && !allSelected && (
                          <div className="w-2 h-0.5 bg-[#1a1814] rounded-full" />
                        )}
                      </button>
                    </th>
                    <Th>Category</Th>
                    <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273] whitespace-nowrap">Services</th>

                    <Th>Company Name</Th>
                    <Th>Phone</Th>
                    <Th>Email</Th>
                    <Th>City</Th>
                    <Th>Province</Th>
                    <Th>Last Updated</Th>
                    <th className="px-4 py-3 w-10" />
                  </tr>
                </thead>
                <tbody>
                  {providers.map((p, i) => {
                    const isChecked = selected.has(p.id);
                    return (
                      <motion.tr
                        key={p.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15, delay: i * 0.04 }}
                        className={`border-b border-[#f0ebe0] transition-colors ${isChecked ? 'bg-[#fdf8f0]' : 'hover:bg-[#faf8f5]/70'}`}
                      >
                        {/* Checkbox */}
                        <td className="px-4 py-3.5">
                          <button
                            onClick={() => toggleOne(p.id)}
                            className={`w-4 h-4 rounded-[4px] border-2 flex items-center justify-center transition-colors ${
                              isChecked
                                ? 'bg-[#1a1814] border-[#1a1814]'
                                : 'border-[#c5bfb5] hover:border-[#7d7870]'
                            }`}
                          >
                            {isChecked && (
                              <svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            )}
                          </button>
                        </td>

                        {/* Category */}
                        <td className="px-4 py-3.5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[8px] bg-[#f4f0e8] text-[#4a3d2a] text-[12px] font-semibold border border-[#e8d9b8]">
                            {p.category}
                          </span>
                        </td>

                        {/* Services tag + tooltip */}
                        <td className="px-4 py-3.5 whitespace-nowrap">
                          <ServicesTag services={p.services} />
                        </td>

                        {/* Company Name */}
                        <td className="px-4 py-3.5 text-[13px] font-semibold text-[#1a1814] whitespace-nowrap">{p.companyName}</td>

                        {/* Phone */}
                        <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{p.phone}</td>

                        {/* Email */}
                        <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{p.email}</td>

                        {/* City */}
                        <td className="px-4 py-3.5 text-[13px] text-[#4a453d]">{p.city}</td>

                        {/* Province */}
                        <td className="px-4 py-3.5 text-[13px] text-[#4a453d]">{p.province}</td>

                        {/* Last Updated */}
                        <td className="px-4 py-3.5 text-[13px] text-[#4a453d] whitespace-nowrap">{p.lastUpdated}</td>

                        {/* Action */}
                        <td className="px-4 py-3.5">
                          <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors">
                            <MoreHorizontal size={15} className="text-[#7d7870]" />
                          </button>
                        </td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* ─── Pagination ───────────────────────────────────────────── */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#e8e4db] shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 border border-[#e8e4db] rounded-[8px] px-2 py-1 bg-white text-[12px] text-[#1a1814] font-medium cursor-pointer hover:bg-[#f0ebe0] transition-colors">
                  20 <ChevronDown size={11} className="text-[#7d7870]" />
                </div>
                <span className="text-[12px] text-[#7d7870]">Items per page · 1 – {providers.length} of {providers.length} items</span>
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

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#1a1814] text-white shadow-2xl flex items-center justify-center hover:bg-[#2d2820] transition-colors hover:scale-105 active:scale-95 z-50">
        <Plus size={24} />
      </button>
    </div>
  );
}
