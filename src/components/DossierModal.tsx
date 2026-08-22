/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  CheckCircle2, 
  Shield, 
  Award, 
  Calendar, 
  School, 
  FileText, 
  Clock, 
  Users, 
  Globe 
} from 'lucide-react';
import { BookingFormState } from '../types';
import { THEATER_FORMATS, POST_SHOW_WORKSHOPS, TECHNICAL_DATA } from '../data/mockData';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: BookingFormState | null;
}

export default function DossierModal({ isOpen, onClose, data }: DossierModalProps) {
  if (!isOpen || !data) return null;

  const selectedFormat = THEATER_FORMATS.find(f => f.id === data.selectedFormatId) || THEATER_FORMATS[1];
  const selectedWorkshop = POST_SHOW_WORKSHOPS.find(w => w.id === data.selectedWorkshopId) || POST_SHOW_WORKSHOPS[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      
      {/* Modal Container */}
      <div className="bg-[#FAF6EE] max-w-4xl w-full border-4 border-[#C89D35] shadow-2xl relative my-8 text-[#2B170A] font-sans">
        
        {/* Ornate corners */}
        <div className="corner-bracket-tl" />
        <div className="corner-bracket-tr" />
        <div className="corner-bracket-bl" />
        <div className="corner-bracket-br" />

        {/* Top Action Bar (Non-printable) */}
        <div className="bg-[#701A27] text-[#FAF6EE] px-6 py-3.5 flex items-center justify-between border-b-2 border-[#C89D35] print:hidden">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#F0D38D]" />
            <span className="font-display font-black text-sm uppercase tracking-wider text-[#F0D38D]">
              Propuesta Académica Oficial • donquijoteusa.com
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="bg-[#FAF6EE] text-[#701A27] hover:bg-[#F4EEDF] font-serif font-bold text-xs px-3 py-1.5 rounded-sm flex items-center gap-1.5 transition-colors border border-[#C89D35]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Guardar PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-[#FAF6EE] hover:text-[#F0D38D] transition-colors rounded-sm hover:bg-white/10"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="p-8 sm:p-12 space-y-8 print:p-0">
          
          {/* Header of the Official Letter */}
          <div className="border-b-2 border-[#C89D35] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#701A27] font-bold block">
                TEATRO FOR THE SOUL • PRODUCCIÓN EDUCATIVA
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-black text-[#2B170A] uppercase tracking-tight mt-1">
                Don Quijote en USA 🇺🇸
              </h1>
              <p className="text-xs font-serif italic text-[#4A2E18] font-bold">
                Unipersonal de Teatro Educativo y Experiencia Académica en Español
              </p>
            </div>

            <div className="text-right font-serif text-xs bg-[#F4EEDF] p-3 border border-[#C89D35]/50 rounded-sm">
              <span className="block font-bold text-[#701A27]">Folio de Solicitud:</span>
              <span className="font-mono text-sm font-bold text-[#2B170A]">
                DQ-{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <span className="block text-[10px] text-[#6B5E55] mt-0.5">
                Fecha de Emisión: {new Date().toLocaleDateString('es-ES')}
              </span>
            </div>
          </div>

          {/* School & Educator Target Block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F4EEDF] p-5 border border-[#C89D35]/40 rounded-sm text-xs font-serif">
            <div>
              <span className="text-[10px] font-mono text-[#701A27] uppercase font-bold block">
                INSTITUCIÓN EDUCATIVA:
              </span>
              <p className="text-sm font-bold text-[#2B170A] mt-0.5">{data.schoolName}</p>
              <p className="text-xs text-[#4A2E18]">{data.cityState} • {data.schoolType.toUpperCase()}</p>
            </div>

            <div>
              <span className="text-[10px] font-mono text-[#701A27] uppercase font-bold block">
                DOCENTE SOLICITANTE / CONTACTO:
              </span>
              <p className="text-sm font-bold text-[#2B170A] mt-0.5">{data.contactName} ({data.contactRole})</p>
              <p className="text-xs text-[#4A2E18]">{data.contactEmail} • {data.contactPhone || 'Sin teléfono provisto'}</p>
            </div>
          </div>

          {/* Configuration Summary Table */}
          <div className="space-y-3">
            <h3 className="font-display font-black text-base text-[#701A27] uppercase tracking-wider border-b border-[#C89D35]/40 pb-1">
              I. Especificaciones del Servicio Teatral & Pedagógico
            </h3>

            <div className="border border-[#C89D35]/40 rounded-sm overflow-hidden text-xs font-sans">
              <div className="grid grid-cols-12 bg-[#F4EEDF] font-serif font-bold text-[#701A27] p-2.5 border-b border-[#C89D35]/30">
                <div className="col-span-8">Concepto / Actividad</div>
                <div className="col-span-4 text-right">Duración & Alcance</div>
              </div>

              <div className="grid grid-cols-12 p-3 border-b border-slate-200 items-center">
                <div className="col-span-8">
                  <strong className="font-serif font-bold text-[#2B170A] block text-sm">
                    1. Obra Teatral: {TECHNICAL_DATA.title}
                  </strong>
                  <p className="text-[11px] text-[#4A2E18] font-serif mt-0.5">
                    {selectedFormat.title} • {selectedFormat.capacity}. Montaje autónomo y adaptable.
                  </p>
                  <p className="text-[10px] text-[#6B5E55]">
                    Dramaturgia: Gabriel Villegas | Actor: Wilderman García
                  </p>
                </div>
                <div className="col-span-4 text-right font-serif">
                  <span className="font-bold text-[#701A27]">60 Minutos</span>
                  <span className="block text-[10px] text-[#6B5E55]">100% Español</span>
                </div>
              </div>

              <div className="grid grid-cols-12 p-3 bg-[#FAF8F1] items-center">
                <div className="col-span-8">
                  <strong className="font-serif font-bold text-[#2B170A] block text-sm">
                    2. Taller Pedagógico: {selectedWorkshop.title}
                  </strong>
                  <p className="text-[11px] text-[#4A2E18] font-serif mt-0.5">
                    {selectedWorkshop.description}
                  </p>
                  <p className="text-[10px] text-[#6B5E55]">
                    Facilitador: {selectedWorkshop.instructor}
                  </p>
                </div>
                <div className="col-span-4 text-right font-serif">
                  <span className="font-bold text-[#701A27]">{selectedWorkshop.duration}</span>
                  <span className="block text-[10px] text-[#6B5E55]">Interactivo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Justification Statement for Principal / Board */}
          <div className="space-y-2 text-xs font-serif text-[#3B2314]">
            <h3 className="font-display font-black text-base text-[#701A27] uppercase tracking-wider border-b border-[#C89D35]/40 pb-1">
              II. Justificación Curricular para la Administración Escolar
            </h3>
            <p className="leading-relaxed">
              La presentación de <em>«Don Quijote en USA»</em> complementa directamente los objetivos del currículo de Lenguas Extranjeras, Literatura Española y Programas de Doble Inmersión (Dual Language), promoviendo la comprensión auditiva, la interacción verbal espontánea y el análisis de textos clásicos según los estándares de <strong>AP Spanish Literature and Culture</strong> y <strong>ACTFL World-Readiness Standards</strong>.
            </p>
          </div>

          {/* Administrative notes */}
          <div className="bg-[#FAF6EE] border-2 border-dashed border-[#C89D35] p-4 text-xs font-serif">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#701A27] block font-bold">Estado de Disponibilidad:</strong>
                Fecha tentativa agendada: <strong>{data.preferredDate || 'A coordinar'}</strong>. La coordinación de Teatro for the Soul contactará a la docente ({data.contactEmail}) dentro de las próximas 24 horas hábiles para formalizar la orden de compra y enviar el paquete W-9.
              </div>
            </div>
          </div>

          {/* Signature & Seal Lines */}
          <div className="pt-8 border-t-2 border-[#C89D35] grid grid-cols-2 gap-8 text-center text-xs font-serif">
            <div>
              <div className="h-14 border-b border-[#2B170A]/40 flex items-end justify-center pb-1 font-serif italic text-sm text-[#701A27]">
                Gabriel Villegas
              </div>
              <span className="block font-bold text-[#2B170A] mt-1">Gabriel Villegas / Wilderman García</span>
              <span className="text-[10px] text-[#6B5E55]">Dirección Artística & Producción • Teatro for the Soul</span>
            </div>

            <div>
              <div className="h-14 border-b border-[#2B170A]/40 flex items-end justify-center pb-1 text-slate-400 italic text-[11px]">
                Firma de Aprobación Escolar
              </div>
              <span className="block font-bold text-[#2B170A] mt-1">Dirección / Junta Escolar</span>
              <span className="text-[10px] text-[#6B5E55]">{data.schoolName}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#F4EEDF] p-4 border-t-2 border-[#C89D35] flex justify-between items-center print:hidden">
          <span className="text-xs font-mono text-[#6B5E55]">
            donquijoteusa.com • Todos los derechos reservados
          </span>

          <button
            type="button"
            onClick={onClose}
            className="bg-[#701A27] hover:bg-[#8F2233] text-[#FAF6EE] font-serif font-bold text-xs uppercase tracking-widest px-6 py-2 rounded-sm border border-[#C89D35]"
          >
            Entendido / Cerrar
          </button>
        </div>

      </div>

    </div>
  );
}
