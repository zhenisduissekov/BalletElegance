import React from 'react';
import ScrollReveal from './ScrollReveal';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard = ({ quote, name, title }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
      <div className="flex items-center mb-4">
        <div className="flex text-[#8B7355]">
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <FaStar />
        </div>
      </div>
      <FaQuoteLeft className="text-[#8B7355] opacity-20 text-4xl mb-2" />
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
            <p className="text-lg leading-relaxed mt-6">
              Hear from students and parents who have experienced the transformative power of Sophia's instruction.
            </p>
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
            
            <TestimonialCard
              quote="The competition preparation was exceptional. Ms. Petrov's guidance on repertoire selection and coaching helped me place at YAGP regionals. Her attention to detail makes all the difference."
              name="Emma S."
              title="Pre-professional dancer, age 16"
            />
            
            <TestimonialCard
              quote="After three months of private lessons, my posture and flexibility improved dramatically. Sophia's approach combines technical precision with artistic expression in a way I've never experienced before."
              name="Michael T."
              title="Adult beginner, 8 months of training"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;