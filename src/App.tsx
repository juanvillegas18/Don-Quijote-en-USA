/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechnicalSpecsSection from './components/TechnicalSpecsSection';
import AcademicObjectivesSection from './components/AcademicObjectivesSection';
import InteractiveEducatorGuide from './components/InteractiveEducatorGuide';
import SynopsisSection from './components/SynopsisSection';
import FooterSection from './components/FooterSection';
import DossierModal from './components/DossierModal';
import { BookingFormState } from './types';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormState | null>(null);

  const handleGenerateProposal = (data: BookingFormState) => {
    setSubmittedData(data);
    setModalOpen(true);
  };

  const handleScrollToBooking = () => {
    const el = document.getElementById('guia-formatos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#2C241D] font-sans selection:bg-[#701A27] selection:text-[#FAF6EE] flex flex-col">
      
      {/* Top Fixed Header with Domain Branding */}
      <Navbar onOpenBooking={handleScrollToBooking} />

      {/* Main Page Sections */}
      <main className="grow">
        
        {/* 1. Header / Encabezado Principal */}
        <HeroSection onExploreSelection={handleScrollToBooking} />

        {/* 2. Sección de Presentación / Ficha Técnica (Gabriel Villegas, Wilderman García, Teatro for the Soul) */}
        <TechnicalSpecsSection />

        {/* 3. Sección de Objetivos Académicos (4 Pilares Pedagógicos alineados) */}
        <AcademicObjectivesSection />

        {/* 4. Sección Interactiva: Guía de Selección para Educadores (Paso 1: Formato, Paso 2: Taller) */}
        <InteractiveEducatorGuide onGenerateProposal={handleGenerateProposal} />

        {/* 5. Sección de Sinopsis (Cuerpo Central - La Galatea 2da parte, Cenizas, Viaje temporal al siglo XXI en USA) */}
        <SynopsisSection />

      </main>

      {/* 6. Footer / Pie de Página */}
      <FooterSection />

      {/* Printable / Downloadable Academic Proposal Modal */}
      <DossierModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={submittedData}
      />

    </div>
  );
}
