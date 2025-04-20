import React from 'react';
import ScrollReveal from './ScrollReveal';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard = ({ quote, name, title }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
      <div className="flex items-center mb-4">
        <div className="text-[#8B7355]">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
      <p className="italic mb-6">{quote}</p>
      <div className="font-medium">
        <span className="text-[#8B7355]">{name}</span> — {title}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-[#F8F0E9]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="section-title">Student Testimonials</h2>
            <div className="section-divider"></div>
          </ScrollReveal>
          
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="My daughter has blossomed under Sophia's instruction. Her technique has improved dramatically, and she gained the confidence to audition for Houston Ballet Academy."
              name="Lisa M."
              title="Parent of professional track student"
            />
            
            <TestimonialCard
              quote="As a senior starting ballet for the first time, I was nervous. Sophia created a welcoming environment where I could learn at my own pace while still being challenged."
              name="Robert J."
              title="Adult ballet student"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;