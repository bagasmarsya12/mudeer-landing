'use client';

import { useState } from 'react';
import { LayoutGrid, Menu, Folder, FolderOpen, Building2 } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const buildingCards = [
  { name: 'Tulip Building', image: 'https://placehold.co/183x104/9cb8b5/ffffff?text=Tulip' },
  { name: 'Orchid Building', image: 'https://placehold.co/183x104/7a8fa6/ffffff?text=Orchid' },
  { name: 'Rose Building', image: 'https://placehold.co/183x104/5e7d5b/ffffff?text=Rose' },
  { name: 'Sunflower Building', image: 'https://placehold.co/183x104/2d3748/ffffff?text=Sunflower' },
];

const tableRows = [
  { folder: 'Dubai', subfolder: 'Commercial', unit: 'Ammana Building', street: 'Sheikh Zayed Rd', houseNo: '101', postCode: '00000', city: 'Dubai' },
  { folder: 'Dubai', subfolder: 'Residential', unit: 'Royal Building', street: 'Marina Promenade', houseNo: '45A', postCode: '12345', city: 'Dubai' },
  { folder: 'Dubai', subfolder: 'Residential', unit: 'Sky View Tower', street: 'Downtown St', houseNo: '12', postCode: '67890', city: 'Dubai' },
  { folder: 'Abu Dhabi', subfolder: 'Commercial', unit: 'Amina Tower', street: 'Corniche Rd', houseNo: '88', postCode: '44332', city: 'Abu Dhabi' },
  { folder: 'Abu Dhabi', subfolder: 'Residential', unit: 'Highland Tower', street: 'Al Reem St', houseNo: '2B', postCode: '99887', city: 'Abu Dhabi' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function UnallocatedBuildingsPage() {
  const [view, setView] = useState<'grid' | 'list'>('list');

  return (
    <div className="min-h-screen bg-[#f5f3f0] flex items-center justify-center p-8">
      <div className="bg-[#fcfbf9] border border-white rounded-[32px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.03)] w-full max-w-[761px] overflow-hidden p-8">

        {/* ── Header ── */}
        <div className="flex items-center justify-between h-[42px] mb-6">
          <h1 className="text-[#1a1814] text-[24px] font-bold leading-[32px] tracking-[0.07px]">
            Unallocated Buildings
          </h1>

          {/* View toggle */}
          <div className="relative h-[42px] w-[80px] rounded-[14px] overflow-hidden">
            <div className="absolute inset-0 bg-[#f4ebd9] rounded-[14px] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
            <div className="relative flex items-center gap-1 px-1 h-full">
              {/* List icon */}
              <button
                onClick={() => setView('grid')}
                className="flex-1 flex flex-col items-center justify-center pt-2 h-[34px] rounded-[12px]"
              >
                <LayoutGrid size={18} className="text-[#1a1814]" />
              </button>
              {/* Grid icon */}
              <button
                onClick={() => setView('list')}
                className={`flex flex-col items-center justify-center pt-2 h-[34px] w-[34px] rounded-[14px] shrink-0 ${
                  view === 'list'
                    ? 'bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]'
                    : ''
                }`}
              >
                <Menu size={18} className="text-[#1a1814]" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Building Cards ── */}
        <div className="flex gap-[8px] mb-6 overflow-hidden">
          {buildingCards.map((card) => (
            <div
              key={card.name}
              className="relative h-[105px] w-[183px] shrink-0 rounded-[16px] overflow-hidden border border-[#e8e4db] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] bg-[#fdfcf9]"
            >
              {/* Building image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Label pill */}
              <div className="absolute bottom-[10px] left-[12px] flex items-center gap-[4px] bg-white border border-[#e8e4db] rounded-full px-[11px] py-[5px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)]">
                <span className="bg-[#f4ebd9] w-[18px] h-[18px] rounded-full flex items-center justify-center text-[8px]">
                  🏢
                </span>
                <span className="text-[#1a1814] text-[12px] font-bold leading-[20px] tracking-[-0.15px] whitespace-nowrap">
                  {card.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Table ── */}
        <div className="bg-white border border-[#e8e4db] rounded-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-[#fcfbf9] shadow-[0px_1px_0px_0px_#e8e4db]">
                {['Folder', 'Subfolder', 'Unit', 'Street', 'House No', 'Post Code', 'City'].map((col) => (
                  <th
                    key={col}
                    className="px-6 py-[17px] text-left text-[12px] font-bold text-[#8b8273] uppercase tracking-[0.6px] leading-[18px] whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr
                  key={i}
                  className={i < tableRows.length - 1 ? 'border-b border-[#e8e4db]' : ''}
                >
                  {/* Folder */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#f4ebd9] w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0">
                        <Folder size={16} className="text-[#b8975a]" />
                      </div>
                      <span className="text-[#1a1814] text-[14px] font-bold leading-[21px] tracking-[-0.15px] whitespace-nowrap">
                        {row.folder}
                      </span>
                    </div>
                  </td>
                  {/* Subfolder */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-white border border-[#e8e4db] w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0">
                        <FolderOpen size={16} className="text-[#6b7280]" />
                      </div>
                      <span className="text-[#4a453d] text-[14px] font-semibold leading-[21px] tracking-[-0.15px] whitespace-nowrap">
                        {row.subfolder}
                      </span>
                    </div>
                  </td>
                  {/* Unit */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-white border border-[#e8e4db] w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0">
                        <Building2 size={16} className="text-[#6b7280]" />
                      </div>
                      <span className="text-[#1a1814] text-[14px] font-bold leading-[21px] tracking-[-0.15px] whitespace-nowrap">
                        {row.unit}
                      </span>
                    </div>
                  </td>
                  {/* Street */}
                  <td className="px-6 py-4">
                    <span className="text-[#4a453d] text-[14px] font-medium leading-[21px] tracking-[-0.15px] whitespace-nowrap">
                      {row.street}
                    </span>
                  </td>
                  {/* House No */}
                  <td className="px-6 py-4">
                    <span className="text-[#4a453d] text-[14px] font-medium leading-[21px] tracking-[-0.15px]">
                      {row.houseNo}
                    </span>
                  </td>
                  {/* Post Code */}
                  <td className="px-6 py-4">
                    <span className="text-[#4a453d] text-[14px] font-medium leading-[21px] tracking-[-0.15px]">
                      {row.postCode}
                    </span>
                  </td>
                  {/* City */}
                  <td className="px-6 py-4">
                    <span className="text-[#1a1814] text-[14px] font-bold leading-[21px] tracking-[-0.15px] whitespace-nowrap">
                      {row.city}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
