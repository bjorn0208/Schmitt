/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TargetDemographics from './components/TargetDemographics';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ProfileSection from './components/ProfileSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScheduleModal from './components/ScheduleModal';

export default function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('Planejamento Tributário');

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
      {/* 1. Floating Header Navbar */}
      <Header onOpenSchedule={() => handleOpenSchedule()} />

      {/* 2. Hero Section */}
      <Hero onOpenSchedule={() => handleOpenSchedule()} />

      {/* 3. Target Demographics (Pra Quem É) */}
      <TargetDemographics />

      {/* 4. Services (Serviços Oferecidos) */}
      <Services onOpenSchedule={handleOpenSchedule} />

      {/* 5. Feedback / Testimonials */}
      <Testimonials />

      {/* 6. Biography (Quem é Vianei Schmitt) */}
      <ProfileSection />

      {/* 7. Contact Info with statue background */}
      <ContactSection onOpenSchedule={() => handleOpenSchedule()} />

      {/* 8. Corporate Footer links */}
      <Footer />

      {/* 9. Interactive Scheduling Booking System Modal */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={handleCloseSchedule}
        defaultService={defaultService}
      />
    </div>
  );
}
