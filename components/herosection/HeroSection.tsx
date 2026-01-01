"use client";

import Image from "next/image";
import ButtonWave from "../ButtonWave";
import SimpleSlider from "@components/carousel-slider/SimpleSlider";

const HeroSection: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-accent-5 via-white to-accent-1 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/Bg1.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative container mx-auto px-8 lg:px-16 xl:px-20 min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 pt-24 lg:pt-32">
            <div className="flex flex-col justify-center space-y-8 py-12">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-primary tracking-tight leading-tight">
                  Discover Amazing
                  <span className="block text-secondary">Keychains</span>
                </h1>
                <p className="text-lg lg:text-xl xl:text-2xl text-secondary font-opensans font-normal max-w-2xl leading-relaxed">
                  Premium and custom keychains crafted with excellence for everyone.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={scrollToProducts}>
                  <ButtonWave title="Explore Products" />
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-opensans font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
              
              <div className="pt-8 space-y-4">
                <h3 className="text-xl font-playfair font-semibold text-primary">About EVA KEY</h3>
                <p className="text-base lg:text-lg text-secondary font-opensans leading-relaxed max-w-xl">
                  We&apos;re a global keychain company providing high-quality, custom keychains to customers worldwide. 
                  Our commitment to excellence and innovation sets us apart in the industry.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center items-center w-full lg:pl-12 xl:pl-16">
              <div className="w-full max-w-[600px] relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-1 to-accent-2 rounded-3xl opacity-30 blur-xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <SimpleSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative px-8 lg:px-16 xl:px-20 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-2xl lg:text-3xl font-playfair font-bold text-primary mb-4">
              Brands That Trust Us
            </h3>
            <p className="text-lg text-secondary font-opensans max-w-2xl mx-auto">
              We&apos;ve earned the trust of leading brands worldwide through our commitment to quality and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 justify-items-center">
            <div className="relative h-24 w-24 lg:h-28 lg:w-28 group">
              <Image
                src="/assets/ipl.jpg"
                alt="IPL Brand"
                fill
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
              />
            </div>
            <div className="relative h-24 w-24 lg:h-28 lg:w-28 group">
              <Image
                src="/assets/abs.jpg"
                alt="ABS Brand"
                fill
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
              />
            </div>
            <div className="relative h-24 w-24 lg:h-28 lg:w-28 group">
              <Image
                src="/assets/f1.png"
                alt="F1 Brand"
                fill
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
              />
            </div>
            <div className="relative h-24 w-24 lg:h-28 lg:w-28 group">
              <Image
                src="/assets/hdfc.png"
                alt="HDFC Brand"
                fill
                className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-secondary to-transparent bottom-0 left-0"></div>
      </div>
    </>
  );
};

export default HeroSection;

