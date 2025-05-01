import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MuffinGallery from './components/MuffinGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream text-brown-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MuffinGallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;