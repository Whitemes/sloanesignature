import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Navigation = ({ scrolled }) => {
  const navigate = useNavigate();

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-800/95 backdrop-blur-sm shadow-lg' : 'bg-gray-800/70 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center h-16">
          <ul className="flex items-center space-x-8 text-white text-sm tracking-widest">
            <li>
              <Link
                to="/"
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              >
                HOME
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center hover:text-gray-300 transition-colors duration-200 cursor-pointer outline-none">
                  ABOUT <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem onClick={() => navigate('/about')}>
                    About Us
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/about')}>
                    Our Team
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center hover:text-gray-300 transition-colors duration-200 cursor-pointer outline-none">
                  OUR OFFERING <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>Weddings</DropdownMenuItem>
                  <DropdownMenuItem>Brand Experiences</DropdownMenuItem>
                  <DropdownMenuItem>Celebrations</DropdownMenuItem>
                  <DropdownMenuItem>Gifting</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <a
                href="#masterclass"
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              >
                MASTERCLASS
              </a>
            </li>
            <li>
              <a
                href="#media"
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              >
                MEDIA
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-300 transition-colors duration-200 cursor-pointer"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;