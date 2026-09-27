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

export const WILDERMAN_OFFICIAL_PHOTO = {
  src: 'https://i.postimg.cc/4sYJXRq5/IMG-0656.png',
  captionEs: 'Wilderman García encarnando a Don Quijote en Don Quijote en USA',
  captionEn: 'Wilderman García embodying Don Quixote in Don Quixote in USA',
};

export const GABRIEL_PHOTOS = [
  {
    id: 'img-0805',
    name: 'IMG-0805 (Oficial)',
    src: 'https://i.postimg.cc/R0kZ1Gbw/IMG-0805.png',
    fallbackSrc: 'https://i.postimg.cc/r8mRkP1Z/IMG-0805.png',
  },
  {
    id: 'img-0774',
    name: 'IMG-0774',
    src: 'https://i.postimg.cc/bv7w0LFn/IMG-0774.jpg',
    fallbackSrc: 'https://i.postimg.cc/fwLSNrc8/IMG-0774.jpg',
  },
  {
    id: 'img-0799',
    name: 'IMG-0799',
    src: 'https://i.postimg.cc/zfsGwpPn/IMG-0799.png',
    fallbackSrc: 'https://i.postimg.cc/2z6LDKQX/IMG-0799.png',
  },
  {
    id: 'img-0505',
    name: 'IMG-0505',
    src: 'https://i.postimg.cc/Jhfz3Kd3/IMG-0505.png',
    fallbackSrc: 'https://i.postimg.cc/vQBxsNrK/IMG-0505.png',
  },
  {
    id: 'img-3476',
    name: 'IMG-3476',
    src: 'https://i.postimg.cc/XvRYKxDf/IMG-3476.jpg',
    fallbackSrc: 'https://i.postimg.cc/SysYhv6v/IMG-3476.jpg',
  },
];

export default function AboutUsPage() {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const officialEmail = "teatroforthesoul@gmail.com";
  const { language: lang, setLanguage, toggleLanguage, isSpanish } = useLanguage();
  const [selectedGabrielPhoto, setSelectedGabrielPhoto] = React.useState(0);

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
                      src={WILDERMAN_OFFICIAL_PHOTO.src} 
                      alt="Wilderman García - Don Quijote en USA" 
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-lg border-2 border-amber-400 ring-4 ring-[#9E1B32]/30"
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
                    <div className="text-[11px] font-sans text-stone-500 mt-0.5">
                      {isSpanish ? WILDERMAN_OFFICIAL_PHOTO.captionEs : WILDERMAN_OFFICIAL_PHOTO.captionEn}
                    </div>
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

            </div>
          </div>

          {/* 2. GABRIEL VILLEGAS (PLAYWRIGHT & FOUNDER) */}
          <div className="bg-white/95 backdrop-blur-md border-2 border-amber-300 rounded-2xl shadow-xl overflow-hidden ring-2 ring-amber-300/40">
            {/* Spanish Golden Age Spectrum Top Bar */}
            <div className="h-1.5 rainbow-gradient-bar" />

            <div className="p-6 sm:p-9 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200 pb-5">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="relative shrink-0 group">
                    <img 
                      src={GABRIEL_PHOTOS[selectedGabrielPhoto].src} 
                      alt="Gabriel Villegas - Dramaturgo y Fundador" 
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.triedFallback) {
                          target.dataset.triedFallback = 'true';
                          target.src = GABRIEL_PHOTOS[selectedGabrielPhoto].fallbackSrc;
                        }
                      }}
                      className="w-18 h-18 sm:w-22 sm:h-22 rounded-2xl object-cover shadow-lg border-2 border-blue-400 ring-4 ring-[#1E40AF]/30 group-hover:scale-105 transition-transform duration-300 bg-stone-900"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 text-white flex items-center justify-center shadow-md border border-white">
                      <Feather className="w-3.5 h-3.5 text-amber-300" />
                    </div>
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

              {/* Photo Selector for Gabriel Villegas */}
              <div className="pt-3 border-t border-amber-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-[#1E3A8A] font-bold">
                    {lang === 'en' ? 'Portrait Selection · Gabriel Villegas' : 'Selección de Retrato · Gabriel Villegas'}
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">
                    {lang === 'en' ? 'Selected: ' + GABRIEL_PHOTOS[selectedGabrielPhoto].name : 'Elegida: ' + GABRIEL_PHOTOS[selectedGabrielPhoto].name}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {GABRIEL_PHOTOS.map((photo, idx) => (
                    <button
                      key={photo.id}
                      type="button"
                      onClick={() => setSelectedGabrielPhoto(idx)}
                      className={`text-xs font-mono py-1 px-2.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                        selectedGabrielPhoto === idx
                          ? 'bg-[#1E40AF] text-white border-blue-900 font-bold shadow-xs'
                          : 'bg-white text-stone-700 border-amber-300 hover:bg-blue-50'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${selectedGabrielPhoto === idx ? 'bg-amber-300' : 'bg-stone-300'}`}></span>
                      <span>{photo.name}</span>
                    </button>
                  ))}
                </div>
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
