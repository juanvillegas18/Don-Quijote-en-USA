/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Sparkles, 
  Drama, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Ticket,
  Camera,
  MessageSquare,
  UserCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface GalleryPhoto {
  id: string;
  src: string;
  fallbackSrc: string;
  externalLink: string;
  category: 'stage' | 'talk';
  titleEs: string;
  titleEn: string;
  descEs: string;
  descEn: string;
  tagEs: string;
  tagEn: string;
}

export const STAGE_PHOTOS: GalleryPhoto[] = [
  {
    id: 'img-0942',
    src: 'https://i.postimg.cc/pVQgkk69/IMG-0942.jpg',
    fallbackSrc: 'https://i.postimg.cc/yK2s1bhT/IMG-0942.jpg',
    externalLink: 'https://postimg.cc/yK2s1bhT',
    category: 'stage',
    titleEs: 'Don Quijote en el Escenario',
    titleEn: 'Don Quixote on Stage',
    descEs: 'Wilderman García en plena caracterización teatral del hidalgo manchego.',
    descEn: 'Wilderman García in full dramatic portrayal of the man from La Mancha.',
    tagEs: 'En Escena',
    tagEn: 'On Stage'
  },
  {
    id: 'img-0943',
    src: 'https://i.postimg.cc/zDw9ppcy/IMG-0943.jpg',
    fallbackSrc: 'https://i.postimg.cc/QDvh8ygJ/IMG-0943.jpg',
    externalLink: 'https://postimg.cc/QDvh8ygJ',
    category: 'stage',
    titleEs: 'Gesto y Carácter Cervantino',
    titleEn: 'Cervantine Gesture & Character',
    descEs: 'Expresión corporal y energía escénica que cautiva a los alumnos.',
    descEn: 'Physical expression and stage energy that captivates students.',
    tagEs: 'Expresión',
    tagEn: 'Expression'
  },
  {
    id: 'img-0945',
    src: 'https://i.postimg.cc/h48HMM5Q/IMG-0945.jpg',
    fallbackSrc: 'https://i.postimg.cc/0vhPkBGn/IMG-0945.jpg',
    externalLink: 'https://postimg.cc/0vhPkBGn',
    category: 'stage',
    titleEs: 'La Lanza y la Imaginación',
    titleEn: 'The Lance & The Imagination',
    descEs: 'El caballero desafía a los gigantes en el auditorio escolar.',
    descEn: 'The knight confronts imaginary giants in the school auditorium.',
    tagEs: 'Acción',
    tagEn: 'Action'
  },
  {
    id: 'img-0946',
    src: 'https://i.postimg.cc/RC1jGGDn/IMG-0946.jpg',
    fallbackSrc: 'https://i.postimg.cc/4GjsfSvw/IMG-0946.jpg',
    externalLink: 'https://postimg.cc/4GjsfSvw',
    category: 'stage',
    titleEs: 'Comedia y Complicidad',
    titleEn: 'Comedy & Direct Rapport',
    descEs: 'Humor accesible que conecta con estudiantes de todos los niveles.',
    descEn: 'Accessible humor that connects with students across all levels.',
    tagEs: 'Comedia',
    tagEn: 'Comedy'
  },
  {
    id: 'img-0947',
    src: 'https://i.postimg.cc/h48HMM5z/IMG-0947.jpg',
    fallbackSrc: 'https://i.postimg.cc/QDvh8ygb/IMG-0947.jpg',
    externalLink: 'https://postimg.cc/QDvh8ygb',
    category: 'stage',
    titleEs: 'Reflexión y Filosofía',
    titleEn: 'Reflection & Insight',
    descEs: 'La sabiduría cervantina explicada con sencillez y emoción.',
    descEn: 'Cervantine wisdom shared with clarity, warmth, and emotion.',
    tagEs: 'Drama',
    tagEn: 'Drama'
  },
  {
    id: 'img-0948',
    src: 'https://i.postimg.cc/tRdLDDM7/IMG-0948.jpg',
    fallbackSrc: 'https://i.postimg.cc/0vhPkBGG/IMG-0948.jpg',
    externalLink: 'https://postimg.cc/0vhPkBGG',
    category: 'stage',
    titleEs: 'Dominio de la Voz y el Texto',
    titleEn: 'Voice & Classical Text',
    descEs: 'Español claro y dicción impecable para aprendices y nativos.',
    descEn: 'Clear Spanish and impeccable diction for learners and native speakers.',
    tagEs: 'Voz y Dicción',
    tagEn: 'Voice & Diction'
  },
  {
    id: 'img-0949',
    src: 'https://i.postimg.cc/bY0KLLBr/IMG-0949.jpg',
    fallbackSrc: 'https://i.postimg.cc/S4HkSvL6/IMG-0949.jpg',
    externalLink: 'https://postimg.cc/S4HkSvL6',
    category: 'stage',
    titleEs: 'Intensidad Dramática',
    titleEn: 'Dramatic Intensity',
    descEs: 'Momentos teatrales que despiertan el interés por la literatura.',
    descEn: 'Theatrical moments that awaken genuine interest in Hispanic literature.',
    tagEs: 'En Escena',
    tagEn: 'On Stage'
  },
  {
    id: 'img-0950',
    src: 'https://i.postimg.cc/FFb2GGBR/IMG-0950.jpg',
    fallbackSrc: 'https://i.postimg.cc/NtZBsz81/IMG-0950.jpg',
    externalLink: 'https://postimg.cc/NtZBsz81',
    category: 'stage',
    titleEs: 'La Pasión por la Aventura',
    titleEn: 'The Passion for Adventure',
    descEs: 'Ritmo dinámico durante los 45 minutos de función continua.',
    descEn: 'Brisk, engaging rhythm throughout the 45-minute continuous play.',
    tagEs: 'Ritmo Escénico',
    tagEn: 'Stage Pace'
  },
  {
    id: 'img-0951',
    src: 'https://i.postimg.cc/HW0f33hV/IMG-0951.jpg',
    fallbackSrc: 'https://i.postimg.cc/WVxTNHm6/IMG-0951.jpg',
    externalLink: 'https://postimg.cc/WVxTNHm6',
    category: 'stage',
    titleEs: 'Cierre Triunfal y Ovación',
    titleEn: 'Triumphant Finale',
    descEs: 'El saludo final que da paso a la conversación con los alumnos.',
    descEn: 'The final bow leading straight into the student interactive dialogue.',
    tagEs: 'Final de Obra',
    tagEn: 'Finale'
  },
  {
    id: 'img-0851',
    src: 'https://i.postimg.cc/nFRR0gHk/IMG-0851.jpg',
    fallbackSrc: 'https://i.postimg.cc/nFRR0gHk/IMG-0851.jpg',
    externalLink: 'https://postimg.cc/nFRR0gHk',
    category: 'stage',
    titleEs: 'Comedia Gestual en Vivo',
    titleEn: 'Live Physical Comedy',
    descEs: 'Wilderman interactúa directamente con el público estudiantil.',
    descEn: 'Wilderman interacts directly with the student audience in the room.',
    tagEs: 'Interacción',
    tagEn: 'Interaction'
  },
  {
    id: 'img-0911',
    src: 'https://i.postimg.cc/rVnnQ38j/IMG-0911.jpg',
    fallbackSrc: 'https://i.postimg.cc/rVnnQ38j/IMG-0911.jpg',
    externalLink: 'https://postimg.cc/rVnnQ38j',
    category: 'stage',
    titleEs: 'Fuerza Poética y Clásica',
    titleEn: 'Classical Poetic Power',
    descEs: 'El valor de soñar y luchar por nobles ideales en el mundo de hoy.',
    descEn: 'The courage to dream and fight for noble ideals in today’s world.',
    tagEs: 'Poética',
    tagEn: 'Poetry'
  },
  {
    id: 'img-1826',
    src: 'https://i.postimg.cc/TRRvS86G/IMG-1826.jpg',
    fallbackSrc: 'https://i.postimg.cc/TRRvS86G/IMG-1826.jpg',
    externalLink: 'https://postimg.cc/TRRvS86G',
    category: 'talk',
    titleEs: 'Tertulia: Preguntas de Estudiantes',
    titleEn: 'Student Q&A: In Spanish',
    descEs: '15 minutos de conversatorio donde los alumnos practican su español.',
    descEn: '15 minutes of live Q&A where students practice their Spanish directly.',
    tagEs: 'Tertulia Escolar',
    tagEn: 'Student Q&A'
  },
  {
    id: 'img-1831',
    src: 'https://i.postimg.cc/08813gsP/IMG-1831.jpg',
    fallbackSrc: 'https://i.postimg.cc/08813gsP/IMG-1831.jpg',
    externalLink: 'https://postimg.cc/08813gsP',
    category: 'talk',
    titleEs: 'Diálogo Pedagógico Directo',
    titleEn: 'Educational Dialogue',
    descEs: 'Conexión cultural y lingüística alineada con estándares ACTFL.',
    descEn: 'Cultural and linguistic connection aligned with ACTFL national standards.',
    tagEs: 'Pedagogía',
    tagEn: 'Education'
  }
];

