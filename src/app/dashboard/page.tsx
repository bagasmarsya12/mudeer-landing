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
  LayoutGrid,
  Menu,
  Folder,
  FolderOpen,
  Building2,
} from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const navItems = [
  { icon: Users, label: 'Tenant Management', href: '/dashboard/tenant-management' },
  { icon: Mail, label: 'Messages', href: '/dashboard/messages' },
  { icon: AlertTriangle, label: 'Damage Reports', href: '/dashboard/damage-reports' },
  { icon: FileText, label: 'Documents', href: '/dashboard/documents' },
  { icon: Wrench, label: 'Service Providers', href: '/dashboard/service-providers' },
  { icon: Database, label: 'Data', href: '#' },
];

const buildingCards = [
  { name: 'Tulip Building', image: 'https://placehold.co/183x104/9cb8b5/ffffff?text=Tulip' },
  { name: 'Orchid Building', image: 'https://placehold.co/183x104/7a8fa6/ffffff?text=Orchid' },
  { name: 'Rose Building', image: 'https://placehold.co/183x104/5e7d5b/ffffff?text=Rose' },
  { name: 'Sunflower Building', image: 'https://placehold.co/183x104/2d3748/ffffff?text=Sunflower' },
  { name: 'Maple Tower', image: 'https://placehold.co/183x104/8b7355/ffffff?text=Maple' },
  { name: 'Cedar Heights', image: 'https://placehold.co/183x104/6b8e6b/ffffff?text=Cedar' },
  { name: 'Palm Residences', image: 'https://placehold.co/183x104/b8860b/ffffff?text=Palm' },
  { name: 'Jasmine Court', image: 'https://placehold.co/183x104/7b6b8b/ffffff?text=Jasmine' },
];

const folders = [
  {
    name: 'Dubai',
    buildings: ['Ammana Building Dubai', 'Royal Building Dubai', 'Sky View Tower Dubai'],
  },
  {
    name: 'Abu Dhabi',
    buildings: ['Amina Tower', 'Highland Tower Abu Dhabi'],
  },
];

const tableRows = [
  { folder: 'Dubai',     subfolder: 'Commercial',  unit: 'Ammana Building',  street: 'Sheikh Zayed Rd' },
  { folder: 'Dubai',     subfolder: 'Residential', unit: 'Royal Building',   street: 'Marina Promenade' },
  { folder: 'Dubai',     subfolder: 'Residential', unit: 'Sky View Tower',   street: 'Downtown St' },
  { folder: 'Abu Dhabi', subfolder: 'Commercial',  unit: 'Amina Tower',      street: 'Corniche Rd' },
  { folder: 'Abu Dhabi', subfolder: 'Residential', unit: 'Highland Tower',   street: 'Al Reem St' },
];

// ─── Sidebar ───────────────────────────────────────────────────────────────────

const Sidebar = ({ activeItem, setActiveItem }: { activeItem: string; setActiveItem: (v: string) => void }) => {
  return (
    <aside className="w-[280px] shrink-0 bg-[#faf8f5] flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="px-6 pt-6 pb-4 flex items-center gap-3">
        <div className="flex flex-col gap-[3px]">
          <div className="w-[18px] h-1 bg-[#cda460] rounded-full" />
          <div className="w-[14px] h-1 bg-[#cda460] rounded-full" />
          <div className="w-[10px] h-1 bg-[#cda460] rounded-full" />
        </div>
        <div className="flex flex-col gap-[2px]">
          <span className="font-black text-[18px] tracking-[-0.89px] text-[#1a1814] leading-none">
            THE MUDEER
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#7d7870] leading-none">
            Property Management
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-6 pt-8 overflow-y-auto">
        {/* Overview (active) */}
        <button
          onClick={() => setActiveItem('Overview')}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-[16px] mb-1 transition-colors ${
            activeItem === 'Overview' ? 'bg-[#f0ebe0]' : 'hover:bg-[#f0ebe0]/60'
          }`}
        >
          <Home size={20} className="text-[#1a1814] shrink-0" />
          <span className="font-bold text-[16px] tracking-[-0.31px] text-[#1a1814]">Overview</span>
        </button>

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
              onClick={() => setActiveItem(label)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[16px] mb-1 transition-colors ${
                activeItem === label ? 'bg-[#f0ebe0]' : 'hover:bg-[#f0ebe0]/60'
              }`}
            >
              <Icon size={20} className="text-[#7d7870] shrink-0" />
              <span className="font-semibold text-[16px] tracking-[-0.31px] text-[#7d7870]">{label}</span>
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
};

// ─── Top Bar ───────────────────────────────────────────────────────────────────

