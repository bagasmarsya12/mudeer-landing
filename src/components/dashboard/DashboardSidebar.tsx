'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Settings,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';
import { navItems, docSubItems } from '@/lib/constants/navigation';

export function DashboardSidebar() {
  const pathname = usePathname();

  // Determine which navigation item is active
  const isDocumentsActive = pathname.startsWith('/dashboard/documents');
  const isTenantActive    = pathname.startsWith('/dashboard/tenant-management');
  const activeDocCategory = isDocumentsActive
    ? (docSubItems.find(s => s.id && pathname.includes(`/documents/${s.id}`))?.id ?? '')
    : '';

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
          <span className="font-black text-[18px] tracking-[-0.89px] text-[#1a1814] leading-none">THE MUDEER</span>
          <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#7d7870] leading-none">Property Management</span>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className="flex-1 px-3 py-2 overflow-y-auto"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
      >
        <Link
          href="/dashboard"
          className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors mb-1 ${
            pathname === '/dashboard' ? 'bg-[#f0ebe0] text-[#1a1814]' : 'text-[#7d7870] hover:bg-[#f0ebe0]'
          }`}
        >
          <Home size={18} />
          <span className="text-[14px] font-semibold">Overview</span>
        </Link>

        {navItems.map(({ icon: Icon, label, href }) => {
          const isActive = pathname.startsWith(href) && href !== '#';
          const isDocs   = label === 'Documents';

          return (
            <div key={label}>
              <Link
                href={href === '#' ? '#' : href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] transition-colors mb-1 ${
                  isActive ? 'bg-[#f0ebe0] text-[#1a1814]' : 'text-[#7d7870] hover:bg-[#f0ebe0]'
                }`}
              >
                <Icon size={18} />
                <span className="text-[14px] font-semibold flex-1">{label}</span>
                {isDocs && <ChevronDown size={14} className="opacity-50" />}
                {label === 'Tenant Management' && isTenantActive && (
                  <ChevronDown size={14} className="opacity-50" />
                )}
              </Link>

              {/* Documents sub-items */}
              {isDocs && isDocumentsActive && (
                <div className="ml-7 mb-1 flex flex-col gap-0.5">
                  {docSubItems.map(sub => {
                    const isSubActive = sub.id === activeDocCategory;
                    return (
                      <Link
                        key={sub.label}
                        href={sub.id ? `/dashboard/documents/${sub.id}` : '/dashboard/documents'}
                      >
                        <div
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-[8px] text-[13px] transition-colors cursor-pointer ${
                            isSubActive
                              ? 'font-bold text-[#1a1814] bg-[#f4ebd9]'
                              : 'font-medium text-[#7d7870] hover:bg-[#f0ebe0]'
                          }`}
                        >
                          <sub.icon size={13} />
                          {sub.label}
                          {isSubActive && <ChevronRight size={12} className="ml-auto opacity-50" />}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Settings */}
      <div className="px-3 pb-6">
        <Link
          href="#"
          className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-[#7d7870] hover:bg-[#f0ebe0] transition-colors"
        >
          <Settings size={18} />
          <span className="text-[14px] font-semibold">Settings</span>
        </Link>
      </div>
    </aside>
  );
}
