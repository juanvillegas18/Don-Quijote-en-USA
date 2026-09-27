/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Instagram, Globe, GraduationCap, Sparkles, Feather } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FooterSection() {
  const { isSpanish } = useLanguage();
  const officialEmail = "teatroforthesoul@gmail.com";

  return (
    <footer className="relative bg-[#1A1412] text-stone-300 py-14 text-xs font-sans border-t-2 border-amber-500/40 overflow-hidden">
      {/* Top Spanish Golden Age Rainbow Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1 rainbow-gradient-bar" />

      {/* Subtle colorful background radial glows */}
      <div className="absolute -top-10 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-stone-800">
          
          {/* Brand & Cervantes Statement */}
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#9E1B32] via-[#C22D47] to-[#D97706] text-white flex items-center justify-center font-cinzel font-bold text-sm shadow-sm ring-1 ring-amber-400/40">
                DQ
              </div>
              <span className="font-cinzel text-lg font-bold text-white tracking-wider">
                Don Quijote en USA
              </span>
              <span className="text-[10px] font-sans font-bold bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30 uppercase tracking-wider">
                Teatro Educativo
              </span>
            </div>
            
            <p className="font-garamond italic text-base text-amber-100/90 leading-relaxed">
              &ldquo;Cambiar el mundo, amigo Sancho, no es locura ni utopía, sino justicia.&rdquo; — Miguel de Cervantes Saavedra
            </p>
            
            <p className="text-[11px] text-stone-400 font-sans">
              {isSpanish 
                ? 'Obra teatral y experiencia pedagógica en vivo 100% en español · Protagonizada por Wilderman García · Producida por Teatro for the Soul Inc'
                : 'A Live Theatrical Performance & Educational Experience in Spanish · Starring Wilderman García · Produced by Teatro for the Soul Inc'}
            </p>
          </div>

          {/* Direct External & Email Links */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
            <a
              href={`mailto:${officialEmail}`}
              className="text-amber-300 hover:text-white flex items-center gap-1.5 transition-colors bg-stone-900/90 px-3 py-1.5 rounded-lg border border-amber-500/40 hover:border-amber-400 font-mono font-bold"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{officialEmail}</span>
            </a>

            <a
              href="https://instagram.com/wildermanactor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white flex items-center gap-1.5 transition-colors bg-stone-900/80 px-3 py-1.5 rounded-lg border border-stone-700 hover:border-pink-400"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>@wildermanactor</span>
            </a>

            <a
              href="https://instagram.com/teatroforthesoul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white flex items-center gap-1.5 transition-colors bg-stone-900/80 px-3 py-1.5 rounded-lg border border-stone-700 hover:border-amber-400"
            >
              <Instagram className="w-3.5 h-3.5 text-amber-400" />
              <span>@teatroforthesoul</span>
            </a>

            <a
              href="https://www.donquijoteenusa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white flex items-center gap-1.5 transition-colors bg-stone-900/80 px-3 py-1.5 rounded-lg border border-stone-700 hover:border-blue-400"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>donquijoteenusa.com</span>
            </a>
          </div>

        </div>

        {/* Legal, Entity & Tour Credential Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-stone-400">
          <div className="flex flex-wrap items-center gap-2 font-mono">
            <span className="bg-stone-900 px-2.5 py-0.5 rounded border border-stone-800">
              Entity: <strong className="text-amber-300 font-sans">Teatro for the Soul Inc</strong>
            </span>
            <span>·</span>
            <span className="bg-stone-900 px-2.5 py-0.5 rounded border border-stone-800">
              EIN: <strong className="text-emerald-400 font-mono">81-4825762</strong>
            </span>
            <span>·</span>
            <span className="bg-stone-900 px-2.5 py-0.5 rounded border border-stone-800">
              Official Email: <strong className="text-rose-400">{officialEmail}</strong>
            </span>
          </div>

          <div className="font-sans text-stone-400">
            Educational Theater Tour for US School Districts &amp; Higher Education Institutions · All Rights Reserved
          </div>
        </div>

      </div>
    </footer>
  );
}
