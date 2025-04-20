import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroImages = [
    'https://cdn.pixabay.com/photo/2017/08/06/06/25/ballet-2589488_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/05/03/22/04/ballerina-3372266_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/07/02/10/22/dance-828718_1280.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const aboutPosition = aboutSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: aboutPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div className="carousel relative h-full">
        <div
          className="carousel-item active bg-cover bg-center h-full"
          style={{
            backgroundColor: '#F8F0E9',
            backgroundImage: 'linear-gradient(to bottom, #8B7355, #F8F0E9)',
            opacity: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl" data-aos="fade-up" data-aos-delay="200">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            Houston Professional Ballet Instructor
          </h1>
          <p className="text-white text-lg md:text-xl opacity-90 mb-8" data-aos="fade-up" data-aos-delay="400">
            Bringing 20 years of experience to aspiring dancers of all ages
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-[#8B7355] hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-sm transition-all duration-300"
            data-aos="fade-up" 
            data-aos-delay="600"
          >
            Book Your Free Trial
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToAbout(); }} className="text-white animate-bounce">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
