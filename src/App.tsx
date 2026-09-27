/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar, { ActiveTab } from './components/Navbar';
import HeroSection from './components/HeroSection';
import EventOverviewSection from './components/EventOverviewSection';
import SocialAndContactSection from './components/SocialAndContactSection';
import FooterSection from './components/FooterSection';
import FAQPage from './components/FAQPage';
import CurriculumPage from './components/CurriculumPage';
import AssemblyPlannerPage from './components/AssemblyPlannerPage';
import TeacherEmailGeneratorPage from './components/TeacherEmailGeneratorPage';
import AboutUsPage from './components/AboutUsPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  const handleNavigateTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
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
            <EventOverviewSection onNavigateTab={handleNavigateTab} />
            <SocialAndContactSection />
          </>
        )}

        {/* TAB 2: ABOUT US (BIOGRAPHIES) */}
        {activeTab === 'about' && (
          <AboutUsPage />
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
  );
}
