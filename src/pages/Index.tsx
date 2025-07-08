
import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { UrgencySection } from '../components/UrgencySection';
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
import { Header } from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <UrgencySection />
      <SocialProofSection />
      <PricingSection />
      <ComparisonSection />
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
  );
};

export default Index;
