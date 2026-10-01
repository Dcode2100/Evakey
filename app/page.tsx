import HeroSection from "@/components/herosection/HeroSection";
import ProductSection from "@/components/product-section/ProductSection";
import AboutSection from "@/components/about-section/AboutSection";
import BenefitsSection from "@/components/benefits-section/BenefitsSection";
import TestimonialsSection from "@/components/testimonials-section/TestimonialsSection";
import CategoryStrip from "@/components/home/CategoryStrip";
import HowItWorks from "@/components/home/HowItWorks";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection/>
      <CategoryStrip/>
      <ProductSection/>
      <HowItWorks/>
      <AboutSection/>
      <BenefitsSection/>
      <TestimonialsSection/>
    </div>
  );
};

export default Home;
