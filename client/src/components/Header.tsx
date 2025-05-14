import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useLocation } from 'wouter';
import { FaBars } from 'react-icons/fa';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed w-full bg-white bg-opacity-95 shadow-sm z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        {/*<Link href="/" className="flex items-center">*/}
        {/*  <h1 className="font-playfair text-2xl font-medium text-black tracking-wider">SOPHIA.DANCE</h1>*/}
        {/*</Link>*/}

        <Link href="/" className="flex items-center space-x-2">
          {/*<img src="/images/logo2.jpeg" alt="Logo" className="h-8 w-auto" />*/}
          <h1 className="font-playfair text-2xl font-medium text-black tracking-wider">SOPHIA.DANCE</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#about" onClick={() => scrollToSection('about')} className="nav-link">About</a></li>
            <li><a href="#classes" onClick={() => scrollToSection('classes')} className="nav-link">Classes</a></li>
            {/*<li><a href="#gallery" onClick={() => scrollToSection('gallery')} className="nav-link">Gallery</a></li>*/}
            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); closeMenu(); }} className="nav-link">Testimonials</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">Contact</a></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <FaBars className="text-xl" />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container-custom py-4">
          <ul className="space-y-4">
            <li><a href="#about" onClick={() => scrollToSection('about')} className="block text-black hover:text-[#8B7355] transition-colors duration-300">About</a></li>
            <li><a href="#classes" onClick={() => scrollToSection('classes')} className="block text-black hover:text-[#8B7355] transition-colors duration-300">Classes</a></li>
            {/*<li><a href="#gallery" onClick={() => scrollToSection('gallery')} className="block text-black hover:text-[#8B7355] transition-colors duration-300">Gallery</a></li>*/}
            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' }); closeMenu(); }} className="block text-black hover:text-[#8B7355] transition-colors duration-300">Testimonials</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')} className="block text-black hover:text-[#8B7355] transition-colors duration-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
