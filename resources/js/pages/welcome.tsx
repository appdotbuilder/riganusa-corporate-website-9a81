import React from 'react';
import { Header } from '@/components/header';
import { HeroSlider } from '@/components/hero-slider';
import { Footer } from '@/components/footer';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <HeroSlider />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
                Leading the Future of 
                <span className="text-blue-600"> Palm Oil Industry</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Riganusa stands as Indonesia's premier crude palm oil company, committed to 
                delivering sustainable and high-quality palm oil solutions that meet global 
                standards while supporting local communities and environmental conservation.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Sustainable Production Practices</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">International Quality Standards</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Global Supply Chain Network</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Environmental Responsibility</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/about/history" className="btn-primary inline-block text-center">
                  Learn About Us
                </a>
                <a href="/services" className="btn-secondary inline-block text-center">
                  Our Services
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/400?text=Palm+Oil+Production+Facility"
                alt="Palm Oil Production Facility"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
              Comprehensive Palm Oil Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From plantation to processing, we provide end-to-end palm oil solutions 
              that ensure quality, sustainability, and reliability at every step.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Trading</h3>
              <p className="text-gray-600 mb-6">
                Extensive international trading network ensuring reliable supply 
                chain management and competitive pricing worldwide.
              </p>
              <a href="/services" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Learn More →
              </a>
            </div>

            {/* Service 2 */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600 mb-6">
                Rigorous quality control processes and international certifications 
                ensuring the highest standards in every product.
              </p>
              <a href="/services" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Learn More →
              </a>
            </div>

            {/* Service 3 */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600 mb-6">
                Committed to sustainable practices that protect the environment 
                while supporting local communities and biodiversity.
              </p>
              <a href="/services" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div className="fade-in">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-blue-100">Tons Processed Annually</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Global Partners</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            <div className="fade-in">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how Riganusa can provide reliable, sustainable, and high-quality 
            crude palm oil solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Get In Touch
            </button>
            <a href="/products" className="btn-secondary">
              View Our Products
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}