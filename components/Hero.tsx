'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Calendar, Users, BedDouble, Search, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import { HOTEL_ROOMS } from '@/lib/hotel-data';

interface HeroProps {
  onOpenBookingModal: (preselectedRoomId?: string, checkIn?: string, checkOut?: string, guests?: number) => void;
  onScrollToSection: (sectionId: string) => void;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=85',
    tag: 'Hospitality Refined',
    caption: 'Premier Sanctuary along Imota–Igbokuta Road',
  },
  {
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=85',
    tag: 'Executive Suites',
    caption: 'Soundproof Luxury with 24/7 Guaranteed Power',
  },
  {
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&q=85',
    tag: 'Azure Swimming Pool',
    caption: 'Peaceful Water Oasis & Poolside Bush Bar',
  },
  {
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&q=85',
    tag: 'Grand Banquet Venue',
    caption: 'Hosting Prestigious Celebrations & Conferences up to 500 Guests',
  },
];

export default function Hero({ onOpenBookingModal, onScrollToSection }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Today and Tomorrow default dates (YYYY-MM-DD)
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [roomCategory, setRoomCategory] = useState('all');
  const [guestCount, setGuestCount] = useState(2);

  // Slideshow auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleCheckAvailability = (e: React.FormEvent) => {
    e.preventDefault();
    // Match room category if selected
    let selectedRoomId = undefined;
    if (roomCategory !== 'all') {
      const match = HOTEL_ROOMS.find((r) => r.category === roomCategory);
      if (match) selectedRoomId = match.id;
    }
    onOpenBookingModal(selectedRoomId, checkIn, checkOut, guestCount);
  };

  return (
    <section id="hero" className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden">
      {/* Background Slideshow with Scrim */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transform transition-transform duration-[6000ms]`}
          >
            <Image
              src={slide.image}
              alt={slide.caption}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Cinematic Scrim & Tint: Deep navy-forest gradient for high WCAG contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070D14] via-[#0A192F]/75 to-[#070D14]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-[#070D14]/40 to-[#070D14]/90" />
      </div>

      {/* Main Content Frame */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-12 sm:pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Unboxed editorial category separator */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider uppercase text-amber-300 mb-4 sm:mb-6">
            <span>Imota, Lagos State</span>
            <span aria-hidden="true" className="text-amber-400/60">·</span>
            <span>Official Hospitality Booking</span>
            <span aria-hidden="true" className="text-amber-400/60">·</span>
            <span className="text-emerald-400 font-semibold">24/7 Power Security</span>
          </div>

          {/* Main Headline with balanced wrapping */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] text-balance mb-6 drop-shadow-md">
            Comfort, Relaxation and Celebration in the Heart of Imota
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-light mb-8 sm:mb-10 text-balance">
            Escape the bustle into refined comfort along Imota–Igbokuta Road. Relax in luxury soundproof suites,
            enjoy our crystal swimming pool, and celebrate milestones in Lagos East’s premier banquet hall.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-7 py-3.5 bg-gradient-to-r from-[#C5A059] to-[#DFBF7E] hover:from-[#B89247] hover:to-[#D4B370] text-[#0A192F] font-bold text-sm sm:text-base rounded-lg shadow-lg hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Book a Room</span>
              <ChevronRight className="w-4 h-4 text-[#0A192F]" />
            </button>

            <button
              onClick={() => onScrollToSection('events')}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base rounded-lg backdrop-blur-md border border-white/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Enquire About Events</span>
            </button>
          </div>

          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2.5 mt-10">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 transition-all rounded-full ${
                  idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
            <span className="text-xs text-slate-300 ml-2 font-mono">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
          </div>
        </div>
      </div>

      {/* Compact Booking Bar (Full width below hero text) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
        <form
          onSubmit={handleCheckAvailability}
          className="bg-white/95 dark:bg-[#0C1523]/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            {/* Check-In Date */}
            <div>
              <label htmlFor="hero-checkin" className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Check-In Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#C5A059] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="hero-checkin"
                  type="date"
                  value={checkIn}
                  min={todayStr}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Check-Out Date */}
            <div>
              <label htmlFor="hero-checkout" className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Check-Out Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#C5A059] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="hero-checkout"
                  type="date"
                  value={checkOut}
                  min={checkIn || todayStr}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Room Type */}
            <div>
              <label htmlFor="hero-room-type" className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Room Category
              </label>
              <div className="relative">
                <BedDouble className="w-4 h-4 text-[#C5A059] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="hero-room-type"
                  value={roomCategory}
                  onChange={(e) => setRoomCategory(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C5A059] focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="all">All Room Types</option>
                  <option value="standard">Standard Deluxe (GH₵350)</option>
                  <option value="deluxe">Superior Deluxe (GH₵500)</option>
                  <option value="executive">Royal Executive Suite (GH₵750)</option>
                  <option value="presidential">Presidential Suite (GH₵1,200)</option>
                </select>
              </div>
            </div>

            {/* Guests */}
            <div>
              <label htmlFor="hero-guests" className="block text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Guests
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-[#C5A059] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="hero-guests"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C5A059] focus:outline-none appearance-none cursor-pointer"
                >
                  <option value={1}>1 Guest (Single)</option>
                  <option value={2}>2 Guests (Double)</option>
                  <option value={3}>3 Guests (Family)</option>
                  <option value={4}>4+ Guests (Suite Group)</option>
                </select>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-[#0D3B2E] hover:bg-[#124d3d] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 h-[42px]"
              >
                <Search className="w-4 h-4 text-amber-300" />
                <span>Check Availability</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
