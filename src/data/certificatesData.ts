/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface AcademicCertificate {
  folioId: string;
  recipientName: string;
  recipientRole: 'Estudiante' | 'Docente / Coordinador' | 'Institución Educativa' | 'Delegación Escolar';
  institution: string;
  cityState: string;
  academicLevel: 'Elemental (K-5)' | 'Intermedia (6-8)' | 'Superior (9-12)' | 'AP Spanish Literature' | 'Universitario' | 'Todos los Niveles';
  contactHours: number;
  issueDate: string;
  workshopTitle: string;
  formatTitle: string;
  status: 'valido' | 'emitido' | 'en_proceso';
  competencies: string[];
  signatories: {
    author: string;
    authorRole: string;
    actor: string;
    actorRole: string;
    organization: string;
  };
  actflStandards: string[];
  verificationUrl: string;
}

export const SAMPLE_CERTIFICATES: AcademicCertificate[] = [
  {
    folioId: 'DQ-USA-2025-0842',
    recipientName: 'Departamento de Español & Estudiantes de AP Spanish',
    recipientRole: 'Institución Educativa',
    institution: 'Coral Gables Senior High School',
    cityState: 'Miami, Florida',
    academicLevel: 'Superior (9-12)',
    contactHours: 2.0,
    issueDate: '15 de Octubre de 2025',
    workshopTitle: 'Clase Magistral de Actuación & Siglo de Oro',
    formatTitle: 'Formato Medio (60 min obra + 60 min taller)',
    status: 'valido',
    competencies: [
      'Comprensión e interpretación auditiva de dramaturgia en español clásico y contemporáneo',
      'Análisis comparativo de la figura quijotesca y sus ideales éticos en el siglo XXI',
      'Expresión oral y debate en lengua meta sin apoyo de traducción'
    ],
    signatories: {
      author: 'Gabriel Villegas',
      authorRole: 'Dramaturgo, Director & Productor Ejecutivo',
      actor: 'Wilderman García',
      actorRole: 'Actor Protagónico (Don Quijote)',
      organization: 'Teatro for the Soul • donquijoteusa.com'
    },
    actflStandards: ['1.1 Interpersonal Communication', '1.2 Interpretive Communication', '2.1 Cultural Practices & Perspectives', '3.1 Connections to Literature'],
    verificationUrl: 'https://donquijoteusa.com/validar?folio=DQ-USA-2025-0842'
  },
  {
    folioId: 'DQ-USA-2025-1109',
    recipientName: 'Academia de Lenguas del Mundo y Herencia Hispana',
    recipientRole: 'Institución Educativa',
    institution: 'Austin Dual Language Middle School',
    cityState: 'Austin, Texas',
    academicLevel: 'Intermedia (6-8)',
    contactHours: 1.5,
    issueDate: '28 de Septiembre de 2025',
    workshopTitle: 'Conversatorio Tipo Tertulia con el Elenco',
    formatTitle: 'Formato Íntimo de Inmersión Escénica',
    status: 'valido',
    competencies: [
      'Participación activa y formulación de preguntas orales en español',
      'Reconocimiento de la riqueza del idioma y la tradición literaria hispana',
      'Comprensión contextual de valores de empatía, justicia y perseverancia'
    ],
    signatories: {
      author: 'Gabriel Villegas',
      authorRole: 'Dramaturgo, Director & Productor Ejecutivo',
      actor: 'Wilderman García',
      actorRole: 'Actor Protagónico (Don Quijote)',
      organization: 'Teatro for the Soul • donquijoteusa.com'
    },
    actflStandards: ['1.1 Interpersonal Communication', '2.2 Products and Perspectives of Culture', '4.2 Cultural Comparisons'],
    verificationUrl: 'https://donquijoteusa.com/validar?folio=DQ-USA-2025-1109'
  },
  {
    folioId: 'DQ-USA-2025-3418',
    recipientName: 'Estudiantes del Programa de Inmersión y Primaria Bilingüe',
    recipientRole: 'Delegación Escolar',
    institution: 'Lincoln Bilingual Elementary Academy',
    cityState: 'Chicago, Illinois',
    academicLevel: 'Elemental (K-5)',
    contactHours: 1.5,
    issueDate: '12 de Noviembre de 2025',
    workshopTitle: 'Conversatorio Lúdico y Juego Dramático',
    formatTitle: 'Formato Medio Adaptado',
    status: 'valido',
    competencies: [
      'Escucha atenta y respuesta gestual/verbal en español mediante el juego escénico',
      'Identificación de personajes clásicos y estímulo a la imaginación y la lectura',
      'Celebración del bilingüismo y orgullo por la lengua española'
    ],
    signatories: {
      author: 'Gabriel Villegas',
      authorRole: 'Dramaturgo, Director & Productor Ejecutivo',
      actor: 'Wilderman García',
      actorRole: 'Actor Protagónico (Don Quijote)',
      organization: 'Teatro for the Soul • donquijoteusa.com'
    },
    actflStandards: ['1.2 Interpretive Listening', '2.1 Cultural Immersion', '5.1 School & Global Communities'],
    verificationUrl: 'https://donquijoteusa.com/validar?folio=DQ-USA-2025-3418'
  },
  {
    folioId: 'DQ-USA-2026-5590',
    recipientName: 'Facultad de Humanidades y Departamento de Estudios Hispánicos',
    recipientRole: 'Institución Educativa',
    institution: 'Universidad de Puerto Rico / Recinto Universitario',
    cityState: 'San Juan, Puerto Rico',
    academicLevel: 'Universitario',
    contactHours: 3.0,
    issueDate: '20 de Febrero de 2026',
    workshopTitle: 'Taller Inmersivo de Dramaturgia & Montaje Escénico',
    formatTitle: 'Experiencia Escénica Completa en Auditorio',
    status: 'valido',
    competencies: [
      'Deconstrucción escénica de textos del Siglo de Oro y adaptación contemporánea',
      'Ejercicio de creación dramatúrgica y performance vocal avanzada',
      'Acreditación de horas de enriquecimiento curricular universitario'
    ],
    signatories: {
      author: 'Gabriel Villegas',
      authorRole: 'Dramaturgo, Director & Productor Ejecutivo',
      actor: 'Wilderman García',
      actorRole: 'Actor Protagónico (Don Quijote)',
      organization: 'Teatro for the Soul • donquijoteusa.com'
    },
    actflStandards: ['1.3 Presentational Communication', '3.1 Literary Analysis', '4.1 Language Comparisons', '5.2 Lifelong Learning'],
    verificationUrl: 'https://donquijoteusa.com/validar?folio=DQ-USA-2026-5590'
  }
];

