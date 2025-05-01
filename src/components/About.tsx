import React, { useEffect, useRef } from 'react';
import { Cake, Trophy, Clock, Heart } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-brown-700">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" className="section bg-cream" ref={sectionRef}>
      <div className="container-custom">
        <h2 className="section-title animate-on-scroll">About Tian</h2>
        
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-center">
          <div className="md:w-1/2 animate-on-scroll opacity-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">The Story Behind The Muffin Man</h3>
            <p className="text-lg mb-6 text-brown-800">
              What started as a weekend hobby during college has blossomed into Tian's 
              full-time passion. As a self-taught baker with an engineering background, 
              Tian brings precision and creativity to every recipe.
            </p>
            <p className="text-lg text-brown-800">
              After his blueberry-lemon muffins went viral on social media in 2022, 
              the demand for "The Muffin Man" creations skyrocketed. Today, Tian's 
              small-batch, handcrafted muffins bring joy to customers across the city, 
              with each recipe perfected through countless iterations.
            </p>
          </div>
          
          <div className="md:w-1/2 animate-on-scroll opacity-0">
            <div className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute -top-6 -right-6 bg-amber-500 text-white p-4 rounded-full text-xs">
                Muffin <br /> Maestro
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-2">Muffin Philosophy:</h4>
                <p className="italic text-brown-700">
                  "A perfect muffin balances moisture, flavor, and texture. It should surprise 
                  you with its complexity while comforting you with its familiarity."
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-2">By The Numbers:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-3xl font-bold text-blue-600">50+</p>
                    <p className="text-sm text-brown-600">Unique Recipes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">10,000+</p>
                    <p className="text-sm text-brown-600">Muffins Baked</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">4.9/5</p>
                    <p className="text-sm text-brown-600">Customer Rating</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-blue-600">7</p>
                    <p className="text-sm text-brown-600">Baking Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature 
            icon={<Cake size={24} />}
            title="Premium Ingredients"
            description="Only the finest locally-sourced ingredients make it into our muffins."
          />
          <Feature 
            icon={<Trophy size={24} />}
            title="Award Winning"
            description="Multiple awards for our signature blueberry-lemon muffin."
          />
          <Feature 
            icon={<Clock size={24} />}
            title="Freshly Baked"
            description="Baked fresh every morning for maximum flavor and texture."
          />
          <Feature 
            icon={<Heart size={24} />}
            title="Made With Love"
            description="Each muffin is crafted by hand with care and attention to detail."
          />
        </div>
      </div>
    </section>
  );
};

export default About;