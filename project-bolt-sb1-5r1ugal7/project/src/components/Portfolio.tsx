import React, { useState } from 'react';
import { X, ExternalLink, Instagram, Eye, Skull } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Portfolio items with gothic/dark art theme
  const portfolioItems = [
    {
      id: 1,
      title: "Dark Angel Portrait",
      category: "Character Art",
      image: "https://ibb.co/C3HSYhpx?auto=compress&cs=tinysrgb&w=800",
      description: "Gothic angel with dark wings and haunting beauty"
    },
    {
      id: 2,
      title: "Crimson Shadows",
      category: "Digital Art",
      image: "https://ibb.co/TMtvWC4c?auto=compress&cs=tinysrgb&w=800",
      description: "Dark fantasy portrait with crimson lighting"
    },
    {
      id: 3,
      title: "Gothic Romance",
      category: "Illustration",
      image: "https://ibb.co/N6NRKRsM?auto=compress&cs=tinysrgb&w=800",
      description: "Romantic gothic scene with dramatic atmosphere"
    },
    {
      id: 4,
      title: "Demon's Embrace",
      category: "Character Art",
      image: "https://ibb.co/Q78jP52V?auto=compress&cs=tinysrgb&w=800",
      description: "Dark demon character with intricate details"
    },
    {
      id: 5,
      title: "Blood Moon Ritual",
      category: "Concept Art",
      image: "https://images.pexels.com/photos/1646771/pexels-photo-1646771.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Mystical ritual scene under blood moon"
    },
    {
      id: 6,
      title: "Shadow Witch",
      category: "Character Art",
      image: "https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Powerful witch surrounded by dark magic"
    },
    {
      id: 7,
      title: "Fallen Seraph",
      category: "Digital Art",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Fallen angel with broken wings and sorrowful expression"
    },
    {
      id: 8,
      title: "Vampire's Lament",
      category: "Portrait",
      image: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Melancholic vampire portrait in moonlight"
    }
  ];

  const categories = ["All", "Character Art", "Digital Art", "Portrait", "Illustration", "Concept Art"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Gothic Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <Skull className="text-red-500 mr-4" size={32} />
            <h2 className="text-5xl md:text-7xl font-gothic font-bold text-red-500 drop-shadow-lg">
              DARK GALLERY
            </h2>
            <Skull className="text-red-500 ml-4" size={32} />
          </div>
          <p className="text-red-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Step into my realm of shadows and witness the dark beauty that flows from my digital brush. 
            Each piece tells a story of gothic romance, supernatural beings, and the beauty found in darkness.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-64" />
          </div>
        </div>

        {/* Gothic Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 border-2 ${
                activeCategory === category
                  ? 'bg-red-600 text-black border-red-400 shadow-lg shadow-red-600/30'
                  : 'bg-black/60 text-red-300 border-red-600/50 hover:bg-red-900/30 hover:text-red-200 hover:border-red-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gothic Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-black rounded-lg overflow-hidden border-2 border-red-800/30 hover:border-red-500 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-red-900/40"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-75 group-hover:brightness-90"
                />
                
                {/* Gothic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Hover overlay with eye icon */}
                <div className="absolute inset-0 bg-red-900/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <Eye className="text-red-200 animate-pulse" size={48} />
                </div>
                
                {/* Gothic info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-red-200 font-bold text-lg mb-1 font-gothic">{item.title}</h3>
                  <p className="text-red-400 text-sm font-semibold">{item.category}</p>
                  <p className="text-red-300 text-xs mt-1 opacity-80">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gothic Instagram Link */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-black/60 border-2 border-red-600/50 rounded-lg px-8 py-4 hover:border-red-400 hover:bg-red-900/20 transition-all duration-300">
            <Instagram className="text-red-400" size={28} />
            <div>
              <p className="text-red-200 font-bold text-lg">See More Dark Art</p>
              <a
                href="https://www.instagram.com/rosary_delight"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors duration-200 flex items-center space-x-2"
              >
                <span>@rosary_delight</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gothic Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 text-red-400 hover:text-red-300 transition-colors duration-200 bg-black/60 rounded-full p-2 border-2 border-red-600/50"
            >
              <X size={32} />
            </button>
            <div className="border-4 border-red-600/50 rounded-lg overflow-hidden shadow-2xl shadow-red-900/50">
              <img
                src={selectedImage}
                alt="Artwork"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
