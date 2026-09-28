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
  Ticket, 
  ShieldCheck, 
  AlertCircle,
  Calendar,
  CheckCircle2,
  FileText
} from 'lucide-react';
import quijoteOverviewBg from '../assets/images/quijote_overview_minimalist_bg_1790503674706.jpg';
import quijoteMedievalItems from '../assets/images/quijote_medieval_items_1790532291437.jpg';

export default function TeacherEmailGeneratorPage() {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const officialEmail = "teatroforthesoul@gmail.com";

  // Form State
  const [teacherEmail, setTeacherEmail] = useState('');
  const [teacherName, setTeacherName] = useState('Profesor/a');
  const [schoolName, setSchoolName] = useState('su institución escolar');
  const [emailAngle, setEmailAngle] = useState<'standards' | 'general' | 'district-po' | 'heritage'>('standards');
  const [tentativeMonth, setTentativeMonth] = useState('Enero 2027 (o Primavera 2027)');
  const [antiSpamMode, setAntiSpamMode] = useState(true);

  // Interaction feedback
  const [copiedRichText, setCopiedRichText] = useState(false);
  const [copiedPlainText, setCopiedPlainText] = useState(false);
  const [copiedSubject, setCopiedSubject] = useState(false);

  // Deliverability-optimized email subjects (clean, professional, passes .edu and .k12 spam filters)
  const getSubject = () => {
    if (antiSpamMode) {
      switch (emailAngle) {
        case 'standards':
          return `Propuesta Teatral y Pedagogica: Don Quijote en USA para ${schoolName} (Estandares ACTFL y AP)`;
        case 'heritage':
          return `Inmersion Cultural y Literaria: Don Quijote en USA para el alumnado de ${schoolName}`;
        case 'district-po':
          return `Propuesta de Funcion Teatral Escolar: Don Quijote en USA en ${schoolName} - Temporada 2026-2027`;
        case 'general':
        default:
          return `Gira Nacional 2026-2027: Don Quijote en USA para los cursos de Espanol en ${schoolName}`;
      }
    }

    // Informal subjects
    switch (emailAngle) {
      case 'standards':
        return `Don Quijote en USA: Función Teatral en Español para ${schoolName} (Estándares ACTFL y AP)`;
      case 'heritage':
        return `Don Quijote en USA en ${schoolName}: Celebración Cultural e Inmersión en Español`;
      case 'district-po':
        return `Propuesta Teatral para ${schoolName}: Don Quijote en USA (Reserva con Código RSVP)`;
      case 'general':
      default:
        return `Gira Teatral 2026-2027: Don Quijote en USA para los estudiantes de ${schoolName}`;
    }
  };

  // Plain text generator - clean, zero spam trigger words, passes junk filters
  const getPlainText = () => {
    return `Estimado/a ${teacherName || 'Profesor/a'},

Es un gusto saludarle desde la oficina de produccion de "Don Quijote en USA: A Live Theatrical Performance & Educational Experience".

Nos dirigimos a usted para presentarle una propuesta cultural y pedagogica para los estudiantes del Departamento de Espanol de ${schoolName || 'su institucion'}: una adaptacion teatral unipersonal de la obra cumbre de Miguel de Cervantes, interpretada por el actor profesional Wilderman Garcia y producida por Teatro for the Soul Inc.

==================================================
DATOS GENERALES DE LA PRODUCCION (TEMPORADA 2026-2027)
==================================================
- Obra: Don Quijote en USA
- Interprete: Wilderman Garcia (Actor profesional)
- Duracion Total: 60 minutos
  * 45 minutos de obra teatral de alto dinamismo gestual
  * 15 minutos de Tertulia Academica interactiva (preguntas y respuestas en espanol con el actor)
- Idioma: 100% en espanol (con apoyo gestual y contextual accesible desde niveles basicos hasta AP Spanish)
- Encaje en Horario: Se ajusta a un periodo regular o bloque de asamblea matutino (60 minutos)
- Espacio Requerido: Auditorio escolar, gimnasio o cafetorium (sistema autonomo, montaje en 30 minutos)
- Calendario: Presentaciones para la temporada 2026-2027 (a partir de ${tentativeMonth || 'Enero 2027'})

==================================================
ENLACES E IMAGENES DE LA PRODUCCION EN VIVO
==================================================
- Cartel Oficial de la Obra: https://postimg.cc/XrF9vqpV
- 1. Don Quijote en Vivo (Wilderman Garcia): https://postimg.cc/QDvh8ygJ
- 2. La Obra en el Escenario (Auditorio Escolar): https://postimg.cc/0vhPkBGn
- 3. En la Trasescena (Preparacion de Camerino): https://postimg.cc/TRRvS86G
- 4. Con los Estudiantes (Charla y Preguntas): https://postimg.cc/NtZBsz81
- Galeria Fotografica Completa en Alta Resolucion: https://postimg.cc/gallery/yK2s1bhT

==================================================
ALINEACION CURRICULAR Y PEDAGOGICA
==================================================
1. Estandares ACTFL (5 Cs): Comunicacion interpretativa e interpersonal, culturas, conexiones, comparaciones y comunidades.
2. Ejes de AP Spanish Literature and Culture: La dualidad del ser, la creacion literaria, el heroe cervantino y la justicia.
3. Material Didactico: Entregamos dossier previo y posterior para trabajar en el aula.

==================================================
RESERVA Y TRAMITACION INSTITUCIONAL (SIN PAGO ADELANTADO)
==================================================
Para facilitar el proceso administrativo a traves de Ordenes de Compra (Purchase Orders / PO) o fondos de distrito:
1. Ingrese al portal oficial de Zeffy: ${zeffyUrl}
2. Seleccione su fecha tentativa para ${tentativeMonth || 'Enero 2027'}.
3. Aplique el codigo institucional: RSVP
4. El balance inicial quedara registrado en $0.00 y coordinaremos los documentos W-9 y facturacion oficial con su distrito escolar.

==================================================
DATOS DE LA ENTIDAD PRODUCTORA
==================================================
- Entidad: Teatro for the Soul Inc (Organizacion 501(c)(3))
- Employer Identification Number (EIN): 81-4825762
- Correo Oficial: ${officialEmail}
- Portal Oficial: https://www.donquijoteenusa.com

Quedamos a su disposicion para responder a cualquier pregunta o coordinar detalles para su departamento.

Atentamente,

Direccion de Produccion y Gira Educativa
Teatro for the Soul Inc
EIN: 81-4825762
Email: ${officialEmail}
Sitio Web: https://www.donquijoteenusa.com`;
  };

  // High deliverability styled HTML template with real embedded images
  const getRichHtml = () => {
    return `<div style="font-family: Arial, Helvetica, sans-serif; max-width: 640px; margin: 0 auto; background-color: #FCF9F2; border: 2px solid #D97706; border-radius: 12px; overflow: hidden; color: #1C1917; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
  
  <!-- Cabecera Institucional -->
  <div style="background: linear-gradient(135deg, #1E3A8A 0%, #172554 45%, #9E1B32 100%); padding: 26px 22px; text-align: center; color: #FFFFFF; border-bottom: 3px solid #D97706;">
    <div style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1.5px; color: #FDE68A; margin-bottom: 6px;">
      Gira Escolar y Universitaria 2026–2027 · Temporada Oficial
    </div>
    <h1 style="margin: 0; font-size: 26px; font-weight: bold; font-family: Georgia, serif; color: #FFFFFF;">
      Don Quijote en USA
    </h1>
    <p style="margin: 4px 0 0 0; font-size: 14px; font-style: italic; color: #E2E8F0; font-family: Georgia, serif;">
      Una Experiencia Teatral y Pedagógica en Vivo (60 Minutos)
    </p>
    <div style="margin-top: 10px; font-size: 12px; color: #CBD5E1;">
      Starring Wilderman García · Producción de Teatro for the Soul Inc · <strong>EIN: 81-4825762</strong>
    </div>
  </div>

  <!-- Flyer / Banner Promocional Oficial -->
  <div style="text-align: center; background-color: #0F172A; padding: 12px 16px; border-bottom: 2px solid #D97706;">
    <a href="https://postimg.cc/XrF9vqpV" target="_blank" style="text-decoration: none; display: inline-block;">
      <img 
        src="https://i.postimg.cc/YtMP21y8/IMG-0941.jpg" 
        alt="Don Quijote en USA - Cartel Oficial de Gira" 
        style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #F59E0B; display: block; margin: 0 auto; max-height: 320px;"
      />
      <div style="color: #FDE68A; font-size: 11px; margin-top: 6px; font-weight: bold;">
        🔍 Haga clic para ver el Cartel Oficial en Alta Resolución &rarr;
      </div>
    </a>
  </div>

  <!-- Contenido del Correo -->
  <div style="padding: 24px 22px;">
    
    <p style="font-size: 15px; line-height: 1.5; margin-top: 0; color: #1C1917;">
      Estimado/a <strong>${teacherName || 'Profesor/a'}</strong>,
    </p>

    <p style="font-size: 14px; line-height: 1.6; color: #334155;">
      Le enviamos un cordial saludo desde el equipo de producción de <strong>Don Quijote en USA</strong>. Nos ponemos en contacto con el propósito de coordinar la llegada de esta experiencia teatral unipersonal para los cursos de español de <strong>${schoolName || 'su institución'}</strong> durante la temporada <strong>2026–2027</strong> (presentaciones a partir de <strong>${tentativeMonth}</strong>).
    </p>

    <!-- Resumen Pedagógico -->
    <div style="background-color: #FEF3C7; border-left: 4px solid #9E1B32; padding: 14px 16px; border-radius: 6px; margin: 18px 0;">
      <p style="margin: 0; font-size: 13.5px; font-style: italic; font-family: Georgia, serif; line-height: 1.55; color: #78350F;">
        &ldquo;Una propuesta viva, dinámica y participativa que recontextualiza el clásico de Cervantes para conectar con los jóvenes de hoy, elevando la comprensión oral, el pensamiento crítico y el aprecio por la herencia hispana.&rdquo;
      </p>
    </div>

    <!-- MUESTRA FOTOGRÁFICA EN VIVO (4 FOTOS EMBEBIDAS) -->
    <div style="margin: 24px 0; background-color: #FFFFFF; border: 1px solid #FDE68A; border-radius: 8px; padding: 16px;">
      <div style="font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #9E1B32; margin-bottom: 12px; text-align: center;">
        📷 Registro Fotográfico de la Obra en Escena
      </div>

      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: separate; border-spacing: 6px 0;">
        <tr>
          <!-- Foto 1: Solo -->
          <td style="width: 25%; vertical-align: top; text-align: center;">
            <a href="https://postimg.cc/QDvh8ygJ" target="_blank" style="text-decoration: none; color: inherit;">
              <img 
                src="https://i.postimg.cc/QDvh8ygJ/IMG-0943.jpg" 
                alt="Wilderman García como Don Quijote" 
                style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; border: 1px solid #D97706; display: block;"
              />
              <div style="font-size: 10.5px; font-weight: bold; color: #1E3A8A; margin-top: 5px;">El Personaje</div>
              <div style="font-size: 9.5px; color: #64748B; margin-top: 2px;">Wilderman García</div>
            </a>
          </td>

          <!-- Foto 2: Escenario -->
          <td style="width: 25%; vertical-align: top; text-align: center;">
            <a href="https://postimg.cc/0vhPkBGn" target="_blank" style="text-decoration: none; color: inherit;">
              <img 
                src="https://i.postimg.cc/0vhPkBGn/IMG-0945.jpg" 
                alt="Función en el auditorio escolar" 
                style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; border: 1px solid #D97706; display: block;"
              />
              <div style="font-size: 10.5px; font-weight: bold; color: #1E3A8A; margin-top: 5px;">En Escena</div>
              <div style="font-size: 9.5px; color: #64748B; margin-top: 2px;">Auditorio Escolar</div>
            </a>
          </td>

          <!-- Foto 3: Trasescena -->
          <td style="width: 25%; vertical-align: top; text-align: center;">
            <a href="https://postimg.cc/TRRvS86G" target="_blank" style="text-decoration: none; color: inherit;">
              <img 
                src="https://i.postimg.cc/TRRvS86G/IMG-1826.jpg" 
                alt="En la trasescena y camerino" 
                style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; border: 1px solid #D97706; display: block;"
              />
              <div style="font-size: 10.5px; font-weight: bold; color: #1E3A8A; margin-top: 5px;">Trasescena</div>
              <div style="font-size: 9.5px; color: #64748B; margin-top: 2px;">Preparación</div>
            </a>
          </td>

          <!-- Foto 4: Estudiantes -->
          <td style="width: 25%; vertical-align: top; text-align: center;">
            <a href="https://postimg.cc/NtZBsz81" target="_blank" style="text-decoration: none; color: inherit;">
              <img 
                src="https://i.postimg.cc/NtZBsz81/IMG-0950.jpg" 
                alt="Charla y fotos con estudiantes" 
                style="width: 100%; height: 110px; object-fit: cover; border-radius: 6px; border: 1px solid #D97706; display: block;"
              />
              <div style="font-size: 10.5px; font-weight: bold; color: #1E3A8A; margin-top: 5px;">Con Alumnos</div>
              <div style="font-size: 9.5px; color: #64748B; margin-top: 2px;">Charla Escolar</div>
            </a>
          </td>
        </tr>
      </table>

      <div style="text-align: center; margin-top: 10px;">
        <a href="https://postimg.cc/gallery/yK2s1bhT" target="_blank" style="font-size: 11px; color: #1E3A8A; font-weight: bold; text-decoration: underline;">
          Ver Galería Fotográfica Completa en Alta Definición &rarr;
        </a>
      </div>
    </div>

    <!-- Tabla de Especificaciones Clave -->
    <div style="margin: 20px 0;">
      <div style="font-size: 13px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px; color: #1E3A8A; border-bottom: 1.5px solid #E2E8F0; padding-bottom: 5px; margin-bottom: 12px;">
        Datos Esenciales de la Función
      </div>

      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: separate; border-spacing: 0 8px;">
        <tr>
          <td style="width: 50%; vertical-align: top; padding-right: 6px;">
            <div style="background-color: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 6px; padding: 10px;">
              <div style="font-size: 11px; font-weight: bold; color: #1E40AF; text-transform: uppercase;">⏱️ Duración Exacta</div>
              <div style="font-size: 13.5px; font-weight: bold; color: #1E3A8A; margin-top: 2px;">60 Minutos Total</div>
              <div style="font-size: 11px; color: #3B82F6; margin-top: 2px;">45 min obra + 15 min tertulia con el actor</div>
            </div>
          </td>
          <td style="width: 50%; vertical-align: top; padding-left: 6px;">
            <div style="background-color: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 6px; padding: 10px;">
              <div style="font-size: 11px; font-weight: bold; color: #065F46; text-transform: uppercase;">🇪🇸 Inmersión Lingüística</div>
              <div style="font-size: 13.5px; font-weight: bold; color: #047857; margin-top: 2px;">100% en Español</div>
              <div style="font-size: 11px; color: #059669; margin-top: 2px;">Comprensible para K–12 y niveles universitarios</div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="width: 50%; vertical-align: top; padding-right: 6px;">
            <div style="background-color: #FFFBEB; border: 1px solid #FDE68A; border-radius: 6px; padding: 10px;">
              <div style="font-size: 11px; font-weight: bold; color: #92400E; text-transform: uppercase;">🏛️ Espacio &amp; Montaje</div>
              <div style="font-size: 13.5px; font-weight: bold; color: #78350F; margin-top: 2px;">Auditorio o Gimnasio</div>
              <div style="font-size: 11px; color: #B45309; margin-top: 2px;">Autónomo, listo en 30 minutos</div>
            </div>
          </td>
          <td style="width: 50%; vertical-align: top; padding-left: 6px;">
            <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 6px; padding: 10px;">
              <div style="font-size: 11px; font-weight: bold; color: #334155; text-transform: uppercase;">📚 Currículo Oficial</div>
              <div style="font-size: 13.5px; font-weight: bold; color: #1E293B; margin-top: 2px;">ACTFL &amp; AP Spanish</div>
              <div style="font-size: 11px; color: #64748B; margin-top: 2px;">Guía pedagógica incluida para docentes</div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <!-- Procedimiento para Órdenes de Compra y Código RSVP -->
    <div style="background-color: #F0FDF4; border: 1.5px solid #86EFAC; border-radius: 8px; padding: 16px; margin: 18px 0; text-align: center;">
      <div style="font-size: 11px; font-weight: bold; color: #166534; text-transform: uppercase; letter-spacing: 0.5px;">
        Trámite Administrativo para Escuelas y Distritos
      </div>
      <div style="font-size: 15px; font-weight: bold; color: #14532D; margin: 4px 0;">
        Reserva Preliminar sin Pago Inicial ($0.00) con Código: <u>RSVP</u>
      </div>
      <p style="margin: 4px 0 12px 0; font-size: 12.5px; color: #15803D; line-height: 1.45;">
        Puede asegurar la fecha tentativa en el calendario oficial de Zeffy. Al ingresar el código <strong>RSVP</strong> en el formulario, el sistema reserva la fecha para <strong>${tentativeMonth}</strong> sin requerir tarjeta de crédito, permitiendo el trámite con Purchase Order (PO).
      </p>
      <a href="${zeffyUrl}" target="_blank" style="display: inline-block; background-color: #9E1B32; color: #FFFFFF; text-decoration: none; font-weight: bold; font-size: 13px; padding: 11px 22px; border-radius: 6px; box-shadow: 0 2px 8px rgba(158,27,50,0.3);">
        Ver Fechas en Zeffy (Código: RSVP) &rarr;
      </a>
    </div>

    <!-- Cierre y Firma Institucional -->
    <p style="font-size: 13px; line-height: 1.5; color: #475569;">
      Con mucho gusto podemos enviarle el paquete con la forma W-9 y cotización formal para el departamento de compras de su distrito.
    </p>

    <div style="margin-top: 20px; padding-top: 14px; border-top: 1.5px solid #E2E8F0;">
      <div style="font-family: Georgia, serif; font-size: 15px; font-weight: bold; color: #1E3A8A;">
        Teatro for the Soul Inc
      </div>
      <div style="font-size: 12px; color: #64748B; margin-top: 2px;">
        Entidad Educativa y Teatral · 501(c)(3) · <strong>EIN: 81-4825762</strong>
      </div>
      <div style="font-size: 12px; color: #334155; margin-top: 3px;">
        Correo Oficial: <a href="mailto:${officialEmail}" style="color: #9E1B32; font-weight: bold; text-decoration: none;">${officialEmail}</a>
      </div>
      <div style="font-size: 12px; color: #334155;">
        Portal Oficial: <a href="https://www.donquijoteenusa.com" style="color: #1E3A8A; font-weight: bold; text-decoration: none;">www.donquijoteenusa.com</a>
      </div>
    </div>

  </div>

  <div style="background-color: #0F172A; padding: 12px 18px; text-align: center; color: #94A3B8; font-size: 11px;">
    Don Quijote en USA · Gira Nacional 2026–2027 · Funciones a partir de Enero 2027
  </div>
</div>`;
  };

  // 1-Click Copy Rich Text for Gmail
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

  return (
    <div className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#FCF9F2] min-h-screen relative overflow-hidden">
      
      {/* Background Medieval Vignettes */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.14] mix-blend-multiply"
        style={{
          backgroundImage: `url(${quijoteOverviewBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F2] via-transparent to-[#FCF9F2] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header - USA Colors & Medieval Tone */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1E3A8A] bg-blue-100 px-3.5 py-1 rounded-full border border-blue-300 shadow-2xs mb-3">
            <Send className="w-3.5 h-3.5 text-[#1E3A8A]" />
            <span>Herramienta Oficial de Difusión para Docentes</span>
          </div>
          
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-[#1E3A8A]">Generador de Email </span>
            <span className="text-[#B91C1C]">para Escuelas</span>
          </h1>
          
          <p className="font-garamond text-lg sm:text-xl text-stone-700 mt-2.5 italic">
            Estamos en el <strong>2026</strong>: genere correos de contacto optimizados para <strong>reservas a partir de Enero 2027</strong>, calibrados con filtros anti-spam para distritos escolares.
          </p>
        </div>

        {/* Anti-Junk Mail / Deliverability Protocol Banner */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border-2 border-emerald-400 p-4 sm:p-5 rounded-2xl shadow-xs mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider font-mono">
                  Garantía Anti-Spam / Anti-Junk Mail para Dominios .edu y .k12
                </span>
                <span className="bg-emerald-200 text-emerald-900 text-[10px] px-2 py-0.5 rounded-full font-bold">
                  Activo
                </span>
              </div>
              <p className="text-xs text-stone-700 mt-0.5 leading-relaxed">
                Asunto formal, encabezados limpios sin caracteres trampa, enlaces oficiales HTTPS y número EIN (81-4825762) para superar los filtros de correo institucional.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
            <label className="text-xs font-bold text-stone-800 flex items-center gap-1.5 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={antiSpamMode} 
                onChange={(e) => setAntiSpamMode(e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded border-stone-300 focus:ring-emerald-500" 
              />
              <span>Modo Máxima Entregabilidad</span>
            </label>
          </div>
        </div>

        {/* 2-Column Layout: Controls & Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* LEFT COLUMN: Input Configuration (5 cols) */}
          <div className="lg:col-span-5 space-y-5 bg-white/95 backdrop-blur-md p-6 sm:p-7 border-2 border-amber-300 rounded-2xl shadow-lg ring-1 ring-amber-300/40">
            
            <div className="border-b border-amber-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E1B32] font-bold block">
                  Paso 1 · Personalización
                </span>
                <h3 className="font-cinzel text-lg font-bold text-stone-900">
                  Datos del Destinatario
                </h3>
              </div>
              <img 
                src={quijoteMedievalItems} 
                alt="Medieval Icon" 
                className="w-8 h-8 rounded-lg object-cover border border-amber-400" 
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-900 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#1E3A8A]" />
                  <span>Correo Institucional del Docente:</span>
                </span>
                <span className="text-[10px] text-rose-600 font-mono">*Requerido</span>
              </label>
              <input
                type="email"
                placeholder="ejemplo: profesor.espanol@distrito.edu"
                value={teacherEmail}
                onChange={(e) => setTeacherEmail(e.target.value)}
                className="w-full text-xs font-mono p-3 bg-stone-50 border-2 border-amber-200 rounded-xl focus:border-[#1E3A8A] focus:bg-white focus:outline-none transition-all shadow-2xs"
              />
            </div>

            {/* Teacher Name & School Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-900">
                  Nombre / Saludo:
                </label>
                <input
                  type="text"
                  placeholder="ej. Prof. Ramírez"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-stone-50 border border-amber-200 rounded-lg focus:border-[#1E3A8A] focus:bg-white focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-900">
                  Escuela o Distrito:
                </label>
                <input
                  type="text"
                  placeholder="ej. Oak High School"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full text-xs p-2.5 bg-stone-50 border border-amber-200 rounded-lg focus:border-[#1E3A8A] focus:bg-white focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Email Angle / Template Selection */}
            <div className="space-y-1.5 pt-1">
              <label className="text-xs font-bold text-stone-900 block">
                Enfoque del Mensaje:
              </label>
              <select
                value={emailAngle}
                onChange={(e) => setEmailAngle(e.target.value as any)}
                className="w-full text-xs p-2.5 bg-white border-2 border-amber-300 rounded-lg font-medium text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs cursor-pointer"
              >
                <option value="standards">Enfoque Curricular (Estándares ACTFL y AP Spanish)</option>
                <option value="general">Invitación General a la Gira 2026–2027 (Obra + Tertulia)</option>
                <option value="heritage">Inmersión Cultural y Mes de la Herencia Hispana</option>
                <option value="district-po">Aprobación Rápida con Purchase Order ($0 Código RSVP)</option>
              </select>
            </div>

            {/* Tentative Season (Year 2026/2027 explicit) */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-stone-900 flex items-center justify-between">
                <span>Fecha Tentativa (Reservas desde 2027):</span>
                <span className="text-[10px] text-emerald-800 font-mono font-bold">Temporada 2026–2027</span>
              </label>
              <input
                type="text"
                value={tentativeMonth}
                onChange={(e) => setTentativeMonth(e.target.value)}
                className="w-full text-xs p-2.5 bg-stone-50 border border-amber-200 rounded-lg focus:border-[#1E3A8A] focus:bg-white focus:outline-none transition-all"
              />
            </div>

            {/* Sender Identification Badges */}
            <div className="pt-2 border-t border-amber-200 text-[11px] text-stone-600 space-y-1.5">
              <div className="flex items-center justify-between">
                <span>Entidad Emisora:</span>
                <strong className="text-stone-900 font-serif">Teatro for the Soul Inc</strong>
              </div>
              <div className="flex items-center justify-between font-mono">
                <span>EIN Institucional:</span>
                <strong className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-300">81-4825762</strong>
              </div>
              <div className="flex items-center justify-between font-mono">
                <span>Año en Curso / Gira:</span>
                <strong className="text-[#1E3A8A]">Año 2026 / Gira 2026–2027</strong>
              </div>
            </div>

            {/* 3 Quick Deliverability Tips */}
            <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1.5 text-[11px] text-blue-950">
              <div className="font-bold flex items-center gap-1 text-[#1E3A8A]">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>Consejos para evitar la carpeta de Spam / Junk:</span>
              </div>
              <ul className="space-y-1 pl-4 list-disc text-stone-700 text-[10.5px]">
                <li>Envíe desde su correo institucional (@escuela.edu o @distrito.org).</li>
                <li>No altere el asunto con mayúsculas sostenidas ni palabras como "GRATIS".</li>
                <li>El código RSVP permite reservar la fecha con $0 sin pagos con tarjeta.</li>
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN: Actions & Live Preview (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Quick Actions Bar */}
            <div className="bg-white/95 backdrop-blur-md p-4 border-2 border-amber-300 rounded-2xl shadow-md flex flex-wrap items-center justify-between gap-2.5">
              
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-stone-900">
                  Enviar a Docentes:
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyRichText}
                  className="btn-gold-accent text-xs py-2 px-3.5 flex items-center gap-1.5 font-bold shadow-xs cursor-pointer ring-2 ring-amber-400"
                  title="Copia con formato e imágenes para pegar directamente en Gmail"
                >
                  {copiedRichText ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="text-emerald-950">¡Copiado con Imágenes!</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5 text-amber-900" />
                      <span>Copiar para Gmail (con Imágenes)</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleOpenGmail}
                  className="btn-primary-wine text-xs py-2 px-3.5 flex items-center gap-1.5 font-bold shadow-xs cursor-pointer"
                  title="Abre Gmail para redactar"
                >
                  <Send className="w-3.5 h-3.5 text-amber-300" />
                  <span>Abrir Gmail</span>
                  <ExternalLink className="w-3 h-3 opacity-90" />
                </button>

                <button
                  type="button"
                  onClick={handleCopyPlainText}
                  className="btn-outline-refined text-xs py-2 px-3 flex items-center gap-1.5 font-bold bg-white cursor-pointer"
                  title="Copia texto plano"
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
                  Asunto Limpio (Anti-Junk):
                </span>
                <span className="font-semibold text-stone-900 truncate block">
                  {getSubject()}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopySubject}
                className="text-[11px] font-bold text-[#1E3A8A] hover:underline shrink-0 bg-white px-2.5 py-1 rounded border border-stone-300 cursor-pointer"
              >
                {copiedSubject ? '¡Asunto Copiado!' : 'Copiar Asunto'}
              </button>
            </div>

            {/* Rendered Live Visual Email Display */}
            <div className="border-2 border-stone-300 rounded-2xl overflow-hidden shadow-xl bg-white">
              
              {/* Header Bar */}
              <div className="bg-[#172554] px-4 py-2.5 text-white flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="text-stone-300 text-[11px] ml-1">Vista Previa del Correo</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300 text-[11px]">
                  <span>Para: <strong className="text-amber-300">{teacherEmail || 'profesor@distrito.edu'}</strong></span>
                </div>
              </div>

              {/* Email Content Frame */}
              <div className="p-4 sm:p-6 bg-[#FCF9F2] max-h-[580px] overflow-y-auto">
                <div 
                  className="prose prose-sm max-w-none text-stone-900"
                  dangerouslySetInnerHTML={{ __html: getRichHtml() }}
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