const TopBar = () => (
  <header className="h-[88px] flex items-center px-8 gap-4 bg-[#faf8f5]">
    {/* Breadcrumb */}
    <div className="flex items-center gap-2 text-[14px] flex-1">
      <span className="text-[#7d7870] font-medium">Mudeer Dashboard</span>
      <ChevronRight size={14} className="text-[#7d7870]" />
      <span className="text-[#1a1814] font-semibold">Overview</span>
    </div>

    {/* Search */}
    <div className="flex items-center gap-2 bg-white border border-[#e8e4db] rounded-full px-4 py-2 w-[220px] shadow-sm">
      <Search size={14} className="text-[#7d7870] shrink-0" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent text-[14px] text-[#1a1814] placeholder:text-[#7d7870] outline-none w-full"
      />
    </div>

    {/* Bell */}
    <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors">
      <Bell size={20} className="text-[#1a1814]" />
    </button>
  </header>
);

// ─── Building Card ─────────────────────────────────────────────────────────────

const BuildingCard = ({ name, image }: { name: string; image: string }) => (
  <div className="relative w-[183px] shrink-0 h-[104px] rounded-[16px] overflow-hidden border border-[#e8e4db] shadow-sm">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute bottom-[10px] left-3 flex items-center gap-1 bg-white border border-[#e8e4db] rounded-full px-3 py-1 shadow-sm">
      <span className="bg-[#f4ebd9] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[8px]">🏢</span>
      <span className="text-[#1a1814] text-[12px] font-bold leading-none whitespace-nowrap">{name}</span>
    </div>
  </div>
);

// ─── Building Chip ─────────────────────────────────────────────────────────────

const BuildingChip = ({ name }: { name: string }) => (
  <button className="flex items-center gap-2 bg-white border border-[#e8e4db] rounded-[14px] px-4 py-2 shadow-sm hover:bg-[#faf8f5] transition-colors">
    <div className="w-[22px] h-[22px] bg-[#f0ebe0] rounded-[8px] flex items-center justify-center shrink-0">
      <Building2 size={14} className="text-[#7d7870]" />
    </div>
    <span className="text-[#1a1814] text-[14px] font-semibold tracking-[-0.15px] whitespace-nowrap">{name}</span>
  </button>
);

// ─── Folder Group ──────────────────────────────────────────────────────────────

const FolderGroup = ({ name, buildings }: { name: string; buildings: string[] }) => (
  <div className="mb-8">
    {/* Folder header */}
    <div className="flex items-center gap-4 mb-0">
      <div className="w-[52px] h-[52px] bg-[#f4ebd9] rounded-[16px] flex items-center justify-center shadow-sm shrink-0">
        <Folder size={24} className="text-[#b8975a]" />
      </div>
      <span className="text-[#1a1814] text-[20px] font-bold tracking-[-0.45px]">{name}</span>
    </div>

    {/* Tree connector + chips — curved L-shape */}
    <div className="flex items-start">
      {/* Curved connector: single element with border-left + border-bottom + rounded-bl */}
      <div
        className="shrink-0 border-l-2 border-b-2 border-[#e6e2d8] rounded-bl-[20px]"
        style={{ width: 44, height: 38, marginLeft: 25 }}
      />
      {/* Chips row */}
      <div className="flex flex-wrap gap-2 pt-3 pl-2">
        {buildings.map((b) => (
          <BuildingChip key={b} name={b} />
        ))}
        <button className="flex items-center gap-2 bg-[#f4ebd9] rounded-[14px] px-4 py-2 hover:bg-[#ecdfc8] transition-colors">
          <Plus size={16} className="text-[#1a1814]" />
          <span className="text-[#1a1814] text-[14px] font-semibold tracking-[-0.15px]">Add Building</span>
        </button>
      </div>
    </div>
  </div>
);

// ─── Table View ───────────────────────────────────────────────────────────────

const TableView = () => (
  <div className="border border-[#e8e4db] rounded-[20px] overflow-hidden">
    {/* Header */}
    <div className="grid grid-cols-[1.2fr_1.2fr_1.5fr_1.5fr] bg-[#faf8f5] border-b border-[#e8e4db]">
      {['Folder', 'Subfolder', 'Unit', 'Street'].map((col) => (
        <div key={col} className="px-5 py-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273]">{col}</span>
        </div>
      ))}
    </div>
    {/* Rows */}
    {tableRows.map((row, i) => (
      <div
        key={i}
        className={`grid grid-cols-[1.2fr_1.2fr_1.5fr_1.5fr] items-center hover:bg-[#faf8f5]/60 transition-colors ${
          i < tableRows.length - 1 ? 'border-b border-[#e8e4db]' : ''
        }`}
      >
        {/* Folder */}
        <div className="px-5 py-[14px] flex items-center gap-3">
          <div className="w-8 h-8 bg-[#f4ebd9] rounded-[10px] flex items-center justify-center shrink-0">
            <Folder size={15} className="text-[#b8975a]" />
          </div>
          <span className="text-[#1a1814] text-[14px] font-bold tracking-[-0.15px] whitespace-nowrap">{row.folder}</span>
        </div>
        {/* Subfolder */}
        <div className="px-5 py-[14px] flex items-center gap-3">
          <div className="w-8 h-8 bg-white border border-[#e8e4db] rounded-[10px] flex items-center justify-center shrink-0">
            <FolderOpen size={15} className="text-[#7d7870]" />
          </div>
          <span className="text-[#4a453d] text-[14px] font-semibold tracking-[-0.15px] whitespace-nowrap">{row.subfolder}</span>
        </div>
        {/* Unit */}
        <div className="px-5 py-[14px] flex items-center gap-3">
          <div className="w-8 h-8 bg-white border border-[#e8e4db] rounded-[10px] flex items-center justify-center shrink-0">
            <Building2 size={15} className="text-[#7d7870]" />
          </div>
          <span className="text-[#1a1814] text-[14px] font-bold tracking-[-0.15px] whitespace-nowrap">{row.unit}</span>
        </div>
        {/* Street */}
        <div className="px-5 py-[14px]">
          <span className="text-[#7d7870] text-[14px] font-medium tracking-[-0.15px]">{row.street}</span>
        </div>
      </div>
    ))}
  </div>
);

// ─── Main Content ──────────────────────────────────────────────────────────────

const MainContent = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
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
            <h1 className="text-[#1a1814] text-[24px] font-bold tracking-[0.07px]">
              Unallocated Buildings
            </h1>
            {/* View toggle */}
            <div className="relative h-[42px] w-[80px] rounded-[14px] overflow-hidden">
              <div className="absolute inset-0 bg-[#f4ebd9] rounded-[14px] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
              <div className="relative flex items-center gap-1 px-1 h-full">
                <button
                  onClick={() => setView('grid')}
                  className={`flex items-center justify-center h-[34px] w-[34px] rounded-[12px] shrink-0 transition-all ${
                    view === 'grid' ? 'bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]' : ''
                  }`}
                >
                  <LayoutGrid size={18} className="text-[#1a1814]" />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`flex items-center justify-center h-[34px] flex-1 rounded-[12px] transition-all ${
                    view === 'list' ? 'bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1)]' : ''
                  }`}
                >
                  <Menu size={18} className="text-[#1a1814]" />
                </button>
              </div>
            </div>
          </div>

          {/* Building photo cards */}
          <div
            className="flex gap-3 overflow-x-auto mb-8 scrollbar-minimal"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
          >
            {buildingCards.map((c) => (
              <BuildingCard key={c.name} {...c} />
            ))}
          </div>

          {/* Divider */}
          <div className="border-t-2 border-[#f0ebe0] mb-6" />

          {/* Content — grid or table */}
          {view === 'grid' ? (
            folders.map((f, i) => (
              <div key={f.name}>
                <FolderGroup name={f.name} buildings={f.buildings} />
                {i < folders.length - 1 && (
                  <div className="border-b border-[#e8e4db] mb-8 -mt-4" />
                )}
              </div>
            ))
          ) : (
            <TableView />
          )}
        </div>
      </div>
    </div>
  );
};

