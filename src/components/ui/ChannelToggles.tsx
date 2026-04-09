'use client';

import { Mail, Smartphone } from 'lucide-react';

interface ChannelTogglesProps {
  hausBuddy: boolean;
  email: boolean;
  onChangeHausBuddy: (val: boolean) => void;
  onChangeEmail: (val: boolean) => void;
}

export function ChannelToggles({
  hausBuddy,
  email,
  onChangeHausBuddy,
  onChangeEmail,
}: ChannelTogglesProps) {
  return (
    <div className="flex items-center gap-2">
      {/* Link — static label */}
      <span className="text-[11px] font-semibold text-[#7d7870] uppercase tracking-[0.8px] mr-1">
        Link
      </span>

      {/* HausBuddy */}
      <button
        onClick={() => onChangeHausBuddy(!hausBuddy)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border transition-colors text-[12px] font-semibold ${
          hausBuddy
            ? 'bg-[#fdf7ec] border-[#e8dcc8] text-[#b8975a]'
            : 'bg-[#f4f4f4] border-[#e8e4db] text-[#c5bfb5]'
        }`}
      >
        <Smartphone size={14} />
        HausBuddy
      </button>

      {/* Email */}
      <button
        onClick={() => onChangeEmail(!email)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border transition-colors text-[12px] font-semibold ${
          email
            ? 'bg-[#fdf7ec] border-[#e8dcc8] text-[#b8975a]'
            : 'bg-[#f4f4f4] border-[#e8e4db] text-[#c5bfb5]'
        }`}
      >
        <Mail size={14} />
        Email
      </button>
    </div>
  );
}
