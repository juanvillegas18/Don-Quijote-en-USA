/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Camera, 
  Sparkles, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  BookOpen,
  Compass,
  MessageSquare,
  Users
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface GalleryPhoto {
  id: string;
  src: string;
  fallbackSrc: string;
  externalLink: string;
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
  tagEs: string;
  tagEn: string;
}

export const STAGE_PHOTOS: GalleryPhoto[] = [
  {
    id: 'img-0943',
    src: 'https://i.postimg.cc/QDvh8ygJ/IMG-0943.jpg',
    fallbackSrc: 'https://i.postimg.cc/zDw9ppcy/IMG-0943.jpg',
    externalLink: 'https://postimg.cc/QDvh8ygJ',
    titleEs: 'La Caracterización de Don Quijote',
    titleEn: 'Characterization of Don Quixote',
    descEs: 'Wilderman García encarna al personaje con profundidad actoral, uniendo la expresividad gestual con la nobleza de los ideales clásicos.',
    descEn: 'Wilderman García portrays the iconic protagonist with depth and skill, uniting physical comedy with the nobility of classic ideals.',
    tagEs: 'El Personaje',
    tagEn: 'The Solo Portrayal'
  },
  {
    id: 'img-0945',
    src: 'https://i.postimg.cc/0vhPkBGn/IMG-0945.jpg',
    fallbackSrc: 'https://i.postimg.cc/h48HMM5Q/IMG-0945.jpg',
    externalLink: 'https://postimg.cc/0vhPkBGn',
    titleEs: 'Puesta en Escena en el Auditorio',
    titleEn: 'Theatrical Staging in the Auditorium',
    descEs: 'Representación en vivo de 45 minutos diseñada para conectar con los estudiantes mediante el humor, el dinamismo y la emoción literaria.',
    descEn: 'A brisk 45-minute live performance designed to engage students through dynamic staging, humor, and literary emotion.',
    tagEs: 'En Escena',
    tagEn: 'On Stage'
  },
  {
    id: 'img-1826',
    src: 'https://i.postimg.cc/TRRvS86G/IMG-1826.jpg',
    fallbackSrc: 'https://i.postimg.cc/TRRvS86G/IMG-1826.jpg',
    externalLink: 'https://postimg.cc/TRRvS86G',
    titleEs: 'Tertulia y Diálogo con Estudiantes',
    titleEn: 'Student Dialogue & Post-Show Talkback',
    descEs: '15 minutos de conversatorio interactivo en español donde los alumnos hacen preguntas al actor y debaten los temas de la obra.',
    descEn: '15 minutes of interactive Spanish Q&A where students converse directly with the actor and reflect on the story’s themes.',
    tagEs: 'Con los Estudiantes',
    tagEn: 'With Students'
  }
];

