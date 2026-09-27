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
  HelpCircle, 
  Clock, 
  Sparkles,
  Feather
} from 'lucide-react';
import quijoteStageBg from '../assets/images/quijote_stage_minimalist_bg_1790503684066.jpg';

export default function SocialAndContactSection() {
  const zeffyUrl = "https://www.zeffy.com/en-US/ticketing/don-quijote-en-usa";
  const officialEmail = "teatroforthesoul@gmail.com";
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('RSVP');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="booking-contact" className="relative py-16 sm:py-24 bg-[#FCF9F2] border-b-2 border-amber-300/80 overflow-hidden">
      
      {/* Background Medieval Vignettes */}
      <div 
        className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.20] mix-blend-multiply"
        style={{
          backgroundImage: `url(${quijoteStageBg})`,
          backgroundPosition: 'right 10% center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FCF9F2] via-[#FCF9F2]/85 to-[#FCF9F2]/90 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F2] via-transparent to-[#FCF9F2] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#9E1B32] mb-2 bg-rose-100 px-3.5 py-1 rounded-full border border-rose-300 shadow-2xs">
            <Feather className="w-3.5 h-3.5 text-[#9E1B32]" />
            <span>Tour Reservations &amp; Inquiries</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Booking &amp; Direct Contact
          </h2>
          <p className="text-xs sm:text-sm font-sans text-stone-700 mt-2">
            Coordinating performance dates for school districts, private academies, and universities across the United States.
          </p>
        </div>

        {/* Official Institutional Booking Card (Direct Zeffy with zero friction in Colorful Frame) */}
        <div className="bg-white/95 backdrop-blur-md border-2 border-amber-300 p-7 sm:p-9 rounded-2xl shadow-xl mb-12 space-y-6 ring-2 ring-amber-300/40">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-amber-200 pb-5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#9E1B32] font-bold block mb-1">
                Official Reservation Portal · Season 2025–2026
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-stone-900">
                Reserve Your Performance Date on Zeffy
              </h3>
            </div>

            <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-950 border border-emerald-300 text-xs px-3.5 py-1.5 rounded-full font-bold shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Zero Upfront Payment for Schools</span>
            </div>
          </div>

          {/* 3 Step Guidance */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
            
            {/* Step 1: Sapphire Blue */}
            <div className="p-4 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-300 rounded-xl space-y-1.5 shadow-2xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded border border-blue-300">
                  Step 1 · Choose Date
                </span>
                <Calendar className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-stone-700 leading-relaxed pt-1">
                Open the official Zeffy tour calendar and select your institution’s preferred performance date.
              </p>
            </div>

            {/* Step 2: Warm Amber / Gold */}
            <div className="p-4 bg-gradient-to-br from-amber-50 to-white border-2 border-amber-300 rounded-xl space-y-1.5 shadow-2xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded border border-amber-300">
                  Step 2 · Apply Code RSVP
                </span>
                <Ticket className="w-4 h-4 text-amber-600" />
              </div>
              <p className="text-stone-700 leading-relaxed pt-1">
                Enter promo code <strong className="font-mono text-stone-900 bg-amber-100 px-1.5 py-0.5 border border-amber-300 rounded font-bold">RSVP</strong> to reserve today with zero upfront cost.
              </p>
            </div>

            {/* Step 3: Vibrant Emerald */}
            <div className="p-4 bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-300 rounded-xl space-y-1.5 shadow-2xs hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                  Step 3 · Office Follow-Up
                </span>
                <Mail className="w-4 h-4 text-emerald-600" />
              </div>
              <p className="text-stone-700 leading-relaxed pt-1">
                Teatro for the Soul Inc contacts your office to coordinate W-9 paperwork and district purchase orders.
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
                className="btn-primary-wine text-sm py-3 px-6 flex items-center justify-center gap-2 w-full sm:w-auto shadow-md font-bold"
              >
                <Ticket className="w-4 h-4 text-amber-300" />
                <span>Go to Zeffy Ticketing Portal</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-90" />
              </a>

              <button
                type="button"
                onClick={handleCopyCode}
                className="btn-gold-accent text-xs py-3 px-4.5 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer font-bold shadow-md"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-800" />
                    <span className="text-emerald-900 font-bold">RSVP Code Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-amber-900" />
                    <span>Copy Promo Code: RSVP</span>
                  </>
                )}
              </button>
            </div>

            <span className="text-[11px] font-mono text-stone-700 font-bold text-center sm:text-right bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              Direct Link: zeffy.com/en-US/ticketing/don-quijote-en-usa
            </span>
          </div>

        </div>

        {/* Administrative Coordination & Company Credentials in Colorful Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Contact Card */}
          <div className="p-6 bg-gradient-to-br from-amber-50/90 via-white to-rose-50/80 border-2 border-amber-300 rounded-2xl space-y-4 shadow-sm ring-1 ring-amber-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#9E1B32] to-[#B91C1C] text-white flex items-center justify-center font-bold shadow-xs">
                <Mail className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="font-cinzel text-base font-bold text-stone-900">
                  Official Administrative Contact
                </h3>
                <p className="text-[11px] font-sans text-stone-600">
                  Direct inquiries, invoices, and district vendor packets
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs font-sans text-stone-800 pt-1">
              
              {/* Primary Email */}
              <div className="p-3 bg-white border-2 border-[#9E1B32]/30 rounded-xl shadow-2xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-stone-900 block text-xs">Official Email Address:</span>
                  <a href={`mailto:${officialEmail}`} className="font-bold text-[#9E1B32] hover:underline font-mono text-sm">
                    {officialEmail}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-outline-refined text-xs py-1.5 px-3 flex items-center gap-1 font-bold"
                  title="Copy official email"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Official Web Domain */}
              <div className="p-3 bg-white border border-amber-200 rounded-xl shadow-2xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-stone-900 block">Official Web Domain:</span>
                  <a
                    href="https://www.donquijoteenusa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-stone-900 hover:text-[#9E1B32] flex items-center gap-1.5 font-mono text-xs"
                  >
                    <span>www.donquijoteenusa.com</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* District Vendor Verification Card */}
          <div className="p-6 bg-gradient-to-br from-emerald-50/90 via-white to-blue-50/80 border-2 border-emerald-300 rounded-2xl space-y-4 shadow-sm ring-1 ring-emerald-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center font-bold shadow-xs">
                <ShieldCheck className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="font-cinzel text-base font-bold text-stone-900">
                  Institutional Vendor Information
                </h3>
                <p className="text-[11px] font-sans text-stone-600">
                  Registered non-profit &amp; educational arts entity
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs font-sans text-stone-800 pt-1">
              <div className="p-3 bg-white border border-emerald-200 rounded-xl flex items-center justify-between shadow-2xs">
                <div>
                  <span className="font-bold text-stone-900 block">Legal Entity Name:</span>
                  <span className="text-sm font-cinzel font-bold text-[#9E1B32]">Teatro for the Soul Inc</span>
                </div>
              </div>

              <div className="p-3 bg-white border border-emerald-200 rounded-xl flex items-center justify-between shadow-2xs">
                <div>
                  <span className="font-bold text-stone-900 block">Employer Identification Number (EIN):</span>
                  <span className="text-[10px] text-stone-500">For school district purchase orders &amp; W-9 forms</span>
                </div>
                <span className="font-mono font-bold text-emerald-950 bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-300 shadow-2xs text-sm">
                  81-4825762
                </span>
              </div>

              <div className="p-2.5 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl text-[11px] text-emerald-950 flex items-center gap-2 border border-emerald-300">
                <Building2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>We furnish complete W-9 forms, vendor registration packets, and invoices.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
