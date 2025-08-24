import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold font-serif mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Premium crude palm oil and derivatives engineered to meet 
              the highest quality standards for diverse industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Featured Product
              </span>
              <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
                Premium Crude Palm Oil (CPO)
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our flagship product - high-quality crude palm oil produced using 
                sustainable practices and state-of-the-art processing technology. 
                Perfect for food manufacturing, cosmetics, and biodiesel production.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Quality Specifications</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• FFA: Max 5%</li>
                    <li>• Moisture: Max 0.1%</li>
                    <li>• Iodine Value: 50-55</li>
                    <li>• Melting Point: 33-39°C</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Certifications</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• RSPO Certified</li>
                    <li>• ISO 22000</li>
                    <li>• HACCP Compliant</li>
                    <li>• Non-GMO Verified</li>
                  </ul>
                </div>
              </div>
              <button className="btn-primary">
                Request Product Specifications
              </button>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/400?text=Premium+CPO+Product"
                alt="Premium Crude Palm Oil"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Sustainable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
              Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of palm oil products and derivatives 
              designed to meet diverse industry requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Crude Palm Oil */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Crude Palm Oil (CPO)</h3>
              <p className="text-gray-600 mb-6">
                High-quality crude palm oil suitable for refining and 
                various industrial applications with consistent quality standards.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 mb-6">
                <li>• Multiple grades available</li>
                <li>• Bulk and retail packaging</li>
                <li>• Custom specifications</li>
              </ul>
            </div>

            {/* Refined Palm Oil */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Refined Palm Oil (RPO)</h3>
              <p className="text-gray-600 mb-6">
                Premium refined palm oil processed to remove impurities, 
                ideal for food manufacturing and cooking applications.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 mb-6">
                <li>• Food grade quality</li>
                <li>• Extended shelf life</li>
                <li>• Neutral taste and odor</li>
              </ul>
            </div>

            {/* Palm Kernel Oil */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Palm Kernel Oil (PKO)</h3>
              <p className="text-gray-600 mb-6">
                Extracted from palm kernel with unique properties, 
                perfect for confectionery and cosmetic applications.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 mb-6">
                <li>• High lauric acid content</li>
                <li>• Cosmetic grade available</li>
                <li>• Specialty applications</li>
              </ul>
            </div>

            {/* Palm Stearin */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Palm Stearin</h3>
              <p className="text-gray-600 mb-6">
                Solid fraction of palm oil with excellent properties 
                for margarine, shortening, and industrial applications.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 mb-6">
                <li>• High melting point</li>
                <li>• Industrial applications</li>
                <li>• Biodiesel production</li>
              </ul>
            </div>

            {/* Palm Olein */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H14" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Palm Olein</h3>
              <p className="text-gray-600 mb-6">
                Liquid fraction of palm oil, perfect for cooking oil 
                and food processing with excellent stability.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 mb-6">
                <li>• Cooking applications</li>
                <li>• Food processing</li>
                <li>• Extended frying life</li>
              </ul>
            </div>

            {/* By-Products */}
            <div className="card p-8 text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                <svg className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">By-Products</h3>
              <p className="text-gray-600 mb-6">
                Value-added by-products including palm kernel cake, 
                shell, and fiber for various industrial uses.
              </p>
              <ul className="text-gray-600 text-sm space-y-1 mb-6">
                <li>• Palm kernel cake</li>
                <li>• Empty fruit bunches</li>
                <li>• Biomass products</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
              Quality Standards & Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our products meet international quality standards and 
              are backed by comprehensive certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">RSPO Certified</h4>
              <p className="text-gray-600 text-sm">
                Roundtable on Sustainable Palm Oil certification ensuring 
                responsible production practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">ISO 22000</h4>
              <p className="text-gray-600 text-sm">
                Food Safety Management System certification ensuring 
                safe food production processes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">HACCP</h4>
              <p className="text-gray-600 text-sm">
                Hazard Analysis Critical Control Points system 
                for food safety risk management.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-2">Non-GMO</h4>
              <p className="text-gray-600 text-sm">
                Verified non-genetically modified products meeting 
                organic and natural product requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">
            Interested in Our Products?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our sales team to learn more about our product specifications, 
            pricing, and availability for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              Request Quote
            </button>
            <a 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}