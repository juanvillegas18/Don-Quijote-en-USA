/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  ExternalLink, 
  Ticket, 
  Sparkles,
  Building2,
  Calendar,
  Clock,
  GraduationCap,
  ShieldCheck,
  Feather
} from 'lucide-react';
import quijoteOverviewBg from '../assets/images/quijote_overview_minimalist_bg_1790503674706.jpg';

export default function FAQPage() {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const officialEmail = "teatroforthesoul@gmail.com";
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'logistics' | 'schedule' | 'procurement' | 'pedagogy'>('all');

  const faqs = [
    {
      category: "logistics",
      q: "What stage dimensions and AV equipment does our school or venue need to provide?",
      a: "The production is completely turnkey and self-contained. The performance requires a minimum staging area of approximately 12 × 12 feet (auditorium stage, cafetorium platform, black box, gymnasium floor, or lecture hall front). The host venue only needs to provide: 1) General stage wash or overhead room lighting, 2) One standard electrical outlet, and 3) A school PA system with a wireless lavalier or headset microphone. The performer supplies all chivalric costumes, modular stage props, sound cues, and banner backdrops.",
      badge: "Venue & Staging",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300"
    },
    {
      category: "logistics",
      q: "How long does load-in, soundcheck, and strike take? Will it disrupt our school day?",
      a: "Load-in and soundcheck take just 30 to 45 minutes prior to the first student bell or assembly start time. The performer and stage coordinator work silently and efficiently without interrupting classes. Post-performance strike and pack-up require only 20 to 25 minutes following the 15-minute academic tertulia, leaving your school auditorium or multipurpose room immediately ready for the next scheduled period.",
      badge: "Load-in & Strike",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300"
    },
    {
      category: "schedule",
      q: "Can our school host multiple back-to-back performances in a single morning?",
      a: "Yes, this is one of our most popular arrangements for middle and high schools. For example, schools frequently book Session 1 (9:00 AM – 10:00 AM) for Spanish 1 and 2 students or 9th–10th graders, followed by a 20-minute transition, and Session 2 (10:20 AM – 11:20 AM) for Spanish 3, 4, AP Spanish Literature, and Native/Heritage speakers. This keeps group sizes intimate while maximizing student attendance within school budget parameters.",
      badge: "Multiple Assemblies",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300"
    },
    {
      category: "schedule",
      q: "Does the 60-minute duration strictly align with standard high school bell schedules?",
      a: "Yes. The event is calibrated to a precise 60-minute running time: 45 minutes of dynamic theatrical performance followed immediately by 15 minutes of structured, interactive Academic Tertulia (Q&A talkback). It seamlessly fits into standard 60–90 minute block schedules or assembly periods without causing tardiness or disrupting bus schedules.",
      badge: "Bell Schedule Fit",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300"
    },
    {
      category: "procurement",
      q: "How does the $0.00 upfront booking with promo code RSVP work for school purchase orders?",
      a: "School districts and universities rarely pay by credit card in advance. When booking your tour date on Zeffy, enter promo code RSVP at checkout. This instantly reserves your date on the national tour calendar with a $0.00 upfront fee. Our tour management office will promptly email your department chair or principal with official invoice paperwork to route through your school district's standard Purchase Order (PO) or Net-30 payment process.",
      badge: "Zero Upfront Cost",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300"
    },
    {
      category: "procurement",
      q: "What vendor registration credentials can we submit to our district finance office?",
      a: "Teatro for the Soul Inc is an established and registered educational arts vendor with Employer Identification Number (EIN) 81-4825762. We furnish complete W-9 forms, Certificates of Insurance (COI) naming your school district as additionally insured upon request, and itemized educational service contracts.",
      badge: "Vendor Credentials",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300"
    },
    {
      category: "procurement",
      q: "Can our school use Title I, Title III, Hispanic Heritage grants, or PTA funds?",
      a: "Yes. Because Don Quijote en USA directly supports language acquisition, cultural diversity, and multidisciplinary arts education aligned with ACTFL World-Readiness Standards and AP curricula, schools routinely fund the performance through Title I, Title III (English Learners/Dual Language), state arts council grants, Hispanic Heritage Month activity funds, and PTA/Booster sponsorships.",
      badge: "Grants & Funding",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300"
    },
    {
      category: "pedagogy",
      q: "How do students with beginner (Level 1–2) Spanish comprehend a 100% Spanish play?",
      a: "The adaptation is masterfully staged using expressive physical theatre, comedic mime, high-energy pantomime, and visual props that visually telegraph the plot and emotions. Beginners easily follow the humor, action, and conflicts through physical storytelling, while intermediate and advanced students gain authentic exposure to Spanish vocal cadence and Cervantes' classic verse. Teachers consistently report that novice students stay thoroughly engaged from start to finish.",
      badge: "Language Immersion",
      badgeColor: "bg-rose-100 text-rose-900 border-rose-300"
    },
    {
      category: "pedagogy",
      q: "Are pre-show curriculum materials, vocabulary sheets, or study guides provided?",
      a: "Yes! Upon reservation confirmation, our educational office sends teachers a comprehensive digital Educator Packet. This includes: 1) Pre-performance vocabulary and character cheat-sheets, 2) Historical and literary context about Miguel de Cervantes, 3) Suggested classroom warm-up activities, and 4) Post-performance discussion prompts and essay topics aligned with ACTFL 5 Cs and AP Spanish Literature exam themes.",
      badge: "Educator Packets",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300"
    },
    {
      category: "pedagogy",
      q: "What is the maximum and recommended audience size per assembly?",
      a: "The solo performance easily accommodates diverse venue sizes—from intimate 50-student honors seminars to 800+ student high school auditorium assemblies. For schools with more than 400 students attending, we recommend dividing the audience into two back-to-back showings so that sightlines remain excellent and every student has a chance to ask questions during the live talkback with Wilderman García.",
      badge: "Audience Capacity",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300"
    }
  ];

  const filteredFaqs = faqs.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-900 bg-purple-100 px-3.5 py-1 rounded-full border border-purple-300 shadow-2xs mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-purple-700" />
            <span>School Logistics &amp; Administration</span>
          </div>
          
          <h1 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          
          <p className="font-garamond text-lg sm:text-xl text-stone-700 mt-3 italic max-w-2xl mx-auto">
            Practical guidance on staging, bell schedules, district procurement, purchase orders, and student language immersion.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300'
            }`}
          >
            All Questions ({faqs.length})
          </button>
          
          <button
            type="button"
            onClick={() => setActiveCategory('logistics')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
              activeCategory === 'logistics'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-amber-100/80 text-amber-900 border border-amber-300 hover:bg-amber-200'
            }`}
          >
            Venue &amp; Staging (2)
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('schedule')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
              activeCategory === 'schedule'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-purple-100/80 text-purple-900 border border-purple-300 hover:bg-purple-200'
            }`}
          >
            Bell Schedules (2)
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('procurement')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
              activeCategory === 'procurement'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-emerald-100/80 text-emerald-900 border border-emerald-300 hover:bg-emerald-200'
            }`}
          >
            Purchase Orders &amp; EIN (3)
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory('pedagogy')}
            className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all cursor-pointer ${
              activeCategory === 'pedagogy'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-blue-100/80 text-blue-900 border border-blue-300 hover:bg-blue-200'
            }`}
          >
            Language &amp; Study Guides (3)
          </button>
        </div>

        {/* Accordion Questions */}
        <div className="space-y-3.5 mb-12">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className={`border-2 rounded-xl bg-white transition-all shadow-xs ${
                  isOpen 
                    ? 'border-purple-600 shadow-md ring-2 ring-purple-300/40' 
                    : 'border-amber-200/90 hover:border-purple-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-purple-50/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border hidden sm:inline-block ${faq.badgeColor}`}>
                      {faq.badge}
                    </span>
                    <span className="font-cinzel font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-purple-600 shrink-0" />
                      {faq.q}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-purple-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-2 text-xs sm:text-sm font-sans text-stone-700 border-t border-purple-100 bg-gradient-to-r from-purple-50/30 via-white to-amber-50/20 leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? Card */}
        <div className="p-6 bg-gradient-to-r from-amber-50 via-rose-50/50 to-amber-50 border-2 border-amber-300 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-cinzel text-base font-bold text-stone-900">
              Need Direct Administrative Assistance?
            </h3>
            <p className="text-xs text-stone-600 font-sans">
              Contact our tour office for custom date holds, W-9 paperwork, or district vendor packets.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={`mailto:${officialEmail}`}
              className="btn-primary-wine text-xs py-2 px-3.5 font-bold flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-amber-300" />
              <span>Email: {officialEmail}</span>
            </a>

            <a
              href={zeffyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-accent text-xs py-2 px-3.5 font-bold flex items-center gap-1.5"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Reserve on Zeffy</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
