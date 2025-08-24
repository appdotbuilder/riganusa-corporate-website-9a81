import React from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function History() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold font-serif mb-6">
              Our History
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A journey of over 25 years in the palm oil industry, built on trust, 
              innovation, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
              Milestones in Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a leading player in the global palm oil market, 
              our history is marked by continuous growth and innovation.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-500"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 1998 - Foundation */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  1998
                </div>
                <div className="ml-8 card p-6 flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Company Foundation</h3>
                  <p className="text-gray-600 mb-4">
                    Riganusa was established with a vision to become Indonesia's leading 
                    palm oil company. Started with a small processing facility and a 
                    commitment to quality that would define our future.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• First processing facility established</li>
                    <li>• Initial team of 50 dedicated employees</li>
                    <li>• Focus on local market supply</li>
                  </ul>
                </div>
              </div>

              {/* 2003 - First International Export */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  2003
                </div>
                <div className="ml-8 card p-6 flex-1">
                  <h3 className="text-2xl font-semibold mb-3">International Expansion</h3>
                  <p className="text-gray-600 mb-4">
                    Achieved our first major international export contract, marking 
                    the beginning of our global expansion. This milestone opened 
                    doors to new markets and opportunities.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• First export to Singapore and Malaysia</li>
                    <li>• International quality certifications obtained</li>
                    <li>• Expanded processing capacity by 200%</li>
                  </ul>
                </div>
              </div>

              {/* 2008 - Sustainability Initiative */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  2008
                </div>
                <div className="ml-8 card p-6 flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Sustainability Focus</h3>
                  <p className="text-gray-600 mb-4">
                    Launched our comprehensive sustainability program, becoming one 
                    of the first companies in the region to adopt RSPO standards 
                    and environmental protection measures.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• RSPO certification achieved</li>
                    <li>• Zero-deforestation policy implemented</li>
                    <li>• Community development programs launched</li>
                  </ul>
                </div>
              </div>

              {/* 2012 - Technology Innovation */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  2012
                </div>
                <div className="ml-8 card p-6 flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Technology Revolution</h3>
                  <p className="text-gray-600 mb-4">
                    Invested heavily in cutting-edge processing technology and 
                    automation systems, significantly improving efficiency and 
                    product quality while reducing environmental impact.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• State-of-the-art processing equipment installed</li>
                    <li>• Automated quality control systems implemented</li>
                    <li>• 40% increase in processing efficiency</li>
                  </ul>
                </div>
              </div>

              {/* 2018 - Global Network */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  2018
                </div>
                <div className="ml-8 card p-6 flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Global Network Expansion</h3>
                  <p className="text-gray-600 mb-4">
                    Established strategic partnerships across 15 countries, 
                    creating a robust global supply chain network that ensures 
                    reliable delivery to customers worldwide.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Partnerships in 15 countries established</li>
                    <li>• Regional offices opened in key markets</li>
                    <li>• Supply chain optimization completed</li>
                  </ul>
                </div>
              </div>

              {/* 2023 - Present */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  2023
                </div>
                <div className="ml-8 card p-6 flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Industry Leadership</h3>
                  <p className="text-gray-600 mb-4">
                    Today, Riganusa stands as a recognized leader in the palm oil 
                    industry, processing over 1 million tons annually and serving 
                    customers across the globe with unwavering commitment to quality.
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 1M+ tons processed annually</li>
                    <li>• 50+ global partners</li>
                    <li>• Leading sustainability practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif text-gray-800 mb-6">
                Building on Our Legacy
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our 25-year journey has been defined by continuous innovation, 
                unwavering commitment to quality, and deep respect for the 
                communities and environments we serve.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As we look to the future, we remain dedicated to pushing the 
                boundaries of what's possible in palm oil production while 
                maintaining the values that have brought us this far.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-gray-600">Dedicated Employees</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/api/placeholder/600/400?text=Historical+Facility+Photo"
                alt="Historical Company Photo"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600">Est. 1998</div>
                <div className="text-sm text-gray-600">Building Tomorrow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">
            Be Part of Our Continuing Story
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join us as we continue to innovate, grow, and lead the palm oil 
            industry toward a more sustainable and prosperous future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              Contact Us
            </button>
            <a 
              href="/about/vision-mission" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              Our Vision & Mission
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}