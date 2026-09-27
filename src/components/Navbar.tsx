/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ExternalLink, Ticket, GraduationCap, Mail, BookOpen } from 'lucide-react';

interface NavbarProps {
  onScrollToOverview: () => void;
  onScrollToCurriculum: () => void;
  onScrollToBooking: () => void;
}

export default function Navbar({
  onScrollToOverview,
  onScrollToCurriculum,
  onScrollToBooking
}: NavbarProps) {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E7E2D8] shadow-xs py-3'
          : 'bg-[#FAF8F5] py-4 border-b border-[#E7E2D8]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group text-left">
          <div className="w-8 h-8 rounded-xs bg-[#7A1C2C] text-white flex items-center justify-center font-cinzel font-bold text-sm shadow-xs group-hover:bg-[#631422] transition-colors">
            DQ
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-base sm:text-lg font-bold tracking-tight text-[#1C1917] group-hover:text-[#7A1C2C] transition-colors leading-tight">
              Don Quijote en USA
            </span>
            <span className="text-[10px] font-sans font-medium text-[#7A1C2C] tracking-wider uppercase">
              Educational Theater in Spanish
            </span>
          </div>
        </a>

        {/* English Navigation for Educators */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={onScrollToOverview}
            className="text-xs font-sans font-medium text-stone-700 hover:text-[#7A1C2C] transition-colors cursor-pointer hidden md:inline-flex"
          >
            Show Overview
          </button>

          <button
            type="button"
            onClick={onScrollToCurriculum}
            className="text-xs font-sans font-medium text-stone-700 hover:text-[#7A1C2C] transition-colors cursor-pointer hidden sm:inline-flex items-center gap-1.5"
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#7A1C2C]" />
            <span>Standards & Curriculum</span>
          </button>

          <button
            type="button"
            onClick={onScrollToBooking}
            className="text-xs font-sans font-medium text-stone-700 hover:text-[#7A1C2C] transition-colors cursor-pointer hidden lg:inline-flex"
          >
            Booking & Contact
          </button>

          {/* Official Zeffy RSVP Button */}
          <a
            href={zeffyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-wine text-xs py-2 px-3.5 sm:px-4.5 flex items-center gap-1.5 shadow-xs"
          >
            <Ticket className="w-3.5 h-3.5" />
            <span>RSVP on Zeffy</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>

      </div>
    </header>
  );
}
