import React from 'react';
import Background from '@/components/Background';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AudienceSection from '@/components/AudienceSection';
import BusinessSection from '@/components/BusinessSection';
import RoadmapSection from '@/components/RoadmapSection';
import DevelopmentPhasesSection from '@/components/DevelopmentPhasesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-[#111111] text-white min-h-screen overflow-hidden">
      {/* Background Effect */}
      <Background />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <FeaturesSection />
        <AudienceSection />
        <BusinessSection />
        <RoadmapSection />
        <DevelopmentPhasesSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
