/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { AcademicCertificate } from '../data/certificatesData';
import { 
  ShieldCheck, 
  Printer, 
  X, 
  Award, 
  Download, 
  CheckCircle, 
  Sparkles, 
  ExternalLink,
  BookOpen,
  Calendar,
  Building,
  GraduationCap
} from 'lucide-react';

interface CertificateDiplomaModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: AcademicCertificate | null;
}

export default function CertificateDiplomaModal({
  isOpen,
  onClose,
  certificate
}: CertificateDiplomaModalProps) {
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !certificate) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#FAF6EE] rounded-sm border-2 border-[#C89D35] shadow-2xl overflow-hidden my-4">
        
        {/* Header bar */}
        <div className="bg-[#701A27] text-[#FAF6EE] px-4 sm:px-6 py-3 border-b-2 border-[#C89D35] flex items-center justify-between no-print">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#F0D38D]" />
            <div>
              <h2 className="font-serif font-black text-sm sm:text-base text-[#F0D38D] tracking-wide uppercase">
                Validación Oficial de Certificado Académico
              </h2>
              <p className="text-[10px] sm:text-xs text-white/80 font-mono">
                Folio de Verificación: {certificate.folioId} • Estado: Registrado y Válido
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-[#C89D35] hover:bg-[#D8AE46] text-[#2B170A] font-serif font-bold text-xs uppercase px-3.5 py-1.5 rounded-sm flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
              title="Imprimir o Guardar como PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Imprimir / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white p-1 rounded transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Certificate Display (Diploma Parchment) */}
        <div className="p-4 sm:p-8 bg-[#FAF6EE] overflow-y-auto max-h-[80vh]" ref={printRef}>
          
          {/* Certificate Container with ornate frame */}
          <div className="relative bg-[#FFFDF9] border-[6px] border-double border-[#C89D35] p-6 sm:p-10 shadow-lg text-center rounded-sm">
            
            {/* Corner Decorative Ornaments */}
            <div className="absolute top-2 left-2 text-[#C89D35] text-lg select-none font-serif font-black">╔</div>
            <div className="absolute top-2 right-2 text-[#C89D35] text-lg select-none font-serif font-black">╗</div>
            <div className="absolute bottom-2 left-2 text-[#C89D35] text-lg select-none font-serif font-black">╚</div>
            <div className="absolute bottom-2 right-2 text-[#C89D35] text-lg select-none font-serif font-black">╝</div>

            {/* Watermark Logo / Shield */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <span className="font-display font-black text-9xl text-[#2B170A]">DQ</span>
            </div>

            {/* Top Emblem & Header */}
            <div className="flex flex-col items-center mb-5">
              <div className="w-14 h-14 rounded-full bg-[#701A27] border-2 border-[#C89D35] text-[#F0D38D] flex items-center justify-center shadow-md mb-2">
                <Award className="w-8 h-8" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#701A27] font-bold">
                TEATRO FOR THE SOUL & DON QUIJOTE EN USA
              </span>
              <h1 className="font-display font-black text-2xl sm:text-3xl text-[#2B170A] tracking-wider uppercase mt-1">
                Certificado de Acreditación Pedagógica
              </h1>
              <div className="w-36 h-0.5 bg-[#C89D35] mt-1.5 mb-1"></div>
              <p className="text-xs font-serif italic text-[#6B5E55]">
                Inmersión Lingüística, Apreciación Teatral y Herencia Cervantina
              </p>
            </div>

            {/* Recipient Text */}
            <p className="text-xs sm:text-sm font-serif text-[#4A2E18] uppercase tracking-widest font-semibold mb-1">
              Se hace constar formalmente que:
            </p>
            <h2 className="font-serif font-black text-xl sm:text-2xl text-[#701A27] border-b border-[#C89D35]/50 pb-2 mb-2 inline-block px-6">
              {certificate.recipientName}
            </h2>
            <p className="text-xs sm:text-sm font-serif text-[#2B170A] mb-1">
              de la institución: <strong>{certificate.institution}</strong> ({certificate.cityState})
            </p>
            <p className="text-xs font-mono text-[#701A27] font-bold mb-4">
              Nivel Académico: {certificate.academicLevel}
            </p>

            {/* Recognition Paragraph */}
            <p className="text-xs sm:text-sm text-[#3B2314] font-serif leading-relaxed max-w-2xl mx-auto mb-6 text-justify sm:text-center">
              Ha completado satisfactoriamente la experiencia académica y cultural de <strong>«Don Quijote en USA»</strong>, participando en la puesta en escena teatral y en el taller especializado <em>«{certificate.workshopTitle}»</em>, acreditando un total de <strong>{certificate.contactHours} Horas de Contacto Académico</strong> en lengua y cultura en español.
            </p>

            {/* Competencies Box */}
            <div className="bg-[#FAF8F1] border border-[#C89D35]/40 p-3.5 rounded-sm max-w-2xl mx-auto mb-6 text-left">
              <h4 className="text-[11px] font-serif font-bold uppercase tracking-wider text-[#701A27] mb-1.5 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#2E6F40]" />
                Competencias Curriculares & Estándares Acreditados:
              </h4>
              <ul className="text-[11px] font-serif text-[#4A2E18] space-y-1 pl-4 list-disc">
                {certificate.competencies.map((comp, idx) => (
                  <li key={idx}>{comp}</li>
                ))}
              </ul>
              <div className="mt-2 pt-2 border-t border-[#C89D35]/20 flex flex-wrap gap-1.5 text-[10px] font-mono text-[#701A27]">
                <span className="font-bold text-[#2B170A]">Alineación ACTFL:</span>
                {certificate.actflStandards.map((std, i) => (
                  <span key={i} className="bg-[#F0D38D]/30 px-1.5 py-0.5 rounded border border-[#C89D35]/30">
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Signatures and Seals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-end pt-4 max-w-2xl mx-auto border-t border-slate-200">
              
              {/* Author Signature */}
              <div className="text-center">
                <div className="font-serif italic font-bold text-base text-[#701A27] pb-1 border-b border-[#3B2314]/40 mb-1">
                  Gabriel Villegas
                </div>
                <p className="text-[10px] font-serif font-bold text-[#2B170A] leading-tight">
                  {certificate.signatories.authorRole}
                </p>
                <p className="text-[9px] font-mono text-[#6B5E55]">Teatro for the Soul</p>
              </div>

              {/* Official Seal / Folio */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#C89D35] flex flex-col items-center justify-center bg-[#FAF6EE] shadow-inner p-1">
                  <ShieldCheck className="w-5 h-5 text-[#2E6F40]" />
                  <span className="text-[8px] font-mono font-bold text-[#701A27] uppercase">VERIFICADO</span>
                  <span className="text-[7px] font-mono text-[#6B5E55]">donquijoteusa</span>
                </div>
                <span className="text-[9px] font-mono font-bold text-[#2B170A] mt-1">
                  Folio: {certificate.folioId}
                </span>
                <span className="text-[9px] font-serif text-[#6B5E55]">
                  Fecha: {certificate.issueDate}
                </span>
              </div>

              {/* Actor Signature */}
              <div className="text-center">
                <div className="font-serif italic font-bold text-base text-[#701A27] pb-1 border-b border-[#3B2314]/40 mb-1">
                  Wilderman García
                </div>
                <p className="text-[10px] font-serif font-bold text-[#2B170A] leading-tight">
                  {certificate.signatories.actorRole}
                </p>
                <p className="text-[9px] font-mono text-[#6B5E55]">Actor Protagónico</p>
              </div>

            </div>

          </div>

          {/* Validation Notice for Schools */}
          <div className="mt-4 p-3 bg-[#FAF8F1] border border-[#C89D35]/30 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-serif text-[#4A2E18] no-print">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2E6F40] shrink-0" />
              <span>
                Este certificado posee validez académica digital emitida bajo la dirección de <strong>Teatro for the Soul</strong> y el portal oficial <strong>donquijoteusa.com</strong>.
              </span>
            </div>
            <button
              onClick={handlePrint}
              className="bg-[#701A27] hover:bg-[#8F2233] text-[#FAF6EE] font-serif font-bold text-xs uppercase px-3 py-1.5 rounded-sm whitespace-nowrap cursor-pointer transition-colors"
            >
              Guardar Copia / PDF
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
