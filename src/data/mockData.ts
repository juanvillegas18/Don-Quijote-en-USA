/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TheaterFormat, PostShowWorkshop, AcademicPillar } from '../types';

export const THEATER_FORMATS: TheaterFormat[] = [
  {
    id: 'intimo',
    title: 'Formato Íntimo',
    subtitle: 'Encuentro Cercano de Aventura Dramática',
    capacity: 'Hasta 20 participantes',
    recommendedSpace: 'Salón de clases regular, biblioteca o sala de lectura',
    description: 'Montaje acústico y minimalista que transforma un aula convencional en el aposento de Don Quijote. Ideal para grupos reducidos de AP Spanish o cursos avanzados.',
    features: [
      'Sin necesidad de tramoya ni tarima elevada',
      'Interacción directa y contacto visual constante con los estudiantes',
      'Materiales escenográficos transportables y de bajo impacto acústico',
      'Perfecto para debates filológicos y dinámicas cercanas'
    ],
    icon: 'BookOpen',
    badge: 'Máxima Interacción',
    recommendedFor: 'Cursos de AP Spanish Literature, Clubes de Español, Grupos de Honor'
  },
  {
    id: 'medio',
    title: 'Función Media',
    subtitle: 'Montaje Adaptable para Espacios Múltiples',
    capacity: 'De 21 a 75 personas',
    recommendedSpace: 'Anfiteatro escolar, salón de conferencias, biblioteca o sala multiusos',
    description: 'Equilibrio perfecto entre proyección escénica y cercanía pedagógica. Incorpora elementos de iluminación portátil y apoyo sonoro para una audiencia mediana.',
    features: [
      'Montaje escénico versátil en 30 minutos',
      'Audio amplificado para óptima inteligibilidad en salones amplios',
      'Diseño visual pensado para ángulos múltiples de visión',
      'Participación activa del público desde sus asientos'
    ],
    icon: 'Users',
    badge: 'Más Solicitado por Escuelas',
    recommendedFor: 'Grados completos (9º a 12º), Departamentos de Idiomas, Eventos de Herencia Hispana'
  },
  {
    id: 'completo',
    title: 'Experiencia Teatral Completa',
    subtitle: 'Gran Despliegue Escénico y Lumínico',
    capacity: 'Más de 75 personas (Auditorio o Teatro)',
    recommendedSpace: 'Teatro tradicional escolar, auditorio principal o centro de bellas artes',
    description: 'La puesta en escena en su máxima expresión artística. Diseñada para funciones multitudinarias escolares o comunitarias con diseño completo de iluminación, efectos y ambientación épica.',
    features: [
      'Diseño de luces teatrales y atmósfera inmersiva de época',
      'Diseño sonoro envolvente que acompaña el viaje en el tiempo',
      'Capacidad para congregar múltiples escuelas o todo el cuerpo estudiantil',
      'Experiencia memorable de alto impacto visual y emocional'
    ],
    icon: 'Sparkles',
    badge: 'Impacto Multitudinario',
    recommendedFor: 'Toda la matrícula escolar, Asambleas Generales, Festivales de Teatro Educativo'
  }
];

export const POST_SHOW_WORKSHOPS: PostShowWorkshop[] = [
  {
    id: 'tertulia',
    title: 'Conversatorio Tipo Tertulia',
    duration: '30 minutos',
    instructor: 'Wilderman García (Actor) y Gabriel Villegas',
    description: 'Diálogo directo y espontáneo en español entre los estudiantes y el actor fuera de personaje. Espacio abierto para preguntas sobre el proceso actoral, el Siglo de Oro y la vigencia quijotesca.',
    keyOutcomes: [
      'Diálogo 100% en español sobre temas libres de la obra',
      'Desmitificación de la literatura clásica como algo lejano o aburrido',
      'Reflexión sobre los "molinos de viento" modernos que enfrentan los jóvenes',
      'Sesión de preguntas y respuestas con retroalimentación inmediata'
    ],
    icon: 'MessageSquare',
    badge: 'Dinámica Ágil'
  },
  {
    id: 'masterclass',
    title: 'Clase Magistral de Actuación & Siglo de Oro',
    duration: '1 hora académica',
    instructor: 'Wilderman García (Actor Protagónico)',
    description: 'Capacitación temática intensiva centrada en la expresión corporal, la declamación de versos clásicos y cómo el actor construye la psicología de Don Quijote en el contexto del siglo XXI.',
    keyOutcomes: [
      'Ejercicios prácticos de dicción y proyección vocal en español',
      'Técnicas de encarnación corporal de caballeros y escuderos',
      'Análisis interpretativo de monólogos cervantinos en vivo',
      'Guía para que los alumnos interpreten pasajes teatrales'
    ],
    icon: 'Award',
    badge: 'Formación Artística'
  },
  {
    id: 'inmersivo',
    title: 'Programa de Capacitación Inmersivo',
    duration: '2 horas completas',
    instructor: 'Gabriel Villegas (Dramaturgo) & Wilderman García',
    description: 'Taller integral de diseño instruccional y dramaturgia participativa. Los estudiantes no solo aprenden sobre la obra, sino que crean y adaptan sus propias escenas quijotescas en vivo.',
    keyOutcomes: [
      'Taller guiado de escritura creativa inspirada en el Siglo de Oro',
      'Puesta en práctica de metodologías de teatro pedagógico',
      'Certificados de participación para los estudiantes del programa',
      'Materiales didácticos y rúbricas de evaluación para el docente'
    ],
    icon: 'GraduationCap',
    badge: 'Máximo Valor Pedagógico'
  }
];

