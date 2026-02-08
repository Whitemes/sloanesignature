import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1708569176850-9de9aa6b179b)',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white font-serif text-6xl md:text-7xl lg:text-8xl mb-4 tracking-wider animate-fade-in">
          PRECIOUS CELEBRATIONS
        </h1>
        <p className="text-white text-xl md:text-2xl tracking-[0.3em] font-light animate-fade-in-delay">
          WEDDINGS & EVENTS
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;