'use client';

import { useState, useRef, KeyboardEvent } from 'react';
import { X } from 'lucide-react';

interface ServicePillInputProps {
  value: string[];
  onChange: (services: string[]) => void;
  placeholder?: string;
}

export function ServicePillInput({ value, onChange, placeholder = 'Type a service and press Enter…' }: ServicePillInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState('');

  const add = (raw: string) => {
    const trimmed = raw.trim();
    if (trimmed && !value.includes(trimmed)) onChange([...value, trimmed]);
    setInputValue('');
  };

  const remove = (service: string) => onChange(value.filter(s => s !== service));

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { e.preventDefault(); add(inputValue); }
    else if (e.key === 'Backspace' && inputValue === '' && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  return (
    <>
      <div
        className="flex flex-wrap gap-2 p-3 rounded-[14px] border border-[#e8e4db] bg-[#faf8f5] cursor-text focus-within:border-[#cda460] focus-within:bg-white transition-colors"
        onClick={() => inputRef.current?.focus()}
      >
        {value.map(service => (
          <span
            key={service}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f0ebe0] border border-[#e0d8c8] text-[12px] font-semibold text-[#4a453d]"
          >
            {service}
            <button
              onClick={e => { e.stopPropagation(); remove(service); }}
              className="w-4 h-4 flex items-center justify-center rounded-full bg-[#e0d8c8] hover:bg-[#cda460] hover:text-white text-[#9e9990] transition-colors"
            >
              <X size={9} strokeWidth={2.5} />
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : 'Add service…'}
          className="flex-1 min-w-[160px] bg-transparent text-[13px] text-[#4a453d] placeholder:text-[#c5bfb5] outline-none py-1"
        />
      </div>
      <p className="mt-2 text-[11px] text-[#b0aaa2]">Press Enter to add · Backspace to remove last</p>
    </>
  );
}

