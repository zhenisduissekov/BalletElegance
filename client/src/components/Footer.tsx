import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="font-playfair text-2xl font-medium mb-2">SOPHIA.DANCE</h2>
            <p className="text-gray-400">Houston Professional Ballet Instructor</p>
          </div>
          <div className="text-center md:text-right">
            <div className="flex space-x-4 justify-center md:justify-end mb-4">
              <a href="#" className="text-white hover:text-[#8B7355] transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-[#8B7355] transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook text-lg"></i>
              </a>
              <a href="#" className="text-white hover:text-[#8B7355] transition-colors" aria-label="YouTube">
                <i className="fab fa-youtube text-lg"></i>
              </a>
            </div>
            <p className="text-sm text-gray-400">
              &copy; {currentYear} SOPHIA.DANCE. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
