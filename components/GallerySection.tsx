'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '@/lib/hotel-data';
import LightboxModal from './LightboxModal';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rooms' | 'pool' | 'events' | 'exterior'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { key: 'all', label: 'All Photos' },
    { key: 'rooms', label: 'Rooms & Suites' },
    { key: 'pool', label: 'Swimming Pool' },
    { key: 'events', label: 'Event Hall' },
    { key: 'exterior', label: 'Exterior & Grounds' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) =>
          activeFilter === 'exterior'
            ? item.category === 'exterior' || item.category === 'dining'
            : item.category === activeFilter
        );

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-[#FAF9F5] dark:bg-[#080E17] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C5A059] mb-3">
            Visual Tour
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Gallery &amp; Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light">
            Take a visual walk through our guest accommodations, serene swimming pool deck,
            and grand celebratory hall along Imota–Igbokuta Road.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl backdrop-blur-sm gap-1">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key as any)}
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

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 dark:border-slate-800"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Badge / Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-amber-300" />
              </div>

              {/* Text Card overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300 block mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        item={activeItem}
        items={filteredItems}
        currentIndex={lightboxIndex || 0}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
