/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles, 
  Feather, 
  GraduationCap, 
  Ticket, 
  Building2, 
  Calendar, 
  Clock, 
  Languages, 
  RefreshCw,
  Eye,
  FileCode,
  ShieldCheck,
  CheckCircle2,
  Users
} from 'lucide-react';
import quijoteOverviewBg from '../assets/images/quijote_overview_minimalist_bg_1790503674706.jpg';

export default function TeacherEmailGeneratorPage() {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const officialEmail = "teatroforthesoul@gmail.com";

  // Form State
  const [teacherEmail, setTeacherEmail] = useState('');
  const [teacherName, setTeacherName] = useState('Profesor/a');
  const [schoolName, setSchoolName] = useState('su institución escolar');
  const [gradeLevel, setGradeLevel] = useState<'high' | 'middle' | 'ap' | 'all'>('high');
  const [emailAngle, setEmailAngle] = useState<'general' | 'standards' | 'heritage' | 'district-po'>('general');
  const [tentativeMonth, setTentativeMonth] = useState('Otoño 2025 / Primavera 2026');

  // Interaction feedback
  const [copiedRichText, setCopiedRichText] = useState(false);
  const [copiedPlainText, setCopiedPlainText] = useState(false);
  const [copiedSubject, setCopiedSubject] = useState(false);

  // Email subject generator
  const getSubject = () => {
    switch (emailAngle) {
      case 'standards':
        return `🎭 Don Quijote en USA: Función Teatral 100% en Español para ${schoolName} (Estándares ACTFL y AP)`;
      case 'heritage':
        return `🌟 Don Quijote en USA en ${schoolName}: Celebración Cultural e Inmersión en Español`;
      case 'district-po':
        return `📋 Propuesta Teatral para ${schoolName}: Don Quijote en USA (Reserva con Código RSVP - $0 Anticipo)`;
      case 'general':
      default:
        return `⚔️ Gira Nacional 2025–2026: Lleva "Don Quijote en USA" a los estudiantes de ${schoolName}`;
    }
  };

  // Plain text generator for fallback & mailto
  const getPlainText = () => {
    const subject = getSubject();
    return `Estimado/a ${teacherName || 'Profesor/a'},

Es un honor saludarle desde la oficina de producción de "Don Quijote en USA: A Live Theatrical Performance & Educational Experience".

Nos dirigimos a usted con mucho entusiasmo para presentarle una oportunidad artística y pedagógica única para los estudiantes de español de ${schoolName || 'su institución'}: una adaptación teatral viva, dinámica y moderna de la obra cumbre de Miguel de Cervantes Saavedra, protagonizada por el virtuoso actor colombiano Wilderman García y producida por Teatro for the Soul Inc.

════════════════════════════════════════════════════════
⚔️ ESPECIFICACIONES DE LA PRODUCCIÓN
════════════════════════════════════════════════════════
• Obra: Don Quijote en USA
• Intérprete: Wilderman García (Actor colombiano)
• Duración Total: 60 minutos exactos
  - 45 minutos de función teatral unipersonal de alto impacto visual y comedia gestual
  - 15 minutos de "Tertulia Académica" interactiva (preguntas y respuestas en vivo con el actor)
• Idioma: 100% en Español (adaptado con teatro físico para que sea plenamente accesible tanto para niveles iniciales como para cursos avanzados y estudiantes nativos/hispanohablantes)
• Ajuste de Horario: Se adapta perfectamente al bloque de campana regular de 60 a 90 minutos de su escuela o asamblea.
• Espacio Requerido: Auditorio, cafetería (cafetorium), gimnasio o sala multiusos. Montaje técnico autosuficiente en 30 minutos.

════════════════════════════════════════════════════════
🎯 ALINEACIÓN CURRICULAR Y PEDAGÓGICA
════════════════════════════════════════════════════════
1. Estándares ACTFL (5 Cs): Comunicación interpretativa e interpersonal, culturas, conexiones, comparaciones y comunidades.
2. Temas de AP Spanish Literature and Culture: La dualidad del ser, la creación literaria, el héroe y antihéroe cervantino.
3. Celebración Cultural: Refuerza la identidad, orgullo hispano y el aprendizaje vivencial de la lengua española.
4. Material Didáctico: Entregamos una Guía para Docentes con vocabulario, biografías y actividades previas y posteriores a la obra.

════════════════════════════════════════════════════════
🎟️ CÓMO RESERVAR LA FECHA SIN COSTO INICIAL ($0.00)
════════════════════════════════════════════════════════
Entendemos que los distritos escolares y academias gestionan sus pagos mediante Órdenes de Compra (Purchase Orders / PO) o facturas institucionales. 

Por esta razón, puede asegurar y apartar la fecha tentativa de su escuela en el calendario oficial sin pago de tarjeta de crédito por adelantado:
1. Abra el portal oficial de Zeffy: ${zeffyUrl}
2. Seleccione la fecha de su preferencia para ${tentativeMonth}.
3. Ingrese el código promocional escolar: RSVP
4. El costo inicial quedará registrado en $0.00 y nos pondremos en contacto con su departamento para tramitar la documentación W-9 y orden de compra oficial.

════════════════════════════════════════════════════════
🏛️ DATOS DE LA ENTIDAD PRODUCTORA
════════════════════════════════════════════════════════
• Entidad Legal: Teatro for the Soul Inc
• Employer Identification Number (EIN): 81-4825762
• Correo Electrónico Oficial: ${officialEmail}
• Sitio Web Oficial: https://www.donquijoteenusa.com

Quedamos a su entera disposición para coordinar detalles y responder a cualquier consulta sobre la llegada de la gira a ${schoolName}.

Con sincero aprecio y admiración por su labor docente,

Equipo de Gira y Educación
Teatro for the Soul Inc
Email: ${officialEmail}
Web: www.donquijoteenusa.com`;
  };

  // Full Rich HTML generator styled with the website's Spanish medieval colorful palette
  const getRichHtml = () => {
    return `<div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #FCF9F2; border: 2px solid #D97706; border-radius: 12px; overflow: hidden; color: #1C1917; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
  
  <!-- Ribbon Superior Multicolor -->
  <div style="height: 6px; background: linear-gradient(90deg, #9E1B32 0%, #EA580C 18%, #F59E0B 36%, #10B981 54%, #2563EB 72%, #7C3AED 90%, #9E1B32 100%);"></div>

  <!-- Cabecera Medieval Colorida -->
  <div style="background: linear-gradient(135deg, #730E20 0%, #9E1B32 50%, #B91C1C 100%); padding: 32px 28px; text-align: center; color: #FFFFFF; border-bottom: 3px solid #D97706;">
    <div style="display: inline-block; background-color: rgba(255,255,255,0.15); border: 1px solid rgba(253, 230, 138, 0.5); padding: 4px 14px; border-radius: 20px; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; color: #FDE68A; margin-bottom: 12px;">
      ⚔️ Gira Teatral Escolar y Universitaria 2025–2026 ⚔️
    </div>
    <h1 style="margin: 0; font-size: 26px; font-weight: 800; font-family: Georgia, serif; letter-spacing: 0.5px; color: #FFFFFF; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
      Don Quijote en USA
    </h1>
    <p style="margin: 6px 0 0 0; font-size: 15px; font-style: italic; color: #FDE68A; font-family: Georgia, serif;">
      A Live Theatrical Performance &amp; Educational Experience
    </p>
    <div style="margin-top: 14px; font-size: 12px; color: #FFFFFF; opacity: 0.95;">
      Protagonizada por el actor colombiano <strong>Wilderman García</strong> · Producida por <strong>Teatro for the Soul Inc</strong>
    </div>
  </div>

  <!-- Contenido Principal -->
  <div style="padding: 28px 24px;">
    
    <!-- Saludo -->
    <p style="font-size: 16px; line-height: 1.6; margin-top: 0; color: #1C1917;">
      Estimado/a <strong>${teacherName || 'Profesor/a'}</strong>,
    </p>

    <p style="font-size: 14px; line-height: 1.6; color: #334155;">
      Es un gran honor ponernos en contacto con usted desde la dirección artística de <strong>Don Quijote en USA</strong>. Nos encantaría coordinar la llegada de esta aclamada experiencia teatral en vivo para los estudiantes y la facultad de español de <strong>${schoolName || 'su institución'}</strong>.
    </p>

    <!-- Caja de Resumen / Sinopsis -->
    <div style="background: linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%); border-left: 5px solid #9E1B32; border-right: 1px solid #FCD34D; border-top: 1px solid #FCD34D; border-bottom: 1px solid #FCD34D; padding: 16px 18px; border-radius: 8px; margin: 20px 0;">
      <p style="margin: 0; font-size: 14px; font-style: italic; font-family: Georgia, serif; line-height: 1.6; color: #78350F;">
        &ldquo;Una adaptación moderna, vibrante e interactiva de la obra maestra de Miguel de Cervantes Saavedra. El espectáculo revitaliza la literatura hispana a través del teatro físico, comedia gestual y poesía, elevando la comprensión auditiva y el orgullo cultural de los estudiantes.&rdquo;
      </p>
    </div>

    <!-- 4 Tarjetas de Especificaciones en Tonos Joya -->
    <div style="margin: 24px 0;">
      <h3 style="font-size: 15px; text-transform: uppercase; letter-spacing: 1px; color: #730E20; font-family: Georgia, serif; border-bottom: 1px solid #E5DEC9; padding-bottom: 6px; margin-bottom: 14px;">
        🏛️ Aspectos Clave de la Puesta en Escena
      </h3>

      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: separate; border-spacing: 0 10px;">
        <!-- Fila 1: Duración -->
        <tr>
          <td style="width: 50%; vertical-align: top; padding-right: 6px;">
            <div style="background-color: #EFF6FF; border: 1.5px solid #93C5FD; border-radius: 8px; padding: 12px;">
              <div style="font-size: 11px; font-weight: bold; color: #1E40AF; text-transform: uppercase;">⏱️ Duración Exacta</div>
              <div style="font-size: 14px; font-weight: bold; color: #1E3A8A; margin-top: 2px;">60 Minutos Total</div>
              <div style="font-size: 11px; color: #3B82F6; margin-top: 2px;">45 min obra + 15 min tertulia académica con el actor</div>
            </div>
          </td>
          <td style="width: 50%; vertical-align: top; padding-left: 6px;">
            <div style="background-color: #ECFDF5; border: 1.5px solid #6EE7B7; border-radius: 8px; padding: 12px;">
              <div style="font-size: 11px; font-weight: bold; color: #065F46; text-transform: uppercase;">🇪🇸 Inmersión Lingüística</div>
              <div style="font-size: 14px; font-weight: bold; color: #047857; margin-top: 2px;">100% en Español</div>
              <div style="font-size: 11px; color: #059669; margin-top: 2px;">Accesible desde nivel 1 hasta cursos avanzados y AP</div>
            </div>
          </td>
        </tr>
        <!-- Fila 2: Logística y Formato -->
        <tr>
          <td style="width: 50%; vertical-align: top; padding-right: 6px;">
            <div style="background-color: #FEF3C7; border: 1.5px solid #FCD34D; border-radius: 8px; padding: 12px;">
              <div style="font-size: 11px; font-weight: bold; color: #92400E; text-transform: uppercase;">🎭 Montaje Llave en Mano</div>
              <div style="font-size: 14px; font-weight: bold; color: #78350F; margin-top: 2px;">Auditorio o Gimnasio</div>
              <div style="font-size: 11px; color: #B45309; margin-top: 2px;">Solo requiere luz general y 1 micrófono. Montaje en 30 min.</div>
            </div>
          </td>
          <td style="width: 50%; vertical-align: top; padding-left: 6px;">
            <div style="background-color: #FDF4FF; border: 1.5px solid #F0ABFC; border-radius: 8px; padding: 12px;">
              <div style="font-size: 11px; font-weight: bold; color: #86198F; text-transform: uppercase;">📚 Estándares Nacionales</div>
              <div style="font-size: 14px; font-weight: bold; color: #701A75; margin-top: 2px;">ACTFL &amp; AP Literature</div>
              <div style="font-size: 11px; color: #A21CAF; margin-top: 2px;">Incluye dossier pedagógico y guía para el aula</div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <!-- Caja de Reserva $0.00 con Zeffy -->
    <div style="background: linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%); border: 2px dashed #059669; border-radius: 10px; padding: 20px; text-align: center; margin: 24px 0;">
      <span style="background-color: #059669; color: #FFFFFF; font-size: 10px; font-weight: bold; padding: 3px 10px; border-radius: 12px; text-transform: uppercase; letter-spacing: 1px;">
        Procedimiento Administrativo para Distritos
      </span>
      <h4 style="margin: 8px 0 4px 0; color: #064E3B; font-size: 17px; font-family: Georgia, serif;">
        Reserva de Fecha sin Anticipo ($0.00) con Código Promocional: <u>RSVP</u>
      </h4>
      <p style="margin: 0 0 14px 0; font-size: 13px; color: #047857; line-height: 1.5;">
        Sabemos que los colegios gestionan sus pagos mediante Órdenes de Compra (PO) o facturas a 30 días. En la plataforma Zeffy, aplique el código <strong>RSVP</strong> en el checkout para asegurar la fecha de su escuela con $0 de pago inicial.
      </p>
      
      <!-- Botón CTA -->
      <a href="${zeffyUrl}" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #9E1B32 0%, #B91C1C 100%); color: #FFFFFF; text-decoration: none; font-weight: bold; font-size: 13px; padding: 12px 24px; border-radius: 6px; box-shadow: 0 4px 10px rgba(158,27,50,0.3); border: 1px solid #730E20;">
        🎟️ Abrir Calendario de Gira en Zeffy (Código: RSVP) &rarr;
      </a>
    </div>

    <!-- Cierre y Firma -->
    <p style="font-size: 13px; line-height: 1.6; color: #475569;">
      ¿Desea que le reservemos una fecha preliminar o prefiere que le enviemos el paquete informativo y la forma W-9 para su oficina de compras? Quedamos a su total disposición.
    </p>

    <div style="margin-top: 24px; padding-top: 18px; border-top: 2px solid #E5DEC9;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="vertical-align: middle;">
            <div style="font-family: Georgia, serif; font-size: 16px; font-weight: bold; color: #730E20;">
              Teatro for the Soul Inc
            </div>
            <div style="font-size: 12px; color: #64748B; margin-top: 2px;">
              Entidad Educativa Sin Fines de Lucro · <strong>EIN: 81-4825762</strong>
            </div>
            <div style="font-size: 12px; color: #1E293B; margin-top: 4px;">
              Correo Oficial: <a href="mailto:${officialEmail}" style="color: #9E1B32; font-weight: bold; text-decoration: none;">${officialEmail}</a>
            </div>
            <div style="font-size: 12px; color: #1E293B;">
              Portal Oficial: <a href="https://www.donquijoteenusa.com" style="color: #2563EB; font-weight: bold; text-decoration: none;">www.donquijoteenusa.com</a>
            </div>
          </td>
        </tr>
      </table>
    </div>

  </div>

  <!-- Pie de Correo -->
  <div style="background-color: #1A1412; padding: 14px 20px; text-align: center; color: #94A3B8; font-size: 11px;">
    Gira Teatral Don Quijote en USA · Celebrando la Lengua Española y la Literatura de Cervantes
  </div>
</div>`;
  };

  // 1-Click Copy Rich Text formatted for Gmail Compose
  const handleCopyRichText = async () => {
    try {
      const html = getRichHtml();
      const text = getPlainText();
      
      if (navigator.clipboard && window.ClipboardItem) {
        const htmlBlob = new Blob([html], { type: 'text/html' });
        const textBlob = new Blob([text], { type: 'text/plain' });
        const data = [new ClipboardItem({ 'text/html': htmlBlob, 'text/plain': textBlob })];
        await navigator.clipboard.write(data);
      } else {
        await navigator.clipboard.writeText(text);
      }

      setCopiedRichText(true);
      setTimeout(() => setCopiedRichText(false), 2500);
    } catch (err) {
      // Fallback
      await navigator.clipboard.writeText(getPlainText());
      setCopiedRichText(true);
      setTimeout(() => setCopiedRichText(false), 2500);
    }
  };

  // 1-Click Copy Plain Text
  const handleCopyPlainText = async () => {
    await navigator.clipboard.writeText(getPlainText());
    setCopiedPlainText(true);
    setTimeout(() => setCopiedPlainText(false), 2200);
  };

  // 1-Click Copy Subject
  const handleCopySubject = async () => {
    await navigator.clipboard.writeText(getSubject());
    setCopiedSubject(true);
    setTimeout(() => setCopiedSubject(false), 2200);
  };

  // Open Directly in Gmail Compose
  const handleOpenGmail = () => {
    const to = encodeURIComponent(teacherEmail.trim());
    const su = encodeURIComponent(getSubject());
    const body = encodeURIComponent(getPlainText());
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  // Open with standard mailto client (Apple Mail, Outlook, etc)
  const handleOpenMailto = () => {
    const to = encodeURIComponent(teacherEmail.trim());
    const su = encodeURIComponent(getSubject());
    const body = encodeURIComponent(getPlainText());
    window.location.href = `mailto:${to}?subject=${su}&body=${body}`;
  };

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#FCF9F2] min-h-screen relative overflow-hidden">
      
      {/* Background Medieval Vignettes */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.16] mix-blend-multiply"
        style={{
          backgroundImage: `url(${quijoteOverviewBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F2] via-transparent to-[#FCF9F2] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9E1B32] bg-rose-100 px-3.5 py-1 rounded-full border border-rose-300 shadow-2xs mb-3">
            <Send className="w-3.5 h-3.5 text-[#9E1B32]" />
            <span>Herramienta de Outreach y Convocatoria a Profesores</span>
          </div>
          
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Generador de Email Escolar para Docentes
          </h1>
          
          <p className="font-garamond text-lg sm:text-xl text-stone-700 mt-2.5 italic">
            Coloque el correo de un profesor o escuela para generar al instante un correo visualmente cautivador y listo para enviar vía Gmail o su cliente favorito.
          </p>
        </div>

        {/* 2-Column Layout: Controls & Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* LEFT COLUMN: Input Configuration (5 cols) */}
          <div className="lg:col-span-5 space-y-5 bg-white/95 backdrop-blur-md p-6 sm:p-7 border-2 border-amber-300 rounded-2xl shadow-xl ring-2 ring-amber-300/40">
            
            <div className="border-b border-amber-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E1B32] font-bold block">
                  Paso 1 · Datos del Destinatario
                </span>
                <h3 className="font-cinzel text-lg font-bold text-stone-900">
                  Configurar Propuesta
                </h3>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-900 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#9E1B32]" />
                  <span>Correo Electrónico del Profesor/a:</span>
                </span>
                <span className="text-[10px] text-rose-600 font-mono">*Requerido</span>
              </label>
              <input
                type="email"
                placeholder="ejemplo: profesor.espanol@distrito.edu"
                value={teacherEmail}
                onChange={(e) => setTeacherEmail(e.target.value)}
                className="w-full text-xs font-mono p-3 bg-stone-50 border-2 border-amber-200 rounded-xl focus:border-[#9E1B32] focus:bg-white focus:outline-none transition-all shadow-2xs"
              />
            </div>

            {/* Teacher Name & School Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-900">
                  Nombre o Saludo:
                </label>
                <input
                  type="text"
                  placeholder="ej. Prof. Martínez"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-stone-50 border border-amber-200 rounded-lg focus:border-[#9E1B32] focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-900">
                  Escuela o Distrito:
                </label>
                <input
                  type="text"
                  placeholder="ej. Lincoln High School"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-stone-50 border border-amber-200 rounded-lg focus:border-[#9E1B32] focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Email Angle / Template Selection */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-bold text-stone-900 block">
                Enfoque Temático del Mensaje:
              </label>
              <select
                value={emailAngle}
                onChange={(e) => setEmailAngle(e.target.value as any)}
                className="w-full text-xs p-2.5 bg-white border-2 border-amber-300 rounded-lg font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs cursor-pointer"
              >
                <option value="general">Invitación General a la Gira 2025–2026 (Obra + Tertulia)</option>
                <option value="standards">Enfoque Académico (Estándares ACTFL y AP Literature)</option>
                <option value="heritage">Celebración Cultural y Mes de la Herencia Hispana</option>
                <option value="district-po">Aprobación Rápida: Reserva con $0 Anticipo (Código RSVP)</option>
              </select>
            </div>

            {/* Tentative Season */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-900 block">
                Temporada / Mes Sugerido:
              </label>
              <input
                type="text"
                placeholder="ej. Octubre 2025, Primavera 2026"
                value={tentativeMonth}
                onChange={(e) => setTentativeMonth(e.target.value)}
                className="w-full text-xs p-2.5 bg-stone-50 border border-amber-200 rounded-lg focus:border-[#9E1B32] focus:bg-white focus:outline-none transition-all"
              />
            </div>

            {/* Quick Fill Preset Buttons for fast demo */}
            <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 space-y-2 text-[11px]">
              <span className="font-bold text-amber-950 block">💡 Ejemplos Rápidos de Relleno:</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setTeacherEmail('m.garcia@austinisd.org');
                    setTeacherName('Prof. García');
                    setSchoolName('Austin High School');
                    setEmailAngle('standards');
                  }}
                  className="bg-white hover:bg-amber-100 text-stone-800 px-2 py-1 rounded border border-amber-300 font-medium cursor-pointer"
                >
                  High School AP
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTeacherEmail('departamento.espanol@university.edu');
                    setTeacherName('Dra. Morales');
                    setSchoolName('World Languages Dept');
                    setEmailAngle('general');
                  }}
                  className="bg-white hover:bg-amber-100 text-stone-800 px-2 py-1 rounded border border-amber-300 font-medium cursor-pointer"
                >
                  Universidad
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setTeacherEmail('principal.office@k12schools.org');
                    setTeacherName('Principal Rodriguez');
                    setSchoolName('Bilingual Middle Academy');
                    setEmailAngle('district-po');
                  }}
                  className="bg-white hover:bg-amber-100 text-stone-800 px-2 py-1 rounded border border-amber-300 font-medium cursor-pointer"
                >
                  Distrito / PO
                </button>
              </div>
            </div>

            {/* Quick Summary Pill of Sender Info */}
            <div className="pt-2 border-t border-amber-200 text-[11px] text-stone-600 space-y-1">
              <div className="flex items-center justify-between">
                <span>Entidad Emisora:</span>
                <strong className="text-stone-900 font-serif">Teatro for the Soul Inc</strong>
              </div>
              <div className="flex items-center justify-between font-mono">
                <span>EIN Institucional:</span>
                <strong className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-300">81-4825762</strong>
              </div>
              <div className="flex items-center justify-between font-mono">
                <span>Email Oficial:</span>
                <strong className="text-[#9E1B32]">{officialEmail}</strong>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Live Preview & Direct Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Action Bar with Colorful Direct Buttons */}
            <div className="bg-white/95 backdrop-blur-md p-4 border-2 border-amber-300 rounded-2xl shadow-md flex flex-wrap items-center justify-between gap-2.5">
              
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></span>
                <span className="text-xs font-bold text-stone-900">
                  Acciones Rápidas para Gmail:
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* Direct Open in Gmail Button */}
                <button
                  type="button"
                  onClick={handleOpenGmail}
                  className="btn-primary-wine text-xs py-2 px-3.5 flex items-center gap-1.5 font-bold shadow-md cursor-pointer"
                  title="Abre una nueva ventana de redacción en Gmail con destinatario y texto cargado"
                >
                  <Send className="w-3.5 h-3.5 text-amber-300" />
                  <span>Abrir en Gmail</span>
                  <ExternalLink className="w-3 h-3 opacity-90" />
                </button>

                {/* Copy Formatted Rich Text (Paste into Gmail for full colors!) */}
                <button
                  type="button"
                  onClick={handleCopyRichText}
                  className="btn-gold-accent text-xs py-2 px-3 flex items-center gap-1.5 font-bold shadow-md cursor-pointer"
                  title="Copia el correo con todo su formato de colores, tablas y botones para pegar (Ctrl+V) en Gmail"
                >
                  {copiedRichText ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="text-emerald-950">¡Copiado con Colores!</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-amber-900" />
                      <span>Copiar con Formato a Color</span>
                    </>
                  )}
                </button>

                {/* Copy Plain Text */}
                <button
                  type="button"
                  onClick={handleCopyPlainText}
                  className="btn-outline-refined text-xs py-2 px-3 flex items-center gap-1.5 font-bold bg-white cursor-pointer"
                  title="Copia como texto plano"
                >
                  {copiedPlainText ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>¡Texto Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Texto</span>
                    </>
                  )}
                </button>
              </div>

            </div>

            {/* Subject Preview Row with 1-click Copy */}
            <div className="bg-stone-100/90 p-3 rounded-xl border border-stone-300 flex items-center justify-between gap-3 text-xs">
              <div className="truncate flex-1">
                <span className="font-bold text-stone-500 uppercase text-[10px] block font-mono">
                  Asunto del Correo:
                </span>
                <span className="font-semibold text-stone-900 truncate block">
                  {getSubject()}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopySubject}
                className="text-[11px] font-bold text-[#9E1B32] hover:underline shrink-0 bg-white px-2 py-1 rounded border border-stone-200 cursor-pointer"
              >
                {copiedSubject ? '¡Asunto Copiado!' : 'Copiar Asunto'}
              </button>
            </div>

            {/* Visual Gmail Message Simulation Frame */}
            <div className="border-2 border-stone-300 rounded-2xl overflow-hidden shadow-2xl bg-white">
              
              {/* Fake Email Header Bar */}
              <div className="bg-stone-800 px-4 py-2.5 text-white flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="text-stone-300 text-[11px] ml-1">Vista Previa del Correo para Docentes</span>
                </div>
                <div className="flex items-center gap-2 text-stone-400 text-[11px]">
                  <span>Para: <strong className="text-amber-300">{teacherEmail || 'profesor@escuela.edu'}</strong></span>
                </div>
              </div>

              {/* Rendered Live Visual Email Display matching getRichHtml */}
              <div className="p-4 sm:p-6 bg-[#FCF9F2] max-h-[620px] overflow-y-auto">
                <div 
                  className="prose prose-sm max-w-none text-stone-900"
                  dangerouslySetInnerHTML={{ __html: getRichHtml() }}
                />
              </div>

            </div>

            {/* Helpful Instruction Tip for Educators */}
            <div className="p-4 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 border border-blue-200 rounded-xl text-xs text-blue-950 flex items-start gap-3 shadow-2xs">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-blue-900 mb-0.5">¿Cómo enviar este correo colorido en Gmail?</strong>
                <span>
                  Haga clic en <strong>&ldquo;Copiar con Formato a Color&rdquo;</strong>, luego abra Gmail, cree un nuevo mensaje y presione <strong>Pegar (Ctrl+V o Cmd+V)</strong> en el cuerpo del correo. ¡Aparecerá idéntico con todos los fondos, cintas, tablas y botones interactivos! O use el botón <strong>&ldquo;Abrir en Gmail&rdquo;</strong> para redactar instantáneamente.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
