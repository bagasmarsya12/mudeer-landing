'use client';

import { useState } from 'react';
import { LayoutGrid, Menu, Folder, FolderOpen, Building2 } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

const buildingCards = [
  { name: 'Lavender Tower',         image: 'https://placehold.co/183x104/9cb8b5/ffffff?text=Lavender' },
  { name: 'Horizon Building',       image: 'https://placehold.co/183x104/7a8fa6/ffffff?text=Horizon' },
  { name: 'Crescent Residences',    image: 'https://placehold.co/183x104/5e7d5b/ffffff?text=Crescent' },
  { name: 'Amber Court',            image: 'https://placehold.co/183x104/2d3748/ffffff?text=Amber' },
  { name: 'Oasis Tower',            image: 'https://placehold.co/183x104/8b7355/ffffff?text=Oasis' },
  { name: 'Pearl Heights',          image: 'https://placehold.co/183x104/6b8e6b/ffffff?text=Pearl' },
  { name: 'Saffron Building',       image: 'https://placehold.co/183x104/b8860b/ffffff?text=Saffron' },
  { name: 'Dune Residences',        image: 'https://placehold.co/183x104/7b6b8b/ffffff?text=Dune' },
  { name: 'Cascade Tower',          image: 'https://placehold.co/183x104/4a7c8a/ffffff?text=Cascade' },
  { name: 'Zephyr Building',        image: 'https://placehold.co/183x104/8a6b5a/ffffff?text=Zephyr' },
  { name: 'Mosaic Residences',      image: 'https://placehold.co/183x104/5a7a6b/ffffff?text=Mosaic' },
  { name: 'Finch Tower',            image: 'https://placehold.co/183x104/9a8060/ffffff?text=Finch' },
  { name: 'Ivory Court',            image: 'https://placehold.co/183x104/6a5a8a/ffffff?text=Ivory' },
  { name: 'Solstice Building',      image: 'https://placehold.co/183x104/7a9a7a/ffffff?text=Solstice' },
  { name: 'Veranda Heights',        image: 'https://placehold.co/183x104/8a7060/ffffff?text=Veranda' },
  { name: 'Azure Tower',            image: 'https://placehold.co/183x104/4e6d8a/ffffff?text=Azure' },
  { name: 'Sandstone Building',     image: 'https://placehold.co/183x104/7a6a5a/ffffff?text=Sandstone' },
  { name: 'Coppergate Residences',  image: 'https://placehold.co/183x104/5a8a7a/ffffff?text=Copper' },
  { name: 'Falcon Tower',           image: 'https://placehold.co/183x104/8a7a4a/ffffff?text=Falcon' },
  { name: 'Mirage Residences',      image: 'https://placehold.co/183x104/6a8a5a/ffffff?text=Mirage' },
];

