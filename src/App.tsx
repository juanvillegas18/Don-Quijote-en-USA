/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EventOverviewSection from './components/EventOverviewSection';
import SocialAndContactSection from './components/SocialAndContactSection';
import FooterSection from './components/FooterSection';

export default function App() {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-sans selection:bg-[#7A1C2C] selection:text-white flex flex-col antialiased">
      
      {/* 1. Header with direct Zeffy RSVP integration */}
      <Navbar
        onScrollToOverview={() => handleScrollToSection('event-overview')}
        onScrollToCurriculum={() => handleScrollToSection('event-overview')}
        onScrollToBooking={() => handleScrollToSection('booking-contact')}
      />

      <main className="grow">
        {/* 2. Hero: Title, Official Synopsis, Key Specs, Promo Code RSVP & Booking CTA */}
        <HeroSection
          onOverviewClick={() => handleScrollToSection('event-overview')}
          onCurriculumClick={() => handleScrollToSection('event-overview')}
        />

        {/* 3. Comprehensive Event Overview & Standards Alignment for Educators */}
        <EventOverviewSection />

        {/* 4. Booking & Direct Contact (Zeffy Integration, Emails & Official Channels) */}
        <SocialAndContactSection />
      </main>

      {/* 5. Dignified Educational Theater Footer */}
      <FooterSection />

    </div>
  );
}
