import { Pencil, CheckCircle, Share2 } from 'lucide-react';
import type { DocActionType } from '@/lib/data/documents';

const docActionConfig: Record<DocActionType, {
  Icon: React.ElementType;
  bg: string;
  text: string;
  border: string;
  label: string;
}> = {
  'signature-unsigned': { Icon: Pencil,      bg: 'bg-[#f5f5f5]', text: 'text-[#9e9e9e]', border: 'border-[#e0ddd8]', label: 'Awaiting Signature' },
  'signature-signed':   { Icon: Pencil,      bg: 'bg-blue-50',   text: 'text-blue-500',  border: 'border-blue-200',  label: 'Signed'             },
  'signature-rejected': { Icon: Pencil,      bg: 'bg-red-50',    text: 'text-red-500',   border: 'border-red-200',   label: 'Rejected'           },
  'receipt-unread':     { Icon: CheckCircle, bg: 'bg-[#f5f5f5]', text: 'text-[#9e9e9e]', border: 'border-[#e0ddd8]', label: 'Not Read'           },
  'receipt-read':       { Icon: CheckCircle, bg: 'bg-blue-50',   text: 'text-blue-500',  border: 'border-blue-200',  label: 'Read'               },
  'share':              { Icon: Share2,      bg: 'bg-blue-50',   text: 'text-blue-500',  border: 'border-blue-200',  label: 'Shared'             },
};

export function DocActionBadge({ type }: { type: DocActionType }) {
  const { Icon, bg, text, border, label } = docActionConfig[type];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[11px] font-semibold whitespace-nowrap ${bg} ${text} ${border}`}>
      <Icon size={11} />
      {label}
    </span>
  );
}

export function MeterStatusBadge({ type }: { type: DocActionType }) {
  const isSigned = type === 'signature-signed';
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[11px] font-semibold whitespace-nowrap ${
      isSigned
        ? 'bg-blue-50 text-blue-500 border-blue-200'
        : 'bg-[#f5f5f5] text-[#9e9e9e] border-[#e0ddd8]'
    }`}>
      <Pencil size={11} />
      {isSigned ? 'Signed' : 'Not Signed'}
    </span>
  );
}
