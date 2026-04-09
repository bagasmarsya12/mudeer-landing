'use client';

import { Plus } from 'lucide-react';

interface FABProps {
  onClick?: () => void;
}

export function FAB({ onClick }: FABProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[#1a1814] text-white shadow-2xl flex items-center justify-center hover:bg-[#2d2820] transition-colors hover:scale-105 active:scale-95 z-50"
    >
      <Plus size={24} />
    </button>
  );
}
