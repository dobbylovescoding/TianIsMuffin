import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-blue-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 z-0"></div>
      
      {/* Floating muffin decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-100 opacity-30"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 20}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div 
            className={`max-w-xl text-center md:text-left transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Meet <span className="text-amber-300">Tian</span>, <br />
              The Muffin Man
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Crafting the most delicious muffins in town with love, creativity, 
              and a sprinkle of magic since 2020.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#muffins" className="btn btn-secondary">
                See The Muffins
              </a>
              <a href="#contact" className="btn bg-white text-blue-600 hover:bg-blue-50">
                Order Now
              </a>
            </div>
          </div>
          
          <div 
            className={`relative transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-white rounded-full overflow-hidden border-8 border-amber-100">
              <img 
                src="//s3-us-west-1.amazonaws.com/s3b-usw-1-production/175/1195/file-01968e05cdbe782f885362450fc035e9-big.png" 
                alt="Tian the Muffin Man" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-4 rounded-full font-bold shadow-lg">
              Muffin Master
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={36} />
      </a>
    </section>
  );
};

export default Hero;
