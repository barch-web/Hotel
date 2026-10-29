'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Users,
  Sparkles,
  Calendar,
  Check,
  Send,
  MessageCircle,
  Shield,
  Zap,
  Wind,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { EVENT_HALL_DATA, HOTEL_CONTACT } from '@/lib/hotel-data';

export default function EventHallSection() {
  const [eventType, setEventType] = useState(EVENT_HALL_DATA.eventTypes[0]);
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('300');
  const [hallLayout, setHallLayout] = useState('Banquet (Round Tables & Stage)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState('');

  // Estimate calculation logic based on guest count & layout in GHc
  const numGuests = parseInt(guestCount) || 300;
  const baseRate = numGuests > 350 ? 4500 : 3500;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !eventDate) {
      alert('Please fill out your name, contact phone number, and intended event date.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `EVT-${Math.floor(10000 + Math.random() * 90000)}`;
      setQuoteId(generatedId);
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 600);
  };

  const getWhatsAppEnquiryUrl = () => {
    const text = `*EVENT HALL ENQUIRY - CLASSIC ROYAL HOTEL*\n` +
      `Reference: ${quoteId || 'NEW'}\n` +
      `Event Type: ${eventType}\n` +
      `Proposed Date: ${eventDate}\n` +
      `Estimated Guests: ${guestCount}\n` +
      `Layout: ${hallLayout}\n` +
      `Client Name: ${fullName}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || 'N/A'}\n` +
      (message ? `Specific Requirements: ${message}\n` : '') +
      `\nPlease send official availability, hall inspection schedule, and formal invoice.`;
    return `https://wa.me/${HOTEL_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="events" className="py-20 bg-[#FAF9F5] dark:bg-[#080E17] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C5A059] mb-3">
            Celebrations &amp; Conferences
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            The Grand Banquet &amp; Event Hall
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light">
            Host unhurried wedding receptions, milestone anniversaries, and high-level corporate symposiums
            along the Imota–Igbokuta corridor. Complete with sub-zero air conditioning, elevated stage, and zero-blackout dual power.
          </p>
        </div>

        {/* Feature Grid & Hall Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          <div className="bg-white dark:bg-[#0F1826] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-[#C5A059] flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase text-slate-400 font-semibold">Capacity</span>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mt-1">
                500 Banquet
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Or up to 800 guests theatre-style</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0F1826] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase text-slate-400 font-semibold">Power Assurance</span>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mt-1">
                24/7 Dual Generators
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Soundproof automatic changeover</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0F1826] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-3">
              <Wind className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase text-slate-400 font-semibold">Climate</span>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mt-1">
                Sub-Zero Cooling
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Heavy-duty industrial standing ACs</p>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0F1826] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase text-slate-400 font-semibold">Logistics</span>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mt-1">
                100+ Secured Cars
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Gated parking &amp; uniformed guards</p>
            </div>
          </div>
        </div>

        {/* 2-Column Showcase & Interactive Enquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Atmospheric Gallery Images & Included Amenities (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80"
                alt="Classic Royal Grand Event Hall Banquet Setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-semibold text-amber-300 tracking-wider uppercase">
                  Turnkey Hospitality
                </span>
                <p className="font-serif text-lg font-bold">
                  Chiavari Chairs, Round Tables &amp; Stage Included
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-[#0D1520] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h4 className="font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                What Every Hall Booking Includes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Gold Chiavari Chairs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Round Banquet Tables</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Executive Changing Suite</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Raised Presentation Stage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Dedicated Event Cleaners</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Armed Security at Gate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Hall Enquiry & Quotation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0D1520] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Event Hall Availability &amp; Booking
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Get an instant estimate and reserve your preferred event date
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Est. Base Hall Rate</span>
                  <span className="text-lg sm:text-xl font-mono font-bold text-[#C5A059]">
                    GH₵{baseRate.toLocaleString()}
                  </span>
                </div>
              </div>

              {isSubmitted ? (
                /* Success Screen */
                <div className="text-center py-8 space-y-5">
                  <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto ring-1 ring-emerald-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      Event Enquiry Prepared!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Enquiry ID: <span className="font-mono font-bold text-[#C5A059]">{quoteId}</span>.
                      Our event manager will hold your date for inspection. Click below to initiate instant WhatsApp review.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-slate-50 dark:bg-slate-900/90 p-5 rounded-xl border border-slate-200 dark:border-slate-800 text-left max-w-md mx-auto text-xs space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Event Type:</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{eventType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Target Date:</span>
                      <span className="text-slate-800 dark:text-slate-200">{eventDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Estimated Guests:</span>
                      <span className="text-slate-800 dark:text-slate-200">{guestCount} Guests</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Contact:</span>
                      <span className="text-slate-800 dark:text-slate-200">{fullName} ({phone})</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={getWhatsAppEnquiryUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 shadow-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat with Event Director on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* Enquiry Form */
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Event Type */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Type of Event *
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                      >
                        {EVENT_HALL_DATA.eventTypes.map((type, idx) => (
                          <option key={idx} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Proposed Date */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Proposed Event Date *
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-[#C5A059] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="date"
                          value={eventDate}
                          min={new Date().toISOString().split('T')[0]}
                          onChange={(e) => setEventDate(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Estimated Guests */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Estimated Guest Count
                      </label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                      >
                        <option value="100">Up to 100 Guests</option>
                        <option value="200">100 - 250 Guests</option>
                        <option value="350">250 - 400 Guests</option>
                        <option value="500">400 - 500 Guests (Full Banquet)</option>
                        <option value="800">500 - 800 Guests (Theatre / AGM)</option>
                      </select>
                    </div>

                    {/* Seating Layout */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Hall Seating Style
                      </label>
                      <select
                        value={hallLayout}
                        onChange={(e) => setHallLayout(e.target.value)}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                      >
                        <option>Banquet (Round Tables &amp; Stage)</option>
                        <option>Theatre / Conference Row Seating</option>
                        <option>Cocktail Reception &amp; High-Tops</option>
                        <option>Classroom / Workshop Style</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name / Organization *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chief &amp; Mrs. Williams"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 0802 345 6789"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. williams@corporate.ng"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Additional Requirements (Catering space, DJ power feed, setup time)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify your decorator ingress time, sound requirements, or room blocks needed for guests..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 bg-[#0D3B2E] hover:bg-[#124d3d] text-white font-bold text-sm rounded-lg shadow-md active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Validating Date Availability...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-amber-300" />
                          <span>Submit Event Enquiry &amp; Receive Quotation</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
