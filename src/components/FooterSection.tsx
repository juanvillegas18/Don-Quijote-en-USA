/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Shield, 
  Award, 
  CheckCircle2, 
  Globe2, 
  Feather, 
  BookOpen, 
  Instagram, 
  Facebook, 
  Youtube, 
  Share2 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FooterSection() {
  const [teacherName, setTeacherName] = useState('');
  const [teacherEmail, setTeacherEmail] = useState('');
  const [school, setSchool] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teacherName || !teacherEmail) return;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#C89D35', '#701A27', '#F0D38D']
    });

    setSentSuccess(true);
    setTimeout(() => {
      setTeacherName('');
      setTeacherEmail('');
      setSchool('');
      setMessage('');
    }, 4000);
  };

  return (
    <footer id="contacto" className="bg-[#1C110A] text-[#FAF6EE] border-t-4 border-[#C89D35] relative pt-16 pb-12 overflow-hidden">
      
      {/* Background Watermark Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C89D35_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-[#C89D35]/30">
          
          {/* Column 1: Branding & Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-sm bg-[#701A27] border-2 border-[#C89D35] flex items-center justify-center text-[#F0D38D] shadow-md">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-black text-2xl text-[#F0D38D] tracking-wider uppercase">
                  Don Quijote <span className="text-[#9B2838]">en USA</span>
                </h3>
                <p className="text-xs text-[#FAF6EE]/80 font-serif italic">
                  Unipersonal de Teatro Educativo y Experiencia Académica en Español
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF6EE]/75 font-serif leading-relaxed">
              Una obra creada por <strong>Gabriel Villegas</strong> e interpretada por <strong>Wilderman García</strong>, producida bajo los más altos estándares artísticos y pedagógicos por <strong>Teatro for the Soul</strong>. Dedicada a inspirar a las nuevas generaciones a través del poder transformador de la lengua española.
            </p>

            {/* Production Details */}
            <div className="bg-white/5 border border-[#C89D35]/30 p-4 rounded-sm space-y-2 text-xs font-serif">
              <div className="flex items-center gap-2 text-[#F0D38D]">
                <Globe2 className="w-4 h-4 text-[#C89D35]" />
                <span className="font-mono font-bold">donquijoteusa.com</span>
              </div>
              <div className="flex items-center gap-2 text-[#FAF6EE]/80">
                <Mail className="w-4 h-4 text-[#C89D35]" />
                <span>contacto@donquijoteusa.com / info@teatroforthesoul.com</span>
              </div>
              <div className="flex items-center gap-2 text-[#FAF6EE]/80">
                <Award className="w-4 h-4 text-[#C89D35]" />
                <span>Proveedor Autorizado para Escuelas & Distritos Escolares (W-9 listo)</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#F0D38D] block mb-2 font-bold">
                Conéctese con Teatro for the Soul:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-sm bg-white/10 hover:bg-[#701A27] border border-[#C89D35]/40 flex items-center justify-center text-[#FAF6EE] hover:text-[#F0D38D] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-sm bg-white/10 hover:bg-[#701A27] border border-[#C89D35]/40 flex items-center justify-center text-[#FAF6EE] hover:text-[#F0D38D] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-sm bg-white/10 hover:bg-[#701A27] border border-[#C89D35]/40 flex items-center justify-center text-[#FAF6EE] hover:text-[#F0D38D] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Direct Contact Form for Teachers (7 cols) */}
          <div className="lg:col-span-7 bg-[#2B170A] p-8 sm:p-10 border-2 border-[#C89D35] relative shadow-xl">
            <div className="corner-bracket-tl" />
            <div className="corner-bracket-tr" />
            <div className="corner-bracket-bl" />
            <div className="corner-bracket-br" />

            <div className="space-y-4">
              
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#F0D38D] font-bold block">
                  ✦ ATENCIÓN DIRECTA A EDUCADORES
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-black text-[#FAF6EE] uppercase tracking-wide">
                  Consulta Rápida para Maestros & Directores
                </h4>
                <p className="text-xs text-[#FAF6EE]/80 font-serif mt-1">
                  ¿Tiene preguntas sobre disponibilidad de fechas o procesos de compra distrital? Escríbanos directamente:
                </p>
              </div>

              {sentSuccess ? (
                <div className="bg-emerald-900/50 border-2 border-emerald-500 p-6 text-center space-y-2 rounded-sm animate-fade-in">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <h5 className="font-display font-bold text-lg text-emerald-200">¡Mensaje Enviado con Éxito!</h5>
                  <p className="text-xs font-serif text-emerald-100">
                    Gracias por comunicarse. El equipo de producción de <strong>Teatro for the Soul</strong> responderá a su correo a la brevedad posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickContact} className="space-y-3 text-xs font-sans">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-serif font-bold text-[#F0D38D] mb-1">
                        Nombre del Docente / Director *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Su nombre"
                        className="w-full bg-black/40 border border-[#C89D35]/50 rounded-sm px-3 py-2 text-[#FAF6EE] placeholder-slate-400 focus:outline-none focus:border-[#F0D38D]"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block font-serif font-bold text-[#F0D38D] mb-1">
                        Correo Institucional *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="docente@escuela.org"
                        className="w-full bg-black/40 border border-[#C89D35]/50 rounded-sm px-3 py-2 text-[#FAF6EE] placeholder-slate-400 focus:outline-none focus:border-[#F0D38D]"
                        value={teacherEmail}
                        onChange={(e) => setTeacherEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-serif font-bold text-[#F0D38D] mb-1">
                      Escuela / Distrito Escolar y Estado
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Austin Independent School District, TX"
                      className="w-full bg-black/40 border border-[#C89D35]/50 rounded-sm px-3 py-2 text-[#FAF6EE] placeholder-slate-400 focus:outline-none focus:border-[#F0D38D]"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block font-serif font-bold text-[#F0D38D] mb-1">
                      Mensaje o Pregunta
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Cuéntenos sobre las fechas que tiene en mente, número estimado de alumnos o si requiere cotización formal para su departamento..."
                      className="w-full bg-black/40 border border-[#C89D35]/50 rounded-sm px-3 py-2 text-[#FAF6EE] placeholder-slate-400 focus:outline-none focus:border-[#F0D38D]"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#701A27] hover:bg-[#8F2233] text-[#FAF6EE] font-serif font-bold text-xs uppercase tracking-widest py-3 rounded-sm border border-[#C89D35] flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                  >
                    <Send className="w-3.5 h-3.5 text-[#F0D38D]" />
                    <span>Enviar Mensaje a la Producción</span>
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>

        {/* Bottom Legal & Domain Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-serif text-[#FAF6EE]/60">
          <p>
            © {new Date().getFullYear()} <strong>donquijoteusa.com</strong> • Todos los derechos reservados. Producción exclusiva de <strong>Teatro for the Soul</strong>.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Dramaturgia: Gabriel Villegas</span>
            <span>•</span>
            <span>Actor: Wilderman García</span>
            <span>•</span>
            <span>EE. UU.</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
