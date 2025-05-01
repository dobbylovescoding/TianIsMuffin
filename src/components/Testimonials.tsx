import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Regular Customer",
    content: "Tian's blueberry muffins changed my definition of what a muffin should be. The texture is perfect—moist inside with that irresistible crispy top. I order a dozen every week!",
    rating: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Food Blogger",
    content: "As someone who reviews bakeries professionally, I can confidently say that Tian's muffins are in the top 1% I've ever tasted. The banana walnut muffin has the perfect balance of flavors.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    name: "Sarah Rodriguez",
    role: "Office Manager",
    content: "We order Tian's muffins for our team meetings and they're always the highlight of the day. The pumpkin spice ones literally caused arguments over who got the last one!",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    name: "David Williams",
    role: "Coffee Shop Owner",
    content: "We started carrying Tian's muffins at our coffee shop six months ago and they sell out every single day. Our customers specifically come in asking for them by name.",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<number | null>(null);
  
  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  useEffect(() => {
    timerRef.current = window.setInterval(goToNext, 6000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  
  return (
    <section id="testimonials" className="section bg-blue-100">
      <div className="container-custom">
        <h2 className="section-title">What Customers Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:-left-20 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              className="bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors"
              onClick={goToPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-blue-600" />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                display: 'flex',
              }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <div className="p-8 flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold text-center">{testimonial.name}</h3>
                        <p className="text-brown-600 text-center">{testimonial.role}</p>
                        <div className="flex items-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              size={16} 
                              className={i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="md:w-2/3 relative">
                        <Quote size={40} className="absolute -top-2 -left-2 text-blue-100 rotate-180" />
                        <p className="text-lg text-brown-800 italic relative z-10 pt-6">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute right-0 md:-right-20 top-1/2 transform -translate-y-1/2 z-10">
            <button 
              className="bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-blue-600" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? 'bg-blue-600 w-6' : 'bg-blue-300'
                }`}
                onClick={() => {
                  setIsAnimating(true);
                  setCurrentIndex(i);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;