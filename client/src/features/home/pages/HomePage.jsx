import Navbar from "@/shared/components/navigation/Navbar";
import HeroSection from "@/features/home/components/HeroSection";
import FeaturesSection from "@/features/home/components/FeaturesSection";
import HowItWorks from "@/features/home/components/HowItWorks";
import Footer from "@/shared/components/layout/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default HomePage;