import React, { useState, useEffect } from 'react';
import { CupSoda, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Muffins", href: "#muffins" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <CupSoda className="h-8 w-8 text-amber-500" />
            <span className="font-display text-xl md:text-2xl font-bold">Tian the Muffin Man</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-brown-900 hover:text-amber-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary">
              Order Now
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brown-900"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 fade-in">
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-brown-900 hover:text-amber-600 py-2 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn btn-primary w-full mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;