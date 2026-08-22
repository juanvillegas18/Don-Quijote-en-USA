/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Award, 
  CheckCircle2, 
  FileText, 
  ExternalLink, 
  Sparkles, 
  GraduationCap, 
  Clock, 
  Building2, 
  Download, 
  Eye, 
  AlertCircle,
  HelpCircle,
  FileCheck2,
  Stamp
} from 'lucide-react';
import { 
  SAMPLE_CERTIFICATES, 
  INSTITUTIONAL_CREDENTIALS, 
  AcademicCertificate, 
  findCertificateByFolio 
} from '../data/certificatesData';

interface CertificateValidatorSectionProps {
  onViewCertificate: (certificate: AcademicCertificate) => void;
}

export default function CertificateValidatorSection({ onViewCertificate }: CertificateValidatorSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [validatedCert, setValidatedCert] = useState<AcademicCertificate | null>(SAMPLE_CERTIFICATES[0]);
  const [hasSearched, setHasSearched] = useState(false);
  const [activeTab, setActiveTab] = useState<'validador' | 'credenciales' | 'emitir'>('validador');

  // Teacher generator state
  const [genSchool, setGenSchool] = useState('');
  const [genRecipient, setGenRecipient] = useState('');
  const [genLevel, setGenLevel] = useState<'Elemental (K-5)' | 'Intermedia (6-8)' | 'Superior (9-12)' | 'AP Spanish Literature' | 'Universitario' | 'Todos los Niveles'>('Superior (9-12)');
  const [genHours, setGenHours] = useState(2.0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const result = findCertificateByFolio(searchQuery);
    setValidatedCert(result);
    setHasSearched(true);
  };

  const handleSelectSample = (cert: AcademicCertificate) => {
    setSearchQuery(cert.folioId);
    setValidatedCert(cert);
    setHasSearched(true);
  };

  const handleGenerateCustomCert = (e: React.FormEvent) => {
    e.preventDefault();
    const newFolio = `DQ-USA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newCert: AcademicCertificate = {
      folioId: newFolio,
      recipientName: genRecipient.trim() || 'Estudiantes de Español',
      recipientRole: 'Institución Educativa',
      institution: genSchool.trim() || 'Escuela Participante',
      cityState: 'Estados Unidos',
      academicLevel: genLevel,
      contactHours: genHours,
      issueDate: 'Emitido en Línea',
      workshopTitle: 'Inmersión Lingüística y Apreciación Cervantina',
      formatTitle: 'Don Quijote en USA (Obra + Taller)',
      status: 'valido',
      competencies: [
        'Desarrollo de fluidez y comprensión auditiva en español',
        'Análisis de valores universales: justicia, empatía e idealismo',
        'Participación e interacción oral en lengua meta'
      ],
      signatories: {
        author: 'Gabriel Villegas',
        authorRole: 'Dramaturgo, Director & Productor',
        actor: 'Wilderman García',
        actorRole: 'Actor Protagónico (Don Quijote)',
        organization: 'Teatro for the Soul • donquijoteusa.com'
      },
      actflStandards: ['1.1 Interpersonal', '1.2 Interpretive', '2.1 Cultural Immersion', '3.1 Literature Connections'],
      verificationUrl: `https://donquijoteusa.com/validar?folio=${newFolio}`
    };

    setValidatedCert(newCert);
    onViewCertificate(newCert);
  };

  return (
    <section id="certificados" className="py-16 sm:py-20 bg-[#F4EEDF] border-t-2 border-b-2 border-[#C89D35]/40 relative overflow-hidden">
      
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#701A27_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#701A27] text-[#F0D38D] px-3.5 py-1 rounded-sm border border-[#C89D35] mb-3 shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[10px] sm:text-xs font-serif font-black uppercase tracking-[0.2em]">
              Acreditación Académica & Validez Oficial
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-black text-[#2B170A] uppercase tracking-wide">
            Validación de Certificados y Credenciales
          </h2>

          <p className="text-sm sm:text-base text-[#4A2E18] font-serif italic mt-2">
            Verifique la autenticidad de los diplomas emitidos a estudiantes, escuelas y docentes, así como las credenciales de proveedor educativo de <em>Teatro for the Soul</em>.
          </p>

          {/* Navigation Pills between Tabs */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('validador')}
              className={`px-4 py-2 text-xs font-serif font-bold uppercase rounded-sm border transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'validador'
                  ? 'bg-[#701A27] text-[#FAF6EE] border-[#701A27] shadow-md'
                  : 'bg-[#FAF6EE] text-[#4A2E18] border-[#C89D35]/40 hover:bg-[#F0E6D2]'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-[#F0D38D]" />
              <span>Validador de Folios</span>
            </button>

            <button
              onClick={() => setActiveTab('credenciales')}
              className={`px-4 py-2 text-xs font-serif font-bold uppercase rounded-sm border transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'credenciales'
                  ? 'bg-[#701A27] text-[#FAF6EE] border-[#701A27] shadow-md'
                  : 'bg-[#FAF6EE] text-[#4A2E18] border-[#C89D35]/40 hover:bg-[#F0E6D2]'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#F0D38D]" />
              <span>Acreditación Institucional (ACTFL & W-9)</span>
            </button>

            <button
              onClick={() => setActiveTab('emitir')}
              className={`px-4 py-2 text-xs font-serif font-bold uppercase rounded-sm border transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'emitir'
                  ? 'bg-[#701A27] text-[#FAF6EE] border-[#701A27] shadow-md'
                  : 'bg-[#FAF6EE] text-[#4A2E18] border-[#C89D35]/40 hover:bg-[#F0E6D2]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#F0D38D]" />
              <span>Generar Certificado Escolar</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Validador de Folios */}
        {activeTab === 'validador' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Search Box & Sample Folios (Left Column) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#FAF6EE] border-2 border-[#C89D35] p-5 sm:p-6 rounded-sm shadow-md">
                <h3 className="font-serif font-bold text-base text-[#2B170A] mb-2 flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#701A27]" />
                  Consultar Código o Folio de Verificación
                </h3>
                <p className="text-xs text-[#5A3E2B] font-serif mb-4">
                  Ingrese el código que aparece en el sello del certificado o busque por el nombre de la institución:
                </p>

                <form onSubmit={handleSearch} className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Ej: DQ-USA-2025-0842 o Coral Gables"
                      className="w-full bg-white border border-[#C89D35] px-3.5 py-2.5 rounded-sm text-sm font-mono text-[#2B170A] focus:outline-none focus:ring-2 focus:ring-[#701A27] focus:border-transparent placeholder:text-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#701A27] hover:bg-[#8F2233] text-[#FAF6EE] font-serif font-bold text-xs uppercase tracking-wider py-2.5 rounded-sm border border-[#C89D35] shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#F0D38D]" />
                    <span>Validar Certificado</span>
                  </button>
                </form>

                {/* Quick Examples */}
                <div className="mt-5 pt-4 border-t border-[#C89D35]/30">
                  <span className="text-[10px] font-serif font-bold uppercase tracking-wider text-[#701A27] block mb-2">
                    Ejemplos de Folios Emitidos por Nivel:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SAMPLE_CERTIFICATES.map((cert) => (
                      <button
                        key={cert.folioId}
                        onClick={() => handleSelectSample(cert)}
                        className={`text-left p-2 rounded-sm border text-[11px] font-mono transition-all cursor-pointer ${
                          validatedCert?.folioId === cert.folioId
                            ? 'bg-[#701A27] text-[#FAF6EE] border-[#701A27]'
                            : 'bg-white text-[#2B170A] border-[#C89D35]/40 hover:bg-[#F4EEDF]'
                        }`}
                      >
                        <div className="font-bold flex items-center justify-between">
                          <span>{cert.folioId}</span>
                          <span className="text-[9px] opacity-80 font-serif">{cert.academicLevel}</span>
                        </div>
                        <div className="truncate text-[10px] opacity-90 font-serif">{cert.institution}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Information callout */}
              <div className="bg-[#FAF8F1] border border-[#C89D35]/40 p-4 rounded-sm flex items-start gap-3 text-xs font-serif text-[#4A2E18]">
                <HelpCircle className="w-5 h-5 text-[#701A27] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2B170A] block">¿Para qué sirve esta validación?</strong>
                  Los departamentos de lenguas, coordinadores de distrito y directores escolares pueden corroborar las horas de contacto acreditadas y la autenticidad curricular de la experiencia.
                </div>
              </div>
            </div>

            {/* Validation Result Box (Right Column) */}
            <div className="lg:col-span-7">
              {validatedCert ? (
                <div className="bg-[#FFFDF9] border-2 border-[#2E6F40] rounded-sm p-6 shadow-xl relative overflow-hidden">
                  
                  {/* Status Banner */}
                  <div className="flex items-center justify-between bg-[#2E6F40] text-white px-4 py-2 rounded-sm -mt-2 -mx-2 mb-5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#F0D38D]" />
                      <span className="font-serif font-black text-xs uppercase tracking-wider">
                        Certificado Académico Auténtico y Válido
                      </span>
                    </div>
                    <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded font-bold">
                      {validatedCert.folioId}
                    </span>
                  </div>

                  {/* Certificate Summary Card */}
                  <div className="space-y-4 font-serif">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block">
                        Destinatario / Entidad Reconocida:
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#2B170A]">
                        {validatedCert.recipientName}
                      </h3>
                      <p className="text-sm text-[#5A3E2B]">
                        {validatedCert.institution} • {validatedCert.cityState}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#FAF8F1] p-3 rounded-sm border border-[#C89D35]/30 text-xs">
                      <div>
                        <span className="text-[10px] text-[#6B5E55] block">Nivel Escolar:</span>
                        <strong className="text-[#701A27] font-bold">{validatedCert.academicLevel}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#6B5E55] block">Horas Acreditadas:</span>
                        <strong className="text-[#2B170A] font-bold">{validatedCert.contactHours} Horas Pedagógicas</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#6B5E55] block">Fecha de Emisión:</span>
                        <strong className="text-[#2B170A] font-bold">{validatedCert.issueDate}</strong>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block mb-1">
                        Taller & Experiencia Realizada:
                      </span>
                      <p className="text-sm font-semibold text-[#2B170A]">
                        «Don Quijote en USA» + {validatedCert.workshopTitle}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#701A27] font-bold block mb-1">
                        Competencias Acreditadas:
                      </span>
                      <ul className="text-xs text-[#4A2E18] space-y-1 pl-4 list-disc">
                        {validatedCert.competencies.map((comp, idx) => (
                          <li key={idx}>{comp}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Signatures verification line */}
                    <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div>
                        <span className="text-[10px] text-[#6B5E55] block">Firmas Digitales Registradas:</span>
                        <span className="font-bold text-[#2B170A]">Gabriel Villegas</span> (Autor/Director) &amp; <span className="font-bold text-[#2B170A]">Wilderman García</span> (Actor)
                      </div>
                      
                      <button
                        onClick={() => onViewCertificate(validatedCert)}
                        className="bg-[#701A27] hover:bg-[#8F2233] text-[#FAF6EE] font-serif font-bold text-xs uppercase px-4 py-2 rounded-sm border border-[#C89D35] flex items-center gap-1.5 shadow-sm transition-transform hover:scale-102 cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-[#F0D38D]" />
                        <span>Ver / Imprimir Diploma Oficial</span>
                      </button>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="bg-[#FAF6EE] border-2 border-[#C89D35] rounded-sm p-8 text-center text-slate-600">
                  <AlertCircle className="w-10 h-10 text-[#701A27] mx-auto mb-3" />
                  <h4 className="font-serif font-bold text-base text-[#2B170A] mb-1">
                    No se encontró ningún certificado con ese código
                  </h4>
                  <p className="text-xs text-[#5A3E2B] max-w-md mx-auto">
                    Por favor verifique el folio ingresado o seleccione uno de los ejemplos predeterminados.
                  </p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 2: Acreditación Institucional (ACTFL & W-9) */}
        {activeTab === 'credenciales' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INSTITUTIONAL_CREDENTIALS.map((cred) => (
                <div key={cred.id} className="bg-[#FAF6EE] border-2 border-[#C89D35] p-6 rounded-sm shadow-md flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-sm bg-[#701A27] text-[#F0D38D] flex items-center justify-center font-bold">
                        <Stamp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold bg-[#2E6F40]/10 text-[#2E6F40] border border-[#2E6F40]/30 px-2 py-0.5 rounded">
                        {cred.badge}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-[#2B170A] mb-1">
                      {cred.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#701A27] font-semibold block mb-2">
                      Código: {cred.code}
                    </span>
                    <p className="text-xs font-serif text-[#4A2E18] leading-relaxed mb-4">
                      {cred.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#C89D35]/30 flex items-center justify-between text-xs font-serif text-[#6B5E55]">
                    <span>Entidad Emisora:</span>
                    <strong className="text-[#2B170A]">{cred.authority}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* School District Compliance Card */}
            <div className="bg-[#FAF8F1] border border-[#C89D35] p-6 rounded-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif font-bold text-base text-[#701A27] flex items-center gap-2">
                    <FileCheck2 className="w-5 h-5 text-[#2E6F40]" />
                    ¿Su distrito escolar requiere formulario W-9, Certificado de Seguro (COI) o Vendor Registration?
                  </h4>
                  <p className="text-xs font-serif text-[#4A2E18] mt-1 max-w-3xl">
                    <em>Teatro for the Soul</em> está registrado y habilitado para procesar órdenes de compra (Purchase Orders / PO) y contratos con distritos escolares públicos, departamentos de educación estatales y universidades privadas en todos los Estados Unidos y Puerto Rico.
                  </p>
                </div>
                <a
                  href="#contacto"
                  className="bg-[#701A27] hover:bg-[#8F2233] text-[#FAF6EE] font-serif font-bold text-xs uppercase px-4 py-2.5 rounded-sm whitespace-nowrap border border-[#C89D35] transition-colors"
                >
                  Solicitar Paquete de Proveedor
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Generar Certificado Escolar */}
        {activeTab === 'emitir' && (
          <div className="bg-[#FAF6EE] border-2 border-[#C89D35] p-6 sm:p-8 rounded-sm max-w-2xl mx-auto shadow-lg">
            <div className="text-center mb-6">
              <GraduationCap className="w-10 h-10 text-[#701A27] mx-auto mb-2" />
              <h3 className="font-serif font-black text-xl text-[#2B170A] uppercase">
                Generar Diploma Académico Personalizado
              </h3>
              <p className="text-xs font-serif italic text-[#4A2E18]">
                Cree una constancia oficial para su grupo de estudiantes o institución con número de folio verificable.
              </p>
            </div>

            <form onSubmit={handleGenerateCustomCert} className="space-y-4 font-serif">
              <div>
                <label className="block text-xs font-bold text-[#3B2314] mb-1">
                  Nombre de la Escuela, Universidad o Distrito:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Westside High School"
                  value={genSchool}
                  onChange={(e) => setGenSchool(e.target.value)}
                  className="w-full bg-white border border-[#C89D35] px-3 py-2 rounded-sm text-sm text-[#2B170A] focus:outline-none focus:ring-2 focus:ring-[#701A27]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3B2314] mb-1">
                  Grupo o Nombre del Destinatario:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Estudiantes de Español Avanzado / Grado 10"
                  value={genRecipient}
                  onChange={(e) => setGenRecipient(e.target.value)}
                  className="w-full bg-white border border-[#C89D35] px-3 py-2 rounded-sm text-sm text-[#2B170A] focus:outline-none focus:ring-2 focus:ring-[#701A27]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3B2314] mb-1">
                    Nivel Académico:
                  </label>
                  <select
                    value={genLevel}
                    onChange={(e) => setGenLevel(e.target.value as any)}
                    className="w-full bg-white border border-[#C89D35] px-3 py-2 rounded-sm text-sm text-[#2B170A] focus:outline-none focus:ring-2 focus:ring-[#701A27]"
                  >
                    <option value="Elemental (K-5)">Elemental (K-5)</option>
                    <option value="Intermedia (6-8)">Intermedia (6-8)</option>
                    <option value="Superior (9-12)">Superior (9-12)</option>
                    <option value="AP Spanish Literature">AP Spanish Literature</option>
                    <option value="Universitario">Universitario</option>
                    <option value="Todos los Niveles">Todos los Niveles</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3B2314] mb-1">
                    Horas Pedagógicas Acreditadas:
                  </label>
                  <select
                    value={genHours}
                    onChange={(e) => setGenHours(parseFloat(e.target.value))}
                    className="w-full bg-white border border-[#C89D35] px-3 py-2 rounded-sm text-sm text-[#2B170A] focus:outline-none focus:ring-2 focus:ring-[#701A27]"
                  >
                    <option value={1.0}>1.0 Hora (Solo Obra)</option>
                    <option value={1.5}>1.5 Horas (Obra + Tertulia)</option>
                    <option value={2.0}>2.0 Horas (Obra + Masterclass)</option>
                    <option value={3.0}>3.0 Horas (Obra + Taller Inmersivo)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#701A27] hover:bg-[#8F2233] text-[#FAF6EE] font-serif font-bold text-xs uppercase tracking-wider py-3 rounded-sm border border-[#C89D35] shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all mt-4"
              >
                <Sparkles className="w-4 h-4 text-[#F0D38D]" />
                <span>Generar y Previsualizar Diploma Oficial</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </section>
  );
}
