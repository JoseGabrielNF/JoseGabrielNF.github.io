import React from 'react';
import Navigation from '../molecules/Navigation';
import HeroSection from '../organisms/HeroSection';
import AboutSection from '../organisms/AboutSection';
import ScheduleSection from '../organisms/ScheduleSection';
import SpeakersSection from '../organisms/SpeakersSection';
import PartnersSection from '../organisms/PartnersSection';
import LocationSection from '../organisms/LocationSection';
import Footer from '../organisms/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeakersSection />
        <ScheduleSection />
        <LocationSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
