import React from 'react';

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: 'PT Astra Agro', logo: '/api/placeholder/150/80?text=Astra+Agro' },
  { id: 2, name: 'PT Sinar Mas', logo: '/api/placeholder/150/80?text=Sinar+Mas' },
  { id: 3, name: 'PT Wilmar', logo: '/api/placeholder/150/80?text=Wilmar' },
  { id: 4, name: 'PT Musim Mas', logo: '/api/placeholder/150/80?text=Musim+Mas' },
  { id: 5, name: 'PT BGA Group', logo: '/api/placeholder/150/80?text=BGA+Group' },
  { id: 6, name: 'PT First Resources', logo: '/api/placeholder/150/80?text=First+Resources' },
  { id: 7, name: 'PT Salim Ivomas', logo: '/api/placeholder/150/80?text=Salim+Ivomas' },
  { id: 8, name: 'PT Dharma Satya', logo: '/api/placeholder/150/80?text=Dharma+Satya' },
  { id: 9, name: 'PT Eagle High', logo: '/api/placeholder/150/80?text=Eagle+High' },
  { id: 10, name: 'PT Asian Agri', logo: '/api/placeholder/150/80?text=Asian+Agri' }
];

export function PartnersSlider() {
  // Duplicate the partners array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-serif text-gray-800 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading companies in the palm oil industry to deliver 
            exceptional value and maintain the highest standards of quality.
          </p>
        </div>
      </div>

      {/* Partners Slider */}
      <div className="relative">
        <div className="flex animate-scroll whitespace-nowrap">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ minWidth: '200px' }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Partner Statistics */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="card p-6">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
            <p className="text-gray-600">Global Partners</p>
          </div>
          <div className="card p-6">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">15</h3>
            <p className="text-gray-600">Countries Served</p>
          </div>
          <div className="card p-6">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">1M+</h3>
            <p className="text-gray-600">Tons Processed</p>
          </div>
          <div className="card p-6">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">25+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}