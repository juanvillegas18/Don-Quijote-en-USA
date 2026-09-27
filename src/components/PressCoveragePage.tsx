/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Newspaper, 
  ExternalLink, 
  Play, 
  Tv, 
  FileText, 
  Mail, 
  Sparkles, 
  Share2, 
  Copy, 
  Check, 
  Feather, 
  Award,
  Video,
  Radio
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PressCoveragePage() {
  const { isSpanish } = useLanguage();
  const [copiedLink, setCopiedLink] = useState(false);

  const elNuevoDiaUrl = "https://www.elnuevodia.com/entretenimiento/cultura/notas/un-quijote-que-anda-en-busca-de-bad-bunny/";
  const shortVideoUrl = "https://youtube.com/shorts/EzBQAx-VEMQ?feature=shared";
  const featureVideoUrl = "https://youtu.be/g8lUpSy2bUU?feature=shared";
  const mediaEmail = "teatroforthesoul@gmail.com";

  const handleCopyPressInfo = () => {
    const text = isSpanish
      ? `DON QUIJOTE EN USA · DOSSIER DE PRENSA Y COBERTURA DE MEDIOS
Artículo en El Nuevo Día: "Un Quijote que anda en busca de Bad Bunny"
Enlace: ${elNuevoDiaUrl}
Clip Oficial de Gira: ${shortVideoUrl}
Reportaje Escénico: ${featureVideoUrl}

Entrevistas y Cobertura:
- Gabriel Villegas (Dramaturgo y Director)
- Wilderman García (Actor Protagónico)
Contacto de Prensa: ${mediaEmail} | www.donquijoteenusa.com`
      : `DON QUIXOTE IN USA · PRESS KIT & MEDIA COVERAGE
El Nuevo Día Feature: "Un Quijote que anda en busca de Bad Bunny"
Link: ${elNuevoDiaUrl}
Official Tour Teaser: ${shortVideoUrl}
Stage Video Report: ${featureVideoUrl}

Interviews & Media Inquiries:
- Gabriel Villegas (Playwright & Director)
- Wilderman García (Lead Actor)
Media Contact: ${mediaEmail} | www.donquijoteenusa.com`;

    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#FCF9F2] min-h-screen relative overflow-hidden">
      
      {/* Background Theatrical Aura */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#9E1B32]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E1B32] bg-rose-100 px-3.5 py-1 rounded-full border border-rose-300 shadow-2xs mb-3.5">
            <Newspaper className="w-3.5 h-3.5 text-[#9E1B32]" />
            <span>{isSpanish ? 'Prensa, Medios y Crítica Cultural' : 'Press, Media & Cultural Reviews'}</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            {isSpanish ? (
              <>
                <span className="text-[#1E3A8A]">Don Quijote </span>
                <span className="text-[#9E1B32]">en los Medios</span>
              </>
            ) : (
              <>
                <span className="text-[#1E3A8A]">Don Quixote </span>
                <span className="text-[#9E1B32]">in the Press</span>
              </>
            )}
          </h1>

          <p className="font-garamond text-xl sm:text-2xl text-stone-800 mt-3 italic leading-relaxed">
            {isSpanish
              ? 'Reportajes periodísticos, entrevistas en televisión y reseñas de la gira teatral de Don Quijote en USA.'
              : 'Newspaper features, television reports, and cultural reviews covering the nationwide tour of Don Quixote in USA.'}
          </p>
        </div>

        {/* Featured Newspaper Article: El Nuevo Día */}
        <div className="mb-14">
          <div className="bg-white border-2 border-amber-400/90 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Left: Article Image */}
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-stone-950">
                <img
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/gfrmedia/VHUTYQRP5VAJFKA6UF3HKLGMGU.jpg"
                  alt="Un Quijote que anda en busca de Bad Bunny - El Nuevo Día"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'https://i.postimg.cc/pVQgkk69/IMG-0942.jpg';
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-[#9E1B32] text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-amber-300" />
                    <span>Artículo de Portada Cultural</span>
                  </span>
                </div>

                {/* Outlet Tag */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <div className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider">
                    El Nuevo Día · Sección Entretenimiento y Cultura
                  </div>
                  <div className="text-[11px] text-stone-300">
                    Puerto Rico &amp; Diáspora en Estados Unidos
                  </div>
                </div>
              </div>

              {/* Right: Article Story & Quotes */}
              <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-300">
                      Cobertura Destacada
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      elnuevodia.com
                    </span>
                  </div>

                  <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 leading-tight group-hover:text-[#9E1B32] transition-colors">
                    «Un Quijote que anda en busca de Bad Bunny»
                  </h2>

                  <div className="mt-4 p-4 bg-stone-50 border-l-4 border-[#9E1B32] rounded-r-lg font-garamond text-base sm:text-lg text-stone-800 italic leading-relaxed">
                    &ldquo;El dramaturgo puertorriqueño Gabriel Villegas presenta en Orlando, Florida, una obra teatral que enfrenta al clásico personaje de la literatura española con el rapero puertorriqueño, creando un puente cultural contemporáneo entre el Siglo de Oro y las nuevas generaciones.&rdquo;
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-stone-600 mt-4 leading-relaxed">
                    {isSpanish
                      ? 'La crónica destaca cómo la dramaturgia de Gabriel Villegas y la actuación de Wilderman García logran que un texto del Siglo de Oro conecte directamente con la juventud actual, mezclando la tradición literaria universal con la cultura popular contemporánea.'
                      : 'The article highlights how Gabriel Villegas’ direction and Wilderman García’s stage performance connect Golden Age Spanish literature directly with modern youth, bridging classical tradition with contemporary popular culture.'}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={elNuevoDiaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-wine text-xs font-bold py-2.5 px-5 flex items-center gap-2 shadow-md"
                  >
                    <span>{isSpanish ? 'Leer Artículo en El Nuevo Día' : 'Read Article on El Nuevo Día'}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-90" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyPressInfo}
                    className="text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 px-3 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-600" />}
                    <span>{copiedLink ? (isSpanish ? '¡Copiado!' : 'Copied!') : (isSpanish ? 'Copiar Enlace' : 'Copy Press Link')}</span>
                  </button>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Video Coverage Grid (YouTube Features) */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#1E3A8A] bg-blue-100/90 px-3 py-1 rounded-full border border-blue-200">
              {isSpanish ? 'Cobertura Audiovisual y Videos en Vivo' : 'Video Coverage & Live Clips'}
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 mt-2">
              {isSpanish ? 'Reportajes y Fragmentos de la Gira Teatral' : 'Stage Reports & Tour Highlights'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Video 1: Don Quijote en PR (Live Stage Report) */}
            <div className="bg-white border-2 border-blue-300 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between">
              <div>
                {/* Responsive 16:9 YouTube Embed */}
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/g8lUpSy2bUU"
                    title="Don Quijote en PR - Reportaje Escénico"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#1E3A8A] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Reportaje en Vivo
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      YouTube: Maritza Beatriz
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                    Don Quijote en PR 🎭 (Don Quijote en la Lino)
                  </h3>

                  <p className="font-sans text-xs text-stone-600 mt-2 leading-relaxed">
                    {isSpanish
                      ? 'Registro audiovisual de la energía de la obra en vivo, la reacción del público escolar y la atmósfera comunitaria que acompaña cada presentación teatral.'
                      : 'Live video capturing the stage energy, school audience reactions, and community excitement generated by the theatrical production.'}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={featureVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 px-3 rounded-lg text-xs font-bold border border-blue-400 bg-blue-50 hover:bg-blue-100 text-[#1E3A8A] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isSpanish ? 'Ver en YouTube Oficial' : 'Watch on Official YouTube'}</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>

            {/* Video 2: Don Quijote en USA - Short / Reel Clip */}
            <div className="bg-white border-2 border-rose-300 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between">
              <div>
                {/* Responsive 16:9 Player for Shorts */}
                <div className="relative aspect-video w-full bg-stone-950 flex items-center justify-center">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/EzBQAx-VEMQ"
                    title="Don Quijote en USA - Clip Oficial de Gira"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#9E1B32] bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Clip Oficial de Gira
                    </span>
                    <span className="text-xs font-mono text-stone-500">
                      YouTube: Teatro for the Soul
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                    Don Quijote en USA · Tráiler &amp; Dinámica Escénica
                  </h3>

                  <p className="font-sans text-xs text-stone-600 mt-2 leading-relaxed">
                    {isSpanish
                      ? 'Fragmento dinámico que muestra la versatilidad actoral de Wilderman García y la interacción con los estudiantes durante la función escolar.'
                      : 'High-energy clip demonstrating Wilderman García’s versatile characterization and immediate rapport with student audiences.'}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={shortVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 px-3 rounded-lg text-xs font-bold border border-rose-400 bg-rose-50 hover:bg-rose-100 text-[#9E1B32] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isSpanish ? 'Ver Short en YouTube' : 'Watch Short on YouTube'}</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Media & Press Inquiries Banner */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-stone-900 via-[#1C1917] to-[#2A1810] text-white rounded-2xl border-2 border-amber-400/80 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-300 font-bold uppercase tracking-wider">
                <Radio className="w-4 h-4 text-amber-400" />
                <span>{isSpanish ? 'Atención a Medios de Comunicación' : 'Media Inquiries & Press Kit'}</span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white leading-tight">
                {isSpanish
                  ? '¿Desea entrevistar al elenco o coordinar cobertura periodística?'
                  : 'Interested in interviewing the cast or coordinating press coverage?'}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-300 leading-relaxed">
                {isSpanish
                  ? 'El dramaturgo Gabriel Villegas y el actor Wilderman García están disponibles para entrevistas en prensa escrita, radio, podcasts y televisión durante toda la gira nacional 2026–2027.'
                  : 'Playwright Gabriel Villegas and lead actor Wilderman García are available for print, radio, podcast, and broadcast television interviews throughout the 2026–2027 national tour.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <a
                href={`mailto:${mediaEmail}?subject=${encodeURIComponent('Solicitud de Prensa / Entrevista: Don Quijote en USA')}`}
                className="btn-primary-wine text-xs font-bold py-2.5 px-4 text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Mail className="w-3.5 h-3.5 text-amber-300" />
                <span>{isSpanish ? 'Contactar a Prensa' : 'Contact Press Office'}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPressInfo}
                className="py-2.5 px-4 text-xs font-bold text-stone-200 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-stone-300" />}
                <span>{copiedLink ? (isSpanish ? '¡Copiado!' : 'Copied!') : (isSpanish ? 'Copiar Ficha de Prensa' : 'Copy Press Dossier')}</span>
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
