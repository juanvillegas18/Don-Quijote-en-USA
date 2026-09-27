/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TheaterFormat, PostShowWorkshop, AcademicPillar } from '../types';

export const THEATER_FORMATS: TheaterFormat[] = [
  {
    id: 'intimo',
    title: 'Formato Íntimo',
    subtitle: 'Encuentro cercano para grupos pequeños',
    capacity: 'Hasta 20 participantes',
    recommendedSpace: 'Salón de clases, biblioteca o espacio pequeño',
    description: 'Una experiencia cercana donde el aula se convierte en el cuarto de Don Quijote. Ideal para grupos pequeños y clases avanzadas de español.',
    features: [
      'No necesita escenario ni equipo especial',
      'Interacción directa y constante con el actor',
      'Montaje rápido y sin complicaciones',
      'Ideal para preguntas, debate y conversación fluida'
    ],
    icon: 'BookOpen',
    badge: 'Máxima Interacción',
    recommendedFor: 'Elemental, Intermedia, Superior (AP Spanish) y grupos reducidos'
  },
  {
    id: 'medio',
    title: 'Formato Mediano',
    subtitle: 'Para grupos medianos y espacios flexibles',
    capacity: 'De 21 a 75 personas',
    recommendedSpace: 'Anfiteatro, salón de conferencias o biblioteca',
    description: 'El balance ideal entre obra de teatro y cercanía educativa. Incluye sonido claro e iluminación ligera para que todos disfruten cómodamente.',
    features: [
      'Montaje listo en 30 minutos',
      'Sonido amplificado para que todos escuchen perfecto',
      'Buena visibilidad desde cualquier asiento',
      'Participación activa de los estudiantes'
    ],
    icon: 'Users',
    badge: 'Opción más popular',
    recommendedFor: 'Grados completos (Elemental a Superior), departamentos de idiomas y universidades'
  },
  {
    id: 'completo',
    title: 'Formato Grande',
    subtitle: 'Para grupos grandes y espacios amplios',
    capacity: 'Más de 75 personas',
    recommendedSpace: 'Auditorio escolar o teatro tradicional',
    description: 'La versión teatral completa con luces, música y ambientación. Diseñada para funciones grandes con muchos estudiantes y maestros.',
    features: [
      'Luces y efectos de sonido teatrales',
      'Ambiente completo de viaje en el tiempo',
      'Para toda la escuela o varias escuelas invitadas',
      'Una experiencia emocionante y memorable'
    ],
    icon: 'Sparkles',
    badge: 'Gran Escenario',
    recommendedFor: 'Toda la comunidad escolar: Elemental, Intermedia, Superior y Universitaria'
  }
];

