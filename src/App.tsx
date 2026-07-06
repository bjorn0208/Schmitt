/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetDemographics from './components/TargetDemographics';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ProfileSection from './components/ProfileSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';
import IntroSplash from './components/IntroSplash';
import FAQ from './components/FAQ';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('Planejamento Tributário');
  const [introCompleted, setIntroCompleted] = useState(false);

  // Auto scroll to top on mount when intro is active to ensure aligned viewing
  useEffect(() => {
    if (!introCompleted) {
      window.scrollTo(0, 0);
    }
  }, [introCompleted]);

  const handleOpenSchedule = (serviceName?: string) => {
    if (serviceName) {
      setDefaultService(serviceName);
    } else {
      setDefaultService('Planejamento Tributário');
    }
    setIsScheduleOpen(true);
  };

  const handleCloseSchedule = () => {
    setIsScheduleOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-law-dark text-white select-none selection:bg-law-gold selection:text-law-dark">
      {/* 0. Immersive Welcome Splash Screen (scroll-locked until completely dismissed) */}
      {!introCompleted && (
        <IntroSplash onComplete={() => setIntroCompleted(true)} />
      )}

      {/* 1. Floating Header Navbar */}
      <Header onOpenSchedule={() => handleOpenSchedule()} />

      {/* 2. Hero Section */}
      <Hero onOpenSchedule={() => handleOpenSchedule()} />

      <SectionWrapper>
        {/* 3. Target Demographics (Pra Quem É) */}
        <TargetDemographics />
      </SectionWrapper>

      <SectionWrapper>
        {/* 4. Services (Serviços Oferecidos) */}
        <Services onOpenSchedule={handleOpenSchedule} />
      </SectionWrapper>

      <SectionWrapper>
        {/* 5. Feedback / Testimonials */}
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper>
        {/* 6. Biography (Quem é Vianei Schmitt) */}
        <ProfileSection />
      </SectionWrapper>

      <SectionWrapper>
        {/* 7. FAQ Section */}
        <FAQ />
      </SectionWrapper>

      <SectionWrapper>
        {/* 8. Contact Info with statue background */}
        <ContactSection onOpenSchedule={() => handleOpenSchedule()} />
      </SectionWrapper>

      {/* 9. Corporate Footer links */}
      <Footer />

      {/* 10. Interactive Scheduling Booking System Modal */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={handleCloseSchedule}
        defaultService={defaultService}
      />
    </div>
  );
}
