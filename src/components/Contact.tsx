import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  muffinType: string;
  quantity: number;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    muffinType: 'Classic Blueberry',
    quantity: 6
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          muffinType: 'Classic Blueberry',
          quantity: 6
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section bg-cream">
      <div className="container-custom">
        <h2 className="section-title">Order Muffins</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            {isSubmitted ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p className="text-lg mb-6">
                  Your order has been received! Tian will be in touch with you shortly 
                  to confirm your muffin details and delivery options.
                </p>
                <p className="text-brown-600 italic">
                  Get ready for some delicious muffins!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brown-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-brown-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brown-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-brown-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-brown-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-brown-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="muffinType" className="block text-sm font-medium text-brown-700 mb-1">
                      Muffin Type
                    </label>
                    <select
                      id="muffinType"
                      name="muffinType"
                      value={formData.muffinType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-brown-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="Classic Blueberry">Classic Blueberry</option>
                      <option value="Double Chocolate Chip">Double Chocolate Chip</option>
                      <option value="Lemon Poppy Seed">Lemon Poppy Seed</option>
                      <option value="Banana Walnut">Banana Walnut</option>
                      <option value="Pumpkin Spice">Pumpkin Spice</option>
                      <option value="Strawberry Cheesecake">Strawberry Cheesecake</option>
                      <option value="Assorted">Assorted Box</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="quantity" className="block text-sm font-medium text-brown-700 mb-1">
                    Quantity (6 minimum)
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    min="6"
                    required
                    className="w-full px-4 py-2 border border-brown-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-1">
                    Special Instructions
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-brown-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Any dietary requirements or delivery instructions..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : "Place Muffin Order"}
                </button>
              </form>
            )}
          </div>
          
          <div>
            <div className="bg-blue-600 rounded-2xl shadow-md overflow-hidden text-white p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-blue-100">Phone</p>
                    <p className="text-lg">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-blue-100">Email</p>
                    <p className="text-lg">tian@muffinman.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-blue-100">Address</p>
                    <p className="text-lg">123 Muffin Lane,<br />Bakery District,<br />San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mt-8 mb-4">Follow Tian</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-blue-500 p-3 rounded-full hover:bg-blue-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-blue-500 p-3 rounded-full hover:bg-blue-400 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-blue-500 p-3 rounded-full hover:bg-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div className="bg-amber-100 rounded-2xl p-6 border-2 border-amber-200">
              <h3 className="text-xl font-bold mb-4 text-amber-800">Muffin Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>8:00 AM - 3:00 PM</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-amber-200 rounded-lg text-amber-800">
                <p className="font-medium">Note: For large orders (24+ muffins), please order at least 48 hours in advance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;