/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Feather, Compass, Sparkles, BookOpen, Clock, Globe2, ShieldCheck, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreSelection: () => void;
}

export default function HeroSection({ onExploreSelection }: HeroSectionProps) {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden parchment-bg border-b-4 border-[#C89D35]">
      
      {/* Background Decorative Woodcut & Filigree Accents */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#701A27_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Golden Age subtle watermark sunburst & windmill aesthetic */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full border-[1px] border-[#C89D35]/20 pointer-events-none opacity-40 -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full border-[1px] border-[#701A27]/15 pointer-events-none opacity-30 -ml-16 -mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heraldic Ribbon / Official Certification Stamp */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-[#701A27] text-[#F0D38D] px-4 py-1.5 rounded-sm border-2 border-[#C89D35] shadow-md">
            <span className="text-[10px] sm:text-xs font-serif font-black uppercase tracking-[0.2em]">
              ⚜️ Obra de Teatro Académico para Todos los Niveles: Elemental, Intermedia, Superior & Universidad
            </span>
          </div>
        </div>

        {/* Central Masterpiece Title Box */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Main Title with Golden Age Ornamentation */}
          <div className="relative inline-block px-4 py-2">
            <div className="corner-bracket-tl" />
            <div className="corner-bracket-tr" />
            <div className="corner-bracket-bl" />
            <div className="corner-bracket-br" />

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-[#2B170A] tracking-tight uppercase leading-[1.05] drop-shadow-sm">
              Don Quijote <span className="text-[#701A27]">en USA</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl md:text-3xl font-serif italic text-[#4A2E18] font-semibold tracking-wide max-w-3xl mx-auto leading-relaxed">
            « Unipersonal de Teatro Educativo y Experiencia Académica en Español »
          </p>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 py-2">
            <div className="w-16 sm:w-28 h-[1.5px] bg-gradient-to-r from-transparent via-[#C89D35] to-[#C89D35]" />
            <div className="text-[#C89D35] font-serif text-sm">✦ ❦ ✦</div>
            <div className="w-16 sm:w-28 h-[1.5px] bg-gradient-to-l from-transparent via-[#C89D35] to-[#C89D35]" />
          </div>

          {/* Description & Mission for Educators */}
          <p className="text-sm sm:text-base text-[#3B2314]/90 font-sans max-w-2xl mx-auto leading-relaxed font-normal">
            Una apasionante travesía temporal donde el hidalgo de La Mancha despierta en el siglo XXI en los Estados Unidos. Diseñada para despertar la fascinación por la literatura del Siglo de Oro, enriquecer el currículo de español y conectar la herencia hispana con los desafíos contemporáneos.
          </p>

          {/* Key Production Details Badges */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 pt-2">
            <div className="bg-[#FAF6EE] border border-[#C89D35] px-3.5 py-1.5 rounded-sm text-xs font-serif text-[#3B2314] shadow-sm flex items-center gap-1.5">
              <span className="font-bold text-[#701A27]">Dramaturgia:</span> Gabriel Villegas
            </div>
            <div className="bg-[#FAF6EE] border border-[#C89D35] px-3.5 py-1.5 rounded-sm text-xs font-serif text-[#3B2314] shadow-sm flex items-center gap-1.5">
              <span className="font-bold text-[#701A27]">Actor:</span> Wilderman García
            </div>
            <div className="bg-[#FAF6EE] border border-[#C89D35] px-3.5 py-1.5 rounded-sm text-xs font-serif text-[#3B2314] shadow-sm flex items-center gap-1.5">
              <span className="font-bold text-[#701A27]">Producción:</span> Teatro for the Soul
            </div>
          </div>

          {/* Fast Fact Pill Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4 text-left">
            <div className="bg-[#FAF8F1] border-2 border-[#C89D35]/30 p-3 rounded-sm shadow-xs flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#701A27]/10 flex items-center justify-center text-[#701A27] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block">Duración</span>
                <span className="text-xs font-serif font-bold text-[#2B170A]">60 Minutos</span>
              </div>
            </div>

            <div className="bg-[#FAF8F1] border-2 border-[#C89D35]/30 p-3 rounded-sm shadow-xs flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#701A27]/10 flex items-center justify-center text-[#701A27] shrink-0">
                <Globe2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block">Idioma</span>
                <span className="text-xs font-serif font-bold text-[#2B170A]">100% Español</span>
              </div>
            </div>

            <div className="bg-[#FAF8F1] border-2 border-[#C89D35]/30 p-3 rounded-sm shadow-xs flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#701A27]/10 flex items-center justify-center text-[#701A27] shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block">Montaje</span>
                <span className="text-xs font-serif font-bold text-[#2B170A]">100% Adaptable</span>
              </div>
            </div>

            <div className="bg-[#FAF8F1] border-2 border-[#C89D35]/30 p-3 rounded-sm shadow-xs flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#701A27]/10 flex items-center justify-center text-[#701A27] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block">Nivel Escolar</span>
                <span className="text-xs font-serif font-bold text-[#2B170A]">Todos los Niveles</span>
              </div>
            </div>
          </div>

          {/* Primary Calls to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              href="#guia-formatos"
              onClick={onExploreSelection}
              className="w-full sm:w-auto bg-[#701A27] hover:bg-[#8B2233] text-[#FAF6EE] font-serif font-bold text-sm sm:text-base uppercase tracking-widest px-8 py-4 rounded-sm border-2 border-[#C89D35] shadow-lg flex items-center justify-center gap-3 transform transition-all hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
              id="hero-main-cta"
            >
              <Feather className="w-5 h-5 text-[#F0D38D]" />
              <span>Seleccionar Formato y Taller</span>
            </a>

            <a
              href="#sinopsis"
              className="w-full sm:w-auto bg-[#FAF8F1] hover:bg-[#F3ECE0] text-[#3B2314] font-serif font-bold text-sm sm:text-base uppercase tracking-widest px-7 py-4 rounded-sm border-2 border-[#3B2314]/30 shadow-sm flex items-center justify-center gap-2 transition-all hover:border-[#701A27]"
              id="hero-synopsis-btn"
            >
              <BookOpen className="w-4 h-4 text-[#701A27]" />
              <span>Leer Sinopsis</span>
            </a>

            <a
              href="#certificados"
              className="w-full sm:w-auto bg-[#FAF6EE] hover:bg-[#F4EEDF] text-[#701A27] font-serif font-bold text-sm sm:text-base uppercase tracking-widest px-6 py-4 rounded-sm border-2 border-[#C89D35] shadow-sm flex items-center justify-center gap-2 transition-all"
              id="hero-cert-btn"
            >
              <ShieldCheck className="w-4 h-4 text-[#2E6F40]" />
              <span>Validar Certificados</span>
            </a>
          </div>

          {/* Micro trust note */}
          <p className="text-[11px] text-[#6B5E55] font-serif italic pt-2">
            Disponible para temporadas académicas, Mes de la Herencia Hispana, semanas cervantinas y eventos especiales en todo Estados Unidos.
          </p>

        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="text-center pt-8">
        <a 
          href="#presentacion" 
          className="inline-flex flex-col items-center text-[#701A27] hover:text-[#C89D35] transition-colors"
          aria-label="Ir a la siguiente sección"
        >
          <span className="text-[10px] font-serif uppercase tracking-widest font-bold">Explorar Ficha Técnica</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
        </a>
      </div>

    </section>
  );
}
