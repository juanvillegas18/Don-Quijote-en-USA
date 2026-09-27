/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Instagram, 
  Globe, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Ticket, 
  Copy, 
  Check, 
  Calendar,
  Building2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import quijoteStageBg from '../assets/images/quijote_stage_minimalist_bg_1790503684066.jpg';

export default function SocialAndContactSection() {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCopy = () => {
    navigator.clipboard.writeText('RSVP');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2200);
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2200);
  };

  const faqs = [
    {
      q: "How accessible is the 100% Spanish performance for beginning Spanish 1 & 2 students?",
      a: "The production is specifically crafted for educational audiences using physical theatre, comedic pantomime, expressive vocal changes, and visual props. Beginning students easily grasp the narrative arc and humor through physical action, while advanced and native speakers enjoy the poetic richness of Cervantes' verse."
    },
    {
      q: "How does the $0.00 upfront reservation work on Zeffy?",
      a: "When booking your school's preferred performance date on Zeffy, enter promo code RSVP at checkout. This reserves your date on the national tour calendar without requiring an upfront credit card charge. Our administrative office will then contact you directly to process your school district purchase order (PO) or institutional invoice."
    },
    {
      q: "Can our school host multiple back-to-back performances in one day?",
      a: "Yes. Many high schools and middle schools schedule two 60-minute performances in a single morning (for example, Period 2 for Grades 9–10, and Period 4 for Grades 11–12 and AP Spanish). Contact our office directly to arrange multi-session schedules."
    },
    {
      q: "What technical equipment does our school or auditorium need to provide?",
      a: "The production is self-contained. The venue only needs to provide standard room or stage wash lighting, an electrical outlet, and a basic PA system with a wireless lapel microphone. Setup takes approximately 20 to 30 minutes."
    },
    {
      q: "What vendor credentials can we submit to our school district business office?",
      a: "Teatro for the Soul is registered with official government procurement portals: SAM.gov UEI: FJV5QQ2QM9M8 and RUP PR: 202561897. We furnish complete W-9 forms, vendor registration packets, and itemized institutional invoices upon request."
    }
  ];

  return (
    <section id="booking-contact" className="relative py-20 sm:py-28 bg-white border-b border-[#E7E2D8] overflow-hidden">
      
      {/* Minimalist Don Quijote Stage Background Image */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.11] mix-blend-multiply"
        style={{
          backgroundImage: `url(${quijoteStageBg})`,
          backgroundPosition: 'right 10% center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/90 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-sans font-semibold uppercase tracking-wider text-[#7A1C2C] block mb-2 bg-[#7A1C2C]/10 px-3 py-1 rounded-xs inline-block border border-[#7A1C2C]/15">
            Tour Reservations &amp; Inquiries
          </span>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Booking &amp; Direct Contact
          </h2>
          <p className="text-xs sm:text-sm font-sans text-stone-600 mt-2">
            Coordinating performance dates for school districts, private academies, and universities across the United States.
          </p>
        </div>

        {/* Official Institutional Booking Card (Direct Zeffy with zero friction) */}
        <div className="bg-[#FAF8F5]/95 backdrop-blur-2xs border-2 border-[#7A1C2C]/25 p-7 sm:p-9 rounded-xs shadow-sm mb-14 space-y-6">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-stone-200/80 pb-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A1C2C] font-semibold block mb-1">
                Official Reservation Portal
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900">
                Reserve Your Performance Date on Zeffy
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs px-3 py-1.5 rounded-xs font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Zero Upfront Payment for Schools</span>
            </div>
          </div>

          {/* 3 Step Guidance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans text-stone-700">
            <div className="p-4 bg-white border border-stone-200 rounded-xs space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#7A1C2C]">
                  Step 1 · Choose Date
                </span>
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
              </div>
              <p className="text-stone-600 leading-relaxed">
                Open the official Zeffy tour calendar and select your institution’s preferred performance date.
              </p>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-xs space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#7A1C2C]">
                  Step 2 · Apply Code RSVP
                </span>
                <Ticket className="w-3.5 h-3.5 text-stone-400" />
              </div>
              <p className="text-stone-600 leading-relaxed">
                Enter promo code <strong className="font-mono text-stone-900 bg-stone-100 px-1 py-0.5 border border-stone-300 rounded-xs">RSVP</strong> to reserve today with no upfront payment.
              </p>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-xs space-y-1.5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#7A1C2C]">
                  Step 3 · Office Follow-Up
                </span>
                <Mail className="w-3.5 h-3.5 text-stone-400" />
              </div>
              <p className="text-stone-600 leading-relaxed">
                Our tour management team will contact you via email to coordinate venue logistics and technical details.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={zeffyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-wine text-sm py-3 px-6 flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm"
              >
                <Ticket className="w-4 h-4" />
                <span>Go to Zeffy Ticketing Portal</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="btn-outline-refined text-xs py-3 px-4.5 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer bg-white"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">RSVP Code Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-600" />
                    <span>Copy Promo Code: RSVP</span>
                  </>
                )}
              </button>
            </div>

            <span className="text-[11px] font-mono text-stone-500 text-center sm:text-right">
              Direct Link: zeffy.com/en-US/ticketing/don-quijote-en-usa
            </span>
          </div>

        </div>

        {/* Interactive Educator FAQ Accordion */}
        <div className="mb-14 space-y-4">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7A1C2C] block">
              Educator &amp; Administrator Guidance
            </span>
            <h3 className="font-cinzel text-2xl font-bold text-stone-900 mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div 
                  key={fIdx}
                  className="border border-[#E7E2D8] rounded-xs bg-white/95 backdrop-blur-2xs overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/80 transition-colors"
                  >
                    <span className="font-cinzel font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#7A1C2C] shrink-0" />
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#7A1C2C] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-sans text-stone-600 border-t border-stone-100 bg-[#FAF8F5]/50 leading-relaxed animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Administrative Coordination & Official Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Contact Card */}
          <div className="p-6 bg-[#FAF8F5]/95 backdrop-blur-2xs border border-[#E7E2D8] rounded-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xs bg-[#7A1C2C]/10 text-[#7A1C2C] flex items-center justify-center font-bold">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cinzel text-base font-bold text-stone-900">
                  Administrative Contacts
                </h4>
                <p className="text-[11px] font-sans text-stone-500">
                  Scheduling inquiries, invoices, and district vendor packets
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs font-sans text-stone-700 pt-1">
              <div className="flex items-center justify-between p-2.5 bg-white border border-stone-200 rounded-xs">
                <span>Production Office:</span>
                <div className="flex items-center gap-2">
                  <a href="mailto:info@teatroforthesoul.com" className="font-medium text-[#7A1C2C] hover:underline">
                    info@teatroforthesoul.com
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyEmail('info@teatroforthesoul.com')}
                    className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                    title="Copy email"
                  >
                    {copiedEmail === 'info@teatroforthesoul.com' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-white border border-stone-200 rounded-xs">
                <span>Tour Coordination:</span>
                <div className="flex items-center gap-2">
                  <a href="mailto:gabo@act-puertorico.com" className="font-medium text-[#7A1C2C] hover:underline">
                    gabo@act-puertorico.com
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyEmail('gabo@act-puertorico.com')}
                    className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
                    title="Copy email"
                  >
                    {copiedEmail === 'gabo@act-puertorico.com' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-white border border-stone-200 rounded-xs">
                <span>Official Web Domain:</span>
                <a
                  href="https://www.donquijoteenusa.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-stone-900 hover:text-[#7A1C2C] flex items-center gap-1"
                >
                  <span>www.donquijoteenusa.com</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>
          </div>

          {/* District Vendor Verification Card */}
          <div className="p-6 bg-[#FAF8F5]/95 backdrop-blur-2xs border border-[#E7E2D8] rounded-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xs bg-[#7A1C2C]/10 text-[#7A1C2C] flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-cinzel text-base font-bold text-stone-900">
                  Government &amp; District Registration
                </h4>
                <p className="text-[11px] font-sans text-stone-500">
                  Verified vendor identifiers for institutional purchase orders
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs font-sans text-stone-700 pt-1">
              <div className="p-2.5 bg-white border border-stone-200 rounded-xs flex items-center justify-between">
                <div>
                  <span className="font-medium text-stone-900 block">Federal SAM.gov UEI:</span>
                  <span className="text-[10px] text-stone-500">System for Award Management (US Federal)</span>
                </div>
                <span className="font-mono font-bold text-stone-900 bg-stone-100 px-2 py-1 rounded-xs border border-stone-300">
                  FJV5QQ2QM9M8
                </span>
              </div>

              <div className="p-2.5 bg-white border border-stone-200 rounded-xs flex items-center justify-between">
                <div>
                  <span className="font-medium text-stone-900 block">RUP PR Registry:</span>
                  <span className="text-[10px] text-stone-500">Registro Único de Proveedores de Servicios</span>
                </div>
                <span className="font-mono font-bold text-stone-900 bg-stone-100 px-2 py-1 rounded-xs border border-stone-300">
                  202561897
                </span>
              </div>

              <div className="p-2.5 bg-stone-100/80 rounded-xs text-[11px] text-stone-600 flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[#7A1C2C] shrink-0" />
                <span>Legal Entity: <strong>Teatro for the Soul LLC</strong></span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
