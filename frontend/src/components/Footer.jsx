import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Precious Celebrations</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              World-renowned for planning and designing unforgettable luxury celebrations.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm tracking-widest mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <a href="#offerings" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Weddings
                </a>
              </li>
              <li>
                <a href="#offerings" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Brand Experiences
                </a>
              </li>
              <li>
                <a href="#offerings" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Celebrations
                </a>
              </li>
              <li>
                <a href="#offerings" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Gifting
                </a>
              </li>
              <li>
                <a href="#masterclass" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Masterclass
                </a>
              </li>
              <li>
                <a href="#media" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Media
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm tracking-widest mb-4 uppercase">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Johannesburg, South Africa</li>
              <li>info@preciouscelebrations.co.za</li>
              <li>+27 (0) 123 456 789</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Precious Celebrations. All rights reserved.
          </p>
          <a 
            href="#top" 
            className="inline-block mt-4 text-gray-400 hover:text-white transition-colors duration-200 text-sm tracking-wider"
          >
            BACK TO TOP
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;