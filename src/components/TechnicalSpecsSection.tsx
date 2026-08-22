/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Award, 
  Users, 
  Sparkles, 
  BookOpen, 
  Clock, 
  Globe, 
  Shield, 
  Theater, 
  Feather, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { TECHNICAL_DATA } from '../data/mockData';

export default function TechnicalSpecsSection() {
  return (
    <section id="presentacion" className="py-20 bg-[#F4EEDF] border-b-2 border-[#C89D35]/50 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FAF6EE] text-[#701A27] px-3.5 py-1 rounded-sm border border-[#C89D35] mb-3">
            <Shield className="w-3.5 h-3.5 text-[#C89D35]" />
            <span className="text-[11px] font-serif font-black uppercase tracking-widest">
              Presentación Oficial & Producción
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#2B170A] tracking-tight uppercase">
            Ficha Técnica del Espectáculo
          </h2>
          
          <p className="text-base text-[#4A2E18] font-serif italic mt-2">
            Una producción de excelencia artística y rigor pedagógico concebida especialmente para la comunidad escolar.
          </p>

          <div className="w-24 h-1 bg-[#C89D35] mx-auto mt-4 rounded-full" />
        </div>

        {/* Presentation Narrative Box (Gabriel Villegas, Wilderman García, Teatro for the Soul) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Creative Duo Highlight Card */}
          <div className="lg:col-span-7 bg-[#FAF6EE] p-8 sm:p-10 border-2 border-[#C89D35] relative shadow-md">
            <div className="corner-bracket-tl" />
            <div className="corner-bracket-tr" />
            <div className="corner-bracket-bl" />
            <div className="corner-bracket-br" />

            <div className="space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#701A27] font-bold block">
                ✦ AUTORÍA Y DIRECCIÓN ARTÍSTICA
              </span>

              <h3 className="text-2xl sm:text-3xl font-display font-black text-[#2B170A] leading-tight">
                El Encuentro de Cervantes con el Aula del Siglo XXI
              </h3>

              <p className="text-sm sm:text-base text-[#3B2314] font-serif leading-relaxed">
                Escrita y dirigida por el dramaturgo y educador <strong>Gabriel Villegas</strong>, e interpretada con apasionada maestría escénica por el consagrado actor <strong>Wilderman García</strong>, <em>«Don Quijote en USA»</em> es una creación de <strong>Teatro for the Soul</strong> que fusiona la belleza del verso clásico con el humor y la empatía contemporánea.
              </p>

              <p className="text-sm sm:text-base text-[#3B2314] font-serif leading-relaxed">
                Lejos de ser una lectura estática, la obra convierte el escenario en un diálogo dinámico donde los estudiantes no solo escuchan el español del Siglo de Oro, sino que lo comprenden, lo sienten y lo disfrutan a través de situaciones cotidianas y metáforas universales.
              </p>

              {/* Creator Badges */}
              <div className="pt-4 border-t border-[#C89D35]/30 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-serif">
                <div className="bg-[#F4EEDF] p-3 border border-[#C89D35]/40 rounded-sm">
                  <span className="block font-bold text-[#701A27] uppercase text-[10px] tracking-wider">Dramaturgia</span>
                  <span className="font-bold text-sm text-[#2B170A]">Gabriel Villegas</span>
                  <span className="text-[10px] text-[#6B5E55] block mt-0.5">Autor & Director Teatral</span>
                </div>
                <div className="bg-[#F4EEDF] p-3 border border-[#C89D35]/40 rounded-sm">
                  <span className="block font-bold text-[#701A27] uppercase text-[10px] tracking-wider">Actuación</span>
                  <span className="font-bold text-sm text-[#2B170A]">Wilderman García</span>
                  <span className="text-[10px] text-[#6B5E55] block mt-0.5">Actor Protagónico</span>
                </div>
                <div className="bg-[#F4EEDF] p-3 border border-[#C89D35]/40 rounded-sm">
                  <span className="block font-bold text-[#701A27] uppercase text-[10px] tracking-wider">Producción</span>
                  <span className="font-bold text-sm text-[#2B170A]">Teatro for the Soul</span>
                  <span className="text-[10px] text-[#6B5E55] block mt-0.5">Compañía Productora</span>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Technical Dossier Table (Rider Rápido) */}
          <div className="lg:col-span-5 bg-[#2B170A] text-[#FAF6EE] p-8 sm:p-10 border-4 border-[#C89D35] relative shadow-xl">
            <div className="absolute -top-3 left-6 bg-[#701A27] text-[#F0D38D] px-3 py-0.5 text-[10px] font-mono uppercase tracking-widest font-bold border border-[#C89D35]">
              Rider Escolar Esencial
            </div>

            <div className="space-y-4 pt-2">
              <h4 className="text-xl font-display font-black text-[#F0D38D] uppercase tracking-wide border-b border-[#C89D35]/40 pb-2">
                Ficha Técnica Resumida
              </h4>

              <div className="space-y-3 text-xs sm:text-sm font-sans">
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-[#F0D38D] font-serif font-bold">Duración de la Obra:</span>
                  <span className="font-mono font-semibold">60 Minutos</span>
                </div>
                
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-[#F0D38D] font-serif font-bold">Idioma de Representación:</span>
                  <span className="font-mono font-semibold text-emerald-400">100% Español</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-[#F0D38D] font-serif font-bold">Género / Estilo:</span>
                  <span className="font-sans font-medium">Unipersonal / Comedia Didáctica</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-[#F0D38D] font-serif font-bold">Tiempo de Montaje:</span>
                  <span className="font-sans font-medium">30 a 45 minutos</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-[#F0D38D] font-serif font-bold">Requisitos Técnicos:</span>
                  <span className="font-sans font-medium">Autónomo / Adaptable</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-[#F0D38D] font-serif font-bold">Público Recomendado:</span>
                  <span className="font-sans font-medium">Middle, High School & Univ.</span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-[#F0D38D] font-serif font-bold">Portal & Licencias:</span>
                  <span className="font-mono text-[#F0D38D] font-bold">donquijoteusa.com</span>
                </div>
              </div>

              <div className="bg-white/10 p-3 rounded-sm border border-white/20 mt-4 text-[11px] text-[#FAF6EE]/90 italic font-serif">
                « No se requiere equipo de luces o sonido complejo por parte de la escuela: la producción cuenta con modalidades autoportantes que se ajustan a cualquier espacio. »
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
