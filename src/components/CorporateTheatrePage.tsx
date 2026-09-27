/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Award, 
  Sparkles, 
  Drama, 
  CheckCircle2, 
  Send, 
  Calendar, 
  Clock, 
  FileText, 
  ShieldCheck, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  Compass, 
  HeartHandshake, 
  TrendingUp, 
  Mic2,
  ShieldAlert,
  Scale,
  Eye,
  AlertTriangle,
  BookOpen,
  Heart
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CorporateTheatrePage() {
  const { isSpanish } = useLanguage();
  const officialEmail = "teatroforthesoul@gmail.com";

  // Corporate & educational inquiry form state
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('ethics-training');
  const [estimatedAudience, setEstimatedAudience] = useState('50-150');
  const [eventLocation, setEventLocation] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [copiedQuote, setCopiedQuote] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);

  // The TWO official 2-hour training programs
  const trainingPackages = [
    {
      id: 'ethics-training',
      badgeEs: 'Capacitación Integral · 2 Horas',
      badgeEn: 'Comprehensive Training · 2 Hours',
      badgeStyle: 'bg-emerald-100 text-emerald-950 border-emerald-300',
      duration: '2 Horas / 2 Hours',
      breakdownEs: 'Obra Teatral en Vivo (60 min) + Taller Vivencial de Ética (60 min)',
      breakdownEn: 'Live Theatrical Performance (60 min) + Interactive Ethics Workshop (60 min)',
      targetEs: 'Ideal para maestros, facultad escolar, comités y todos los empleados de la organización',
      targetEn: 'Ideal for teachers, school faculty, committees, and all organizational employees',
      titleEs: '1. Capacitación en Ética y Prevención del Fraude para Todo el Personal',
      titleEn: '1. Ethics & Fraud Prevention Training for All Employees',
      descEs: 'Programa transformador de dos horas diseñado e impartido por Gabriel Villegas (Auditor con más de 20 años de experiencia en el gobierno federal y gobernanza institucional) junto a la interpretación teatral de Wilderman García. Une el arte escénico cervantino con casos reales de ética profesional.',
      descEn: 'A transformative two-hour program designed and delivered by Gabriel Villegas (Senior Auditor with over 20 years of federal government experience in institutional governance) and master actor Wilderman García. Merges classical stage drama with real-world professional ethics.',
      pillarsTitleEs: 'Ejes Centrales de la Capacitación:',
      pillarsTitleEn: 'Core Training Modules:',
      bulletsEs: [
        'Obra Teatral en Vivo Don Quijote (60 min): El choque entre la verdad, las apariencias engañosas y la fidelidad a los principios morales.',
        'El Triángulo del Fraude de Cressey: Presión, Oportunidad y Racionalización explicados en dilemas de la vida real.',
        'La Valentía del Denunciante (Whistleblower): Cómo vencer el miedo al pensamiento de grupo y proteger la integridad colectiva.',
        'Roleplay Teatral Interactivo: Análisis participativo de conflictos de interés, zonas grises y decisiones éticas bajo presión.'
      ],
      bulletsEn: [
        'Live Stage Performance of Don Quixote (60 min): Truth versus deceptive appearances and unwavering fidelity to ethical principles.',
        'Cressey’s Fraud Triangle: Pressure, Opportunity, and Rationalization analyzed through realistic organizational dilemmas.',
        'The Whistleblower’s Moral Courage: Overcoming organizational groupthink and protecting institutional integrity.',
        'Interactive Theatrical Roleplay: Hands-on analysis of conflicts of interest, procurement red flags, and ethical dilemmas.'
      ]
    },
    {
      id: 'educational-theater-teachers',
      badgeEs: 'Desarrollo Docente · 2 Horas',
      badgeEn: 'Teacher Professional Development · 2 Hours',
      badgeStyle: 'bg-amber-100 text-amber-950 border-amber-300',
      duration: '2 Horas / 2 Hours',
      breakdownEs: 'Obra Teatral en Vivo (60 min) + Taller de Pedagogía y Enfoque (60 min)',
      breakdownEn: 'Live Theatrical Performance (60 min) + Pedagogical & Emotional Focus Workshop (60 min)',
      targetEs: 'Diseñado especialmente para maestros, educadores, directores escolares y equipos pedagógicos',
      targetEn: 'Specially designed for teachers, educators, school principals, and pedagogical teams',
      titleEs: '2. Teatro Educativo para Maestros: Conecta Emocionalmente con tus Estudiantes a través del Teatro',
      titleEn: '2. Educational Theater for Teachers: Connect Emotionally with Your Students Through Theater',
      descEs: 'Taller vivencial de dos horas creado para dotar a los maestros de herramientas del arte escénico para transformar el ambiente del aula, cautivar el enfoque de los estudiantes y crear vínculos emocionales y pedagógicos profundos y duraderos.',
      descEn: 'A dynamic two-hour experiential workshop providing teachers with professional stagecraft tools to command the classroom, re-engage student attention, and build deep, lasting emotional and academic connections.',
      pillarsTitleEs: 'Herramientas Escénicas para el Docente:',
      pillarsTitleEn: 'Stagecraft Tools for Educators:',
      bulletsEs: [
        'Obra Teatral en Vivo Don Quijote en Escena (60 min): Demostración práctica de cómo el drama capta la atención inmediata de jóvenes y adultos.',
        'Presencia Escénica en el Aula: Respiración, modulación vocal y lenguaje no verbal para proyectar autoridad cálida y empática.',
        'Conexión Emocional & Enfoque: Estrategias del teatro para romper la apatía estudiantil y reconectar con alumnos distraídos o desmotivados.',
        'Storytelling & Dinámicas Participativas: Cómo convertir cualquier lección académica en un viaje dramático inolvidable.'
      ],
      bulletsEn: [
        'Live Stage Performance of Don Quixote Live (60 min): Live demonstration of how theatrical immersion instantly commands audience focus.',
        'Classroom Stage Presence: Vocal modulation, diaphragmatic breathwork, and body language to project warm, commanding authority.',
        'Emotional Connection & Focus: Theatrical techniques to dissolve student apathy and re-engage distracted or unmotivated learners.',
        'Storytelling & Interactive Dramatic Devices: Transforming standard curriculum lessons into unforgettable, emotionally resonant experiences.'
      ]
    }
  ];

  const handleCopyProposal = () => {
    const pkg = trainingPackages.find(p => p.id === selectedFormat) || trainingPackages[0];
    const summary = isSpanish
      ? `SOLICITUD DE CAPACITACIÓN Y TEATRO · DON QUIJOTE EN USA
Organización / Distrito / Escuela: ${companyName || 'Por especificar'}
Contacto: ${contactName || 'Por especificar'}
Email: ${contactEmail || 'Por especificar'} | Teléfono: ${contactPhone || 'Por especificar'}

PROGRAMA SELECCIONADO:
${pkg.titleEs}
- Formato: Obra Teatral en Vivo + Taller Vivencial (2 Horas)
- Componentes: ${pkg.breakdownEs}
- Audiencia Estimada: ${estimatedAudience} participantes
- Público Idóneo: ${pkg.targetEs}
- Ciudad / Lugar Previsto: ${eventLocation || 'Por definir'}
- Fecha Deseada: ${preferredDate || 'Por coordinar'}
- Notas Adicionales: ${notes || 'Ninguna'}

EQUIPO INSTRUCTOR:
- Gabriel Villegas (Auditor con 20+ años en gobierno federal y gobernanza)
- Wilderman García (Actor Profesional de Teatro Clásico y Contemporáneo)

ENTIDAD PROVEEDORA:
Teatro for the Soul Inc · Organización Educativa 501(c)(3) · EIN: 81-4825762
W-9 listo para registro de suplidor (Vendor Setup), órdenes de compra (PO) y facturación Net 30.
Contacto Oficial: ${officialEmail} | Tel: (787) 466-8800`
      : `TRAINING & THEATRE BOOKING INQUIRY · DON QUIXOTE IN USA
Organization / District / School: ${companyName || 'To be specified'}
Contact Person: ${contactName || 'To be specified'}
Email: ${contactEmail || 'To be specified'} | Phone: ${contactPhone || 'To be specified'}

SELECTED PROGRAM:
${pkg.titleEn}
- Format: Live Theatrical Performance + Interactive Workshop (2 Hours)
- Breakdown: ${pkg.breakdownEn}
- Estimated Attendees: ${estimatedAudience} participants
- Ideal Audience: ${pkg.targetEn}
- City / Target Location: ${eventLocation || 'To be determined'}
- Preferred Date: ${preferredDate || 'To be coordinated'}
- Additional Notes: ${notes || 'None'}

INSTRUCTIONAL TEAM:
- Gabriel Villegas (Senior Auditor, 20+ years federal experience & governance)
- Wilderman García (Master Classical & Contemporary Stage Actor)

PROVIDER ENTITY:
Teatro for the Soul Inc · 501(c)(3) Educational Non-Profit · EIN: 81-4825762
W-9 ready for School District & Corporate Vendor Setup, Purchase Orders, and Net 30 terms.
Official Contact: ${officialEmail} | Phone: (787) 466-8800`;

    navigator.clipboard.writeText(summary);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const pkg = trainingPackages.find(p => p.id === selectedFormat) || trainingPackages[0];
    const subject = encodeURIComponent(`Training Booking: ${pkg.titleEn.split(':')[0]} - ${companyName || 'Inquiry'}`);
    const body = encodeURIComponent(
      `Organization / School: ${companyName}\n` +
      `Contact Person: ${contactName}\n` +
      `Email: ${contactEmail}\n` +
      `Phone: ${contactPhone}\n` +
      `Selected 2-Hour Training Program: ${pkg.titleEn}\n` +
      `Estimated Audience: ${estimatedAudience}\n` +
      `Location: ${eventLocation}\n` +
      `Preferred Date: ${preferredDate}\n` +
      `Notes: ${notes}\n\n` +
      `Format: 2 Hours duration (60-min live play + 60-min interactive workshop).\n` +
      `Entity: Teatro for the Soul Inc (EIN: 81-4825762).\n`
    );
    window.location.href = `mailto:${officialEmail}?subject=${subject}&body=${body}`;
    setInquirySent(true);
  };

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#FCF9F2] min-h-screen relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#1E3A8A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-950 bg-amber-100/90 px-3.5 py-1 rounded-full border border-amber-300 shadow-2xs mb-3.5">
            <Briefcase className="w-3.5 h-3.5 text-[#9E1B32]" />
            <span>Don Quijote en USA for Business</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            {isSpanish ? (
              <>
                <span className="text-[#1E3A8A]">Don Quijote en USA </span>
                <span className="text-[#9E1B32]">for Business</span>
              </>
            ) : (
              <>
                <span className="text-[#1E3A8A]">Don Quixote in USA </span>
                <span className="text-[#9E1B32]">for Business</span>
              </>
            )}
          </h1>

          <p className="font-garamond text-xl sm:text-2xl text-stone-800 mt-3 italic leading-relaxed">
            {isSpanish
              ? 'Teatro Corporativo y Educativo: Obra Teatral en Vivo + Taller Vivencial.'
              : 'Corporate & Educational Theatre: Live Performance + Interactive Workshop.'}
          </p>

          <p className="font-sans text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl mx-auto">
            {isSpanish
              ? 'Ideal para maestros, distritos escolares, claustro docente y equipos de empresas que buscan fortalecer la ética institucional o conectar emocionalmente con sus audiencias.'
              : 'Ideal for teachers, school districts, educators, and organizational teams seeking to strengthen ethical culture or connect emotionally with their audience.'}
          </p>

          {/* Quick Package Badge Banner */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3 bg-stone-100/90 border border-stone-300 rounded-xl p-2.5 px-4 text-xs font-sans text-stone-800">
            <span className="font-mono font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-300 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-amber-800" />
              <span>Don Quijote en USA for Business</span>
            </span>
            <span className="text-stone-400">•</span>
            <span className="font-semibold text-stone-700">
              {isSpanish ? '1 Hora de Obra Teatral en Vivo + 1 Hora de Taller Práctico' : '1 Hour Live Play + 1 Hour Practical Workshop'}
            </span>
          </div>
        </div>

        {/* THE TWO OFFICIAL DON QUIJOTE EN USA FOR BUSINESS PROGRAMS */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingPackages.map((pkg) => {
              const isSelected = selectedFormat === pkg.id;
              return (
                <div
                  key={pkg.id}
                  className={`bg-white border-3 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between transition-all duration-300 ${
                    isSelected 
                      ? 'border-[#9E1B32] ring-3 ring-[#9E1B32]/20 shadow-xl' 
                      : 'border-amber-300 hover:border-amber-400'
                  }`}
                >
                  <div>
                    {/* Header Top Tags */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${pkg.badgeStyle}`}>
                        {isSpanish ? pkg.badgeEs : pkg.badgeEn}
                      </span>
                      <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-stone-700 bg-stone-100 px-2.5 py-1 rounded-lg border border-stone-200">
                        <Clock className="w-3.5 h-3.5 text-amber-700" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    {/* Format Structure Banner */}
                    <div className="mb-4 p-3 bg-stone-50 border border-stone-200 rounded-xl">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-amber-700" />
                          <span>{isSpanish ? 'Formato: 2 Horas' : 'Format: 2 Hours'}</span>
                        </span>
                        <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                          {isSpanish ? 'Obra + Taller' : 'Play + Workshop'}
                        </span>
                      </div>
                      <div className="text-xs font-sans text-stone-700 font-medium mt-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{isSpanish ? pkg.breakdownEs : pkg.breakdownEn}</span>
                      </div>
                    </div>

                    {/* Target Audience (Ideal for Teachers / Employees) */}
                    <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-[#9E1B32] bg-rose-50 border border-rose-200 px-3 py-1.5 rounded-lg w-full">
                      <Users className="w-4 h-4 shrink-0 text-[#9E1B32]" />
                      <span>{isSpanish ? pkg.targetEs : pkg.targetEn}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900 leading-tight mb-3">
                      {isSpanish ? pkg.titleEs : pkg.titleEn}
                    </h2>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                      {isSpanish ? pkg.descEs : pkg.descEn}
                    </p>

                    {/* Modules / Deliverables */}
                    <div className="pt-4 border-t border-stone-200">
                      <div className="text-xs font-mono font-bold uppercase text-[#1E3A8A] mb-3">
                        {isSpanish ? pkg.pillarsTitleEs : pkg.pillarsTitleEn}
                      </div>
                      <ul className="space-y-2.5 text-xs text-stone-700 font-sans">
                        {(isSpanish ? pkg.bulletsEs : pkg.bulletsEn).map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-6 mt-6 border-t border-stone-100">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedFormat(pkg.id);
                        document.getElementById('corporate-booking-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        isSelected 
                          ? 'bg-[#9E1B32] text-white shadow-md' 
                          : 'bg-amber-50 hover:bg-amber-100 text-stone-900 border border-amber-400'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-4 h-4 text-amber-300" />
                          <span>{isSpanish ? '✓ Capacitación Seleccionada' : '✓ Training Selected'}</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-amber-700" />
                          <span>{isSpanish ? 'Seleccionar esta Capacitación' : 'Select this Training'}</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Why this format works: Live Play + Workshop Synergy */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-amber-50 via-stone-50 to-blue-50 border-2 border-amber-300 rounded-2xl shadow-xs mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#9E1B32] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                1
              </div>
              <h3 className="font-cinzel text-base font-bold text-stone-900">
                {isSpanish ? '60 Min: Obra Teatral en Vivo' : '60 Min: Live Theatrical Performance'}
              </h3>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                {isSpanish
                  ? 'Wilderman García encarna a Don Quijote en una producción de ritmo ágil que sacude el pensamiento convencional, desarma la apatía y genera una apertura emocional inmediata.'
                  : 'Wilderman García brings Don Quixote to life in an agile, dynamic performance that breaks conventional cynicism and immediately engages the audience emotionally.'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                2
              </div>
              <h3 className="font-cinzel text-base font-bold text-stone-900">
                {isSpanish ? '60 Min: Taller Vivencial Dirigido' : '60 Min: Guided Experiential Workshop'}
              </h3>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                {isSpanish
                  ? 'Transición fluida a la aplicación práctica: o bien un laboratorio de ética y gobernanza con Gabriel Villegas (Auditor), o bien un masterclass de conexión pedagógica para maestros.'
                  : 'Seamless transition into practical application: either an ethics & governance lab led by Senior Auditor Gabriel Villegas, or a pedagogical stagecraft masterclass for teachers.'}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                3
              </div>
              <h3 className="font-cinzel text-base font-bold text-stone-900">
                {isSpanish ? 'Impacto Duradero & Certificado' : 'Long-Lasting Impact & Compliance'}
              </h3>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                {isSpanish
                  ? 'Los participantes se llevan herramientas vivenciales, no diapositivas olvidadas. Elegible para horas de desarrollo profesional docente (Title II) o capacitación anual corporativa.'
                  : 'Participants walk away with muscle memory and emotional resonance, not forgotten slides. Eligible for Title II teacher PD hours or annual corporate compliance credit.'}
              </p>
            </div>

          </div>
        </div>

        {/* Corporate & District Procurement Trust Bar */}
        <div className="p-6 bg-white border-2 border-stone-300 rounded-2xl shadow-xs mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-stone-200 pb-4 md:pb-0 md:pr-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E1B32]">
                {isSpanish ? 'Entidad Legal' : 'Legal Entity'}
              </span>
              <h4 className="font-cinzel text-base font-bold text-stone-900 mt-0.5">Teatro for the Soul Inc</h4>
              <p className="text-xs text-stone-600 font-sans">
                {isSpanish ? '501(c)(3) Educativa y Teatral' : '501(c)(3) Educational Non-Profit'}
              </p>
              <div className="mt-2 font-mono text-xs font-bold text-emerald-800 bg-emerald-100 inline-block px-2.5 py-0.5 rounded border border-emerald-300">
                EIN: 81-4825762
              </div>
            </div>

            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block font-medium">
                    {isSpanish ? 'Vendor Setup & Formulario W-9' : 'Vendor Registration & W-9'}
                  </strong>
                  <span className="text-stone-600">
                    {isSpanish ? 'Incorporación rápida en distritos escolares y empresas.' : 'Fast onboarding into school district and corporate vendor databases.'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FileText className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block font-medium">
                    {isSpanish ? 'Facturación Net 30 y Órdenes de Compra' : 'Net 30 & Purchase Orders (PO)'}
                  </strong>
                  <span className="text-stone-600">
                    {isSpanish ? 'Aceptamos transferencias ACH, cheques de distrito y tarjetas corporativas.' : 'We accept ACH, district checks, and corporate credit cards.'}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Award className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block font-medium">
                    {isSpanish ? 'Elegible para Fondos Title II / PD' : 'Eligible for Title II / PD Funds'}
                  </strong>
                  <span className="text-stone-600">
                    {isSpanish ? 'Alineado con fondos de desarrollo profesional y bienestar docente.' : 'Qualifies for federal and state professional development grant allocations.'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking & Proposal Form */}
        <div id="corporate-booking-form" className="bg-white border-2 border-amber-400/90 rounded-2xl shadow-md p-6 sm:p-8">
          <div className="max-w-3xl mb-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-[#1E3A8A] bg-blue-100/90 px-3 py-1 rounded-full border border-blue-200">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{isSpanish ? 'Reserva de Capacitación (2 Horas)' : 'Training Program Reservation (2 Hours)'}</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              {isSpanish ? 'Solicite la Capacitación para su Escuela u Organización' : 'Request Training for Your School or Organization'}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-stone-600 mt-1">
              {isSpanish
                ? 'Complete los datos para generar el resumen formal de la propuesta o enviarla directamente a nuestro equipo.'
                : 'Fill in your details to generate a formal summary or submit directly to our team.'}
            </p>
          </div>

          <form onSubmit={handleSendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Package Selection Field (Top Priority) */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-stone-900 mb-1.5">
                  {isSpanish ? 'Seleccione la Capacitación de 2 Horas (Obra + Taller) *' : 'Select 2-Hour Training Program (Play + Workshop) *'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trainingPackages.map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setSelectedFormat(pkg.id)}
                      className={`text-left p-3.5 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        selectedFormat === pkg.id 
                          ? 'border-[#9E1B32] bg-rose-50/70 ring-2 ring-[#9E1B32]/20' 
                          : 'border-stone-200 bg-white hover:border-amber-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-[10px] font-mono font-bold text-stone-600 uppercase">
                            2 Horas · Obra + Taller
                          </span>
                          {selectedFormat === pkg.id && (
                            <Check className="w-4 h-4 text-[#9E1B32]" />
                          )}
                        </div>
                        <div className="font-cinzel text-xs font-bold text-stone-900 leading-snug">
                          {isSpanish ? pkg.titleEs : pkg.titleEn}
                        </div>
                      </div>
                      <div className="mt-2 text-[11px] font-sans text-stone-600">
                        {isSpanish ? pkg.targetEs : pkg.targetEn}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {isSpanish ? 'Escuela, Distrito u Organización *' : 'School, District or Company *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isSpanish ? 'Ej. Distrito Escolar, Escuela Superior, Empresa...' : 'e.g., Orange County Public Schools, High School, Corporation...'}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-[#9E1B32] focus:ring-1 focus:ring-[#9E1B32] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {isSpanish ? 'Persona de Contacto y Cargo *' : 'Contact Person & Title *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isSpanish ? 'Ej. Prof. Carmen Santos · Directora / Coordinadora de Desarrollo Docente' : 'e.g., Dr. Carmen Smith · Principal / Professional Development Lead'}
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-[#9E1B32] focus:ring-1 focus:ring-[#9E1B32] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {isSpanish ? 'Correo Electrónico Oficial *' : 'Official Email Address *'}
                </label>
                <input
                  type="email"
                  required
                  placeholder="contact@school.edu"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-[#9E1B32] focus:ring-1 focus:ring-[#9E1B32] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {isSpanish ? 'Teléfono Directo' : 'Direct Phone'}
                </label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-[#9E1B32] focus:ring-1 focus:ring-[#9E1B32] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {isSpanish ? 'Audiencia Estimada (Maestros o Empleados)' : 'Estimated Attendance (Teachers or Employees)'}
                </label>
                <select
                  value={estimatedAudience}
                  onChange={(e) => setEstimatedAudience(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-[#9E1B32] focus:ring-1 focus:ring-[#9E1B32] outline-none bg-white"
                >
                  <option value="20-50">{isSpanish ? '20 a 50 participantes (Claustro o Comité)' : '20 to 50 participants (Faculty or Committee)'}</option>
                  <option value="50-150">{isSpanish ? '50 a 150 participantes (Escuela Completa)' : '50 to 150 participants (Whole School Faculty)'}</option>
                  <option value="150-300">{isSpanish ? '150 a 300 participantes (Distrito / Convención)' : '150 to 300 participants (District Assembly)'}</option>
                  <option value="300+">{isSpanish ? 'Más de 300 participantes (Conferencia Anual)' : '300+ participants (Annual Conference)'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {isSpanish ? 'Ciudad y Estado del Evento' : 'Event City & State'}
                </label>
                <input
                  type="text"
                  placeholder={isSpanish ? 'Ej. Orlando, FL / San Juan, PR / Dallas, TX...' : 'e.g., Orlando, FL / San Juan, PR / Dallas, TX...'}
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-[#9E1B32] focus:ring-1 focus:ring-[#9E1B32] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {isSpanish ? 'Fecha Estimada o Ventana Temporal' : 'Target Date or Timeframe'}
                </label>
                <input
                  type="text"
                  placeholder={isSpanish ? 'Ej. Jornada de Desarrollo Profesional / Mes de la Herencia Hispana...' : 'e.g., Teacher In-Service Day / Fall 2026 / Spring 2027...'}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-[#9E1B32] focus:ring-1 focus:ring-[#9E1B32] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                {isSpanish ? 'Notas u Objetivos Pedagógicos / Institucionales' : 'Specific Goals or Institutional Notes'}
              </label>
              <textarea
                rows={2}
                placeholder={isSpanish ? 'Detalles sobre los objetivos del claustro docente o de la empresa...' : 'Details on professional development goals or organizational focus...'}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-stone-300 focus:border-[#9E1B32] focus:ring-1 focus:ring-[#9E1B32] outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyProposal}
                  className="text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-600" />}
                  <span>{copiedQuote ? (isSpanish ? '¡Ficha Copiada!' : 'Summary Copied!') : (isSpanish ? 'Copiar Propuesta para la Dirección' : 'Copy Proposal Summary')}</span>
                </button>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="submit"
                  className="btn-primary-wine text-xs font-bold py-2 px-5 flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isSpanish ? 'Enviar Solicitud por Email' : 'Submit Booking Inquiry'}</span>
                </button>
              </div>
            </div>

            {inquirySent && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-lg text-xs text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {isSpanish
                    ? 'Se ha abierto su cliente de correo con los datos preparados para la capacitación. También puede escribirnos directamente a teatroforthesoul@gmail.com.'
                    : 'Your email client has been opened with the training inquiry draft. You can also reach us at teatroforthesoul@gmail.com.'}
                </span>
              </div>
            )}
          </form>
        </div>

      </div>

    </div>
  );
}
