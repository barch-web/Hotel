'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { HOTEL_CONTACT } from '@/lib/hotel-data';
import PolicyModal from './PolicyModal';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Swimming Pool', href: '#pool' },
    { name: 'Event Hall', href: '#events' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Classic Royal', href: '#about' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <>
      <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
            {/* Col 1: Brand Info (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0D3B2E] to-[#C5A059] flex items-center justify-center text-white shadow-sm ring-1 ring-[#C5A059]/40">
                  <span className="font-serif font-bold text-xl text-amber-200">C</span>
                </div>
                <div>
                  <span className="font-serif text-xl font-bold tracking-tight text-white block leading-none">
                    Classic Royal <span className="text-[#C5A059]">Hotel</span>
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-slate-400 font-medium">
                    Imota · Lagos State
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                The official hospitality and accommodation portal for Classic Royal Hotel.
                Luxury guest suites, azure swimming pool recreation, and a grand 500-capacity event hall along Imota–Igbokuta Road.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#C5A059] hover:text-[#0A192F] flex items-center justify-center text-slate-300 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#C5A059] hover:text-[#0A192F] flex items-center justify-center text-slate-300 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#C5A059] hover:text-[#0A192F] flex items-center justify-center text-slate-300 transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-[#C5A059] hover:text-[#0A192F] flex items-center justify-center text-slate-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Explore The Hotel
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors block py-0.5"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Direct Contacts (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Contact Info
              </h4>
              <div className="space-y-3 text-xs text-slate-400">
                <p className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Imota–Igbokuta Road, Imota, Lagos</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <a href={`tel:${HOTEL_CONTACT.whatsappNumber}`} className="hover:text-white">
                    {HOTEL_CONTACT.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                  <a href={`mailto:${HOTEL_CONTACT.email}`} className="hover:text-white truncate">
                    {HOTEL_CONTACT.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Col 4: Newsletter & Exclusive Offers (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Privilege Club &amp; Updates
              </h4>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Receive special seasonal suite promotions, pool party announcements, and event hall booking discounts.
              </p>

              {newsletterSubscribed ? (
                <div className="p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full pl-3 pr-10 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:ring-1 focus:ring-[#C5A059] focus:outline-none"
                      required
                    />
                    <button
                      type="submit"
                      aria-label="Submit newsletter subscription"
                      className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-[#C5A059] hover:bg-amber-400 text-[#0A192F] transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-500 block">
                    Zero spam. Unsubscribe anytime with one click.
                  </span>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Bar: Copyright, Policies & Privacy-First Analytics note */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <p>
                &copy; {new Date().getFullYear()} Classic Royal Hotel. All rights reserved.
              </p>
              <p className="text-[11px] text-slate-600 mt-0.5">
                Imota–Igbokuta Road, Imota, Lagos State, Nigeria.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <button
                onClick={() => setPolicyType('privacy')}
                className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
              >
                Privacy Policy (Cookie-Free)
              </button>
              <span>·</span>
              <button
                onClick={() => setPolicyType('terms')}
                className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
              >
                Booking Terms
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      <PolicyModal
        isOpen={policyType !== null}
        onClose={() => setPolicyType(null)}
        type={policyType || 'privacy'}
      />
    </>
  );
}
