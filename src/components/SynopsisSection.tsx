/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Compass, 
  Heart, 
  Feather, 
  Quote,
  Shield,
  Layers,
  ChevronRight
} from 'lucide-react';
import { SYNOPSIS_TEXT } from '../data/mockData';

export default function SynopsisSection() {
  const [activeTab, setActiveTab] = useState<'argumento' | 'personajes' | 'temas'>('argumento');

  return (
    <section id="sinopsis" className="py-24 bg-[#2B170A] text-[#FAF6EE] relative border-b-4 border-[#C89D35] overflow-hidden">
      
      {/* Background Medieval Canvas and Star Watermark */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C89D35_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#701A27] text-[#F0D38D] px-4 py-1 rounded-sm border border-[#C89D35] mb-3 shadow-md">
            <BookOpen className="w-4 h-4 text-[#F0D38D]" />
            <span className="text-xs font-serif font-black uppercase tracking-widest">
              Dramaturgia & Argumento Central
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#F0D38D] tracking-tight uppercase">
            Sinopsis de la Obra
          </h2>

          <p className="text-base sm:text-lg text-[#FAF6EE]/80 font-serif italic mt-2">
            El hidalgo caballero entre las cenizas de su pasado y los gigantes del siglo XXI.
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-[1px] bg-[#C89D35]" />
            <span className="text-xs font-serif text-[#C89D35]">✦ Una Creación de Gabriel Villegas ✦</span>
            <div className="w-12 h-[1px] bg-[#C89D35]" />
          </div>
        </div>

        {/* Central Manuscript Block */}
        <div className="bg-[#FAF6EE] text-[#2B170A] p-8 sm:p-12 md:p-16 border-4 border-[#C89D35] shadow-2xl relative">
          <div className="corner-bracket-tl" />
          <div className="corner-bracket-tr" />
          <div className="corner-bracket-bl" />
          <div className="corner-bracket-br" />

          {/* Golden Age Calligraphic Quote */}
          <div className="bg-[#F4EEDF] p-6 sm:p-8 border-2 border-[#C89D35]/60 mb-10 relative">
            <Quote className="w-10 h-10 text-[#C89D35]/40 absolute top-3 left-3 -scale-x-100 pointer-events-none" />
            <p className="text-center font-serif text-lg sm:text-xl md:text-2xl text-[#701A27] italic font-semibold leading-relaxed max-w-3xl mx-auto">
              {SYNOPSIS_TEXT.quote}
            </p>
            <span className="block text-center text-xs font-mono text-[#6B5E55] uppercase tracking-widest mt-2 font-bold">
              — Miguel de Cervantes Saavedra
            </span>
          </div>

          {/* Tabs for Deep Exploration */}
          <div className="flex border-b-2 border-[#C89D35]/40 mb-8 gap-2 overflow-x-auto pb-2">
            <button
              type="button"
              onClick={() => setActiveTab('argumento')}
              className={`pb-2 px-4 font-serif font-bold text-xs sm:text-sm uppercase tracking-widest transition-all ${
                activeTab === 'argumento'
                  ? 'border-b-4 border-[#701A27] text-[#701A27] font-black'
                  : 'text-[#6B5E55] hover:text-[#701A27]'
              }`}
            >
              📜 La Travesía Temporal
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('personajes')}
              className={`pb-2 px-4 font-serif font-bold text-xs sm:text-sm uppercase tracking-widest transition-all ${
                activeTab === 'personajes'
                  ? 'border-b-4 border-[#701A27] text-[#701A27] font-black'
                  : 'text-[#6B5E55] hover:text-[#701A27]'
              }`}
            >
              🛡️ Personajes & Arquetipos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('temas')}
              className={`pb-2 px-4 font-serif font-bold text-xs sm:text-sm uppercase tracking-widest transition-all ${
                activeTab === 'temas'
                  ? 'border-b-4 border-[#701A27] text-[#701A27] font-black'
                  : 'text-[#6B5E55] hover:text-[#701A27]'
              }`}
            >
              💡 Molinos Modernos & Valores
            </button>
          </div>

          {/* TAB 1: ARGUMENTO DRAMÁTICO */}
          {activeTab === 'argumento' && (
            <div className="space-y-6 text-sm sm:text-base font-serif text-[#3B2314] leading-relaxed">
              
              {/* Drop-cap paragraph 1 */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#701A27] text-[#F0D38D] border-2 border-[#C89D35] font-display font-black text-3xl flex items-center justify-center shrink-0 shadow-md">
                  E
                </div>
                <p className="pt-1">
                  {SYNOPSIS_TEXT.excerptP1}
                </p>
              </div>

              <div className="pl-0 sm:pl-18 space-y-5">
                <p>
                  {SYNOPSIS_TEXT.excerptP2}
                </p>

                <p>
                  {SYNOPSIS_TEXT.excerptP3}
                </p>

                <div className="bg-[#FAF6EE] p-5 border-l-4 border-[#701A27] border-y border-r border-[#C89D35]/30 mt-6">
                  <h4 className="font-serif font-bold text-[#701A27] text-base mb-1">
                    Un viaje pedagógico interactivo:
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A2E18]">
                    Durante los 60 minutos de la función, Wilderman García rompe la cuarta pared para pedir el consejo de los alumnos presentes, involucrándolos como escuderos improvisados, descifradores de enigmas y testigos de la perseverancia del caballero andante.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: PERSONAJES */}
          {activeTab === 'personajes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-serif">
              <div className="bg-[#F4EEDF] p-6 border border-[#C89D35] rounded-sm">
                <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block">El Protagonista</span>
                <h4 className="text-xl font-display font-black text-[#2B170A] mt-1">Don Quijote de la Mancha</h4>
                <p className="text-xs text-[#4A2E18] mt-2 leading-relaxed">
                  Idealista incorregible que rehúsa rendirse ante el cinismo del mundo contemporáneo. En los EE. UU. busca redescubrir la nobleza del alma humana a través de la poesía y el idioma.
                </p>
              </div>

              <div className="bg-[#F4EEDF] p-6 border border-[#C89D35] rounded-sm">
                <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block">En la Memoria Viva</span>
                <h4 className="text-xl font-display font-black text-[#2B170A] mt-1">Sancho Panza y Rocinante</h4>
                <p className="text-xs text-[#4A2E18] mt-2 leading-relaxed">
                  Aunque físicamente ausentes, la voz terrenal de Sancho y la lealtad del rocín acompañan cada monólogo, recordando que el pragmatismo y el amor leal son el balance de la locura.
                </p>
              </div>

              <div className="bg-[#F4EEDF] p-6 border border-[#C89D35] rounded-sm">
                <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block">El Motor Poético</span>
                <h4 className="text-xl font-display font-black text-[#2B170A] mt-1">Dulcinea del Toboso</h4>
                <p className="text-xs text-[#4A2E18] mt-2 leading-relaxed">
                  El símbolo imperecedero de la belleza, la esperanza y la dignidad que habita oculta tras el encantamiento de las prisas, el ruido y la superficialidad del siglo XXI.
                </p>
              </div>

              <div className="bg-[#F4EEDF] p-6 border border-[#C89D35] rounded-sm">
                <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block">El Elenco de Apoyo</span>
                <h4 className="text-xl font-display font-black text-[#2B170A] mt-1">El Público Estudiantil</h4>
                <p className="text-xs text-[#4A2E18] mt-2 leading-relaxed">
                  Los estudiantes no son meros espectadores: se convierten en los nuevos caballeros noveles convocados a defender la lengua española y los valores de la hidalguía.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: TEMAS Y VALORES */}
          {activeTab === 'temas' && (
            <div className="space-y-4 font-serif text-xs sm:text-sm text-[#3B2314]">
              <div className="bg-[#FAF6EE] p-5 border border-[#C89D35]/40 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#701A27] text-[#F0D38D] flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                  <h4 className="font-bold text-[#701A27] text-base">La vigencia de soñar en una era tecnológica</h4>
                  <p className="text-[#4A2E18] mt-1 leading-relaxed">
                    ¿Qué son los molinos de viento hoy? Las redes sociales, la soledad urbana y el aislamiento digital son enfrentados con calidez humana y diálogo fraternal.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF6EE] p-5 border border-[#C89D35]/40 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#701A27] text-[#F0D38D] flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                  <h4 className="font-bold text-[#701A27] text-base">El español como tesoro de herencia viva</h4>
                  <p className="text-[#4A2E18] mt-1 leading-relaxed">
                    La obra resalta el orgullo bilingüe y demuestra que el idioma de Cervantes no es una reliquia de museo, sino una lengua vibrante que une a más de 60 millones de hispanohablantes en los Estados Unidos.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF6EE] p-5 border border-[#C89D35]/40 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#701A27] text-[#F0D38D] flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                  <h4 className="font-bold text-[#701A27] text-base">El misterio de «La Galatea (2da Parte)»</h4>
                  <p className="text-[#4A2E18] mt-1 leading-relaxed">
                    Un guiño filológico histórico a la obra pastoral prometida por Cervantes que nunca llegó a publicarse, sirviendo de puente narrativo para la travesía temporal.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Action inside Synopsis */}
          <div className="mt-10 pt-6 border-t-2 border-[#C89D35]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-serif text-[#6B5E55]">
              <Sparkles className="w-4 h-4 text-[#701A27]" />
              <span>Texto dramático registrado por Gabriel Villegas • Teatro for the Soul</span>
            </div>

            <a
              href="#guia-formatos"
              className="bg-[#701A27] hover:bg-[#8F2233] text-[#FAF6EE] font-serif font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-sm border border-[#C89D35] flex items-center gap-2 transition-all"
            >
              <span>Llevar la Obra a su Escuela</span>
              <ChevronRight className="w-4 h-4 text-[#F0D38D]" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
