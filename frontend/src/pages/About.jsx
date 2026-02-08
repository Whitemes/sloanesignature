import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation scrolled={scrolled} />
      <div className="pt-20 pb-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl font-serif text-center mb-8 mt-16">About Precious Celebrations</h1>
        <div className="prose prose-lg mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            Precious Celebrations is a South African female-owned business that was established in 2011. 
            The agency is designed to offer our discerning clients personalised service through creativity 
            and uniqueness based on their preference, objectives and taste.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We have a highly passionate, creative and talented team that you can trust to plan, design and 
            execute your celebration that will exceed your expectations.
          </p>
          <p className="text-lg leading-relaxed">
            Our work and how we deliver for you is leveraged by our relationships with key, premium creative 
            partners that share our passion and professionalism.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;