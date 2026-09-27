/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Ticket, 
  GraduationCap, 
  HelpCircle, 
  Calculator, 
  Mail, 
  Sparkles,
  Shield,
  Menu,
  X,
  Compass,
  Send,
  Users,
  Languages,
  Globe
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export type ActiveTab = 'home' | 'about' | 'standards' | 'planner' | 'faq' | 'email-generator' | 'contact';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const { language, setLanguage, toggleLanguage, isSpanish } = useLanguage();
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FCF9F2]/95 backdrop-blur-md border-b-2 border-amber-300/80 shadow-sm py-2.5'
          : 'bg-[#FCF9F2]/95 backdrop-blur-sm py-3.5 border-b border-amber-300/60'
      }`}
    >
      {/* Spanish Golden Age Spectrum Ribbon */}
      <div className="absolute top-0 left-0 right-0 h-1 rainbow-gradient-bar" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Medieval Chivalric Brand */}
        <button 
          type="button" 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#9E1B32] via-[#C22D47] to-[#D97706] text-white flex items-center justify-center font-cinzel font-bold text-base shadow-sm ring-2 ring-amber-400/60 group-hover:scale-105 transition-all">
            DQ
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-base sm:text-lg font-bold tracking-tight bg-gradient-to-r from-stone-950 via-[#730E20] to-[#B45309] bg-clip-text text-transparent group-hover:from-[#9E1B32] group-hover:to-[#D97706] transition-all leading-tight">
                Don Quijote en USA
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-sans font-bold bg-amber-100 text-amber-900 border border-amber-300 uppercase tracking-wider">
                Teatro Cervantino
              </span>
            </div>
            <span className="text-[10px] font-sans font-semibold text-[#9E1B32] tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {isSpanish ? 'Gira Escolar y Universitaria' : 'School & University Tour'}
            </span>
          </div>
        </button>

        {/* Desktop Tab Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-stone-200/70 p-1 rounded-xl border border-stone-300/80">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className={`text-xs font-bold py-1.5 px-3 rounded-lg transition-all cursor-pointer ${
              activeTab === 'home'
                ? 'bg-gradient-to-r from-[#9E1B32] to-[#B91C1C] text-white shadow-xs'
                : 'text-stone-700 hover:text-[#9E1B32] hover:bg-white/60'
            }`}
          >
            {isSpanish ? 'La Obra' : 'The Show'}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('about')}
            className={`text-xs font-bold py-1.5 px-3 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'about'
                ? 'bg-gradient-to-r from-amber-600 to-rose-700 text-white shadow-xs'
                : 'text-stone-700 hover:text-[#9E1B32] hover:bg-white/60'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>{isSpanish ? 'Nosotros' : 'About Us'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('standards')}
            className={`text-xs font-bold py-1.5 px-3 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'standards'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                : 'text-stone-700 hover:text-blue-700 hover:bg-white/60'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{isSpanish ? 'Estándares AP' : 'Standards & AP'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('planner')}
            className={`text-xs font-bold py-1.5 px-3 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'planner'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs'
                : 'text-stone-700 hover:text-emerald-700 hover:bg-white/60'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>{isSpanish ? 'Planificador' : 'Assembly Planner'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('faq')}
            className={`text-xs font-bold py-1.5 px-3 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'faq'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-xs'
                : 'text-stone-700 hover:text-purple-700 hover:bg-white/60'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isSpanish ? 'Preguntas' : 'Logistical FAQ'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('email-generator')}
            className={`text-xs font-bold py-1.5 px-3 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'email-generator'
                ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-xs'
                : 'text-stone-700 hover:text-[#9E1B32] hover:bg-white/60'
            }`}
          >
            <Send className="w-3.5 h-3.5 text-amber-500" />
            <span>{isSpanish ? 'Email Docente' : 'Email Leads'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className={`text-xs font-bold py-1.5 px-3 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'contact'
                ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-xs'
                : 'text-stone-700 hover:text-amber-800 hover:bg-white/60'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{isSpanish ? 'Reservas & EIN' : 'Booking & EIN'}</span>
          </button>
        </nav>

        {/* Action Button & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Prominent Language Switcher Button */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border-2 border-amber-400/90 bg-amber-50/90 hover:bg-amber-100 text-stone-800 transition-all font-sans text-xs font-bold shadow-2xs group cursor-pointer"
            title={isSpanish ? "Switch to English" : "Cambiar a Español"}
            aria-label="Select your language / Seleccionar idioma"
          >
            <Languages className="w-3.5 h-3.5 text-[#9E1B32] group-hover:scale-110 transition-transform" />
            <span className="flex items-center gap-0.5 text-[11px] font-mono">
              <span className={!isSpanish ? "text-[#1E3A8A] font-extrabold underline underline-offset-2" : "text-stone-400 font-normal"}>EN</span>
              <span className="text-amber-500 font-bold">/</span>
              <span className={isSpanish ? "text-[#9E1B32] font-extrabold underline underline-offset-2" : "text-stone-400 font-normal"}>ES</span>
            </span>
          </button>

          <a
            href={zeffyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-wine text-xs py-2 px-3 sm:px-4 flex items-center gap-1.5 shadow-md hover:shadow-lg font-bold"
          >
            <Ticket className="w-3.5 h-3.5 text-amber-300" />
            <span>{isSpanish ? 'Reservar en Zeffy' : 'Reserve on Zeffy'}</span>
            <ExternalLink className="w-3 h-3 opacity-90 hidden sm:inline-block" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-stone-200/80 text-stone-700 hover:bg-stone-300 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b-2 border-amber-300 shadow-xl px-4 py-4 space-y-2 animate-in fade-in duration-200">
          {/* Mobile Language Switcher */}
          <div className="pb-2 mb-2 border-b border-stone-200 flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-stone-600 uppercase">
              {isSpanish ? 'Seleccionar Idioma:' : 'Select Language:'}
            </span>
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg border-2 border-amber-400 bg-amber-50 text-xs font-bold"
            >
              <Languages className="w-3.5 h-3.5 text-[#9E1B32]" />
              <span className={!isSpanish ? "text-[#1E3A8A] font-bold" : "text-stone-400"}>English</span>
              <span className="text-stone-400">|</span>
              <span className={isSpanish ? "text-[#9E1B32] font-bold" : "text-stone-400"}>Español</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className={`w-full text-left py-2.5 px-3.5 rounded-lg text-xs font-bold ${
              activeTab === 'home' ? 'bg-[#9E1B32] text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            {isSpanish ? 'La Obra (Inicio)' : 'The Show Overview'}
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('about')}
            className={`w-full text-left py-2.5 px-3.5 rounded-lg text-xs font-bold flex items-center gap-2 ${
              activeTab === 'about' ? 'bg-amber-600 text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>{isSpanish ? 'Sobre Nosotros (Biografías)' : 'About Us (Biographies)'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('standards')}
            className={`w-full text-left py-2.5 px-3.5 rounded-lg text-xs font-bold flex items-center gap-2 ${
              activeTab === 'standards' ? 'bg-blue-600 text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>{isSpanish ? 'Estándares ACTFL y AP Spanish' : 'Curriculum & ACTFL Standards'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('planner')}
            className={`w-full text-left py-2.5 px-3.5 rounded-lg text-xs font-bold flex items-center gap-2 ${
              activeTab === 'planner' ? 'bg-emerald-600 text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>{isSpanish ? 'Planificador y Presupuesto Escolar' : 'School Assembly Planner & Proposal'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('faq')}
            className={`w-full text-left py-2.5 px-3.5 rounded-lg text-xs font-bold flex items-center gap-2 ${
              activeTab === 'faq' ? 'bg-purple-600 text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{isSpanish ? 'Preguntas Frecuentes (Logística)' : 'Frequently Asked Questions (Logistics)'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('email-generator')}
            className={`w-full text-left py-2.5 px-3.5 rounded-lg text-xs font-bold flex items-center gap-2 ${
              activeTab === 'email-generator' ? 'bg-[#9E1B32] text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>{isSpanish ? 'Generador de Email para Profesores' : 'Teacher Email Generator'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left py-2.5 px-3.5 rounded-lg text-xs font-bold flex items-center gap-2 ${
              activeTab === 'contact' ? 'bg-amber-600 text-white' : 'text-stone-700 hover:bg-stone-100'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>{isSpanish ? 'Información Institucional & EIN' : 'Booking & Vendor Information (EIN)'}</span>
          </button>
        </div>
      )}
    </header>
  );
}
