/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Calculator, 
  GraduationCap, 
  Users, 
  Building2, 
  Copy, 
  Check, 
  Ticket, 
  ExternalLink,
  ShieldCheck,
  Clock,
  Sparkles,
  FileText,
  Mail
} from 'lucide-react';
import quijoteOverviewBg from '../assets/images/quijote_overview_minimalist_bg_1790503674706.jpg';

export default function AssemblyPlannerPage() {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const officialEmail = "teatroforthesoul@gmail.com";
  const [gradeLevel, setGradeLevel] = useState<'all' | 'elementary' | 'middle' | 'high' | 'university'>('high');
  const [studentCount, setStudentCount] = useState<number>(250);
  const [venueType, setVenueType] = useState<'auditorium' | 'cafetorium' | 'gym' | 'lecture'>('auditorium');
  const [copiedMemo, setCopiedMemo] = useState(false);

  const handleCopyProposal = () => {
    const text = `MEMORANDUM DE PROPUESTA ESCOLAR / SCHOOL ASSEMBLY PROPOSAL
Para: Dirección Escolar / Departamento de Lenguas Mundiales (World Languages)
De: Departamento de Español
Asunto: Solicitud de Función Teatral Educativa: "Don Quijote en USA"
Compañía Productora: Teatro for the Soul Inc
Número de Identificación Patronal (EIN): 81-4825762
Contacto Oficial: ${officialEmail} | www.donquijoteenusa.com

1. DESCRIPCIÓN DE LA ACTIVIDAD:
- Obra: Don Quijote en USA (A Live Theatrical Performance & Educational Experience)
- Intérprete Protagónico: Wilderman García (Actor Colombiano, monólogo teatral unipersonal)
- Duración Exacta: 60 Minutos (45 minutos de obra + 15 minutos de tertulia académica interactiva en vivo con los estudiantes)
- Idioma: 100% en Español, adaptado para estudiantes desde nivel principiante hasta avanzado y hablantes nativos.

2. DETALLES DE LA PROPUESTA:
- Audiencia estimada: ${studentCount} estudiantes (${gradeLevel.toUpperCase()})
- Espacio recomendado: ${venueType.toUpperCase()} (requiere iluminación general y 1 micrófono inalámbrico)
- Horario: ${studentCount > 400 ? '2 Funciones consecutivas recomendadas' : '1 Función de 60 minutos (45m obra + 15m tertulia)'}

3. ALINEACIÓN CURRICULAR:
- Estándares ACTFL (5 Cs: Comunicación, Culturas, Conexiones, Comparaciones y Comunidades)
- Temas del examen AP Spanish Literature and Culture (Cervantes, la dualidad del ser, la creación literaria)
- Celebración de la Herencia Hispana e inclusión bilingüe

4. RESERVA Y PROCESO DE PAGO:
- Enlace de Reserva Oficial: ${zeffyUrl}
- Código de Promoción Escolar ($0.00 de pago inicial): RSVP
- Se procesa pago posterior mediante Orden de Compra (Purchase Order) o cheque institucional a nombre de Teatro for the Soul Inc (EIN: 81-4825762).`;
    navigator.clipboard.writeText(text);
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2500);
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
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-900 bg-emerald-100 px-3.5 py-1 rounded-full border border-emerald-300 shadow-2xs mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            <span>Administrator &amp; Department Chair Tool</span>
          </div>
          
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            School Assembly &amp; Tour Date Planner
          </h1>
          
          <p className="font-garamond text-lg sm:text-xl text-stone-700 mt-3 italic max-w-2xl mx-auto">
            Configure your student population, grade level, and venue to generate an instant technical plan and formal administrative approval memo.
          </p>
        </div>

        {/* Main Planner Card */}
        <div className="bg-white/95 backdrop-blur-md border-2 border-emerald-400 p-6 sm:p-9 rounded-2xl shadow-xl mb-12 space-y-8 ring-2 ring-emerald-300/40">
          
          <div className="border-b border-emerald-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block mb-0.5">
                Interactive Staging Calculator
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900">
                1. Select School Profile
              </h3>
            </div>
            
            <div className="flex items-center gap-2 bg-emerald-100 text-emerald-950 px-3 py-1.5 rounded-lg font-mono text-xs font-bold border border-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Teatro for the Soul Inc · EIN: 81-4825762</span>
            </div>
          </div>

          {/* Interactive Form Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Grade Level Selector */}
            <div className="space-y-2 p-4 bg-amber-50/70 border border-amber-300 rounded-xl">
              <label className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-amber-600" />
                <span>Student Audience Level</span>
              </label>
              <select
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value as any)}
                className="w-full text-xs font-sans font-medium bg-white border border-amber-300 p-2.5 rounded-lg focus:ring-2 focus:ring-amber-500 shadow-2xs cursor-pointer"
              >
                <option value="all">All Ages / Whole School Assembly</option>
                <option value="elementary">Elementary (Grades 3–5)</option>
                <option value="middle">Middle School (Grades 6–8)</option>
                <option value="high">High School (Spanish 1 – AP Lit)</option>
                <option value="university">University / College Spanish Dept</option>
              </select>
              <p className="text-[11px] text-amber-900 font-medium">
                {gradeLevel === 'high' && "Emphasizes AP Spanish Literature themes and ACTFL communication standards."}
                {gradeLevel === 'middle' && "Accents physical comedy, gesture, and introductory Hispanic cultural pride."}
                {gradeLevel === 'elementary' && "Focuses on slapstick humor, chivalric physical movement, and sound."}
                {gradeLevel === 'university' && "Dives into Golden Age dramaturgy and Cervantes' sociopolitical commentary."}
                {gradeLevel === 'all' && "Layered performance suitable for broad multi-grade community assemblies."}
              </p>
            </div>

            {/* Attendance Estimator Slider */}
            <div className="space-y-2 p-4 bg-blue-50/70 border border-blue-300 rounded-xl">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-blue-950 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Estimated Students</span>
                </label>
                <span className="font-mono text-xs font-bold text-white bg-blue-600 px-2.5 py-0.5 rounded-full shadow-2xs">
                  {studentCount} Students
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={800}
                step={25}
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer h-2 bg-blue-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-blue-800 font-mono font-bold">
                <span>50</span>
                <span>250</span>
                <span>500</span>
                <span>800+</span>
              </div>
            </div>

            {/* Venue Selector */}
            <div className="space-y-2 p-4 bg-emerald-50/70 border border-emerald-300 rounded-xl">
              <label className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span>Host Staging Area</span>
              </label>
              <select
                value={venueType}
                onChange={(e) => setVenueType(e.target.value as any)}
                className="w-full text-xs font-sans font-medium bg-white border border-emerald-300 p-2.5 rounded-lg focus:ring-2 focus:ring-emerald-500 shadow-2xs cursor-pointer"
              >
                <option value="auditorium">School Auditorium / Theater</option>
                <option value="cafetorium">Cafetorium / Multi-purpose Room</option>
                <option value="gym">Gymnasium Staging</option>
                <option value="lecture">University Lecture Hall</option>
              </select>
              <p className="text-[11px] text-emerald-900 font-medium">
                {venueType === 'auditorium' && "Ideal acoustics; requires basic stage wash and 1 wireless mic."}
                {venueType === 'cafetorium' && "Easily adapted; performer brings all self-contained props & backdrops."}
                {venueType === 'gym' && "Requires standard school PA sound reinforcement for vocal clarity."}
                {venueType === 'lecture' && "Intimate theatrical encounter for college cohorts and honors students."}
              </p>
            </div>

          </div>

          {/* Generated Recommendation Results */}
          <div className="p-6 bg-gradient-to-r from-emerald-50 via-teal-50/70 to-emerald-50 border-2 border-emerald-400 rounded-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-200 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-950 uppercase tracking-wide">
                  2. Assembly Recommendation for {studentCount} Students
                </span>
              </div>
              <div className="text-[11px] font-mono font-bold text-emerald-900 bg-white px-3 py-1 rounded-full border border-emerald-300">
                Vendor: <strong>Teatro for the Soul Inc</strong> · EIN: <strong>81-4825762</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs font-sans text-stone-800">
              <div className="p-4 bg-white border-2 border-amber-300 rounded-xl shadow-2xs">
                <span className="text-[10px] uppercase font-mono font-bold text-amber-700 block mb-0.5">Recommended Format</span>
                <strong className="text-stone-900 block font-serif text-base">
                  {studentCount > 400 ? '2 Back-to-Back Sessions' : '1 Single Assembly (60m)'}
                </strong>
                <span className="text-[11px] text-stone-600 mt-1 block">
                  {studentCount > 400 ? 'Ensures high visibility and active Q&A' : 'Standard 45m show + 15m talkback'}
                </span>
              </div>

              <div className="p-4 bg-white border-2 border-blue-300 rounded-xl shadow-2xs">
                <span className="text-[10px] uppercase font-mono font-bold text-blue-700 block mb-0.5">AV / Staging Need</span>
                <strong className="text-stone-900 block font-serif text-base">
                  Basic Wash + 1 Wireless Mic
                </strong>
                <span className="text-[11px] text-stone-600 mt-1 block">
                  Performer brings all chivalric props &amp; costumes
                </span>
              </div>

              <div className="p-4 bg-white border-2 border-emerald-400 rounded-xl shadow-2xs">
                <span className="text-[10px] uppercase font-mono font-bold text-emerald-700 block mb-0.5">Upfront Booking Cost</span>
                <strong className="text-emerald-700 block font-serif text-base font-bold">
                  $0.00 with Promo: RSVP
                </strong>
                <span className="text-[11px] text-stone-600 mt-1 block">
                  Invoice processed via district PO later
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleCopyProposal}
                className="btn-outline-refined text-xs py-3 px-5 w-full sm:w-auto flex items-center justify-center gap-2 bg-white font-bold"
              >
                {copiedMemo ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Proposal Memo Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#9E1B32]" />
                    <span>Copy Proposal Memo for Principal</span>
                  </>
                )}
              </button>

              <a
                href={zeffyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-wine text-xs py-3 px-6 w-full sm:w-auto flex items-center justify-center gap-2 font-bold shadow-md"
              >
                <Ticket className="w-4 h-4 text-amber-300" />
                <span>Lock In Date on Zeffy (Code: RSVP)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-90" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
