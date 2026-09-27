/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Copy, 
  Check, 
  BookOpen, 
  Award, 
  ExternalLink, 
  Ticket,
  Target,
  Sparkles,
  Feather
} from 'lucide-react';
import quijoteOverviewBg from '../assets/images/quijote_overview_minimalist_bg_1790503674706.jpg';

export default function CurriculumPage() {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const [copiedStandards, setCopiedStandards] = useState(false);

  const standardsAlignment = [
    {
      title: "ACTFL 5 Cs World-Readiness Standards",
      tag: "National Foreign Language Standards",
      colorTag: "bg-blue-100 text-blue-900 border-blue-300",
      borderColor: "border-blue-300 bg-gradient-to-br from-blue-50/60 via-white to-blue-50/30",
      iconColor: "text-blue-600",
      points: [
        "Communication (Interpretive & Interpersonal): Students interpret authentic spoken Spanish during the 45-minute live performance and actively produce oral Spanish during the 15-minute academic tertulia.",
        "Cultures: Direct cultural encounter with foundational Hispanic archetypes, Golden Age philosophy, and living Latin American dramatic arts.",
        "Connections: Interdisciplinary links with World History, European Literature, Fine Arts, and Social Studies.",
        "Comparisons: Cross-cultural analysis between 17th-century Spanish Golden Age society and 21st-century modern American life.",
        "Communities: Connects classroom Spanish study to live, professional community performing arts and lifelong language appreciation."
      ]
    },
    {
      title: "AP Spanish Literature & Culture",
      tag: "College Board Advanced Placement",
      colorTag: "bg-rose-100 text-rose-900 border-rose-300",
      borderColor: "border-rose-300 bg-gradient-to-br from-rose-50/60 via-white to-rose-50/30",
      iconColor: "text-rose-600",
      points: [
        "Direct theatrical encounter with Miguel de Cervantes Saavedra’s required AP text: El ingenioso hidalgo Don Quijote de la Mancha.",
        "Reinforces essential AP Literary Themes: La dualidad del ser (héroe vs. antihéroe), Las relaciones interpersonales (Quijote y Sancho), and La creación literaria.",
        "Prepares students for analytical free-response essays, character motivation questions, and performance-to-text comparison prompts."
      ]
    },
    {
      title: "Hispanic Heritage & Dual Language Integration",
      tag: "Cultural Equity & Multilingual Pride",
      colorTag: "bg-amber-100 text-amber-900 border-amber-300",
      borderColor: "border-amber-300 bg-gradient-to-br from-amber-50/60 via-white to-amber-50/30",
      iconColor: "text-amber-600",
      points: [
        "Celebrates Hispanic Heritage Month (September 15 – October 15) and year-round school multicultural enrichment programming.",
        "Affirms Dual-Language, Bilingual, and Heritage Spanish speakers by presenting high-caliber artistic Spanish on a professional stage.",
        "Inspires school-wide engagement with Latin American and Spanish theatrical traditions, building pride in linguistic heritage."
      ]
    },
    {
      title: "Turnkey Host Staging & Technical Simplicity",
      tag: "Host Venue Readiness",
      colorTag: "bg-emerald-100 text-emerald-900 border-emerald-300",
      borderColor: "border-emerald-300 bg-gradient-to-br from-emerald-50/60 via-white to-emerald-50/30",
      iconColor: "text-emerald-600",
      points: [
        "Self-contained solo production adaptable to any standard auditorium, cafetorium, gym, or university lecture hall.",
        "Minimal technical requirements: general overhead or stage wash lighting, one electrical outlet, and standard school PA with 1 wireless mic.",
        "Fast 30-minute load-in and 20-minute strike ensure no disruption to school class periods or sports practices."
      ]
    }
  ];

  const handleCopyStandards = () => {
    const text = `CURRICULAR STANDARDS & PEDAGOGICAL ALIGNMENT
Production: Don Quijote en USA (Live Theatrical Performance & Educational Experience)
Producer: Teatro for the Soul Inc (EIN: 81-4825762) | Contact: teatroforthesoul@gmail.com
Performer: Wilderman García (Colombian Actor)
Duration: 60 Minutes (45-Minute Play + 15-Minute Academic Tertulia Talkback)
Language: 100% Spanish Immersion (K–16)

1. ACTFL World-Readiness Standards:
   - Communication: Interpretive listening and interpersonal speaking during Q&A
   - Cultures: Foundational Hispanic literary and cultural archetypes
   - Connections: Cross-curricular World History and Spanish Literature
   - Comparisons: 17th-century Spanish Golden Age ideals vs. modern American society
   - Communities: Real-world cultural engagement through live theater

2. AP Spanish Literature & Culture:
   - Direct connection to required text: Miguel de Cervantes Saavedra
   - Themes: La dualidad del ser, la creación literaria, el individuo y su entorno

3. Institutional Booking: https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa (Promo code RSVP for $0 upfront fee)`;
    navigator.clipboard.writeText(text);
    setCopiedStandards(true);
    setTimeout(() => setCopiedStandards(false), 2500);
  };

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#FCF9F2] min-h-screen relative overflow-hidden">
      
      {/* Background Medieval Vignettes */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.16] mix-blend-multiply"
        style={{
          backgroundImage: `url(${quijoteOverviewBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F2] via-transparent to-[#FCF9F2] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-3.5 py-1 rounded-full border border-blue-300 shadow-2xs mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
            <span>Academic Justification &amp; Standards</span>
          </div>
          
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-[#1E3A8A]">Alineación Curricular </span>
            <span className="text-[#B91C1C]">&amp; Estándares ACTFL / AP</span>
          </h1>
          
          <p className="font-garamond text-lg sm:text-xl text-stone-700 mt-3 italic max-w-2xl mx-auto">
            Fundamentada en los 5 Cs de ACTFL y en el programa de AP Spanish Literature para la temporada 2026–2027 (funciones a partir de Enero 2027).
          </p>
        </div>

        {/* Copy Standards Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/95 backdrop-blur-md p-6 border-2 border-blue-200 rounded-2xl shadow-sm mb-10">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase font-bold text-blue-800">
              Department Syllabus &amp; Grant Copy Tool
            </span>
            <h3 className="font-cinzel text-xl font-bold text-stone-900">
              Ready-to-Use Standards Justification Text
            </h3>
            <p className="text-xs font-sans text-stone-600">
              One click copies pre-formatted curriculum alignment text to paste directly into course syllabi, parent letters, or district funding grants.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopyStandards}
            className="btn-blue-accent text-xs py-3 px-5 shrink-0 flex items-center gap-2 font-bold shadow-md"
          >
            {copiedStandards ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Standards for Syllabus</span>
              </>
            )}
          </button>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {standardsAlignment.map((item, index) => (
            <div key={index} className={`border-2 ${item.borderColor} p-6 sm:p-7 rounded-2xl space-y-3.5 shadow-sm hover:shadow-md transition-all`}>
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${item.colorTag}`}>
                  {item.tag}
                </span>
                <CheckCircle2 className={`w-5 h-5 ${item.iconColor}`} />
              </div>

              <h3 className="font-cinzel text-lg font-bold text-stone-900">
                {item.title}
              </h3>

              <ul className="space-y-2.5 text-xs font-sans text-stone-700 leading-relaxed">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#9E1B32] mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Booking Strip */}
        <div className="p-6 bg-gradient-to-r from-amber-50 via-rose-50/50 to-amber-50 border-2 border-amber-300 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h3 className="font-cinzel text-base font-bold text-stone-900">
              Bring Don Quijote en USA to Your Students
            </h3>
            <p className="text-xs text-stone-600 font-sans mt-0.5">
              Lock in your school’s preferred date with zero upfront cost using promo code <strong>RSVP</strong> on Zeffy.
            </p>
          </div>

          <a
            href={zeffyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-wine text-xs py-2.5 px-5 font-bold flex items-center gap-1.5 shrink-0"
          >
            <Ticket className="w-3.5 h-3.5 text-amber-300" />
            <span>Reserve on Zeffy (Promo: RSVP)</span>
            <ExternalLink className="w-3 h-3 opacity-90" />
          </a>
        </div>

      </div>
    </div>
  );
}
