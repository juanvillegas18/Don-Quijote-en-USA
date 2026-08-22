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
    title: 'Función Media',
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
    title: 'Experiencia Teatral Completa',
    subtitle: 'Gran función para todo el público',
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
  subtitle: 'Unipersonal de Teatro Educativo y Experiencia Académica en Español',
  genre: 'Monólogo Teatral / Comedia Educativa',
  author: 'Gabriel Villegas',
  actor: 'Wilderman García',
  producer: 'Teatro for the Soul',
  duration: '60 minutos de obra (+ taller a elegir)',
  language: '100% Español (fácil de entender con apoyo visual y contexto)',
  classification: 'Apto para todos los niveles: Elemental (K-5), Intermedia (6-8), Superior (9-12) y Universidad',
  stageRequirements: 'Totalmente adaptable a cualquier espacio de la escuela',
  domain: 'donquijoteusa.com'
};

export const SYNOPSIS_TEXT = {
  quote: '« Sabe, Sancho amigo, que yo nací por querer del cielo en esta nuestra edad de hierro para resucitar en ella la dorada... »',
  excerptP1: 'Entre las cenizas de su biblioteca quemada, un triste Don Quijote encuentra el único libro que se salvó del fuego: la segunda parte de «La Galatea». Con el libro en sus manos, una fuerza misteriosa abre un portal en el tiempo y lo transporta desde La Mancha hasta el presente.',
  excerptP2: 'Don Quijote despierta en pleno siglo XXI en los Estados Unidos. Sorprendido pero valiente, descubre un nuevo mundo lleno de rascacielos gigantes, autopistas veloces y pantallas digitales que no dejan de brillar.',
  excerptP3: 'Convencido de que su amada Dulcinea del Toboso está encantada y oculta en suelo estadounidense, Don Quijote inicia una nueva aventura. Junto al recuerdo de su fiel Sancho Panza y su caballo Rocinante, invita a los estudiantes a ayudarle a romper el hechizo, recordando a todos que la nobleza, la justicia y la magia de soñar siguen vivas.'
};
