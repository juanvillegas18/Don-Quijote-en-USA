/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Theater, 
  PenTool, 
  Scroll, 
  Globe2, 
  CheckCircle2, 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  Compass,
  FileCheck
} from 'lucide-react';
import { ACADEMIC_PILLARS } from '../data/mockData';

export default function AcademicObjectivesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Theater':
        return <Theater className="w-6 h-6 text-[#701A27]" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-[#701A27]" />;
      case 'Scroll':
        return <Scroll className="w-6 h-6 text-[#701A27]" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-[#701A27]" />;
      default:
        return <GraduationCap className="w-6 h-6 text-[#701A27]" />;
    }
  };

  return (
    <section id="objetivos" className="py-24 bg-[#FAF6EE] relative border-b-2 border-[#C89D35]">
      
      {/* Background Decorative Manuscript Flourishes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#701A27] text-[#F0D38D] px-4 py-1 rounded-sm border border-[#C89D35] mb-3 shadow-xs">
            <GraduationCap className="w-4 h-4 text-[#F0D38D]" />
            <span className="text-xs font-serif font-black uppercase tracking-widest">
              Alineación Pedagógica & Estándares
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#2B170A] tracking-tight uppercase">
            Los Cuatro Pilares Académicos
          </h2>

          <p className="text-base sm:text-lg text-[#4A2E18] font-serif italic mt-2 max-w-2xl mx-auto">
            Objetivos de aprendizaje adaptados a cada nivel escolar (Elemental, Intermedia, Superior y Universitario) para enriquecer el dominio del español y la apreciación literaria.
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-[1px] bg-[#C89D35]" />
            <span className="text-xs font-serif text-[#C89D35]">⚜️ Taxonomía de Bloom Aplicada ⚜️</span>
            <div className="w-12 h-[1px] bg-[#C89D35]" />
          </div>
        </div>

        {/* 4 Pillars Grid (Parchment Card Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACADEMIC_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#FDFBF7] p-8 sm:p-9 border-2 border-[#C89D35] relative shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              {/* Corner Ornaments */}
              <div className="corner-bracket-tl" />
              <div className="corner-bracket-tr" />
              <div className="corner-bracket-bl" />
              <div className="corner-bracket-br" />

              {/* Card Header with Roman Numeral Badge */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-sm bg-[#F4EEDF] border-2 border-[#C89D35] flex items-center justify-center shadow-inner group-hover:bg-[#701A27] group-hover:text-[#F0D38D] transition-colors">
                    {getIcon(pillar.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#701A27] uppercase bg-[#C89D35]/20 px-2 py-0.5 rounded border border-[#C89D35]/30">
                      Pilar {pillar.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-black text-[#2B170A] mt-1">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full border border-[#C89D35]/60 flex items-center justify-center text-[#701A27] font-display font-black text-lg bg-[#FAF6EE]">
                  {pillar.number}
                </div>
              </div>

              {/* Action Verbs Pills (Bloom's Taxonomy) */}
              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                <span className="text-[11px] font-mono uppercase text-[#6B5E55] font-bold mr-1">
                  Verbos de Acción:
                </span>
                {pillar.verbs.map((verb) => (
                  <span
                    key={verb}
                    className="text-xs font-serif font-black italic bg-[#701A27] text-[#F0D38D] px-2.5 py-0.5 rounded-sm border border-[#C89D35]"
                  >
                    *{verb}*
                  </span>
                ))}
              </div>

              {/* Core Description */}
              <p className="text-sm sm:text-base text-[#3B2314] font-serif leading-relaxed mb-4">
                {pillar.description}
              </p>

              {/* Curriculum Benefit / Classroom Impact */}
              <div className="pt-4 border-t border-[#C89D35]/30 bg-[#FAF6EE] p-3.5 rounded-sm border border-[#C89D35]/20">
                <div className="flex items-start gap-2">
                  <FileCheck className="w-4 h-4 text-[#701A27] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#4A2E18] font-sans font-medium leading-normal">
                    <strong className="font-serif font-bold text-[#701A27] block">Impacto en el Aula:</strong>
                    {pillar.curriculumBenefit}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Educator Rationale Banner */}
        <div className="mt-14 bg-[#2B170A] text-[#FAF6EE] p-8 rounded-sm border-4 border-[#C89D35] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-display font-black text-[#F0D38D] uppercase tracking-wide">
              ¿Requiere Justificación Curricular para su Departamento o Distrito?
            </h4>
            <p className="text-xs sm:text-sm text-[#FAF6EE]/85 font-serif max-w-3xl leading-relaxed">
              La obra incluye una guía pedagógica con rúbricas de evaluación, sinopsis alineada a estándares AP/IB y carta formal para directores escolares disponible en la selección.
            </p>
          </div>

          <a
            href="#guia-formatos"
            className="shrink-0 bg-[#701A27] hover:bg-[#8F2233] text-[#FAF6EE] font-serif font-bold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 rounded-sm border-2 border-[#C89D35] shadow-md transition-all whitespace-nowrap hover:scale-105"
          >
            Configurar Visita Escolar
          </a>
        </div>

      </div>

    </section>
  );
}