const tableRows = [
  { folder: 'Dubai',          subfolder: 'Residential', unit: 'Lavender Tower',        street: 'Al Barsha St',                houseNo: '12A',  postCode: '11200', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Commercial',  unit: 'Horizon Building',      street: 'Sheikh Zayed Rd',             houseNo: '55',   postCode: '11210', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Residential', unit: 'Crescent Residences',   street: 'JBR Walk',                    houseNo: '3B',   postCode: '11220', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Commercial',  unit: 'Amber Court',           street: 'Business Bay Ave',            houseNo: '77',   postCode: '11230', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Residential', unit: 'Oasis Tower',           street: 'DIFC Gate Ave',               houseNo: '9C',   postCode: '11240', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Residential', unit: 'Pearl Heights',         street: 'Marina Promenade',            houseNo: '21',   postCode: '11250', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Commercial',  unit: 'Saffron Building',      street: 'Downtown Blvd',               houseNo: '100',  postCode: '11260', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Residential', unit: 'Dune Residences',       street: 'Palm Trunk Rd',               houseNo: '7D',   postCode: '11270', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Commercial',  unit: 'Cascade Tower',         street: 'Marina Walk',                 houseNo: '34',   postCode: '11280', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Residential', unit: 'Zephyr Building',       street: 'Al Barsha St',                houseNo: '16B',  postCode: '11290', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Residential', unit: 'Mosaic Residences',     street: 'JBR Walk',                    houseNo: '5',    postCode: '11300', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Commercial',  unit: 'Finch Tower',           street: 'Sheikh Zayed Rd',             houseNo: '88',   postCode: '11310', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Residential', unit: 'Ivory Court',           street: 'Downtown Blvd',               houseNo: '2A',   postCode: '11320', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Commercial',  unit: 'Solstice Building',     street: 'Business Bay Ave',            houseNo: '110',  postCode: '11330', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Residential', unit: 'Veranda Heights',       street: 'Palm Trunk Rd',               houseNo: '4E',   postCode: '11340', city: 'Dubai' },
  { folder: 'Abu Dhabi',      subfolder: 'Commercial',  unit: 'Azure Tower',           street: 'Corniche Rd',                 houseNo: '61',   postCode: '20100', city: 'Abu Dhabi' },
  { folder: 'Abu Dhabi',      subfolder: 'Residential', unit: 'Sandstone Building',    street: 'Al Reem Blvd',                houseNo: '14A',  postCode: '20110', city: 'Abu Dhabi' },
  { folder: 'Abu Dhabi',      subfolder: 'Residential', unit: 'Coppergate Residences', street: 'Khalidiyah St',               houseNo: '8B',   postCode: '20120', city: 'Abu Dhabi' },
  { folder: 'Abu Dhabi',      subfolder: 'Commercial',  unit: 'Falcon Tower',          street: 'Hamdan St',                   houseNo: '99',   postCode: '20130', city: 'Abu Dhabi' },
  { folder: 'Abu Dhabi',      subfolder: 'Residential', unit: 'Mirage Residences',     street: 'Saadiyat Cultural Blvd',      houseNo: '3C',   postCode: '20140', city: 'Abu Dhabi' },
  { folder: 'Abu Dhabi',      subfolder: 'Commercial',  unit: 'Lavender Tower',        street: 'Airport Rd',                  houseNo: '45',   postCode: '20150', city: 'Abu Dhabi' },
  { folder: 'Abu Dhabi',      subfolder: 'Residential', unit: 'Horizon Building',      street: 'Al Bateen St',                houseNo: '22D',  postCode: '20160', city: 'Abu Dhabi' },
  { folder: 'Abu Dhabi',      subfolder: 'Residential', unit: 'Crescent Residences',   street: 'Yas Dr',                      houseNo: '6',    postCode: '20170', city: 'Abu Dhabi' },
  { folder: 'Abu Dhabi',      subfolder: 'Commercial',  unit: 'Amber Court',           street: 'Al Wahda St',                 houseNo: '73',   postCode: '20180', city: 'Abu Dhabi' },
  { folder: 'Abu Dhabi',      subfolder: 'Residential', unit: 'Oasis Tower',           street: 'Corniche Rd',                 houseNo: '11F',  postCode: '20190', city: 'Abu Dhabi' },
  { folder: 'Sharjah',        subfolder: 'Commercial',  unit: 'Pearl Heights',         street: 'King Faisal Rd',              houseNo: '50',   postCode: '30100', city: 'Sharjah' },
  { folder: 'Sharjah',        subfolder: 'Residential', unit: 'Saffron Building',      street: 'Al Taawun St',                houseNo: '17',   postCode: '30110', city: 'Sharjah' },
  { folder: 'Sharjah',        subfolder: 'Residential', unit: 'Dune Residences',       street: 'Corniche Buhaira',            houseNo: '4A',   postCode: '30120', city: 'Sharjah' },
  { folder: 'Sharjah',        subfolder: 'Commercial',  unit: 'Cascade Tower',         street: 'Al Qasba Canal Rd',           houseNo: '62',   postCode: '30130', city: 'Sharjah' },
  { folder: 'Sharjah',        subfolder: 'Residential', unit: 'Zephyr Building',       street: 'Al Majaz St',                 houseNo: '9B',   postCode: '30140', city: 'Sharjah' },
  { folder: 'Sharjah',        subfolder: 'Commercial',  unit: 'Mosaic Residences',     street: 'Rolla Rd',                    houseNo: '33',   postCode: '30150', city: 'Sharjah' },
  { folder: 'Sharjah',        subfolder: 'Residential', unit: 'Finch Tower',           street: 'Al Nahda St',                 houseNo: '5C',   postCode: '30160', city: 'Sharjah' },
  { folder: 'Sharjah',        subfolder: 'Commercial',  unit: 'Ivory Court',           street: 'Al Taawun Rd',                houseNo: '80',   postCode: '30170', city: 'Sharjah' },
  { folder: 'Ras Al Khaimah', subfolder: 'Residential', unit: 'Solstice Building',     street: 'Sheikh Mohammed Bin Salem Rd', houseNo: '7',   postCode: '40100', city: 'Ras Al Khaimah' },
  { folder: 'Ras Al Khaimah', subfolder: 'Commercial',  unit: 'Veranda Heights',       street: 'Al Hamra Village Rd',         houseNo: '28',   postCode: '40110', city: 'Ras Al Khaimah' },
  { folder: 'Ras Al Khaimah', subfolder: 'Residential', unit: 'Azure Tower',           street: 'Al Nakheel Blvd',             houseNo: '15B',  postCode: '40120', city: 'Ras Al Khaimah' },
  { folder: 'Ras Al Khaimah', subfolder: 'Residential', unit: 'Sandstone Building',    street: 'Lakeside Dr',                 houseNo: '3',    postCode: '40130', city: 'Ras Al Khaimah' },
  { folder: 'Ras Al Khaimah', subfolder: 'Commercial',  unit: 'Coppergate Residences', street: 'Al Hamra Rd',                 houseNo: '41',   postCode: '40140', city: 'Ras Al Khaimah' },
  { folder: 'Ajman',          subfolder: 'Residential', unit: 'Falcon Tower',          street: 'Sheikh Humaid Bin Rashid Rd', houseNo: '19',   postCode: '50100', city: 'Ajman' },
  { folder: 'Ajman',          subfolder: 'Commercial',  unit: 'Mirage Residences',     street: 'Sheikh Khalifa Bin Zayed St', houseNo: '55',   postCode: '50110', city: 'Ajman' },
  { folder: 'Ajman',          subfolder: 'Residential', unit: 'Lavender Tower',        street: 'Corniche Ajman',              houseNo: '6A',   postCode: '50120', city: 'Ajman' },
  { folder: 'Ajman',          subfolder: 'Residential', unit: 'Horizon Building',      street: 'Al Dhait Rd',                 houseNo: '11',   postCode: '50130', city: 'Ajman' },
  { folder: 'Ajman',          subfolder: 'Commercial',  unit: 'Crescent Residences',   street: 'Al Jurf Industrial',          houseNo: '90',   postCode: '50140', city: 'Ajman' },
  { folder: 'Dubai',          subfolder: 'Residential', unit: 'Azure Tower',           street: 'Marina Walk',                 houseNo: '25C',  postCode: '11350', city: 'Dubai' },
  { folder: 'Dubai',          subfolder: 'Commercial',  unit: 'Sandstone Building',    street: 'DIFC Gate Ave',               houseNo: '67',   postCode: '11360', city: 'Dubai' },
  { folder: 'Abu Dhabi',      subfolder: 'Commercial',  unit: 'Pearl Heights',         street: 'Abu Dhabi Corniche',          houseNo: '38',   postCode: '20200', city: 'Abu Dhabi' },
  { folder: 'Abu Dhabi',      subfolder: 'Residential', unit: 'Saffron Building',      street: 'Al Reem Island Blvd',         houseNo: '2E',   postCode: '20210', city: 'Abu Dhabi' },
  { folder: 'Sharjah',        subfolder: 'Residential', unit: 'Cascade Tower',         street: 'Al Wahda Ave',                houseNo: '13',   postCode: '30180', city: 'Sharjah' },
  { folder: 'Ras Al Khaimah', subfolder: 'Residential', unit: 'Amber Court',           street: 'Old Town Rd',                 houseNo: '4B',   postCode: '40150', city: 'Ras Al Khaimah' },
  { folder: 'Ajman',          subfolder: 'Residential', unit: 'Dune Residences',       street: 'Musheireb Rd',                houseNo: '30',   postCode: '50150', city: 'Ajman' },
  { folder: 'Dubai',          subfolder: 'Residential', unit: 'Falcon Tower',          street: 'Palm Jumeirah Blvd',          houseNo: '8',    postCode: '11370', city: 'Dubai' },
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
