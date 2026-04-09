'use client';

import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

interface PaginationBarProps {
  total: number;
  pageSize?: number;
}

export function PaginationBar({ total, pageSize = 20 }: PaginationBarProps) {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-[#e8e4db] shrink-0">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 border border-[#e8e4db] rounded-[8px] px-2 py-1 bg-white text-[12px] text-[#1a1814] font-medium cursor-pointer hover:bg-[#f0ebe0] transition-colors">
          {pageSize} <ChevronDown size={11} className="text-[#7d7870]" />
        </div>
        <span className="text-[12px] text-[#7d7870]">
          Items per page · 1 – {total} of {total} items
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 border border-[#e8e4db] rounded-[8px] px-2 py-1 bg-white text-[12px] text-[#1a1814] font-medium cursor-pointer hover:bg-[#f0ebe0] transition-colors">
          1 <ChevronDown size={11} className="text-[#7d7870]" />
        </div>
        <span className="text-[12px] text-[#7d7870]">of 1 pages</span>
        <button className="w-7 h-7 flex items-center justify-center rounded-[6px] border border-[#e8e4db] bg-white hover:bg-[#f0ebe0] transition-colors disabled:opacity-40" disabled>
          <ChevronLeft size={13} className="text-[#7d7870]" />
        </button>
        <button className="w-7 h-7 flex items-center justify-center rounded-[6px] border border-[#e8e4db] bg-white hover:bg-[#f0ebe0] transition-colors disabled:opacity-40" disabled>
          <ChevronRight size={13} className="text-[#7d7870]" />
        </button>
      </div>
    </div>
  );
}
