import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { WelcomeSection } from "@/components/welcome-section";
import { BrandSection } from "@/components/brand-section";
import { FounderSection } from "@/components/founder-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StorySection />
      <WelcomeSection />
      <BrandSection />
      <FounderSection />
      <Footer />
    </div>
  );
}
