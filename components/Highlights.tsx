'use client';

import React from 'react';
import { BedDouble, Waves, Sparkles, ArrowRight } from 'lucide-react';

interface HighlightsProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Highlights({ onScrollToSection }: HighlightsProps) {
  const highlights = [
    {
      id: 'rooms',
      icon: BedDouble,
      title: 'Luxury Rooms & Suites',
      copy: 'Soundproof, air-conditioned sanctuaries with 24/7 power, plush bedding, and high-speed Wi-Fi.',
      cta: 'Explore Rooms & Rates',
      accent: 'border-amber-500/30',
    },
    {
      id: 'pool',
      icon: Waves,
      title: 'Refreshing Swimming Pool',
      copy: 'Crystal-clear waters with poolside sun loungers, daily passes, and chilled refreshments.',
      cta: 'View Pool Passes & Rules',
      accent: 'border-emerald-500/30',
    },
    {
      id: 'events',
      icon: Sparkles,
      title: 'The Grand Event Hall',
      copy: 'Climate-controlled venue with banquet seating for up to 500 guests and industrial backup power.',
      cta: 'Plan Your Celebration',
      accent: 'border-blue-500/30',
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => onScrollToSection(item.id)}
              className="group cursor-pointer bg-white dark:bg-[#0E1724] rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl border border-slate-200/90 dark:border-slate-800 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF9F5] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-[#C5A059]" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6">
                  {item.copy}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-[#0D3B2E] dark:text-[#C5A059]">
                <span>{item.cta}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
