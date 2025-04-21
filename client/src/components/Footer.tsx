import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#000000] text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h2 className="font-playfair text-2xl font-medium mb-4">SOPHIA.DANCE</h2>
            <p className="text-gray-400 mb-2">Houston's Premier Ballet Academy</p>
            {/*<p className="text-gray-400 text-sm">Led by Sophia, former soloist with the Royal Ballet</p>*/}
          </div>
          
          <div>
            <h3 className="font-playfair text-lg font-medium mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:+13467191003" className="hover:text-[#8B7355]">+1 (346) 719-1003</a>
              </p>
              <p className="flex items-center">
                {/*<FaEnvelope className="mr-2" />*/}
                {/*<a href="mailto:contact@sophia.dance" className="hover:text-[#8B7355]">contact@sophia.dance</a>*/}
              </p>
              {/*<p className="text-sm mt-2">5718 Westheimer Rd, Suite 1200<br />Houston, TX 77057</p>*/}
            </div>
          </div>
          
          <div className="md:text-right">
            <h3 className="font-playfair text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-start md:justify-end mb-6">
              {/*<a href="#" className="text-white hover:text-[#8B7355] transition-colors" aria-label="Instagram">*/}
              {/*  <FaInstagram className="text-2xl" />*/}
              {/*</a>*/}
              <a href="https://www.facebook.com/sophiadancepage" className="text-white hover:text-[#8B7355] transition-colors" aria-label="Facebook">
                <FaFacebook className="text-2xl" />
              </a>
              {/*<a href="#" className="text-white hover:text-[#8B7355] transition-colors" aria-label="YouTube">*/}
              {/*  <FaYoutube className="text-2xl" />*/}
              {/*</a>*/}
            </div>
            {/*<p className="text-sm text-gray-400">*/}
              {/*Classes Monday-Friday, 8:00 AM - 12:00 PM*/}
            {/*</p>*/}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} SOPHIA.DANCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