export default function StageGallerySection() {
  const { isSpanish } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'stage' | 'talk'>('all');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = STAGE_PHOTOS.filter(p => {
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  const openLightbox = (indexInFiltered: number) => {
    const photo = filteredPhotos[indexInFiltered];
    const originalIndex = STAGE_PHOTOS.findIndex(p => p.id === photo.id);
    setSelectedPhotoIndex(originalIndex !== -1 ? originalIndex : 0);
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

  return (
    <section id="galeria-teatral" className="relative py-14 sm:py-20 bg-[#FAF7F0] border-b-2 border-amber-300/70">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-wider uppercase bg-amber-100/80 text-[#1E3A8A] mb-2.5 px-3.5 py-1 rounded-full border border-amber-300">
            <Camera className="w-3.5 h-3.5 text-[#9E1B32]" />
            <span>{isSpanish ? 'Fotografía de la Obra en Vivo' : 'Live Stage Photography'}</span>
            <span className="font-mono text-[#9E1B32]">· {STAGE_PHOTOS.length} {isSpanish ? 'fotos' : 'photos'}</span>
          </div>
          
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-900 leading-tight">
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
          
          <p className="font-sans text-sm sm:text-base text-stone-600 mt-2">
            {isSpanish
              ? 'Imágenes reales de la obra escolar y la tertulia con estudiantes en auditorios de Estados Unidos.'
              : 'Authentic photos from school performances and interactive student Q&As across US schools.'}
          </p>
        </div>

        {/* 3 Simple Category Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
              selectedFilter === 'all'
                ? 'bg-[#9E1B32] text-white border-[#730E20] shadow-xs'
                : 'bg-white text-stone-700 border-amber-300 hover:bg-amber-50'
            }`}
          >
            {isSpanish ? `Todas (${STAGE_PHOTOS.length})` : `All (${STAGE_PHOTOS.length})`}
          </button>

          <button
            type="button"
            onClick={() => setSelectedFilter('stage')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border flex items-center gap-1.5 ${
              selectedFilter === 'stage'
                ? 'bg-[#1E3A8A] text-white border-blue-900 shadow-xs'
                : 'bg-white text-stone-700 border-amber-300 hover:bg-blue-50'
            }`}
          >
            <Drama className="w-3.5 h-3.5" />
            <span>{isSpanish ? 'Función Teatral' : 'Performance'}</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedFilter('talk')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer border flex items-center gap-1.5 ${
              selectedFilter === 'talk'
                ? 'bg-emerald-700 text-white border-emerald-900 shadow-xs'
                : 'bg-white text-stone-700 border-amber-300 hover:bg-emerald-50'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{isSpanish ? 'Tertulia con Alumnos' : 'Student Q&A'}</span>
          </button>
        </div>

        {/* Crisp Photographic Grid - 3 columns on tablet/desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden cursor-pointer border-2 border-amber-300/80 bg-stone-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black/70 backdrop-blur-xs text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                    {isSpanish ? photo.tagEs : photo.tagEn}
                  </span>
                </div>

                {/* Top Right Zoom Icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-7 h-7 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-[#9E1B32]" />
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 inset-x-0 p-3.5 text-white z-10">
                  <h3 className="font-cinzel text-base font-bold text-white group-hover:text-amber-200 transition-colors leading-tight">
                    {isSpanish ? photo.titleEs : photo.titleEn}
                  </h3>
                  <p className="font-sans text-xs text-stone-300 mt-1 line-clamp-1">
                    {isSpanish ? photo.descEs : photo.descEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
