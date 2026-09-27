/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ExternalLink, 
  User, 
  Clock, 
  Languages, 
  Ticket, 
  Sparkles, 
  GraduationCap, 
  Copy, 
  Check, 
  Play, 
  Pause, 
  Volume2, 
  Feather,
  Shield,
  HelpCircle,
  Calculator,
  ChevronRight,
  BookOpen,
  Send
} from 'lucide-react';
import quijoteHeroBg from '../assets/images/quijote_hero_minimalist_bg_1790503664740.jpg';
import { ActiveTab } from './Navbar';

interface HeroSectionProps {
  onNavigateTab: (tab: ActiveTab) => void;
}

export default function HeroSection({ onNavigateTab }: HeroSectionProps) {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const [copiedCode, setCopiedCode] = useState(false);
  const [isPlayingSnippet, setIsPlayingSnippet] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('RSVP');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2200);
  };

  const toggleSnippet = () => {
    setIsPlayingSnippet(!isPlayingSnippet);
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 border-b-2 border-amber-300/80 bg-[#FCF9F2] overflow-hidden">
      
      {/* Medieval Spanish Colorful Theatrical Spotlights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/25 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-20 right-10 w-[30rem] h-[30rem] bg-rose-500/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Minimalist Don Quijote Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.22] mix-blend-multiply"
        style={{
          backgroundImage: `url(${quijoteHeroBg})`,
          backgroundPosition: 'right 20% center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Medieval Parchment Vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FCF9F2] via-[#FCF9F2]/85 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F2]/70 via-transparent to-[#FCF9F2] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Medieval Chivalric Kicker */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-sans font-semibold tracking-wider uppercase mb-5">
          <span className="flex items-center gap-1.5 bg-gradient-to-r from-[#9E1B32] via-[#B91C1C] to-[#C22D47] text-white px-3.5 py-1 rounded-full shadow-xs border border-amber-400/50">
            <Feather className="w-3.5 h-3.5 text-amber-300" />
            <span>El Ingenioso Hidalgo · National Tour 2025–2026</span>
          </span>
          <span className="flex items-center gap-1 bg-amber-100 text-amber-950 border border-amber-300 px-3 py-1 rounded-full font-serif font-bold">
            <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
            <span>US K–12 &amp; University Spanish Departments</span>
          </span>
          <span className="bg-emerald-100 text-emerald-900 border border-emerald-300 font-mono text-[11px] px-2.5 py-1 rounded-full font-bold">
            EIN: 81-4825762
          </span>
        </div>

        {/* Main Hero Header */}
        <div className="max-w-4xl space-y-6">
          
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest text-amber-800 uppercase mb-2">
              <span className="w-8 h-0.5 bg-amber-500 inline-block"></span>
              <span>Live Educational Theater in Spanish</span>
            </div>
            
            <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-stone-900 leading-[1.12]">
              <span className="bg-gradient-to-r from-[#9E1B32] via-[#C22D47] to-[#D97706] bg-clip-text text-transparent">
                Don Quijote en USA:
              </span>
              <br />
              <span className="font-garamond italic font-normal text-[#9E1B32] text-3xl sm:text-5xl lg:text-[3.35rem] leading-[1.1] block mt-1">
                A Live Theatrical Performance &amp; Educational Experience
              </span>
            </h1>
          </div>

          {/* Official Adaptation Synopsis in Illuminated Medieval Frame */}
          <div className="relative p-5 sm:p-6 bg-gradient-to-r from-amber-50 via-rose-50/60 to-white border-l-4 border-[#9E1B32] rounded-r-2xl shadow-xs border border-amber-300/80">
            <p className="font-garamond text-xl sm:text-2xl text-stone-900 leading-relaxed italic">
              &ldquo;Experience an engaging, modern adaptation of Miguel de Cervantes’ timeless classic. Don Quijote en USA brings Spanish literature to life through a dynamic, interactive performance designed to boost language comprehension and celebrate Hispanic Heritage.&rdquo;
            </p>
            <div className="mt-3 pt-2.5 border-t border-amber-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 font-sans">
              <span className="font-serif italic text-amber-900 font-medium">
                Starring Colombian actor Wilderman García · Produced by Teatro for the Soul Inc
              </span>
              <span className="font-mono text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300">
                EIN: 81-4825762
              </span>
            </div>
          </div>

          {/* 3 Core Theatrical Pillars in Vibrant Jewel Tones */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
            
            {/* 1. Cast: Warm Gold */}
            <div 
              onClick={() => onNavigateTab('about')}
              className="p-4 bg-gradient-to-br from-amber-50 via-white to-amber-50/30 border-2 border-amber-300 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer group"
              title="Click to view full biography"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 text-amber-800">
                  <User className="w-4 h-4 text-amber-600" />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Cast &amp; Staging</span>
                </div>
                <span className="text-[9px] font-mono text-amber-800 underline font-bold group-hover:text-[#9E1B32]">View Bio &rarr;</span>
              </div>
              <div className="text-base font-bold text-stone-900 font-serif">Wilderman García</div>
              <div className="text-xs text-amber-900 font-medium">Colombian Actor · Madrid Film Awards</div>
            </div>

            {/* 2. Runtime: Royal Blue */}
            <div className="p-4 bg-gradient-to-br from-blue-50 via-white to-blue-50/30 border-2 border-blue-300 rounded-xl shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center gap-1.5 text-blue-800 mb-1">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Runtime &amp; Bell Fit</span>
              </div>
              <div className="text-base font-bold text-stone-900 font-serif">60 Minutes Total</div>
              <div className="text-xs text-blue-900 font-medium">45m Show + 15m Academic Tertulia</div>
            </div>

            {/* 3. Immersion: Emerald */}
            <div className="p-4 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30 border-2 border-emerald-300 rounded-xl shadow-xs hover:shadow-md transition-all">
              <div className="flex items-center gap-1.5 text-emerald-800 mb-1">
                <Languages className="w-4 h-4 text-emerald-600" />
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Language &amp; Level</span>
              </div>
              <div className="text-base font-bold text-stone-900 font-serif">100% Spanish</div>
              <div className="text-xs text-emerald-900 font-medium">Elementary to University (K–16)</div>
            </div>

          </div>

          {/* Primary Call to Action & Navigation Pills */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={zeffyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-wine gap-2 text-center text-sm shadow-md font-bold py-3 px-6"
            >
              <Ticket className="w-4 h-4 text-amber-300" />
              <span>Reserve Performance Date on Zeffy (Promo: RSVP)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-90" />
            </a>

            <button
              type="button"
              onClick={() => onNavigateTab('standards')}
              className="btn-blue-accent text-xs font-bold py-3"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Standards &amp; AP Alignment</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigateTab('planner')}
              className="btn-gold-accent text-xs font-bold py-3"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Assembly Planner &amp; Proposal</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigateTab('email-generator')}
              className="btn-outline-refined text-xs font-bold py-3 flex items-center justify-center gap-1.5 bg-white"
            >
              <Send className="w-3.5 h-3.5 text-[#9E1B32]" />
              <span>Generar Email a Docentes</span>
            </button>
          </div>

          {/* Interactive Dialogue Preview Sample Bar */}
          <div className="p-4 bg-gradient-to-r from-amber-50 via-rose-50/70 to-purple-50/80 border-2 border-amber-300 rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleSnippet}
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                  isPlayingSnippet 
                    ? 'bg-gradient-to-r from-[#9E1B32] to-[#B91C1C] text-white shadow-md scale-105' 
                    : 'bg-white text-[#9E1B32] border-2 border-[#9E1B32] hover:bg-[#9E1B32] hover:text-white shadow-xs'
                }`}
                aria-label={isPlayingSnippet ? "Pause preview snippet" : "Listen to theatrical quote preview"}
              >
                {isPlayingSnippet ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 translate-x-0.5 text-amber-500 fill-amber-500" />
                )}
              </button>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9E1B32]">
                    Theatrical Dialogue Sample
                  </span>
                  {isPlayingSnippet ? (
                    <span className="inline-flex items-center gap-1.5 text-[10px] text-emerald-800 font-sans font-bold bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                      <Volume2 className="w-3 h-3 text-emerald-600 animate-pulse" />
                      Listening mode
                    </span>
                  ) : (
                    <span className="text-[10px] text-amber-800 font-medium bg-amber-100 px-2 py-0.5 rounded-full border border-amber-300">
                      Click to preview
                    </span>
                  )}
                </div>
                <p className="font-garamond italic text-stone-900 text-sm font-semibold mt-0.5">
                  &ldquo;¡Sábete, Sancho, que no es un hombre más que otro si no hace más que otro!&rdquo;
                </p>
              </div>
            </div>

            {/* Colorful Bouncing Soundwave Equalizer */}
            <div className="flex items-center gap-1 shrink-0 self-end sm:self-center">
              <span className={`w-1 rounded-full bg-rose-500 ${isPlayingSnippet ? 'h-6 animate-bounce' : 'h-3'}`}></span>
              <span className={`w-1 rounded-full bg-amber-500 ${isPlayingSnippet ? 'h-8 animate-bounce delay-75' : 'h-4'}`}></span>
              <span className={`w-1 rounded-full bg-emerald-500 ${isPlayingSnippet ? 'h-5 animate-bounce delay-150' : 'h-2'}`}></span>
              <span className={`w-1 rounded-full bg-blue-500 ${isPlayingSnippet ? 'h-7 animate-bounce delay-100' : 'h-4'}`}></span>
              <span className={`w-1 rounded-full bg-purple-500 ${isPlayingSnippet ? 'h-4 animate-bounce delay-200' : 'h-3'}`}></span>
            </div>
          </div>

          {/* Zero-Cost Booking Banner with Promo Code RSVP */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border-2 border-emerald-300 rounded-xl text-xs font-sans text-emerald-950 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>
                Zero upfront payment required for schools. Enter promo code <strong className="font-mono text-stone-950 bg-white px-2 py-0.5 rounded-md border border-emerald-300 font-bold shadow-2xs">RSVP</strong> at Zeffy checkout.
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 hover:text-emerald-950 bg-white px-2.5 py-1 rounded-md border border-emerald-300 shadow-2xs cursor-pointer ml-auto"
              title="Copy promo code"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Copy RSVP Code</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
