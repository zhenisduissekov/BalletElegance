import React from 'react';
import ScrollReveal from './ScrollReveal';
import { FaStar, FaCheck } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="section-title">About Sophia Petrov</h2>
            <div className="section-divider"></div>
            <p className="text-lg leading-relaxed mb-4">
              A former Royal Ballet soloist with over 20 years of professional experience, Sophia Petrov brings world-class ballet instruction to Houston. Her distinguished career includes performances across Europe and North America before transitioning to teaching in 2010.
            </p>
            <p className="text-lg leading-relaxed">
              With certifications in the Vaganova and Royal Academy of Dance methodologies, Sophia offers comprehensive training that combines technical precision with artistic development, preparing students for both recreational enjoyment and professional careers.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <ScrollReveal className="overflow-hidden rounded-sm bg-[#8B7355] p-1">
              <div 
                className="w-full h-64 rounded-sm bg-[#F8F0E9] flex flex-col items-center justify-center p-6"
              >
                <FaStar className="text-4xl text-[#8B7355] mb-4" />
                <h3 className="font-playfair text-xl font-medium text-center">Ballet Excellence</h3>
                <p className="text-sm text-center mt-2">Disciplined Training • Artistic Expression</p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="flex flex-col justify-center">
              <h3 className="font-playfair text-2xl font-medium mb-6">Expert Instruction</h3>
              <p className="mb-6 leading-relaxed">
                From beginners to advanced students, Sophia's teaching methodology emphasizes proper technique, artistic expression, and physical development. Classes are structured to build a solid foundation while encouraging individual creativity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaCheck className="text-[#8B7355] mt-1.5 mr-3" />
                  <span>Personalized attention for each student</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-[#8B7355] mt-1.5 mr-3" />
                  <span>Age-appropriate teaching methods</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-[#8B7355] mt-1.5 mr-3" />
                  <span>Focus on both technique and artistic expression</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
