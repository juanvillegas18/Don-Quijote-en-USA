/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  BookOpen, 
  MessageSquare, 
  Award, 
  GraduationCap, 
  CheckCircle2, 
  Calendar, 
  School, 
  Mail, 
  Phone, 
  Clock, 
  ArrowRight, 
  FileText, 
  Send,
  ShieldAlert,
  Info,
  Layers,
  HelpCircle,
  Download
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { THEATER_FORMATS, POST_SHOW_WORKSHOPS } from '../data/mockData';
import { BookingFormState, TheaterFormat, PostShowWorkshop } from '../types';

interface InteractiveEducatorGuideProps {
  onGenerateProposal: (formData: BookingFormState) => void;
}

export default function InteractiveEducatorGuide({ onGenerateProposal }: InteractiveEducatorGuideProps) {
  const [selectedFormat, setSelectedFormat] = useState<'intimo' | 'medio' | 'completo'>('medio');
  const [selectedWorkshop, setSelectedWorkshop] = useState<'tertulia' | 'masterclass' | 'inmersivo'>('tertulia');
  
  // School details form state
  const [formData, setFormData] = useState<BookingFormState>({
    schoolName: '',
    schoolType: 'publica',
    cityState: '',
    contactName: '',
    contactRole: 'Maestro(a) de Español / Coordinador',
    contactEmail: '',
    contactPhone: '',
    selectedFormatId: 'medio',
    selectedWorkshopId: 'tertulia',
    preferredDate: '',
    estimatedAudience: 60,
    gradeLevels: ['Elemental (K-5)', 'Intermedia (6º-8º)', 'Superior (9º-12º)', 'Universidad'],
    specialRequirements: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormatChange = (id: 'intimo' | 'medio' | 'completo') => {
    setSelectedFormat(id);
    setFormData(prev => ({ 
      ...prev, 
      selectedFormatId: id,
      estimatedAudience: id === 'intimo' ? 20 : id === 'medio' ? 60 : 150
    }));
  };

  const handleWorkshopChange = (id: 'tertulia' | 'masterclass' | 'inmersivo') => {
    setSelectedWorkshop(id);
    setFormData(prev => ({ ...prev, selectedWorkshopId: id }));
  };

  const toggleGrade = (grade: string) => {
    setFormData(prev => {
      const exists = prev.gradeLevels.includes(grade);
      return {
        ...prev,
        gradeLevels: exists 
          ? prev.gradeLevels.filter(g => g !== grade)
          : [...prev.gradeLevels, grade]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.schoolName || !formData.contactName || !formData.contactEmail) {
      alert('Por favor complete los campos obligatorios marcados con asterisco (*)');
      return;
    }

    // Launch celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C89D35', '#701A27', '#F0D38D', '#2B170A']
    });

    setFormSubmitted(true);
    onGenerateProposal({
      ...formData,
      selectedFormatId: selectedFormat,
      selectedWorkshopId: selectedWorkshop
    });
  };

  const currentFormatObj = THEATER_FORMATS.find(f => f.id === selectedFormat)!;
  const currentWorkshopObj = POST_SHOW_WORKSHOPS.find(w => w.id === selectedWorkshop)!;

  return (
    <section id="guia-formatos" className="py-24 bg-[#F4EEDF] border-b-2 border-[#C89D35] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#701A27] text-[#F0D38D] px-4 py-1 rounded-sm border border-[#C89D35] mb-3 shadow-xs">
            <Layers className="w-4 h-4 text-[#F0D38D]" />
            <span className="text-xs font-serif font-black uppercase tracking-widest">
              Configurador Interactivo de Función
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-[#2B170A] tracking-tight uppercase">
            Guía de Selección para Educadores
          </h2>

          <p className="text-base sm:text-lg text-[#4A2E18] font-serif italic mt-2">
            Configure la experiencia ideal para su plantel en dos sencillos pasos y genere su cotización o propuesta académica oficial.
          </p>

          <div className="w-24 h-1 bg-[#C89D35] mx-auto mt-4 rounded-full" />
        </div>

        {/* ========================================================================= */}
        {/* PASO 1: SELECCIONE EL FORMATO */}
        {/* ========================================================================= */}
        <div className="mb-16">
          
          <div className="flex items-center gap-3 mb-8 border-b-2 border-[#C89D35]/40 pb-3">
            <div className="w-9 h-9 rounded-full bg-[#701A27] text-[#F0D38D] font-display font-black flex items-center justify-center text-base border-2 border-[#C89D35]">
              1
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-[#701A27] tracking-widest block">
                PASO 1 DE 2
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-black text-[#2B170A] uppercase tracking-wide">
                Seleccione el Formato de Función (Capacidad y Espacio)
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THEATER_FORMATS.map((format) => {
              const isSelected = selectedFormat === format.id;
              return (
                <div
                  key={format.id}
                  onClick={() => handleFormatChange(format.id)}
                  className={`p-7 rounded-sm border-3 cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#FDFBF7] border-[#701A27] shadow-xl scale-[1.02] ring-2 ring-[#C89D35]'
                      : 'bg-[#FAF6EE] border-[#C89D35]/40 hover:border-[#C89D35] shadow-sm hover:shadow-md'
                  }`}
                  id={`format-card-${format.id}`}
                >
                  {/* Selected Badge or Corner accents */}
                  {isSelected ? (
                    <div className="absolute -top-3.5 right-4 bg-[#701A27] text-[#F0D38D] text-[10px] font-serif font-black uppercase px-3 py-0.5 rounded-sm border border-[#C89D35] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#F0D38D]" />
                      <span>Seleccionado</span>
                    </div>
                  ) : (
                    <div className="absolute -top-2.5 right-4 bg-[#FAF6EE] text-[#6B5E55] text-[9px] font-serif font-bold uppercase px-2 py-0.5 border border-[#C89D35]/40">
                      {format.badge}
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-2 mb-1 text-[#701A27]">
                        {format.id === 'intimo' && <BookOpen className="w-5 h-5" />}
                        {format.id === 'medio' && <Users className="w-5 h-5" />}
                        {format.id === 'completo' && <Sparkles className="w-5 h-5" />}
                        <span className="text-xs font-mono font-bold uppercase tracking-wider">
                          Capacidad
                        </span>
                      </div>
                      <h4 className="text-xl font-display font-black text-[#2B170A]">
                        {format.title}
                      </h4>
                      <p className="text-xs font-serif italic text-[#701A27] font-bold mt-0.5">
                        {format.subtitle}
                      </p>
                    </div>

                    {/* Capacity Highlight Box */}
                    <div className="bg-[#F4EEDF] p-3 rounded-sm border border-[#C89D35]/50 text-center">
                      <span className="text-[10px] font-mono uppercase text-[#6B5E55] font-bold block">
                        Audiencia Recomendada
                      </span>
                      <span className="text-sm sm:text-base font-serif font-black text-[#2B170A] block mt-0.5">
                        {format.capacity}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#3B2314] font-serif leading-relaxed">
                      {format.description}
                    </p>

                    {/* Space requirements */}
                    <div className="pt-2 text-xs font-sans border-t border-[#C89D35]/20">
                      <strong className="text-[11px] font-serif font-bold text-[#701A27] block mb-1">
                        Espacio Requerido:
                      </strong>
                      <span className="text-[#4A2E18] text-xs">
                        {format.recommendedSpace}
                      </span>
                    </div>

                    {/* Bullet Features */}
                    <ul className="space-y-1.5 pt-2 text-xs font-serif text-[#3B2314]">
                      {format.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#C89D35] font-bold">⚜️</span>
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Select Button */}
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => handleFormatChange(format.id)}
                      className={`w-full py-2.5 px-4 font-serif font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-[#701A27] text-[#FAF6EE] border border-[#C89D35]'
                          : 'bg-[#FAF6EE] text-[#3B2314] border border-[#3B2314]/30 hover:bg-[#701A27] hover:text-[#FAF6EE]'
                      }`}
                    >
                      {isSelected ? '✓ Formato Activo' : 'Elegir Este Formato'}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* PASO 2: SELECCIONE EL TALLER POST-FUNCIÓN */}
        {/* ========================================================================= */}
        <div className="mb-16">
          
          <div className="flex items-center gap-3 mb-8 border-b-2 border-[#C89D35]/40 pb-3">
            <div className="w-9 h-9 rounded-full bg-[#701A27] text-[#F0D38D] font-display font-black flex items-center justify-center text-base border-2 border-[#C89D35]">
              2
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-[#701A27] tracking-widest block">
                PASO 2 DE 2
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-black text-[#2B170A] uppercase tracking-wide">
                Seleccione el Taller Pedagógico Post-Función
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {POST_SHOW_WORKSHOPS.map((workshop) => {
              const isSelected = selectedWorkshop === workshop.id;
              return (
                <div
                  key={workshop.id}
                  onClick={() => handleWorkshopChange(workshop.id)}
                  className={`p-7 rounded-sm border-3 cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#FDFBF7] border-[#701A27] shadow-xl scale-[1.02] ring-2 ring-[#C89D35]'
                      : 'bg-[#FAF6EE] border-[#C89D35]/40 hover:border-[#C89D35] shadow-sm hover:shadow-md'
                  }`}
                  id={`workshop-card-${workshop.id}`}
                >
                  {/* Top Badge */}
                  {isSelected ? (
                    <div className="absolute -top-3.5 right-4 bg-[#701A27] text-[#F0D38D] text-[10px] font-serif font-black uppercase px-3 py-0.5 rounded-sm border border-[#C89D35] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#F0D38D]" />
                      <span>Seleccionado</span>
                    </div>
                  ) : (
                    <div className="absolute -top-2.5 right-4 bg-[#FAF6EE] text-[#6B5E55] text-[9px] font-serif font-bold uppercase px-2 py-0.5 border border-[#C89D35]/40">
                      {workshop.badge}
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono font-bold uppercase bg-[#701A27]/10 text-[#701A27] px-2 py-0.5 rounded border border-[#701A27]/20">
                          {workshop.duration}
                        </span>
                      </div>
                      <h4 className="text-xl font-display font-black text-[#2B170A] mt-2">
                        {workshop.title}
                      </h4>
                      <p className="text-xs font-serif text-[#6B5E55] mt-1">
                        Impartido por: <strong className="text-[#3B2314]">{workshop.instructor}</strong>
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#3B2314] font-serif leading-relaxed">
                      {workshop.description}
                    </p>

                    {/* Key Outcomes */}
                    <div className="pt-2 border-t border-[#C89D35]/20">
                      <span className="text-[10px] font-mono uppercase font-bold text-[#701A27] block mb-2">
                        Resultados Pedagógicos Clave:
                      </span>
                      <ul className="space-y-1 text-xs font-serif text-[#3B2314]">
                        {workshop.keyOutcomes.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#701A27] font-bold">✦</span>
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Select Button */}
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => handleWorkshopChange(workshop.id)}
                      className={`w-full py-2.5 px-4 font-serif font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center gap-2 ${
                        isSelected
                          ? 'bg-[#701A27] text-[#FAF6EE] border border-[#C89D35]'
                          : 'bg-[#FAF6EE] text-[#3B2314] border border-[#3B2314]/30 hover:bg-[#701A27] hover:text-[#FAF6EE]'
                      }`}
                    >
                      {isSelected ? '✓ Taller Activo' : 'Elegir Este Taller'}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* RESUMEN DEL PAQUETE & FORMULARIO DE RESERVA / CARTA DE PROPUESTA */}
        {/* ========================================================================= */}
        <div className="bg-[#FAF6EE] p-8 sm:p-12 border-4 border-[#C89D35] relative shadow-2xl">
          <div className="corner-bracket-tl" />
          <div className="corner-bracket-tr" />
          <div className="corner-bracket-bl" />
          <div className="corner-bracket-br" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Summary Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6 border-b lg:border-b-0 lg:border-r border-[#C89D35]/40 pb-8 lg:pb-0 lg:pr-8">
              
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#701A27] tracking-widest bg-[#C89D35]/20 px-2 py-0.5 rounded border border-[#C89D35]/40">
                  Resumen de la Experiencia
                </span>
                <h3 className="text-2xl font-display font-black text-[#2B170A] mt-2">
                  Su Paquete Académico Personalizado
                </h3>
                <p className="text-xs text-[#6B5E55] font-serif mt-1">
                  Revise la combinación seleccionada para su institución educativa.
                </p>
              </div>

              {/* Selection Details Box */}
              <div className="bg-[#F4EEDF] p-5 border-2 border-[#C89D35]/50 space-y-4 rounded-sm">
                
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block">
                    1. Formato de Montaje Escogido:
                  </span>
                  <p className="text-sm font-serif font-black text-[#2B170A]">
                    {currentFormatObj.title} ({currentFormatObj.capacity})
                  </p>
                  <p className="text-[11px] text-[#6B5E55] font-serif">
                    Espacio: {currentFormatObj.recommendedSpace}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#C89D35]/30">
                  <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block">
                    2. Taller Post-Función Escogido:
                  </span>
                  <p className="text-sm font-serif font-black text-[#2B170A]">
                    {currentWorkshopObj.title} ({currentWorkshopObj.duration})
                  </p>
                  <p className="text-[11px] text-[#6B5E55] font-serif">
                    Con: {currentWorkshopObj.instructor}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#C89D35]/30 flex justify-between items-center text-xs font-serif">
                  <span className="text-[#3B2314] font-bold">Tiempo Total Estimado:</span>
                  <span className="font-mono font-bold text-[#701A27]">
                    60 min + {currentWorkshopObj.duration}
                  </span>
                </div>
              </div>

              {/* Official Guarantee Seal */}
              <div className="p-4 bg-[#701A27] text-[#FAF6EE] rounded-sm border-2 border-[#C89D35] flex items-start gap-3">
                <Award className="w-6 h-6 text-[#F0D38D] shrink-0 mt-0.5" />
                <div className="text-xs font-serif">
                  <strong className="text-[#F0D38D] block font-bold">Garantía Pedagógica Cervantes:</strong>
                  Incluye material didáctico previo a la función, guía docente para análisis y certificado de experiencia para los alumnos.
                </div>
              </div>

            </div>

            {/* Right Booking Form Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <h4 className="text-xl font-display font-black text-[#2B170A] uppercase tracking-wide">
                  Solicitud de Fecha & Propuesta Institucional
                </h4>
                <p className="text-xs text-[#6B5E55] font-serif mt-1">
                  Complete los datos de su escuela. Recibirá confirmación inmediata y la carta formal con los datos del W-9 y rider escolar.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                
                {/* School Name & Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-serif font-bold text-[#3B2314] mb-1">
                      Nombre de la Escuela / Universidad *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Coral Gables High School"
                      className="w-full bg-[#FAF8F1] border border-[#C89D35]/60 rounded-sm px-3.5 py-2.5 text-[#2B170A] focus:outline-none focus:border-[#701A27] focus:ring-1 focus:ring-[#701A27]"
                      value={formData.schoolName}
                      onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block font-serif font-bold text-[#3B2314] mb-1">
                      Tipo de Institución *
                    </label>
                    <select
                      className="w-full bg-[#FAF8F1] border border-[#C89D35]/60 rounded-sm px-3.5 py-2.5 text-[#2B170A] focus:outline-none focus:border-[#701A27]"
                      value={formData.schoolType}
                      onChange={(e) => setFormData({ ...formData, schoolType: e.target.value as any })}
                    >
                      <option value="publica">Escuela Pública / Distrito Escolar</option>
                      <option value="elemental">Escuela Elemental / Primaria (K-5)</option>
                      <option value="intermedia">Escuela Intermedia / Middle School (6-8)</option>
                      <option value="superior">Escuela Superior / High School (9-12)</option>
                      <option value="privada">Colegio Privado / Independiente</option>
                      <option value="charter">Escuela Charter / Magnet</option>
                      <option value="universidad">Universidad / College</option>
                      <option value="otra">Centro Cultural / Biblioteca</option>
                    </select>
                  </div>
                </div>

                {/* City/State & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-serif font-bold text-[#3B2314] mb-1">
                      Ciudad y Estado (EE. UU.) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Miami, FL / San Antonio, TX"
                      className="w-full bg-[#FAF8F1] border border-[#C89D35]/60 rounded-sm px-3.5 py-2.5 text-[#2B170A] focus:outline-none focus:border-[#701A27]"
                      value={formData.cityState}
                      onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block font-serif font-bold text-[#3B2314] mb-1">
                      Fecha Tentativa Deseada *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-[#FAF8F1] border border-[#C89D35]/60 rounded-sm px-3.5 py-2.5 text-[#2B170A] focus:outline-none focus:border-[#701A27]"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>
                </div>

                {/* Contact Name & Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-serif font-bold text-[#3B2314] mb-1">
                      Nombre del Contacto / Docente *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Prof. Carmen Delgado"
                      className="w-full bg-[#FAF8F1] border border-[#C89D35]/60 rounded-sm px-3.5 py-2.5 text-[#2B170A] focus:outline-none focus:border-[#701A27]"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block font-serif font-bold text-[#3B2314] mb-1">
                      Cargo o Departamento
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Dept. Lenguas Mundiales / AP Spanish"
                      className="w-full bg-[#FAF8F1] border border-[#C89D35]/60 rounded-sm px-3.5 py-2.5 text-[#2B170A] focus:outline-none focus:border-[#701A27]"
                      value={formData.contactRole}
                      onChange={(e) => setFormData({ ...formData, contactRole: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-serif font-bold text-[#3B2314] mb-1">
                      Correo Electrónico Institucional *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="cdelgado@school.edu"
                      className="w-full bg-[#FAF8F1] border border-[#C89D35]/60 rounded-sm px-3.5 py-2.5 text-[#2B170A] focus:outline-none focus:border-[#701A27]"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block font-serif font-bold text-[#3B2314] mb-1">
                      Teléfono de Contacto
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full bg-[#FAF8F1] border border-[#C89D35]/60 rounded-sm px-3.5 py-2.5 text-[#2B170A] focus:outline-none focus:border-[#701A27]"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Grade levels checkboxes */}
                <div className="pt-1">
                  <label className="block font-serif font-bold text-[#3B2314] mb-1.5">
                    Nivel de los Estudiantes Participantes (Todos los niveles disponibles):
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Elemental (K-5)',
                      'Intermedia (6º-8º)',
                      'Superior (9º-12º)',
                      'AP Spanish / Literatura',
                      'Universidad / College',
                      'Toda la Escuela (Multinivel)'
                    ].map((grade) => (
                      <button
                        key={grade}
                        type="button"
                        onClick={() => toggleGrade(grade)}
                        className={`text-[11px] font-serif px-2.5 py-1 rounded-sm border transition-all ${
                          formData.gradeLevels.includes(grade)
                            ? 'bg-[#701A27] text-[#FAF6EE] border-[#701A27] font-bold'
                            : 'bg-[#FAF8F1] text-[#3B2314] border-[#C89D35]/40 hover:bg-[#F4EEDF]'
                        }`}
                      >
                        {formData.gradeLevels.includes(grade) ? '✓ ' : ''}{grade}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block font-serif font-bold text-[#3B2314] mb-1">
                    Comentarios, Preguntas o Necesidades Especiales
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Indique si tiene un horario preferido (matutino/vespertino) o si requiere procesar la orden a través del sistema de compras del distrito escolar..."
                    className="w-full bg-[#FAF8F1] border border-[#C89D35]/60 rounded-sm px-3.5 py-2 text-[#2B170A] focus:outline-none focus:border-[#701A27]"
                    value={formData.specialRequirements}
                    onChange={(e) => setFormData({ ...formData, specialRequirements: e.target.value })}
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#701A27] hover:bg-[#8F2233] text-[#FAF6EE] font-serif font-bold text-sm sm:text-base uppercase tracking-widest py-4 rounded-sm border-2 border-[#C89D35] shadow-lg flex items-center justify-center gap-2 transform transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                    id="submit-booking-request-btn"
                  >
                    <Send className="w-4 h-4 text-[#F0D38D]" />
                    <span>Generar Propuesta y Solicitar Fecha</span>
                  </button>
                  <p className="text-[10px] text-center text-[#6B5E55] font-serif italic mt-2">
                    donquijoteusa.com • Producción Oficial Teatro for the Soul • Sin compromiso inicial de compra
                  </p>
                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
