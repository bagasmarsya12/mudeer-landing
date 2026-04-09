'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Home,
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
  ChevronDown,
  X,
  MoreHorizontal,
  Camera,
  Phone,
  MapPin,
  Activity,
  UserCircle2,
  Building2,
  Check,
} from 'lucide-react';
import { navItems } from '@/lib/constants/navigation';
import type { ServiceProvider } from '@/lib/data/serviceProviders';
import { providers } from '@/lib/data/serviceProviders';

// ─── Types ────────────────────────────────────────────────────────────────────


// ─── Nav data ─────────────────────────────────────────────────────────────────


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

    <nav
      className="flex-1 px-3 py-2 overflow-y-auto"
      style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
    >
      <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[#7d7870] hover:bg-[#f0ebe0] transition-colors mb-1">
        <Home size={18} />
        <span className="text-[14px] font-semibold">Overview</span>
      </Link>

      {navItems.map(({ icon: Icon, label, href }) => {
        const isActive = label === 'Service Providers';
        return (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors mb-1 ${
              isActive ? 'bg-[#f0ebe0] text-[#1a1814]' : 'text-[#7d7870] hover:bg-[#f0ebe0]'
            }`}
          >
            <Icon size={18} />
            <span className="text-[14px] font-semibold flex-1">{label}</span>
          </Link>
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

// ─── Profile Body ─────────────────────────────────────────────────────────────

const ProfileBody = ({ provider }: { provider: ServiceProvider }) => {
  const [category, setCategory] = useState(provider.category);

  return (
    <div className="flex border-b border-[#e8e4db]">

      {/* LEFT — logo + category */}
      <div className="w-1/2 flex flex-col items-center justify-center py-10 px-8 border-r border-[#e8e4db] shrink-0">
        <div className="relative mb-3">
          <div className="w-[180px] h-[180px] rounded-full bg-[#f0ebe0] border-2 border-[#e8dcc8] flex items-center justify-center overflow-hidden">
            <Building2 size={80} className="text-[#c5bfb5]" />
          </div>
          <button className="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-white border border-[#e8e4db] flex items-center justify-center shadow-md hover:bg-[#f0ebe0] transition-colors">
            <Camera size={15} className="text-[#7d7870]" />
          </button>
        </div>
        <span className="text-[12px] text-[#7d7870] mb-8">Edit Company Logo</span>

        {/* Category dropdown */}
        <div className="relative w-full max-w-[220px]">
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full appearance-none bg-white border border-[#e8e4db] rounded-[12px] px-4 py-3 text-[14px] font-semibold text-[#1a1814] shadow-sm cursor-pointer hover:bg-[#faf8f5] transition-colors outline-none"
          >
            {['Plumbing', 'Electrical', 'HVAC', 'Cleaning', 'Landscaping', 'Painting', 'Security', 'Pest Control', 'Elevator', 'Carpentry', 'Other'].map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7d7870] pointer-events-none" />
        </div>
      </div>

      {/* RIGHT — action icons + status bars + general data */}
      <div className="w-1/2 flex flex-col py-8 px-7">

        {/* General Data */}
        <p className="text-[12px] font-bold text-[#1a1814] uppercase tracking-[0.6px] mb-3">General Data</p>
        <div className="flex flex-col bg-[#f7f7f7] rounded-[14px] overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#ededed]">
            <Building2 size={16} className="text-[#c0c0c0] shrink-0" />
            <div className="flex flex-col">
              <span className="text-[10px] text-[#9e9e9e]">Company name</span>
              <span className="text-[13px] font-medium text-[#1a1814]">{provider.companyName}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#ededed]">
            <Mail size={16} className="text-[#c0c0c0] shrink-0" />
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-[10px] text-[#9e9e9e]">Email</span>
              <span className="text-[13px] font-medium text-[#1a1814] truncate">{provider.email}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#ededed]">
            <Phone size={16} className="text-[#c0c0c0] shrink-0" />
            <div className="flex flex-col">
              <span className="text-[10px] text-[#9e9e9e]">Phone</span>
              <span className="text-[13px] font-medium text-[#1a1814]">{provider.phone}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3">
            <MapPin size={16} className="text-[#c0c0c0] shrink-0" />
            <div className="flex flex-col">
              <span className="text-[10px] text-[#9e9e9e]">City</span>
              <span className="text-[13px] font-medium text-[#1a1814]">{provider.city}, {provider.province}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Services Provided Section ────────────────────────────────────────────────

const ServicesSection = ({ provider }: { provider: ServiceProvider }) => {
  const [services, setServices] = useState<string[]>(provider.services);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addService = (value: string) => {
    const trimmed = value.trim();
    if (trimmed && !services.includes(trimmed)) {
      setServices(prev => [...prev, trimmed]);
    }
    setInputValue('');
  };

  const removeService = (service: string) => {
    setServices(prev => prev.filter(s => s !== service));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addService(inputValue);
    } else if (e.key === 'Backspace' && inputValue === '' && services.length > 0) {
      setServices(prev => prev.slice(0, -1));
    }
  };

  return (
    <div className="p-7 border-b border-[#e8e4db]">
      <h3 className="text-[13px] font-bold text-[#1a1814] mb-4">Services Provided</h3>

      <div
        className="flex flex-wrap gap-2 p-3 rounded-[14px] border border-[#e8e4db] bg-[#faf8f5] cursor-text focus-within:border-[#cda460] focus-within:bg-white transition-colors"
        onClick={() => inputRef.current?.focus()}
      >
        {services.map(service => (
          <span
            key={service}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0ebe0] border border-[#e0d8c8] text-[12px] font-semibold text-[#4a453d] group"
          >
            {service}
            <button
              onClick={e => { e.stopPropagation(); removeService(service); }}
              className="w-4 h-4 flex items-center justify-center rounded-full bg-[#e0d8c8] hover:bg-[#cda460] hover:text-white text-[#9e9990] transition-colors"
            >
              <X size={9} strokeWidth={2.5} />
            </button>
          </span>
        ))}

        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={services.length === 0 ? 'Type a service and press Enter…' : 'Add service…'}
          className="flex-1 min-w-[160px] bg-transparent text-[13px] text-[#4a453d] placeholder:text-[#c5bfb5] outline-none py-1"
        />
      </div>

      <p className="mt-2 text-[11px] text-[#b0aaa2]">Press Enter to add · Backspace to remove last</p>
    </div>
  );
};

// ─── Address Tab ──────────────────────────────────────────────────────────────

const AddressTab = ({ provider }: { provider: ServiceProvider }) => (
  <div className="flex flex-col gap-4 max-w-xl">
    <div className="border border-[#e8e4db] rounded-[16px] overflow-hidden bg-white shadow-sm">
      {[
        { label: 'City',     value: provider.city },
        { label: 'Province', value: provider.province },
        { label: 'Country',  value: 'United Arab Emirates' },
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

const ActivitiesTab = ({ provider }: { provider: ServiceProvider }) => {
  const events = [
    { date: provider.lastUpdated,    label: 'Profile last updated', color: '#b8975a' },
    { date: '15 Jan 2026, 00:00',    label: 'Provider onboarded',   color: '#3a7d44' },
    { date: '01 Jan 2026, 00:00',    label: 'Account created',      color: '#3a52a0' },
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

// ─── Page ─────────────────────────────────────────────────────────────────────

type Tab = 'Profile' | 'Address' | 'Activities';

export default function ServiceProviderDetailPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState<Tab>('Profile');

  const id = Number(params.id);
  const provider = providers.find(p => p.id === id);

  if (!provider) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#faf8f5]">
        <div className="text-center">
          <p className="text-[18px] font-bold text-[#1a1814] mb-2">Provider not found</p>
          <Link href="/dashboard/service-providers" className="text-[14px] text-[#b8975a] hover:underline">
            Back to Service Providers
          </Link>
        </div>
      </div>
    );
  }

  const tabs: Tab[] = ['Profile', 'Address', 'Activities'];

  return (
    <div className="flex h-screen bg-[#faf8f5] overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">

        {/* TopBar */}
        <header className="h-[88px] flex items-center px-8 gap-3 bg-[#faf8f5] min-w-0">
          <div className="flex items-center gap-1.5 text-[13px] flex-1 min-w-0 flex-wrap">
            <Link href="/dashboard">
              <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors whitespace-nowrap">
                <X size={11} className="text-[#7d7870]" />
                <span className="text-[#7d7870] font-medium">Overview</span>
              </button>
            </Link>
            <ChevronRight size={12} className="text-[#c5bfb5] shrink-0" />
            <Link href="/dashboard/service-providers">
              <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors whitespace-nowrap">
                <X size={11} className="text-[#7d7870]" />
                <span className="text-[#7d7870] font-medium">Service Providers</span>
              </button>
            </Link>
            <ChevronRight size={12} className="text-[#c5bfb5] shrink-0" />
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#f0ebe0] rounded-[10px] min-w-0">
              <span className="text-[#1a1814] font-semibold truncate max-w-[200px]">{provider.companyName}</span>
              <Link href="/dashboard/service-providers">
                <X size={11} className="text-[#7d7870] cursor-pointer hover:text-[#1a1814] transition-colors shrink-0" />
              </Link>
            </div>
            <button className="w-6 h-6 flex items-center justify-center rounded-[7px] bg-[#e6e1d8] hover:bg-[#ddd8cf] transition-colors shrink-0">
              <Plus size={12} className="text-[#7d7870]" />
            </button>
          </div>

          <div className="flex items-center gap-2 bg-white border border-[#e8e4db] rounded-full px-3 py-2 w-[200px] shadow-sm shrink-0">
            <Search size={13} className="text-[#7d7870] shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-[13px] text-[#1a1814] placeholder:text-[#7d7870] outline-none w-full"
            />
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
            <Bell size={20} className="text-[#1a1814]" />
          </button>
        </header>

        {/* Main area */}
        <div className="flex-1 bg-[#f0ebe0] rounded-tl-[36px] overflow-hidden min-h-0">
          <div
            className="h-full overflow-y-auto p-6"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
          >
            {/* Tab add button */}
            <button className="mb-3 w-8 h-8 rounded-[9px] bg-[#e6e1d8] hover:bg-[#ddd8cf] flex items-center justify-center transition-colors shadow-sm">
              <Plus size={14} className="text-[#7d7870]" />
            </button>

            <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] flex flex-col">

              {/* ── 1. Header ── */}
              <div className="flex items-center gap-3 px-7 pt-6 pb-5 border-b border-[#e8e4db]">
                <Link href="/dashboard/service-providers">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
                    <ChevronLeft size={18} className="text-[#1a1814]" />
                  </button>
                </Link>
                <h1 className="text-[18px] font-bold text-[#1a1814] tracking-[-0.2px] flex-1">
                  {provider.companyName}
                </h1>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors">
                  <MoreHorizontal size={17} className="text-[#7d7870]" />
                </button>
              </div>

              {/* ── 2. Tabs ── */}
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
                        layoutId="sp-tab-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b8975a] rounded-full"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* ── 3. Body ── */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
              >
                {activeTab === 'Profile' && <ProfileBody provider={provider} />}
                {activeTab === 'Address' && (
                  <div className="px-8 py-7">
                    <AddressTab provider={provider} />
                  </div>
                )}
                {activeTab === 'Activities' && (
                  <div className="px-8 py-7">
                    <ActivitiesTab provider={provider} />
                  </div>
                )}
              </motion.div>

              {/* ── 4. Services Provided (Profile only) ── */}
              {activeTab === 'Profile' && <ServicesSection provider={provider} />}

              {/* ── 5. Footer ── */}
              <div className="flex items-center gap-2 px-7 py-4 bg-[#fcfbf9] rounded-b-[32px] border-t border-[#e8e4db] sticky bottom-0">
                <Link
                  href="/dashboard/service-providers"
                  className="flex items-center justify-center px-5 py-2 border border-[#e8e4db] rounded-[10px] text-[13px] font-semibold text-[#7d7870] hover:bg-[#f0ebe0] transition-colors"
                >
                  Cancel
                </Link>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center px-5 py-2 bg-[#1a1814] rounded-[10px] text-[13px] font-semibold text-white hover:bg-[#2d2820] transition-colors"
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
