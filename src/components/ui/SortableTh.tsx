import { ArrowUpDown } from 'lucide-react';

interface SortableThProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function SortableTh({ children, onClick, className = '' }: SortableThProps) {
  return (
    <th className={`px-4 py-3 text-left ${className}`}>
      <button
        onClick={onClick}
        className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.55px] text-[#8b8273] hover:text-[#1a1814] transition-colors whitespace-nowrap"
      >
        {children}
        <ArrowUpDown size={10} className="opacity-50" />
      </button>
    </th>
  );
}
