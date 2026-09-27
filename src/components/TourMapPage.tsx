/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MapPin, 
  Compass, 
  Globe
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TourMapPageProps {
  onNavigateTab?: (tab: any) => void;
}

export default function TourMapPage({ onNavigateTab }: TourMapPageProps) {
  const { isSpanish } = useLanguage();

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#FCF9F2] min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#9E1B32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header Title & Brief Description Only */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E1B32] bg-rose-100 px-3.5 py-1 rounded-full border border-rose-300 shadow-2xs mb-3">
            <Compass className="w-3.5 h-3.5 text-[#9E1B32]" />
            <span>{isSpanish ? 'Gira Nacional · Don Quijote en USA' : 'National Tour · Don Quixote in USA'}</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            {isSpanish ? (
              <>
                <span className="text-[#1E3A8A]">Mapa de Gira: </span>
                <span className="text-[#9E1B32]">+30 Escuelas y 6 Estados</span>
              </>
            ) : (
              <>
                <span className="text-[#1E3A8A]">Tour Map: </span>
                <span className="text-[#9E1B32]">30+ Schools &amp; 6 States</span>
              </>
            )}
          </h1>

          <p className="font-garamond text-xl sm:text-2xl text-stone-800 mt-3 italic leading-relaxed">
            {isSpanish
              ? 'Hemos visitado más de 30 escuelas en 6 estados: Florida, Georgia, New York, Indiana, Illinois y Puerto Rico.'
              : 'We have visited over 30 schools across 6 states: Florida, Georgia, New York, Indiana, Illinois, and Puerto Rico.'}
          </p>

          <p className="font-sans text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl mx-auto">
            {isSpanish
              ? 'En Florida hemos recorrido Orlando, Kissimmee, Harmony y Clermont, llevando el teatro clásico en vivo a más de 12,000 estudiantes y maestros.'
              : 'In Florida, our tour stops include Orlando, Kissimmee, Harmony, and Clermont, bringing live classical theatre to over 12,000 students and teachers.'}
          </p>
        </div>

        {/* ONLY THE MAP */}
        <div className="bg-white border-3 border-amber-400 rounded-3xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
          
          <div className="relative bg-gradient-to-b from-[#1C1917] via-[#241E1C] to-[#1C1917] rounded-2xl p-4 sm:p-6 text-white border-2 border-stone-800 shadow-inner overflow-hidden">
            
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            {/* Map Top Bar */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>TOUR AS OF TODAY: +30 SCHOOLS &middot; 6 STATES</span>
              </div>
              <div className="text-[11px] font-mono text-stone-300 bg-stone-900/90 px-2.5 py-1 rounded border border-amber-500/30">
                FL &middot; GA &middot; NY &middot; IN &middot; IL &middot; PR
              </div>
            </div>

            {/* SVG TOUR MAP */}
            <div className="relative z-10 w-full overflow-x-auto">
              <svg 
                viewBox="0 0 900 520" 
                className="w-full min-w-[700px] h-auto drop-shadow-2xl select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="floridaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#d97706" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="georgiaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#9e1b32" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="nyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="inGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="ilGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="prGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#0f766e" stopOpacity="0.85" />
                  </linearGradient>

                  <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Continental Base Silhouette */}
                <path
                  d="M 120 110 L 260 110 L 380 120 L 520 130 L 610 110 L 720 100 L 770 120 L 810 170 L 770 230 L 720 280 L 690 320 L 670 410 L 620 440 L 580 370 L 530 380 L 460 380 L 380 430 L 280 420 L 190 360 L 140 280 Z"
                  fill="#262220"
                  stroke="#44403c"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.45"
                />

                {/* Tour Trajectory Lines connecting from Florida */}
                <path d="M 640 400 Q 630 360 620 330" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" opacity="0.85" />
                <path d="M 640 400 Q 720 280 750 160" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" opacity="0.85" />
                <path d="M 640 400 Q 580 300 550 230" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" opacity="0.85" />
                <path d="M 640 400 Q 540 290 510 200" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" opacity="0.85" />
                <path d="M 650 420 Q 720 450 780 440" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="3 3" opacity="0.85" />

                {/* 1. ILLINOIS */}
                <g>
                  <rect x="490" y="160" width="46" height="75" rx="6" fill="url(#ilGrad)" stroke="#c084fc" strokeWidth="1.5" />
                  <circle cx="515" cy="180" r="5" fill="#f8fafc" />
                  <circle cx="515" cy="180" r="9" fill="#c084fc" opacity="0.4" />
                  <text x="515" y="152" fill="#e9d5ff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                    Illinois
                  </text>
                  <text x="515" y="212" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    Chicago
                  </text>
                </g>

                {/* 2. INDIANA */}
                <g>
                  <rect x="545" y="180" width="42" height="70" rx="6" fill="url(#inGrad)" stroke="#34d399" strokeWidth="1.5" />
                  <circle cx="566" cy="210" r="5" fill="#f8fafc" />
                  <text x="566" y="172" fill="#a7f3d0" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                    Indiana
                  </text>
                  <text x="566" y="235" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    Indianapolis
                  </text>
                </g>

                {/* 3. NEW YORK */}
                <g>
                  <path d="M 720 120 L 785 110 L 775 180 L 740 170 Z" fill="url(#nyGrad)" stroke="#60a5fa" strokeWidth="1.5" />
                  <circle cx="755" cy="155" r="5.5" fill="#ffffff" />
                  <circle cx="755" cy="155" r="10" fill="#60a5fa" opacity="0.4" />
                  <text x="755" y="100" fill="#93c5fd" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                    New York
                  </text>
                  <text x="755" y="140" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    NYC
                  </text>
                </g>

                {/* 4. GEORGIA */}
                <g>
                  <polygon points="595,290 655,290 645,355 605,350" fill="url(#georgiaGrad)" stroke="#f43f5e" strokeWidth="1.5" />
                  <circle cx="625" cy="315" r="5" fill="#ffffff" />
                  <text x="625" y="280" fill="#fecdd3" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                    Georgia
                  </text>
                  <text x="625" y="335" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    Atlanta
                  </text>
                </g>

                {/* 5. FLORIDA (ORLANDO, KISSIMMEE, HARMONY, CLERMONT) */}
                <g>
                  <path 
                    d="M 605 350 L 665 355 L 675 425 L 650 475 L 635 440 L 610 390 Z" 
                    fill="url(#floridaGrad)" 
                    stroke="#f59e0b" 
                    strokeWidth="2.5" 
                    filter="url(#mapGlow)"
                  />
                  
                  {/* Orlando Pin */}
                  <g>
                    <circle cx="645" cy="390" r="5" fill="#ffffff" stroke="#9e1b32" strokeWidth="2" />
                    <text x="645" y="378" fill="#fef08a" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                      Orlando
                    </text>
                  </g>

                  {/* Kissimmee Pin */}
                  <g>
                    <circle cx="642" cy="405" r="4.5" fill="#fef08a" stroke="#78350f" strokeWidth="1.5" />
                    <text x="688" y="405" fill="#fed7aa" fontSize="10" fontWeight="bold" textAnchor="start" fontFamily="sans-serif">
                      Kissimmee
                    </text>
                  </g>

                  {/* Harmony Pin */}
                  <g>
                    <circle cx="654" cy="418" r="4.5" fill="#fef08a" stroke="#78350f" strokeWidth="1.5" />
                    <text x="688" y="420" fill="#fed7aa" fontSize="10" fontWeight="bold" textAnchor="start" fontFamily="sans-serif">
                      Harmony
                    </text>
                  </g>

                  {/* Clermont Pin */}
                  <g>
                    <circle cx="632" cy="395" r="4.5" fill="#fef08a" stroke="#78350f" strokeWidth="1.5" />
                    <text x="592" y="405" fill="#fed7aa" fontSize="10" fontWeight="bold" textAnchor="end" fontFamily="sans-serif">
                      Clermont
                    </text>
                  </g>

                  {/* Florida Tag */}
                  <rect x="622" y="485" width="100" height="24" rx="4" fill="#78350f" stroke="#f59e0b" strokeWidth="1" />
                  <text x="672" y="501" fill="#fef08a" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    FLORIDA
                  </text>
                </g>

                {/* 6. PUERTO RICO (INSET) */}
                <g>
                  <rect x="740" y="400" width="140" height="95" rx="8" fill="#18181b" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="810" y="420" fill="#5eead4" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                    PUERTO RICO
                  </text>
                  
                  <rect x="760" y="435" width="85" height="35" rx="6" fill="url(#prGrad)" stroke="#2dd4bf" strokeWidth="1.5" />
                  <circle cx="810" cy="445" r="5" fill="#ffffff" />
                  <text x="810" y="460" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                    San Juan & Metro
                  </text>
                  <text x="810" y="485" fill="#ccfbf1" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                    5+ Escuelas
                  </text>
                </g>
              </svg>
            </div>

            {/* Bottom Caption Bar */}
            <div className="relative z-10 pt-3 mt-2 border-t border-stone-800 flex items-center justify-between text-xs text-stone-300">
              <span className="font-mono text-amber-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{isSpanish ? 'Florida: Orlando, Kissimmee, Harmony, Clermont' : 'Florida: Orlando, Kissimmee, Harmony, Clermont'}</span>
              </span>
              <span className="font-mono text-stone-400 text-[11px]">
                {isSpanish ? '+30 Escuelas Visitadas' : '+30 Schools Visited'}
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
