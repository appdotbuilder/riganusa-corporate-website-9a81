import React, { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/api/placeholder/600/400?text=Palm+Plantation+Aerial+View',
    title: 'Palm Plantation Aerial View',
    category: 'Plantations',
    description: 'Sustainable palm oil plantation with organized rows of palm trees'
  },
  {
    id: 2,
    src: '/api/placeholder/600/400?text=Processing+Facility+Interior',
    title: 'Modern Processing Facility',
    category: 'Facilities',
    description: 'State-of-the-art palm oil processing equipment'
  },
  {
    id: 3,
    src: '/api/placeholder/600/400?text=Quality+Control+Laboratory',
    title: 'Quality Control Laboratory',
    category: 'Quality',
    description: 'Advanced laboratory for quality testing and analysis'
  },
  {
    id: 4,
    src: '/api/placeholder/600/400?text=Fresh+Fruit+Bunches',
    title: 'Fresh Fruit Bunches',
    category: 'Products',
    description: 'High-quality fresh fruit bunches ready for processing'
  },
  {
    id: 5,
    src: '/api/placeholder/600/400?text=Sustainability+Program',
    title: 'Community Development',
    category: 'Sustainability',
    description: 'Local community engagement and development programs'
  },
  {
    id: 6,
    src: '/api/placeholder/600/400?text=Storage+Tanks',
    title: 'Storage Facilities',
    category: 'Facilities',
    description: 'Large capacity storage tanks for refined palm oil'
  },
  {
    id: 7,
    src: '/api/placeholder/600/400?text=Palm+Oil+Refining',
    title: 'Refining Process',
    category: 'Processing',
    description: 'Advanced refining technology for premium quality oil'
  },
  {
    id: 8,
    src: '/api/placeholder/600/400?text=Environmental+Conservation',
    title: 'Environmental Conservation',
    category: 'Sustainability',
    description: 'Wildlife conservation efforts in plantation areas'
  },
  {
    id: 9,
    src: '/api/placeholder/600/400?text=Logistics+Operations',
    title: 'Logistics Operations',
    category: 'Operations',
    description: 'Efficient transportation and logistics network'
  },
  {
    id: 10,
    src: '/api/placeholder/600/400?text=Team+Meeting',
    title: 'Our Professional Team',
    category: 'People',
    description: 'Dedicated professionals working towards excellence'
  },
  {
    id: 11,
    src: '/api/placeholder/600/400?text=Global+Export',
    title: 'Global Export Operations',
    category: 'Operations',
    description: 'International shipping and export facilities'
  },
  {
    id: 12,
    src: '/api/placeholder/600/400?text=Innovation+Center',
    title: 'Research & Innovation',
    category: 'Innovation',
    description: 'Research and development center for new technologies'
  }
];

const categories = ['All', 'Plantations', 'Facilities', 'Processing', 'Quality', 'Sustainability', 'Operations', 'People', 'Innovation', 'Products'];

export default function Galleries() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold font-serif mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our operations, facilities, and commitment to sustainable 
              palm oil production through our comprehensive image gallery.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-800 mb-8">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openModal(image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                      <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                      <p className="text-sm">{image.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredImages.length > 12 && (
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Load More Images
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-800 mb-6">
              Our Operations in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="card p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Processing Facilities</div>
            </div>
            <div className="card p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">100K+</div>
              <div className="text-gray-600">Hectares Managed</div>
            </div>
            <div className="card p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Tons Annual Capacity</div>
            </div>
            <div className="card p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Dedicated Employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors z-60"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-60"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors z-60"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-screen object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 text-sm mb-1">{selectedImage.category}</p>
              {selectedImage.description && (
                <p className="text-gray-300 text-sm">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}