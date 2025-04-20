import React from 'react';
import ScrollReveal from './ScrollReveal';
import { FaMusic, FaAward, FaChalkboardTeacher, FaChild, FaUsers, FaShoePrints } from 'react-icons/fa';

const GallerySection: React.FC = () => {
  const galleryImages = [
    {
      src: "https://cdn.pixabay.com/photo/2018/06/04/13/37/ballet-3453817_1280.jpg",
      alt: "Ballet class"
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/07/10/17/49/ballet-2490817_1280.jpg",
      alt: "Performance"
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/06/29/01/47/ballet-3505288_1280.jpg",
      alt: "Ballet technique"
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/11/11/10/05/ballet-4617632_1280.jpg",
      alt: "Dance instruction"
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/05/04/08/34/pointe-4177505_1280.jpg", 
      alt: "Ballet rehearsal"
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/06/08/13/16/ballet-4260499_1280.jpg",
      alt: "Ballet performance"
    }
  ];

  return (
    <section id="gallery" className="py-20 md:py-24">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="section-title">Studio Highlights</h2>
            <div className="section-divider"></div>
            <p className="text-lg leading-relaxed mb-4">
              Explore our elegant studio space and the various programs we offer for dancers of all ages and skill levels.
            </p>
            <p className="text-lg leading-relaxed">
              Our modern facility features sprung floors, mirrors, barres, and climate control to ensure a safe and comfortable environment for optimal learning.
            </p>
          </ScrollReveal>
          
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="overflow-hidden rounded-sm bg-[#8B7355] p-1">
              <div className="w-full h-64 bg-[#F8F0E9] flex flex-col items-center justify-center p-6">
                <FaMusic className="text-4xl text-[#8B7355] mb-4" />
                <h3 className="font-playfair text-xl font-medium text-center">Performance</h3>
                <p className="text-sm text-center mt-2">Annual recitals at Hobby Center for the Performing Arts</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="overflow-hidden rounded-sm bg-[#8B7355] p-1">
              <div className="w-full h-64 bg-[#F8F0E9] flex flex-col items-center justify-center p-6">
                <FaAward className="text-4xl text-[#8B7355] mb-4" />
                <h3 className="font-playfair text-xl font-medium text-center">Achievements</h3>
                <p className="text-sm text-center mt-2">Students placed in YAGP and Houston Ballet Academy</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="overflow-hidden rounded-sm bg-[#8B7355] p-1">
              <div className="w-full h-64 bg-[#F8F0E9] flex flex-col items-center justify-center p-6">
                <FaChalkboardTeacher className="text-4xl text-[#8B7355] mb-4" />
                <h3 className="font-playfair text-xl font-medium text-center">Classes</h3>
                <p className="text-sm text-center mt-2">Vaganova and RAD methodology by a certified instructor</p>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="overflow-hidden rounded-sm bg-[#8B7355] p-1">
              <div className="w-full h-64 bg-[#F8F0E9] flex flex-col items-center justify-center p-6">
                <FaChild className="text-4xl text-[#8B7355] mb-4" />
                <h3 className="font-playfair text-xl font-medium text-center">Children's Ballet</h3>
                <p className="text-sm text-center mt-2">Age-appropriate classes for ages 4-12, building confidence</p>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="overflow-hidden rounded-sm bg-[#8B7355] p-1">
              <div className="w-full h-64 bg-[#F8F0E9] flex flex-col items-center justify-center p-6">
                <FaUsers className="text-4xl text-[#8B7355] mb-4" />
                <h3 className="font-playfair text-xl font-medium text-center">Adult Programs</h3>
                <p className="text-sm text-center mt-2">Beginner to advanced classes for 18+ with flexible scheduling</p>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className="overflow-hidden rounded-sm bg-[#8B7355] p-1">
              <div className="w-full h-64 bg-[#F8F0E9] flex flex-col items-center justify-center p-6">
                <FaShoePrints className="text-4xl text-[#8B7355] mb-4" />
                <h3 className="font-playfair text-xl font-medium text-center">Technique</h3>
                <p className="text-sm text-center mt-2">Master classes focusing on pointe work and pas de deux</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
