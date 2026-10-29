'use client';

import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight, BedDouble, Waves, Sparkles } from 'lucide-react';
import { HOTEL_CONTACT } from '@/lib/hotel-data';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: 'Room Reservations',
      msg: 'Hello Classic Royal Hotel, I would like to check room availability and book a suite.',
      icon: BedDouble,
    },
    {
      title: 'Swimming Pool Access',
      msg: 'Hello, I want to book swimming pool day passes at Classic Royal Hotel.',
      icon: Waves,
    },
    {
      title: 'Event Hall Booking',
      msg: 'Hello, I would like to enquire about renting the event hall for an upcoming event.',
      icon: Sparkles,
    },
    {
      title: 'Location & Directions',
      msg: 'Hello, please send me directions to Classic Royal Hotel on Imota–Igbokuta Road, Lagos.',
      icon: MessageCircle,
    },
  ];

  const handleLaunchChat = (customMsg?: string) => {
    const text = customMsg || 'Hello Classic Royal Hotel, I would like to make an enquiry.';
    const url = `https://wa.me/${HOTEL_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white dark:bg-[#0D1622] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-4 text-slate-800 dark:text-slate-100 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Classic Royal Concierge</p>
                <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                  Online · Instant Response
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 font-light">
            How can we assist your stay or event today?
          </p>

          <div className="space-y-1.5">
            {quickOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleLaunchChat(opt.msg)}
                  className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/70 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                      {opt.title}
                    </span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
            <button
              onClick={() => handleLaunchChat()}
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Open Direct WhatsApp Chat ↗
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
