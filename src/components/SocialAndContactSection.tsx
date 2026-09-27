/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Instagram, 
  Globe, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Ticket, 
  Copy, 
  Check, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Feather
} from 'lucide-react';
import quijoteStageBg from '../assets/images/quijote_stage_minimalist_bg_1790503684066.jpg';
import quijoteMedievalItems from '../assets/images/quijote_medieval_items_1790532291437.jpg';

export default function SocialAndContactSection() {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const officialEmail = "teatroforthesoul@gmail.com";
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('RSVP');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="booking-contact" className="relative py-14 sm:py-20 bg-[#FCF9F2] border-b-2 border-amber-300/80 overflow-hidden">
      
      {/* Background Medieval Vignettes */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.16] mix-blend-multiply"
        style={{
          backgroundImage: `url(${quijoteStageBg})`,
          backgroundPosition: 'right 10% center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FCF9F2] via-[#FCF9F2]/85 to-[#FCF9F2]/90 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F2] via-transparent to-[#FCF9F2] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Consolidated Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] mb-2 bg-blue-100 px-3.5 py-1 rounded-full border border-blue-300 shadow-2xs">
            <Feather className="w-3.5 h-3.5 text-[#9E1B32]" />
            <span>Datos Institucionales &amp; Reservas</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-[#1E3A8A]">Reservas Oficiales </span>
            <span className="text-[#B91C1C]">&amp; Contratación Vendor</span>
          </h2>
          <p className="text-xs sm:text-sm font-sans text-stone-700 mt-2">
            Estamos en el <strong>2026</strong>: coordinamos fechas para distritos escolares, colegios y departamentos de español con presentaciones a partir de <strong>Enero 2027</strong>.
          </p>
        </div>

        {/* Consolidated Vendor & Booking Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          
          {/* LEFT: Zeffy $0 Booking Guide (7 cols) */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-md border-2 border-amber-300 p-6 sm:p-7 rounded-2xl shadow-md space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E1B32] font-bold block">
                  Temporada Oficial 2026–2027 (Desde Enero 2027)
                </span>
                <h3 className="font-cinzel text-xl font-bold text-stone-900">
                  Reserva en Zeffy con Código: RSVP
                </h3>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-100 text-emerald-950 px-2.5 py-1 rounded-full text-xs font-bold border border-emerald-300 self-start sm:self-auto">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>$0 Anticipo</span>
              </div>
            </div>

            {/* Compact 3-Step Process */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1">
                <div className="font-bold text-blue-900 flex items-center gap-1 font-mono text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>1. Elija Fecha</span>
                </div>
                <p className="text-stone-600 text-[11px] leading-tight">
                  Seleccione su fecha en Zeffy para Enero 2027 en adelante.
                </p>
              </div>

              <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
                <div className="font-bold text-amber-900 flex items-center gap-1 font-mono text-[11px]">
                  <Ticket className="w-3.5 h-3.5 text-amber-600" />
                  <span>2. Código RSVP</span>
                </div>
                <p className="text-stone-600 text-[11px] leading-tight">
                  Ingrese <strong>RSVP</strong> en el checkout para registrar $0.00.
                </p>
              </div>

              <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-1">
                <div className="font-bold text-emerald-900 flex items-center gap-1 font-mono text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>3. Trámite PO</span>
                </div>
                <p className="text-stone-600 text-[11px] leading-tight">
                  Coordinamos la orden de compra y el W-9 con su distrito.
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={zeffyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-wine text-xs py-2.5 px-5 flex items-center gap-2 shadow-xs font-bold"
              >
                <Ticket className="w-4 h-4 text-amber-300" />
                <span>Abrir Calendario Zeffy</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-90" />
              </a>

              <button
                type="button"
                onClick={handleCopyCode}
                className="btn-gold-accent text-xs py-2.5 px-4 flex items-center gap-1.5 cursor-pointer font-bold shadow-xs"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-800" />
                    <span className="text-emerald-950 font-bold">¡Código Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-900" />
                    <span>Copiar Código: RSVP</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* RIGHT: Vendor Credentials & Contacts (5 cols) */}
          <div className="lg:col-span-5 bg-white/95 backdrop-blur-md border-2 border-emerald-300 p-6 sm:p-7 rounded-2xl shadow-md space-y-4">
            <div className="flex items-center gap-3 border-b border-emerald-100 pb-3">
              <img 
                src={quijoteMedievalItems} 
                alt="Don Quijote Reliquias" 
                className="w-10 h-10 rounded-lg object-cover border border-amber-400 shrink-0" 
              />
              <div>
                <h3 className="font-cinzel text-base font-bold text-stone-900">
                  Ficha de Vendor Escolar
                </h3>
                <span className="text-[10px] font-mono text-emerald-800 font-bold">
                  Entidad Educativa Registrada
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs font-sans text-stone-800">
              <div className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between">
                <span className="text-stone-500 font-bold">Entidad Legal:</span>
                <span className="font-serif font-bold text-stone-900 text-sm">Teatro for the Soul Inc</span>
              </div>

              <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-300 flex items-center justify-between">
                <div>
                  <span className="text-stone-700 font-bold block text-[11px]">EIN (Tax ID Distrital):</span>
                  <span className="text-[10px] text-stone-500">Para W-9 y facturación PO</span>
                </div>
                <span className="font-mono font-bold text-emerald-950 bg-white px-2.5 py-1 rounded border border-emerald-400">
                  81-4825762
                </span>
              </div>

              <div className="p-2.5 bg-rose-50/60 rounded-xl border border-rose-200 flex items-center justify-between">
                <div className="truncate mr-2">
                  <span className="text-stone-700 font-bold block text-[11px]">Correo de Coordinación:</span>
                  <a href={`mailto:${officialEmail}`} className="font-mono text-xs text-[#9E1B32] font-bold hover:underline truncate block">
                    {officialEmail}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[11px] font-bold text-[#9E1B32] bg-white px-2 py-1 rounded border border-rose-200 shrink-0 cursor-pointer"
                >
                  {copiedEmail ? '¡Copiado!' : 'Copiar'}
                </button>
              </div>

              {/* Social Channels */}
              <div className="pt-2 flex items-center justify-between text-[11px] text-stone-600 font-mono">
                <a
                  href="https://instagram.com/wildermanactor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#9E1B32]"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600" />
                  <span>@wildermanactor</span>
                </a>
                <a
                  href="https://instagram.com/teatroforthesoul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#9E1B32]"
                >
                  <Instagram className="w-3.5 h-3.5 text-amber-600" />
                  <span>@teatroforthesoul</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
