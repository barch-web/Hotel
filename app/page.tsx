'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import RoomsSection from '@/components/RoomsSection';
import PoolSection from '@/components/PoolSection';
import EventHallSection from '@/components/EventHallSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import GallerySection from '@/components/GallerySection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import RoomBookingModal from '@/components/RoomBookingModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [bookingModalState, setBookingModalState] = useState<{
    isOpen: boolean;
    roomId?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }>({
    isOpen: false,
  });

  // Hydrate dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('admos_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      queueMicrotask(() => setIsDarkMode(true));
    } else {
      document.documentElement.classList.remove('dark');
      queueMicrotask(() => setIsDarkMode(false));
    }
  }, []);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('admos_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('admos_theme', 'light');
      }
      return next;
    });
  };

  const handleOpenBookingModal = (
    roomId?: string,
    checkIn?: string,
    checkOut?: string,
    guests?: number
  ) => {
    setBookingModalState({
      isOpen: true,
      roomId,
      checkIn,
      checkOut,
      guests,
    });
  };

  const handleCloseBookingModal = () => {
    setBookingModalState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] dark:bg-[#070D14] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* 1. Header */}
      <Header
        onOpenBookingModal={handleOpenBookingModal}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section & Compact Booking Bar */}
        <Hero
          onOpenBookingModal={handleOpenBookingModal}
          onScrollToSection={handleScrollToSection}
        />

        {/* 3. Highlights Strip */}
        <Highlights onScrollToSection={handleScrollToSection} />

        {/* 4. Rooms and Suites */}
        <RoomsSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 5. Swimming Pool */}
        <PoolSection />

        {/* 6. Event Hall */}
        <EventHallSection />

        {/* 7. Amenities */}
        <AmenitiesSection />

        {/* 8. Gallery */}
        <GallerySection />

        {/* 9. About */}
        <AboutSection />

        {/* 10. Testimonials */}
        <TestimonialsSection />

        {/* 11. FAQ */}
        <FaqSection />

        {/* 12. Contact & Location */}
        <ContactSection />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <RoomBookingModal
        isOpen={bookingModalState.isOpen}
        onClose={handleCloseBookingModal}
        preselectedRoomId={bookingModalState.roomId}
        initialCheckIn={bookingModalState.checkIn}
        initialCheckOut={bookingModalState.checkOut}
        initialGuests={bookingModalState.guests}
      />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
