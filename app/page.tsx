import HeroSection from "@/components/herosection/HeroSection";
import ProductSection from "@/components/product-section/ProductSection";
import AboutSection from "@/components/about-section/AboutSection";
import BenefitsSection from "@/components/benefits-section/BenefitsSection";
import TestimonialsSection from "@/components/testimonials-section/TestimonialsSection";
import Footer from "@/components/footer/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection/>
      <ProductSection/>
      <AboutSection/>
      <BenefitsSection/>
      <TestimonialsSection/>
      <Footer/>
    </div>
  );
};

export default Home;
