/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Award, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Drama, 
  Building2, 
  Mail, 
  Ticket, 
  ExternalLink, 
  ShieldCheck, 
  Feather,
  Globe,
  Languages,
  CheckCircle2
} from 'lucide-react';
import quijoteOverviewBg from '../assets/images/quijote_overview_minimalist_bg_1790503674706.jpg';
import { useLanguage } from '../context/LanguageContext';

export default function AboutUsPage() {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const officialEmail = "teatroforthesoul@gmail.com";
  const { language: lang, setLanguage, toggleLanguage, isSpanish } = useLanguage();

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
        
        {/* Header with Language Selector Toggle */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E1B32] bg-rose-100 px-3.5 py-1 rounded-full border border-rose-300 shadow-2xs mb-3">
            <Feather className="w-3.5 h-3.5 text-[#9E1B32]" />
            <span>Creative Leadership · Biographies</span>
          </div>
          
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {lang === 'en' ? (
              <>
                <span className="text-[#1E3A8A]">About </span>
                <span className="text-[#B91C1C]">the Creative Team</span>
              </>
            ) : (
              <>
                <span className="text-[#1E3A8A]">Equipo </span>
                <span className="text-[#B91C1C]">Creativo y Artístico</span>
              </>
            )}
          </h1>
          
          <p className="font-garamond text-lg sm:text-xl text-stone-700 mt-2.5 italic">
            {lang === 'en'
              ? 'Meet the artist and the playwright bringing Cervantes’ timeless classic alive for students and educators across the United States.'
              : 'Conozca al actor y al dramaturgo que dan vida a la obra cumbre de Cervantes para estudiantes y educadores en los Estados Unidos.'}
          </p>

          {/* Language Switcher Pill */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`text-xs font-bold py-1.5 px-4 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                lang === 'en'
                  ? 'bg-[#9E1B32] text-white border-[#730E20] shadow-xs'
                  : 'bg-white text-stone-700 border-amber-300 hover:bg-amber-50'
              }`}
            >
              <span>English</span>
            </button>

            <button
              type="button"
              onClick={() => setLanguage('es')}
              className={`text-xs font-bold py-1.5 px-4 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                lang === 'es'
                  ? 'bg-[#9E1B32] text-white border-[#730E20] shadow-xs'
                  : 'bg-white text-stone-700 border-amber-300 hover:bg-amber-50'
              }`}
            >
              <span>Español</span>
            </button>
          </div>
        </div>

        {/* 2 Main Biography Cards */}
        <div className="space-y-8 mb-14">
          
          {/* 1. WILDERMAN GARCÍA (ACTOR) */}
          <div className="bg-white/95 backdrop-blur-md border-2 border-amber-300 rounded-2xl shadow-xl overflow-hidden ring-2 ring-amber-300/40">
            {/* Spanish Golden Age Spectrum Top Bar */}
            <div className="h-1.5 rainbow-gradient-bar" />

            <div className="p-6 sm:p-9 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200 pb-5">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="relative shrink-0 group">
                    <img 
                      src="https://i.postimg.cc/38SSnVKm/IMG-0937.jpg" 
                      alt="Wilderman García caracterizado como Don Quijote" 
                      className="w-18 h-18 sm:w-22 sm:h-22 rounded-2xl object-cover shadow-lg border-2 border-amber-400 ring-4 ring-[#9E1B32]/30 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-stone-900 flex items-center justify-center shadow-md border border-white">
                      <Sparkles className="w-3.5 h-3.5 text-stone-900" />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
                        {lang === 'en' ? 'Starring Lead Actor' : 'Actor Protagónico'}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-rose-900 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-300 flex items-center gap-1">
                        <Award className="w-3 h-3 text-rose-600" />
                        <span>Madrid Film Awards Winner</span>
                      </span>
                    </div>
                    <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900">
                      Wilderman García
                    </h2>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-950 border border-emerald-300 text-xs px-3.5 py-1.5 rounded-full font-bold self-start sm:self-center shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>EB-1A Extraordinary Ability Visa</span>
                </div>
              </div>

              {/* Biography Narrative */}
              <div className="prose text-stone-800 text-sm sm:text-base leading-relaxed space-y-4">
                {lang === 'en' ? (
                  <>
                    <p className="font-sans leading-relaxed">
                      Wilderman García is an internationally acclaimed actor with more than three decades of distinguished career across cinema, theatre, and television. Having starred in over 300 professional productions, his virtuosity has been celebrated globally, including prestigious honors at the Madrid Film Awards.
                    </p>
                    <p className="font-sans leading-relaxed">
                      In recognition of his artistic excellence, the United States Government granted him the rare and prestigious status of Extraordinary Ability (EB-1A Visa), an honor reserved for individuals who have risen to the very top of their field internationally.
                    </p>
                    <p className="font-sans leading-relaxed">
                      A graduate in Performing Arts from Universidad de Caldas with advanced postgraduate studies in Cultural Administration and Management from the Graduate School of the University of Puerto Rico, Wilderman seamlessly unites the fervor of the live stage with cultivating future generations of talent. He actively directs and champions actor-training institutions, including the <em>Conservatorio de Artes Escénicas de Orlando</em> (Orlando Performing Arts Conservatory) and the <em>Academia de Cine y Teatro de Puerto Rico</em> (Film and Theatre Academy of Puerto Rico).
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-sans leading-relaxed">
                      Actor con más de tres décadas de trayectoria internacional en cine, teatro y televisión, con participación en más de 300 producciones y galardonado en los Madrid Film Awards. Su excelencia artística le valió el reconocimiento de Habilidad Extraordinaria (Visa EB1A) por el Gobierno de los Estados Unidos.
                    </p>
                    <p className="font-sans leading-relaxed">
                      Graduado de Artes Escénicas en la Universidad de Caldas y con estudios de posgrado en Administración y Gestión Cultural en la Escuela Graduada de la Universidad de Puerto Rico, combina la pasión del escenario con la formación de nuevos talentos, impulsando espacios de desarrollo actoral como el <em>Conservatorio de Artes Escénicas de Orlando</em> y la <em>Academia de Cine y Teatro de Puerto Rico</em>.
                    </p>
                  </>
                )}
              </div>

              {/* Live Performance Photos Strip */}
              <div className="pt-4 border-t border-amber-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase text-[#9E1B32] font-bold block">
                    {lang === 'en' ? 'Live Stage Performances · Don Quijote en USA' : 'Escenas en Vivo · Don Quijote en USA'}
                  </span>
                  <a href="#galeria-teatral" className="text-[10px] font-mono text-[#1E3A8A] font-semibold hover:underline">
                    {lang === 'en' ? 'Explore full gallery (12)' : 'Ver galería completa (12)'} &rarr;
                  </a>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                  <div className="rounded-xl overflow-hidden border border-amber-300 shadow-xs group bg-stone-900 relative aspect-square">
                    <img 
                      src="https://i.postimg.cc/pVQgkk69/IMG-0942.jpg" 
                      alt="Wilderman García - Don Quijote en Escena" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 filter brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute bottom-1 inset-x-1 bg-black/80 backdrop-blur-xs text-[9px] font-mono text-amber-300 px-1 py-0.5 rounded text-center font-bold truncate">
                      {lang === 'en' ? 'On Stage' : 'En Escena'}
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-rose-300 shadow-xs group bg-stone-900 relative aspect-square">
                    <img 
                      src="https://i.postimg.cc/nFRR0gHk/IMG-0851.jpg" 
                      alt="Wilderman García - Comedia gestual en vivo" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 filter brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute bottom-1 inset-x-1 bg-black/80 backdrop-blur-xs text-[9px] font-mono text-rose-300 px-1 py-0.5 rounded text-center font-bold truncate">
                      Comedia Gestual
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-blue-300 shadow-xs group bg-stone-900 relative aspect-square">
                    <img 
                      src="https://i.postimg.cc/rVnnQ38j/IMG-0911.jpg" 
                      alt="Wilderman García - Momento dramático" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 filter brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute bottom-1 inset-x-1 bg-black/80 backdrop-blur-xs text-[9px] font-mono text-blue-300 px-1 py-0.5 rounded text-center font-bold truncate">
                      Fuerza Poética
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-amber-300 shadow-xs group bg-stone-900 relative aspect-square">
                    <img 
                      src="https://i.postimg.cc/RvHkqSM9/IMG-0784.jpg" 
                      alt="Wilderman García - Mímica quijotesca" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 filter brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute bottom-1 inset-x-1 bg-black/80 backdrop-blur-xs text-[9px] font-mono text-amber-300 px-1 py-0.5 rounded text-center font-bold truncate">
                      Mímica Clásica
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-red-300 shadow-xs group bg-stone-900 relative aspect-square">
                    <img 
                      src="https://i.postimg.cc/3KQPvsRH/IMG-0790.jpg" 
                      alt="Wilderman García - Pasión escénica" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 filter brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute bottom-1 inset-x-1 bg-black/80 backdrop-blur-xs text-[9px] font-mono text-red-300 px-1 py-0.5 rounded text-center font-bold truncate">
                      Pasión Teatral
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-teal-300 shadow-xs group bg-stone-900 relative aspect-square">
                    <img 
                      src="https://i.postimg.cc/TRRvS86G/IMG-1826.jpg" 
                      alt="Tertulia académica con estudiantes" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 filter brightness-95 group-hover:brightness-105"
                    />
                    <div className="absolute bottom-1 inset-x-1 bg-black/80 backdrop-blur-xs text-[9px] font-mono text-teal-300 px-1 py-0.5 rounded text-center font-bold truncate">
                      Tertulia Escolar
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 2. GABRIEL VILLEGAS (PLAYWRIGHT & FOUNDER) */}
          <div className="bg-white/95 backdrop-blur-md border-2 border-amber-300 rounded-2xl shadow-xl overflow-hidden ring-2 ring-amber-300/40">
            {/* Spanish Golden Age Spectrum Top Bar */}
            <div className="h-1.5 rainbow-gradient-bar" />

            <div className="p-6 sm:p-9 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200 pb-5">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E40AF] via-[#2563EB] to-[#4F46E5] text-white flex items-center justify-center font-cinzel font-bold text-2xl shadow-md shrink-0 ring-2 ring-blue-400">
                    GV
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-300">
                        {lang === 'en' ? 'Playwright & Founder' : 'Dramaturgo y Fundador'}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300 flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-emerald-700" />
                        <span>Teatro for the Soul Inc</span>
                      </span>
                    </div>
                    <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900">
                      Gabriel Villegas
                    </h2>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-950 border border-amber-300 text-xs px-3.5 py-1.5 rounded-full font-bold self-start sm:self-center shadow-2xs">
                  <GraduationCap className="w-4 h-4 text-amber-700" />
                  <span>Educator &amp; Federal Career Professional</span>
                </div>
              </div>

              {/* Biography Narrative */}
              <div className="prose text-stone-800 text-sm sm:text-base leading-relaxed space-y-4">
                {lang === 'en' ? (
                  <>
                    <p className="font-sans leading-relaxed">
                      Gabriel Villegas is an auditor by profession with more than 20 years of experience in the United States federal government, an educator, and a playwright passionately dedicated to preserving and championing Hispanic culture and classic literature.
                    </p>
                    <p className="font-sans leading-relaxed">
                      He holds advanced academic training in Administration, Spanish Language &amp; Literature, and Education from the University of Central Florida (UCF) and the University of Puerto Rico (UPR). Having served as a university professor and instructional training project designer, he concentrates his theatrical work on reinterpreting literary masterworks with explicit pedagogical intention, cultural celebration, and the protection of intellectual property.
                    </p>
                    <p className="font-sans leading-relaxed">
                      In 2017, Gabriel founded Teatro for the Soul Inc to cultivate, produce, and elevate Hispanic-American theatre in Orlando, Florida. Today, he expands this educational and artistic mission through educational initiatives and artistic training platforms across Florida and Puerto Rico.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-sans leading-relaxed">
                      Auditor de profesión con más de 20 años de experiencia en el gobierno federal, educador y dramaturgo comprometido con la cultura hispana. Cuenta con formación en administración, español y educación por la Universidad de Central Florida y la Universidad de Puerto Rico.
                    </p>
                    <p className="font-sans leading-relaxed">
                      Fue profesor universitario y diseñador de proyectos de capacitación, enfocando su labor teatral en reinterpretar clásicos con propósito pedagógico y promover la propiedad intelectual. En 2017 fundó Teatro for the Soul para impulsar el teatro hispanoamericano en Orlando, visión que expande a través de las plataformas de formación artística que lidera en Florida y Puerto Rico.
                    </p>
                  </>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* Company Overview & Institutional Contact Card */}
        <div className="bg-gradient-to-r from-amber-50 via-rose-50/60 to-amber-50 border-2 border-amber-300 p-7 sm:p-8 rounded-2xl shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <a 
                href="https://postimg.cc/bzzfMXhz"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-2xl overflow-hidden border-2 border-amber-400 p-1.5 bg-white shadow-md hover:scale-105 transition-transform"
                title="Ver emblema oficial en PostImg"
              >
                <img 
                  src="https://i.postimg.cc/bzzfMXhz/C4A74BCD-EDB2-4F9B-AFBC-F2C452CB70B5.png" 
                  alt="Teatro for the Soul Inc - Emblema Oficial" 
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </a>

              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E1B32] block mb-1">
                  {lang === 'en' ? 'The Producing Entity' : 'Entidad Productora'}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900">
                  Teatro for the Soul Inc
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 font-sans mt-1 max-w-2xl">
                  {lang === 'en' 
                    ? 'A non-profit educational arts organization dedicated to bilingual theatre, classical literature adaptations, and Hispanic heritage engagement in schools and universities nationwide.'
                    : 'Organización artística educativa sin fines de lucro dedicada al teatro bilingüe, la reinterpretación pedagógica de clásicos universales y la afirmación de la herencia hispana en escuelas y universidades.'}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={zeffyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-wine text-xs py-2.5 px-4.5 font-bold flex items-center gap-1.5 shadow-md"
              >
                <Ticket className="w-3.5 h-3.5 text-amber-300" />
                <span>Reserve on Zeffy</span>
                <ExternalLink className="w-3 h-3 opacity-90" />
              </a>

              <a
                href={`mailto:${officialEmail}`}
                className="btn-outline-refined text-xs py-2.5 px-4 font-bold bg-white flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#9E1B32]" />
                <span>{officialEmail}</span>
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-amber-200 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-stone-600">
            <span>Entity: <strong>Teatro for the Soul Inc</strong></span>
            <span>EIN: <strong className="text-emerald-700 bg-white px-2 py-0.5 rounded border border-emerald-300">81-4825762</strong></span>
            <span>Official Web: <strong>www.donquijoteenusa.com</strong></span>
          </div>
        </div>

      </div>
    </div>
  );
}
