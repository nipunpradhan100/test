import HeroSection from "@/components/home/HeroSection";
import CoreFeaturesSection from "@/components/home/CoreFeaturesSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import TestimonialsAndCtaSection from "@/components/home/TestimonialsAndCtaSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CoreFeaturesSection />
      <SocialProofSection />
      <TestimonialsAndCtaSection />
    </main>
  );
}