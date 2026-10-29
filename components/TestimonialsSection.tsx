'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/hotel-data';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-[#FAF9F5] dark:bg-[#080E17] transition-colors border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C5A059] mb-3">
            Guest Experiences
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Words From Our Visitors
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light">
            Read verified accounts from wedding celebrants, corporate executives, and weekend vacationers
            who have made Admos Hotel and Suites their preferred destination.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#0D1622] rounded-3xl p-8 sm:p-12 border border-slate-200/90 dark:border-slate-800 shadow-xl relative">
          <div className="absolute top-6 right-8 text-[#C5A059]/15 dark:text-[#C5A059]/10 pointer-events-none">
            <Quote className="w-24 h-24" />
          </div>

          <div className="relative z-10">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6 text-amber-400">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-serif text-lg sm:text-2xl text-slate-800 dark:text-slate-100 leading-relaxed font-normal mb-8 italic">
              &ldquo;{current.comment}&rdquo;
            </p>

            {/* Author details with zero-pill metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white">
                  {current.name}
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  <span>{current.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{current.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#C5A059] font-medium">{current.occasion}</span>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-slate-400 px-2">
                  0{currentIndex + 1} / 0{TESTIMONIALS.length}
                </span>
                <button
                  onClick={next}
                  aria-label="Next review"
                  className="p-2.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Summary Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-4 rounded-xl cursor-pointer border text-left transition-all ${
                currentIndex === idx
                  ? 'bg-white dark:bg-[#0D1622] border-[#C5A059] shadow-sm'
                  : 'bg-transparent border-slate-200/60 dark:border-slate-800/60 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{t.name}</p>
              <p className="text-[11px] text-slate-500 truncate">{t.occasion} · {t.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
