// Home.jsx
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

import {
  FaTools,
  FaHammer,
  FaBuilding,
  FaTruck,
  FaCheckCircle,
  FaShieldAlt,
  FaUsers,
} from 'react-icons/fa';
import { FaHardHat, FaUserShield, FaHandshake , FaUserTie, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Home = () => {
  // -------------------------------
  // Testimonial Slider Setup
  // -------------------------------
  const testimonialsData  = [
    {
      quote:
        "Far far away, behind the word mountains, there live the blind texts. Separated they live in Bookmarksgrove.",
      author: "Jeff Freshman",
      role: "CEO, Example Company",
    },
    {
      quote:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      author: "Anna Johnson",
      role: "CTO, Another Company",
    },
    {
      quote:
        "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.",
      author: "Mark Spencer",
      role: "Project Manager, Some Company",
    },
  ];

  const projects = [
    {
      id: 1,
      image: 'https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?t=st=1744371601~exp=1744375201~hmac=94d3cb2abd1dafc756327c17264ad91eb268158d8441f0c6ce3881d775b8f10f&w=1060',
      category: 'Building',
      title: 'Building a Condominium',
      location: 'San Francisco, California, USA',
    },
    {
      id: 2,
      image: 'https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?t=st=1744371601~exp=1744375201~hmac=94d3cb2abd1dafc756327c17264ad91eb268158d8441f0c6ce3881d775b8f10f&w=1060',
      category: 'Construction',
      title: 'Modern Office Complex',
      location: 'Los Angeles, California, USA',
    },
    {
      id: 3,
      image: 'https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?t=st=1744371601~exp=1744375201~hmac=94d3cb2abd1dafc756327c17264ad91eb268158d8441f0c6ce3881d775b8f10f&w=1060',
      category: 'Renovation',
      title: 'Historic Mansion Renovation',
      location: 'Boston, Massachusetts, USA',
    },
    // Add more projects here:
    // { id: 4, image: '/path/to/project4.jpg', category: 'Building', title: 'Project Title 4', location: 'Location 4' },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar & Header */}
      

      <main className="flex-grow">
        {/* ======================================
            Hero / Upper Section
        ====================================== */}
        <section className="relative bg-gradient-to-r from-[#2392C3] to-[#30B94F] h-[700px] flex items-center justify-center">
          {/* Optional overlay for visual depth */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              We Build Great Projects
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
              From concept to completion, our dedicated team brings your vision to life with quality, precision, and passion.
            </p>
            <div className="mt-8 space-x-4">
              <a
                href="#services"
                className="inline-block bg-white text-[#1E3A4C] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
              >
                Our Services
              </a>
              <a
                href="/projects"
                className="inline-block border border-white text-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-[#1E3A4C] transition"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>
{/* ======================================
      Why Choose Us Section
====================================== */}
<section className="relative z-10 -mt-20 mb-12 px-4 md:px-8">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-[#1E3A4C] text-white p-6 rounded-md shadow-lg flex flex-col items-start">
      <div className="bg-[#2392C3] p-3 rounded-full mb-4">
        <FaHardHat className="text-white text-2xl" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Quality Construction</h3>
      <p className="text-sm text-gray-300">
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-[#2392C3] text-white p-6 rounded-md shadow-lg flex flex-col items-start">
      <div className="bg-[#1E3A4C] p-3 rounded-full mb-4">
        <FaUserShield className="text-white text-2xl" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Professional Liability</h3>
      <p className="text-sm text-white">
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-[#1E3A4C] text-white p-6 rounded-md shadow-lg flex flex-col items-start">
      <div className="bg-[#2392C3] p-3 rounded-full mb-4">
        <FaHandshake className="text-white text-2xl" />
      </div>
      <h3 className="text-lg font-semibold mb-2">Dedicated To Our Clients</h3>
      <p className="text-sm text-gray-300">
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
      </p>
    </div>
  </div>
</section>


        {/* ======================================
            About Us Section (Improved)
        ====================================== */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Image Block */}
            <div className="order-2 md:order-1">
              <img
                src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?t=st=1744371601~exp=1744375201~hmac=94d3cb2abd1dafc756327c17264ad91eb268158d8441f0c6ce3881d775b8f10f&w=1060"
                alt="About Us"
                className="w-full rounded-md shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Text Block */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#1E3A4C] mb-4">
                Who We Are
              </h2>
              <p className="text-gray-700 mb-4">
                With decades of experience in the construction industry, Dumbara Constructions is dedicated to delivering excellence. Our experienced professionals work closely with clients to ensure every project is a success.
              </p>
              <p className="text-gray-700">
                We combine innovation with a commitment to quality, safety, and sustainability. Our portfolio showcases a wide range of projects, from residential complexes to large-scale industrial facilities.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================
    Services Section (Screenshot-like)
====================================== */}
<section id="services" className="py-16 bg-white px-4 md:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[#1E3A4C]">Our Services</h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        We offer comprehensive solutions tailored to your needs. From design and renovation 
        to full-scale construction, our services cover it all.
      </p>
    </div>

    <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1: Architecture */}
      <div className="group relative bg-white border border-gray-200 rounded shadow hover:shadow-xl transition overflow-hidden">
        {/* Top Image */}
        <div className="relative w-full h-48">
          <img
            src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?t=st=1744371601~exp=1744375201~hmac=94d3cb2abd1dafc756327c17264ad91eb268158d8441f0c6ce3881d775b8f10f&w=1060"
            alt="Architecture"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Icon Circle */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#2392C3] group-hover:bg-[#1E3A4C] transition-colors">
              <FaTools className="text-white text-2xl" />
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div className="mt-10 pb-6 px-4 text-center">
          <h3 className="text-xl font-semibold text-[#1E3A4C]">Architecture</h3>
          <p className="mt-2 text-gray-600">
            Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia.
          </p>
        </div>
      </div>

      {/* Card 2: Renovation */}
      <div className="group relative bg-white border border-gray-200 rounded shadow hover:shadow-xl transition overflow-hidden">
        {/* Top Image */}
        <div className="relative w-full h-48">
          <img
            src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?t=st=1744371601~exp=1744375201~hmac=94d3cb2abd1dafc756327c17264ad91eb268158d8441f0c6ce3881d775b8f10f&w=1060"
            alt="Renovation"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Icon Circle */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#2392C3] group-hover:bg-[#1E3A4C] transition-colors">
              <FaBuilding className="text-white text-2xl" />
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div className="mt-10 pb-6 px-4 text-center">
          <h3 className="text-xl font-semibold text-[#1E3A4C]">Renovation</h3>
          <p className="mt-2 text-gray-600">
            Modernizing spaces with precision and style, 
            while preserving their unique character.
          </p>
        </div>
      </div>

      {/* Card 3: Construction */}
      <div className="group relative bg-white border border-gray-200 rounded shadow hover:shadow-xl transition overflow-hidden">
        {/* Top Image */}
        <div className="relative w-full h-48">
          <img
            src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?t=st=1744371601~exp=1744375201~hmac=94d3cb2abd1dafc756327c17264ad91eb268158d8441f0c6ce3881d775b8f10f&w=1060"
            alt="Construction"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Icon Circle */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#2392C3] group-hover:bg-[#1E3A4C] transition-colors">
              <FaHammer className="text-white text-2xl" />
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div className="mt-10 pb-6 px-4 text-center">
          <h3 className="text-xl font-semibold text-[#1E3A4C]">Construction</h3>
          <p className="mt-2 text-gray-600">
            Delivering high-quality builds on time and 
            on budget, from foundations to finishing touches.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


     {/* ======================================
    Stats Section - Industrial Services Split Layout
====================================== */}
<section className="py-28 md:pb-10 md:pt-10 mb-32 lg:mb-1 lg:py-10 bg-white sm:pb-72">
  <div className="max-w-screen mx-auto grid md:grid-cols-2  items-center h-[500px]">
    
    {/* Left Text Section */}
    <div className="bg-[#1E3A4C] text-white p-8 h-full flex flex-col justify-center  ">
      <p className="text-sm uppercase tracking-wider text-[#30B94F] font-semibold lg:ml-96">
        Wilcon A Construction Company
      </p>
      <h2 className="text-3xl font-bold mt-2 leading-tight text-white lg:ml-96">
        Best Provider for Industrial Services
      </h2>
      <p className="mt-4 text-[#2392C3] font-medium lg:ml-96">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
        there live the blind texts.
      </p>
      <p className="mt-4 text-gray-200 lg:ml-96">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of 
        the Semantics, a large language ocean.
      </p>
    </div>

    {/* Right Image with Stats Overlay */}
    <div className="relative">
      <img 
        src="https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?t=st=1744371601~exp=1744375201~hmac=94d3cb2abd1dafc756327c17264ad91eb268158d8441f0c6ce3881d775b8f10f&w=900" 
        alt="Construction Work" 
        className="w-full sm:h-[500px]  object-cover"
      />
      {/* Stats Overlay #1 */}
      <div className="absolute lg:top-40 top-40 bg-[#2392C3] text-white p-6  shadow-lg lg:w-72 w-60 left-0 md:left-0 lg:lft-0 sm:left-0 ">
        <div className="flex items-center space-x-4 lg:ml-6 ">
          <FaHardHat className="text-3xl" />
          <div>
            <h3 className="text-2xl font-bold">
              <CountUp end={48000} duration={2.5} separator="," />
            </h3>
            <p className="text-sm uppercase">Projects Completed</p>
          </div>
        </div>
      </div>
      {/* Stats Overlay #2 */}
      <div className="absolute lg:top-64 top-64  bg-white text-[#1E3A4C] p-6  shadow-lg lg:w-72 w-60 left-0 md:left-0 lg:lft-0 sm:left-0 ">
        <div className="flex items-center space-x-4 lg:ml-6">
          <FaUserTie className="text-3xl text-[#2392C3]" />
          <div>
            <h3 className="text-2xl font-bold">
              <CountUp end={54900} duration={2.5} separator="," />
            </h3>
            <p className="text-sm uppercase text-gray-700">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




        {/* ======================================
            Projects Section
        ====================================== */}
        <section className="py-16 bg-gray-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1E3A4C]">
          Our Global Work Industries
        </h2>
        <p className="mt-4 text-gray-600">
          Explore a sample of our most recent and remarkable projects.
        </p>
        <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4">
                <span className="inline-block bg-[#2392C3] text-white text-xs px-2 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[#1E3A4C]">
                  {project.title}
                </h3>
                <p className="mt-1 text-gray-600">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* ======================================
            Testimonial Section (Slider)
        ====================================== */}
        <section className="py-16 h-[500px] w-full">
      <div className="max-w-screen mx-auto flex flex-col md:flex-row items-stretch h-full w-full">
        {/* Left Side */}
        <div className="md:w-1/2 bg-[#2392C3] text-white p-8 md:p-16 flex flex-col justify-center">
          <p className="uppercase text-sm text-gray-200 tracking-wide">
            Read Testimonials
          </p>
          <h3 className="text-2xl md:text-3xl font-bold mt-2 leading-tight">
            It’s always a joy to hear that the work we do has positively reviews
          </h3>
        </div>

        {/* Right Side (Slider) */}
        <div className="md:w-1/2 bg-[#1E3A4C] text-white p-8 md:p-16 flex flex-col justify-center">
          {/* Quoted Text */}
          <div className="relative text-lg md:text-xl italic">
            <FaQuoteLeft className="absolute -left-6 top-0 text-[#2392C3] text-xl" />
            {testimonialsData[currentTestimonial].quote}
            <FaQuoteRight className="absolute -right-6 bottom-0 text-[#2392C3] text-xl" />
          </div>

          {/* Author & Role */}
          <div className="mt-4">
            <strong>{testimonialsData[currentTestimonial].author}</strong>
            <br />
            <span className="text-gray-300 text-sm">
              {testimonialsData[currentTestimonial].role}
            </span>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center items-center mt-6 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentTestimonial === index
                    ? "bg-[#30B94F]"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

        {/* ======================================
            White Spacer Before Footer
        ====================================== */}
        <section className="py-8 bg-white"></section>
      </main>

      {/* Footer */}
    </div>
  );
};

export default Home;