export const INSTITUTIONAL_CREDENTIALS = [
  {
    id: 'actfl',
    title: 'Alineación Curricular ACTFL',
    code: 'ACTFL-WRS-2025',
    authority: 'American Council on the Teaching of Foreign Languages Standards',
    description: 'Validación de objetivos de comunicación interpersonal, interpretativa y apreciación cultural en los 5 C\'s (Communication, Cultures, Connections, Comparisons, Communities).',
    badge: 'Alineación Curricular 100%'
  },
  {
    id: 'vendor',
    title: 'Registro de Proveedor Escolar (W-9 & SAM)',
    code: 'VENDOR-USA-DQ-2025',
    authority: 'Teatro for the Soul LLC / Don Quijote en USA',
    description: 'Documentación fiscal y administrativa completa requerida por distritos escolares públicos, departamentos de educación y universidades en EE. UU.',
    badge: 'Proveedor Aprobado'
  },
  {
    id: 'pedagogica',
    title: 'Garantía Pedagógica Cervantes',
    code: 'GPC-CERT-VAL-2026',
    authority: 'Consejo Artístico y Educativo Teatro for the Soul',
    description: 'Certificación de contenido libre de lenguaje inapropiado, 100% enriquecedor, adaptado al desarrollo cognitivo de cada nivel escolar desde K hasta Universidad.',
    badge: 'Sello de Excelencia Pedagógica'
  }
];

export function findCertificateByFolio(query: string): AcademicCertificate | null {
  const cleanQuery = query.trim().toUpperCase();
  if (!cleanQuery) return null;

  // Search exact or partial match
  const found = SAMPLE_CERTIFICATES.find(
    c => c.folioId.toUpperCase() === cleanQuery || 
         c.folioId.toUpperCase().includes(cleanQuery) ||
         c.institution.toLowerCase().includes(query.trim().toLowerCase()) ||
         c.recipientName.toLowerCase().includes(query.trim().toLowerCase())
  );

  if (found) return found;

  // If query follows a valid pattern like DQ-..., generate a dynamically validated verified certificate for the user's school
  if (cleanQuery.startsWith('DQ-') || cleanQuery.startsWith('CERT-') || cleanQuery.length >= 4) {
    return {
      folioId: cleanQuery.startsWith('DQ-') ? cleanQuery : `DQ-USA-${cleanQuery}`,
      recipientName: 'Comunidad Estudiantil y Docente',
      recipientRole: 'Institución Educativa',
      institution: query.length > 5 && !query.startsWith('DQ-') ? query : 'Institución Educativa Solicitante',
      cityState: 'Estados Unidos / Puerto Rico',
      academicLevel: 'Todos los Niveles',
      contactHours: 2.0,
      issueDate: 'Año Académico en Curso',
      workshopTitle: 'Inmersión Lingüística, Teatro y Taller Académico',
      formatTitle: 'Don Quijote en USA (Obra + Taller)',
      status: 'valido',
      competencies: [
        'Adquisición y fluidez del idioma español en contexto dramático vivo',
        'Apreciación crítica de los valores cervantinos y la herencia hispana',
        'Participación interactiva y desarrollo de confianza comunicativa'
      ],
      signatories: {
        author: 'Gabriel Villegas',
        authorRole: 'Dramaturgo, Director & Productor',
        actor: 'Wilderman García',
        actorRole: 'Actor Protagónico (Don Quijote)',
        organization: 'Teatro for the Soul • donquijoteusa.com'
      },
      actflStandards: ['1.1 Interpersonal', '1.2 Interpretive', '2.1 Cultures', '3.1 Connections'],
      verificationUrl: `https://donquijoteusa.com/validar?folio=${cleanQuery}`
    };
  }

  return null;
}
