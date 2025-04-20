import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ClassesSection from '@/components/ClassesSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Set page title
    document.title = "SOPHIA.DANCE | Houston Professional Ballet Instructor";
    
    // Check for URL hash and scroll to the section if present
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        setTimeout(() => {
          window.scrollTo({
            top: elementPosition - headerHeight,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="font-montserrat text-[#333333] bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
