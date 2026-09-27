/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  ExternalLink, 
  User, 
  Clock, 
  Languages, 
  Ticket, 
  GraduationCap, 
  Feather, 
  Shield, 
  Calculator, 
  Send, 
  Calendar, 
  Sparkles,
  MapPin
} from 'lucide-react';
import quijoteHeroBg from '../assets/images/quijote_hero_minimalist_bg_1790503664740.jpg';
import quijoteMedievalBanner from '../assets/images/quijote_medieval_banner_1790532277323.jpg';
import { ActiveTab } from './Navbar';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onNavigateTab: (tab: ActiveTab) => void;
}

export default function HeroSection({ onNavigateTab }: HeroSectionProps) {
  const { isSpanish } = useLanguage();
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";

  return (
    <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 border-b-2 border-amber-300/80 bg-[#FCF9F2] overflow-hidden">
      
      {/* Theatrical Vignettes */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-20 right-10 w-[28rem] h-[28rem] bg-rose-600/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Medieval Background */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.16] mix-blend-multiply"
        style={{
          backgroundImage: `url(${quijoteHeroBg})`,
          backgroundPosition: 'right 15% center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FCF9F2] via-[#FCF9F2]/90 to-[#FCF9F2]/65 pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase mb-5">
          <span className="flex items-center gap-1.5 bg-[#9E1B32] text-white px-3 py-1 rounded-full shadow-xs">
            <Feather className="w-3.5 h-3.5 text-amber-300" />
            <span>{isSpanish ? 'Gira Nacional 2026–2027' : 'National Tour 2026–2027'}</span>
          </span>

          <button
            type="button"
            onClick={() => onNavigateTab('tour')}
            className="flex items-center gap-1.5 bg-rose-100 hover:bg-rose-200 text-rose-950 border border-rose-300 px-3 py-1 rounded-full font-serif font-bold transition-colors cursor-pointer shadow-2xs"
          >
            <MapPin className="w-3.5 h-3.5 text-[#9E1B32]" />
            <span>{isSpanish ? 'Gira: +30 Escuelas · 6 Estados' : 'Tour: 30+ Schools · 6 States'}</span>
          </button>

          <span className="flex items-center gap-1.5 bg-amber-100 text-amber-950 border border-amber-300 px-3 py-1 rounded-full font-serif font-bold">
            <Calendar className="w-3.5 h-3.5 text-[#B91C1C]" />
            <span>{isSpanish ? 'Funciones desde Enero 2027' : 'Shows Starting January 2027'}</span>
          </span>
          <span className="bg-emerald-100 text-emerald-950 border border-emerald-300 font-mono text-[11px] px-2.5 py-1 rounded-full font-bold">
            EIN: 81-4825762
          </span>
        </div>

        {/* Hero Grid: Left Content (7 cols) + Right Single Official Flyer (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Main Title & Content (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            <div>
              <div className="text-[11px] font-mono font-bold tracking-widest text-[#1E3A8A] uppercase mb-1.5">
                {isSpanish ? 'Teatro Escolar y Universitario en Español' : 'School & University Spanish Theatre'}
              </div>
              
              <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-[3.2rem] font-bold tracking-tight leading-[1.12]">
                <span className="text-[#1E3A8A]">Don Quijote </span>
                <span className="text-[#B91C1C]">en USA</span>
                <span className="font-garamond italic font-normal text-[#9E1B32] text-2xl sm:text-4xl lg:text-[2.4rem] leading-[1.15] block mt-1">
                  {isSpanish ? 'Teatro y Tertulia Escolar en Vivo' : 'Live Theatre & School Student Q&A'}
                </span>
              </h1>
            </div>

            {/* Description Quote Frame */}
            <div className="p-4 sm:p-5 bg-white/95 border-l-4 border-[#9E1B32] rounded-r-xl shadow-xs border border-amber-300/80">
              <p className="font-garamond text-lg sm:text-xl text-stone-900 leading-relaxed italic">
                {isSpanish
                  ? '«Una comedia teatral unipersonal e inmersiva adaptada de Cervantes. Don Quijote cobra vida en escena para potenciar la comprensión del español, el pensamiento crítico y el orgullo por la cultura hispana.»'
                  : '“An immersive solo theatrical comedy adapted from Cervantes. Don Quixote comes alive on stage to inspire Spanish language comprehension, critical thinking, and Hispanic cultural pride.”'}
              </p>
              <div className="mt-2.5 pt-2 border-t border-amber-200/80 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-600 font-sans">
                <span className="font-medium text-stone-800">
                  {isSpanish ? 'Wilderman García (Actor) · Gabriel Villegas (Dramaturgia)' : 'Wilderman García (Actor) · Gabriel Villegas (Playwright)'}
                </span>
                <span className="font-mono text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 text-[11px]">
                  {isSpanish ? 'Código Zeffy: RSVP ($0 anticipo)' : 'Zeffy Code: RSVP ($0 down)'}
                </span>
              </div>
            </div>

            {/* 3 Core Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div 
                onClick={() => onNavigateTab('about')}
                className="p-3 bg-white border border-rose-300 rounded-xl shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <div className="flex items-center gap-1.5 text-[#9E1B32] mb-0.5">
                  <User className="w-3.5 h-3.5 text-[#B91C1C]" />
                  <span className="text-[10px] font-sans font-bold uppercase">{isSpanish ? 'Actor' : 'Cast'}</span>
                </div>
                <div className="text-sm font-bold text-stone-900 font-serif">Wilderman García</div>
                <div className="text-[11px] text-[#9E1B32] font-medium">{isSpanish ? 'Monólogo Unipersonal' : 'Solo Theatrical Show'}</div>
              </div>

              <div className="p-3 bg-white border border-blue-300 rounded-xl shadow-2xs">
                <div className="flex items-center gap-1.5 text-[#1E3A8A] mb-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#1E40AF]" />
                  <span className="text-[10px] font-sans font-bold uppercase">{isSpanish ? 'Duración' : 'Runtime'}</span>
                </div>
                <div className="text-sm font-bold text-stone-900 font-serif">60 {isSpanish ? 'Minutos' : 'Minutes'}</div>
                <div className="text-[11px] text-[#1E3A8A] font-medium">{isSpanish ? '45m Obra + 15m Tertulia' : '45m Play + 15m Q&A'}</div>
              </div>

              <div className="p-3 bg-white border border-emerald-300 rounded-xl shadow-2xs">
                <div className="flex items-center gap-1.5 text-emerald-800 mb-0.5">
                  <Languages className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[10px] font-sans font-bold uppercase">{isSpanish ? 'Idioma' : 'Language'}</span>
                </div>
                <div className="text-sm font-bold text-stone-900 font-serif">100% {isSpanish ? 'Español' : 'Spanish'}</div>
                <div className="text-[11px] text-emerald-900 font-medium">K–12 &amp; {isSpanish ? 'Universidad' : 'College'}</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href={zeffyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-wine gap-2 text-center text-xs sm:text-sm shadow-md font-bold py-2.5 px-5 sm:px-6"
              >
                <Ticket className="w-4 h-4 text-amber-300" />
                <span>{isSpanish ? 'Reservar en Zeffy (Promo: RSVP)' : 'Book Date on Zeffy (Promo: RSVP)'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-90" />
              </a>

              <button
                type="button"
                onClick={() => onNavigateTab('planner')}
                className="btn-gold-accent text-xs font-bold py-2.5 px-4"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>{isSpanish ? 'Planificador Escolar' : 'Assembly Planner'}</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab('standards')}
                className="btn-blue-accent text-xs font-bold py-2.5 px-4"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{isSpanish ? 'Estándares ACTFL / AP' : 'ACTFL & AP Standards'}</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigateTab('email-generator')}
                className="btn-outline-refined text-xs font-bold py-2.5 px-4 flex items-center gap-1.5 bg-white text-[#9E1B32] border-[#9E1B32]"
              >
                <Send className="w-3.5 h-3.5 text-[#9E1B32]" />
                <span>{isSpanish ? 'Email para Directores' : 'Email to Principal'}</span>
              </button>
            </div>

            {/* Quick PO Info */}
            <div className="flex items-center gap-2 text-xs text-stone-600 font-sans pt-1">
              <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>{isSpanish ? 'Aceptamos Órdenes de Compra (PO)' : 'We Accept District Purchase Orders (POs)'}</strong> {isSpanish ? 'y Fondos Federales Título I, II, III y IV.' : 'and Federal Title I, II, III, & IV funds.'}
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: The ONLY Official Flyer Location (5 cols) */}
          <div className="lg:col-span-5 space-y-3 relative">
            {/* Magical golden ambient glow behind the artwork */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-amber-500/25 via-rose-500/20 to-amber-300/30 rounded-3xl blur-2xl -z-10 pointer-events-none animate-magic-glow" />

            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/90 magic-gold-aura bg-[#1C1917] p-2 group transition-all duration-500 hover:border-amber-300">
              
              <a 
                href="https://postimg.cc/XrF9vqpV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative rounded-xl overflow-hidden border border-amber-300/50 bg-black group-hover:border-amber-400 transition-colors cursor-pointer"
                title={isSpanish ? "Haga clic para ver el Flyer Oficial en PostImg" : "Click to view Official Flyer on PostImg"}
              >
                <img 
                  src="https://i.postimg.cc/YtMP21y8/IMG-0941.jpg" 
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = '1';
                      target.src = 'https://i.postimg.cc/Dwp6Bbhb/IMG-0941.jpg';
                    } else if (target.dataset.triedFallback === '1') {
                      target.dataset.triedFallback = '2';
                      target.src = quijoteMedievalBanner;
                    }
                  }}
                  alt="Official Flyer - Don Quijote en USA" 
                  className="w-full h-auto object-cover max-h-[460px] filter brightness-98 group-hover:scale-102 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 backdrop-blur-xs text-amber-300 px-3 py-1 rounded-full border border-amber-400/70 shadow-lg">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{isSpanish ? 'Dramaturgia Clásica' : 'Classical Staging'}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-[#9E1B32]/95 text-white px-2.5 py-1 rounded-full border border-amber-300/50 shadow-lg">
                    <span>{isSpanish ? 'Temporada Académica' : 'Academic Season'}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>

                {/* Caption correlated with image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                  <div className="flex items-center justify-between text-xs font-mono text-amber-300 mb-0.5">
                    <span>Wilderman García</span>
                    <span className="text-[10px] bg-amber-400/20 px-2 py-0.5 rounded border border-amber-300/40 font-bold">
                      {isSpanish ? 'Don Quijote en Escena' : 'Don Quixote on Stage'}
                    </span>
                  </div>
                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-white flex items-center justify-between">
                    <span>{isSpanish ? 'La Obra Teatral en Vivo' : 'The Live Theatrical Performance'}</span>
                    <span className="text-xs font-sans font-normal text-amber-300 underline group-hover:text-white flex items-center gap-1">
                      PostImg HD &rarr;
                    </span>
                  </h3>
                  <p className="font-sans text-xs text-stone-300 mt-0.5">
                    {isSpanish
                      ? 'Monólogo dinámico en español y tertulia interactiva con los estudiantes · Teatro for the Soul Inc'
                      : 'Dynamic solo performance in Spanish with live student talkback · Teatro for the Soul Inc'}
                  </p>
                </div>
              </a>

              <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-[#9E1B32] to-[#1E3A8A] rounded-b-md mt-1" />
            </div>

            {/* Single Credential Badge */}
            <div className="p-3 bg-white border border-amber-300 rounded-xl shadow-2xs flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-[#9E1B32] font-bold">Teatro for the Soul Inc</div>
                <div className="text-xs font-serif font-bold text-stone-900 leading-tight">Organización Artística Educativa</div>
              </div>
              <div className="text-[11px] font-mono text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-300">
                EIN: 81-4825762
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
