'use client';

import { ChevronDown, Undo2, Redo2, Bold, Italic, AlignLeft, List, MoreVertical } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  rows?: number;
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = 'Enter description...',
  rows = 7,
}: RichTextEditorProps) {
  return (
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
          value={value}
          onChange={e => onChange(e.target.value)}
          rows={rows}
          placeholder={placeholder}
          className="w-full p-4 text-[13px] text-[#4a453d] leading-[1.8] outline-none resize-none bg-transparent"
        />
      </div>
    </div>
  );
}
