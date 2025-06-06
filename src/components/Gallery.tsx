
import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'studio', label: 'Studio Sessions' },
    { id: 'performance', label: 'Performances' },
    { id: 'personal', label: 'Personal' },
    { id: 'rare', label: 'Rare Archives' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'studio',
      title: 'Recording Session 1995',
      description: 'Tupac during the recording of "Me Against the World"',
      placeholder: 'photo-1526374965328-7f61d4dc18c5'
    },
    {
      id: 2,
      category: 'performance',
      title: 'Live Performance',
      description: 'Performing at House of Blues, 1996',
      placeholder: 'photo-1470813740244-df37b8c1edcb'
    },
    {
      id: 3,
      category: 'rare',
      title: 'Behind the Scenes',
      description: 'Rare behind-the-scenes moment',
      placeholder: 'photo-1500673922987-e212871fec22'
    },
    {
      id: 4,
      category: 'personal',
      title: 'Candid Moment',
      description: 'Personal moment captured',
      placeholder: 'photo-1527576539890-dfa815648363'
    },
    {
      id: 5,
      category: 'studio',
      title: 'Creative Process',
      description: 'In the studio working on new material',
      placeholder: 'photo-1526374965328-7f61d4dc18c5'
    },
    {
      id: 6,
      category: 'performance',
      title: 'Stage Presence',
      description: 'Commanding the stage with raw energy',
      placeholder: 'photo-1470813740244-df37b8c1edcb'
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Visual Archives</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of rare photographs and moments capturing the essence of Tupac's journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-tupac-gold text-tupac-black'
                  : 'glass-effect text-foreground hover:text-tupac-gold'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square bg-gradient-to-br from-tupac-maroon to-tupac-black">
                <img
                  src={`https://images.unsplash.com/${item.placeholder}?auto=format&fit=crop&w=600&q=80`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-tupac-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-playfair font-semibold text-tupac-gold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-tupac-gold transition-colors duration-300"
            >
              <X size={32} />
            </button>
            
            <div className="max-w-4xl max-h-full">
              <img
                src={`https://images.unsplash.com/${filteredItems[selectedImage].placeholder}?auto=format&fit=crop&w=1200&q=80`}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4">
                <h3 className="text-2xl font-playfair font-semibold text-tupac-gold mb-2">
                  {filteredItems[selectedImage].title}
                </h3>
                <p className="text-foreground">{filteredItems[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
