import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WelcomeSection from '../components/WelcomeSection';
import BrandSection from '../components/BrandSection';
import FounderSection from '../components/FounderSection';
import Footer from '../components/Footer';

const Home = () => {
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
      <Hero />
      <WelcomeSection />
      <BrandSection />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default Home;