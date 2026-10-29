'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Users,
  Maximize2,
  Bed,
  Wifi,
  Tv,
  Wind,
  Shield,
  Coffee,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { HOTEL_ROOMS, Room } from '@/lib/hotel-data';

interface RoomsSectionProps {
  onOpenBookingModal: (roomId?: string) => void;
}

export default function RoomsSection({ onOpenBookingModal }: RoomsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'standard' | 'deluxe' | 'executive' | 'presidential'>('all');
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [roomId: string]: number }>({});

  const filterTabs = [
    { key: 'all', label: 'All Accommodations' },
    { key: 'standard', label: 'Standard' },
    { key: 'deluxe', label: 'Deluxe' },
    { key: 'executive', label: 'Executive' },
    { key: 'presidential', label: 'Presidential' },
  ];

  const filteredRooms =
    selectedFilter === 'all'
      ? HOTEL_ROOMS
      : HOTEL_ROOMS.filter((room) => room.category === selectedFilter);

  const handlePrevImage = (roomId: string, max: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) - 1 + max) % max,
    }));
  };

  const handleNextImage = (roomId: string, max: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndexes((prev) => ({
      ...prev,
      [roomId]: ((prev[roomId] || 0) + 1) % max,
    }));
  };

  return (
    <section id="rooms" className="py-20 bg-[#FAF9F5] dark:bg-[#070D14] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C5A059] mb-3">
            Sanctuary of Rest &amp; Elegance
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Rooms &amp; Luxury Suites
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light">
            Each room is soundproofed and tailored with bespoke bedding, individual climate control,
            and continuous 24/7 generator electricity for an effortless stay along Imota–Igbokuta Road.
          </p>
        </div>

        {/* Filter Controls (Compliant with frontend-design: functional button tabs with active/inactive state) */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm gap-1">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setSelectedFilter(tab.key as any)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-white dark:bg-[#0D3B2E] text-slate-900 dark:text-white shadow-sm font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredRooms.map((room) => {
            const currentImgIdx = activeImageIndexes[room.id] || 0;
            const currentImg = room.gallery[currentImgIdx] || room.image;

            return (
              <div
                key={room.id}
                className="group bg-white dark:bg-[#0D1622] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Showcase with Carousel Controls */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={currentImg}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Badge (if any) */}
                  {room.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-[#C5A059] text-[#0A192F] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-md">
                      {room.badge}
                    </div>
                  )}

                  {/* Carousel Left/Right Buttons */}
                  {room.gallery.length > 1 && (
                    <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => handlePrevImage(room.id, room.gallery.length, e)}
                        className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-transform active:scale-90"
                        aria-label="Previous photo"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => handleNextImage(room.id, room.gallery.length, e)}
                        className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm transition-transform active:scale-90"
                        aria-label="Next photo"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}

                  {/* Carousel Indicator Thumbnails */}
                  <div className="absolute bottom-3 right-4 z-10 flex gap-1.5 bg-black/40 px-2 py-1 rounded-full backdrop-blur-xs">
                    {room.gallery.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          idx === currentImgIdx ? 'bg-amber-400 w-3' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Price Tag in Bottom Left */}
                  <div className="absolute bottom-3 left-4 z-10 text-white">
                    <span className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-white drop-shadow">
                      {room.priceFormatted}
                    </span>
                    <span className="text-xs text-slate-200 ml-1 font-light">/ night</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Room Metadata line (Zero-pill discipline) */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#C5A059]" /> {room.capacity}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-[#C5A059]" /> {room.bed}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" /> {room.size}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {room.name}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-5">
                      {room.description}
                    </p>

                    {/* Feature Checklist */}
                    <div className="space-y-1.5 mb-6">
                      {room.features.slice(0, 4).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities Quick Row & Reserve Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-slate-400">
                      <span title="Free High-Speed Wi-Fi">
                        <Wifi className="w-4 h-4 hover:text-[#C5A059] transition-colors" />
                      </span>
                      <span title="Smart Satellite TV">
                        <Tv className="w-4 h-4 hover:text-[#C5A059] transition-colors" />
                      </span>
                      <span title="Split Air Conditioning">
                        <Wind className="w-4 h-4 hover:text-[#C5A059] transition-colors" />
                      </span>
                      <span title="Tea/Coffee Station">
                        <Coffee className="w-4 h-4 hover:text-[#C5A059] transition-colors" />
                      </span>
                      <span title="24/7 Power & Security">
                        <Shield className="w-4 h-4 hover:text-[#C5A059] transition-colors" />
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenBookingModal(room.id)}
                      className="px-5 py-2.5 bg-[#0D3B2E] hover:bg-[#124d3d] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm hover:shadow active:scale-[0.98] transition-all whitespace-nowrap"
                    >
                      Reserve Room
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Best Price Guarantee Note */}
        <div className="mt-12 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-center max-w-xl mx-auto">
          <p className="text-xs text-amber-800 dark:text-amber-300 font-medium">
            <span className="font-bold">Direct Booking Advantage:</span> Guaranteed lowest room rates, free cancellation
            up to 24 hours before check-in, and complimentary pool relaxation pass included with every room.
          </p>
        </div>
      </div>
    </section>
  );
}
