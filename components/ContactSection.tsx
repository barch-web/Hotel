'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  Navigation,
} from 'lucide-react';
import { HOTEL_CONTACT } from '@/lib/hotel-data';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSent(true);
      setIsSubmitting(false);
    }, 600);
  };

  const getDirectWhatsAppUrl = () => {
    const text = `*MESSAGE FROM WEBSITE - CLASSIC ROYAL HOTEL*\n` +
      `Subject: ${subject}\n` +
      `From: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || 'N/A'}\n` +
      `Message:\n${message}`;
    return `https://wa.me/${HOTEL_CONTACT.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF9F5] dark:bg-[#080E17] transition-colors border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C5A059] mb-3">
            Reach Out &amp; Visit Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Contact &amp; Location
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-light">
            Conveniently situated along Imota–Igbokuta Road, Imota, Lagos. Connect with our front desk team
            for inquiries, viewings, and guaranteed direct bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Operating Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-white dark:bg-[#0D1622] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-[#C5A059] flex items-center justify-center shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                  Hotel Address
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light mt-1">
                  {HOTEL_CONTACT.address}
                </p>
                <span className="text-[11px] text-slate-400 mt-1.5 block">
                  Ikorodu Division · Lagos State, Nigeria
                </span>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="bg-white dark:bg-[#0D1622] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-1">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                  Telephone &amp; WhatsApp
                </h4>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-mono mt-1">
                  {HOTEL_CONTACT.phone}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={`https://wa.me/${HOTEL_CONTACT.whatsappNumber}?text=Hello%20Classic%20Royal%20Hotel%2C%20I%20would%20like%20to%20inquire%20about%20reservations.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Chat</span>
                  </a>
                  <a
                    href={`tel:${HOTEL_CONTACT.whatsappNumber}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-medium transition-colors"
                  >
                    <span>Direct Call</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Email Inquiries */}
            <div className="bg-white dark:bg-[#0D1622] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-1">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                  Email Reservations
                </h4>
                <a
                  href={`mailto:${HOTEL_CONTACT.email}`}
                  className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-[#C5A059] transition-colors font-medium mt-1 block"
                >
                  {HOTEL_CONTACT.email}
                </a>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Inquiries answered promptly within 2 business hours
                </span>
              </div>
            </div>

            {/* Operating Times */}
            <div className="bg-white dark:bg-[#0D1622] p-6 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-1">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                  Service Schedule
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light mt-1">
                  Front Desk: <strong>24 Hours Daily</strong>
                  <br />
                  Check-in: <strong>2:00 PM</strong> · Check-out: <strong>12:00 PM</strong>
                  <br />
                  Swimming Pool: <strong>8:00 AM – 8:00 PM</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form & Map Embed (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Message Form */}
            <div className="bg-white dark:bg-[#0D1622] p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-md">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the message below or send it directly to our reservations desk on WhatsApp.
              </p>

              {isSent ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                    Message Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Thank you, {name}. Our guest relation manager has received your note and will contact you promptly.
                  </p>
                  <div className="flex justify-center gap-3 pt-2">
                    <a
                      href={getDirectWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward Directly on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setIsSent(false)}
                      className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
                    >
                      New Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kolawole Balogun"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 0803 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. kolawole@example.ng"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Inquiry Subject
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full py-2.5 px-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                      >
                        <option>Room Booking Inquiry</option>
                        <option>Event Hall Reservation</option>
                        <option>Pool Pass &amp; Cabana Booking</option>
                        <option>Restaurant &amp; Bush Bar Catering</option>
                        <option>General Feedback / Questions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us your questions, planned dates, or requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-[#C5A059] focus:outline-none resize-none"
                      required
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3 px-4 bg-[#0D3B2E] hover:bg-[#124d3d] text-white font-bold text-xs sm:text-sm rounded-lg shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-amber-300" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>

                    <a
                      href={getDirectWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send via WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white dark:bg-[#0D1622] rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-md">
              <div className="p-4 bg-slate-50 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
                  Map View: Imota–Igbokuta Road, Imota, Lagos
                </span>
                <a
                  href="https://maps.google.com/?q=Imota+Lagos+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#C5A059] font-medium hover:underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>
              <div className="relative w-full h-64 sm:h-72 bg-slate-200 dark:bg-slate-800">
                <iframe
                  title="Classic Royal Hotel Location on Imota-Igbokuta Road"
                  src="https://maps.google.com/maps?q=Imota,Lagos,Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full grayscale-[10%] contrast-[1.05]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
