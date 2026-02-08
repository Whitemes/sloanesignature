import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const BrandSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-sm tracking-[0.3em] text-gray-500 mb-4 uppercase">The Brand</p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8 text-gray-900">
              REDEFINING THE ART OF WEDDING PLANNING & EVENT DESIGN
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                With unsurpassed attention to detail, personalised service, our work and how we deliver is 
                leveraged by our passion, expertise and professionalism. You can rely on us for a perfectly 
                orchestrated celebration and brand experience that your guests and stakeholders will remember 
                for a lifetime.
              </p>
              
              <p>
                Precious Celebrations is a South African female-owned business that was established in 2011. 
                The agency is designed to offer our discerning clients personalised service through creativity 
                and uniqueness based on their preference, objectives and taste. We have a highly passionate, 
                creative and talented team that you can trust to plan, design and execute your celebration 
                that will exceed your expectations.
              </p>
              
              <p>
                Our work and how we deliver for you is leveraged by our relationships with key, premium creative 
                partners that share our passion and professionalism.
              </p>
            </div>
            
            <Button 
              onClick={() => navigate('/about')}
              className="mt-8 bg-gray-800 hover:bg-gray-700 text-white px-8 py-6 text-base tracking-wider transition-all duration-300 hover:scale-105"
            >
              MORE ABOUT
            </Button>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-lg shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1712314947761-a8d718bd8c32"
                alt="Luxury Event"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;