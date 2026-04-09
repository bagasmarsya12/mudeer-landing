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
  Bell,
  Search,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Check,
  UserCircle2,
  MoreHorizontal,
  Copy,
  Phone,
  Camera,
  MapPin,
  Activity,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  MoreVertical,
  Undo2,
  Redo2,
  LayoutGrid,
  X,
  Plus,
} from 'lucide-react';
import { navItems } from '@/lib/constants/navigation';
import type { Status, Tenant } from '@/lib/data/tenants';
import { tenants, statusStyle, buildingDistrict } from '@/lib/data/tenants';



// ─── Sidebar ──────────────────────────────────────────────────────────────────

const Sidebar = ({ activeHref }: { activeHref: string }) => (
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
        const isActive = activeHref.startsWith(href);
        const isTenantMgmt = label === 'Tenant Management';
        return (
          <div key={label}>
            <Link
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors mb-1 ${
                isActive
                  ? 'bg-[#f0ebe0] text-[#1a1814]'
                  : 'text-[#7d7870] hover:bg-[#f0ebe0]'
              }`}
            >
              <Icon size={18} />
              <span className="text-[14px] font-semibold flex-1">{label}</span>
              {isTenantMgmt && <ChevronDown size={14} className="opacity-50" />}
            </Link>
            {isTenantMgmt && isActive && (
              <div className="ml-7 mb-1 flex flex-col gap-0.5">
                {[
                  { icon: Users,   label: 'All Residents', active: true },
                  { icon: Archive, label: 'All Drafts',    active: false },
                  { icon: Trash2,  label: 'Bin',           active: false },
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

const TopBar = ({ tenant }: { tenant: Tenant }) => (
  <header className="h-[88px] flex items-center px-8 gap-4 bg-[#faf8f5]">
    <div className="flex items-center gap-2 text-[14px] flex-1 flex-wrap">
      <Link href="/dashboard">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors">
          <X size={12} className="text-[#7d7870]" />
          <span className="text-[#7d7870] font-medium">Overview</span>
        </button>
      </Link>
      <ChevronRight size={14} className="text-[#c5bfb5]" />
      <Link href="/dashboard/tenant-management">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors">
          <X size={12} className="text-[#7d7870]" />
          <span className="text-[#7d7870] font-medium">Tenant Management</span>
        </button>
      </Link>
      <ChevronRight size={14} className="text-[#c5bfb5]" />
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0ebe0] rounded-[10px]">
        <span className="text-[#1a1814] font-semibold">{tenant.firstName}</span>
        <Link href="/dashboard/tenant-management">
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

// ─── Profile Body (50/50 columns) ─────────────────────────────────────────────

const ProfileBody = ({ tenant }: { tenant: Tenant }) => {
  const [status, setStatus] = useState<string>(tenant.status === 'N/A' ? 'Tenant' : tenant.status);
  const phoneRaw = tenant.phone.replace('+49 ', '');

  return (
    <div className="flex border-b border-[#e8e4db]">

      {/* LEFT — avatar + dropdown */}
      <div className="w-1/2 flex flex-col items-center justify-center py-10 px-8 border-r border-[#e8e4db] shrink-0">
        <div className="relative mb-3">
          <div className="w-[180px] h-[180px] rounded-full bg-[#f0ebe0] border-2 border-[#e8dcc8] flex items-center justify-center overflow-hidden">
            <UserCircle2 size={110} className="text-[#c5bfb5]" />
          </div>
          <button className="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-white border border-[#e8e4db] flex items-center justify-center shadow-md hover:bg-[#f0ebe0] transition-colors">
            <Camera size={15} className="text-[#7d7870]" />
          </button>
        </div>
        <span className="text-[12px] text-[#7d7870] mb-8">Edit Profile Photo</span>

        {/* Dropdown — no label */}
        <div className="relative w-full max-w-[220px]">
          <select
            value={status}
            onChange={e => setStatus(e.target.value)}
            className="w-full appearance-none bg-white border border-[#e8e4db] rounded-[12px] px-4 py-3 text-[14px] font-semibold text-[#1a1814] shadow-sm cursor-pointer hover:bg-[#faf8f5] transition-colors outline-none"
          >
            <option value="Tenant">Tenant</option>
            <option value="Owner">Owner</option>
            <option value="N/A">Unknown</option>
          </select>
          <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7d7870] pointer-events-none" />
        </div>
      </div>

      {/* RIGHT — icons + status bars + general data */}
      <div className="w-1/2 flex flex-col py-8 px-7">

        {/* 3 action icons */}
        <div className="flex items-center justify-center gap-3 mb-6">
          {[
            { icon: Mail,          title: 'Messages' },
            { icon: AlertTriangle, title: 'Damage Reports' },
            { icon: FileText,      title: 'Documents' },
          ].map(({ icon: Icon, title }) => (
            <button
              key={title}
              title={title}
              className="w-11 h-11 flex items-center justify-center rounded-[12px] bg-[#eef1fb] border border-[#d6dcf5] hover:bg-[#dde3f8] transition-colors"
            >
              <Icon size={18} className="text-[#3a52a0]" />
            </button>
          ))}
        </div>

        {/* Status bars 50/50 */}
        <div className="flex gap-2 mb-6">
          <div className="flex-1 bg-[#f7f7f7] border border-[#ebebeb] rounded-[12px] px-3 py-2.5">
            <p className="text-[10px] font-semibold text-[#9e9e9e] uppercase tracking-wide mb-1">Registration</p>
            <p className="text-[12px] font-semibold text-[#1a1814] flex items-center gap-1">
              <span>📅</span> {tenant.lastUpdated.split(',')[0]}
            </p>
          </div>
          <div className={`flex-1 rounded-[12px] px-3 py-2.5 border ${tenant.hausbuddyActive ? 'bg-[#eef6ee] border-[#c8e6c9]' : 'bg-[#f7f7f7] border-[#ebebeb]'}`}>
            <p className="text-[10px] font-semibold text-[#9e9e9e] uppercase tracking-wide mb-1">HausBuddy</p>
            {tenant.hausbuddyActive ? (
              <p className="text-[12px] font-semibold text-[#3a7d44] flex items-center gap-1">
                <Check size={11} strokeWidth={3} /> {tenant.lastUpdated.split(',')[0]}
              </p>
            ) : (
              <p className="text-[12px] font-semibold text-[#9e9e9e]">Inactive</p>
            )}
          </div>
        </div>

        {/* General Data */}
        <p className="text-[12px] font-bold text-[#1a1814] uppercase tracking-[0.6px] mb-3">General Data</p>
        <div className="flex flex-col bg-[#f7f7f7] rounded-[14px] overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#ededed]">
            <UserCircle2 size={16} className="text-[#c0c0c0] shrink-0" />
            <div className="flex flex-col">
              <span className="text-[10px] text-[#9e9e9e]">First name</span>
              <span className="text-[13px] font-medium text-[#1a1814]">{tenant.firstName}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#ededed]">
            <UserCircle2 size={16} className="text-[#c0c0c0] shrink-0" />
            <div className="flex flex-col">
              <span className="text-[10px] text-[#9e9e9e]">Last name</span>
              <span className="text-[13px] font-medium text-[#1a1814]">{tenant.lastName}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#ededed]">
            <Mail size={16} className="text-[#c0c0c0] shrink-0" />
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-[#9e9e9e]">Email</span>
                <span className="text-[10px] text-[#b0b0b0]">Optional</span>
              </div>
              <span className="text-[13px] font-medium text-[#1a1814] truncate">
                {tenant.email === '—' ? <span className="text-[#c5bfb5] italic text-[12px]">Not provided</span> : tenant.email}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3">
            <Phone size={16} className="text-[#c0c0c0] shrink-0" />
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[10px] text-[#9e9e9e]">Phone</span>
              <div className="flex items-center gap-2">
                <span className="text-[13px]">🇩🇪</span>
                <span className="text-[13px] text-[#7d7870] font-medium">+49</span>
                <span className="w-px h-3.5 bg-[#e0e0e0]" />
                <span className="text-[13px] font-medium text-[#1a1814]">{phoneRaw || tenant.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Notes Section ────────────────────────────────────────────────────────────

const NotesSection = () => {
  const [notes, setNotes] = useState('');
  return (
    <div className="p-7 flex flex-col gap-4 border-b border-[#e8e4db]">
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

        {/* Editable area */}
        <div className="bg-white">
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            rows={7}
            className="w-full p-4 text-[13px] text-[#4a453d] leading-[1.8] outline-none resize-none bg-transparent"
            placeholder="Add a description for this tenant..."
          />
        </div>
      </div>
    </div>
  );
};

// ─── Address Tab ──────────────────────────────────────────────────────────────

const AddressTab = ({ tenant }: { tenant: Tenant }) => (
  <div className="flex flex-col gap-4 max-w-xl">
    <div className="border border-[#e8e4db] rounded-[16px] overflow-hidden bg-white shadow-sm">
      {[
        { label: 'Building', value: tenant.building },
        { label: 'Street', value: tenant.building.split(' ').slice(0, -1).join(' ') || '—' },
        { label: 'City', value: 'Berlin' },
        { label: 'Country', value: 'Germany' },
        { label: 'Postal Code', value: '10115' },
      ].map((row, i, arr) => (
        <div key={row.label} className={`flex items-center gap-3 px-4 py-3 ${i < arr.length - 1 ? 'border-b border-[#f0ebe0]' : ''}`}>
          <MapPin size={16} className="text-[#c5bfb5] shrink-0" />
          <div className="flex flex-col">
            <span className="text-[10px] text-[#a09890] font-medium uppercase tracking-wide">{row.label}</span>
            <span className="text-[14px] font-medium text-[#1a1814]">{row.value}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Activities Tab ───────────────────────────────────────────────────────────

const ActivitiesTab = ({ tenant }: { tenant: Tenant }) => {
  const events = [
    { date: tenant.lastUpdated, label: 'Profile last updated', color: '#b8975a' },
    { date: '15 Sep 2025, 00:00', label: 'Tenant onboarded',        color: '#3a7d44' },
    { date: '01 Jan 2025, 00:00', label: 'Account created',          color: '#3a52a0' },
  ];
  return (
    <div className="flex flex-col gap-1 max-w-xl">
      {events.map((ev, i) => (
        <div key={i} className="flex items-start gap-4 py-3">
          <div className="flex flex-col items-center gap-1 pt-1">
            <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: ev.color }} />
            {i < events.length - 1 && <div className="w-px flex-1 bg-[#e8e4db] min-h-[24px]" />}
          </div>
          <div>
            <p className="text-[14px] font-medium text-[#1a1814]">{ev.label}</p>
            <p className="text-[12px] text-[#7d7870]">{ev.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── Page ──────────────────────────────────────────────────────────────────────

type Tab = 'Profile' | 'Address' | 'Activities';

export default function TenantDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('Profile');

  const id = Number(params.id);
  const tenant = tenants.find(t => t.id === id);

  if (!tenant) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#faf8f5]">
        <div className="text-center">
          <p className="text-[18px] font-bold text-[#1a1814] mb-2">Tenant not found</p>
          <Link href="/dashboard/tenant-management" className="text-[14px] text-[#b8975a] hover:underline">
            Back to Tenant Management
          </Link>
        </div>
      </div>
    );
  }

  const tabs: Tab[] = ['Profile', 'Address', 'Activities'];

  return (
    <div className="flex h-screen bg-[#faf8f5] overflow-hidden">
      <Sidebar activeHref="/dashboard/tenant-management" />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar tenant={tenant} />

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

            <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] flex flex-col">

              {/* ─── 1. Header ─────────────────────────────────────────── */}
              <div className="flex items-center gap-3 px-7 pt-6 pb-5 border-b border-[#e8e4db]">
                <Link href="/dashboard/tenant-management">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
                    <ChevronLeft size={18} className="text-[#1a1814]" />
                  </button>
                </Link>
                <h1 className="text-[18px] font-bold text-[#1a1814] tracking-[-0.2px] flex-1">
                  {tenant.firstName} {tenant.lastName}
                </h1>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f4ebd9] border border-[#e8dcc8] rounded-full text-[13px] font-semibold text-[#b8975a] hover:bg-[#ecdfc8] transition-colors">
                  {tenant.building}
                  <ChevronDown size={12} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors">
                  <MoreHorizontal size={17} className="text-[#7d7870]" />
                </button>
              </div>

              {/* ─── 2. Tabs ────────────────────────────────────────────── */}
              <div className="flex items-center border-b border-[#e8e4db]">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-[13px] font-semibold transition-colors relative ${
                      activeTab === tab ? 'text-[#b8975a]' : 'text-[#7d7870] hover:text-[#1a1814]'
                    }`}
                  >
                    {tab === 'Profile'    && <UserCircle2 size={14} />}
                    {tab === 'Address'    && <MapPin      size={14} />}
                    {tab === 'Activities' && <Activity    size={14} />}
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

              {/* ─── 3+4. Two-column body (Profile only) ────────────────── */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
              >
                {activeTab === 'Profile' && <ProfileBody tenant={tenant} />}
                {activeTab === 'Address' && (
                  <div className="px-8 py-7">
                    <AddressTab tenant={tenant} />
                  </div>
                )}
                {activeTab === 'Activities' && (
                  <div className="px-8 py-7">
                    <ActivitiesTab tenant={tenant} />
                  </div>
                )}
              </motion.div>

              {/* ─── 5. Notes (Profile only, full width) ────────────────── */}
              {activeTab === 'Profile' && <NotesSection />}

              {/* ─── 6. Sticky footer buttons ───────────────────────────── */}
              <div className="flex items-center gap-2 px-7 py-4 bg-[#fcfbf9] rounded-b-[32px] border-t border-[#e8e4db] sticky bottom-0">
                <Link
                  href="/dashboard/tenant-management"
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
