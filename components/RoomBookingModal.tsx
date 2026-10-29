'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  X,
  Calendar,
  Users,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  BedDouble,
  ShieldCheck,
  Check,
  Printer,
  ChevronRight,
} from 'lucide-react';
import { HOTEL_ROOMS, HOTEL_CONTACT, Room } from '@/lib/hotel-data';

interface RoomBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export default function RoomBookingModal({
  isOpen,
  onClose,
  preselectedRoomId,
  initialCheckIn,
  initialCheckOut,
  initialGuests,
}: RoomBookingModalProps) {
  const todayStr = new Date().toISOString().split('T')[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    preselectedRoomId || HOTEL_ROOMS[1].id // Default to Superior Deluxe
  );
  const [checkIn, setCheckIn] = useState<string>(initialCheckIn || todayStr);
  const [checkOut, setCheckOut] = useState<string>(initialCheckOut || tomorrowStr);
  const [guests, setGuests] = useState<number>(initialGuests || 2);

  // Add-ons
  const [addonBreakfast, setAddonBreakfast] = useState(false);
  const [addonAirportPickup, setAddonAirportPickup] = useState(false);
  const [addonPoolPass, setAddonPoolPass] = useState(false);

  // Guest details
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');

  // States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<{
    referenceId: string;
    totalAmount: number;
    room: Room;
    nights: number;
  } | null>(null);



  // Prevent background scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentRoom = HOTEL_ROOMS.find((r) => r.id === selectedRoomId) || HOTEL_ROOMS[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(1000 * 60 * 60 * 24, checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  // Pricing calculations in GHc
  const roomBasePrice = currentRoom.price * nights;
  const breakfastPrice = addonBreakfast ? 45 * guests * nights : 0;
  const airportPickupPrice = addonAirportPickup ? 250 : 0;
  const poolPassPrice = addonPoolPass ? 30 * guests : 0;
  const totalPrice = roomBasePrice + breakfastPrice + airportPickupPrice + poolPassPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestPhone.trim()) {
      alert('Please fill out your name and contact phone number.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const ref = `CRH-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setConfirmation({
        referenceId: ref,
        totalAmount: totalPrice,
        room: currentRoom,
        nights,
      });
      setIsSubmitting(false);
    }, 600);
  };

  const getWhatsAppReservationUrl = () => {
    if (!confirmation) return '#';
    const message = `*HOTEL ROOM RESERVATION - CLASSIC ROYAL HOTEL*\n` +
      `Booking Reference: ${confirmation.referenceId}\n` +
      `Room Type: ${confirmation.room.name}\n` +
      `Check-In: ${checkIn}\n` +
      `Check-Out: ${checkOut} (${confirmation.nights} ${confirmation.nights === 1 ? 'night' : 'nights'})\n` +
      `Guests: ${guests}\n` +
      `Total Cost: GH₵${confirmation.totalAmount.toLocaleString()}\n` +
      `Guest Name: ${guestName}\n` +
      `Phone: ${guestPhone}\n` +
      `Email: ${guestEmail || 'N/A'}\n` +
      (addonBreakfast ? `• Continental Breakfast included\n` : '') +
      (addonAirportPickup ? `• Transfer pickup requested\n` : '') +
      (addonPoolPass ? `• Pool day pass included\n` : '') +
      (specialRequests ? `Special Requests: ${specialRequests}\n` : '') +
      `\nPlease verify room availability and confirm my reservation.`;
    return `https://wa.me/${HOTEL_CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0C1523] text-slate-800 dark:text-slate-100 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 my-auto overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0A192F] text-white border-b border-slate-800">
          <div className="flex items-center gap-2">
            <BedDouble className="w-5 h-5 text-amber-300" />
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg">
                Reserve Your Stay at Classic Royal Hotel
              </h3>
              <p className="text-[11px] text-slate-300">
                Imota–Igbokuta Road, Imota, Lagos · Direct Reservation Guarantee
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmation ? (
          /* Confirmation & Voucher Slip */
          <div className="p-6 sm:p-10 text-center space-y-6 max-h-[80vh] overflow-y-auto">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto ring-1 ring-emerald-500">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                Reservation Ready For Confirmation
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Booking Reference: {confirmation.referenceId}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto mt-2 font-light">
                Thank you, <strong className="font-semibold text-slate-900 dark:text-white">{guestName}</strong>.
                Your reservation summary has been generated. To finalize check-in arrangements and secure the room,
                send this summary directly to our reservations desk on WhatsApp.
              </p>
            </div>

            {/* Printable Voucher Slip */}
            <div className="bg-[#FAF9F5] dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 text-left max-w-xl mx-auto shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    Classic Royal Hotel
                  </span>
                  <h5 className="font-serif font-bold text-base text-slate-900 dark:text-white">
                    {confirmation.room.name}
                  </h5>
                </div>
                <div className="text-right">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    Total Nights
                  </span>
                  <p className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                    {confirmation.nights} {confirmation.nights === 1 ? 'Night' : 'Nights'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block">Check-In:</span>
                  <strong className="text-slate-800 dark:text-slate-200">{checkIn} (from 2:00 PM)</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Check-Out:</span>
                  <strong className="text-slate-800 dark:text-slate-200">{checkOut} (by 12:00 PM)</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Guest Count:</span>
                  <strong className="text-slate-800 dark:text-slate-200">{guests} Guests</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Primary Phone:</span>
                  <strong className="text-slate-800 dark:text-slate-200">{guestPhone}</strong>
                </div>
              </div>

              {/* Add-on Summary */}
              {(addonBreakfast || addonAirportPickup || addonPoolPass) && (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Selected Add-ons:</span>
                  {addonBreakfast && <div>• Daily Gourmet Buffet Breakfast Included</div>}
                  {addonAirportPickup && <div>• Chauffeur / Pickup Transfer Arrangement</div>}
                  {addonPoolPass && <div>• VIP Swimming Pool Pass Included</div>}
                </div>
              )}

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-500">Estimated Total Amount:</span>
                  <div className="font-serif font-bold text-2xl text-[#0D3B2E] dark:text-amber-300 font-mono">
                    GH₵{confirmation.totalAmount.toLocaleString()}
                  </div>
                </div>
                <span className="text-[11px] text-slate-400">Payable at Check-In or via Transfer</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={getWhatsAppReservationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm &amp; Send to Hotel on WhatsApp</span>
              </a>

              <button
                onClick={handlePrint}
                className="w-full sm:w-auto px-5 py-3.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs rounded-lg flex items-center justify-center gap-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print Voucher</span>
              </button>

              <button
                onClick={() => {
                  setConfirmation(null);
                  onClose();
                }}
                className="w-full sm:w-auto px-5 py-3.5 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-xs font-medium"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Reservation Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
            {/* Step 1: Room Selector with preview */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3">
                1. Select Room Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {HOTEL_ROOMS.map((room) => {
                  const isSelected = room.id === selectedRoomId;
                  return (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`cursor-pointer rounded-xl p-3 border transition-all text-left flex flex-col justify-between ${
                        isSelected
                          ? 'border-[#C5A059] bg-[#FAF9F5] dark:bg-slate-900 ring-2 ring-[#C5A059]/40'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-2 bg-slate-900">
                        <Image
                          src={room.image}
                          alt={room.name}
                          fill
                          className="object-cover"
                          sizes="200px"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-white line-clamp-1">
                          {room.name}
                        </h4>
                        <div className="flex items-baseline gap-1 mt-1">
                          <span className="font-mono font-bold text-sm text-[#0D3B2E] dark:text-amber-300">
                            {room.priceFormatted}
                          </span>
                          <span className="text-[10px] text-slate-400">/ night</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Dates and Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Check-In Date *
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#C5A059] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    value={checkIn}
                    min={todayStr}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Check-Out Date *
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#C5A059] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn || todayStr}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                  Occupants
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-[#C5A059] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm font-medium focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                  >
                    <option value={1}>1 Adult Guest</option>
                    <option value={2}>2 Adult Guests</option>
                    <option value={3}>3 Guests (Family)</option>
                    <option value={4}>4 Guests (Suite)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Optional Add-ons */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-3">
                Optional Hospitality Enhancements
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/60 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addonBreakfast}
                    onChange={(e) => setAddonBreakfast(e.target.checked)}
                    className="mt-0.5 rounded text-[#C5A059] focus:ring-[#C5A059]"
                  />
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                      Continental Breakfast
                    </span>
                    <span className="text-[11px] text-slate-500 block">GH₵45 / guest / day</span>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/60 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addonAirportPickup}
                    onChange={(e) => setAddonAirportPickup(e.target.checked)}
                    className="mt-0.5 rounded text-[#C5A059] focus:ring-[#C5A059]"
                  />
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                      Airport / City Shuttle
                    </span>
                    <span className="text-[11px] text-slate-500 block">GH₵250 / one-way transfer</span>
                  </div>
                </label>

                <label className="flex items-start gap-2.5 p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900/60 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addonPoolPass}
                    onChange={(e) => setAddonPoolPass(e.target.checked)}
                    className="mt-0.5 rounded text-[#C5A059] focus:ring-[#C5A059]"
                  />
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 block">
                      VIP Pool Day Pass
                    </span>
                    <span className="text-[11px] text-slate-500 block">GH₵30 / guest</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Step 4: Guest Contact Details */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                Primary Guest Information
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Guest Name *"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number (WhatsApp) *"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address (for voucher confirmation)"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Special Arrival Notes (e.g. Late check-in, extra pillows)"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs sm:text-sm focus:ring-2 focus:ring-[#C5A059] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Total & Submit Bar */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 block">
                  Total for {nights} {nights === 1 ? 'Night' : 'Nights'} ({currentRoom.name}):
                </span>
                <span className="font-mono font-bold text-2xl text-[#0D3B2E] dark:text-amber-300">
                  GH₵{totalPrice.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#0D3B2E] hover:bg-[#124d3d] text-white font-bold text-xs sm:text-sm rounded-lg shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Reserving...</span>
                  ) : (
                    <>
                      <span>Complete Reservation</span>
                      <ChevronRight className="w-4 h-4 text-amber-300" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
