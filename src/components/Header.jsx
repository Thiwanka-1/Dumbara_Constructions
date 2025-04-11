// Header.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from './logo2.png';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-16 w-auto"
              src={logo}
              alt="Dumbara Constructions"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-[#1E3A4C] hover:text-[#2392C3] transition-colors">
              Home
            </a>
            <a href="/about" className="text-[#1E3A4C] hover:text-[#2392C3] transition-colors">
              About
            </a>
            <a href="/services" className="text-[#1E3A4C] hover:text-[#2392C3] transition-colors">
              Services
            </a>
            <a href="/projects" className="text-[#1E3A4C] hover:text-[#2392C3] transition-colors">
              Projects
            </a>
            {/* <a href="/vacancies" className="text-[#1E3A4C] hover:text-[#2392C3] transition-colors">
              Vacancies
            </a> */}
            <a href="/contact" className="text-[#1E3A4C] hover:text-[#2392C3] transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-[#1E3A4C] focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block text-[#1E3A4C] hover:text-[#2392C3] px-3 py-2 rounded-md transition-colors">
              Home
            </a>
            <a href="/about" className="block text-[#1E3A4C] hover:text-[#2392C3] px-3 py-2 rounded-md transition-colors">
              About
            </a>
            <a href="/services" className="block text-[#1E3A4C] hover:text-[#2392C3] px-3 py-2 rounded-md transition-colors">
              Services
            </a>
            <a href="/projects" className="block text-[#1E3A4C] hover:text-[#2392C3] px-3 py-2 rounded-md transition-colors">
              Projects
            </a>
            {/* <a href="/vacancies" className="block text-[#1E3A4C] hover:text-[#2392C3] px-3 py-2 rounded-md transition-colors">
              Vacancies
            </a> */}
            <a href="/contact" className="block text-[#1E3A4C] hover:text-[#2392C3] px-3 py-2 rounded-md transition-colors">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
