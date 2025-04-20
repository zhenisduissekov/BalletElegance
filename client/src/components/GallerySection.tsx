import React from 'react';
import ScrollReveal from './ScrollReveal';

const GallerySection: React.FC = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1554559731-1f6bd5dc1ee3?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      alt: "Ballet class"
    },
    {
      src: "https://images.unsplash.com/photo-1564710925690-c863a69af44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      alt: "Performance"
    },
    {
      src: "https://images.unsplash.com/photo-1544646290-25c51816c6ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      alt: "Ballet technique"
    },
    {
      src: "https://images.unsplash.com/photo-1627872656086-815fc8ecfc1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      alt: "Dance instruction"
    },
    {
      src: "https://images.unsplash.com/photo-1615788139008-bc90e6a3a860?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      alt: "Ballet rehearsal"
    },
    {
      src: "https://images.unsplash.com/photo-1551339182-8a3d448be6f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      alt: "Ballet performance"
    }
  ];

  return (
    <section id="gallery" className="py-20 md:py-24">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="section-title">Gallery</h2>
            <div className="section-divider"></div>
            <p className="text-lg leading-relaxed">
              Moments from classes, performances, and student achievements
            </p>
          </ScrollReveal>
          
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-sm">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover gallery-image"
                  loading="lazy"
                />
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
