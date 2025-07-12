import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { SocialProofSection } from '../components/SocialProofSection';
import { PricingSection } from '../components/PricingSection';
import { ComparisonSection } from '../components/ComparisonSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GuaranteeSection } from '../components/GuaranteeSection';
import { SupportSection } from '../components/SupportSection';
import { PerformanceSection } from '../components/PerformanceSection';
import { SpeedSection } from '../components/SpeedSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { Footer } from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <div className="w-full max-w-7xl">
        <Header />
        <HeroSection />
        <PricingSection />
        <ComparisonSection />
        <SocialProofSection />
        <FeaturesSection />
        <SolutionsSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <SupportSection />
        <PerformanceSection />
        <SpeedSection />
        <FinalCTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
