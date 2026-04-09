import { Plus } from 'lucide-react';

interface DashboardShellProps {
  children: React.ReactNode;
}

/**
 * Renders the warm-beige scroll container + rounded white card that wraps
 * the main content area of every dashboard page.
 */
export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex-1 bg-[#f0ebe0] rounded-tl-[36px] overflow-hidden min-h-0">
      <div
        className="h-full overflow-y-auto p-6"
        style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent' } as React.CSSProperties}
      >
        {/* Browser-tab add button */}
        <button className="mb-3 w-8 h-8 rounded-[9px] bg-[#e6e1d8] hover:bg-[#ddd8cf] flex items-center justify-center transition-colors shadow-sm">
          <Plus size={14} className="text-[#7d7870]" />
        </button>

        <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
