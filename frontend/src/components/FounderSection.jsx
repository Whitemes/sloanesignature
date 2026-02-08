import React from 'react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const FounderSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/34747078/pexels-photo-34747078.jpeg"
                alt="Precious The Planner"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
          
          <div>
            <p className="text-sm tracking-[0.3em] text-gray-500 mb-4 uppercase">The Founder</p>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-6 text-gray-900">
              PRECIOUS <span className="italic">the</span> PLANNER
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Precious Thamaga-Mazibuko <span className="italic">(Dip: Event Management; Dip: Project Management)</span> commonly 
                known as <span className="italic">Precious The Planner</span> is regarded as one of Africa's top and sought after 
                Wedding Planner & Event Designer.
              </p>
              
              <p>
                As the Founder of Precious Celebrations, she has planned & produced well over 300 weddings, 
                corporate events and private celebrations in South Africa, Botswana, Swaziland, Zambia and Mauritius. 
                With a solid industry experience of well over 17 years (8yrs in Corporate + 9yrs as an entrepreneur) 
                in the hospitality, eventing, public relations, telecommunication, retail and wedding industry.
              </p>
            </div>
            
            <Button 
              onClick={() => navigate('/about')}
              className="mt-8 bg-gray-800 hover:bg-gray-700 text-white px-8 py-6 text-base tracking-wider transition-all duration-300 hover:scale-105"
            >
              MORE ABOUT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;