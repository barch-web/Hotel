'use client';

import React from 'react';
import {
  Zap,
  Waves,
  ShieldCheck,
  Wifi,
  Utensils,
  Car,
  Wind,
  BellRing,
} from 'lucide-react';
import { HOTEL_AMENITIES } from '@/lib/hotel-data';

const ICON_MAP: { [key: string]: React.ElementType } = {
  Zap,
  Waves,
  ShieldCheck,
  Wifi,
  Utensils,
  Car,
  Wind,
  BellRing,
};

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 bg-white dark:bg-[#070D14] transition-colors border-y border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C5A059] mb-3">
            Uncompromising Standards
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Guest Amenities &amp; Services
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light">
            Designed to guarantee that your stay in Imota is safe, continuous, and thoroughly pleasurable,
            from our dual generator power backup to authentic local delicacies.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {HOTEL_AMENITIES.map((amenity) => {
            const Icon = ICON_MAP[amenity.iconName] || Zap;
            return (
              <div
                key={amenity.id}
                className="group p-6 rounded-2xl bg-[#FAF9F5] dark:bg-[#0E1624] border border-slate-200/90 dark:border-slate-800 hover:border-[#C5A059]/50 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-[#C5A059] mb-4 group-hover:scale-110 group-hover:text-[#0D3B2E] dark:group-hover:text-amber-300 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {amenity.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
