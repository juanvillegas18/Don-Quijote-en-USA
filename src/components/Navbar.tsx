/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Feather, BookOpen, Calendar, Menu, X, Sparkles, Shield, Award, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Presentación', href: '#presentacion' },
    { label: 'Objetivos Pedagógicos', href: '#objetivos' },
    { label: 'Guía de Selección', href: '#guia-formatos' },
    { label: 'Sinopsis', href: '#sinopsis' },
    { label: 'Ficha Técnica', href: '#ficha-tecnica' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#F4EEDF]/95 backdrop-blur-md shadow-md border-b-2 border-[#C89D35]/40 py-2.5' 
        : 'bg-[#FAF6EE]/90 border-b border-[#C89D35]/20 py-3.5'
    }`}>
      {/* Top domain ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Heraldic Logo & Domain */}
        <a 
          href="#" 
          className="flex items-center gap-3 group text-decoration-none"
          id="nav-logo"
        >
          <div className="w-10 h-10 rounded-sm bg-[#701A27] border border-[#C89D35] flex items-center justify-center text-[#F0D38D] shadow-inner transform transition-transform group-hover:rotate-3">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-lg sm:text-xl text-[#3B2314] tracking-wider uppercase">
                Don Quijote <span className="text-[#701A27]">en USA</span>
              </span>
              <span className="text-[10px] font-mono uppercase bg-[#C89D35]/20 text-[#701A27] px-1.5 py-0.5 rounded font-bold border border-[#C89D35]/40">
                donquijoteusa.com
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-[#6B5E55] font-serif italic tracking-wide">
              Teatro Educativo • Teatro for the Soul
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-serif font-bold text-[#3B2314] uppercase tracking-widest hover:text-[#701A27] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#701A27] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#guia-formatos"
            className="bg-[#701A27] hover:bg-[#8F2233] text-[#FAF6EE] font-serif font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-sm border border-[#C89D35] shadow-sm flex items-center gap-2 transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            id="nav-cta-btn"
          >
            <Feather className="w-3.5 h-3.5 text-[#F0D38D]" />
            <span>Seleccionar Formato</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-sm text-[#3B2314] hover:bg-[#E8DDCA] transition-colors"
          aria-label="Abrir Menú"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F4EEDF] border-b-2 border-[#C89D35] px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-serif font-bold text-[#3B2314] hover:text-[#701A27] px-3 py-2 rounded-sm hover:bg-[#E8DDCA] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#C89D35]/30">
            <a
              href="#guia-formatos"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#701A27] text-[#FAF6EE] font-serif font-bold text-xs uppercase tracking-widest py-3 rounded-sm border border-[#C89D35] flex items-center justify-center gap-2"
            >
              <Feather className="w-4 h-4 text-[#F0D38D]" />
              <span>Seleccionar Formato y Taller</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
