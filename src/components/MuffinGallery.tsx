import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Muffin {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  tags: string[];
}

const muffins: Muffin[] = [
  {
    id: 1,
    name: "Classic Blueberry",
    description: "Bursting with fresh blueberries and topped with a crunchy streusel.",
    image: "https://images.pexels.com/photos/635409/pexels-photo-635409.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$4.50",
    tags: ["Bestseller", "Classic"]
  },
  {
    id: 2,
    name: "Double Chocolate Chip",
    description: "Rich chocolate muffin loaded with chocolate chips inside and out.",
    image: "https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&w=800",
    price: "$4.75",
    tags: ["Chocolate", "Rich"]
  },
  {
    id: 3,
    name: "Lemon Poppy Seed",
    description: "Bright lemon flavor with crunchy poppy seeds and a tangy glaze.",
    image: "https://images.pexels.com/photos/13559363/pexels-photo-13559363.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$4.50",
    tags: ["Tangy", "Light"]
  },
  {
    id: 4,
    name: "Banana Walnut",
    description: "Made with ripe bananas and toasted walnuts for a hearty breakfast treat.",
    image: "https://images.pexels.com/photos/830894/pexels-photo-830894.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$4.75",
    tags: ["Nutty", "Wholesome"]
  },
  {
    id: 5,
    name: "Pumpkin Spice",
    description: "Seasonal favorite with warm spices and a cream cheese swirl.",
    image: "https://images.pexels.com/photos/15513460/pexels-photo-15513460/free-photo-of-pumpkin-muffins-with-cinnamon.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$5.00",
    tags: ["Seasonal", "Spiced"]
  },
  {
    id: 6,
    name: "Strawberry Cheesecake",
    description: "Sweet strawberry muffin with a creamy cheesecake center.",
    image: "https://images.pexels.com/photos/5765853/pexels-photo-5765853.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "$5.25",
    tags: ["Premium", "Dessert"]
  }
];

const MuffinGallery: React.FC = () => {
  const [selectedMuffin, setSelectedMuffin] = useState<Muffin | null>(null);
  
  return (
    <section id="muffins" className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title">Tian's Muffin Creations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {muffins.map((muffin) => (
            <div 
              key={muffin.id}
              className="muffin-card group"
              onClick={() => setSelectedMuffin(muffin)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={muffin.image} 
                  alt={muffin.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white py-1 px-3 rounded-full text-sm font-bold">
                  {muffin.price}
                </div>
                {muffin.tags.map((tag, index) => (
                  <div 
                    key={index}
                    className="absolute bottom-4 left-4 bg-blue-600 text-white py-1 px-3 rounded-full text-xs font-medium mr-2"
                    style={{ transform: `translateX(${index * 110}%)` }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors">
                  {muffin.name}
                </h3>
                <p className="text-brown-700">{muffin.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a href="#contact" className="btn btn-primary">
            Order Muffins Now
          </a>
        </div>
      </div>
      
      {/* Muffin Detail Modal */}
      {selectedMuffin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 fade-in">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full relative">
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-md z-10"
              onClick={() => setSelectedMuffin(null)}
            >
              <X size={24} className="text-brown-900" />
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src={selectedMuffin.image} 
                  alt={selectedMuffin.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{selectedMuffin.name}</h3>
                  <span className="bg-amber-500 text-white py-1 px-3 rounded-full text-sm font-bold">
                    {selectedMuffin.price}
                  </span>
                </div>
                
                <p className="text-brown-700 mb-6">{selectedMuffin.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Ingredients:</h4>
                  <p className="text-brown-700">
                    Flour, Sugar, Butter, Eggs, Milk, Baking Powder, 
                    Salt, Vanilla Extract, and our special ingredient mix.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedMuffin.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href="#contact" className="btn btn-primary w-full">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MuffinGallery;