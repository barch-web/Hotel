'use client';

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Moon,
  Sun,
  CalendarCheck,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { HOTEL_CONTACT } from '@/lib/hotel-data';

interface HeaderProps {
  onOpenBookingModal: (preselectedRoomId?: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function Header({
  onOpenBookingModal,
  isDarkMode,
  onToggleDarkMode,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'rooms', 'pool', 'events', 'amenities', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Rooms & Suites', href: '#rooms', id: 'rooms' },
    { name: 'Swimming Pool', href: '#pool', id: 'pool' },
    { name: 'Event Hall', href: '#events', id: 'events' },
    { name: 'Amenities', href: '#amenities', id: 'amenities' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-[#0A192F] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-300/90 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Imota–Igbokuta Road, Imota, Lagos
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              24/7 Power & Security Guaranteed
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${HOTEL_CONTACT.whatsappNumber}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Reservations: {HOTEL_CONTACT.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Best Rate Guaranteed
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header: 3-Zone Contract */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/95 dark:bg-[#070D14]/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3'
            : 'bg-[#FAF9F5] dark:bg-[#070D14] border-b border-slate-200/60 dark:border-slate-800/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 text-slate-900 dark:text-white transition-opacity hover:opacity-90"
          >
            <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#0D3B2E] via-[#0A192F] to-[#C5A059] flex items-center justify-center text-white shadow-sm ring-1 ring-[#C5A059]/40">
              <span className="font-serif font-bold text-lg text-amber-200 tracking-wider">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#0A192F] dark:text-white leading-none">
                Classic Royal <span className="text-[#C5A059] font-normal">Hotel</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-500 dark:text-slate-400 font-medium">
                Imota · Lagos
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Single-line text) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700 dark:text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#C5A059] font-semibold'
                      : 'hover:text-[#0A192F] dark:hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A059] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Dark Mode + Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Book Now Primary CTA */}
            <button
              onClick={() => onOpenBookingModal()}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white bg-gradient-to-r from-[#0D3B2E] via-[#0F4A3A] to-[#C5A059] rounded-lg shadow-sm hover:opacity-95 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            >
              <CalendarCheck className="w-4 h-4 text-amber-300" />
              <span>Book Now</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#FAF9F5] dark:bg-[#0A131F] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto border-l border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-[#0D3B2E] flex items-center justify-center text-amber-300 font-serif font-bold text-base">
                    C
                  </div>
                  <div>
                    <p className="font-serif font-bold text-base text-slate-900 dark:text-white">
                      Classic Royal Hotel
                    </p>
                    <p className="text-[10px] text-slate-500 uppercase">Imota, Lagos</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="mt-6 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.href)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? 'bg-[#C5A059]/15 text-[#C5A059] font-semibold'
                        : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Actions and Quick Info */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#0D3B2E] hover:bg-[#0F4A3A] text-white rounded-lg font-semibold text-sm shadow transition-colors"
              >
                <CalendarCheck className="w-4 h-4 text-amber-300" />
                <span>Book a Room Now</span>
              </button>

              <a
                href={`https://wa.me/${HOTEL_CONTACT.whatsappNumber}?text=Hello%20Classic%20Royal%20Hotel%2C%20I%20would%20like%20to%20make%20an%20enquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium text-xs shadow-sm transition-colors"
              >
                <span>Chat via WhatsApp</span>
              </a>

              <p className="text-center text-xs text-slate-500 dark:text-slate-400 pt-2">
                Imota–Igbokuta Road, Imota, Lagos
                <br />
                {HOTEL_CONTACT.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
