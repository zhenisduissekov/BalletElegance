import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroImages = [
    'https://images.unsplash.com/photo-1592441097689-0674c694581e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1578311013653-9a058a5a8695?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
    'https://images.unsplash.com/photo-1516741247836-f66a24178c9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80'
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
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? 'active' : ''} bg-cover bg-center h-full`}
            style={{
              backgroundImage: `url(${image})`,
              opacity: index === activeIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
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