export const AUTHOR_BIO = {
  name: 'Prof. Juan Gabriel Villegas',
  role: 'Dramaturgo, Educador & Director Creativo',
  degrees: [
    'Doctorado en Educación (Fase Final) — University of Central Florida (UCF)',
    'Maestría en Artes en Español — University of Central Florida (UCF)',
    'Bachillerato en Administración de Empresas — Universidad de Puerto Rico (UPR)'
  ],
  academicExperience: [
    'Profesor de Español en Valencia College',
    'Profesor en Ana G. Méndez University',
    'Especialista en pedagogía de la lengua y capacitación laboral'
  ],
  organizations: [
    'Fundador y Director Creativo de Teatro for the Soul',
    'Fundador del Conservatorio de Artes Escénicas de Orlando',
    'Fundador de la Academia de Cine y Teatro de Puerto Rico'
  ],
  theatricalWorks: [
    'Don Quijote en USA (y Don Quijote versus Bad Bunny)',
    'Me casé por papeles',
    'El rey del café',
    'Adaptación de El médico a palos'
  ],
  fullBio: `El Prof. Juan Gabriel Villegas es un educador, dramaturgo y gestor cultural puertorriqueño radicado en la Florida Central, cuya trayectoria destaca por integrar la pedagogía de la lengua, la capacitación laboral de empleados y las artes escénicas. Posee una formación académica compuesta por un bachillerato en Administración de Empresas por la Universidad de Puerto Rico (UPR), una Maestría en Artes de la Universidad de Central Florida (UCF) —de cuyo programa de español es egresado— y se encuentra en la fase final de su Doctorado en Educación en la misma institución. Su experiencia en el ámbito académico incluye su labor docente como profesor de español en instituciones de educación superior como Valencia College y Ana G. Méndez University.

Como emprendedor enfocado en el desarrollo artístico y humano, es el fundador y director creativo de la compañía Teatro for the Soul, así como el fundador del Conservatorio de Artes Escénicas de Orlando y de la Academia de Cine y Teatro de Puerto Rico. A través de estas organizaciones, promueve la formación integral de actores y profesionales, aplicando el teatro como una herramienta pedagógica para el aprendizaje del idioma, el fortalecimiento de la salud mental y la preservación de la identidad hispana en la diáspora. Asimismo, aplica metodologías de diseño instruccional y desarrollo pedagógico en entornos organizacionales y corporativos para la formación de personal.

Su propuesta dramatúrgica tiene un marcado enfoque educativo y divulgativo enfocado en la recontextualización de los clásicos literarios para conectar con estudiantes y audiencias modernas. Es autor de piezas teatrales como Don Quijote en USA (y su propuesta previa Don Quijote versus Bad Bunny), Me casé por papeles, El rey del café y su adaptación de El médico a palos. Su trabajo investigativo y creativo aborda el teatro como espacio de capacitación laboral, desarrollo de competencias sociolingüísticas y revitalización cultural de la comunidad hispana en Estados Unidos.`
};

export const ACTOR_BIO = {
  name: 'Wilderman García',
  role: 'Actor Protagónico (Don Quijote)',
  description: 'Actor profesional de destacada trayectoria en teatro clásico y contemporáneo. Encarna a un Don Quijote enérgico, carismático y profundamente humano, con un dominio escénico que cautiva a audiencias escolares de todas las edades a través de la improvisación y la interacción en vivo.'
};

export const POST_SHOW_WORKSHOPS: PostShowWorkshop[] = [
  {
    id: 'tertulia',
    title: 'Conversatorio Tipo Tertulia',
    duration: '30 minutos',
    instructor: 'Wilderman García (Actor) y Gabriel Villegas',
    description: 'Una charla relajada y en confianza entre los alumnos y el actor. Un espacio abierto para hacer preguntas sobre la obra, la actuación y los temas de Don Quijote hoy.',
    keyOutcomes: [
      'Conversación 100% en español sobre tema libre',
      'Conectar un clásico de la literatura con la vida diaria',
      'Hablar sobre los retos y "molinos de viento" de los jóvenes hoy',
      'Preguntas y respuestas directas con el actor'
    ],
    icon: 'MessageSquare',
    badge: 'Dinámica Ágil'
  },
  {
    id: 'masterclass',
    title: 'Clase Magistral de Actuación',
    duration: '1 hora',
    instructor: 'Wilderman García (Actor)',
    description: 'Una clase práctica donde los estudiantes aprenden ejercicios de voz, expresión corporal y actuación guiados por el actor principal.',
    keyOutcomes: [
      'Ejercicios prácticos de voz y pronunciación en español',
      'Técnicas sencillas de expresión y actuación en escena',
      'Cómo dar vida a un personaje clásico de forma moderna',
      'Práctica de lectura y actuación de fragmentos breves'
    ],
    icon: 'Award',
    badge: 'Taller Práctico'
  },
  {
    id: 'inmersivo',
    title: 'Programa de Capacitación Inmersivo',
    duration: '2 horas',
    instructor: 'Gabriel Villegas (Autor) y Wilderman García',
    description: 'Taller completo y participativo donde los estudiantes escriben, adaptan y actúan sus propias escenas cortas inspiradas en Don Quijote.',
    keyOutcomes: [
      'Taller guiado de escritura creativa en español',
      'Creación y presentación de escenas por los alumnos',
      'Certificado de participación para cada estudiante',
      'Guía didáctica y actividades para el maestro'
    ],
    icon: 'GraduationCap',
    badge: 'Taller Completo'
  }
];

