/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Drama, 
  Clock, 
  MessageSquare, 
  Hourglass, 
  Languages, 
  GraduationCap, 
  BookOpenCheck,
  CheckCircle2,
  Copy,
  Check,
  Award,
  BookMarked,
  Sparkles,
  FileText,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  CalendarDays,
  Target,
  Calculator,
  Building2,
  Users,
  HelpCircle,
  ExternalLink,
  Ticket
} from 'lucide-react';
import quijoteOverviewBg from '../assets/images/quijote_overview_minimalist_bg_1790503674706.jpg';

export default function EventOverviewSection() {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  
  // Interactive view modes
  const [activeView, setActiveView] = useState<'cards' | 'timeline' | 'standards' | 'planner'>('cards');
  const [expandedCard, setExpandedCard] = useState<number | null>(0);
  const [copiedMemo, setCopiedMemo] = useState(false);
  const [copiedStandards, setCopiedStandards] = useState(false);

  // Interactive Assembly Planner State
  const [gradeLevel, setGradeLevel] = useState<'all' | 'elementary' | 'middle' | 'high' | 'university'>('high');
  const [studentCount, setStudentCount] = useState<number>(250);
  const [venueType, setVenueType] = useState<'auditorium' | 'cafetorium' | 'gym' | 'lecture'>('auditorium');
  const [eventType, setEventType] = useState<'heritage' | 'ap' | 'general'>('heritage');

  const overviewCards = [
    {
      number: "01",
      title: "The Production",
      spec: "Solo performance starring Colombian actor Wilderman García.",
      detail: "A tour-de-force solo performance bringing Cervantes' timeless world to life through dynamic physical acting, classical verse, and humor.",
      badge: "Cast & Format",
      icon: Drama,
      pedagogicalImpact: "Exposes students to professional Latin American theatrical craft and character transformation, demonstrating how one performer brings an entire universe alive.",
      studentDiscussion: "How does the actor use body language and voice modulation to shift between Don Quijote, Sancho Panza, and modern perspectives?",
      teacherTip: "Great for drama, public speaking, and Spanish conversation classes."
    },
    {
      number: "02",
      title: "Show Duration",
      spec: "45 minutes.",
      detail: "Fast-paced and captivating, calibrated to maintain student focus and energy throughout the entire theatrical journey.",
      badge: "Main Performance",
      icon: Clock,
      pedagogicalImpact: "Carefully paced dramatic arc that sustains intense student engagement without cognitive fatigue.",
      studentDiscussion: "Which scenes felt most comedic, and which felt poetic or dramatic? Why?",
      teacherTip: "Leaves ample time before or after the bell for classroom transition."
    },
    {
      number: "03",
      title: "Academic Discussion (Tertulia)",
      spec: "15-minute interactive post-show talkback with the actor.",
      detail: "Direct educational dialogue encouraging students to ask questions, practice oral Spanish, and analyze literary and cultural themes.",
      badge: "Pedagogy & Talkback",
      icon: MessageSquare,
      pedagogicalImpact: "Breaks the fourth wall, inviting students to use spoken Spanish in real time with an authentic native artist.",
      studentDiscussion: "What does Don Quijote's quest mean to modern teenagers and students in the United States today?",
      teacherTip: "Prepare 2-3 student questions in advance during class for eager volunteers."
    },
    {
      number: "04",
      title: "Total Event Time",
      spec: "60 minutes.",
      detail: "Designed to slot comfortably into a standard school bell schedule, assembly block, or university class period with no scheduling conflicts.",
      badge: "Schedule Fit",
      icon: Hourglass,
      pedagogicalImpact: "Zero administrative friction for school administrators and bell schedule coordinators.",
      studentDiscussion: "How much storytelling can be accomplished in one single hour?",
      teacherTip: "Can be booked back-to-back in morning blocks for different grade levels."
    },
    {
      number: "05",
      title: "Language & Comprehension",
      spec: "Performed entirely in Spanish.",
      detail: "100% Spanish immersion. Rich visual storytelling and clear vocal articulation make the show accessible to Spanish learners and native speakers alike.",
      badge: "100% Spanish Immersion",
      icon: Languages,
      pedagogicalImpact: "Multimodal comprehension: students rely on expressive gesture, facial cues, comedic physical cues, and context.",
      studentDiscussion: "Even if you didn't catch every archaic word, how did the physical acting explain what was happening?",
      teacherTip: "Suitable for Level 1 novices through Heritage Speakers and AP Literature scholars."
    },
    {
      number: "06",
      title: "Target Audience",
      spec: "Suitable for all ages, from elementary school through high school and university levels.",
      detail: "Content and physical comedy are family-friendly and intellectually layered, adaptable across K–12 and collegiate Spanish departments.",
      badge: "Elementary to University",
      icon: GraduationCap,
      pedagogicalImpact: "Layered theatrical text: younger learners revel in slapstick humor and chivalric armor, while advanced students examine philosophical ideals.",
      studentDiscussion: "What are modern 'windmills' or impossible dreams we battle today?",
      teacherTip: "Whole-school assemblies or combined World Language department events."
    }
  ];

  // 60-Minute Run-of-Show Timeline Data
  const timelineSteps = [
    {
      time: "00:00 – 00:05",
      phase: "Arrival & Theatrical Setup",
      title: "Opening Atmosphere & Prologue",
      description: "Students settle into the auditorium. The performer introduces the world of Miguel de Cervantes Saavedra with visual staging and musical atmosphere.",
      focus: "Listening Comprehension & Expectation Setting",
      highlight: "Immediate Spanish immersion from the first spoken sentence."
    },
    {
      time: "00:05 – 00:25",
      phase: "Act I · The Journey Begins",
      title: "The Chivalric Madness & Windmills",
      description: "Don Quijote embarks on his quest, knighting himself, seeking his lady Dulcinea, and confronting modern American landscapes and classic windmills.",
      focus: "Physical Comedy, Expressive Gestures & Character Contrast",
      highlight: "High visual entertainment keeps beginning learners fully engaged."
    },
    {
      time: "00:25 – 00:45",
      phase: "Act II · The Philosophical Climax",
      title: "Fantasy Meets Contemporary Reality",
      description: "The collision between Cervantes' 1605 Golden Age chivalric ideals and the contemporary United States, culminating in a poignant monologue on courage and dignity.",
      focus: "Poetic Verse, Thematic Resonance & Cultural Identity",
      highlight: "Direct alignment with AP Spanish Literature themes and cultural heritage."
    },
    {
      time: "00:45 – 01:00",
      phase: "The Academic Tertulia",
      title: "Live Interactive Talkback with Wilderman García",
      description: "Wilderman steps out of character to lead an inspiring 15-minute Q&A in Spanish, engaging students on Latin American theatre, bilingualism, and literary analysis.",
      focus: "Interpersonal Speaking & Student Leadership",
      highlight: "Active student participation in Spanish with a professional actor."
    }
  ];

  const standardsAlignment = [
    {
      title: "ACTFL 5 Cs World-Readiness Standards",
      tag: "National Standards",
      points: [
        "Communication: Authentic interpretive listening and interpersonal interaction during Q&A.",
        "Cultures: Direct engagement with foundational Hispanic cultural archetypes and literature.",
        "Connections: Interdisciplinary ties with World History, European Literature, and Performing Arts.",
        "Comparisons: Cross-cultural analysis between 17th-century Spain and modern American society.",
        "Communities: Connecting language learning to real-world arts and lifelong cultural appreciation."
      ]
    },
    {
      title: "AP Spanish Literature & Culture",
      tag: "Advanced Placement",
      points: [
        "Direct theatrical encounter with Miguel de Cervantes Saavedra’s required AP text.",
        "Reinforces key AP themes: La dualidad del ser, Las relaciones interpersonales, and La creación literaria.",
        "Prepares students for critical essay analysis, character motivation, and text-to-performance comparisons."
      ]
    },
    {
      title: "Hispanic Heritage & Dual Language",
      tag: "Cultural Enrichment",
      points: [
        "Celebrates Hispanic Heritage Month and year-round multicultural school programming.",
        "Validates dual-language, bilingual, and heritage students with authentic, high-caliber Spanish theatre.",
        "Builds school-wide pride in language diversity and literary heritage."
      ]
    },
    {
      title: "Turnkey Technical Requirements",
      tag: "Host Venue Specs",
      points: [
        "Solo performer setup adaptable to school auditoriums, multi-purpose rooms, cafetoriums, or lecture halls.",
        "Minimal staging requirements: standard room wash lighting and basic school sound / wireless microphone.",
        "Self-contained production ensures no complicated load-in or technical stress for school staff."
      ]
    }
  ];

  const handleCopySummary = () => {
    const text = `DON QUIJOTE EN USA: A Live Theatrical Performance & Educational Experience
Starring: Wilderman García (Colombian Actor)
Duration: 60 Minutes Total (45-Minute Show + 15-Minute Academic Tertulia Talkback)
Language: Performed 100% in Spanish (Accessible for Elementary through University)
Mission: Immersive educational experience designed to promote language, heritage, and Hispanic culture while aligning with language learning objectives.
Curriculum Fit: ACTFL World-Readiness Standards & AP Spanish Literature
Host Requirements: School auditorium, multi-purpose room, or lecture hall (minimal technical requirements)
Official Vendor Credentials: SAM.gov UEI: FJV5QQ2QM9M8 | RUP PR: 202561897
Ticketing / Date Reservation: https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa (Promo code RSVP for $0 upfront fee)
Contact: info@teatroforthesoul.com | gabo@act-puertorico.com | www.donquijoteenusa.com`;
    navigator.clipboard.writeText(text);
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2500);
  };

  const handleCopyStandards = () => {
    const text = `CURRICULAR STANDARDS ALIGNMENT: DON QUIJOTE EN USA
1. ACTFL 5 Cs: Communication, Cultures, Connections, Comparisons, Communities
2. AP Spanish Literature & Culture: Don Quijote de la Mancha (Miguel de Cervantes) - La dualidad del ser, la creación literaria, el héroe y antihéroe.
3. Target Audience: K-12 and Higher Education Spanish Departments.
4. Total Run Time: 60 minutes (45 min performance + 15 min interactive academic tertulia).
5. Official Vendor Registration: SAM.gov UEI: FJV5QQ2QM9M8 | RUP PR: 202561897`;
    navigator.clipboard.writeText(text);
    setCopiedStandards(true);
    setTimeout(() => setCopiedStandards(false), 2500);
  };

  return (
    <section id="event-overview" className="relative py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E7E2D8] overflow-hidden">
      
      {/* Minimalist Don Quijote Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.12] mix-blend-multiply"
        style={{
          backgroundImage: `url(${quijoteOverviewBg})`,
          backgroundPosition: 'left 15% center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-transparent to-[#FAF8F5] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-l from-[#FAF8F5]/90 via-[#FAF8F5]/70 to-[#FAF8F5]/90 pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-wider uppercase text-[#7A1C2C] mb-2.5 bg-[#7A1C2C]/10 px-3 py-1 rounded-xs border border-[#7A1C2C]/20">
            <FileText className="w-3.5 h-3.5" />
            <span>Comprehensive Educational Dossier</span>
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Event Overview &amp; Specifications
          </h2>
          
          <p className="font-garamond text-lg sm:text-xl text-stone-700 mt-3 italic">
            Essential production facts, scheduling details, and pedagogical structure designed for educators.
          </p>
        </div>

        {/* Interactive View Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="inline-flex p-1.5 bg-stone-200/80 rounded-xs border border-stone-300 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveView('cards')}
              className={`flex items-center gap-2 py-2 px-3 sm:px-4 text-xs font-medium rounded-2xs transition-all cursor-pointer ${
                activeView === 'cards'
                  ? 'bg-white text-[#7A1C2C] font-semibold shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Specification Cards</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView('timeline')}
              className={`flex items-center gap-2 py-2 px-3 sm:px-4 text-xs font-medium rounded-2xs transition-all cursor-pointer ${
                activeView === 'timeline'
                  ? 'bg-white text-[#7A1C2C] font-semibold shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>60-Min Run-of-Show</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView('standards')}
              className={`flex items-center gap-2 py-2 px-3 sm:px-4 text-xs font-medium rounded-2xs transition-all cursor-pointer ${
                activeView === 'standards'
                  ? 'bg-white text-[#7A1C2C] font-semibold shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Standards &amp; Pedagogy</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveView('planner')}
              className={`flex items-center gap-2 py-2 px-3 sm:px-4 text-xs font-medium rounded-2xs transition-all cursor-pointer ${
                activeView === 'planner'
                  ? 'bg-white text-[#7A1C2C] font-semibold shadow-xs'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Assembly Planner</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: SPECIFICATION CARDS (with interactive drawer) */}
        {activeView === 'cards' && (
          <div className="space-y-6 mb-16">
            <div className="text-center text-xs font-sans text-stone-500 mb-2">
              Tip: Click any specification card below to expand in-depth pedagogical insights and classroom discussion prompts.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {overviewCards.map((card, index) => {
                const Icon = card.icon;
                const isExpanded = expandedCard === index;
                return (
                  <div 
                    key={index}
                    onClick={() => setExpandedCard(isExpanded ? null : index)}
                    className={`bg-white/95 backdrop-blur-2xs border p-6 rounded-xs transition-all duration-200 flex flex-col justify-between cursor-pointer group ${
                      isExpanded 
                        ? 'border-[#7A1C2C] shadow-md ring-1 ring-[#7A1C2C]/30' 
                        : 'border-[#E7E2D8] hover:border-[#7A1C2C]/50 shadow-2xs hover:shadow-xs'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-xs flex items-center justify-center font-bold transition-colors ${
                          isExpanded ? 'bg-[#7A1C2C] text-white' : 'bg-[#7A1C2C]/10 text-[#7A1C2C] group-hover:bg-[#7A1C2C] group-hover:text-white'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono font-semibold tracking-wider uppercase text-[#7A1C2C] bg-stone-50 px-2 py-0.5 border border-stone-200 rounded-xs">
                          {card.badge}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono text-stone-400 block mb-1">
                        Specification {card.number}
                      </span>
                      
                      <h3 className="font-cinzel text-lg font-bold text-stone-900 mb-2">
                        {card.title}
                      </h3>

                      <p className="font-sans font-semibold text-stone-900 text-sm leading-snug mb-3">
                        {card.spec}
                      </p>

                      <p className="font-sans text-stone-600 text-xs leading-relaxed">
                        {card.detail}
                      </p>

                      {/* Interactive Expandable Drawer */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-stone-200 space-y-3 bg-[#FAF8F5] -mx-3 -mb-3 p-3 rounded-b-xs text-xs animate-in fade-in duration-200">
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase text-[#7A1C2C] block">
                              Educational Value:
                            </span>
                            <p className="text-stone-700 text-[11px] mt-0.5 leading-relaxed">
                              {card.pedagogicalImpact}
                            </p>
                          </div>

                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase text-stone-700 block">
                              Suggested Student Q&amp;A Prompt:
                            </span>
                            <p className="text-stone-600 text-[11px] italic mt-0.5">
                              &ldquo;{card.studentDiscussion}&rdquo;
                            </p>
                          </div>

                          <div className="text-[10px] font-sans text-stone-500 bg-white p-1.5 rounded-xs border border-stone-200">
                            <strong>Note for Educators:</strong> {card.teacherTip}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                      <span>Click to {isExpanded ? 'collapse' : 'explore details'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#7A1C2C]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400 group-hover:text-[#7A1C2C]" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW 2: 60-MIN RUN-OF-SHOW TIMELINE */}
        {activeView === 'timeline' && (
          <div className="bg-white/95 backdrop-blur-2xs border border-[#E7E2D8] p-6 sm:p-8 rounded-xs shadow-sm mb-16 space-y-8">
            <div className="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A1C2C] font-semibold">
                  Minute-by-Minute Breakdown
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-stone-900">
                  The 60-Minute Structure for School Assemblies
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-[#7A1C2C]/10 text-[#7A1C2C] px-3 py-1.5 rounded-xs font-mono text-xs font-bold shrink-0">
                <Clock className="w-4 h-4" />
                <span>Total Runtime: 60:00 Exact</span>
              </div>
            </div>

            <div className="space-y-6">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-5 p-4 sm:p-5 bg-stone-50/80 border border-stone-200 rounded-xs hover:border-[#7A1C2C]/40 transition-colors">
                  <div className="md:w-44 shrink-0 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200 pb-3 md:pb-0 md:pr-4">
                    <div>
                      <span className="text-base font-mono font-bold text-[#7A1C2C] block">
                        {step.time}
                      </span>
                      <span className="text-xs font-sans font-medium text-stone-500 uppercase tracking-wider block mt-0.5">
                        {step.phase}
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-stone-400 mt-2">
                      Phase {idx + 1} of 4
                    </div>
                  </div>

                  <div className="space-y-2 flex-1">
                    <h4 className="font-cinzel text-lg font-bold text-stone-900">
                      {step.title}
                    </h4>
                    <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-[11px] font-sans">
                      <div className="bg-white p-2 rounded-xs border border-stone-200">
                        <strong className="text-stone-800">Pedagogical Focus:</strong> {step.focus}
                      </div>
                      <div className="bg-white p-2 rounded-xs border border-stone-200 text-[#7A1C2C]">
                        <strong>Student Experience:</strong> {step.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#FAF8F5] p-4 rounded-xs border border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-stone-700 font-medium">
                Fits easily within a standard 60–90 minute class block or assembly schedule without missing bells.
              </span>
              <button
                type="button"
                onClick={handleCopySummary}
                className="btn-outline-refined text-xs py-2 px-4 shrink-0 flex items-center gap-1.5 bg-white"
              >
                <Copy className="w-3.5 h-3.5 text-[#7A1C2C]" />
                <span>Copy Bell Schedule Dossier</span>
              </button>
            </div>
          </div>
        )}

        {/* VIEW 3: STANDARDS & PEDAGOGY MATRIX */}
        {activeView === 'standards' && (
          <div className="space-y-6 mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/95 backdrop-blur-2xs p-6 border border-[#E7E2D8] rounded-xs">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A1C2C] font-semibold block mb-1">
                  Academic Justification &amp; Standards
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-stone-900">
                  Curricular Standards Alignment
                </h3>
                <p className="text-xs font-sans text-stone-600 mt-1">
                  Ready-to-use justification text for department meetings, syllabi, and administrative grant applications.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyStandards}
                className="btn-primary-wine text-xs py-2.5 px-4 shrink-0 flex items-center gap-2"
              >
                {copiedStandards ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Standards Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Standards for Syllabus</span>
                  </>
                )}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {standardsAlignment.map((item, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-2xs border border-[#E7E2D8] p-6 rounded-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#7A1C2C] bg-[#7A1C2C]/10 px-2.5 py-0.5 rounded-xs">
                      {item.tag}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>

                  <h4 className="font-cinzel text-base font-bold text-stone-900">
                    {item.title}
                  </h4>

                  <ul className="space-y-2 text-xs font-sans text-stone-600">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7A1C2C] mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 4: INTERACTIVE SCHOOL ASSEMBLY PLANNER */}
        {activeView === 'planner' && (
          <div className="bg-white/95 backdrop-blur-2xs border-2 border-[#7A1C2C]/25 p-6 sm:p-9 rounded-xs shadow-md mb-16 space-y-8">
            <div className="border-b border-stone-200 pb-4">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#7A1C2C] mb-1">
                <Calculator className="w-4 h-4" />
                <span>Interactive Tool for Teachers &amp; Department Chairs</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900">
                School Assembly &amp; Tour Date Planner
              </h3>
              <p className="text-xs sm:text-sm font-sans text-stone-600 mt-1">
                Select your school profile below to generate an immediate technical checklist and district proposal memo.
              </p>
            </div>

            {/* Interactive Form Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Grade Level Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#7A1C2C]" />
                  <span>Student Audience Level</span>
                </label>
                <select
                  value={gradeLevel}
                  onChange={(e) => setGradeLevel(e.target.value as any)}
                  className="w-full text-xs font-sans bg-stone-50 border border-stone-300 p-2.5 rounded-xs focus:ring-1 focus:ring-[#7A1C2C] focus:border-[#7A1C2C]"
                >
                  <option value="all">All Ages / Whole School Assembly</option>
                  <option value="elementary">Elementary (Grades 3–5)</option>
                  <option value="middle">Middle School (Grades 6–8)</option>
                  <option value="high">High School (Spanish 1 – AP Lit)</option>
                  <option value="university">University / College Spanish Dept</option>
                </select>
                <p className="text-[11px] text-stone-500">
                  {gradeLevel === 'high' && "Emphasizes AP themes and ACTFL standards."}
                  {gradeLevel === 'middle' && "Focuses on physical comedy and introductory culture."}
                  {gradeLevel === 'elementary' && "Accents expressive humor, physical movement and sound."}
                  {gradeLevel === 'university' && "Dives into Golden Age dramaturgy and sociopolitical commentary."}
                  {gradeLevel === 'all' && "Layered performance suitable for broad community audiences."}
                </p>
              </div>

              {/* Attendance Estimator Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#7A1C2C]" />
                    <span>Estimated Students</span>
                  </label>
                  <span className="font-mono text-xs font-bold text-[#7A1C2C] bg-[#7A1C2C]/10 px-2 py-0.5 rounded-xs">
                    {studentCount} Students
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={800}
                  step={25}
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full accent-[#7A1C2C] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                  <span>50</span>
                  <span>250</span>
                  <span>500</span>
                  <span>800+</span>
                </div>
              </div>

              {/* Venue Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#7A1C2C]" />
                  <span>Host Staging Area</span>
                </label>
                <select
                  value={venueType}
                  onChange={(e) => setVenueType(e.target.value as any)}
                  className="w-full text-xs font-sans bg-stone-50 border border-stone-300 p-2.5 rounded-xs focus:ring-1 focus:ring-[#7A1C2C] focus:border-[#7A1C2C]"
                >
                  <option value="auditorium">School Auditorium / Theater</option>
                  <option value="cafetorium">Cafetorium / Multi-purpose Room</option>
                  <option value="gym">Gymnasium Staging</option>
                  <option value="lecture">University Lecture Hall</option>
                </select>
                <p className="text-[11px] text-stone-500">
                  {venueType === 'auditorium' && "Ideal acoustics; requires basic stage wash and 1 mic."}
                  {venueType === 'cafetorium' && "Easily adapted; performer brings self-contained stage props."}
                  {venueType === 'gym' && "Requires standard school PA system for vocal clarity."}
                  {venueType === 'lecture' && "Intimate theatrical experience for university cohorts."}
                </p>
              </div>

            </div>

            {/* Generated Summary Card based on user inputs */}
            <div className="p-5 bg-stone-50 border border-stone-300 rounded-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  <span className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                    Assembly Recommendation for {studentCount} Students
                  </span>
                </div>
                <div className="text-[11px] font-mono text-stone-500">
                  SAM.gov: <strong className="text-stone-800">FJV5QQ2QM9M8</strong> · RUP PR: <strong className="text-stone-800">202561897</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans text-stone-700">
                <div className="p-3 bg-white border border-stone-200 rounded-xs">
                  <span className="text-[10px] uppercase font-mono text-stone-400 block mb-0.5">Recommended Format</span>
                  <strong className="text-stone-900 block font-serif text-sm">
                    {studentCount > 400 ? '2 Back-to-Back Sessions' : '1 Single Assembly (60m)'}
                  </strong>
                  <span className="text-[11px] text-stone-500">
                    {studentCount > 400 ? 'Ensures high visibility and active Q&A' : 'Standard 45m show + 15m talkback'}
                  </span>
                </div>

                <div className="p-3 bg-white border border-stone-200 rounded-xs">
                  <span className="text-[10px] uppercase font-mono text-stone-400 block mb-0.5">AV / Staging Need</span>
                  <strong className="text-stone-900 block font-serif text-sm">
                    Basic Wash + 1 Wireless Mic
                  </strong>
                  <span className="text-[11px] text-stone-500">
                    Performer brings all chivalric props &amp; costumes
                  </span>
                </div>

                <div className="p-3 bg-white border border-stone-200 rounded-xs">
                  <span className="text-[10px] uppercase font-mono text-stone-400 block mb-0.5">Upfront Booking Cost</span>
                  <strong className="text-emerald-700 block font-serif text-sm">
                    $0.00 with Promo: RSVP
                  </strong>
                  <span className="text-[11px] text-stone-500">
                    Invoice processed via district PO later
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="btn-outline-refined text-xs py-2.5 px-4 w-full sm:w-auto flex items-center justify-center gap-2 bg-white"
                >
                  {copiedMemo ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Proposal Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#7A1C2C]" />
                      <span>Copy Proposal for Principal / Department Head</span>
                    </>
                  )}
                </button>

                <a
                  href={zeffyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-wine text-xs py-2.5 px-5 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Ticket className="w-3.5 h-3.5" />
                  <span>Reserve Date on Zeffy (Code: RSVP)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Full-Width Core Educational Mission Feature Card */}
        <div className="bg-white/95 backdrop-blur-2xs border-2 border-[#7A1C2C]/25 p-7 sm:p-9 rounded-xs shadow-sm mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#7A1C2C]">
                <BookOpenCheck className="w-4 h-4" />
                <span>The Core Educational Mission</span>
              </div>
              
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                An Immersive Bridge Between Spanish Literature &amp; Modern Students
              </h3>

              <p className="font-garamond text-lg text-stone-800 leading-relaxed italic border-l-2 border-[#7A1C2C] pl-4 py-1">
                &ldquo;An immersive educational experience designed to promote language, heritage, and Hispanic culture while aligning with language learning objectives.&rdquo;
              </p>

              <p className="font-sans text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                Students experience Cervantes’ masterpiece not as a static historical relic, but as a living, vibrant piece of theatre. The performance reinforces student vocabulary, oral comprehension, and cultural pride while highlighting universal themes of idealism, empathy, and courage.
              </p>
            </div>

            {/* Quick Metrics Pillar */}
            <div className="w-full md:w-auto shrink-0 bg-[#FAF8F5] border border-stone-200 p-5 rounded-xs space-y-3 text-xs font-sans text-stone-700 min-w-[240px]">
              <div className="font-semibold text-stone-900 pb-2 border-b border-stone-200">
                At a Glance:
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Show Time:</span>
                <strong className="text-stone-900">45 Minutes</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Tertulia Talkback:</span>
                <strong className="text-stone-900">15 Minutes</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Total Run Time:</span>
                <strong className="text-[#7A1C2C]">60 Minutes</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Language:</span>
                <strong className="text-stone-900">100% Spanish</strong>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Target Audience:</span>
                <strong className="text-stone-900">All Ages (K–16)</strong>
              </div>
            </div>
          </div>
        </div>

        {/* District & Principal Purchase Order Helper */}
        <div className="bg-[#FAF8F5] border border-stone-300 p-6 rounded-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-sm font-cinzel font-bold text-stone-900 block">
              Need Approval from Your Principal or World Language Department?
            </span>
            <p className="text-xs font-sans text-stone-600">
              Click below to copy an executive summary complete with SAM.gov and RUP PR vendor credentials for purchase orders.
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopySummary}
            className="btn-outline-refined text-xs py-2.5 px-4.5 flex items-center gap-2 cursor-pointer shrink-0 font-medium bg-white"
          >
            {copiedMemo ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Summary Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#7A1C2C]" />
                <span>Copy Educator Summary</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
