import React from 'react';
import { CupSoda, ArrowUp, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-brown-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <CupSoda className="h-8 w-8 text-amber-500" />
              <span className="font-display text-xl font-bold">Tian the Muffin Man</span>
            </div>
            <p className="text-brown-300 mb-6 max-w-md">
              Crafting the most delicious muffins in town with love, 
              creativity, and a sprinkle of magic since 2020.
            </p>
            <p className="text-brown-400 text-sm">
              © {new Date().getFullYear()} Tian the Muffin Man. All rights reserved.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-brown-300 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-brown-300 hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#muffins" className="text-brown-300 hover:text-white transition-colors">Muffins</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-brown-300 hover:text-white transition-colors">Testimonials</a>
                </li>
                <li>
                  <a href="#contact" className="text-brown-300 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-brown-300 hover:text-white transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-brown-300 hover:text-white transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-brown-300 hover:text-white transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-brown-300 hover:text-white transition-colors flex items-center gap-2">
                    <Instagram size={16} />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brown-300 hover:text-white transition-colors flex items-center gap-2">
                    <Facebook size={16} />
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-brown-300 hover:text-white transition-colors flex items-center gap-2">
                    <Twitter size={16} />
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-brown-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brown-400 text-sm mb-4 md:mb-0">
            Made with ❤️ by Tian the Muffin Man
          </p>
          
          <button 
            className="bg-brown-800 hover:bg-brown-700 text-white p-3 rounded-full transition-colors"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;