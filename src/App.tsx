/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar, { ActiveTab } from './components/Navbar';
import HeroSection from './components/HeroSection';
import StageGallerySection from './components/StageGallerySection';
import EventOverviewSection from './components/EventOverviewSection';
import SocialAndContactSection from './components/SocialAndContactSection';
import FooterSection from './components/FooterSection';
import FAQPage from './components/FAQPage';
import CurriculumPage from './components/CurriculumPage';
import AssemblyPlannerPage from './components/AssemblyPlannerPage';
import TeacherEmailGeneratorPage from './components/TeacherEmailGeneratorPage';
import AboutUsPage from './components/AboutUsPage';
import CorporateTheatrePage from './components/CorporateTheatrePage';
import PressCoveragePage from './components/PressCoveragePage';
import TourMapPage from './components/TourMapPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  const handleNavigateTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FCF9F2] text-stone-900 font-sans selection:bg-[#9E1B32] selection:text-white flex flex-col antialiased">
        
        {/* 1. Header with Tab Navigation & Direct Zeffy Reservation */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleNavigateTab}
        />

        <main className="grow">
          {/* TAB 1: THE SHOW (Streamlined, Effective Landing Page) */}
          {activeTab === 'home' && (
            <>
              <HeroSection onNavigateTab={handleNavigateTab} />
              <StageGallerySection />
              <EventOverviewSection onNavigateTab={handleNavigateTab} />
            </>
          )}

          {/* TAB 2: ABOUT US (BIOGRAPHIES) */}
          {activeTab === 'about' && (
            <AboutUsPage />
          )}

          {/* TAB 2-TOUR: NATIONAL TOUR MAP (+30 SCHOOLS · 6 STATES) */}
          {activeTab === 'tour' && (
            <TourMapPage onNavigateTab={handleNavigateTab} />
          )}

          {/* TAB 2B: DON QUIJOTE EN USA FOR BUSINESS (CORPORATE THEATRE) */}
          {activeTab === 'business' && (
            <CorporateTheatrePage />
          )}

          {/* TAB 2C: PRESS COVERAGE (EL NUEVO DIA & VIDEOS) */}
          {activeTab === 'press' && (
            <PressCoveragePage />
          )}

          {/* TAB 3: STANDARDS & AP CURRICULUM */}
          {activeTab === 'standards' && (
            <CurriculumPage />
          )}

          {/* TAB 4: ASSEMBLY PLANNER & PROPOSAL GENERATOR */}
          {activeTab === 'planner' && (
            <AssemblyPlannerPage />
          )}

          {/* TAB 5: FREQUENTLY ASKED QUESTIONS (DEDICATED PAGE) */}
          {activeTab === 'faq' && (
            <FAQPage />
          )}

          {/* TAB 6: GENERADOR DE EMAIL PARA PROFESORES (LEADS) */}
          {activeTab === 'email-generator' && (
            <TeacherEmailGeneratorPage />
          )}

          {/* TAB 7: OFFICIAL BOOKING & VENDOR INFO (EIN) */}
          {activeTab === 'contact' && (
            <div className="pt-16">
              <SocialAndContactSection />
            </div>
          )}
        </main>

        {/* 2. Spanish Golden Age Dignified Footer */}
        <FooterSection />

      </div>
    </LanguageProvider>
  );
}
