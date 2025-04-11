// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import logo from './logo2.png';

const Footer = () => {
  return (
    <footer className="bg-[#1E3A4C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Logo */}
          <div className="mb-4 md:mb-0">
            <img
               src={logo}
              alt="Dumbara Constructions"
              className="h-16 w-auto"
            />
          </div>
          {/* Navigation Links */}
          <div className="flex flex-wrap space-x-6">
            <a href="/" className="hover:text-[#2392C3] transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-[#2392C3] transition-colors">
              About
            </a>
            <a href="/services" className="hover:text-[#2392C3] transition-colors">
              Services
            </a>
            <a href="/projects" className="hover:text-[#2392C3] transition-colors">
              Projects
            </a>
            {/* <a href="/vacancies" className="hover:text-[#2392C3] transition-colors">
              Vacancies
            </a> */}
            <a href="/contact" className="hover:text-[#2392C3] transition-colors">
              Contact
            </a>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-[#2392C3] transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#2392C3] transition-colors">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#2392C3] transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-sm">
          &copy; {new Date().getFullYear()} Dumbara Constructions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
