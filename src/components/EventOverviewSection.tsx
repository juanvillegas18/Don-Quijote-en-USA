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
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Ticket, 
  Sparkles, 
  Feather,
  Users
} from 'lucide-react';
import quijoteOverviewBg from '../assets/images/quijote_overview_minimalist_bg_1790503674706.jpg';
import { ActiveTab } from './Navbar';

interface EventOverviewSectionProps {
  onNavigateTab: (tab: ActiveTab) => void;
}

export default function EventOverviewSection({ onNavigateTab }: EventOverviewSectionProps) {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const officialEmail = "teatroforthesoul@gmail.com";
  const [expandedCard, setExpandedCard] = useState<number | null>(0);
  const [copiedMemo, setCopiedMemo] = useState(false);

  const overviewCards = [
    {
      number: "01",
      chapter: "Capítulo I · El Actor y la Puesta",
      title: "The Production",
      spec: "Solo performance starring Colombian actor Wilderman García.",
      detail: "A tour-de-force solo performance bringing Cervantes' timeless world to life through dynamic physical acting, classical verse, and humor.",
      badge: "Cast & Format",
      icon: Drama,
      colorClass: "border-amber-300 bg-gradient-to-br from-amber-50 via-white to-amber-50/30",
      iconBg: "bg-amber-500 text-white",
      badgeStyle: "bg-amber-100 text-amber-900 border-amber-300",
      pedagogicalImpact: "Exposes students to professional Latin American theatrical craft and character transformation, demonstrating how one performer brings an entire universe alive.",
      studentDiscussion: "How does the actor use body language and voice modulation to shift between Don Quijote, Sancho Panza, and modern perspectives?",
      teacherTip: "Great for drama, public speaking, and Spanish conversation classes."
    },
    {
      number: "02",
      chapter: "Capítulo II · Los Molinos de Viento",
      title: "Show Duration",
      spec: "45 minutes.",
      detail: "Fast-paced and captivating, calibrated to maintain student focus and energy throughout the entire theatrical journey.",
      badge: "Main Performance",
      icon: Clock,
      colorClass: "border-blue-300 bg-gradient-to-br from-blue-50 via-white to-blue-50/30",
      iconBg: "bg-blue-600 text-white",
      badgeStyle: "bg-blue-100 text-blue-900 border-blue-300",
      pedagogicalImpact: "Carefully paced dramatic arc that sustains intense student engagement without cognitive fatigue.",
      studentDiscussion: "Which scenes felt most comedic, and which felt poetic or dramatic? Why?",
      teacherTip: "Leaves ample time before or after the bell for classroom transition."
    },
    {
      number: "03",
      chapter: "Capítulo III · La Tertulia Cervantina",
      title: "Academic Discussion (Tertulia)",
      spec: "15-minute interactive post-show talkback with the actor.",
      detail: "Direct educational dialogue encouraging students to ask questions, practice oral Spanish, and analyze literary and cultural themes.",
      badge: "Pedagogy & Talkback",
      icon: MessageSquare,
      colorClass: "border-emerald-300 bg-gradient-to-br from-emerald-50 via-white to-emerald-50/30",
      iconBg: "bg-emerald-600 text-white",
      badgeStyle: "bg-emerald-100 text-emerald-900 border-emerald-300",
      pedagogicalImpact: "Breaks the fourth wall, inviting students to use spoken Spanish in real time with an authentic native artist.",
      studentDiscussion: "What does Don Quijote's quest mean to modern teenagers and students in the United States today?",
      teacherTip: "Prepare 2-3 student questions in advance during class for eager volunteers."
    },
    {
      number: "04",
      chapter: "Capítulo IV · El Bloque Escolar",
      title: "Total Event Time",
      spec: "60 minutes.",
      detail: "Designed to slot comfortably into a standard school bell schedule, assembly block, or university class period with no scheduling conflicts.",
      badge: "Schedule Fit",
      icon: Hourglass,
      colorClass: "border-purple-300 bg-gradient-to-br from-purple-50 via-white to-purple-50/30",
      iconBg: "bg-purple-600 text-white",
      badgeStyle: "bg-purple-100 text-purple-900 border-purple-300",
      pedagogicalImpact: "Zero administrative friction for school administrators and bell schedule coordinators.",
      studentDiscussion: "How much storytelling can be accomplished in one single hour?",
      teacherTip: "Can be booked back-to-back in morning blocks for different grade levels."
    },
    {
      number: "05",
      chapter: "Capítulo V · La Lengua de Cervantes",
      title: "Language & Comprehension",
      spec: "Performed entirely in Spanish.",
      detail: "100% Spanish immersion. Rich visual storytelling and clear vocal articulation make the show accessible to Spanish learners and native speakers alike.",
      badge: "100% Spanish Immersion",
      icon: Languages,
      colorClass: "border-rose-300 bg-gradient-to-br from-rose-50 via-white to-rose-50/30",
      iconBg: "bg-rose-600 text-white",
      badgeStyle: "bg-rose-100 text-rose-900 border-rose-300",
      pedagogicalImpact: "Multimodal comprehension: students rely on expressive gesture, facial cues, comedic physical cues, and context.",
      studentDiscussion: "Even if you didn't catch every archaic word, how did the physical acting explain what was happening?",
      teacherTip: "Suitable for Level 1 novices through Heritage Speakers and AP Literature scholars."
    },
    {
      number: "06",
      chapter: "Capítulo VI · Para Todo Público",
      title: "Target Audience",
      spec: "Suitable for all ages, from elementary school through high school and university levels.",
      detail: "Content and physical comedy are family-friendly and intellectually layered, adaptable across K–12 and collegiate Spanish departments.",
      badge: "Elementary to University",
      icon: GraduationCap,
      colorClass: "border-orange-300 bg-gradient-to-br from-orange-50 via-white to-orange-50/30",
      iconBg: "bg-orange-500 text-white",
      badgeStyle: "bg-orange-100 text-orange-900 border-orange-300",
      pedagogicalImpact: "Layered theatrical text: younger learners revel in slapstick humor and chivalric armor, while advanced students examine philosophical ideals.",
      studentDiscussion: "What are modern 'windmills' or impossible dreams we battle today?",
      teacherTip: "Whole-school assemblies or combined World Language department events."
    }
  ];

  const handleCopySummary = () => {
    const text = `DON QUIJOTE EN USA: A Live Theatrical Performance & Educational Experience
Producer: Teatro for the Soul Inc (EIN: 81-4825762)
Starring: Wilderman García (Colombian Actor)
Duration: 60 Minutes Total (45-Minute Show + 15-Minute Academic Tertulia Talkback)
Language: Performed 100% in Spanish (Accessible for Elementary through University)
Mission: Immersive educational experience designed to promote language, heritage, and Hispanic culture while aligning with language learning objectives.
Curriculum Fit: ACTFL World-Readiness Standards & AP Spanish Literature
Host Requirements: School auditorium, multi-purpose room, or lecture hall (minimal technical requirements)
Official Reservation Portal: ${zeffyUrl} (Promo code RSVP for $0 upfront fee)
Official Contact: ${officialEmail} | www.donquijoteenusa.com`;
    navigator.clipboard.writeText(text);
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2500);
  };

  return (
    <section id="event-overview" className="relative py-16 sm:py-20 bg-[#FCF9F2] border-b-2 border-amber-300/80 overflow-hidden">
      
      {/* Background Medieval Vignettes */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.16] mix-blend-multiply"
        style={{
          backgroundImage: `url(${quijoteOverviewBg})`,
          backgroundPosition: 'left 15% center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F2] via-transparent to-[#FCF9F2] pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-sans font-bold tracking-wider uppercase bg-gradient-to-r from-amber-100 via-rose-100 to-amber-100 text-[#9E1B32] mb-3 px-3.5 py-1 rounded-full border border-rose-300 shadow-2xs">
            <Feather className="w-3.5 h-3.5 text-amber-600" />
            <span>Essential Production Specifications</span>
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            The 6 Educational Pillars
          </h2>
          
          <p className="font-garamond text-lg sm:text-xl text-stone-700 mt-2.5 italic">
            Calibrated for standard school schedules, high pedagogical impact, and effortless venue staging.
          </p>
        </div>

        {/* 6 Specification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {overviewCards.map((card, index) => {
            const Icon = card.icon;
            const isExpanded = expandedCard === index;
            return (
              <div 
                key={index}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
                className={`border-2 ${card.colorClass} p-6 rounded-2xl transition-all duration-200 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-md ${
                  isExpanded ? 'ring-2 ring-amber-400/60 shadow-md' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${card.iconBg} shadow-sm group-hover:scale-105 transition-all`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 border rounded-full shadow-2xs ${card.badgeStyle}`}>
                      {card.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="text-[10px] font-mono text-amber-900 font-bold bg-amber-100/90 px-2 py-0.5 rounded border border-amber-300">
                      {card.chapter}
                    </span>
                    <span className="text-[10px] font-mono text-stone-500 font-bold">
                      Spec {card.number}
                    </span>
                  </div>
                  
                  <h3 className="font-cinzel text-lg font-bold text-stone-900 mb-2">
                    {card.title}
                  </h3>

                  <p className="font-sans font-bold text-stone-900 text-sm leading-snug mb-3">
                    {card.spec}
                  </p>

                  <p className="font-sans text-stone-700 text-xs leading-relaxed">
                    {card.detail}
                  </p>

                  {/* Expandable Pedagogical Detail */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-stone-200/80 space-y-3 bg-white/95 backdrop-blur-xs -mx-3 -mb-3 p-3.5 rounded-b-xl text-xs animate-in fade-in duration-200 border-t-2">
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase text-stone-900 block">
                          Educational Value:
                        </span>
                        <p className="text-stone-700 text-[11px] mt-0.5 leading-relaxed">
                          {card.pedagogicalImpact}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase text-stone-900 block">
                          Suggested Student Q&amp;A Prompt:
                        </span>
                        <p className="text-stone-700 text-[11px] italic mt-0.5 font-medium">
                          &ldquo;{card.studentDiscussion}&rdquo;
                        </p>
                      </div>

                      <div className="text-[10px] font-sans text-stone-700 bg-stone-50 p-2 rounded-md border border-stone-200">
                        <strong>Note for Educators:</strong> {card.teacherTip}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500 font-mono">
                  <span className="font-semibold">Click to {isExpanded ? 'collapse' : 'view teaching notes'}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-stone-900" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500 group-hover:text-stone-900" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Consolidated Proposal & Next Steps Bar */}
        <div className="bg-white/95 backdrop-blur-md border-2 border-amber-300 p-6 sm:p-7 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-5 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-sm font-cinzel font-bold text-stone-900">
                School Proposal &amp; Procurement Summary
              </span>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-300 font-bold">
                EIN: 81-4825762
              </span>
            </div>
            <p className="text-xs font-sans text-stone-600">
              Teatro for the Soul Inc · 60-Minute Performance &amp; Academic Tertulia · 100% Spanish Immersion.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={handleCopySummary}
              className="btn-gold-accent text-xs py-2.5 px-4 flex items-center gap-2 cursor-pointer font-bold shadow-sm"
            >
              {copiedMemo ? (
                <>
                  <Check className="w-4 h-4 text-emerald-800" />
                  <span className="text-emerald-900">Summary Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-amber-900" />
                  <span>Copy Proposal Summary</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => onNavigateTab('about')}
              className="btn-outline-refined text-xs py-2.5 px-4 font-bold flex items-center gap-1.5"
            >
              <Users className="w-3.5 h-3.5 text-[#9E1B32]" />
              <span>Biographies (About Us)</span>
            </button>

            <a
              href={zeffyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-wine text-xs py-2.5 px-4.5 font-bold flex items-center gap-1.5 shadow-sm"
            >
              <Ticket className="w-3.5 h-3.5 text-amber-300" />
              <span>Reserve on Zeffy (Promo: RSVP)</span>
              <ExternalLink className="w-3 h-3 opacity-90" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
