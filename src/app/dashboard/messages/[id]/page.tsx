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
  ChevronLeft,
  ChevronDown,
  Send,
  Inbox,
  Paperclip,
  MoreHorizontal,
  UserCircle2,
  Folder,
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

interface ChatMessage {
  id: number;
  sender: 'tenant' | 'manager';
  senderName: string;
  content: string;
  time: string;
  card?: { title: string; body: string[] };
}

interface MessageThread {
  id: number;
  firstName: string;
  lastName: string;
  building: string;
  unit: string;
  subject: string;
  thread: ChatMessage[];
}

const threads: MessageThread[] = [
  {
    id: 1,
    firstName: 'Matthiass',
    lastName: 'Vogel',
    building: 'Alexanderplatz 10',
    unit: 'Unit 204, Floor 2',
    subject: 'Apartment Cleaning – Appointment Confirmation',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Matthiass Vogel',
        content: 'Hello, I would like to confirm the cleaning appointment scheduled for November 20th at 10:00 AM. Please let me know if this time still works.',
        time: '10:40 AM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Hi Matthiass, the appointment is confirmed. Our team will arrive at 10:00 AM sharp. Please ensure the unit is accessible.',
        time: '11:02 AM',
        card: {
          title: 'Cleaning Schedule',
          body: [
            'Date: Thursday, 20 November 2025',
            'Time: 10:00 AM – 12:00 PM',
            'Team: 2 cleaners included',
            'Please remove personal items from common surfaces.',
          ],
        },
      },
    ],
  },
  {
    id: 2,
    firstName: 'Matthiass',
    lastName: 'Vogel',
    building: 'Alexanderplatz 10',
    unit: 'Unit 204, Floor 2',
    subject: 'Test Message',
    thread: [
      {
        id: 1,
        sender: 'tenant',
        senderName: 'Matthiass Vogel',
        content: 'This is a test message to verify the messaging system is working correctly.',
        time: '02:46 PM',
      },
      {
        id: 2,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Hi Matthiass, we received your test message. The system is working correctly. Feel free to reach out anytime.',
        time: '02:50 PM',
      },
    ],
  },
  {
    id: 3,
    firstName: 'Marco',
    lastName: 'Reus',
    building: 'Alexanderplatz 25',
    unit: 'Unit 512, Floor 5',
    subject: 'Utility Bill Statement 2024 – Now Available',
    thread: [
      {
        id: 1,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Dear Marco, your annual utility bill statement for 2024 is now available. Please review the attached breakdown and contact us with any questions.',
        time: '09:15 AM',
        card: {
          title: 'Utility Bill 2024',
          body: [
            'Period: January – December 2024',
            'Heating: €540.00',
            'Water & Sewage: €320.00',
            'Total Due: €860.00',
            'Payment deadline: 15 February 2025',
          ],
        },
      },
      {
        id: 2,
        sender: 'tenant',
        senderName: 'Marco Reus',
        content: 'Thank you for sending this over. I will review the statement and make the payment before the deadline.',
        time: '11:30 AM',
      },
    ],
  },
  {
    id: 4,
    firstName: 'Sendi',
    lastName: 'Patryjar',
    building: 'Leopoldstraße 55',
    unit: 'Unit 103, Floor 1',
    subject: 'Elevator Maintenance – October 10th',
    thread: [
      {
        id: 1,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Dear Sendi, please be informed that the elevator in your building will be out of service on October 10th from 8:00 AM to 4:00 PM for scheduled maintenance.',
        time: '03:30 PM',
        card: {
          title: 'Maintenance Notice',
          body: [
            'Date: Friday, 10 October 2025',
            'Time: 08:00 AM – 04:00 PM',
            'Affected: Main elevator (all floors)',
            'Staircase access will remain open.',
          ],
        },
      },
      {
        id: 2,
        sender: 'tenant',
        senderName: 'Sendi Patryjar',
        content: 'Thanks for the heads-up! I will plan accordingly and use the stairs on that day.',
        time: '04:15 PM',
      },
    ],
  },
  {
    id: 5,
    firstName: 'Katarina',
    lastName: 'Kochc',
    building: 'Alexanderplatz 10',
    unit: 'Unit 308, Floor 3',
    subject: 'Important House Rules Update',
    thread: [
      {
        id: 1,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Dear Katarina, we have updated the house rules effective November 1st. Key changes include quiet hours and waste sorting guidelines.',
        time: '11:00 AM',
        card: {
          title: 'Updated House Rules',
          body: [
            'Quiet hours: 10:00 PM – 8:00 AM',
            'Waste sorting: 4 separate bins required',
            'No commercial activity in residential units',
            'Guests staying over 14 days must be registered.',
          ],
        },
      },
      {
        id: 2,
        sender: 'tenant',
        senderName: 'Katarina Kochc',
        content: 'Understood, thank you for the update. I will make sure to follow the new guidelines.',
        time: '11:45 AM',
      },
    ],
  },
  {
    id: 6,
    firstName: 'Daniel',
    lastName: 'Richter',
    building: 'Alexanderplatz 10',
    unit: 'Unit 401, Floor 4',
    subject: 'Tenant Assembly – September 25th',
    thread: [
      {
        id: 1,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Dear Daniel, you are invited to the quarterly tenant assembly on September 25th at 6:00 PM in the community room. Topics include building upgrades and new recycling policy.',
        time: '08:45 AM',
        card: {
          title: 'Tenant Assembly Agenda',
          body: [
            'Date: Thursday, 25 September 2025',
            'Time: 6:00 PM',
            'Location: Community Room, Ground Floor',
            '1. Building upgrade plans',
            '2. New recycling policy',
            '3. Q&A session',
          ],
        },
      },
      {
        id: 2,
        sender: 'tenant',
        senderName: 'Daniel Richter',
        content: 'I will be there. Looking forward to the discussion about the building upgrades.',
        time: '09:30 AM',
      },
    ],
  },
  {
    id: 7,
    firstName: 'Bagas',
    lastName: 'Marsya',
    building: 'Alexanderplatz 10',
    unit: 'Unit 202, Floor 2',
    subject: 'Underground Parking Regulation',
    thread: [
      {
        id: 1,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Dear Bagas, please be advised of updated parking regulations in the underground garage. Assigned spots must be used only by the registered vehicle.',
        time: '02:00 PM',
        card: {
          title: 'Parking Rules Update',
          body: [
            'Effective: 15 September 2025',
            'Each unit: 1 assigned spot only',
            'Visitor parking: max 2 hours',
            'Unregistered vehicles will be towed.',
          ],
        },
      },
      {
        id: 2,
        sender: 'tenant',
        senderName: 'Bagas Marsya',
        content: 'Got it, I will make sure my vehicle is properly registered. Could you confirm my assigned spot number?',
        time: '02:30 PM',
      },
      {
        id: 3,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Your assigned spot is P2-07. You will also find the number on the pillar next to the space.',
        time: '02:45 PM',
      },
    ],
  },
  {
    id: 8,
    firstName: 'Anna',
    lastName: 'Schmidt',
    building: 'Friedrichstraße 44',
    unit: 'Unit 115, Floor 1',
    subject: 'Water Supply Interruption – September 8th',
    thread: [
      {
        id: 1,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Dear Anna, we regret to inform you that there will be a temporary water supply interruption on September 8th due to pipe maintenance.',
        time: '10:20 AM',
        card: {
          title: 'Water Interruption Notice',
          body: [
            'Date: Monday, 8 September 2025',
            'Time: 9:00 AM – 2:00 PM',
            'Affected: All units, Friedrichstraße 44',
            'Please store sufficient water beforehand.',
          ],
        },
      },
      {
        id: 2,
        sender: 'tenant',
        senderName: 'Anna Schmidt',
        content: 'Thank you for the early notice. I will prepare accordingly.',
        time: '10:50 AM',
      },
    ],
  },
  {
    id: 9,
    firstName: 'Lukas',
    lastName: 'Bauer',
    building: 'Prenzlauer Allee 8',
    unit: 'Unit 507, Floor 5',
    subject: 'Package Delivery – Action Required',
    thread: [
      {
        id: 1,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Hi Lukas, a package arrived for you at the reception on August 29th. Please collect it within 5 business days.',
        time: '04:10 PM',
      },
      {
        id: 2,
        sender: 'tenant',
        senderName: 'Lukas Bauer',
        content: 'Thanks! I will swing by to pick it up tomorrow morning.',
        time: '05:00 PM',
      },
    ],
  },
  {
    id: 10,
    firstName: 'Felix',
    lastName: 'Wagner',
    building: 'Kantstraße 33',
    unit: 'Unit 209, Floor 2',
    subject: 'Handyman Visit – Please Provide Access',
    thread: [
      {
        id: 1,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Dear Felix, a handyman will visit your unit on August 21st to repair the bathroom ventilation. Please ensure access is available between 10:00 AM and 1:00 PM.',
        time: '09:00 AM',
        card: {
          title: 'Handyman Visit',
          body: [
            'Date: Thursday, 21 August 2025',
            'Time: 10:00 AM – 1:00 PM',
            'Task: Bathroom ventilation repair',
            'Please ensure someone is present or leave key at reception.',
          ],
        },
      },
      {
        id: 2,
        sender: 'tenant',
        senderName: 'Felix Wagner',
        content: 'I will be home that day. No problem at all. Please have them come at 10:00 AM sharp.',
        time: '09:45 AM',
      },
    ],
  },
  {
    id: 11,
    firstName: 'Hannah',
    lastName: 'Müller',
    building: 'Torstraße 120',
    unit: 'Unit 302, Floor 3',
    subject: 'Rent Increase Notice – Effective January 2026',
    thread: [
      {
        id: 1,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Dear Hannah, please be informed that your monthly rent will increase by €80 starting January 1, 2026, in accordance with the index-linked rent clause.',
        time: '01:30 PM',
        card: {
          title: 'Rent Adjustment Details',
          body: [
            'Effective: 1 January 2026',
            'Current rent: €1,200/month',
            'New rent: €1,280/month',
            'Increase basis: CPI index 2025',
            'Please contact us with any questions.',
          ],
        },
      },
      {
        id: 2,
        sender: 'tenant',
        senderName: 'Hannah Müller',
        content: 'Thank you for the notice. I have reviewed the clause and understand the adjustment. I will update my standing order accordingly.',
        time: '02:15 PM',
      },
    ],
  },
  {
    id: 12,
    firstName: 'Emre',
    lastName: 'Yildiz',
    building: 'Boxhagener Str 77',
    unit: 'Unit 101, Floor 1',
    subject: 'Welcome to the Building!',
    thread: [
      {
        id: 1,
        sender: 'manager',
        senderName: 'Alexa – Manager',
        content: 'Dear Emre, welcome to Boxhagener Str 77! We are delighted to have you as our newest resident. Here is a quick overview of what you need to get started.',
        time: '03:45 PM',
        card: {
          title: 'Welcome Guide',
          body: [
            'Wi-Fi code: BoxHaus77#2025',
            'Trash collection: Mon, Wed, Fri',
            'Emergency contact: +49 30 987654',
            'Laundry room: Basement, 7 AM – 10 PM',
            'Feel free to reach out anytime!',
          ],
        },
      },
      {
        id: 2,
        sender: 'tenant',
        senderName: 'Emre Yildiz',
        content: 'Thank you so much! This is very helpful. I am excited to be part of this community.',
        time: '04:30 PM',
      },
    ],
  },
];

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
        const isMessages = label === 'Messages';
        return (
          <div key={label}>
            <Link
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors mb-1 ${
                isMessages ? 'bg-[#f0ebe0] text-[#1a1814]' : 'text-[#7d7870] hover:bg-[#f0ebe0]'
              }`}
            >
              <Icon size={18} />
              <span className="text-[14px] font-semibold flex-1">{label}</span>
              {isMessages && <ChevronDown size={14} className="opacity-50" />}
            </Link>
            {isMessages && (
              <div className="ml-7 mb-1 flex flex-col gap-0.5">
                {/* All Inbox */}
                <button className="flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] font-bold text-[#1a1814] hover:bg-[#f0ebe0] transition-colors w-full text-left justify-between">
                  <div className="flex items-center gap-2.5">
                    <Inbox size={14} />
                    All Inbox
                  </div>
                  <ChevronDown size={12} className="opacity-50" />
                </button>
                {/* Sub-items */}
                <div className="ml-3 pl-3 border-l-2 border-[#e6e2d8] flex flex-col gap-0.5 py-1">
                  <button className="flex items-center gap-2 px-2 py-1.5 rounded-[7px] text-[12px] text-[#7d7870] hover:bg-[#f0ebe0] transition-colors w-full text-left">
                    <Folder size={13} /> New Folder
                  </button>
                  <button className="flex items-center gap-2 px-2 py-1.5 rounded-[7px] text-[12px] font-semibold text-[#b8975a] hover:bg-[#f4ebd9] transition-colors w-full text-left">
                    <Plus size={13} /> Create New Folder
                  </button>
                </div>
                {[
                  { icon: Send,    label: 'All Sent' },
                  { icon: Archive, label: 'All Drafts' },
                  { icon: Trash2,  label: 'Recycle Bin' },
                ].map(sub => (
                  <button key={sub.label} className="flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] font-medium text-[#7d7870] hover:bg-[#f0ebe0] transition-colors w-full text-left">
                    <sub.icon size={14} />{sub.label}
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

const TopBar = ({ tenantName }: { tenantName: string }) => (
  <header className="h-[88px] flex items-center px-8 gap-4 bg-[#faf8f5]">
    <div className="flex items-center gap-2 text-[14px] flex-1 flex-wrap">
      <Link href="/dashboard">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors">
          <X size={12} className="text-[#7d7870]" />
          <span className="text-[#7d7870] font-medium">Overview</span>
        </button>
      </Link>
      <ChevronRight size={14} className="text-[#c5bfb5]" />
      <Link href="/dashboard/messages">
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors">
          <X size={12} className="text-[#7d7870]" />
          <span className="text-[#7d7870] font-medium">Messages</span>
        </button>
      </Link>
      <ChevronRight size={14} className="text-[#c5bfb5]" />
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f0ebe0] rounded-[10px]">
        <span className="text-[#1a1814] font-semibold">{tenantName}</span>
        <Link href="/dashboard/messages">
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

// ─── Message Bubble ───────────────────────────────────────────────────────────

const TenantBubble = ({ msg }: { msg: ChatMessage }) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-full bg-[#f0ebe0] border border-[#e8dcc8] flex items-center justify-center shrink-0">
        <UserCircle2 size={16} className="text-[#c5bfb5]" />
      </div>
      <span className="text-[13px] font-semibold text-[#1a1814]">{msg.senderName}</span>
    </div>
    <div className="ml-9">
      <div className="bg-[#f0ebe0] rounded-[16px] rounded-tl-[4px] px-4 py-3 max-w-[480px]">
        <p className="text-[14px] text-[#1a1814] leading-[1.55]">{msg.content}</p>
      </div>
      <p className="text-[11px] text-[#9e9e9e] mt-1 ml-1">{msg.time}</p>
    </div>
  </div>
);

const ManagerBubble = ({ msg }: { msg: ChatMessage }) => (
  <div className="flex flex-col items-end gap-1">
    <div className="flex items-center gap-2 justify-end">
      <span className="text-[13px] font-semibold text-[#1a1814]">{msg.senderName}</span>
      <div className="w-7 h-7 rounded-full bg-[#1a1814] flex items-center justify-center shrink-0">
        <span className="text-[10px] font-bold text-white">AM</span>
      </div>
    </div>
    <div className="flex flex-col items-end gap-2 mr-9">
      {msg.content && (
        <div className="bg-white border border-[#e8e4db] shadow-sm rounded-[16px] rounded-tr-[4px] px-4 py-3 max-w-[480px]">
          <p className="text-[14px] text-[#1a1814] leading-[1.55]">{msg.content}</p>
        </div>
      )}
      {msg.card && (
        <div className="bg-white border border-[#e8e4db] shadow-md rounded-[16px] p-5 w-[360px] text-center">
          <p className="text-[15px] font-bold text-[#1a1814] mb-3">{msg.card.title}</p>
          {msg.card.body.map((line, i) => (
            <p key={i} className="text-[13px] text-[#4a453d] leading-[1.7]">{line}</p>
          ))}
        </div>
      )}
      <p className="text-[11px] text-[#9e9e9e] mr-1">{msg.time}</p>
    </div>
  </div>
);

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function MessageDetailPage() {
  const params = useParams();
  const id = Number(params.id);
  const thread = threads.find(t => t.id === id);

  const [input, setInput] = useState('');

  if (!thread) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#faf8f5]">
        <div className="text-center">
          <p className="text-[18px] font-bold text-[#1a1814] mb-2">Message not found</p>
          <Link href="/dashboard/messages" className="text-[14px] text-[#b8975a] hover:underline">Back to Messages</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#faf8f5] overflow-hidden">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar tenantName={thread.firstName} />

        {/* Main area */}
        <div className="flex-1 bg-[#f0ebe0] rounded-tl-[36px] overflow-hidden min-h-0">
          <div
            className="h-full overflow-y-auto p-6 scrollbar-minimal"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
          >
            {/* + add tab button */}
            <button className="mb-3 w-8 h-8 rounded-[9px] bg-[#e6e1d8] hover:bg-[#ddd8cf] flex items-center justify-center transition-colors shadow-sm">
              <Plus size={14} className="text-[#7d7870]" />
            </button>

            <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] flex flex-col overflow-hidden" style={{ height: 'calc(100vh - 180px)' }}>

              {/* ─── Thread header ─────────────────────────────────────── */}
              <div className="flex items-center gap-3 px-7 py-5 border-b border-[#e8e4db] shrink-0">
                <Link href="/dashboard/messages">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
                    <ChevronLeft size={18} className="text-[#1a1814]" />
                  </button>
                </Link>
                <div className="w-10 h-10 rounded-full bg-[#f0ebe0] border border-[#e8dcc8] flex items-center justify-center shrink-0">
                  <UserCircle2 size={24} className="text-[#c5bfb5]" />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-[16px] font-bold text-[#1a1814] leading-tight">
                    {thread.firstName} {thread.lastName}
                  </span>
                  <span className="text-[12px] text-[#7d7870]">
                    {thread.unit}, {thread.building}
                  </span>
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors">
                  <MoreHorizontal size={17} className="text-[#7d7870]" />
                </button>
              </div>

              {/* ─── Subject ───────────────────────────────────────────── */}
              <div className="px-7 py-4 border-b border-[#e8e4db] shrink-0">
                <p className="text-[15px] font-bold text-[#1a1814]">Subject: {thread.subject}</p>
              </div>

              {/* ─── Messages ──────────────────────────────────────────── */}
              <div
                className="flex-1 overflow-y-auto px-7 py-6 flex flex-col gap-6 scrollbar-minimal"
                style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
              >
                {thread.thread.map(msg => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {msg.sender === 'tenant'
                      ? <TenantBubble msg={msg} />
                      : <ManagerBubble msg={msg} />
                    }
                  </motion.div>
                ))}
              </div>

              {/* ─── Input bar ─────────────────────────────────────────── */}
              <div className="px-6 py-4 border-t border-[#e8e4db] bg-[#fcfbf9] shrink-0">
                <div className="flex items-center gap-3">
                  <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#f0ebe0] transition-colors shrink-0">
                    <Paperclip size={18} className="text-[#7d7870]" />
                  </button>
                  <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') setInput(''); }}
                    placeholder="Write your message here..."
                    className="flex-1 bg-white border border-[#e8e4db] rounded-full px-5 py-2.5 text-[14px] text-[#1a1814] placeholder:text-[#c5bfb5] outline-none shadow-sm"
                  />
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-[#1a1814] text-white rounded-full text-[14px] font-semibold hover:bg-[#2d2820] transition-colors shadow-md shrink-0">
                    Send
                    <Send size={15} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
