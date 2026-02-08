import React from 'react';

const WelcomeSection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] text-gray-500 mb-6 uppercase">Welcome to Precious Celebrations</p>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12 text-gray-900">
          Inspired by beautiful spaces, lush flowers and unmatched luxury celebrations
        </h2>
        
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
          We are world-renowned for planning and designing the most unforgettable and dreamy celebrations. 
          The brand specializes in producing luxury weddings, brand experiences, destination weddings and 
          private celebrations.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;