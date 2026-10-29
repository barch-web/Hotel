'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Waves,
  Clock,
  ShieldCheck,
  Calendar,
  Users,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Sparkles,
  Ticket,
} from 'lucide-react';
import { POOL_PASSES, POOL_RULES, HOTEL_CONTACT } from '@/lib/hotel-data';

export default function PoolSection() {
  const [selectedPass, setSelectedPass] = useState(POOL_PASSES[0].id);
  const [poolDate, setPoolDate] = useState(new Date().toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('Afternoon (12:00 PM – 4:00 PM)');
  const [guestCount, setGuestCount] = useState(2);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    id: string;
    total: number;
    passName: string;
  } | null>(null);

  const activePassObj = POOL_PASSES.find((p) => p.id === selectedPass) || POOL_PASSES[0];
  const totalPrice = activePassObj.id === 'pass-vip' ? activePassObj.price : activePassObj.price * guestCount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) {
      alert('Please provide your full name and phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const bookingId = `POOL-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedBooking({
        id: bookingId,
        total: totalPrice,
        passName: activePassObj.title,
      });
      setIsSubmitting(false);
    }, 600);
  };

  const getWhatsAppBookingUrl = () => {
    if (!submittedBooking) return '#';
    const message = `*SWIMMING POOL BOOKING - CLASSIC ROYAL HOTEL*\n` +
      `Booking ID: ${submittedBooking.id}\n` +
      `Pass Type: ${submittedBooking.passName}\n` +
      `Date: ${poolDate}\n` +
      `Slot: ${timeSlot}\n` +
      `Guests: ${guestCount}\n` +
      `Total Amount: GH₵${submittedBooking.total.toLocaleString()}\n` +
      `Guest Name: ${fullName}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || 'N/A'}\n` +
      (specialRequests ? `Special Notes: ${specialRequests}\n` : '') +
      `\nPlease confirm availability and payment details.`;
    return `https://wa.me/${HOTEL_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pool" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-cyan-300 mb-3">
            <Waves className="w-4 h-4 text-cyan-400" />
            <span>Poolside Oasis &amp; Leisure</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            The Azure Swimming Pool &amp; Sun Deck
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Immerse yourself in clean, temperature-balanced azure waters framed by swaying palms. Open daily for hotel
            residents and day-pass visitors seeking relaxation, cold drinks, and fresh poolside grills.
          </p>
        </div>

        {/* Top 3-Card Pass Tier Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {POOL_PASSES.map((pass) => (
            <div
              key={pass.id}
              onClick={() => setSelectedPass(pass.id)}
              className={`cursor-pointer rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                selectedPass === pass.id
                  ? 'bg-gradient-to-b from-cyan-950/60 to-slate-900/90 border-cyan-400/80 shadow-lg shadow-cyan-950/50 ring-1 ring-cyan-400/50'
                  : 'bg-slate-800/50 hover:bg-slate-800/80 border-slate-700/80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                    <Ticket className="w-5 h-5" />
                  </div>
                  {selectedPass === pass.id && (
                    <span className="text-xs text-cyan-300 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Selected
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{pass.title}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-amber-300">{pass.priceFormatted}</span>
                  {pass.id !== 'pass-vip' && <span className="text-xs text-slate-400">/ person</span>}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 font-light">{pass.description}</p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-700/60">
                {pass.access.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Split: Image & Guidelines vs Interactive Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Atmospheric Visuals & Operating Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700/70 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80"
                alt="Classic Royal Hotel Swimming Pool"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">Pool Hours</span>
                <p className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  {HOTEL_CONTACT.poolHours}
                </p>
              </div>
            </div>

            {/* Safety & Pool Guidelines Card */}
            <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/80">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Pool Etiquette &amp; Safety Rules
              </h4>
              <ul className="space-y-2.5">
                {POOL_RULES.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed font-light">
                    <span className="text-cyan-400 font-mono font-bold mt-0.5">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: "Book the Pool" Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-700">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Book Pool Access</h3>
                <p className="text-xs text-slate-300">Reserve your day pass, sun loungers, or VIP cabana in advance</p>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 uppercase tracking-wider block">Estimated Total</span>
                <span className="text-xl sm:text-2xl font-mono font-bold text-amber-300">
                  GH₵{totalPrice.toLocaleString()}
                </span>
              </div>
            </div>

            {submittedBooking ? (
              /* Success / WhatsApp Dispatch Voucher */
              <div className="text-center py-6 space-y-5">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto ring-1 ring-emerald-500/50">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-white mb-1">Pool Reservation Generated!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your reference number is{' '}
                    <span className="font-mono font-bold text-amber-300">{submittedBooking.id}</span>. Tap below to send
                    your booking directly to our reservations team via WhatsApp to hold your spot.
                  </p>
                </div>

                {/* Summary Voucher Card */}
                <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-700 text-left max-w-md mx-auto text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Pass Type:</span>
                    <span className="font-semibold text-white">{submittedBooking.passName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Date &amp; Slot:</span>
                    <span className="text-white">{poolDate} · {timeSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Guests:</span>
                    <span className="text-white">{guestCount} Guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Primary Contact:</span>
                    <span className="text-white">{fullName} ({phone})</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-800">
                    <span className="font-bold text-slate-300">Total Payable:</span>
                    <span className="font-mono font-bold text-amber-300 text-sm">
                      GH₵{submittedBooking.total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg flex items-center justify-center gap-2 shadow-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp (Instant Confirmation)</span>
                  </a>
                  <button
                    onClick={() => setSubmittedBooking(null)}
                    className="w-full sm:w-auto px-5 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-medium rounded-lg transition-colors"
                  >
                    Make Another Booking
                  </button>
                </div>
              </div>
            ) : (
              /* The Pool Booking Form */
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Pass Type Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Select Pass Type
                    </label>
                    <select
                      value={selectedPass}
                      onChange={(e) => setSelectedPass(e.target.value)}
                      className="w-full py-2.5 px-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                    >
                      {POOL_PASSES.map((pass) => (
                        <option key={pass.id} value={pass.id}>
                          {pass.title} ({pass.priceFormatted})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Visiting Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-cyan-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        value={poolDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setPoolDate(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full py-2.5 px-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                    >
                      <option>Morning (8:00 AM – 12:00 PM)</option>
                      <option>Afternoon (12:00 PM – 4:00 PM)</option>
                      <option>Sunset / Evening (4:00 PM – 8:00 PM)</option>
                      <option>All-Day Relaxation (8:00 AM – 8:00 PM)</option>
                    </select>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Number of Swimmers
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-cyan-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="number"
                        min={1}
                        max={20}
                        value={guestCount}
                        onChange={(e) => setGuestCount(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Adebayo Adeleke"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0803 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address (Optional for e-ticket receipt)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. adebayo@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Special Requests (Poolside orders, towel requests, etc.)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Need extra poolside towels and 2 deck loungers reserved"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white font-bold text-sm rounded-lg shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing Pool Reservation...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-amber-200" />
                        <span>Reserve Pool Pass · GH₵{totalPrice.toLocaleString()}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
