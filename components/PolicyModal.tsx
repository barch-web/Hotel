'use client';

import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export default function PolicyModal({ isOpen, onClose, type }: PolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF9F5] dark:bg-[#0E1624] text-slate-800 dark:text-slate-100 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
            <h3 className="font-serif text-xl font-bold">
              {type === 'privacy' ? 'Privacy & Data Protection Policy' : 'Hotel Booking Terms & Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {type === 'privacy' ? (
          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed font-light">
            <p>
              At <strong>Classic Royal Hotel</strong>, your privacy and peace of mind are paramount. This website is built
              with cookie-free architecture. We do not use third-party tracking beacons, intrusive fingerprinting, or invasive advertising pixels.
            </p>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">1. Personal Information Collection</h4>
            <p>
              Information collected through our booking and enquiry forms (such as your name, phone number, and email address)
              is utilized strictly for confirming reservations, providing arrival directions, and answering inquiries.
            </p>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">2. Data Security &amp; Sharing</h4>
            <p>
              We do not sell, rent, or lease your guest information to any third parties. All client records are maintained
              under strict confidentiality compliant with data protection regulations.
            </p>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">3. Contact for Data Requests</h4>
            <p>
              For any questions regarding your reservation details or data records, email us at{' '}
              <span className="font-mono text-[#C5A059]">privacy@classicroyalhotel.com</span> or contact our front desk directly.
            </p>
          </div>
        ) : (
          <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed font-light">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">1. Check-In &amp; Check-Out Rules</h4>
            <p>
              Official check-in time is from 2:00 PM and check-out time is on or before 12:00 PM noon. Early check-in or late
              departure requests are subject to room availability on arrival.
            </p>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">2. Cancellation &amp; Modifications</h4>
            <p>
              Reservations cancelled with at least 24 hours prior notice receive 100% full refund or complimentary date change.
              Late cancellations within 24 hours of arrival may be subject to a one-night fee.
            </p>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">3. Swimming Pool &amp; Event Hall Conduct</h4>
            <p>
              Pool users must adhere to safety guidelines and proper swimwear rules. Event hall hosts are responsible for
              adhering to agreed sound curfew regulations and respect for fellow hotel residents.
            </p>
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">4. Damages &amp; Liability</h4>
            <p>
              Guests will be held accountable for any intentional damages to hotel property or amenities during their tenure.
            </p>
          </div>
        )}

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-right mt-6">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#0D3B2E] text-white rounded-lg text-xs font-semibold hover:bg-[#124d3d]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