export const ACADEMIC_PILLARS: AcademicPillar[] = [
  {
    id: 'teatro-educativo',
    number: 'I',
    title: 'Teatro Educativo',
    verbs: ['Demostrar', 'Aprender', 'Participar'],
    focus: 'Práctica viva del español',
    description: 'Demostrar la adquisición del idioma a través de la interacción directa en escena, perdiendo el miedo a hablar en público con el juego teatral.',
    curriculumBenefit: 'Ayuda a los estudiantes a hablar con más confianza y entender mejor el español hablado.',
    iconName: 'Theater'
  },
  {
    id: 'lectoescritura',
    number: 'II',
    title: 'Lectoescritura',
    verbs: ['Analizar', 'Interpretar', 'Comprender'],
    focus: 'Estructura del texto y lectura',
    description: 'Analizar la estructura del texto dramático e interpretar pasajes clave que unen la lectura con la actuación en vivo.',
    curriculumBenefit: 'Apoya el análisis de textos para clases de literatura y exámenes avanzados de español.',
    iconName: 'PenTool'
  },
  {
    id: 'apreciacion-literaria',
    number: 'III',
    title: 'Apreciación Literaria',
    verbs: ['Identificar', 'Comparar', 'Reflexionar'],
    focus: 'Valores clásicos en el mundo actual',
    description: 'Identificar los temas centrales del clásico cervantino y comparar sus valores universales —como la justicia y los sueños— con el contexto actual.',
    curriculumBenefit: 'Desarrolla el pensamiento crítico y la capacidad de comparar épocas e ideas.',
    iconName: 'Scroll'
  },
  {
    id: 'apreciacion-cultural',
    number: 'IV',
    title: 'Apreciación Cultural y Lingüística',
    verbs: ['Reconocer', 'Evaluar', 'Celebrar'],
    focus: 'Impacto de la Herencia Hispana',
    description: 'Reconocer las distintas formas de hablar español y evaluar el impacto positivo de la Herencia Hispana en los Estados Unidos.',
    curriculumBenefit: 'Celebra la riqueza cultural y el orgullo de hablar español en la escuela y la comunidad.',
    iconName: 'Globe2'
  }
];

export const TECHNICAL_DATA = {
  title: 'Don Quijote en USA',
  subtitle: 'Comedia Teatral Unipersonal & Experiencia Inmersiva en Español',
  genre: 'Comedia Teatral Unipersonal / Interacción en Vivo',
  author: 'Gabriel Villegas',
  actor: 'Wilderman García',
  producer: 'Teatro for the Soul',
  duration: '60 minutos de función (+ taller interactivo a elección)',
  language: '100% Español (ágil, dinámico y con alto apoyo contextual)',
  classification: 'Apto para todos los niveles: K-5, Middle School, High School y Universidad',
  stageRequirements: 'Sistema 100% autónomo y autoportante (auditorio, gimnasio, teatro o salón múltiple)',
  domain: 'donquijoteusa.com'
};

export const GOVERNMENT_CREDENTIALS = {
  federal: {
    system: 'SAM.gov (Gobierno Federal de EE. UU.)',
    uei: 'FJV5QQ2QM9M8',
    cage: '1Z2Q0',
    status: 'Activo / Registrado'
  },
  puertoRico: {
    system: 'Gobierno de Puerto Rico (RUP)',
    rupNumber: '202561897',
    status: 'Proveedor de Servicios Profesionales Registrado'
  },
  complianceNotes: 'Aceptamos Órdenes de Compra (Purchase Orders / PO), fondos Title I, Title II, Title III, Title IV, SIG, ESSER y subvenciones culturales de distritos escolares y universidades.'
};

