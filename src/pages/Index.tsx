import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import PerformanceSection from '@/components/PerformanceSection';
import ScalingSection from '@/components/ScalingSection';
import BenchmarksSection from '@/components/BenchmarksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import UseCasesSection from '@/components/UseCasesSection';
import VisionSection from '@/components/VisionSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <PerformanceSection />
        <ScalingSection />
        <BenchmarksSection />
        <TestimonialsSection />
        <UseCasesSection />
        <VisionSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
