
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PricingSection } from '../components/PricingSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { SupportSection } from '../components/SupportSection';
import { PerformanceSection } from '../components/PerformanceSection';
import { SpeedSection } from '../components/SpeedSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <SupportSection />
      <PerformanceSection />
      <SpeedSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