export const ACADEMIC_PILLARS: AcademicPillar[] = [
  {
    id: 'teatro-educativo',
    number: 'I',
    title: 'Teatro Educativo',
    verbs: ['Demostrar', 'Adquirir', 'Interactuar'],
    focus: 'Inmersión Lingüística Directa',
    description: 'Demostrar la adquisición y fluidez del idioma español a través de la interacción dramática en tiempo real, rompiendo la barrera de la timidez verbal mediante el juego escénico.',
    curriculumBenefit: 'Fortalece la competencia comunicativa oral y la comprensión auditiva en contextos vivos y emotivos.',
    iconName: 'Theater'
  },
  {
    id: 'lectoescritura',
    number: 'II',
    title: 'Lectoescritura',
    verbs: ['Analizar', 'Interpretar', 'Deconstruir'],
    focus: 'Estructura del Texto Dramático',
    description: 'Analizar la arquitectura del texto dramático, deconstruir la prosa cervantina e interpretar pasajes fundamentales que conectan la lectura crítica con la representación teatral.',
    curriculumBenefit: 'Alineado a los estándares de análisis textual del currículo AP Spanish Literature and Language.',
    iconName: 'PenTool'
  },
  {
    id: 'apreciacion-literaria',
    number: 'III',
    title: 'Apreciación Literaria',
    verbs: ['Identificar', 'Comparar', 'Sintetizar'],
    focus: 'Valores Universales y Contexto Actual',
    description: 'Identificar los temas centrales del clásico de Miguel de Cervantes —el idealismo, la justicia, la locura lúcida— y comparar sus valores universales con los desafíos del siglo XXI en EE. UU.',
    curriculumBenefit: 'Fomenta el pensamiento crítico y la capacidad de establecer paralelismos éticos y sociales.',
    iconName: 'Scroll'
  },
  {
    id: 'apreciacion-cultural',
    number: 'IV',
    title: 'Apreciación Cultural y Lingüística',
    verbs: ['Reconocer', 'Evaluar', 'Celebrar'],
    focus: 'Impacto de la Herencia Hispana',
    description: 'Reconocer las diversas manifestaciones y variantes léxicas del español y evaluar el impacto cultural, literario e identitario de la Herencia Hispana en la sociedad estadounidense.',
    curriculumBenefit: 'Celebra la identidad bilingüe e intercultural de los estudiantes dentro y fuera del salón de clases.',
    iconName: 'Globe2'
  }
];

export const TECHNICAL_DATA = {
  title: 'Don Quijote en USA',
  subtitle: 'Unipersonal de Teatro Educativo y Experiencia Académica en Español',
  genre: 'Unipersonal Teatral / Comedia Dramática Pedagógica',
  author: 'Gabriel Villegas',
  actor: 'Wilderman García',
  producer: 'Teatro for the Soul',
  duration: '60 minutos (obra) + Taller post-función a elección',
  language: '100% Español (con dinámicas de apoyo y comprensión contextual)',
  classification: 'Apto para High School (9-12), Middle School (6-8) y Nivel Universitario',
  stageRequirements: 'Completamente adaptable (desde salón de clases hasta auditorio mayor)',
  domain: 'donquijoteusa.com'
};

export const SYNOPSIS_TEXT = {
  quote: '« Sabe, Sancho amigo, que yo nací por querer del cielo en esta nuestra edad de hierro para resucitar en ella la dorada... »',
  excerptP1: 'Entre las cenizas humeantes de lo que otrora fue su amada biblioteca, un desolado Don Quijote sostiene con manos temblorosas el único manuscrito que sobrevivió al voraz escrutinio: la segunda parte de «La Galatea». En medio del dolor por la pérdida de sus libros de caballería, una fuerza misteriosa y un pliegue en el tejido del tiempo lo arrancan de su natal Mancha.',
  excerptP2: 'Despierta súbitamente en el siglo XXI, desorientado pero jamás vencido, en medio de la vorágine urbana de los Estados Unidos. Los gigantes ya no tienen aspas de madera: son autopistas de múltiples niveles, rascacielos relucientes y pantallas brillantes que cautivan a las almas modernas.',
  excerptP3: 'Convencido de que su sin par Dulcinea del Toboso ha sido víctima de un nuevo y sofisticado encantamiento que la mantiene oculta en territorio norteamericano, Don Quijote emprende una cruzada inolvidable junto a la memoria de su fiel Sancho Panza y su leal Rocinante, demostrando a estudiantes y maestros que la nobleza, la justicia y la locura de soñar siguen más vivas que nunca.'
};
