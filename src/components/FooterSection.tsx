/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Instagram, Globe, GraduationCap } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-[#1C1917] text-stone-400 py-12 text-xs font-sans border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-stone-800">
          
          {/* Brand & Mission Statement */}
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-xs bg-[#7A1C2C] text-white flex items-center justify-center font-cinzel font-bold text-xs">
                DQ
              </div>
              <span className="font-cinzel text-base font-bold text-white tracking-wider">
                Don Quijote en USA
              </span>
            </div>
            
            <p className="font-garamond italic text-sm text-stone-300">
              &ldquo;To change the world, my friend Sancho, is neither madness nor utopia, but justice.&rdquo; — Miguel de Cervantes Saavedra
            </p>
            
            <p className="text-[11px] text-stone-400 font-sans">
              A Live Theatrical Performance &amp; Educational Experience in Spanish · Starring Wilderman García · Produced by Teatro for the Soul
            </p>
          </div>

          {/* Direct External Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs">
            <a
              href="https://instagram.com/wildermanactor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E5C07B]" />
              <span>@wildermanactor</span>
            </a>

            <a
              href="https://instagram.com/teatroforthesoul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E5C07B]" />
              <span>@teatroforthesoul</span>
            </a>

            <a
              href="https://www.donquijoteenusa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#E5C07B]" />
              <span>donquijoteenusa.com</span>
            </a>
          </div>

        </div>

        {/* Legal, Vendor & Tour Credential Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] text-stone-500">
          <div className="flex flex-wrap items-center gap-2 font-mono">
            <span>SAM.gov UEI: <strong className="text-stone-300">FJV5QQ2QM9M8</strong></span>
            <span>·</span>
            <span>RUP PR: <strong className="text-stone-300">202561897</strong></span>
          </div>

          <div className="font-sans text-stone-400">
            Educational Theater Tour for US School Districts &amp; Higher Education Institutions · All Rights Reserved
          </div>
        </div>

      </div>
    </footer>
  );
}
