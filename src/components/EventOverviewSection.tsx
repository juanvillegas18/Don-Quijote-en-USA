/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Drama, 
  Clock, 
  Building2, 
  FileCheck2, 
  Copy, 
  Check, 
  ExternalLink, 
  Ticket, 
  Calculator,
  GraduationCap,
  HelpCircle
} from 'lucide-react';
import { ActiveTab } from './Navbar';
import { useLanguage } from '../context/LanguageContext';

interface EventOverviewSectionProps {
  onNavigateTab: (tab: ActiveTab) => void;
}

export default function EventOverviewSection({ onNavigateTab }: EventOverviewSectionProps) {
  const { isSpanish } = useLanguage();
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const [copiedMemo, setCopiedMemo] = useState(false);

  const decisionCards = [
    {
      id: "produccion",
      icon: Drama,
      iconBg: "bg-[#9E1B32] text-white",
      borderColor: "border-rose-300",
      tagEs: "Obra Teatral",
      tagEn: "The Show",
      titleEs: "1. La Producción y el Actor",
      titleEn: "1. The Show & The Actor",
      headlineEs: "Wilderman García · Monólogo Teatral",
      headlineEn: "Wilderman García · Solo Performance",
      bulletsEs: [
        "100% en español con comedia física accesible para todos los niveles escolares (K–12 y Universidad).",
        "Alineado con los estándares nacionales ACTFL y el programa de AP Spanish Literature."
      ],
      bulletsEn: [
        "100% in Spanish with physical comedy accessible for all grade levels (K–12 and University).",
        "Aligned with ACTFL national standards and the AP Spanish Literature curriculum."
      ]
    },
    {
      id: "tiempo",
      icon: Clock,
      iconBg: "bg-[#1E3A8A] text-white",
      borderColor: "border-blue-300",
      tagEs: "Horario Escolar",
      tagEn: "School Bell Schedule",
      titleEs: "2. Tiempo y Horario",
      titleEn: "2. Timing & Bell Schedule",
      headlineEs: "60 Minutos Exactos (Bloque Escolar)",
      headlineEn: "60 Minutes Exact (Fits Bell Period)",
      bulletsEs: [
        "45 minutos de obra continua + 15 minutos de tertulia interactiva en español con los alumnos.",
        "Se adapta con exactitud al periodo regular o bloque de asamblea escolar."
      ],
      bulletsEn: [
        "45 minutes of continuous stage play + 15 minutes of live interactive Q&A in Spanish.",
        "Fits perfectly into a single class period or school assembly block."
      ]
    },
    {
      id: "espacio",
      icon: Building2,
      iconBg: "bg-amber-600 text-white",
      borderColor: "border-amber-300",
      tagEs: "Montaje Fácil",
      tagEn: "Easy Setup",
      titleEs: "3. Espacio y Logística",
      titleEn: "3. Space & Logistics",
      headlineEs: "Auditorio, Gimnasio o Cafetorium",
      headlineEn: "Auditorium, Gym, or Cafeteria",
      bulletsEs: [
        "Montaje ágil en 30 minutos sin requerimientos técnicos complicados para la escuela.",
        "Apto para grupos pequeños (30 alumnos) o asambleas generales de más de 300 estudiantes."
      ],
      bulletsEn: [
        "Fast 30-minute load-in with no complex technical setup required from school staff.",
        "Suitable for small classrooms (30 students) or general assemblies of 300+ students."
      ]
    },
    {
      id: "financiamiento",
      icon: FileCheck2,
      iconBg: "bg-emerald-700 text-white",
      borderColor: "border-emerald-300",
      tagEs: "EIN y Fondos",
      tagEn: "Vendor & Grants",
      titleEs: "4. Fondos y Contratación",
      titleEn: "4. Funding & Contracting",
      headlineEs: "Teatro for the Soul Inc · EIN: 81-4825762",
      headlineEn: "Teatro for the Soul Inc · EIN: 81-4825762",
      bulletsEs: [
        "Elegible para fondos federales Título I, II, III (ELL / Dual Language) y Título IV.",
        "Aceptamos Órdenes de Compra (PO) escolares y reserva con $0 inicial usando el código 'RSVP'."
      ],
      bulletsEn: [
        "Eligible for federal Title I, II, III (ELL / Dual Language), and Title IV funding.",
        "We accept district Purchase Orders (POs) and $0 down booking with promo code 'RSVP'."
      ]
    }
  ];

  const handleCopySummary = () => {
    const text = isSpanish
      ? `DON QUIJOTE EN USA: DATOS CLAVE
Entidad: Teatro for the Soul Inc (EIN: 81-4825762)
Actor: Wilderman García (Actor Profesional)
Duración: 60 minutos (45 min obra + 15 min tertulia con estudiantes)
Idioma: Español estándar comprensible para K-12 y Universidad
Montaje: 30 minutos en auditorio, gimnasio o cafetorium
Fondos: Acepta Título I-IV y Órdenes de Compra (PO)
Reserva: ${zeffyUrl} (Código: RSVP)
Email: teatroforthesoul@gmail.com`
      : `DON QUIXOTE IN USA: KEY DETAILS
Producer: Teatro for the Soul Inc (EIN: 81-4825762)
Actor: Wilderman García (Professional Actor)
Duration: 60 minutes (45 min play + 15 min student Q&A)
Language: Clear Spanish accessible for K-12 and College
Setup: 30-min setup in auditorium, gym, or cafeteria
Funding: Title I-IV eligible and School Purchase Orders (POs)
Booking: ${zeffyUrl} (Code: RSVP)
Email: teatroforthesoul@gmail.com`;

    navigator.clipboard.writeText(text);
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2500);
  };

  return (
    <section id="event-overview" className="relative py-14 sm:py-18 bg-[#FCF9F2] border-b-2 border-amber-300/80">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Concise Header */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#1E3A8A] bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200 mb-2.5">
            <span>{isSpanish ? 'Información para Coordinadores' : 'Coordinator Quick Facts'}</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
            {isSpanish ? (
              <>
                <span className="text-[#1E3A8A]">Todo lo que su Escuela </span>
                <span className="text-[#9E1B32]">Necesita Saber</span>
              </>
            ) : (
              <>
                <span className="text-[#1E3A8A]">Everything Your School </span>
                <span className="text-[#9E1B32]">Needs to Know</span>
              </>
            )}
          </h2>

          <p className="font-sans text-sm sm:text-base text-stone-600 mt-2">
            {isSpanish
              ? '4 puntos clave para autorizar la función en su colegio o distrito escolar.'
              : '4 key points to easily approve the performance at your school or district.'}
          </p>
        </div>

        {/* 4 Clean Decision Cards (Without image icons!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {decisionCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`bg-white border-2 ${card.borderColor} rounded-xl p-5 shadow-xs flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold ${card.iconBg} shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                      {isSpanish ? card.tagEs : card.tagEn}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 leading-tight">
                    {isSpanish ? card.titleEs : card.titleEn}
                  </h3>

                  <div className="text-xs sm:text-sm font-bold text-[#1E3A8A] mt-0.5 mb-2.5">
                    {isSpanish ? card.headlineEs : card.headlineEn}
                  </div>

                  <ul className="space-y-1.5 text-xs text-stone-600 font-sans">
                    {(isSpanish ? card.bulletsEs : card.bulletsEn).map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#9E1B32] font-bold mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cohesive Action Banner: Tabs and Copy Memo */}
        <div className="p-4 sm:p-5 bg-amber-50 border border-amber-300 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onNavigateTab('standards')}
              className="text-xs font-bold text-[#1E3A8A] bg-white border border-blue-300 px-3 py-1.5 rounded-lg hover:bg-blue-50 flex items-center gap-1.5"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{isSpanish ? 'Ver Estándares ACTFL' : 'View ACTFL Standards'}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigateTab('planner')}
              className="text-xs font-bold text-amber-900 bg-white border border-amber-300 px-3 py-1.5 rounded-lg hover:bg-amber-50 flex items-center gap-1.5"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{isSpanish ? 'Calcular Presupuesto' : 'Budget Calculator'}</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigateTab('faq')}
              className="text-xs font-bold text-purple-900 bg-white border border-purple-300 px-3 py-1.5 rounded-lg hover:bg-purple-50 flex items-center gap-1.5"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{isSpanish ? 'Preguntas Logísticas' : 'Logistics FAQ'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleCopySummary}
              className="text-xs font-bold text-stone-700 bg-white border border-stone-300 px-3 py-1.5 rounded-lg hover:bg-stone-50 flex items-center gap-1.5"
            >
              {copiedMemo ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-600" />}
              <span>{copiedMemo ? (isSpanish ? '¡Copiado!' : 'Copied!') : (isSpanish ? 'Copiar Ficha Resumen' : 'Copy Summary')}</span>
            </button>

            <a
              href={zeffyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-wine text-xs font-bold py-1.5 px-3.5 flex items-center gap-1.5 shadow-xs"
            >
              <Ticket className="w-3.5 h-3.5 text-amber-300" />
              <span>{isSpanish ? 'Reservar' : 'Reserve'}</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
