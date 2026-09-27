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
  CheckCircle2, 
  Play, 
  Pause, 
  Volume2, 
  SlidersHorizontal,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import quijoteHeroBg from '../assets/images/quijote_hero_minimalist_bg_1790503664740.jpg';

interface HeroSectionProps {
  onOverviewClick: () => void;
  onCurriculumClick: () => void;
  onPlannerClick?: () => void;
}

export default function HeroSection({ onOverviewClick, onCurriculumClick, onPlannerClick }: HeroSectionProps) {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const [copied, setCopied] = useState(false);
  const [isPlayingSnippet, setIsPlayingSnippet] = useState(false);
  const [activeTab, setActiveTab] = useState<'immersion' | 'talkback' | 'schedule' | 'turnkey'>('immersion');

  const handleCopyCode = () => {
    navigator.clipboard.writeText('RSVP');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const toggleSnippet = () => {
    setIsPlayingSnippet(!isPlayingSnippet);
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#E7E2D8] bg-[#FAF8F5] overflow-hidden">
      
      {/* Minimalist Don Quijote Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.16] mix-blend-multiply"
        style={{
          backgroundImage: `url(${quijoteHeroBg})`,
          backgroundPosition: 'right 20% center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Subtle theatrical vignette gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/60 via-transparent to-[#FAF8F5] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Kicker for Educators */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-sans font-semibold tracking-wider uppercase text-[#7A1C2C] mb-4">
          <span className="flex items-center gap-1.5 bg-[#7A1C2C]/10 px-2.5 py-1 rounded-xs border border-[#7A1C2C]/15">
            <GraduationCap className="w-3.5 h-3.5" />
            National School &amp; University Tour
          </span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="text-stone-700 font-medium">Live Educational Theater in Spanish</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span className="text-stone-500 font-mono text-[11px]">Tour Season 2025–2026</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Editorial Presentation */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Title */}
            <div>
              <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-[3.35rem] font-bold tracking-tight text-[#1C1917] leading-[1.12]">
                Don Quijote en USA: <br />
                <span className="font-garamond italic font-normal text-[#7A1C2C] text-3xl sm:text-5xl lg:text-[3.25rem] leading-[1.1] block mt-1">
                  A Live Theatrical Performance &amp; Educational Experience
                </span>
              </h1>
            </div>

            {/* Exact Adaptation Synopsis Copy */}
            <p className="font-garamond text-xl sm:text-2xl text-stone-800 leading-relaxed italic border-l-3 border-[#7A1C2C] pl-5 py-1 bg-white/40 backdrop-blur-2xs rounded-r-xs">
              &ldquo;Experience an engaging, modern adaptation of Miguel de Cervantes’ timeless classic. Don Quijote en USA brings Spanish literature to life through a dynamic, interactive performance designed to boost language comprehension and celebrate Hispanic Heritage.&rdquo;
            </p>

            {/* Quick Metrics Bar for Educators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-white/90 backdrop-blur-xs border border-[#E7E2D8] rounded-xs shadow-2xs hover:border-[#7A1C2C]/40 transition-colors">
                <div className="flex items-center gap-1.5 text-stone-500 mb-1">
                  <User className="w-3.5 h-3.5 text-[#7A1C2C]" />
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-wider">Starring</span>
                </div>
                <div className="text-sm font-bold text-stone-900 font-serif">Wilderman García</div>
                <div className="text-[10px] text-stone-500">Colombian Actor · Solo Show</div>
              </div>

              <div className="p-3.5 bg-white/90 backdrop-blur-xs border border-[#E7E2D8] rounded-xs shadow-2xs hover:border-[#7A1C2C]/40 transition-colors">
                <div className="flex items-center gap-1.5 text-stone-500 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#7A1C2C]" />
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-wider">Total Time</span>
                </div>
                <div className="text-sm font-bold text-stone-900 font-serif">60 Minutes</div>
                <div className="text-[10px] text-stone-500">45m Show + 15m Tertulia</div>
              </div>

              <div className="p-3.5 bg-white/90 backdrop-blur-xs border border-[#E7E2D8] rounded-xs shadow-2xs col-span-2 sm:col-span-1 hover:border-[#7A1C2C]/40 transition-colors">
                <div className="flex items-center gap-1.5 text-stone-500 mb-1">
                  <Languages className="w-3.5 h-3.5 text-[#7A1C2C]" />
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-wider">Language</span>
                </div>
                <div className="text-sm font-bold text-stone-900 font-serif">100% Spanish</div>
                <div className="text-[10px] text-stone-500">Elementary to University</div>
              </div>
            </div>

            {/* Primary Action Buttons & Interactive Planner Link */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={zeffyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-wine gap-2 text-center text-sm shadow-sm"
              >
                <Ticket className="w-4 h-4" />
                <span>Reserve on Zeffy (Promo: RSVP)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                type="button"
                onClick={onOverviewClick}
                className="btn-outline-refined text-xs"
              >
                Explore Show Overview
              </button>

              <button
                type="button"
                onClick={onCurriculumClick}
                className="btn-outline-refined text-xs text-[#7A1C2C] hover:text-[#58121E]"
              >
                Curriculum Standards
              </button>
            </div>

            {/* Interactive Theatrical Monologue / Audio Preview Bar */}
            <div className="p-3.5 bg-white/95 border border-[#E7E2D8] rounded-xs shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleSnippet}
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isPlayingSnippet 
                      ? 'bg-[#7A1C2C] text-white shadow-sm' 
                      : 'bg-[#7A1C2C]/10 text-[#7A1C2C] hover:bg-[#7A1C2C] hover:text-white'
                  }`}
                  aria-label={isPlayingSnippet ? "Pause preview snippet" : "Listen to theatrical quote preview"}
                >
                  {isPlayingSnippet ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 translate-x-0.5" />
                  )}
                </button>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#7A1C2C]">
                      Theatrical Dialogue Sample
                    </span>
                    {isPlayingSnippet && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 font-sans font-medium animate-pulse">
                        <Volume2 className="w-3 h-3" />
                        Listening mode
                      </span>
                    )}
                  </div>
                  <p className="font-garamond italic text-stone-800 text-sm">
                    &ldquo;¡Sábete, Sancho, que no es un hombre más que otro si no hace más que otro!&rdquo;
                  </p>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-[10px] font-sans text-stone-500 block">
                  Accessible to novice &amp; fluent speakers
                </span>
                <span className="text-[10px] font-mono font-semibold text-stone-700">
                  Physical Gesture + Clear Articulation
                </span>
              </div>
            </div>

            {/* Reassurance Banner for Teachers & Department Heads */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-stone-100/95 border border-stone-200 rounded-xs text-xs font-sans text-stone-700">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>
                  No upfront payment required. Enter promo code <strong className="font-mono text-stone-900 bg-white px-1.5 py-0.5 rounded-xs border border-stone-300">RSVP</strong> at Zeffy checkout.
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-[#7A1C2C] hover:underline cursor-pointer ml-auto"
                title="Copy promo code"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy RSVP Code</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Interactive Educational Theater Dossier Feature Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xs border-2 border-[#7A1C2C]/25 p-6 sm:p-7 rounded-xs shadow-md space-y-5">
              
              <div className="border-b border-stone-100 pb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A1C2C] font-semibold">
                    Curriculum &amp; Production Dossier
                  </span>
                  <span className="text-[10px] font-sans font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded-xs">
                    Interactive Tabs
                  </span>
                </div>
                <h3 className="font-cinzel text-xl font-bold text-stone-900">
                  Why Educators Choose This Show
                </h3>
                <p className="text-xs font-sans text-stone-500 mt-0.5">
                  Select a pillar below to inspect classroom and institutional advantages.
                </p>
              </div>

              {/* Interactive Pillar Selector Tabs */}
              <div className="grid grid-cols-2 gap-1.5 bg-stone-100 p-1 rounded-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('immersion')}
                  className={`py-1.5 px-2 text-xs font-medium rounded-2xs transition-all text-center cursor-pointer ${
                    activeTab === 'immersion'
                      ? 'bg-white text-[#7A1C2C] font-semibold shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  1. Immersion
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('talkback')}
                  className={`py-1.5 px-2 text-xs font-medium rounded-2xs transition-all text-center cursor-pointer ${
                    activeTab === 'talkback'
                      ? 'bg-white text-[#7A1C2C] font-semibold shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  2. Talkback
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('schedule')}
                  className={`py-1.5 px-2 text-xs font-medium rounded-2xs transition-all text-center cursor-pointer ${
                    activeTab === 'schedule'
                      ? 'bg-white text-[#7A1C2C] font-semibold shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  3. Bell Schedule
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('turnkey')}
                  className={`py-1.5 px-2 text-xs font-medium rounded-2xs transition-all text-center cursor-pointer ${
                    activeTab === 'turnkey'
                      ? 'bg-white text-[#7A1C2C] font-semibold shadow-2xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  4. Turnkey Tech
                </button>
              </div>

              {/* Active Tab Content Display with Dynamic Highlighting */}
              <div className="p-4 bg-stone-50 border border-stone-200/80 rounded-xs min-h-[170px] flex flex-col justify-between">
                {activeTab === 'immersion' && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#7A1C2C]">
                      <span className="w-5 h-5 rounded-full bg-[#7A1C2C] text-white flex items-center justify-center text-[10px]">1</span>
                      Authentic Spanish Language Immersion
                    </div>
                    <p className="text-stone-700 text-xs leading-relaxed">
                      Delivered entirely in Spanish with expressive physical theatre and vocal pacing tailored to ensure high comprehension for beginners, AP students, and native speakers alike.
                    </p>
                    <div className="pt-2 text-[11px] font-sans text-stone-500 bg-white p-2 rounded-xs border border-stone-200">
                      <strong className="text-stone-800">Teacher Advantage:</strong> Eliminates textbook fatigue by exposing students to spoken dramatic Spanish in an entertaining, visual context.
                    </div>
                  </div>
                )}

                {activeTab === 'talkback' && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#7A1C2C]">
                      <span className="w-5 h-5 rounded-full bg-[#7A1C2C] text-white flex items-center justify-center text-[10px]">2</span>
                      Interactive Academic Talkback (Tertulia)
                    </div>
                    <p className="text-stone-700 text-xs leading-relaxed">
                      The 15-minute post-show Q&amp;A engages students directly with actor Wilderman García to analyze literary themes, cultural identity, and Cervantes’ legacy.
                    </p>
                    <div className="pt-2 text-[11px] font-sans text-stone-500 bg-white p-2 rounded-xs border border-stone-200">
                      <strong className="text-stone-800">Student Dialogue:</strong> Students actively practice conversational Spanish, asking questions about character motivation and Colombian theatre arts.
                    </div>
                  </div>
                )}

                {activeTab === 'schedule' && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#7A1C2C]">
                      <span className="w-5 h-5 rounded-full bg-[#7A1C2C] text-white flex items-center justify-center text-[10px]">3</span>
                      Fits Standard School Class Periods
                    </div>
                    <p className="text-stone-700 text-xs leading-relaxed">
                      At exactly 60 minutes total (45 min performance + 15 min tertulia), the production easily integrates into typical high school or university class periods without disrupting academic schedules.
                    </p>
                    <div className="pt-2 text-[11px] font-sans text-stone-500 bg-white p-2 rounded-xs border border-stone-200">
                      <strong className="text-stone-800">Schedule Friendly:</strong> Can be scheduled during single class blocks or back-to-back morning assemblies for multiple grade levels.
                    </div>
                  </div>
                )}

                {activeTab === 'turnkey' && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#7A1C2C]">
                      <span className="w-5 h-5 rounded-full bg-[#7A1C2C] text-white flex items-center justify-center text-[10px]">4</span>
                      Zero Technical Burden for Host Venues
                    </div>
                    <p className="text-stone-700 text-xs leading-relaxed">
                      Self-contained solo production adaptable to standard school auditoriums, multi-purpose rooms, cafetoriums, black-box theaters, or university lecture halls.
                    </p>
                    <div className="pt-2 text-[11px] font-sans text-stone-500 bg-white p-2 rounded-xs border border-stone-200">
                      <strong className="text-stone-800">Technical Ease:</strong> Uses general room wash lighting and standard school PA or wireless mic. Fast 20-minute setup.
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-stone-200 text-[10px] text-stone-400 font-mono">
                  <span>Pillar {activeTab === 'immersion' ? '1/4' : activeTab === 'talkback' ? '2/4' : activeTab === 'schedule' ? '3/4' : '4/4'}</span>
                  <span className="text-[#7A1C2C]">Click tabs above to toggle</span>
                </div>
              </div>

              {/* Vendor & Credential Footer in Card */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>Vendor: <strong className="text-stone-800">SAM.gov &amp; RUP PR</strong></span>
                <span className="text-[#7A1C2C] font-sans font-semibold">Teatro for the Soul</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
