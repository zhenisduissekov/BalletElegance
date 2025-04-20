import React from 'react';
import ScrollReveal from './ScrollReveal';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="section-title">About Sophia</h2>
            <div className="section-divider"></div>
            <p className="text-lg leading-relaxed">
              A professional ballet instructor with 20 years of experience offering classes for children and adults in Houston. With a background in professional ballet companies and a passion for teaching, Sophia provides personalized instruction tailored to each student's needs and goals.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <ScrollReveal className="overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80" 
                alt="Ballet instruction"
                className="w-full h-full object-cover gallery-image"
                loading="lazy"
              />
            </ScrollReveal>
            <ScrollReveal className="flex flex-col justify-center">
              <h3 className="font-playfair text-2xl font-medium mb-6">Expert Instruction</h3>
              <p className="mb-6 leading-relaxed">
                From beginners to advanced students, Sophia's teaching methodology emphasizes proper technique, artistic expression, and physical development. Classes are structured to build a solid foundation while encouraging individual creativity.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-check text-[#8B7355] mt-1.5 mr-3"></i>
                  <span>Personalized attention for each student</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#8B7355] mt-1.5 mr-3"></i>
                  <span>Age-appropriate teaching methods</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-[#8B7355] mt-1.5 mr-3"></i>
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