export default function StageGallerySection() {
  const { isSpanish } = useLanguage();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % STAGE_PHOTOS.length);
    }
  }, [selectedPhotoIndex]);

  const prevPhoto = useCallback(() => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + STAGE_PHOTOS.length) % STAGE_PHOTOS.length
      );
    }
  }, [selectedPhotoIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, nextPhoto, prevPhoto]);

  // Subtle Educational Theater Principles
  const theaterPrinciples = [
    {
      icon: BookOpen,
      titleEs: 'Inmersión Lingüística Natural',
      titleEn: 'Natural Language Immersion',
      descEs: 'El contexto visual, corporal y escénico permite que los estudiantes comprendan el español sin traducción, fortaleciendo la escucha activa.',
      descEn: 'Visual, physical, and dramatic context allows students to understand Spanish organically without translation, strengthening active listening.'
    },
    {
      icon: Compass,
      titleEs: 'Pensamiento Crítico y Valores',
      titleEn: 'Critical Thinking & Values',
      descEs: 'A través de las aventuras de Don Quijote, los jóvenes reflexionan sobre la empatía, el honor, la justicia social y el valor de perseverar.',
      descEn: 'Through Don Quixote’s journey, youth reflect on empathy, honor, social justice, and the courage to persevere against all odds.'
    },
    {
      icon: MessageSquare,
      titleEs: 'Participación y Diálogo Horizontal',
      titleEn: 'Active Student Engagement',
      descEs: 'Romper la cuarta pared y dialogar en la tertulia posterior transforma al estudiante en interlocutor activo de su propio aprendizaje.',
      descEn: 'Breaking the fourth wall and engaging in the post-show talkback turns students from passive listeners into active participants.'
    }
  ];

  return (
    <section id="galeria-teatral" className="relative py-16 sm:py-24 bg-[#FAF7F0] border-b-2 border-amber-300/70 overflow-hidden">
      {/* Ambient theatrical spotlight glow in the background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 theatre-stage-glow pointer-events-none -z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-wider uppercase bg-gradient-to-r from-amber-100 via-amber-200/70 to-amber-100 text-amber-950 mb-3 px-4 py-1.5 rounded-full border border-amber-300/90 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#9E1B32] animate-pulse" />
            <span>{isSpanish ? 'Magia Escénica · Teatro Educativo en Vivo' : 'Stage Magic · Live Educational Theatre'}</span>
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            {isSpanish ? (
              <>
                <span className="text-[#1E3A8A]">Don Quijote </span>
                <span className="text-[#9E1B32]">en Escena</span>
              </>
            ) : (
              <>
                <span className="text-[#1E3A8A]">Don Quixote </span>
                <span className="text-[#9E1B32]">on Stage</span>
              </>
            )}
          </h2>
          
          <p className="font-serif italic text-base sm:text-lg text-stone-700 mt-3 max-w-xl mx-auto leading-relaxed">
            {isSpanish
              ? '«El arte del teatro clásico transformado en una vivencia formativa que enciende la imaginación en los auditorios escolares.»'
              : '“The art of classical theatre transformed into an educational journey that ignites young minds across school auditoriums.”'}
          </p>
        </div>

        {/* 3 FEATURED PHOTOGRAPHS WITH THEATRICAL MAGIC FRAME */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-14">
          {STAGE_PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              className="bg-white rounded-2xl overflow-hidden border-2 border-amber-300/60 hover:border-amber-400 hover:magic-gold-aura transition-all duration-500 shadow-md hover:-translate-y-1.5 flex flex-col group relative"
            >
              {/* Subtle top golden light line */}
              <div className="h-1 bg-gradient-to-r from-amber-300 via-[#9E1B32] to-amber-300" />

              {/* Image Container */}
              <div 
                className="relative aspect-4/3 overflow-hidden bg-stone-950 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.src}
                  alt={isSpanish ? photo.titleEs : photo.titleEn}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = photo.fallbackSrc;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out filter brightness-95 group-hover:brightness-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

                {/* Top Badge with subtle theatrical glow */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 backdrop-blur-xs text-amber-300 px-3 py-1 rounded-full border border-amber-400/60 shadow-md flex items-center gap-1">
                    <span>✧</span>
                    <span>{isSpanish ? photo.tagEs : photo.tagEn}</span>
                  </span>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-white/95 text-stone-900 flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-4 h-4 text-[#9E1B32]" />
                  </div>
                </div>
              </div>

              {/* Caption and Information */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-white to-amber-50/30">
                <div>
                  <div className="text-[11px] font-mono text-[#9E1B32] font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>{isSpanish ? 'Momento Teatral' : 'Stage Highlight'} {index + 1}</span>
                  </div>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900 group-hover:text-[#9E1B32] transition-colors leading-snug">
                    {isSpanish ? photo.titleEs : photo.titleEn}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    {isSpanish ? photo.descEs : photo.descEn}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-amber-200/60 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="text-[#1E3A8A] font-bold hover:text-[#9E1B32] transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{isSpanish ? 'Ver en detalle' : 'View full frame'}</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                  <a
                    href={photo.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-amber-700 transition-colors flex items-center gap-1 text-[11px] font-mono"
                  >
                    <span>HD</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SUBTLE EDUCATIONAL THEATER PRINCIPLES APPLIED TO DON QUIJOTE EN USA */}
        <div className="relative bg-gradient-to-br from-white via-amber-50/70 to-rose-50/40 border-2 border-amber-300/80 rounded-3xl p-6 sm:p-10 shadow-lg overflow-hidden">
          {/* Subtle decorative background watermarks */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#9E1B32] bg-white px-3.5 py-1 rounded-full border border-amber-300 shadow-2xs inline-flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span>{isSpanish ? 'Fundamentos Pedagógicos' : 'Educational Theatre Principles'}</span>
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 mt-2.5">
              {isSpanish ? 'El Teatro Educativo en Don Quijote en USA' : 'Educational Theatre in Don Quixote in USA'}
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-[#9E1B32] mx-auto mt-3 rounded-full" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {theaterPrinciples.map((principle) => {
              const Icon = principle.icon;
              return (
                <div 
                  key={principle.titleEs}
                  className="bg-white/95 border border-amber-200 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-amber-400 transition-all duration-300 flex flex-col items-start group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200/60 text-[#9E1B32] flex items-center justify-center mb-3.5 shadow-2xs border border-amber-300/60 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-[#9E1B32]" />
                  </div>
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-stone-900 mb-2 group-hover:text-[#1E3A8A] transition-colors">
                    {isSpanish ? principle.titleEs : principle.titleEn}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {isSpanish ? principle.descEs : principle.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all z-50 cursor-pointer border border-white/20"
            aria-label="Cerrar vista"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all z-50 cursor-pointer border border-white/20 shadow-xl"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all z-50 cursor-pointer border border-white/20 shadow-xl"
            aria-label="Siguiente foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Content */}
          <div 
            className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-xl overflow-hidden border border-amber-300/40 shadow-2xl bg-black max-h-[75vh]">
              <img
                src={STAGE_PHOTOS[selectedPhotoIndex].src}
                alt={isSpanish ? STAGE_PHOTOS[selectedPhotoIndex].titleEs : STAGE_PHOTOS[selectedPhotoIndex].titleEn}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedFallback) {
                    target.dataset.triedFallback = 'true';
                    target.src = STAGE_PHOTOS[selectedPhotoIndex].fallbackSrc;
                  }
                }}
                className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            <div className="mt-3.5 text-center text-white max-w-xl px-4">
              <div className="text-[11px] font-mono text-amber-300 font-bold uppercase tracking-wider mb-1">
                {isSpanish ? STAGE_PHOTOS[selectedPhotoIndex].tagEs : STAGE_PHOTOS[selectedPhotoIndex].tagEn} · {selectedPhotoIndex + 1} / {STAGE_PHOTOS.length}
              </div>
              <h4 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                {isSpanish ? STAGE_PHOTOS[selectedPhotoIndex].titleEs : STAGE_PHOTOS[selectedPhotoIndex].titleEn}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-stone-300 mt-1">
                {isSpanish ? STAGE_PHOTOS[selectedPhotoIndex].descEs : STAGE_PHOTOS[selectedPhotoIndex].descEn}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
