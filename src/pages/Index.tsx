
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Gallery from '../components/Gallery';
import PersonalExperience from '../components/PersonalExperience';
import Legacy from '../components/Legacy';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <Gallery />
      <PersonalExperience />
      <Legacy />
    </div>
  );
};

export default Index;