export interface FundingSource {
  id: string;
  code: string;
  name: string;
  target: string;
  description: string;
  highlightTag: string;
}

export const ELIGIBLE_FUNDING_SOURCES: FundingSource[] = [
  {
    id: 'title-i',
    code: 'Título I, Parte A',
    name: 'Intervención y Nivelación en Lectoescritura',
    target: 'Competencia lingüística & lectoescritura en español',
    description: 'Para programas de intervención académica estructurada que fortalecen la competencia lingüística y lectoescritura en Español.',
    highlightTag: 'Prioridad de Lectura'
  },
  {
    id: 'title-ii',
    code: 'Título II, Parte A',
    name: 'Desarrollo Profesional & Modelos Pedagógicos',
    target: 'Capacitación docente e innovación curricular',
    description: 'Como apoyo al desarrollo profesional docente (indirecto) al proveer modelos instruccionales y herramientas pedagógicas basadas en evidencia.',
    highlightTag: 'Desarrollo Docente'
  },
  {
    id: 'title-iii',
    code: 'Título III, Parte A',
    name: 'Adquisición del Lenguaje para Multilingües',
    target: 'Estudiantes bilingües / ELLs / Dual Language',
    description: 'Para el desarrollo de lenguaje académico avanzado en español en estudiantes multilingües.',
    highlightTag: 'Dual Language / ELL'
  },
  {
    id: 'title-iv',
    code: 'Título IV, Parte A',
    name: 'Enriquecimiento Académico Integral y Artes',
    target: 'Educación integral, artes escénicas y pensamiento crítico',
    description: 'Para promover el enriquecimiento educativo y el desarrollo integral del estudiante a través de experiencias artísticas y pensamiento crítico.',
    highlightTag: 'Artes & Pensamiento Crítico'
  },
  {
    id: 'sig',
    code: 'Fondos SIG',
    name: 'Mejoramiento Escolar (School Improvement)',
    target: 'Escuelas en plan de transformación y refuerzo',
    description: 'Integrado como estrategia de apoyo en escuelas que requieran fortalecer resultados en lectura y escritura.',
    highlightTag: 'Transformación Escolar'
  },
  {
    id: 'esser',
    code: 'Fondos ESSER',
    name: 'Recuperación y Aceleración Académica',
    target: 'Superación de rezagos en comprensión lectora',
    description: 'Para atender directamente rezagos en comprensión lectora mediante práctica guiada e inmersiva.',
    highlightTag: 'Aceleración Académica'
  }
];

export const SYNOPSIS_TEXT = {
  quote: '«El que lee mucho y anda mucho, ve mucho y sabe mucho.»',
  academicSummary: '«Don Quijote en USA» es una comedia teatral unipersonal e inmersiva de 60 minutos creada para la comunidad escolar y universitaria. Tras rescatar el manuscrito inédito de «La Galatea, 2ª Parte», Don Quijote es transportado a los Estados Unidos del siglo XXI. Al encontrarse en un entorno contemporáneo, el caballero rompe la cuarta pared e integra a los estudiantes como co-protagonistas de su travesía, conectando el clásico cervantino con la reflexión lingüística, el pensamiento crítico y el orgullo por el idioma español.',
  curriculumFocus: 'Diseñada con alto apoyo contextual y dinamismo cómico, la obra permite a estudiantes de todos los niveles de dominio (desde principiantes hasta AP Spanish y universitarios) comprender el texto, disfrutar el lenguaje clásico adaptado y reflexionar sobre la palabra, la justicia y los valores humanos.',
  highlights: [
    'Función unipersonal de 60 minutos 100% en español con alta interacción.',
    'Dramaturgia pedagógica original de Gabriel Villegas y actuación de Wilderman García.',
    'Alineada a estándares ACTFL, Literatura AP Spanish y desarrollo del lenguaje Dual Language.',
    'Material didáctico previo y posterior incluido para el trabajo docente en el aula.'
  ]
};
