'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, HeartHandshake, Compass, Award, MapPin } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: HeartHandshake,
      title: 'Uncompromising Comfort',
      desc: 'Plush bedding, whisper-quiet split air conditioners, and sound-insulated architecture for restorative rest.',
    },
    {
      icon: ShieldCheck,
      title: '24/7 Security & Power',
      desc: 'Gated perimeter with dedicated uniformed security, CCTV monitoring, and dual standby generators for non-stop electricity.',
    },
    {
      icon: Award,
      title: 'Genuine Nigerian Hospitality',
      desc: 'Attentive, courteous personnel trained to deliver warm, dignified service whether visiting for an hour or a month.',
    },
    {
      icon: Compass,
      title: 'True Value & Transparency',
      desc: 'Honest, fair pricing in Ghanaian Cedi (GHc) with zero hidden surcharges, offering premium quality without pretension.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#070D14] transition-colors border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#C5A059]">
              <span>About Classic Royal Hotel</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              A Refined Sanctuary on the Imota–Igbokuta Corridor
            </h2>

            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed font-light">
              Founded to introduce world-class boutique hospitality to the historic town of Imota,
              <strong> Classic Royal Hotel</strong> bridges the gap between serene countryside tranquility
              and modern luxury conveniences.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              Strategically positioned along the accessible Imota–Igbokuta Road, our property serves as the ideal
              base for wedding families celebrating in Ikorodu Division, business professionals visiting the
              Lagos State Industrial and Agricultural hubs, and city residents seeking a refreshing poolside weekend escape.
            </p>

            {/* Strategic Location Callout */}
            <div className="p-5 rounded-2xl bg-[#FAF9F5] dark:bg-[#0E1724] border border-slate-200 dark:border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                  The Location Advantage
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Avoid the choking traffic of central Lagos while remaining comfortably connected to Ikorodu town center,
                  Sagamu interchange, and the Epe expressway corridor. Secure, accessible, and peaceful.
                </p>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <h4 className="font-semibold text-sm text-slate-900 dark:text-white">
                        {val.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 pl-6 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                alt="Classic Royal Hotel Courtyard and Architecture"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-1">
                  Imota, Lagos State
                </p>
                <p className="font-serif text-xl font-bold">
                  Hospitality Where Every Guest is Royal
                </p>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-[#0D1520] p-5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 max-w-xs hidden sm:block">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Reliability</p>
              <p className="font-serif text-xl font-bold text-[#0D3B2E] dark:text-amber-300 mt-0.5">
                100% Guaranteed Power
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Soundproof synchronized dual diesel generators running day &amp; night.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
