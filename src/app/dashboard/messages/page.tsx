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
import { navItems } from '@/lib/constants/navigation';

// ─── Data ─────────────────────────────────────────────────────────────────────


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
  { id:  1, time: '06 Apr 2026, 09:15 AM', lastUpdated: '06 April 2026, 09:16', firstName: 'Mohammed', lastName: 'Al-Farsi', building: 'Tulip Building', title: 'AC Unit Not Working - Unit 4A', hasApp: true, hasEmail: true },
  { id:  2, time: '05 Apr 2026, 02:30 PM', lastUpdated: '05 April 2026, 14:31', firstName: 'Ahmed', lastName: 'Hassan', building: 'Royal Building Dubai', title: 'Lease Renewal Request for Unit 7B', hasApp: true, hasEmail: true },
  { id:  3, time: '04 Apr 2026, 11:00 AM', lastUpdated: '04 April 2026, 11:02', firstName: 'Khalid', lastName: 'Al-Nasser', building: 'Amina Tower', title: 'Water Leak from Upstairs - Urgent', hasApp: true, hasEmail: false },
  { id:  4, time: '03 Apr 2026, 04:15 PM', lastUpdated: '03 April 2026, 16:16', firstName: 'Sara', lastName: 'Al-Rashid', building: 'Orchid Building', title: 'Request to Install Additional Lock on Front Door', hasApp: false, hasEmail: true },
  { id:  5, time: '02 Apr 2026, 10:45 AM', lastUpdated: '02 April 2026, 10:46', firstName: 'Nour', lastName: 'Farhat', building: 'Sky View Tower Dubai', title: 'Noise Complaint - Late Night Disturbance Unit 19C', hasApp: true, hasEmail: true },
  { id:  6, time: '01 Apr 2026, 03:00 PM', lastUpdated: '01 April 2026, 15:01', firstName: 'Omar', lastName: 'Al-Rashid', building: 'Maple Tower', title: 'Parking Space Assignment Inquiry', hasApp: true, hasEmail: false },
  { id:  7, time: '31 Mar 2026, 09:30 AM', lastUpdated: '31 March 2026, 09:31', firstName: 'Ali', lastName: 'Al-Mansoori', building: 'Cedar Heights', title: 'Mold Reported in Bathroom - Unit 11B', hasApp: true, hasEmail: true },
  { id:  8, time: '30 Mar 2026, 01:45 PM', lastUpdated: '30 March 2026, 13:46', firstName: 'Hassan', lastName: 'Ibrahim', building: 'Ammana Building Dubai', title: 'Scheduled Maintenance Access - Saturday 04 Apr', hasApp: false, hasEmail: true },
  { id:  9, time: '29 Mar 2026, 11:20 AM', lastUpdated: '29 March 2026, 11:21', firstName: 'Fatima', lastName: 'Al-Zaabi', building: 'Palm Residences', title: 'Move-Out Notice Submitted - 30 April 2026', hasApp: true, hasEmail: true },
  { id: 10, time: '28 Mar 2026, 10:00 AM', lastUpdated: '28 March 2026, 10:01', firstName: 'Layla', lastName: 'Ibrahim', building: 'Al Wahda Complex', title: 'Request for Tenancy Contract Copy', hasApp: true, hasEmail: true },
  { id: 11, time: '27 Mar 2026, 02:10 PM', lastUpdated: '27 March 2026, 14:11', firstName: 'Mariam', lastName: 'Al-Dhaheri', building: 'Corniche Towers', title: 'Welcome to Corniche Towers - Onboarding Guide', hasApp: false, hasEmail: true },
  { id: 12, time: '26 Mar 2026, 08:55 AM', lastUpdated: '26 March 2026, 08:56', firstName: 'Hind', lastName: 'Al-Suwaidi', building: 'Al Noor Residences', title: 'Elevator Out of Service - Estimated Repair 28 Mar', hasApp: true, hasEmail: true },
  { id: 13, time: '25 Mar 2026, 03:40 PM', lastUpdated: '25 March 2026, 15:41', firstName: 'Noura', lastName: 'Al-Mazrouei', building: 'Yas Island Residences', title: 'Key Replacement Request - Unit 22A', hasApp: true, hasEmail: false },
  { id: 14, time: '24 Mar 2026, 11:05 AM', lastUpdated: '24 March 2026, 11:06', firstName: 'Reem', lastName: 'Al-Shamsi', building: 'Buhaira Towers', title: 'Confirmation of Rent Payment - March 2026', hasApp: false, hasEmail: true },
  { id: 15, time: '23 Mar 2026, 09:00 AM', lastUpdated: '23 March 2026, 09:01', firstName: 'Aisha', lastName: 'Mansoor', building: 'Highland Tower Abu Dhabi', title: 'Appliance Handover Checklist Request', hasApp: true, hasEmail: true },
  { id: 16, time: '22 Mar 2026, 04:30 PM', lastUpdated: '22 March 2026, 16:31', firstName: 'Zainab', lastName: 'Al-Hosani', building: 'Al Taawun Plaza', title: 'Community BBQ Event - Saturday 29 March', hasApp: true, hasEmail: true },
  { id: 17, time: '21 Mar 2026, 10:20 AM', lastUpdated: '21 March 2026, 10:21', firstName: 'Yusuf', lastName: 'Al-Hamdan', building: 'Jasmine Court', title: 'Blocked Drainage in Kitchen Sink', hasApp: true, hasEmail: false },
  { id: 18, time: '20 Mar 2026, 02:55 PM', lastUpdated: '20 March 2026, 14:56', firstName: 'Tariq', lastName: 'Al-Mansouri', building: 'Cedar Heights', title: 'Quarterly Building Inspection - Notice', hasApp: false, hasEmail: true },
  { id: 19, time: '19 Mar 2026, 09:45 AM', lastUpdated: '19 March 2026, 09:46', firstName: 'Faisal', lastName: 'Al-Marzouqi', building: 'Tulip Building', title: 'Permission to Sublet Request', hasApp: true, hasEmail: true },
  { id: 20, time: '18 Mar 2026, 01:30 PM', lastUpdated: '18 March 2026, 13:31', firstName: 'Karim', lastName: 'Badawi', building: 'Rose Building', title: 'Broken Window Latch - Unit 5D', hasApp: true, hasEmail: true },
  { id: 21, time: '17 Mar 2026, 11:50 AM', lastUpdated: '17 March 2026, 11:51', firstName: 'Samir', lastName: 'Elias', building: 'Maple Tower', title: 'Annual Meter Reading Reminder', hasApp: false, hasEmail: true },
  { id: 22, time: '16 Mar 2026, 03:15 PM', lastUpdated: '16 March 2026, 15:16', firstName: 'Walid', lastName: 'Nasser', building: 'Ammana Building Dubai', title: 'Fire Safety Inspection Scheduled - 20 March', hasApp: true, hasEmail: true },
  { id: 23, time: '15 Mar 2026, 09:10 AM', lastUpdated: '15 March 2026, 09:11', firstName: 'Hisham', lastName: 'Taha', building: 'Sky View Tower Dubai', title: 'Lease Amendment - Approval Request', hasApp: true, hasEmail: false },
  { id: 24, time: '14 Mar 2026, 04:00 PM', lastUpdated: '14 March 2026, 16:01', firstName: 'Wael', lastName: 'Darwish', building: 'Royal Building Dubai', title: 'Late Rent Notice - February 2026', hasApp: false, hasEmail: true },
  { id: 25, time: '13 Mar 2026, 10:30 AM', lastUpdated: '13 March 2026, 10:31', firstName: 'Adel', lastName: 'Barakat', building: 'Palm Residences', title: 'Guest Registration Request', hasApp: true, hasEmail: true },
  { id: 26, time: '12 Mar 2026, 02:45 PM', lastUpdated: '12 March 2026, 14:46', firstName: 'Bassam', lastName: 'Suleiman', building: 'Cedar Heights', title: 'New House Rules Document Issued', hasApp: true, hasEmail: true },
  { id: 27, time: '11 Mar 2026, 11:00 AM', lastUpdated: '11 March 2026, 11:01', firstName: 'Rami', lastName: 'Khoury', building: 'Orchid Building', title: 'Request for Parking Visitor Pass', hasApp: true, hasEmail: false },
  { id: 28, time: '10 Mar 2026, 03:20 PM', lastUpdated: '10 March 2026, 15:21', firstName: 'Sami', lastName: 'Al-Amin', building: 'Yas Island Residences', title: 'Rubbish Disposal Issue - Ground Floor Bin Area', hasApp: false, hasEmail: true },
  { id: 29, time: '09 Mar 2026, 09:55 AM', lastUpdated: '09 March 2026, 09:56', firstName: 'Jad', lastName: 'Fadel', building: 'Corniche Towers', title: 'Gym Access Card Not Working', hasApp: true, hasEmail: true },
  { id: 30, time: '08 Mar 2026, 01:10 PM', lastUpdated: '08 March 2026, 13:11', firstName: 'Dina', lastName: 'Moussa', building: 'Al Bateen Residences', title: 'Utility Bill Query - January 2026', hasApp: true, hasEmail: false },
  { id: 31, time: '07 Mar 2026, 10:05 AM', lastUpdated: '07 March 2026, 10:06', firstName: 'Nadia', lastName: 'Ezzat', building: 'Highland Tower Abu Dhabi', title: 'Pest Control Visit Scheduled - 12 March', hasApp: false, hasEmail: true },
  { id: 32, time: '06 Mar 2026, 04:45 PM', lastUpdated: '06 March 2026, 16:46', firstName: 'Rana', lastName: 'Qasim', building: 'Jasmine Court', title: 'Security Camera Request for Unit Floor', hasApp: true, hasEmail: true },
  { id: 33, time: '05 Mar 2026, 08:30 AM', lastUpdated: '05 March 2026, 08:31', firstName: 'Mona', lastName: 'Al-Sayed', building: 'Sunflower Building', title: 'Community Pool Maintenance - Closed 07-08 Mar', hasApp: true, hasEmail: true },
  { id: 34, time: '04 Mar 2026, 02:00 PM', lastUpdated: '04 March 2026, 14:01', firstName: 'Asma', lastName: 'Ibrahim', building: 'Al Qasba Residences', title: 'Roof Access Permission Request', hasApp: true, hasEmail: false },
  { id: 35, time: '03 Mar 2026, 11:15 AM', lastUpdated: '03 March 2026, 11:16', firstName: 'Dawoud', lastName: 'Al-Shehhi', building: 'Sharjah Grand', title: 'Power Outage Reported - Floor 12', hasApp: false, hasEmail: true },
  { id: 36, time: '02 Mar 2026, 03:35 PM', lastUpdated: '02 March 2026, 15:36', firstName: 'James', lastName: 'Miller', building: 'Cedar Heights', title: 'Contract Expiry Reminder - 30 April 2026', hasApp: true, hasEmail: true },
  { id: 37, time: '01 Mar 2026, 09:20 AM', lastUpdated: '01 March 2026, 09:21', firstName: 'Emma', lastName: 'Schneider', building: 'Tulip Building', title: 'Service Provider Access - Plumber Visit 05 Mar', hasApp: true, hasEmail: false },
  { id: 38, time: '28 Feb 2026, 01:40 PM', lastUpdated: '28 February 2026, 13:41', firstName: 'David', lastName: 'Richter', building: 'Maple Tower', title: 'Intercom System Not Working - Unit 8F', hasApp: false, hasEmail: true },
  { id: 39, time: '27 Feb 2026, 10:00 AM', lastUpdated: '27 February 2026, 10:01', firstName: 'Sarah', lastName: 'Thompson', building: 'Rose Building', title: 'Damage Report Follow-up - Bathroom Leak Ref 28', hasApp: true, hasEmail: true },
  { id: 40, time: '26 Feb 2026, 04:10 PM', lastUpdated: '26 February 2026, 16:11', firstName: 'Michael', lastName: 'Walsh', building: 'Orchid Building', title: 'End of Lease Move-Out Inspection Confirmation', hasApp: true, hasEmail: true },
  { id: 41, time: '25 Feb 2026, 11:30 AM', lastUpdated: '25 February 2026, 11:31', firstName: 'Lisa', lastName: 'Hoffman', building: 'Palm Residences', title: 'Electricity Meter Change-Out Notice', hasApp: true, hasEmail: false },
  { id: 42, time: '24 Feb 2026, 02:50 PM', lastUpdated: '24 February 2026, 14:51', firstName: 'Thomas', lastName: 'Bauer', building: 'Ammana Building Dubai', title: 'Urgent: Broken Gate - Parking Level B2', hasApp: false, hasEmail: true },
  { id: 43, time: '23 Feb 2026, 09:00 AM', lastUpdated: '23 February 2026, 09:01', firstName: 'Anna', lastName: 'Klein', building: 'Royal Building Dubai', title: 'HausBuddy App Setup Assistance Request', hasApp: true, hasEmail: true },
  { id: 44, time: '22 Feb 2026, 03:25 PM', lastUpdated: '22 February 2026, 15:26', firstName: 'Lucas', lastName: 'Weber', building: 'Sky View Tower Dubai', title: 'Swimming Pool Rules - Reminder Notice', hasApp: true, hasEmail: false },
  { id: 45, time: '21 Feb 2026, 10:45 AM', lastUpdated: '21 February 2026, 10:46', firstName: 'Carlos', lastName: 'Mendez', building: 'Amina Tower', title: 'Request for Early Termination of Lease', hasApp: false, hasEmail: true },
  { id: 46, time: '20 Feb 2026, 01:00 PM', lastUpdated: '20 February 2026, 13:01', firstName: 'Elena', lastName: 'Kowalski', building: 'Highland Tower Abu Dhabi', title: 'Gas Meter Photo Submission', hasApp: true, hasEmail: true },
  { id: 47, time: '19 Feb 2026, 11:20 AM', lastUpdated: '19 February 2026, 11:21', firstName: 'Julia', lastName: 'Hartmann', building: 'Corniche Towers', title: 'New Resident Onboarding - Unit 14C', hasApp: true, hasEmail: true },
  { id: 48, time: '18 Feb 2026, 04:05 PM', lastUpdated: '18 February 2026, 16:06', firstName: 'Oliver', lastName: 'Grant', building: 'Sunflower Building', title: 'HVAC Annual Service Completion Report', hasApp: false, hasEmail: true },
  { id: 49, time: '17 Feb 2026, 09:35 AM', lastUpdated: '17 February 2026, 09:36', firstName: 'Sophie', lastName: 'Mueller', building: 'Cedar Heights', title: 'Pet Registration Application - Unit 9B', hasApp: true, hasEmail: false },
  { id: 50, time: '16 Feb 2026, 02:20 PM', lastUpdated: '16 February 2026, 14:21', firstName: 'Priya', lastName: 'Patel', building: 'Maple Tower', title: 'Request for Additional Storage Unit', hasApp: true, hasEmail: true },
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