// ─── FAB ──────────────────────────────────────────────────────────────────────

const fabActions = [
  { icon: Building2, label: 'Add Building', bg: '#f4ebd9', iconColor: '#b8975a' },
  { icon: Folder,    label: 'Add Folder',   bg: '#f0ebe0', iconColor: '#7d7870' },
  { icon: FileText,  label: 'New Document', bg: '#e8e4db', iconColor: '#4a453d' },
];

// Arc from 90° (straight up) → 180° (straight left), evenly spaced
const FAB_RADIUS = 92;
const FAB_ANGLES = [Math.PI / 2, (Math.PI * 3) / 4, Math.PI];

const FAB = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40"
          />
        )}
      </AnimatePresence>

      {/* Anchor: fixed at bottom-right, sized to main button */}
      <div className="fixed bottom-8 right-8 z-50" style={{ width: 64, height: 64 }}>

        {/* Sub-action buttons — positioned radially around main button center */}
        <AnimatePresence>
          {open && fabActions.map(({ icon: Icon, label, bg, iconColor }, i) => {
            // Convert angle to screen-space offset (screen y is inverted vs math)
            const tx = Math.cos(FAB_ANGLES[i]) * FAB_RADIUS;
            const ty = -Math.sin(FAB_ANGLES[i]) * FAB_RADIUS;
            return (
              <motion.button
                key={label}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                animate={{ opacity: 1, x: tx, y: ty, scale: 1 }}
                exit={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                transition={{
                  type: 'spring',
                  stiffness: 420,
                  damping: 28,
                  delay: i * 0.055,
                }}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  marginLeft: -28,   // half of 56px sub-button
                  marginTop: -28,
                  backgroundColor: bg,
                }}
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
                title={label}
              >
                <Icon size={22} style={{ color: iconColor }} />
              </motion.button>
            );
          })}
        </AnimatePresence>

        {/* Main FAB — fills the anchor div */}
        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.93 }}
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

export default function DashboardPage() {
  const [activeItem, setActiveItem] = useState('Overview');

  return (
    <div className="flex h-screen bg-[#faf8f5] overflow-hidden">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar />
        <MainContent />
      </div>

      <FAB />
    </div>
  );
}
