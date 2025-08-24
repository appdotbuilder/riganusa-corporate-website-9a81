import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PartnersSlider } from '@/components/partners-slider';

export default function Partners() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold font-serif mb-6">
              Our Strategic Partners
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building strong partnerships across the global palm oil industry to deliver 
              exceptional value and maintain the highest standards of quality and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Slider Section */}
      <PartnersSlider />

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
              Why Partner with Riganusa?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our partnerships are built on trust, quality, and mutual success. 
              We offer comprehensive solutions that benefit all stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Reliable Supply</h3>
              <p className="text-gray-600">
                Consistent and dependable supply chain management ensuring your 
                operations never face shortages or delays.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous quality control processes and international certifications 
                ensure premium products that meet global standards.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Strategic Support</h3>
              <p className="text-gray-600">
                Comprehensive business support including market insights, 
                technical assistance, and customized solutions.
              </p>
            </div>
          </div>

          {/* Partnership Types */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-serif text-gray-800 mb-6">
                Partnership Categories
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Plantation Partners</h4>
                    <p className="text-gray-600">
                      Direct partnerships with palm oil plantations ensuring sustainable 
                      sourcing and fair trade practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Processing Facilities</h4>
                    <p className="text-gray-600">
                      Collaboration with state-of-the-art processing facilities to 
                      maintain quality and efficiency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Distribution Networks</h4>
                    <p className="text-gray-600">
                      Strategic distribution partnerships enabling global reach 
                      and efficient logistics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Technology Providers</h4>
                    <p className="text-gray-600">
                      Innovation partnerships with technology companies for 
                      advanced processing and sustainability solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/api/placeholder/600/400?text=Partnership+Meeting"
                alt="Partnership Meeting"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
              Partnership Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real examples of how our partnerships have created value and 
              driven success across the palm oil industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <img
                  src="/api/placeholder/80/80?text=Partner+Logo"
                  alt="Partner Logo"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">PT Sustainable Plantations</h4>
                  <p className="text-gray-600">Plantation Partner</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Our partnership with Riganusa has transformed our operations. 
                Their commitment to sustainability and fair pricing has enabled 
                us to expand our operations while maintaining environmental standards."
              </p>
              <div className="flex items-center text-blue-600">
                <span className="font-semibold">40% increase in productivity</span>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center mb-6">
                <img
                  src="/api/placeholder/80/80?text=Global+Foods"
                  alt="Partner Logo"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-lg">Global Foods International</h4>
                  <p className="text-gray-600">Distribution Partner</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Riganusa's reliability and quality consistency has made them our 
                preferred supplier. Their global network perfectly complements our 
                distribution capabilities."
              </p>
              <div className="flex items-center text-blue-600">
                <span className="font-semibold">25% cost reduction achieved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Network */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">
            Join Our Partner Network
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Become part of our growing network of successful partners and unlock 
            new opportunities in the global palm oil market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Become a Partner
            </button>
            <a 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}