import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { KeyBenefits } from './components/KeyBenefits';
import { FeatureGrid } from './components/FeatureGrid';
import { HowItWorks } from './components/HowItWorks';
import { DashboardCarousel } from './components/DashboardCarousel';
import { MarketplacePreview } from './components/MarketplacePreview';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTAStrip } from './components/CTAStrip';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero onDemoClick={() => setDemoModalOpen(true)} />
      <TrustedBy />
      <KeyBenefits />
      <FeatureGrid />
      <HowItWorks />
      <DashboardCarousel />
      <MarketplacePreview />
      <SocialProof />
      <Pricing />
      <FAQ />
      <CTAStrip />
      <Footer />
      
      <DemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
      <Toaster />
    </div>
  );
}
