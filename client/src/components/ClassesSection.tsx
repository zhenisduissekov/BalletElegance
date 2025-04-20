import React from 'react';
import ScrollReveal from './ScrollReveal';

interface ClassCardProps {
  title: string;
  description: string;
  fullWidth?: boolean;
}

const ClassCard: React.FC<ClassCardProps> = ({ title, description, fullWidth = false }) => {
  return (
    <div className={`bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 ${fullWidth ? 'md:col-span-2' : ''}`}>
      <h3 className="font-playfair text-xl font-medium mb-4">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="mt-auto">
        <a href="#contact" className="inline-block text-[#8B7355] font-medium hover:underline">
          Learn more <i className="fas fa-arrow-right ml-1"></i>
        </a>
      </div>
    </div>
  );
};

const ClassesSection: React.FC = () => {
  return (
    <section id="classes" className="py-20 md:py-24 bg-[#F8F0E9]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="section-title">Classes Offered</h2>
            <div className="section-divider"></div>
            <p className="text-lg leading-relaxed">
              Classes are held in the morning, lasting from 45 to 90 minutes. The first trial lesson is 30 minutes and free of charge.
            </p>
          </ScrollReveal>
          
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ClassCard
              title="Professional Ballet Training"
              description="Preparation for admission to the Houston Ballet Academy or other professional schools. Focused on developing technique, artistry, and performance skills necessary for a professional career."
            />
            
            <ClassCard
              title="Competition Preparation"
              description="Repertoire selection and preparation for participation in international competitions such as YAGP, ABC-IBC, UBC. Specialized training for current ballet artists."
            />
            
            <ClassCard
              title="Physical Development"
              description="Development of physical attributes including flexibility, stretching, jumping, and posture correction. Building the fundamental strength and capabilities needed for ballet."
            />
            
            <ClassCard
              title="Adult & Senior Ballet"
              description="Classes designed specifically for adults and seniors. Focus on proper technique, posture, flexibility, and creative expression in a supportive environment."
            />
            
            <ClassCard
              title="Dance Polishing"
              description="Mastering and polishing existing dances, whether contemporary, folk, or ballet. Refinement of technique, expression, and performance quality for prepared pieces."
              fullWidth
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
