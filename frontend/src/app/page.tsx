import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { WelcomeSection } from "@/components/welcome-section";
import { BrandSection } from "@/components/brand-section";
import { FounderSection } from "@/components/founder-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WelcomeSection />
      <BrandSection />
      <FounderSection />
      <Footer />
    </div>
  );
}
