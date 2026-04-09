'use client';

import Link from 'next/link';
import { Bell, Search, Plus, X, ChevronRight } from 'lucide-react';

export interface Breadcrumb {
  label: string;
  href?: string;
}

interface DashboardTopBarProps {
  breadcrumbs: Breadcrumb[];
}

export function DashboardTopBar({ breadcrumbs }: DashboardTopBarProps) {
  return (
    <header className="h-[88px] flex items-center px-8 gap-3 bg-[#faf8f5] min-w-0">
      <div className="flex items-center gap-1.5 text-[13px] flex-1 min-w-0 flex-wrap">
        {breadcrumbs.map((crumb, i) => {
          const isLast = i === breadcrumbs.length - 1;
          return (
            <div key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="text-[#c5bfb5] shrink-0" />}
              {isLast ? (
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#f0ebe0] rounded-[10px] min-w-0">
                  <span className="text-[#1a1814] font-semibold truncate max-w-[200px]">{crumb.label}</span>
                  {crumb.href && (
                    <Link href={crumb.href}>
                      <X size={11} className="text-[#7d7870] cursor-pointer hover:text-[#1a1814] transition-colors shrink-0" />
                    </Link>
                  )}
                </div>
              ) : (
                <Link href={crumb.href ?? '#'}>
                  <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[10px] hover:bg-[#f0ebe0]/60 transition-colors whitespace-nowrap">
                    <X size={11} className="text-[#7d7870]" />
                    <span className="text-[#7d7870] font-medium">{crumb.label}</span>
                  </button>
                </Link>
              )}
            </div>
          );
        })}

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
  );
}
